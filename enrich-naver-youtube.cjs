const fs = require("fs");
const path = require("path");

const root = __dirname;
const dataPath = path.join(root, "recipes-data.json");
const cachePath = path.join(root, "naver-youtube-source-cache.json");
const appJs = fs.readFileSync(path.join(root, "app.js"), "utf8");
const recipes = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, "utf8")) : {};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function normalize(value) {
  return String(value || "").replace(/\s+/g, "").toLowerCase();
}

function decodeHtml(value) {
  return String(value || "")
    .replace(/\\u0026/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
}

function stripTags(value) {
  return decodeHtml(String(value || "").replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function parseViews(text) {
  const value = String(text || "").replace(/,/g, "");
  const ko = value.match(/조회수\s*([\d.]+)\s*(만|천)?/);
  if (ko) {
    const base = Number(ko[1]) || 0;
    if (ko[2] === "만") return Math.round(base * 10000);
    if (ko[2] === "천") return Math.round(base * 1000);
    return Math.round(base);
  }
  const en = value.match(/([\d.]+)\s*([KMB])?\s+views/i);
  if (en) {
    const base = Number(en[1]) || 0;
    const unit = (en[2] || "").toUpperCase();
    if (unit === "K") return Math.round(base * 1000);
    if (unit === "M") return Math.round(base * 1000000);
    if (unit === "B") return Math.round(base * 1000000000);
    return Math.round(base);
  }
  return 0;
}

function priceOf(item) {
  const bare = appJs.match(new RegExp(`${escapeRegExp(item)}:\\s*(\\d+)`));
  if (bare) return Number(bare[1]);
  const quoted = appJs.match(new RegExp(`['"]${escapeRegExp(item)}['"]:\\s*(\\d+)`));
  if (quoted) return Number(quoted[1]);
  return 4500;
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function difficultyLabel(value) {
  if (value <= 1) return "쉬움";
  if (value === 2) return "보통";
  return "도전";
}

function isLikelyRelevant(query, title) {
  const q = normalize(query.replace(/^(Classic|Easy|Home-Style|Weeknight|Quick|Takeout-Style)\s+/i, ""));
  const t = normalize(title);
  if (!q || !t) return false;
  if (t.includes(q) || q.includes(t)) return true;
  const tokens = query.match(/[가-힣A-Za-z]{3,}/g) || [];
  return tokens.some((token) => t.includes(normalize(token)));
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 recipe-planner-local-source-enrichment"
    }
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.text();
}

function parseNaverBlog(html, query) {
  const urls = [...html.matchAll(/https?:\/\/blog\.naver\.com\/[A-Za-z0-9_.-]+\/\d+/g)]
    .map((match) => match[0].replace(/\\+$/, ""))
    .filter((url, index, array) => array.indexOf(url) === index);
  const selected = urls[0];
  if (!selected) return null;
  return {
    title: `${query} 네이버 블로그 대표 글`,
    url: selected
  };
}

function parseYoutubeVideos(html, query) {
  const blocks = [...html.matchAll(/"videoRenderer":\{([\s\S]*?)"ownerText"/g)].map((match) => match[1]);
  return blocks
    .map((block) => {
      const videoId = block.match(/"videoId":"([^"]+)"/)?.[1];
      const title = decodeHtml(block.match(/"title":\{"runs":\[\{"text":"([^"]+)"/)?.[1] || "");
      const viewText = decodeHtml(block.match(/"viewCountText":\{"simpleText":"([^"]+)"/)?.[1] || "");
      return {
        title,
        url: videoId ? `https://www.youtube.com/watch?v=${videoId}` : "",
        views: parseViews(viewText),
        viewText
      };
    })
    .filter((video) => video.url && !/만개의레시피|10000recipe/i.test(video.title) && isLikelyRelevant(query, video.title))
    .sort((a, b) => b.views - a.views);
}

async function findSources(recipe) {
  const query = `${recipe.title} 레시피`;
  const key = normalize(query);
  if (cache[key]) return cache[key];

  const naverSearchUrl = `https://search.naver.com/search.naver?where=blog&query=${encodeURIComponent(query)}`;
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  const result = {
    naverBlogSearchUrl: naverSearchUrl,
    youtubeSearchUrl
  };

  try {
    const naverHtml = await fetchText(naverSearchUrl);
    result.naverBlog = parseNaverBlog(naverHtml, recipe.title);
  } catch (error) {
    result.naverBlogError = error.message;
  }

  await sleep(120);

  try {
    const youtubeHtml = await fetchText(youtubeSearchUrl);
    result.youtube = parseYoutubeVideos(youtubeHtml, recipe.title)[0] || null;
  } catch (error) {
    result.youtubeError = error.message;
  }

  cache[key] = result;
  return result;
}

function methodFor(recipe) {
  if (recipe.sourceMethodSteps?.length) return recipe.sourceMethodSteps;

  const tags = recipe.tags || [];
  const main = tags[0] || "주재료";
  const sub = tags.slice(1).join(", ") || "부재료";
  const text = `${recipe.title || ""} ${recipe.category || ""}`;

  if (/미역국/.test(text)) {
    return [
      "1. 미역은 물에 불린 뒤 여러 번 헹궈 물기를 짭니다.",
      `2. 냄비에 참기름을 두르고 ${main}, 미역을 넣어 향이 날 때까지 볶습니다.`,
      "3. 물이나 육수를 붓고 끓어오르면 중약불로 줄여 충분히 우립니다.",
      "4. 국간장과 마늘로 간을 맞추고 부족한 간은 소금으로 조절합니다.",
      "5. 재료가 부드럽게 익으면 거품을 걷고 따뜻하게 냅니다."
    ];
  }

  if (/국|탕|찌개|전골|Soup|Stew|Chowder/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 손질하고 국물에 들어갈 재료를 크기별로 나눕니다.`,
      "2. 냄비에 육수나 물을 넣고 끓인 뒤 향을 내는 재료를 먼저 넣습니다.",
      "3. 익는 시간이 긴 재료부터 넣고 중불에서 충분히 끓입니다.",
      "4. 메뉴에 맞는 양념으로 간을 맞춥니다.",
      "5. 마지막에 대파나 향채를 넣고 한소끔 끓여 마무리합니다."
    ];
  }

  if (/볶음|구이|조림|Stir|Teriyaki|Rice|Pasta|Noodle|Curry|Salad|Main/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 메뉴에 맞는 크기로 손질합니다.`,
      "2. 팬이나 냄비를 예열하고 향 재료와 기본 양념을 먼저 준비합니다.",
      "3. 주재료를 먼저 익힌 뒤 채소와 부재료를 순서대로 넣습니다.",
      "4. 소스나 육수를 더해 재료에 맛이 고르게 배도록 조리합니다.",
      "5. 마지막 간을 맞추고 어울리는 곁들임과 냅니다."
    ];
  }

  return [
    `1. ${main}, ${sub}를 손질합니다.`,
    "2. 조리도구를 예열하고 기본 양념을 준비합니다.",
    "3. 익는 시간이 긴 재료부터 넣고 순서대로 조리합니다.",
    "4. 간을 맞추고 재료가 고르게 익었는지 확인합니다.",
    "5. 그릇에 담고 기호에 맞게 마무리합니다."
  ];
}

function mdFor(recipe) {
  const tags = recipe.tags || [];
  const rows = tags.map((tag) => `| ${tag} | 약 ${priceOf(tag).toLocaleString("ko-KR")}원 |`).join("\n") || "| 추가 정보 없음 | - |";
  const total = tags.reduce((sum, tag) => sum + priceOf(tag), 0);
  const blogTitle = recipe.naverBlogTitle || `${recipe.title} 네이버 블로그 검색`;
  const blogUrl = recipe.naverBlogUrl || recipe.naverBlogSearchUrl || `https://search.naver.com/search.naver?where=blog&query=${encodeURIComponent(recipe.title + " 레시피")}`;
  const youtubeTitle = recipe.youtubeTitle || `${recipe.title} 유튜브 검색`;
  const youtubeUrl = recipe.youtubeUrl || recipe.youtubeSearchUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(recipe.title + " 레시피")}`;

  return `# ${recipe.title}

## 기본 정보

| 항목 | 내용 |
|---|---|
| 음식 카테고리 | ${recipe.cuisine || "기타"} / ${recipe.category || "기본"} |
| 난이도 | ${difficultyLabel(recipe.difficulty || 2)} |
| 만드는 시간 | 약 ${recipe.cookingMinutes || 25}분 |
| 식사 구분 | ${(recipe.meal || ["lunch", "dinner"]).join(", ")} |
| 예상 재료비 | 약 ${total.toLocaleString("ko-KR")}원 |

## 상세 재료

| 재료 | 예산 기준가 |
|---|---:|
${rows}

## 만드는 방법

${methodFor(recipe).join("\n")}

## 참조 레시피 링크

- [네이버 블로그 대표 레시피: ${blogTitle}](${blogUrl})
- [유튜브 인기 레시피: ${youtubeTitle}](${youtubeUrl})${recipe.youtubeViewCount ? ` - 조회수 약 ${recipe.youtubeViewCount.toLocaleString("ko-KR")}회` : ""}
- [네이버 블로그 검색](https://search.naver.com/search.naver?where=blog&query=${encodeURIComponent(recipe.title + " 레시피")})
- [유튜브 검색](https://www.youtube.com/results?search_query=${encodeURIComponent(recipe.title + " 레시피")})

## 관리 메모

- 대표 참조는 네이버 블로그 검색 상위 결과와 유튜브 조회수 기준 인기 영상을 우선 사용합니다.
- 만드는 방법은 원문 전문을 복사하지 않고 레시피 정보 기준으로 재작성한 요약 조리법입니다.
- 이후 새 레시피 MD 파일도 이 구조를 유지합니다.
`;
}

async function main() {
  const outDir = path.join(root, "recipe-md");
  const keyFor = (recipe) => normalize(`${recipe.title} 레시피`);
  const missingTargets = recipes.filter((recipe) => !cache[keyFor(recipe)]);
  const batchSize = 16;

  console.log(`cached=${recipes.length - missingTargets.length} remaining=${missingTargets.length}`);

  for (let start = 0; start < missingTargets.length; start += batchSize) {
    const batch = missingTargets.slice(start, start + batchSize);
    await Promise.all(
      batch.map(async (recipe) => {
        try {
          await findSources(recipe);
        } catch (error) {
          cache[keyFor(recipe)] = {
            naverBlogSearchUrl: `https://search.naver.com/search.naver?where=blog&query=${encodeURIComponent(recipe.title + " 레시피")}`,
            youtubeSearchUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(recipe.title + " 레시피")}`,
            error: error.message
          };
        }
      })
    );

    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n", "utf8");
    console.log(`[${Math.min(start + batchSize, missingTargets.length)}/${missingTargets.length}] cache=${Object.keys(cache).length}`);
    await sleep(250);
  }

  let blogCount = 0;
  let youtubeCount = 0;

  for (let index = 0; index < recipes.length; index += 1) {
    const recipe = recipes[index];
    const sources = cache[keyFor(recipe)] || {
      naverBlogSearchUrl: `https://search.naver.com/search.naver?where=blog&query=${encodeURIComponent(recipe.title + " 레시피")}`,
      youtubeSearchUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(recipe.title + " 레시피")}`
    };

    recipe.naverBlogSearchUrl = sources.naverBlogSearchUrl;
    recipe.youtubeSearchUrl = sources.youtubeSearchUrl;
    if (sources.naverBlog) {
      recipe.naverBlogTitle = sources.naverBlog.title;
      recipe.naverBlogUrl = sources.naverBlog.url;
      recipe.sourceName = "네이버 블로그 대표 레시피";
      recipe.sourceUrl = sources.naverBlog.url;
      blogCount += 1;
    } else {
      recipe.sourceName = "네이버 블로그 검색";
      recipe.sourceUrl = sources.naverBlogSearchUrl;
    }

    if (sources.youtube) {
      recipe.youtubeTitle = sources.youtube.title;
      recipe.youtubeUrl = sources.youtube.url;
      recipe.youtubeViewCount = sources.youtube.views;
      youtubeCount += 1;
    }

    const file = path.basename(recipe.detailFile || `${recipe.id}.md`);
    fs.writeFileSync(path.join(outDir, file), mdFor(recipe), "utf8");
  }

  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n", "utf8");
  fs.writeFileSync(dataPath, JSON.stringify(recipes, null, 2) + "\n", "utf8");
  fs.writeFileSync(path.join(root, "recipes-data.js"), `window.RECIPE_DATA = ${JSON.stringify(recipes)};\n`, "utf8");
  console.log(`done blog=${blogCount} youtube=${youtubeCount}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
