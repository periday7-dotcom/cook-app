const recipes = [
  { title: "김치 달걀 볶음밥", type: "quick", tags: ["김치", "달걀", "밥", "대파", "양파"], meal: ["lunch"] },
  { title: "두부 애호박 된장국", type: "healthy", tags: ["두부", "애호박", "된장", "양파", "버섯"], meal: ["dinner"] },
  { title: "닭가슴살 채소 덮밥", type: "healthy", tags: ["닭가슴살", "밥", "양파", "파프리카", "브로콜리"], meal: ["lunch", "dinner"] },
  { title: "참치 김치찌개", type: "korean", tags: ["참치", "김치", "두부", "양파", "대파"], meal: ["lunch", "dinner"] },
  { title: "버섯 크림 파스타", type: "balanced", tags: ["파스타면", "버섯", "양파", "우유", "치즈"], meal: ["lunch", "dinner"] },
  { title: "토마토 달걀 볶음", type: "quick", tags: ["토마토", "달걀", "양파", "밥"], meal: ["lunch"] },
  { title: "소고기 숙주 볶음", type: "balanced", tags: ["소고기", "숙주", "양파", "대파"], meal: ["lunch", "dinner"] },
  { title: "고등어 무조림", type: "korean", tags: ["고등어", "무", "양파", "대파"], meal: ["dinner"] },
  { title: "오이 참치 비빔밥", type: "quick", tags: ["오이", "참치", "밥", "달걀", "고추장"], meal: ["lunch"] },
  { title: "돼지고기 김치 두루치기", type: "korean", tags: ["돼지고기", "김치", "양파", "대파"], meal: ["dinner"] },
  { title: "새우 애호박 파스타", type: "balanced", tags: ["새우", "애호박", "파스타면", "마늘"], meal: ["lunch", "dinner"] },
  { title: "닭고기 카레", type: "balanced", tags: ["닭고기", "감자", "당근", "양파", "밥"], meal: ["lunch", "dinner"] },
  { title: "햄 채소 오므라이스", type: "quick", tags: ["햄", "달걀", "밥", "양파", "당근"], meal: ["lunch"] },
  { title: "콩나물 김치국", type: "korean", tags: ["콩나물", "김치", "대파", "두부"], meal: ["dinner"] },
  { title: "연어 아보카도 덮밥", type: "healthy", tags: ["연어", "아보카도", "밥", "오이"], meal: ["lunch", "dinner"] },
  { title: "가지 돼지고기 볶음", type: "balanced", tags: ["가지", "돼지고기", "양파", "대파"], meal: ["dinner"] },
  { title: "두부 스테이크", type: "healthy", tags: ["두부", "버섯", "양파", "당근"], meal: ["dinner"] },
  { title: "불고기 상추 비빔밥", type: "korean", tags: ["불고기", "상추", "밥", "달걀"], meal: ["lunch", "dinner"] },
  { title: "어묵 우동", type: "quick", tags: ["어묵", "우동면", "대파", "버섯"], meal: ["lunch", "dinner"] },
  { title: "제육 양배추 볶음", type: "korean", tags: ["돼지고기", "양배추", "양파", "대파"], meal: ["dinner"] },
  { title: "냉장고 채소 비빔국수", type: "quick", tags: ["소면", "오이", "양배추", "당근", "달걀"], meal: ["lunch"] },
  { title: "마파두부 덮밥", type: "balanced", tags: ["두부", "돼지고기", "밥", "대파", "양파"], meal: ["lunch", "dinner"] }
];

const fallbackByMeal = {
  lunch: [
    { title: "냉장고 비빔밥", tags: ["밥", "채소", "고추장"], type: "korean" },
    { title: "남은 재료 볶음밥", tags: ["밥", "채소", "달걀"], type: "quick" }
  ],
  dinner: [
    { title: "자투리 채소 된장찌개", tags: ["된장", "채소", "두부"], type: "korean" },
    { title: "냉장고 재료 볶음", tags: ["채소", "단백질", "양파"], type: "balanced" }
  ]
};

const priceBook = {
  대파: 1500,
  양파: 1200,
  버섯: 2500,
  된장: 3500,
  파프리카: 2500,
  브로콜리: 3500,
  우유: 2500,
  치즈: 3500,
  토마토: 3500,
  소고기: 9000,
  숙주: 1500,
  고등어: 5000,
  무: 2500,
  고추장: 3500,
  돼지고기: 6500,
  새우: 8000,
  마늘: 2000,
  닭고기: 6500,
  감자: 3000,
  당근: 2000,
  햄: 3500,
  콩나물: 1500,
  연어: 11000,
  아보카도: 3000,
  가지: 2500,
  상추: 2500,
  불고기: 8500,
  어묵: 3500,
  우동면: 2500,
  양배추: 3500,
  소면: 3000,
  채소: 4000,
  단백질: 6000
};

const knownIngredients = [
  "김치",
  "달걀",
  "계란",
  "밥",
  "대파",
  "양파",
  "두부",
  "애호박",
  "된장",
  "버섯",
  "닭가슴살",
  "파프리카",
  "브로콜리",
  "참치",
  "파스타면",
  "우유",
  "치즈",
  "토마토",
  "소고기",
  "숙주",
  "고등어",
  "무",
  "오이",
  "고추장",
  "돼지고기",
  "새우",
  "마늘",
  "닭고기",
  "감자",
  "당근",
  "햄",
  "콩나물",
  "연어",
  "아보카도",
  "가지",
  "상추",
  "불고기",
  "어묵",
  "우동면",
  "양배추",
  "소면",
  "식빵",
  "치킨",
  "라면",
  "떡",
  "떡볶이떡",
  "만두",
  "김",
  "멸치",
  "시금치",
  "깻잎",
  "배추",
  "청경채",
  "단호박",
  "베이컨",
  "스팸",
  "참기름",
  "간장"
];

const days = ["월", "화", "수", "목", "금", "토", "일"];
const meals = [
  ["lunch", "점심"],
  ["dinner", "저녁"]
];
const difficultyByTitle = {
  "김치 달걀 볶음밥": 1,
  "두부 애호박 된장국": 2,
  "닭가슴살 채소 덮밥": 1,
  "참치 김치찌개": 2,
  "버섯 크림 파스타": 2,
  "토마토 달걀 볶음": 1,
  "소고기 숙주 볶음": 2,
  "고등어 무조림": 3,
  "오이 참치 비빔밥": 1,
  "돼지고기 김치 두루치기": 2,
  "새우 애호박 파스타": 2,
  "닭고기 카레": 2,
  "햄 채소 오므라이스": 2,
  "콩나물 김치국": 1,
  "연어 아보카도 덮밥": 1,
  "가지 돼지고기 볶음": 2,
  "두부 스테이크": 2,
  "불고기 상추 비빔밥": 2,
  "어묵 우동": 1,
  "제육 양배추 볶음": 2,
  "냉장고 채소 비빔국수": 1,
  "마파두부 덮밥": 3,
  "냉장고 비빔밥": 1,
  "남은 재료 볶음밥": 1,
  "자투리 채소 된장찌개": 2,
  "냉장고 재료 볶음": 1
};
const cookingMinutesByTitle = {
  "김치 달걀 볶음밥": 15,
  "두부 애호박 된장국": 25,
  "닭가슴살 채소 덮밥": 20,
  "참치 김치찌개": 25,
  "버섯 크림 파스타": 25,
  "토마토 달걀 볶음": 15,
  "소고기 숙주 볶음": 20,
  "고등어 무조림": 35,
  "오이 참치 비빔밥": 15,
  "돼지고기 김치 두루치기": 30,
  "새우 애호박 파스타": 25,
  "닭고기 카레": 35,
  "햄 채소 오므라이스": 25,
  "콩나물 김치국": 20,
  "연어 아보카도 덮밥": 15,
  "가지 돼지고기 볶음": 25,
  "두부 스테이크": 25,
  "불고기 상추 비빔밥": 25,
  "어묵 우동": 15,
  "제육 양배추 볶음": 30,
  "냉장고 채소 비빔국수": 20,
  "마파두부 덮밥": 35,
  "냉장고 비빔밥": 15,
  "남은 재료 볶음밥": 15,
  "자투리 채소 된장찌개": 25,
  "냉장고 재료 볶음": 20
};

const form = document.querySelector("#plannerForm");
const ingredientsInput = document.querySelector("#ingredients");
const avoidInput = document.querySelector("#avoid");
const styleInput = document.querySelector("#style");
const lunchEaseInput = document.querySelector("#lunchEase");
const dinnerEaseInput = document.querySelector("#dinnerEase");
const lunchEaseValue = document.querySelector("#lunchEaseValue");
const dinnerEaseValue = document.querySelector("#dinnerEaseValue");
const sampleButton = document.querySelector("#sampleButton");
const summary = document.querySelector("#summary");
const mealPlan = document.querySelector("#mealPlan");
const ingredientPhoto = document.querySelector("#ingredientPhoto");
const photoPreview = document.querySelector("#photoPreview");
const ocrButton = document.querySelector("#ocrButton");
const ocrStatus = document.querySelector("#ocrStatus");
const ocrText = document.querySelector("#ocrText");
const applyOcrTextButton = document.querySelector("#applyOcrTextButton");
const installButton = document.querySelector("#installButton");
const desktopInstallButton = document.querySelector("#desktopInstallButton");

let selectedPhoto = null;
let deferredInstallPrompt = null;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  showInstallButtons();
});

[installButton, desktopInstallButton].forEach((button) => {
  button?.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    hideInstallButtons();
  });
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

[lunchEaseInput, dinnerEaseInput].forEach((input) => {
  input.addEventListener("input", updateEaseLabels);
});

updateEaseLabels();

function showInstallButtons() {
  installButton.hidden = false;
  desktopInstallButton.hidden = false;
}

function hideInstallButtons() {
  installButton.hidden = true;
  desktopInstallButton.hidden = true;
}

ingredientPhoto.addEventListener("change", () => {
  selectedPhoto = ingredientPhoto.files?.[0] || null;
  ocrButton.disabled = !selectedPhoto;

  if (!selectedPhoto) {
    photoPreview.innerHTML = "<span>사진을 선택하면 미리보기가 표시됩니다.</span>";
    setOcrStatus("사진을 선택해주세요.");
    return;
  }

  const imageUrl = URL.createObjectURL(selectedPhoto);
  photoPreview.innerHTML = `<img src="${imageUrl}" alt="선택한 재료 사진 미리보기" />`;
  setOcrStatus("사진이 준비됐어요. 버튼을 누르면 한글을 읽어 재료칸에 넣습니다.");
});

ocrButton.addEventListener("click", async () => {
  if (!selectedPhoto) return;
  if (!window.Tesseract) {
    setOcrStatus("OCR 라이브러리를 불러오지 못했습니다. 인터넷 연결을 확인해주세요.", true);
    return;
  }

  ocrButton.disabled = true;
  setOcrStatus("사진을 분석하고 있어요. 글자가 선명할수록 인식률이 좋아집니다.");

  try {
    const imageForOcr = await preprocessImageForOcr(selectedPhoto);
    const result = await Tesseract.recognize(imageForOcr, "kor+eng", {
      logger: ({ status, progress }) => {
        if (status === "recognizing text") {
          setOcrStatus(`한글 인식 중... ${Math.round(progress * 100)}%`);
        }
      },
      tessedit_pageseg_mode: "6",
      preserve_interword_spaces: "1"
    });

    ocrText.value = result.data.text.trim();
    const ingredients = extractIngredientsFromOcr(ocrText.value);
    if (ingredients.length === 0) {
      setOcrStatus("재료명을 확정하지 못했어요. 아래 인식된 글자를 직접 고친 뒤 반영해보세요.", true);
      return;
    }

    mergeIngredients(ingredients);
    setOcrStatus(`${ingredients.length}개 후보를 재료칸에 반영했습니다: ${ingredients.join(", ")}`);
  } catch (error) {
    setOcrStatus("사진 인식 중 오류가 났습니다. 다른 사진으로 다시 시도해주세요.", true);
  } finally {
    ocrButton.disabled = !selectedPhoto;
  }
});

applyOcrTextButton.addEventListener("click", () => {
  const ingredients = extractIngredientsFromOcr(ocrText.value);
  if (ingredients.length === 0) {
    setOcrStatus("반영할 재료명을 찾지 못했어요. 한 줄에 재료 하나씩 적거나 쉼표로 구분해주세요.", true);
    ocrText.focus();
    return;
  }

  mergeIngredients(ingredients);
  setOcrStatus(`${ingredients.length}개 후보를 재료칸에 반영했습니다: ${ingredients.join(", ")}`);
});

sampleButton.addEventListener("click", () => {
  ingredientsInput.value = "닭가슴살, 달걀, 두부, 애호박, 양파, 김치, 밥, 파스타면, 버섯, 오이, 참치";
  avoidInput.value = "너무 매운맛";
  styleInput.value = "balanced";
  lunchEaseInput.value = "70";
  dinnerEaseInput.value = "40";
  updateEaseLabels();
  form.requestSubmit();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const ingredients = parseList(ingredientsInput.value);
  const avoid = parseList(avoidInput.value);

  if (ingredients.length === 0) {
    summary.textContent = "재료를 하나 이상 입력해주세요. 예: 달걀, 김치, 밥";
    mealPlan.innerHTML = "";
    ingredientsInput.focus();
    return;
  }

  const difficultyPreferences = getDifficultyPreferences();
  const plan = buildPlan(ingredients, avoid, styleInput.value, difficultyPreferences);
  renderPlan(plan, ingredients);
});

function updateEaseLabels() {
  lunchEaseValue.textContent = `${lunchEaseInput.value}%`;
  dinnerEaseValue.textContent = `${dinnerEaseInput.value}%`;
}

function getDifficultyPreferences() {
  return {
    lunch: Number(lunchEaseInput.value),
    dinner: Number(dinnerEaseInput.value)
  };
}

function parseList(value) {
  return value
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function extractIngredientsFromOcr(text) {
  const lineCandidates = text
    .split(/[\n,;|/]+/)
    .map((item) =>
      item
        .replace(/[0-9]+(\.[0-9]+)?\s*(g|kg|개|봉|팩|통|장|ml|l|L)?/gi, "")
        .replace(/[^가-힣a-zA-Z\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
    )
    .filter((item) => item.length >= 1)
    .filter((item) => !["재료", "냉장고", "구매", "목록", "ingredient"].includes(item.toLowerCase()))
    .slice(0, 30);
  const compactText = normalize(text);
  const dictionaryMatches = knownIngredients.filter((ingredient) => compactText.includes(normalize(ingredient)));
  const merged = [...lineCandidates, ...dictionaryMatches].map(normalizeIngredientAlias);
  const unique = [];
  const seen = new Set();

  merged.forEach((ingredient) => {
    const key = normalize(ingredient);
    if (key && !seen.has(key)) {
      unique.push(ingredient);
      seen.add(key);
    }
  });

  return unique.slice(0, 30);
}

function normalizeIngredientAlias(ingredient) {
  const cleaned = ingredient.trim();
  if (cleaned === "계란") return "달걀";
  return cleaned;
}

async function preprocessImageForOcr(file) {
  const image = await loadImage(file);
  const scale = Math.min(2, 1800 / Math.max(image.width, image.height));
  const width = Math.max(1, Math.round(image.width * scale));
  const height = Math.max(1, Math.round(image.height * scale));
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });

  canvas.width = width;
  canvas.height = height;
  context.drawImage(image, 0, 0, width, height);

  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;

  for (let index = 0; index < data.length; index += 4) {
    const gray = data[index] * 0.299 + data[index + 1] * 0.587 + data[index + 2] * 0.114;
    const contrasted = Math.max(0, Math.min(255, (gray - 128) * 1.65 + 128));
    const threshold = contrasted > 150 ? 255 : 0;
    data[index] = threshold;
    data[index + 1] = threshold;
    data[index + 2] = threshold;
  }

  context.putImageData(imageData, 0, 0);
  return canvas.toDataURL("image/png");
}

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = URL.createObjectURL(file);
  });
}

function mergeIngredients(newIngredients) {
  const current = parseList(ingredientsInput.value);
  const known = new Set(current.map(normalize));
  const merged = [...current];

  newIngredients.forEach((ingredient) => {
    if (!known.has(normalize(ingredient))) {
      merged.push(ingredient);
      known.add(normalize(ingredient));
    }
  });

  ingredientsInput.value = merged.join(", ");
}

function setOcrStatus(message, isError = false) {
  ocrStatus.textContent = message;
  ocrStatus.classList.toggle("is-error", isError);
}

function buildPlan(ingredients, avoid, style, difficultyPreferences) {
  const usedTitles = new Set();
  const normalizedAvoid = avoid.map(normalize);

  return days.map((day, dayIndex) => {
    const menu = meals.map(([mealKey, mealLabel], mealIndex) => {
      const candidates = recipes
        .filter((recipe) => recipe.meal.includes(mealKey))
        .filter((recipe) => !usedTitles.has(recipe.title))
        .filter((recipe) => !normalizedAvoid.some((item) => normalize(recipe.title).includes(item)))
        .map((recipe) => ({
          ...recipe,
          score: scoreRecipe(recipe, ingredients, style, dayIndex, mealIndex, difficultyPreferences[mealKey])
        }))
        .sort((a, b) => b.score - a.score);

      const selected = candidates[0] || fallbackByMeal[mealKey][dayIndex % fallbackByMeal[mealKey].length];
      usedTitles.add(selected.title);

      const matched = selected.tags.filter((tag) => includesIngredient(ingredients, tag));
      const missing = selected.tags.filter((tag) => !includesIngredient(ingredients, tag));

      return {
        mealKey,
        mealLabel,
        ...selected,
        difficulty: getDifficulty(selected.title),
        cookingMinutes: getCookingMinutes(selected.title),
        matched,
        missing,
        estimatedBudget: estimateBudget(missing)
      };
    });

    return { day, menu };
  });
}

function scoreRecipe(recipe, ingredients, style, dayIndex, mealIndex, easePreference) {
  const matchScore = recipe.tags.reduce((score, tag) => {
    return score + (includesIngredient(ingredients, tag) ? 8 : 0);
  }, 0);
  const styleScore = recipe.type === style ? 4 : style === "balanced" ? 1 : 0;
  const varietyScore = ((dayIndex + 1) * (mealIndex + 2) + recipe.title.length) % 5;
  const targetDifficulty = easeToDifficulty(easePreference);
  const difficultyDistance = Math.abs(getDifficulty(recipe.title) - targetDifficulty);
  const difficultyScore = 8 - difficultyDistance * 5;
  return matchScore + styleScore + varietyScore + difficultyScore;
}

function easeToDifficulty(easePreference) {
  if (easePreference >= 70) return 1;
  if (easePreference >= 35) return 2;
  return 3;
}

function getDifficulty(title) {
  return difficultyByTitle[title] || 2;
}

function getDifficultyLabel(difficulty) {
  if (difficulty <= 1) return "쉬움";
  if (difficulty === 2) return "보통";
  return "도전";
}

function getCookingMinutes(title) {
  return cookingMinutesByTitle[title] || 25;
}

function includesIngredient(ingredients, tag) {
  const normalizedTag = normalize(tag);
  return ingredients.some((ingredient) => {
    const normalizedIngredient = normalize(ingredient);
    return normalizedIngredient.includes(normalizedTag) || normalizedTag.includes(normalizedIngredient);
  });
}

function estimateBudget(missing) {
  return missing.reduce((sum, item) => sum + (priceBook[item] || 3000), 0);
}

function normalize(value) {
  return value.replace(/\s+/g, "").toLowerCase();
}

function formatWon(value) {
  if (value <= 0) return "0원";
  const rounded = Math.ceil(value / 500) * 500;
  return `${rounded.toLocaleString("ko-KR")}원`;
}

function renderPlan(plan, ingredients) {
  const usedIngredients = new Set();
  const missingWeekly = new Map();
  const difficultyCounts = { 1: 0, 2: 0, 3: 0 };
  let totalCookingMinutes = 0;
  let mealCount = 0;
  let weeklyBudget = 0;

  plan.forEach((day) => {
    day.menu.forEach((meal) => {
      meal.matched.forEach((ingredient) => usedIngredients.add(ingredient));
      meal.missing.forEach((ingredient) => missingWeekly.set(ingredient, priceBook[ingredient] || 3000));
      difficultyCounts[meal.difficulty] += 1;
      totalCookingMinutes += meal.cookingMinutes;
      mealCount += 1;
      weeklyBudget += meal.estimatedBudget;
    });
  });

  const missingText = missingWeekly.size
    ? [...missingWeekly.keys()].slice(0, 8).join(", ")
    : "없음";

  summary.innerHTML = `
    점심과 저녁 기준으로 총 <strong>14끼</strong>를 만들었어요.
    입력 재료 ${ingredients.length}개 중 <strong>${usedIngredients.size || "여러"}가지</strong>가 반영됐고,
    추가 구매 예상 총액은 약 <strong>${formatWon(weeklyBudget)}</strong>입니다.
    <br />난이도 구성: 쉬움 ${difficultyCounts[1]}끼 · 보통 ${difficultyCounts[2]}끼 · 도전 ${difficultyCounts[3]}끼
    <br />예상 조리시간: 총 ${formatMinutes(totalCookingMinutes)} · 끼니당 평균 ${Math.round(totalCookingMinutes / mealCount)}분
    <br />주요 추가 재료: ${missingText}
  `;

  mealPlan.innerHTML = plan
    .map(
      ({ day, menu }) => `
        <article class="day-card">
          <h3>${day}요일 <span>${menu.length} meals</span></h3>
          <div class="meal-list">
            ${menu.map(renderMeal).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderMeal(meal) {
  const query = encodeURIComponent(`${meal.title} 레시피`);
  const naverUrl = `https://search.naver.com/search.naver?query=${query}`;
  const youtubeUrl = `https://www.youtube.com/results?search_query=${query}`;
  const matchedText = meal.matched.length > 0 ? meal.matched.join(", ") : "냉장고 기본 재료";
  const missingText = meal.missing.length > 0 ? meal.missing.join(", ") : "추가 구매 없음";
  const sourceText = "출처: 네이버 검색, 유튜브 검색";

  return `
    <section class="meal-item">
      <span class="meal-time">${meal.mealLabel}</span>
      <p class="meal-title">${meal.title}</p>
      <p class="meal-difficulty">난이도: ${getDifficultyLabel(meal.difficulty)} · 조리시간: 약 ${meal.cookingMinutes}분</p>
      <p class="meal-ingredients">활용 재료: ${matchedText}</p>
      <p class="meal-budget">추가 재료: ${missingText} · 예상 ${formatWon(meal.estimatedBudget)}</p>
      <p class="meal-source">${sourceText}</p>
      <div class="recipe-links">
        <a href="${naverUrl}" target="_blank" rel="noreferrer">네이버 레시피</a>
        <a href="${youtubeUrl}" target="_blank" rel="noreferrer">유튜브 영상</a>
      </div>
    </section>
  `;
}

function formatMinutes(minutes) {
  if (minutes < 60) return `${minutes}분`;
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return remainder ? `${hours}시간 ${remainder}분` : `${hours}시간`;
}
