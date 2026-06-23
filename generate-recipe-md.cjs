const fs = require('fs');
const path = require('path');

const root = path.join(process.cwd(), 'cook');
const outDir = path.join(root, 'recipe-md');
fs.mkdirSync(outDir, { recursive: true });

const data = JSON.parse(fs.readFileSync(path.join(root, 'recipes-data.json'), 'utf8'));
const priceBookText = fs.readFileSync(path.join(root, 'app.js'), 'utf8');

function priceOf(item) {
  const match = priceBookText.match(new RegExp(`${escapeRegExp(item)}:\\s*(\\d+)`));
  if (match) return Number(match[1]);
  const quoted = priceBookText.match(new RegExp(`['\"]${escapeRegExp(item)}['\"]:\\s*(\\d+)`));
  if (quoted) return Number(quoted[1]);
  return 4500;
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function slug(value) {
  return String(value)
    .normalize('NFKD')
    .replace(/[\\/:*?"<>|]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

function difficultyLabel(value) {
  if (value <= 1) return '쉬움';
  if (value === 2) return '보통';
  return '도전';
}

function methodFor(recipe) {
  const tags = recipe.tags || [];
  const main = tags[0] || '주재료';
  const sub = tags.slice(1).join(', ') || '부재료';
  const title = recipe.title || '';
  const category = recipe.category || recipe.cuisine || '기본';
  const text = `${title} ${category}`;

  if (/미역국/.test(text)) {
    return [
      '1. 미역은 물에 불린 뒤 여러 번 헹궈 물기를 짭니다.',
      `2. 냄비에 참기름을 두르고 ${main}, 미역을 넣어 향이 날 때까지 볶습니다.`,
      '3. 물이나 육수를 붓고 끓어오르면 중약불로 줄여 충분히 우립니다.',
      '4. 국간장과 마늘로 간을 맞추고 부족한 간은 소금으로 조절합니다.',
      '5. 재료가 부드럽게 익으면 거품을 걷고 따뜻하게 냅니다.'
    ];
  }

  if (/된장국|된장찌개|청국장/.test(text)) {
    return [
      '1. 멸치육수나 물을 끓이고 채소와 두부를 먹기 좋은 크기로 썹니다.',
      '2. 된장이나 청국장을 체에 풀어 국물에 고르게 섞습니다.',
      `3. ${main}, ${sub}를 단단한 재료부터 넣고 끓입니다.`,
      '4. 거품을 걷고 마늘, 대파, 고춧가루 등으로 맛을 조정합니다.',
      '5. 두부와 향채를 마지막에 넣어 한소끔 더 끓입니다.'
    ];
  }

  if (/김치찌개|김칫국|김치/.test(text) && /찌개|국|탕/.test(text)) {
    return [
      '1. 김치는 먹기 좋은 크기로 자르고 고기나 통조림 재료는 물기를 정리합니다.',
      `2. 냄비에 ${main}, 김치를 넣고 김치 향이 올라올 때까지 볶습니다.`,
      '3. 물이나 육수를 붓고 김치가 부드러워질 때까지 끓입니다.',
      '4. 두부, 양파, 대파 등 부재료를 넣고 간장이나 고춧가루로 간을 맞춥니다.',
      '5. 중약불에서 맛을 충분히 우린 뒤 마지막 간을 확인합니다.'
    ];
  }

  if (/국|탕|찌개|전골|Soup|Stew|Chowder/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 손질하고 국물에 들어갈 재료를 크기별로 나눕니다.`,
      '2. 냄비에 육수나 물을 넣고 끓인 뒤 향을 내는 재료를 먼저 넣습니다.',
      '3. 익는 시간이 긴 재료부터 넣고 중불에서 충분히 끓입니다.',
      '4. 간장, 된장, 고추장, 소금 등 메뉴에 맞는 양념으로 간을 맞춥니다.',
      '5. 마지막에 대파나 향채를 넣고 한소끔 끓여 마무리합니다.'
    ];
  }

  if (/조림|Braise/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 조림용 크기로 손질합니다.`,
      '2. 간장, 단맛 재료, 마늘, 물이나 육수를 섞어 조림 양념을 만듭니다.',
      '3. 냄비에 재료와 양념을 넣고 끓어오르면 중약불로 줄입니다.',
      '4. 중간중간 양념을 끼얹으며 속까지 익도록 조립니다.',
      '5. 국물이 자작해지고 윤기가 돌면 불을 끄고 잠시 두어 맛을 배게 합니다.'
    ];
  }

  if (/구이|Roast|Schnitzel|Piccata/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 각각 곁들일 크기로 준비하고 물기를 제거합니다.`,
      '2. 소금, 후추, 간장 양념 등 메뉴에 맞게 밑간합니다.',
      '3. 팬이나 오븐을 충분히 예열한 뒤 겉면부터 노릇하게 익힙니다.',
      '4. 속까지 익도록 불을 조절하고 필요하면 소스나 양념을 덧바릅니다.',
      '5. 잠시 휴지한 뒤 먹기 좋은 크기로 담아냅니다.'
    ];
  }

  if (/볶음|Stir|Teriyaki|Kung Pao|Mapo|Mongolian|Szechuan|Sichuan/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 한입 크기로 손질하고 물기를 제거합니다.`,
      '2. 팬을 강하게 예열한 뒤 기름을 두르고 마늘, 파 등 향 재료를 먼저 볶습니다.',
      '3. 주재료를 넣어 겉면을 빠르게 익히고 채소를 순서대로 더합니다.',
      '4. 간장, 고추장, 굴소스, 설탕 등 메뉴에 맞는 양념을 넣어 센 불에서 섞습니다.',
      '5. 소스가 재료에 고르게 입혀지면 불을 끄고 참기름이나 향채로 마무리합니다.'
    ];
  }

  if (/전|부침|Frittata|Quiche/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 잘게 손질하고 물기가 많으면 가볍게 짭니다.`,
      '2. 밀가루, 부침가루, 달걀 등 메뉴에 맞는 반죽을 만듭니다.',
      '3. 손질한 재료를 반죽에 섞고 팬에 기름을 넉넉히 두릅니다.',
      '4. 앞뒤로 노릇하게 부치며 속까지 익힙니다.',
      '5. 기름을 빼고 초간장이나 곁들임 소스와 함께 냅니다.'
    ];
  }

  if (/나물|무침/.test(text)) {
    return [
      `1. ${main}, ${sub}를 씻고 질긴 부분을 정리합니다.`,
      '2. 데칠 재료는 끓는 물에 짧게 데친 뒤 찬물에 헹궈 물기를 짭니다.',
      '3. 간장, 소금, 마늘, 참기름 등으로 기본 양념을 만듭니다.',
      '4. 재료와 양념을 손끝으로 가볍게 버무립니다.',
      '5. 간을 확인하고 깨나 다진 파를 더해 마무리합니다.'
    ];
  }

  if (/볶음밥|덮밥|Rice Bowl|Risotto/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 밥과 잘 섞이도록 작게 손질합니다.`,
      '2. 팬에 기름을 두르고 향 재료와 단단한 재료부터 볶습니다.',
      '3. 밥이나 덮밥 소스를 넣고 재료와 고르게 섞습니다.',
      '4. 간장, 소금, 후추 등으로 간을 맞추고 수분을 날립니다.',
      '5. 그릇에 담고 달걀, 김가루, 깨 등 어울리는 고명을 올립니다.'
    ];
  }

  if (/면|국수|우동|소면|칼국수|Noodle|Pasta|Spaghetti|Carbonara|Alfredo|Pesto/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 손질하고 소스나 육수를 먼저 준비합니다.`,
      '2. 면은 포장 기준보다 약간 짧게 삶아 물기를 빼고 면수를 조금 남깁니다.',
      '3. 팬이나 냄비에서 소스, 육수, 주재료를 먼저 끓이거나 볶습니다.',
      '4. 삶은 면을 넣고 면수로 농도를 조절하며 고르게 섞습니다.',
      '5. 간을 맞춘 뒤 치즈, 김가루, 파, 깨 등 메뉴에 맞는 고명을 올립니다.'
    ];
  }

  if (/Curry|카레/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 카레에 어울리는 크기로 썹니다.`,
      '2. 냄비에 기름을 두르고 단단한 채소와 고기를 먼저 볶습니다.',
      '3. 물이나 육수를 붓고 재료가 부드러워질 때까지 끓입니다.',
      '4. 카레 양념을 풀어 농도가 나도록 저어가며 끓입니다.',
      '5. 밥이나 빵에 곁들이고 기호에 따라 후추나 허브를 더합니다.'
    ];
  }

  if (/샐러드|Salad|Sandwich|Burger|Melt|Club/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 씻고 물기를 제거한 뒤 먹기 좋은 크기로 준비합니다.`,
      '2. 익혀야 하는 고기, 달걀, 해산물은 먼저 조리해 식힙니다.',
      '3. 드레싱이나 소스를 따로 섞어 간을 확인합니다.',
      '4. 채소와 주재료를 담고 소스를 고르게 더합니다.',
      '5. 빵이나 밥을 쓰는 메뉴는 마지막에 조립해 바로 먹습니다.'
    ];
  }

  if (/Char Siu|Peruvian Chicken|Souvlaki|Shawarma|Kofta/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 손질하고 양념이 잘 배도록 준비합니다.`,
      '2. 향신료, 산미 재료, 단맛 재료를 섞어 마리네이드를 만듭니다.',
      '3. 주재료에 양념을 입혀 잠시 재운 뒤 팬, 오븐, 그릴 중 하나를 예열합니다.',
      '4. 겉면이 노릇해지고 속까지 익을 때까지 굽거나 볶습니다.',
      '5. 남은 소스나 허브를 곁들여 밥, 빵, 샐러드와 함께 냅니다.'
    ];
  }

  if (/Fried Rice|Paella|Burrito Bowl|Hainanese Chicken Rice/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 밥과 함께 먹기 좋은 크기로 손질합니다.`,
      '2. 팬이나 냄비에 향 재료를 볶아 기본 향을 냅니다.',
      '3. 쌀이나 밥을 넣고 육수, 소스, 양념이 고르게 배도록 조리합니다.',
      '4. 주재료가 익고 밥알이 고르게 풀어지도록 불을 조절합니다.',
      '5. 고명과 소스를 더해 한 그릇 메뉴로 완성합니다.'
    ];
  }

  if (/Pancake|Okonomiyaki|Takoyaki/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 잘게 손질하고 반죽 재료를 준비합니다.`,
      '2. 가루, 달걀, 물이나 육수를 섞어 농도 있는 반죽을 만듭니다.',
      '3. 손질한 재료를 반죽에 섞고 예열한 팬이나 틀에 올립니다.',
      '4. 겉은 노릇하고 속은 익을 때까지 뒤집거나 굴려가며 익힙니다.',
      '5. 소스, 마요네즈, 가쓰오부시, 파 등 어울리는 토핑을 올립니다.'
    ];
  }

  if (/Dumpling|Spring Roll|Enchilada|Quesadilla|Taco/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 잘게 손질해 속 재료를 준비합니다.`,
      '2. 팬에 속 재료를 볶거나 양념해 물기가 많지 않게 만듭니다.',
      '3. 만두피, 또띠아, 라이스페이퍼 등 겉재료에 속을 넣고 감쌉니다.',
      '4. 굽기, 찌기, 튀기기 중 메뉴에 맞는 방식으로 익힙니다.',
      '5. 소스와 곁들임 채소를 준비해 바로 냅니다.'
    ];
  }

  if (/Steamed Fish|Salt and Pepper Shrimp|Fish and Chips|Karaage|Katsu|Tonkatsu/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 손질하고 물기를 충분히 제거합니다.`,
      '2. 소금, 후추, 생강, 마늘 등으로 밑간합니다.',
      '3. 찜, 튀김, 팬구이 등 메뉴에 맞는 조리법으로 겉면부터 익힙니다.',
      '4. 속까지 익었는지 확인하고 필요하면 소스나 양념을 더합니다.',
      '5. 기름을 빼거나 육즙을 안정시킨 뒤 곁들임과 함께 냅니다.'
    ];
  }

  if (/Hummus|Plate/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 바로 먹기 좋은 크기로 준비합니다.`,
      '2. 허머스나 소스류는 농도와 간을 먼저 확인합니다.',
      '3. 채소, 빵, 단백질 재료를 따로 조리하거나 데웁니다.',
      '4. 큰 접시에 소스와 재료를 나누어 담습니다.',
      '5. 올리브오일, 허브, 향신료를 더해 마무리합니다.'
    ];
  }

  if (/Tagine|Chili|Feijoada/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 큼직하게 손질하고 향신료를 준비합니다.`,
      '2. 냄비에 기름을 두르고 향 재료와 단백질 재료를 먼저 볶습니다.',
      '3. 콩, 채소, 토마토, 육수 등을 넣고 끓입니다.',
      '4. 약한 불에서 재료가 부드러워질 때까지 뭉근하게 익힙니다.',
      '5. 간을 조절하고 밥이나 빵과 함께 담아냅니다.'
    ];
  }

  if (/Chinese Main|Global Main|Japanese Main|Main/i.test(text)) {
    return [
      `1. ${main}, ${sub}를 메뉴에 맞는 크기로 손질합니다.`,
      '2. 팬이나 냄비를 예열하고 향 재료와 기본 양념을 먼저 준비합니다.',
      '3. 주재료를 먼저 익힌 뒤 채소와 부재료를 순서대로 넣습니다.',
      '4. 소스나 육수를 더해 재료에 맛이 고르게 배도록 조리합니다.',
      '5. 마지막 간을 맞추고 밥, 면, 빵 등 어울리는 곁들임과 냅니다.'
    ];
  }

  return [
    `1. ${main}, ${sub}를 손질합니다.`,
    '2. 조리도구를 예열하고 기본 양념을 준비합니다.',
    '3. 익는 시간이 긴 재료부터 넣고 순서대로 조리합니다.',
    '4. 간을 맞추고 재료가 고르게 익었는지 확인합니다.',
    '5. 그릇에 담고 기호에 맞게 마무리합니다.'
  ];
}

function mdFor(recipe) {
  const tags = recipe.tags || [];
  const rows = tags.map((tag) => `| ${tag} | 약 ${priceOf(tag).toLocaleString('ko-KR')}원 |`).join('\n') || '| 추가 정보 없음 | - |';
  const total = tags.reduce((sum, tag) => sum + priceOf(tag), 0);
  const sourceName = recipe.sourceName || '레시피 검색';
  const sourceUrl = recipe.sourceUrl || `https://search.naver.com/search.naver?query=${encodeURIComponent(recipe.title + ' 레시피')}`;
  return `# ${recipe.title}\n\n## 기본 정보\n\n| 항목 | 내용 |\n|---|---|\n| 음식 카테고리 | ${recipe.cuisine || '기타'} / ${recipe.category || '기본'} |\n| 난이도 | ${difficultyLabel(recipe.difficulty || 2)} |\n| 만드는 시간 | 약 ${recipe.cookingMinutes || 25}분 |\n| 식사 구분 | ${(recipe.meal || ['lunch', 'dinner']).join(', ')} |\n| 예상 재료비 | 약 ${total.toLocaleString('ko-KR')}원 |\n\n## 상세 재료\n\n| 재료 | 예산 기준가 |\n|---|---:|\n${rows}\n\n## 만드는 방법\n\n${methodFor(recipe).join('\n')}\n\n## 참조 레시피 링크\n\n- [${sourceName}](${sourceUrl})\n- [네이버 레시피 검색](https://search.naver.com/search.naver?query=${encodeURIComponent(recipe.title + ' 레시피')})\n- [유튜브 레시피 검색](https://www.youtube.com/results?search_query=${encodeURIComponent(recipe.title + ' 레시피')})\n\n## 관리 메모\n\n- 만드는 방법은 참조 링크, 레시피명, 카테고리, 재료 정보를 기준으로 재작성한 요약 조리법입니다.\n- 원문 레시피 전문을 복사하지 않고, 이후 새 레시피 MD 파일도 이 구조를 유지합니다.\n`;
}

let count = 0;
for (const recipe of data) {
  const file = `${recipe.id}-${slug(recipe.title)}.md`;
  fs.writeFileSync(path.join(outDir, file), mdFor(recipe), 'utf8');
  recipe.detailFile = `recipe-md/${file}`;
  count += 1;
}
fs.writeFileSync(path.join(root, 'recipes-data.json'), JSON.stringify(data, null, 2) + '\n', 'utf8');
fs.writeFileSync(path.join(root, 'recipes-data.js'), 'window.RECIPE_DATA = ' + JSON.stringify(data) + ';\n', 'utf8');
console.log(`generated ${count} recipe md files`);
