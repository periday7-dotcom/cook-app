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
  대파: 3200,
  쪽파: 3500,
  부추: 2500,
  양파: 4500,
  감자: 5500,
  당근: 3800,
  무: 2800,
  배추: 6500,
  양배추: 4200,
  애호박: 2200,
  오이: 3500,
  가지: 3000,
  상추: 3500,
  깻잎: 2200,
  시금치: 3500,
  숙주: 1800,
  콩나물: 1800,
  미나리: 3500,
  버섯: 3500,
  표고버섯: 4500,
  팽이버섯: 1800,
  느타리버섯: 2500,
  새송이버섯: 3000,
  브로콜리: 4500,
  파프리카: 5500,
  토마토: 6500,
  마늘: 4500,
  청양고추: 2500,
  풋고추: 2500,
  꽈리고추: 3500,
  고구마: 6500,
  단호박: 4500,
  연근: 4500,
  우엉: 3500,
  고사리: 5000,
  도라지: 4500,
  냉이: 3500,
  아욱: 3000,
  근대: 3000,
  시래기: 4500,
  우거지: 3500,
  김치: 12000,
  열무김치: 9000,
  깍두기: 7000,
  두부: 2500,
  순두부: 1800,
  콩비지: 2500,
  달걀: 7500,
  삶은달걀: 3500,
  메추리알: 4500,
  우유: 3500,
  치즈: 6500,
  버터: 8000,
  마요네즈: 4500,
  참치: 3500,
  참치캔: 3500,
  스팸: 5500,
  햄: 4500,
  소시지: 5500,
  어묵: 4000,
  만두: 6500,
  김치만두: 7500,
  군만두: 6500,
  떡: 3500,
  떡볶이떡: 3500,
  소고기: 13000,
  양지: 15000,
  차돌박이: 13000,
  다진소고기: 11000,
  "다진 소고기": 11000,
  소갈비: 30000,
  LA갈비: 28000,
  소불고기: 13000,
  돼지고기: 8500,
  삼겹살: 13000,
  목살: 12000,
  돼지갈비: 12000,
  돼지등뼈: 8000,
  곱창: 12000,
  닭: 9000,
  닭고기: 9000,
  닭봉: 9500,
  닭가슴살: 8500,
  불고기: 12000,
  단백질: 8000,
  새우: 10000,
  오징어: 7000,
  오징어채: 7000,
  오징어실채: 6500,
  낙지: 11000,
  주꾸미: 9000,
  바지락: 5500,
  조개: 6000,
  홍합: 5500,
  굴: 8500,
  꼬막: 9000,
  골뱅이: 7000,
  전복: 18000,
  꽃게: 14000,
  아귀: 12000,
  생선: 9000,
  고등어: 7000,
  갈치: 13000,
  코다리: 9000,
  동태: 7000,
  동태포: 7000,
  대구: 11000,
  가자미: 8500,
  삼치: 8500,
  조기: 10000,
  병어: 12000,
  꽁치: 5000,
  명태알: 7000,
  황태: 7000,
  황태채: 7000,
  북어채: 6500,
  멸치: 6000,
  잔멸치: 6000,
  마른새우: 5000,
  미역: 4500,
  다시마육수: 4000,
  멸치육수: 4000,
  사골육수: 4000,
  냉면육수: 3500,
  육수: 4000,
  사골: 9000,
  쌀: 12000,
  밥: 3000,
  소면: 3500,
  중면: 3500,
  칼국수면: 3500,
  우동면: 3500,
  냉면사리: 3500,
  쫄면사리: 3500,
  메밀면: 4500,
  파스타면: 3500,
  라면사리: 2500,
  당면: 4500,
  밀가루: 3500,
  부침가루: 3500,
  찹쌀가루: 4500,
  찹쌀: 6500,
  밀가루반죽: 3500,
  수제비반죽: 3500,
  만두피: 3500,
  고추장: 6500,
  된장: 6500,
  청국장: 3500,
  간장: 4500,
  국간장: 4500,
  고춧가루: 11000,
  참기름: 7500,
  들기름: 8500,
  식용유: 7000,
  고추기름: 5500,
  식초: 3000,
  설탕: 3500,
  올리고당: 4500,
  물엿: 4000,
  꿀: 9000,
  소금: 2500,
  깨: 5000,
  참깨: 5000,
  검은깨: 5500,
  들깨가루: 7000,
  들깨: 6500,
  양념장: 3500,
  양념간장: 3000,
  간장양념: 3000,
  고추장양념: 3500,
  간장소스: 3500,
  케첩소스: 3500,
  단무지: 3500,
  김: 5000,
  김가루: 4000,
  도토리묵: 3000,
  팥: 6000,
  녹두: 7000,
  검은콩: 7000,
  땅콩: 6000,
  견과류: 9000,
  밤: 7000,
  대추: 5000,
  인삼: 12000,
  은행: 5000,
  배: 4500,
  레몬: 4500,
  아보카도: 5000,
  채소: 5000,
  해물: 12000,
  "해물 선택": 12000,
  "참치 또는 멸치": 6000,
  Chicken: 9000,
  Beef: 13000,
  Pork: 8500,
  Fish: 9000,
  Clam: 6000,
  Tuna: 3500,
  Tomato: 6500,
  Mushroom: 3500,
  Pasta: 3500,
  Spaghetti: 3500,
  Parmesan: 7500,
  Cheese: 6500,
  Basil: 3500
};

const nonPurchasableTags = new Set([
  "간편",
  "매운",
  "집밥",
  "원팬",
  "and",
  "Alfredo",
  "Bolognese",
  "Lasagna",
  "Stroganoff",
  "Margherita",
  "Pizza",
  "Caesar",
  "Salad",
  "Minestrone",
  "Soup",
  "Chowder",
  "French",
  "Onion",
  "Stew",
  "Roast",
  "Shepherds",
  "Pie",
  "Chips",
  "Mac",
  "Carbonara",
  "Pesto",
  "Risotto",
  "Pot",
  "Turkey",
  "Meatballs",
  "BBQ",
  "Pulled",
  "Greek",
  "Cobb",
  "Ratatouille",
  "Quiche",
  "Lorraine",
  "Frittata",
  "Schnitzel",
  "Piccata",
  "Burger",
  "Club",
  "Sandwich",
  "Melt",
  "Teriyaki"
]);

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
const mealKitsInput = document.querySelector("#mealKits");
const mealKitChipInput = document.querySelector("#mealKitInput");
const addMealKitButton = document.querySelector("#addMealKitButton");
const mealKitChips = document.querySelector("#mealKitChips");
const ingredientChipInputs = document.querySelectorAll(".ingredient-chip-input");
const addChipButtons = document.querySelectorAll(".add-chip-button");
const chipLists = {
  cold: document.querySelector("#coldChips"),
  frozen: document.querySelector("#frozenChips"),
  room: document.querySelector("#roomChips"),
  seasoning: document.querySelector("#seasoningChips")
};
const avoidInput = document.querySelector("#avoid");
const styleInput = document.querySelector("#style");
const startDateInput = document.querySelector("#startDate");
const lunchEaseInput = document.querySelector("#lunchEase");
const dinnerEaseInput = document.querySelector("#dinnerEase");
const lunchEaseValue = document.querySelector("#lunchEaseValue");
const dinnerEaseValue = document.querySelector("#dinnerEaseValue");
const categoryRatioInputs = document.querySelectorAll(".category-ratio-input");
const randomCategoryModeInput = document.querySelector("#randomCategoryMode");
const alternatePlanButton = document.querySelector("#alternatePlanButton");
const calendarButton = document.querySelector("#calendarButton");
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
const customRecipeNameInput = document.querySelector("#customRecipeName");
const customRecipeCategoryInput = document.querySelector("#customRecipeCategory");
const customRecipeIngredientsInput = document.querySelector("#customRecipeIngredients");
const customRecipeMealInput = document.querySelector("#customRecipeMeal");
const saveCustomRecipeButton = document.querySelector("#saveCustomRecipeButton");
const customRecipeList = document.querySelector("#customRecipeList");
const recipeSearchInput = document.querySelector("#recipeSearchInput");
const recipeCuisineFilter = document.querySelector("#recipeCuisineFilter");
const recipeManagerSummary = document.querySelector("#recipeManagerSummary");
const recipeManagerList = document.querySelector("#recipeManagerList");
const recipeLoadMoreButton = document.querySelector("#recipeLoadMoreButton");

let selectedPhoto = null;
let deferredInstallPrompt = null;
let variationSeed = 0;
let lastPlan = null;
let lastIngredients = [];
let editingRecipeId = null;
let storedIngredients = loadStoredIngredients();
let storedMealKits = loadStoredMealKits();
let customRecipes = loadCustomRecipes();
let seedRecipes = [...recipes];
let recipeOverrides = loadRecipeOverrides();
let deletedRecipeIds = loadDeletedRecipeIds();
let recipeDataLoadStatus = "loading";
let recipeManagerVisibleCount = 120;

startDateInput.value = getTodayInputValue();
renderIngredientChips();
renderMealKitChips();
renderCustomRecipes();
loadSeedRecipes();
recipeSearchInput?.addEventListener("input", () => {
  recipeManagerVisibleCount = 120;
  renderRecipeManager();
});
recipeCuisineFilter?.addEventListener("change", () => {
  recipeManagerVisibleCount = 120;
  renderRecipeManager();
});
recipeLoadMoreButton?.addEventListener("click", () => {
  recipeManagerVisibleCount += 120;
  renderRecipeManager();
});

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
updateCategoryRatioLabels();

addChipButtons.forEach((button) => {
  button.addEventListener("click", () => addIngredientChip(button.dataset.target));
});

ingredientChipInputs.forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const storage = input.closest(".storage-box")?.dataset.storage;
      addIngredientChip(storage);
    }
  });
});

addMealKitButton?.addEventListener("click", addMealKitChip);

mealKitChipInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addMealKitChip();
  }
});

categoryRatioInputs.forEach((input) => {
  input.addEventListener("input", updateCategoryRatioLabels);
});

randomCategoryModeInput?.addEventListener("change", updateCategoryRatioLabels);

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
  storedIngredients = {
    cold: ["달걀", "두부", "애호박", "양파", "김치", "오이"],
    frozen: ["닭가슴살"],
    room: ["밥", "파스타면", "참치"],
    seasoning: ["고추장", "간장"]
  };
  saveStoredIngredients();
  renderIngredientChips();
  storedMealKits = ["컬리 사골떡만둣국", "비마트 닭갈비 밀키트"];
  saveStoredMealKits();
  renderMealKitChips();
  avoidInput.value = "너무 매운맛";
  styleInput.value = "balanced";
  lunchEaseInput.value = "70";
  dinnerEaseInput.value = "40";
  setCategoryRatios({ 한식: 50, 양식: 20, 일식: 10, 중식: 10, 기타: 10 });
  if (randomCategoryModeInput) randomCategoryModeInput.checked = false;
  updateEaseLabels();
  updateCategoryRatioLabels();
  form.requestSubmit();
});

alternatePlanButton.addEventListener("click", () => {
  variationSeed += 1;
  form.requestSubmit();
});

calendarButton.addEventListener("click", () => {
  if (!lastPlan) return;
  downloadCalendarFile(lastPlan, getSelectedStartDate());
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const ingredients = getAllStoredIngredients();
  const mealKits = storedMealKits;
  const avoid = parseList(avoidInput.value);

  if (ingredients.length === 0 && mealKits.length === 0) {
    summary.textContent = "재료나 밀키트를 하나 이상 입력해주세요. 예: 달걀, 김치, 밥 또는 부대찌개 밀키트";
    mealPlan.innerHTML = "";
    ingredientsInput.focus();
    return;
  }

  const difficultyPreferences = getDifficultyPreferences();
  const categoryPreferences = getCategoryPreferences();
  const plan = buildPlan(ingredients, mealKits, avoid, styleInput.value, difficultyPreferences, categoryPreferences);
  lastPlan = plan;
  lastIngredients = ingredients;
  alternatePlanButton.disabled = false;
  calendarButton.disabled = false;
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

function updateCategoryRatioLabels() {
  categoryRatioInputs.forEach((input) => {
    const valueLabel = document.querySelector(`#${input.id}Value`);
    if (valueLabel) valueLabel.textContent = `${input.value}%`;
    input.disabled = Boolean(randomCategoryModeInput?.checked);
  });
}

function getCategoryPreferences() {
  const weights = {};
  categoryRatioInputs.forEach((input) => {
    weights[input.dataset.category] = Number(input.value);
  });

  return {
    random: Boolean(randomCategoryModeInput?.checked),
    weights
  };
}

function setCategoryRatios(weights) {
  categoryRatioInputs.forEach((input) => {
    if (weights[input.dataset.category] !== undefined) {
      input.value = String(weights[input.dataset.category]);
    }
  });
}

function getTodayInputValue() {
  const today = new Date();
  const offsetDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000);
  return offsetDate.toISOString().slice(0, 10);
}

function getSelectedStartDate() {
  if (!startDateInput.value) return new Date();
  const [year, month, day] = startDateInput.value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function loadStoredIngredients() {
  const empty = { cold: [], frozen: [], room: [], seasoning: [] };
  try {
    return { ...empty, ...JSON.parse(localStorage.getItem("storedIngredients") || "{}") };
  } catch {
    return empty;
  }
}

function saveStoredIngredients() {
  localStorage.setItem("storedIngredients", JSON.stringify(storedIngredients));
  ingredientsInput.value = getAllStoredIngredients().join(", ");
}

function getAllStoredIngredients() {
  return Object.values(storedIngredients).flat().filter(Boolean);
}

function addIngredientChip(storage) {
  if (!storage || !storedIngredients[storage]) return;
  const box = document.querySelector(`.storage-box[data-storage="${storage}"]`);
  const input = box?.querySelector(".ingredient-chip-input");
  const values = parseList(input?.value || "");
  const known = new Set(storedIngredients[storage].map(normalize));

  values.forEach((value) => {
    if (!known.has(normalize(value))) {
      storedIngredients[storage].push(value);
      known.add(normalize(value));
    }
  });

  if (input) input.value = "";
  saveStoredIngredients();
  renderIngredientChips();
}

function removeIngredientChip(storage, ingredient) {
  storedIngredients[storage] = storedIngredients[storage].filter((item) => normalize(item) !== normalize(ingredient));
  saveStoredIngredients();
  renderIngredientChips();
}

function renderIngredientChips() {
  Object.entries(chipLists).forEach(([storage, container]) => {
    if (!container) return;
    const items = storedIngredients[storage] || [];
    container.innerHTML = items.length
      ? items
          .map(
            (item) => `
              <button class="ingredient-chip" type="button" data-storage="${storage}" data-ingredient="${item}" title="눌러서 삭제">
                ${item}<span aria-hidden="true">×</span>
              </button>
            `
          )
          .join("")
      : `<span class="empty-chip">아직 없음</span>`;
  });

  document.querySelectorAll(".ingredient-chip[data-storage]").forEach((chip) => {
    chip.addEventListener("click", () => removeIngredientChip(chip.dataset.storage, chip.dataset.ingredient));
  });
  ingredientsInput.value = getAllStoredIngredients().join(", ");
}

function loadStoredMealKits() {
  try {
    return JSON.parse(localStorage.getItem("storedMealKits") || "[]");
  } catch {
    return [];
  }
}

function saveStoredMealKits() {
  localStorage.setItem("storedMealKits", JSON.stringify(storedMealKits));
  mealKitsInput.value = storedMealKits.join(", ");
}

function addMealKitChip() {
  const values = parseList(mealKitChipInput?.value || "");
  const known = new Set(storedMealKits.map(normalize));

  values.forEach((value) => {
    if (!known.has(normalize(value))) {
      storedMealKits.push(value);
      known.add(normalize(value));
    }
  });

  if (mealKitChipInput) mealKitChipInput.value = "";
  saveStoredMealKits();
  renderMealKitChips();
}

function removeMealKitChip(mealKit) {
  storedMealKits = storedMealKits.filter((item) => normalize(item) !== normalize(mealKit));
  saveStoredMealKits();
  renderMealKitChips();
}

function renderMealKitChips() {
  if (!mealKitChips) return;
  mealKitChips.innerHTML = storedMealKits.length
    ? storedMealKits
        .map(
          (item) => `
            <button class="ingredient-chip meal-kit-chip" type="button" data-meal-kit="${item}" title="눌러서 삭제">
              ${item}<span aria-hidden="true">×</span>
            </button>
          `
        )
        .join("")
    : `<span class="empty-chip">아직 없음</span>`;

  mealKitChips.querySelectorAll(".meal-kit-chip").forEach((chip) => {
    chip.addEventListener("click", () => removeMealKitChip(chip.dataset.mealKit));
  });
  mealKitsInput.value = storedMealKits.join(", ");
}

function loadCustomRecipes() {
  try {
    return JSON.parse(localStorage.getItem("customRecipes") || "[]");
  } catch {
    return [];
  }
}

function saveCustomRecipes() {
  localStorage.setItem("customRecipes", JSON.stringify(customRecipes));
}

saveCustomRecipeButton.addEventListener("click", () => {
  const title = customRecipeNameInput.value.trim();
  const category = customRecipeCategoryInput.value.trim() || "내 레시피";
  const tags = parseList(customRecipeIngredientsInput.value);
  const mealValue = customRecipeMealInput.value;

  if (!title || tags.length === 0) {
    customRecipeNameInput.focus();
    return;
  }

  if (editingRecipeId?.startsWith("override:")) {
    const seedId = editingRecipeId.replace("override:", "");
    const meal = mealValue === "both" ? ["lunch", "dinner"] : [mealValue];
    recipeOverrides[seedId] = {
      title,
      category,
      tags,
      meal,
      type: "balanced"
    };
    editingRecipeId = null;
    saveRecipeOverrides();
    renderRecipeManager();
    clearCustomRecipeForm();
    return;
  }

  const recipe = {
    id: editingRecipeId || `custom-${Date.now()}`,
    title,
    category,
    tags,
    type: "balanced",
    meal: mealValue === "both" ? ["lunch", "dinner"] : [mealValue],
    isCustom: true
  };

  if (editingRecipeId) {
    customRecipes = customRecipes.map((item) => (item.id === editingRecipeId ? recipe : item));
  } else {
    customRecipes.push(recipe);
  }

  editingRecipeId = null;
  saveCustomRecipes();
  renderCustomRecipes();
  clearCustomRecipeForm();
});

function renderCustomRecipes() {
  if (!customRecipeList) return;
  customRecipeList.innerHTML = customRecipes.length
    ? customRecipes
        .map(
          (recipe) => `
            <article class="custom-recipe-item">
              <div>
                <strong>${recipe.title}</strong>
                <span>${recipe.category} · ${recipe.tags.join(", ")}</span>
              </div>
              <div class="custom-recipe-actions">
                <button type="button" data-action="edit" data-id="${recipe.id}">수정</button>
                <button type="button" data-action="delete" data-id="${recipe.id}">삭제</button>
              </div>
            </article>
          `
        )
        .join("")
    : `<p class="empty-custom-recipes">아직 등록한 레시피가 없습니다.</p>`;

  customRecipeList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const recipe = customRecipes.find((item) => item.id === button.dataset.id);
      if (!recipe) return;
      if (button.dataset.action === "delete") {
        customRecipes = customRecipes.filter((item) => item.id !== recipe.id);
        saveCustomRecipes();
        renderCustomRecipes();
        return;
      }
      editingRecipeId = recipe.id;
      customRecipeNameInput.value = recipe.title;
      customRecipeCategoryInput.value = recipe.category;
      customRecipeIngredientsInput.value = recipe.tags.join(", ");
      customRecipeMealInput.value = recipe.meal.length > 1 ? "both" : recipe.meal[0];
      saveCustomRecipeButton.textContent = "내 레시피 수정 완료";
    });
  });
}

function clearCustomRecipeForm() {
  customRecipeNameInput.value = "";
  customRecipeCategoryInput.value = "";
  customRecipeIngredientsInput.value = "";
  customRecipeMealInput.value = "both";
  saveCustomRecipeButton.textContent = "내 레시피 추가";
}

async function loadSeedRecipes() {
  try {
    const data = Array.isArray(window.RECIPE_DATA) ? window.RECIPE_DATA : await fetchRecipeData();
    seedRecipes = data.map((recipe) => ({
      ...recipe,
      isSeed: true
    }));
    recipeDataLoadStatus = "loaded";
  } catch {
    recipeDataLoadStatus = "fallback";
    seedRecipes = recipes.map((recipe, index) => ({
      ...recipe,
      id: `legacy-${index}`,
      cuisine: "한식",
      category: getRecipeCategory(recipe),
      isSeed: true
    }));
  }
  renderRecipeManager();
}

async function fetchRecipeData() {
  const response = await fetch("./recipes-data.json", { cache: "no-cache" });
  if (!response.ok) throw new Error("recipes-data.json not found");
  return response.json();
}

function loadRecipeOverrides() {
  try {
    return JSON.parse(localStorage.getItem("recipeOverrides") || "{}");
  } catch {
    return {};
  }
}

function saveRecipeOverrides() {
  localStorage.setItem("recipeOverrides", JSON.stringify(recipeOverrides));
}

function loadDeletedRecipeIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem("deletedRecipeIds") || "[]"));
  } catch {
    return new Set();
  }
}

function saveDeletedRecipeIds() {
  localStorage.setItem("deletedRecipeIds", JSON.stringify([...deletedRecipeIds]));
}

function getSeedRecipePool() {
  return seedRecipes
    .filter((recipe) => !deletedRecipeIds.has(recipe.id))
    .map((recipe) => ({ ...recipe, ...(recipeOverrides[recipe.id] || {}) }));
}

function getAllRecipePool() {
  return [...customRecipes, ...getSeedRecipePool()];
}

function renderRecipeManager() {
  if (!recipeManagerList) return;
  const query = normalize(recipeSearchInput?.value || "");
  const cuisineFilter = recipeCuisineFilter?.value || "all";
  updateRecipeCuisineOptions();
  const filteredRecipes = seedRecipes.filter((recipe) => {
      if (cuisineFilter !== "all" && recipe.cuisine !== cuisineFilter) return false;
      if (!query) return true;
      return normalize([recipe.title, recipe.category, recipe.cuisine, ...(recipe.tags || [])].join(" ")).includes(query);
    });
  const candidates = filteredRecipes.slice(0, recipeManagerVisibleCount);
  const activeCount = getSeedRecipePool().length;

  if (recipeManagerSummary) {
    const loadText =
      recipeDataLoadStatus === "loaded"
        ? `전체 ${seedRecipes.length}개 로드됨`
        : `큰 레시피 파일을 못 불러와서 기본 ${seedRecipes.length}개만 표시 중`;
    recipeManagerSummary.textContent = `${loadText} · 현재 조건 ${filteredRecipes.length}개 중 ${candidates.length}개 표시 · 식단 후보 ${activeCount}개`;
  }

  if (recipeLoadMoreButton) {
    recipeLoadMoreButton.hidden = candidates.length >= filteredRecipes.length;
    recipeLoadMoreButton.textContent = `레시피 더 보기 (${filteredRecipes.length - candidates.length}개 남음)`;
  }

  recipeManagerList.innerHTML = candidates.length
    ? candidates
        .map((recipe) => {
          const overridden = recipeOverrides[recipe.id] || {};
          const displayRecipe = { ...recipe, ...overridden };
          const deleted = deletedRecipeIds.has(recipe.id);
          return `
            <article class="recipe-manager-item ${deleted ? "is-disabled" : ""}">
              <div>
                <strong>${displayRecipe.title}</strong>
                <span>${displayRecipe.cuisine || "한식"} · ${displayRecipe.category || "기본"} · ${(displayRecipe.tags || []).slice(0, 5).join(", ")}</span>
              </div>
              <div class="recipe-manager-actions">
                <button type="button" data-action="edit-seed" data-id="${recipe.id}">수정</button>
                <button type="button" data-action="${deleted ? "restore-seed" : "delete-seed"}" data-id="${recipe.id}">
                  ${deleted ? "복구" : "삭제"}
                </button>
              </div>
            </article>
          `;
        })
        .join("")
    : `<p class="empty-custom-recipes">검색 결과가 없습니다.</p>`;

  recipeManagerList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const recipe = seedRecipes.find((item) => item.id === button.dataset.id);
      if (!recipe) return;
      if (button.dataset.action === "delete-seed") {
        deletedRecipeIds.add(recipe.id);
        saveDeletedRecipeIds();
        renderRecipeManager();
        return;
      }
      if (button.dataset.action === "restore-seed") {
        deletedRecipeIds.delete(recipe.id);
        saveDeletedRecipeIds();
        renderRecipeManager();
        return;
      }
      const current = { ...recipe, ...(recipeOverrides[recipe.id] || {}) };
      customRecipeNameInput.value = current.title;
      customRecipeCategoryInput.value = current.category || "한식";
      customRecipeIngredientsInput.value = (current.tags || []).join(", ");
      customRecipeMealInput.value = current.meal?.length > 1 ? "both" : current.meal?.[0] || "both";
      editingRecipeId = `override:${recipe.id}`;
      saveCustomRecipeButton.textContent = "기본 레시피 수정 저장";
    });
  });
}

function updateRecipeCuisineOptions() {
  if (!recipeCuisineFilter) return;
  const currentValue = recipeCuisineFilter.value;
  const counts = seedRecipes.reduce((acc, recipe) => {
    acc[recipe.cuisine] = (acc[recipe.cuisine] || 0) + 1;
    return acc;
  }, {});
  const labels = ["한식", "양식", "일식", "중식", "기타"];
  recipeCuisineFilter.innerHTML = [
    `<option value="all">전체 카테고리 (${seedRecipes.length})</option>`,
    ...labels.map((label) => `<option value="${label}">${label} (${counts[label] || 0})</option>`)
  ].join("");
  recipeCuisineFilter.value = [...labels, "all"].includes(currentValue) ? currentValue : "all";
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
  const current = getAllStoredIngredients();
  const known = new Set(current.map(normalize));

  newIngredients.forEach((ingredient) => {
    if (!known.has(normalize(ingredient))) {
      storedIngredients.cold.push(ingredient);
      known.add(normalize(ingredient));
    }
  });

  saveStoredIngredients();
  renderIngredientChips();
}

function setOcrStatus(message, isError = false) {
  ocrStatus.textContent = message;
  ocrStatus.classList.toggle("is-error", isError);
}

function buildPlan(ingredients, mealKits, avoid, style, difficultyPreferences, categoryPreferences) {
  const usedTitles = new Set();
  const normalizedAvoid = avoid.map(normalize);
  const recipePool = [...createMealKitRecipes(mealKits), ...getAllRecipePool()];

  return days.map((day, dayIndex) => {
    const menu = meals.map(([mealKey, mealLabel], mealIndex) => {
      const candidates = recipePool
        .filter((recipe) => recipe.meal.includes(mealKey))
        .filter((recipe) => !usedTitles.has(recipe.title))
        .filter((recipe) => !normalizedAvoid.some((item) => normalize(recipe.title).includes(item)))
        .map((recipe) => ({
          ...recipe,
          score: scoreRecipe(
            recipe,
            ingredients,
            style,
            dayIndex,
            mealIndex,
            difficultyPreferences[mealKey],
            categoryPreferences
          )
        }))
        .sort((a, b) => b.score - a.score);

      const selected = candidates[0] || fallbackByMeal[mealKey][dayIndex % fallbackByMeal[mealKey].length];
      usedTitles.add(selected.title);

      const matched = selected.isMealKit
        ? ["밀키트/완제품"]
        : selected.tags.filter((tag) => isPurchasableIngredient(tag) && includesIngredient(ingredients, tag));
      const missing = selected.isMealKit
        ? []
        : selected.tags.filter((tag) => isPurchasableIngredient(tag) && !includesIngredient(ingredients, tag));

      return {
        mealKey,
        mealLabel,
        ...selected,
        difficulty: selected.isMealKit ? 1 : getDifficulty(selected.title),
        cookingMinutes: selected.isMealKit ? 15 : getCookingMinutes(selected.title),
        category: getRecipeCategory(selected),
        matched,
        missing,
        estimatedBudget: estimateBudget(missing)
      };
    });

    return { day, menu };
  });
}

function createMealKitRecipes(mealKits) {
  return mealKits.map((title, index) => ({
    title,
    type: "quick",
    category: "밀키트/완제품",
    cuisine: "기타",
    tags: [],
    meal: index % 2 === 0 ? ["dinner", "lunch"] : ["lunch", "dinner"],
    isMealKit: true
  }));
}

function scoreRecipe(recipe, ingredients, style, dayIndex, mealIndex, easePreference, categoryPreferences) {
  const matchScore = recipe.tags.reduce((score, tag) => {
    return score + (includesIngredient(ingredients, tag) ? 8 : 0);
  }, 0);
  const styleScore = recipe.type === style ? 4 : style === "balanced" ? 1 : 0;
  const varietyScore =
    ((dayIndex + 1) * (mealIndex + 2) + recipe.title.length + variationSeed * 7) % 11;
  const mealKitScore = recipe.isMealKit ? 18 - dayIndex : 0;
  const targetDifficulty = easeToDifficulty(easePreference);
  const difficultyDistance = Math.abs((recipe.isMealKit ? 1 : getDifficulty(recipe.title)) - targetDifficulty);
  const difficultyScore = 8 - difficultyDistance * 5;
  const categoryScore = getCategoryScore(recipe, categoryPreferences, dayIndex, mealIndex);
  return matchScore + styleScore + varietyScore + difficultyScore + mealKitScore + categoryScore;
}

function getCategoryScore(recipe, categoryPreferences, dayIndex, mealIndex) {
  if (!categoryPreferences) return 0;

  if (categoryPreferences.random) {
    return ((recipe.title.length * 3 + dayIndex * 11 + mealIndex * 7 + variationSeed * 13) % 24) - 6;
  }

  const category = getCuisineBucket(recipe);
  const weights = categoryPreferences.weights || {};
  const total = Object.values(weights).reduce((sum, value) => sum + Number(value || 0), 0);
  if (!total) return 0;
  const ratio = Number(weights[category] || 0) / total;
  return Math.round(ratio * 36);
}

function getCuisineBucket(recipe) {
  const value = recipe.cuisine || recipe.category || getRecipeCategory(recipe);
  if (value.includes("한식")) return "한식";
  if (value.includes("양식") || value.includes("서양")) return "양식";
  if (value.includes("일식") || value.includes("일본")) return "일식";
  if (value.includes("중식") || value.includes("중국")) return "중식";
  return "기타";
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

function getRecipeCategory(recipe) {
  if (recipe.category) return recipe.category;
  if (recipe.isMealKit) return "밀키트/완제품";
  if (recipe.type === "korean") return "한식";
  if (recipe.type === "healthy") return "건강식";
  if (recipe.type === "quick") return "간편식";
  return "균형식";
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
  return uniqueByNormalize(missing).reduce((sum, item) => sum + getEstimatedIngredientPrice(item), 0);
}

function getEstimatedIngredientPrice(item) {
  if (!isPurchasableIngredient(item)) return 0;
  if (priceBook[item]) return priceBook[item];

  const normalizedItem = normalize(item);
  const matchedEntry = Object.entries(priceBook).find(([name]) => {
    const normalizedName = normalize(name);
    return normalizedItem.includes(normalizedName) || normalizedName.includes(normalizedItem);
  });
  return matchedEntry ? matchedEntry[1] : 4500;
}

function isPurchasableIngredient(item) {
  return item && !nonPurchasableTags.has(item);
}

function uniqueByNormalize(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = normalize(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
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

  plan.forEach((day) => {
    day.menu.forEach((meal) => {
      meal.matched.forEach((ingredient) => usedIngredients.add(ingredient));
      meal.missing.forEach((ingredient) => missingWeekly.set(ingredient, getEstimatedIngredientPrice(ingredient)));
      difficultyCounts[meal.difficulty] += 1;
      totalCookingMinutes += meal.cookingMinutes;
      mealCount += 1;
    });
  });
  const weeklyBudget = [...missingWeekly.values()].reduce((sum, price) => sum + price, 0);

  const missingText = missingWeekly.size
    ? [...missingWeekly.keys()].slice(0, 8).join(", ")
    : "없음";

  summary.innerHTML = `
    점심과 저녁 기준으로 총 <strong>14끼</strong>를 만들었어요.
    입력 재료 ${ingredients.length}개 중 <strong>${usedIngredients.size || "여러"}가지</strong>가 반영됐고,
    추가 구매 예상 총액은 약 <strong>${formatWon(weeklyBudget)}</strong>입니다.
    <br />예산은 대형마트/온라인몰 소포장 기준의 평균적인 가격대로 계산했어요.
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
  const { naverUrl, youtubeUrl } = getRecipeUrls(meal.title);
  const matchedText = meal.matched.length > 0 ? meal.matched.join(", ") : "냉장고 기본 재료";
  const missingText = meal.missing.length > 0 ? meal.missing.join(", ") : "추가 구매 없음";
  const sourceText = "출처: 네이버 검색, 유튜브 검색";
  const priceLinks = meal.missing.length > 0 ? renderPriceLinks(meal.missing) : "";

  return `
    <section class="meal-item">
      <span class="meal-time">${meal.mealLabel}</span>
      <p class="meal-title">${meal.title}</p>
      <p class="meal-category">카테고리: ${meal.category}${meal.isCustom ? " · 내 레시피" : ""}</p>
      ${meal.isMealKit ? `<p class="meal-kit-label">밀키트/완제품</p>` : ""}
      <p class="meal-difficulty">난이도: ${getDifficultyLabel(meal.difficulty)} · 조리시간: 약 ${meal.cookingMinutes}분</p>
      <p class="meal-ingredients">활용 재료: ${matchedText}</p>
      <p class="meal-budget">추가 재료: ${missingText} · 예상 ${formatWon(meal.estimatedBudget)}</p>
      ${priceLinks}
      <p class="meal-source">${sourceText}</p>
      <div class="recipe-links">
        <a href="${naverUrl}" target="_blank" rel="noreferrer">네이버 레시피</a>
        <a href="${youtubeUrl}" target="_blank" rel="noreferrer">유튜브 영상</a>
      </div>
    </section>
  `;
}

function renderPriceLinks(missingItems) {
  return `
    <div class="price-links" aria-label="추가 재료 가격 확인 링크">
      ${uniqueByNormalize(missingItems)
        .map((item) => {
          const links = getIngredientPriceLinks(item);
          return `
            <div class="price-link-row">
              <strong>${item} · 약 ${formatWon(getEstimatedIngredientPrice(item))}</strong>
              <span>
                ${links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
              </span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function getIngredientPriceLinks(item) {
  const priceQuery = encodeURIComponent(`${item} 가격`);
  const itemQuery = encodeURIComponent(item);
  return [
    ["네이버", `https://search.naver.com/search.naver?query=${priceQuery}`],
    ["쿠팡", `https://www.coupang.com/np/search?q=${itemQuery}`],
    ["이마트", `https://emart.ssg.com/search.ssg?target=all&query=${itemQuery}`],
    ["롯데마트", `https://www.lotteon.com/search/search/search.ecn?render=search&platform=pc&q=${itemQuery}`]
  ];
}

function getRecipeUrls(title) {
  const query = encodeURIComponent(`${title} 레시피`);
  return {
    naverUrl: `https://search.naver.com/search.naver?query=${query}`,
    youtubeUrl: `https://www.youtube.com/results?search_query=${query}`
  };
}

function downloadCalendarFile(plan, startDate) {
  const events = plan.flatMap((dayPlan, dayIndex) => {
    return dayPlan.menu.map((meal) => createCalendarEvent(meal, addDays(startDate, dayIndex)));
  });
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Fridge Meal Planner//Weekly Meals//KO",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    ...events,
    "END:VCALENDAR"
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `fridge-meal-plan-${startDateInput.value || "week"}.ics`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function createCalendarEvent(meal, date) {
  const startHour = meal.mealKey === "lunch" ? 12 : 18;
  const startsAt = new Date(date.getFullYear(), date.getMonth(), date.getDate(), startHour, 0, 0);
  const endsAt = new Date(startsAt.getTime() + Math.max(meal.cookingMinutes, 30) * 60000);
  const { naverUrl, youtubeUrl } = getRecipeUrls(meal.title);
  const missingText = meal.missing.length > 0 ? meal.missing.join(", ") : "추가 구매 없음";
  const description = [
    `레시피 이름: ${meal.title}`,
    `카테고리: ${meal.category || "기본"}`,
    `구분: ${meal.isMealKit ? "밀키트/완제품" : "직접 조리"}`,
    `유튜브 링크: ${youtubeUrl}`,
    `블로그/레시피 링크: ${naverUrl}`,
    `추가 구매 재료: ${missingText}`
  ].join("\\n");

  return [
    "BEGIN:VEVENT",
    `UID:${createEventId()}@fridge-meal-planner`,
    `DTSTAMP:${formatCalendarDate(new Date(), true)}`,
    `DTSTART:${formatCalendarDate(startsAt)}`,
    `DTEND:${formatCalendarDate(endsAt)}`,
    `SUMMARY:${escapeCalendarText(`[${meal.mealLabel}] ${meal.title}`)}`,
    `DESCRIPTION:${escapeCalendarText(description)}`,
    "END:VEVENT"
  ].join("\r\n");
}

function addDays(date, dayCount) {
  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + dayCount);
  return nextDate;
}

function formatCalendarDate(date, useUtc = false) {
  const target = useUtc
    ? {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth() + 1,
        day: date.getUTCDate(),
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds()
      }
    : {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      };
  const stamp = `${target.year}${pad2(target.month)}${pad2(target.day)}T${pad2(target.hour)}${pad2(target.minute)}${pad2(target.second)}`;
  return useUtc ? `${stamp}Z` : stamp;
}

function pad2(value) {
  return String(value).padStart(2, "0");
}

function createEventId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeCalendarText(value) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function formatMinutes(minutes) {
  if (minutes < 60) return `${minutes}분`;
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return remainder ? `${hours}시간 ${remainder}분` : `${hours}시간`;
}
