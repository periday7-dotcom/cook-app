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
const firebaseSyncButton = document.querySelector("#firebaseSyncButton");
const firebaseSignOutButton = document.querySelector("#firebaseSignOutButton");
const createSyncLinkButton = document.querySelector("#createSyncLinkButton");
const exportDataButton = document.querySelector("#exportDataButton");
const importDataFile = document.querySelector("#importDataFile");
const syncStatus = document.querySelector("#syncStatus");
const ingredientChipInputs = document.querySelectorAll(".ingredient-chip-input");
const addChipButtons = document.querySelectorAll(".add-chip-button");
const chipLists = {
  cold: document.querySelector("#coldChips"),
  frozen: document.querySelector("#frozenChips"),
  room: document.querySelector("#roomChips"),
  seasoning: document.querySelector("#seasoningChips"),
  side: document.querySelector("#sideChips")
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
const customRecipeMethodInput = document.querySelector("#customRecipeMethod");
const saveCustomRecipeButton = document.querySelector("#saveCustomRecipeButton");
const customRecipeList = document.querySelector("#customRecipeList");
const recipeSearchInput = document.querySelector("#recipeSearchInput");
const recipeCuisineFilter = document.querySelector("#recipeCuisineFilter");
const recipeManagerSummary = document.querySelector("#recipeManagerSummary");
const recipeManagerList = document.querySelector("#recipeManagerList");
const recipeLoadMoreButton = document.querySelector("#recipeLoadMoreButton");
const plannerPanel = document.querySelector(".planner-panel");
const resultsPanel = document.querySelector(".results-panel");
const recipeDetailDialog = createRecipeDetailDialog();

let selectedPhoto = null;
let deferredInstallPrompt = null;
let variationSeed = 0;
let lastPlan = loadSavedPlan();
let lastIngredients = loadSavedPlanIngredients();
let editingRecipeId = null;
let storedIngredients = loadStoredIngredients();
let storedMealKits = loadStoredMealKits();
let customRecipes = loadCustomRecipes();
let seedRecipes = [...recipes];
let recipeOverrides = loadRecipeOverrides();
let deletedRecipeIds = loadDeletedRecipeIds();
let recipeDataLoadStatus = "loading";
let recipeManagerVisibleCount = 120;
let activeTab = "builder";
let firebaseUser = null;
let firebaseUnsubscribe = null;
let firebaseApplyingRemote = false;
let firebaseSaveTimer = null;

setupTabs();
startDateInput.value = getTodayInputValue();
applyImportedSettings(loadAppSettings());
renderIngredientChips();
renderMealKitChips();
renderCustomRecipes();
loadSeedRecipes();
if (lastPlan) {
  alternatePlanButton.disabled = false;
  calendarButton.disabled = false;
  renderPlan(lastPlan, lastIngredients);
}
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
firebaseSyncButton?.addEventListener("click", signInToFirebaseSync);
firebaseSignOutButton?.addEventListener("click", signOutFromFirebaseSync);
createSyncLinkButton?.addEventListener("click", createSyncLink);
exportDataButton?.addEventListener("click", exportAppData);
importDataFile?.addEventListener("change", importAppData);
importDataFromUrlHash();
setupFirebaseSync();

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
    activateTab("ingredients");
    document.querySelector("#coldIngredient")?.focus();
    return;
  }

  const difficultyPreferences = getDifficultyPreferences();
  const categoryPreferences = getCategoryPreferences();
  const plan = buildPlan(ingredients, mealKits, avoid, styleInput.value, difficultyPreferences, categoryPreferences);
  lastPlan = plan;
  lastIngredients = ingredients;
  saveAppSettings();
  saveSavedPlan();
  alternatePlanButton.disabled = false;
  calendarButton.disabled = false;
  renderPlan(plan, ingredients);
  activateTab("plan");
});

function setupTabs() {
  if (!form || form.querySelector(".tab-panels")) return;

  document.querySelector(".app-shell")?.classList.add("tabbed-app");
  plannerPanel?.classList.add("tabbed-shell");

  const tabs = [
    ["plan", "식단"],
    ["builder", "식단짜기"],
    ["ingredients", "재료관리"],
    ["recipes", "레시피관리"],
    ["photo", "사진"]
  ];

  const tabNav = document.createElement("nav");
  tabNav.className = "tab-nav";
  tabNav.setAttribute("aria-label", "앱 메뉴");
  tabNav.innerHTML = tabs
    .map(
      ([key, label]) => `
        <button class="tab-button" type="button" data-tab="${key}" aria-controls="tab-${key}">
          ${label}
        </button>
      `
    )
    .join("");

  const panels = document.createElement("div");
  panels.className = "tab-panels";
  panels.innerHTML = tabs
    .map(([key, label]) => `<section id="tab-${key}" class="tab-panel" data-tab-panel="${key}" aria-label="${label}"></section>`)
    .join("");

  form.prepend(panels);
  form.prepend(tabNav);

  const panelMap = Object.fromEntries(
    [...panels.querySelectorAll("[data-tab-panel]")].map((panel) => [panel.dataset.tabPanel, panel])
  );
  const submitButton = form.querySelector('button[type="submit"]');
  const planActions = document.querySelector(".plan-actions");

  appendExisting(panelMap.plan, resultsPanel);
  appendExisting(panelMap.builder, document.querySelector(".intro"));
  appendExisting(panelMap.builder, document.querySelector(".form-grid"));
  appendExisting(panelMap.builder, document.querySelector(".ratio-card"));
  appendExisting(panelMap.builder, document.querySelector(".category-ratio-card"));
  appendExisting(panelMap.builder, submitButton);
  appendExisting(panelMap.plan, planActions);
  appendExisting(panelMap.ingredients, document.querySelector(".ingredient-board"));
  appendExisting(panelMap.ingredients, document.querySelector(".meal-kit-board"));
  appendExisting(panelMap.ingredients, document.querySelector(".sync-card"));
  appendExisting(panelMap.recipes, document.querySelector(".custom-recipe-card"));
  appendExisting(panelMap.recipes, document.querySelector(".recipe-manager-card"));
  appendExisting(panelMap.photo, document.querySelector(".ocr-card"));

  tabNav.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tab));
  });

  activateTab(lastPlan ? "plan" : "builder");
}

function appendExisting(panel, node) {
  if (panel && node) panel.appendChild(node);
}

function activateTab(tab) {
  if (!tab || !form?.querySelector(`[data-tab-panel="${tab}"]`)) return;
  activeTab = tab;

  form.querySelectorAll(".tab-button").forEach((button) => {
    const isActive = button.dataset.tab === tab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  form.querySelectorAll("[data-tab-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.tabPanel === tab);
    panel.hidden = panel.dataset.tabPanel !== tab;
  });

  requestAnimationFrame(() => {
    document.querySelector(".tab-nav")?.scrollIntoView({ block: "start", behavior: "smooth" });
  });
}

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

function getEmptyStoredIngredients() {
  return { cold: [], frozen: [], room: [], seasoning: [], side: [] };
}

function loadStoredIngredients() {
  const empty = getEmptyStoredIngredients();
  try {
    return { ...empty, ...JSON.parse(localStorage.getItem("storedIngredients") || "{}") };
  } catch {
    return empty;
  }
}

function saveStoredIngredients() {
  localStorage.setItem("storedIngredients", JSON.stringify(storedIngredients));
  ingredientsInput.value = getAllStoredIngredients().join(", ");
  scheduleCloudSave();
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

function removeIngredientChip(storage, ingredientIndex) {
  if (!storage || !Array.isArray(storedIngredients[storage])) return;
  const index = Number(ingredientIndex);
  if (!Number.isInteger(index) || index < 0) return;
  storedIngredients[storage].splice(index, 1);
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
            (item, index) => `
              <button class="ingredient-chip" type="button" data-storage="${storage}" data-index="${index}" title="눌러서 삭제">
                ${escapeHtml(item)}<span aria-hidden="true">×</span>
              </button>
            `
          )
          .join("")
      : `<span class="empty-chip">아직 없음</span>`;
  });

  document.querySelectorAll(".ingredient-chip[data-storage]").forEach((chip) => {
    chip.addEventListener("click", () => removeIngredientChip(chip.dataset.storage, chip.dataset.index));
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
  scheduleCloudSave();
}

function loadSavedPlan() {
  try {
    return JSON.parse(localStorage.getItem("lastPlan") || "null");
  } catch {
    return null;
  }
}

function loadSavedPlanIngredients() {
  try {
    return JSON.parse(localStorage.getItem("lastIngredients") || "[]");
  } catch {
    return [];
  }
}

function saveSavedPlan() {
  if (!lastPlan) return;
  localStorage.setItem("lastPlan", JSON.stringify(lastPlan));
  localStorage.setItem("lastIngredients", JSON.stringify(lastIngredients || []));
  scheduleCloudSave();
}

function getCurrentAppSettings() {
  return {
    avoid: avoidInput.value,
    style: styleInput.value,
    startDate: startDateInput.value,
    lunchEase: lunchEaseInput.value,
    dinnerEase: dinnerEaseInput.value,
    categoryPreferences: getCategoryPreferences()
  };
}

function loadAppSettings() {
  try {
    return JSON.parse(localStorage.getItem("appSettings") || "{}");
  } catch {
    return {};
  }
}

function saveAppSettings() {
  localStorage.setItem("appSettings", JSON.stringify(getCurrentAppSettings()));
  scheduleCloudSave();
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
  scheduleCloudSave();
}

saveCustomRecipeButton.addEventListener("click", () => {
  const title = customRecipeNameInput.value.trim();
  const category = customRecipeCategoryInput.value.trim() || "내 레시피";
  const tags = parseList(customRecipeIngredientsInput.value);
  const mealValue = customRecipeMealInput.value;
  const methodText = customRecipeMethodInput?.value.trim() || "";
  const methodSteps = parseMethodSteps(methodText);

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
      methodText,
      methodSteps,
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
    methodText,
    methodSteps,
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
            <article class="custom-recipe-item clickable-recipe" data-action="view-custom" data-id="${recipe.id}" tabindex="0">
              <div>
                <strong>${recipe.title}</strong>
                <span>${recipe.category} · ${recipe.tags.join(", ")}</span>
              </div>
              <div class="custom-recipe-actions">
                <button type="button" data-action="view-custom" data-id="${recipe.id}">상세</button>
                <button type="button" data-action="edit" data-id="${recipe.id}">수정</button>
                <button type="button" data-action="delete" data-id="${recipe.id}">삭제</button>
              </div>
            </article>
          `
        )
        .join("")
    : `<p class="empty-custom-recipes">아직 등록한 레시피가 없습니다.</p>`;

  customRecipeList.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (element.matches("article") && event.target.closest("button")) return;
      const recipe = customRecipes.find((item) => item.id === element.dataset.id);
      if (!recipe) return;
      if (element.dataset.action === "view-custom") {
        showRecipeDetail(recipe);
        return;
      }
      if (element.dataset.action === "delete") {
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
      if (customRecipeMethodInput) {
        customRecipeMethodInput.value = recipe.methodText || (recipe.methodSteps || []).join("\n");
      }
      saveCustomRecipeButton.textContent = "내 레시피 수정 완료";
    });
  });

  customRecipeList.querySelectorAll(".clickable-recipe").forEach((item) => {
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const recipe = customRecipes.find((entry) => entry.id === item.dataset.id);
        if (recipe) showRecipeDetail(recipe);
      }
    });
  });
}

function clearCustomRecipeForm() {
  customRecipeNameInput.value = "";
  customRecipeCategoryInput.value = "";
  customRecipeIngredientsInput.value = "";
  customRecipeMealInput.value = "both";
  if (customRecipeMethodInput) customRecipeMethodInput.value = "";
  saveCustomRecipeButton.textContent = "내 레시피 추가";
}

function collectBackupData() {
  return {
    app: "fridge-meal-planner",
    version: 2,
    exportedAt: new Date().toISOString(),
    storedIngredients,
    storedMealKits,
    customRecipes,
    recipeOverrides,
    deletedRecipeIds: [...deletedRecipeIds],
    lastPlan,
    lastIngredients,
    settings: getCurrentAppSettings()
  };
}

function exportAppData() {
  const data = collectBackupData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = `fridge-meal-planner-backup-${date}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setSyncStatus("백업 파일을 만들었습니다. 이 파일을 다른 기기에서 불러오면 같은 데이터로 맞출 수 있어요.");
}

async function createSyncLink() {
  try {
    const encoded = encodeSyncData(collectBackupData());
    const url = `${location.origin}${location.pathname}${location.search}#sync=${encoded}`;

    if (url.length > 120000) {
      setSyncStatus("동기화 링크가 너무 길어요. 내 레시피나 식단 데이터가 많아서 이 경우에는 백업 파일 방식을 써주세요.", true);
      return;
    }

    if (navigator.share) {
      await navigator.share({
        title: "냉장고 식단 동기화 링크",
        text: "이 링크를 다른 기기에서 열면 냉장고 식단 앱 데이터가 옮겨집니다.",
        url
      });
      setSyncStatus("동기화 링크를 공유했습니다. 다른 기기에서 링크를 열면 자동으로 불러옵니다.");
      return;
    }

    await navigator.clipboard.writeText(url);
    setSyncStatus("동기화 링크를 복사했습니다. 카톡/메모/메일로 보내고 다른 기기에서 열어주세요.");
  } catch {
    setSyncStatus("동기화 링크를 만들지 못했습니다. 브라우저 권한 문제일 수 있어 백업 파일 방식을 사용해주세요.", true);
  }
}

async function importAppData(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const data = JSON.parse(await file.text());
    applyBackupData(data);
    setSyncStatus("백업 파일을 불러왔습니다. 이 기기의 재료, 식단, 내 레시피가 백업 내용으로 바뀌었어요.");
  } catch {
    setSyncStatus("백업 파일을 읽지 못했습니다. 이 앱에서 만든 JSON 백업 파일인지 확인해주세요.", true);
  } finally {
    event.target.value = "";
  }
}

function importDataFromUrlHash() {
  if (!location.hash.startsWith("#sync=")) return;

  try {
    const data = decodeSyncData(location.hash.slice("#sync=".length));
    applyBackupData(data);
    history.replaceState(null, "", `${location.pathname}${location.search}`);
    setSyncStatus("동기화 링크를 불러왔습니다. 이 기기의 데이터가 링크 내용으로 바뀌었어요.");
    activateTab(lastPlan ? "plan" : "ingredients");
  } catch {
    setSyncStatus("동기화 링크를 읽지 못했습니다. 링크가 중간에 잘리지 않았는지 확인해주세요.", true);
  }
}

function applyBackupData(data) {
  if (data.app !== "fridge-meal-planner") {
    throw new Error("not-backup");
  }

  storedIngredients = { ...getEmptyStoredIngredients(), ...(data.storedIngredients || {}) };
  storedMealKits = Array.isArray(data.storedMealKits) ? data.storedMealKits : [];
  customRecipes = Array.isArray(data.customRecipes) ? data.customRecipes : [];
  recipeOverrides = data.recipeOverrides && typeof data.recipeOverrides === "object" ? data.recipeOverrides : {};
  deletedRecipeIds = new Set(Array.isArray(data.deletedRecipeIds) ? data.deletedRecipeIds : []);
  lastPlan = Array.isArray(data.lastPlan) ? data.lastPlan : null;
  lastIngredients = Array.isArray(data.lastIngredients) ? data.lastIngredients : [];

  applyImportedSettings(data.settings || {});
  saveAppSettings();
  saveStoredIngredients();
  saveStoredMealKits();
  saveCustomRecipes();
  saveRecipeOverrides();
  saveDeletedRecipeIds();
  if (lastPlan) {
    saveSavedPlan();
    alternatePlanButton.disabled = false;
    calendarButton.disabled = false;
    renderPlan(lastPlan, lastIngredients);
  } else {
    localStorage.removeItem("lastPlan");
    localStorage.removeItem("lastIngredients");
  }

  renderIngredientChips();
  renderMealKitChips();
  renderCustomRecipes();
  renderRecipeManager();
  updateEaseLabels();
  updateCategoryRatioLabels();
}

function encodeSyncData(data) {
  const json = JSON.stringify(data);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function decodeSyncData(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function applyImportedSettings(settings) {
  if (typeof settings.avoid === "string") avoidInput.value = settings.avoid;
  if (typeof settings.style === "string") styleInput.value = settings.style;
  if (typeof settings.startDate === "string") startDateInput.value = settings.startDate || getTodayInputValue();
  if (settings.lunchEase !== undefined) lunchEaseInput.value = String(settings.lunchEase);
  if (settings.dinnerEase !== undefined) dinnerEaseInput.value = String(settings.dinnerEase);
  if (settings.categoryPreferences?.weights) setCategoryRatios(settings.categoryPreferences.weights);
  if (randomCategoryModeInput) {
    randomCategoryModeInput.checked = Boolean(settings.categoryPreferences?.random);
  }
}

function setSyncStatus(message, isError = false) {
  if (!syncStatus) return;
  syncStatus.textContent = message;
  syncStatus.classList.toggle("is-error", isError);
}

function setupFirebaseSync() {
  if (window.firebaseSync) {
    attachFirebaseSync();
    return;
  }

  window.addEventListener("firebase-sync-ready", attachFirebaseSync, { once: true });
  setSyncStatus("자동 동기화를 준비하는 중입니다.");
}

function attachFirebaseSync() {
  const sync = window.firebaseSync;
  if (!sync) {
    setSyncStatus("자동 동기화를 불러오지 못했습니다. 인터넷 연결을 확인해주세요.", true);
    return;
  }

  sync.onAuthStateChanged(async (user) => {
    firebaseUser = user;
    updateFirebaseButtons();

    if (firebaseUnsubscribe) {
      firebaseUnsubscribe();
      firebaseUnsubscribe = null;
    }

    if (!user) {
      setSyncStatus("Google로 로그인하면 핸드폰과 PC가 자동으로 같은 데이터를 사용합니다.");
      return;
    }

    setSyncStatus(`${user.displayName || "Google 계정"}으로 동기화 중입니다.`);
    await loadCloudDataOnce(user.uid);
    firebaseUnsubscribe = sync.onSnapshot(sync.userDoc(user.uid), (snapshot) => {
      const cloudData = snapshot.data()?.appData;
      if (!cloudData) return;
      applyCloudData(cloudData);
    });
    scheduleCloudSave();
  });
}

async function signInToFirebaseSync() {
  const sync = window.firebaseSync;
  if (!sync) {
    setSyncStatus("자동 동기화 준비가 아직 끝나지 않았습니다. 잠시 후 다시 눌러주세요.", true);
    return;
  }

  try {
    setSyncStatus("Google 로그인 창을 여는 중입니다.");
    await sync.signIn();
  } catch {
    setSyncStatus("Google 로그인에 실패했습니다. Firebase Authentication 설정과 허용 도메인을 확인해주세요.", true);
  }
}

async function signOutFromFirebaseSync() {
  try {
    await window.firebaseSync?.signOut();
    firebaseUser = null;
    updateFirebaseButtons();
    setSyncStatus("동기화에서 로그아웃했습니다. 이 기기의 저장 데이터는 그대로 남아 있습니다.");
  } catch {
    setSyncStatus("로그아웃하지 못했습니다. 잠시 후 다시 시도해주세요.", true);
  }
}

function updateFirebaseButtons() {
  if (firebaseSyncButton) {
    firebaseSyncButton.textContent = firebaseUser ? "자동 동기화 켜짐" : "Google로 자동 동기화";
    firebaseSyncButton.disabled = Boolean(firebaseUser);
  }
  if (firebaseSignOutButton) {
    firebaseSignOutButton.hidden = !firebaseUser;
  }
}

async function loadCloudDataOnce(uid) {
  const sync = window.firebaseSync;
  if (!sync) return;

  const snapshot = await sync.getDoc(sync.userDoc(uid));
  const cloudData = snapshot.data()?.appData;
  if (cloudData) {
    applyCloudData(cloudData);
    setSyncStatus("클라우드에 저장된 데이터를 이 기기에 불러왔습니다.");
    return;
  }

  await saveCloudDataNow();
  setSyncStatus("이 기기의 현재 데이터를 클라우드에 처음 저장했습니다.");
}

function applyCloudData(data) {
  firebaseApplyingRemote = true;
  try {
    applyBackupData(data);
    activateTab(lastPlan ? "plan" : activeTab || "ingredients");
  } finally {
    firebaseApplyingRemote = false;
  }
}

function scheduleCloudSave() {
  if (firebaseApplyingRemote || !firebaseUser || !window.firebaseSync) return;
  clearTimeout(firebaseSaveTimer);
  firebaseSaveTimer = setTimeout(saveCloudDataNow, 900);
}

async function saveCloudDataNow() {
  if (firebaseApplyingRemote || !firebaseUser || !window.firebaseSync) return;

  try {
    const sync = window.firebaseSync;
    await sync.setDoc(
      sync.userDoc(firebaseUser.uid),
      {
        appData: collectBackupData(),
        updatedAt: sync.serverTimestamp()
      },
      { merge: true }
    );
    setSyncStatus(`${firebaseUser.displayName || "Google 계정"}에 자동 저장됐습니다.`);
  } catch {
    setSyncStatus("클라우드 저장에 실패했습니다. Firestore 권한 설정이나 인터넷 연결을 확인해주세요.", true);
  }
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
  scheduleCloudSave();
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
  scheduleCloudSave();
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
            <article class="recipe-manager-item clickable-recipe ${deleted ? "is-disabled" : ""}" data-action="view-seed" data-id="${recipe.id}" tabindex="0">
              <div>
                <strong>${displayRecipe.title}</strong>
                <span>${displayRecipe.cuisine || "한식"} · ${displayRecipe.category || "기본"} · ${(displayRecipe.tags || []).slice(0, 5).join(", ")}</span>
              </div>
              <div class="recipe-manager-actions">
                <button type="button" data-action="view-seed" data-id="${recipe.id}">상세</button>
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

  recipeManagerList.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (element.matches("article") && event.target.closest("button")) return;
      const recipe = seedRecipes.find((item) => item.id === element.dataset.id);
      if (!recipe) return;
      if (element.dataset.action === "view-seed") {
        showRecipeDetail({ ...recipe, ...(recipeOverrides[recipe.id] || {}) });
        return;
      }
      if (element.dataset.action === "delete-seed") {
        deletedRecipeIds.add(recipe.id);
        saveDeletedRecipeIds();
        renderRecipeManager();
        return;
      }
      if (element.dataset.action === "restore-seed") {
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
      if (customRecipeMethodInput) {
        customRecipeMethodInput.value = current.methodText || (current.methodSteps || current.sourceMethodSteps || []).join("\n");
      }
      editingRecipeId = `override:${recipe.id}`;
      saveCustomRecipeButton.textContent = "기본 레시피 수정 저장";
    });
  });

  recipeManagerList.querySelectorAll(".clickable-recipe").forEach((item) => {
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const recipe = seedRecipes.find((entry) => entry.id === item.dataset.id);
        if (recipe) showRecipeDetail({ ...recipe, ...(recipeOverrides[recipe.id] || {}) });
      }
    });
  });
}

function createRecipeDetailDialog() {
  const dialog = document.createElement("section");
  dialog.className = "recipe-detail-dialog";
  dialog.hidden = true;
  dialog.innerHTML = `
    <div class="recipe-detail-backdrop" data-detail-close></div>
    <article class="recipe-detail-card" role="dialog" aria-modal="true" aria-labelledby="recipeDetailTitle">
      <div class="recipe-detail-header">
        <div>
          <span class="recipe-detail-kicker">Recipe Detail</span>
          <h3 id="recipeDetailTitle">레시피 상세</h3>
        </div>
        <button class="ghost-button recipe-detail-close" type="button" data-detail-close>닫기</button>
      </div>
      <div class="recipe-detail-body"></div>
    </article>
  `;
  document.body.appendChild(dialog);
  dialog.querySelectorAll("[data-detail-close]").forEach((button) => {
    button.addEventListener("click", () => {
      dialog.hidden = true;
      document.body.classList.remove("has-recipe-detail");
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !dialog.hidden) {
      dialog.hidden = true;
      document.body.classList.remove("has-recipe-detail");
    }
  });
  return dialog;
}

function showRecipeDetail(recipe) {
  if (!recipeDetailDialog || !recipe) return;
  const body = recipeDetailDialog.querySelector(".recipe-detail-body");
  const title = recipeDetailDialog.querySelector("#recipeDetailTitle");
  title.textContent = recipe.title;
  body.innerHTML = renderRecipeDetail(recipe);
  recipeDetailDialog.hidden = false;
  document.body.classList.add("has-recipe-detail");
}

function renderRecipeDetail(recipe) {
  const tags = uniqueByNormalize(recipe.tags || []);
  const estimatedTotal = estimateBudget(tags);
  const sourceName = recipe.sourceName || "레시피 검색";
  const sourceUrl = recipe.sourceUrl || getRecipeUrls(recipe.title).naverUrl;
  const blogUrl =
    recipe.naverBlogUrl ||
    recipe.naverBlogSearchUrl ||
    `https://search.naver.com/search.naver?where=blog&query=${encodeURIComponent(recipe.title + " 레시피")}`;
  const blogTitle = recipe.naverBlogTitle || "네이버 블로그 대표/검색";
  const youtubeRecipeUrl = recipe.youtubeUrl || getRecipeUrls(recipe.title).youtubeUrl;
  const youtubeTitle = recipe.youtubeTitle || "유튜브 레시피 검색";
  const detailFile = recipe.detailFile || "";
  const method = getRecipeMethodSteps(recipe);
  const mdText = buildRecipeMarkdown(recipe);
  const mdUrl = `data:text/markdown;charset=utf-8,${encodeURIComponent(mdText)}`;
  const mdFileName = `${safeFileName(recipe.id || "custom")}-${safeFileName(recipe.title)}.md`;

  return `
    <div class="recipe-detail-meta">
      <span>${escapeHtml(recipe.cuisine || "내 레시피")}</span>
      <span>${escapeHtml(recipe.category || getRecipeCategory(recipe))}</span>
      <span>${getDifficultyLabel(recipe.difficulty || 2)}</span>
      <span>약 ${recipe.cookingMinutes || getCookingMinutes(recipe.title)}분</span>
    </div>

    <section class="recipe-detail-section">
      <h4>상세 재료와 예산</h4>
      <div class="recipe-detail-table">
        ${
          tags.length
            ? tags
                .map(
                  (tag) => `
                    <div>
                      <span>${escapeHtml(tag)}</span>
                      <strong>${formatWon(getEstimatedIngredientPrice(tag))}</strong>
                    </div>
                  `
                )
                .join("")
            : `<p class="empty-custom-recipes">등록된 재료가 없습니다.</p>`
        }
      </div>
      <p class="recipe-detail-budget">예상 재료비 합계: <strong>${formatWon(estimatedTotal)}</strong></p>
    </section>

    <section class="recipe-detail-section">
      <h4>만드는 방법</h4>
      <ol class="recipe-method-list">
        ${method.map((step) => `<li>${escapeHtml(step.replace(/^\\d+\\.\\s*/, ""))}</li>`).join("")}
      </ol>
    </section>

    <section class="recipe-detail-section">
      <h4>추가 참조 링크</h4>
      <div class="recipe-links">
        <a href="${sourceUrl}" target="_blank" rel="noreferrer">${escapeHtml(sourceName)}</a>
        <a href="${blogUrl}" target="_blank" rel="noreferrer">네이버 블로그${blogTitle ? ` · ${escapeHtml(blogTitle)}` : ""}</a>
        <a href="${youtubeRecipeUrl}" target="_blank" rel="noreferrer">
          유튜브${recipe.youtubeViewCount ? ` · 조회 ${formatCount(recipe.youtubeViewCount)}` : ""}
        </a>
        <a href="${getRecipeUrls(recipe.title).naverUrl}" target="_blank" rel="noreferrer">네이버 추가 검색</a>
        <a href="${getRecipeUrls(recipe.title).youtubeUrl}" target="_blank" rel="noreferrer">유튜브 추가 검색</a>
        ${detailFile ? `<a href="${detailFile}" target="_blank" rel="noreferrer">MD 원본 파일</a>` : ""}
        <a href="${mdUrl}" download="${mdFileName}">MD 다운로드</a>
      </div>
    </section>
  `;
}

function getRecipeMethodSteps(recipe) {
  if (Array.isArray(recipe.methodSteps) && recipe.methodSteps.length) {
    return recipe.methodSteps.map((step) => String(step).replace(/^\s*\d+[.)]\s*/, "").trim()).filter(Boolean);
  }
  if (Array.isArray(recipe.sourceMethodSteps) && recipe.sourceMethodSteps.length) {
    return recipe.sourceMethodSteps.map((step) => String(step).replace(/^\s*\d+[.)]\s*/, "").trim()).filter(Boolean);
  }
  if (recipe.methodText) {
    const parsed = parseMethodSteps(recipe.methodText);
    if (parsed.length) return parsed;
  }

  const tags = recipe.tags || [];
  const main = tags[0] || "주재료";
  const sub = tags.slice(1).join(", ") || "부재료";
  const categoryText = `${recipe.title} ${recipe.category || ""}`;

  if (/미역국/.test(categoryText)) {
    return [
      "미역은 물에 불린 뒤 여러 번 헹궈 물기를 짭니다.",
      `냄비에 참기름을 두르고 ${main}, 미역을 넣어 향이 날 때까지 볶습니다.`,
      "물이나 육수를 붓고 끓어오르면 중약불로 줄여 충분히 우립니다.",
      "국간장과 마늘로 간을 맞추고 부족한 간은 소금으로 조절합니다.",
      "재료가 부드럽게 익으면 거품을 걷고 따뜻하게 냅니다."
    ];
  }

  if (/된장국|된장찌개|청국장/.test(categoryText)) {
    return [
      "멸치육수나 물을 끓이고 채소와 두부를 먹기 좋은 크기로 썹니다.",
      "된장이나 청국장을 체에 풀어 국물에 고르게 섞습니다.",
      `${main}, ${sub}를 단단한 재료부터 넣고 끓입니다.`,
      "거품을 걷고 마늘, 대파, 고춧가루 등으로 맛을 조정합니다.",
      "두부와 향채를 마지막에 넣어 한소끔 더 끓입니다."
    ];
  }

  if (/김치찌개|김칫국|김치/.test(categoryText) && /찌개|국|탕/.test(categoryText)) {
    return [
      "김치는 먹기 좋은 크기로 자르고 고기나 통조림 재료는 물기를 정리합니다.",
      `냄비에 ${main}, 김치를 넣고 김치 향이 올라올 때까지 볶습니다.`,
      "물이나 육수를 붓고 김치가 부드러워질 때까지 끓입니다.",
      "두부, 양파, 대파 등 부재료를 넣고 간장이나 고춧가루로 간을 맞춥니다.",
      "중약불에서 맛을 충분히 우린 뒤 마지막 간을 확인합니다."
    ];
  }

  if (/국|탕|찌개|전골|Soup|Stew|Chowder/i.test(categoryText)) {
    return [
      `${main}, ${sub}를 손질하고 국물에 들어갈 재료를 크기별로 나눕니다.`,
      "냄비에 육수나 물을 넣고 끓인 뒤 향을 내는 재료를 먼저 넣습니다.",
      "익는 시간이 긴 재료부터 넣고 중불에서 충분히 끓입니다.",
      "간장, 된장, 고추장, 소금 등 메뉴에 맞는 양념으로 간을 맞춥니다.",
      "마지막에 대파나 향채를 넣고 한소끔 끓여 마무리합니다."
    ];
  }

  if (/조림|Braise/i.test(categoryText)) {
    return [
      `${main}, ${sub}를 조림용 크기로 손질합니다.`,
      "간장, 단맛 재료, 마늘, 물이나 육수를 섞어 조림 양념을 만듭니다.",
      "냄비에 재료와 양념을 넣고 끓어오르면 중약불로 줄입니다.",
      "중간중간 양념을 끼얹으며 속까지 익도록 조립니다.",
      "국물이 자작해지고 윤기가 돌면 불을 끄고 잠시 두어 맛을 배게 합니다."
    ];
  }

  if (/구이|Roast|Schnitzel|Piccata/i.test(categoryText)) {
    return [
      `${main}, ${sub}를 각각 곁들일 크기로 준비하고 물기를 제거합니다.`,
      "소금, 후추, 간장 양념 등 메뉴에 맞게 밑간합니다.",
      "팬이나 오븐을 충분히 예열한 뒤 겉면부터 노릇하게 익힙니다.",
      "속까지 익도록 불을 조절하고 필요하면 소스나 양념을 덧바릅니다.",
      "잠시 휴지한 뒤 먹기 좋은 크기로 담아냅니다."
    ];
  }

  if (/볶음|Stir|Teriyaki|Kung Pao|Mapo|Mongolian|Szechuan|Sichuan/i.test(categoryText)) {
    return [
      `${main}, ${sub}를 손질하고 물기를 제거합니다.`,
      "팬을 강하게 예열한 뒤 기름을 두르고 마늘, 파 등 향 재료를 먼저 볶습니다.",
      "주재료를 넣어 겉면을 빠르게 익히고 채소를 순서대로 더합니다.",
      "간장, 고추장, 굴소스, 설탕 등 메뉴에 맞는 양념을 넣어 센 불에서 섞습니다.",
      "소스가 재료에 고르게 입혀지면 불을 끄고 참기름이나 향채로 마무리합니다."
    ];
  }

  if (/전|부침|Frittata|Quiche/i.test(categoryText)) {
    return [
      `${main}, ${sub}를 잘게 손질하고 물기가 많으면 가볍게 짭니다.`,
      "밀가루, 부침가루, 달걀 등 메뉴에 맞는 반죽을 만듭니다.",
      "손질한 재료를 반죽에 섞고 팬에 기름을 넉넉히 두릅니다.",
      "앞뒤로 노릇하게 부치며 속까지 익힙니다.",
      "기름을 빼고 초간장이나 곁들임 소스와 함께 냅니다."
    ];
  }

  if (/나물|무침/.test(categoryText)) {
    return [
      `${main}, ${sub}를 씻고 질긴 부분을 정리합니다.`,
      "데칠 재료는 끓는 물에 짧게 데친 뒤 찬물에 헹궈 물기를 짭니다.",
      "간장, 소금, 마늘, 참기름 등으로 기본 양념을 만듭니다.",
      "재료와 양념을 손끝으로 가볍게 버무립니다.",
      "간을 확인하고 깨나 다진 파를 더해 마무리합니다."
    ];
  }

  if (/볶음밥|덮밥|Rice Bowl|Risotto/i.test(categoryText)) {
    return [
      `${main}, ${sub}를 밥과 잘 섞이도록 작게 손질합니다.`,
      "팬에 기름을 두르고 향 재료와 단단한 재료부터 볶습니다.",
      "밥이나 덮밥 소스를 넣고 재료와 고르게 섞습니다.",
      "간장, 소금, 후추 등으로 간을 맞추고 수분을 날립니다.",
      "그릇에 담고 달걀, 김가루, 깨 등 어울리는 고명을 올립니다."
    ];
  }

  if (/면|국수|우동|소면|칼국수|Noodle|Pasta|Spaghetti|Carbonara|Alfredo|Pesto/i.test(categoryText)) {
    return [
      `${main}, ${sub}를 손질하고 소스나 육수를 먼저 준비합니다.`,
      "면은 포장 기준보다 약간 짧게 삶아 물기를 빼고 면수를 조금 남깁니다.",
      "팬이나 냄비에서 소스, 육수, 주재료를 먼저 끓이거나 볶습니다.",
      "삶은 면을 넣고 면수로 농도를 조절하며 고르게 섞습니다.",
      "간을 맞춘 뒤 치즈, 김가루, 파, 깨 등 메뉴에 맞는 고명을 올립니다."
    ];
  }

  if (/Curry|카레/i.test(categoryText)) {
    return [
      `${main}, ${sub}를 카레에 어울리는 크기로 썹니다.`,
      "냄비에 기름을 두르고 단단한 채소와 고기를 먼저 볶습니다.",
      "물이나 육수를 붓고 재료가 부드러워질 때까지 끓입니다.",
      "카레 양념을 풀어 농도가 나도록 저어가며 끓입니다.",
      "밥이나 빵에 곁들이고 기호에 따라 후추나 허브를 더합니다."
    ];
  }

  if (/샐러드|Salad|Sandwich|Burger|Melt|Club/i.test(categoryText)) {
    return [
      `${main}, ${sub}를 씻고 물기를 제거한 뒤 먹기 좋은 크기로 준비합니다.`,
      "익혀야 하는 고기, 달걀, 해산물은 먼저 조리해 식힙니다.",
      "드레싱이나 소스를 따로 섞어 간을 확인합니다.",
      "채소와 주재료를 담고 소스를 고르게 더합니다.",
      "빵이나 밥을 쓰는 메뉴는 마지막에 조립해 바로 먹습니다."
    ];
  }

  return [
    `${main}, ${sub}를 손질합니다.`,
    "조리도구를 예열하고 기본 양념을 준비합니다.",
    "익는 시간이 긴 재료부터 넣고 순서대로 조리합니다.",
    "간을 맞추고 재료가 고르게 익었는지 확인합니다.",
    "그릇에 담고 기호에 맞게 마무리합니다."
  ];
}

function buildRecipeMarkdown(recipe) {
  const tags = uniqueByNormalize(recipe.tags || []);
  const blogUrl =
    recipe.naverBlogUrl ||
    recipe.naverBlogSearchUrl ||
    `https://search.naver.com/search.naver?where=blog&query=${encodeURIComponent(recipe.title + " 레시피")}`;
  const blogTitle = recipe.naverBlogTitle || `${recipe.title} 네이버 블로그 검색`;
  const youtubeRecipeUrl = recipe.youtubeUrl || getRecipeUrls(recipe.title).youtubeUrl;
  const youtubeTitle = recipe.youtubeTitle || `${recipe.title} 유튜브 검색`;
  const ingredientRows = tags.map((tag) => `| ${tag} | ${formatWon(getEstimatedIngredientPrice(tag))} |`).join("\n") || "| 추가 정보 없음 | - |";
  return `# ${recipe.title}

## 기본 정보

| 항목 | 내용 |
|---|---|
| 음식 카테고리 | ${recipe.cuisine || "내 레시피"} / ${recipe.category || getRecipeCategory(recipe)} |
| 난이도 | ${getDifficultyLabel(recipe.difficulty || 2)} |
| 만드는 시간 | 약 ${recipe.cookingMinutes || getCookingMinutes(recipe.title)}분 |
| 식사 구분 | ${(recipe.meal || ["lunch", "dinner"]).join(", ")} |
| 예상 재료비 | ${formatWon(estimateBudget(tags))} |

## 상세 재료

| 재료 | 예산 기준가 |
|---|---:|
${ingredientRows}

## 만드는 방법

${getRecipeMethodSteps(recipe).map((step, index) => `${index + 1}. ${step}`).join("\n")}

## 참조 레시피 링크

- [네이버 블로그 대표 레시피: ${blogTitle}](${blogUrl})
- [유튜브 인기 레시피: ${youtubeTitle}](${youtubeRecipeUrl})${recipe.youtubeViewCount ? ` - 조회수 약 ${recipe.youtubeViewCount.toLocaleString("ko-KR")}회` : ""}
- [네이버 블로그 검색](https://search.naver.com/search.naver?where=blog&query=${encodeURIComponent(recipe.title + " 레시피")})
- [유튜브 검색](${getRecipeUrls(recipe.title).youtubeUrl})

## 관리 메모

- 대표 참조는 네이버 블로그 검색 상위 결과와 유튜브 조회수 기준 인기 영상을 우선 사용합니다.
- 만드는 방법은 원문 전문을 복사하지 않고 레시피 정보 기준으로 재작성한 요약 조리법입니다.
- 원문 레시피 전문을 복사하지 않고, 이후 새 레시피 MD 파일도 이 구조를 유지합니다.
`;
}

function formatCount(value) {
  if (value >= 10000) return `${Math.round(value / 10000).toLocaleString("ko-KR")}만`;
  return value.toLocaleString("ko-KR");
}

function safeFileName(value) {
  return String(value)
    .normalize("NFKC")
    .replace(/[\\/:*?"<>|]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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

function parseMethodSteps(value) {
  return String(value || "")
    .split(/\n+/)
    .map((item) => item.replace(/^\s*\d+[.)]\s*/, "").trim())
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
      ({ day, menu }, dayIndex) => `
        <article class="day-card">
          <h3>${day}요일 <span>${menu.length} meals</span></h3>
          <div class="meal-list">
            ${menu.map((meal, mealIndex) => renderMeal(meal, dayIndex, mealIndex)).join("")}
          </div>
        </article>
      `
    )
    .join("");

  mealPlan.querySelectorAll("[data-meal-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      const dayIndex = Number(button.dataset.dayIndex);
      const mealIndex = Number(button.dataset.mealIndex);
      const meal = lastPlan?.[dayIndex]?.menu?.[mealIndex];
      if (meal) showRecipeDetail(meal);
    });
  });
}

function renderMeal(meal, dayIndex, mealIndex) {
  const fallbackUrls = getRecipeUrls(meal.title);
  const blogUrl = meal.naverBlogUrl || meal.naverBlogSearchUrl || fallbackUrls.naverUrl;
  const youtubeUrl = meal.youtubeUrl || fallbackUrls.youtubeUrl;
  const matchedText = meal.matched.length > 0 ? meal.matched.join(", ") : "냉장고 기본 재료";
  const missingText = meal.missing.length > 0 ? meal.missing.join(", ") : "추가 구매 없음";
  const referenceText = "추가 참조: 네이버 블로그, 유튜브";
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
      <button class="ghost-button meal-detail-button" type="button" data-meal-detail data-day-index="${dayIndex}" data-meal-index="${mealIndex}">
        레시피 상세보기
      </button>
      <p class="meal-source">${referenceText}</p>
      <div class="recipe-links">
        ${meal.detailFile ? `<a href="${meal.detailFile}" target="_blank" rel="noreferrer">MD 원본</a>` : ""}
        <a href="${blogUrl}" target="_blank" rel="noreferrer">네이버 블로그</a>
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
