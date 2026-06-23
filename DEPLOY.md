# 핸드폰에서 앱처럼 쓰는 가장 쉬운 방법

## GitHub Pages에 올릴 때

이미 GitHub 저장소를 쓰고 있다면 `cook` 폴더 안의 파일들을 저장소 루트에 올리면 됩니다.

### 최소 업로드

앱이 돌아가는 데 필요한 최소 파일입니다.

- `index.html`
- `styles.css`
- `app.js`
- `recipes-data.js`
- `recipes-data.json`
- `recipes-data-summary.json`
- `manifest.json`
- `sw.js`
- `app-icon.svg`
- `.nojekyll`

이 파일들만 올려도 식단 생성, 레시피 상세보기, 내 레시피 추가/수정/삭제는 동작합니다.

### 전체 업로드

레시피 상세보기에서 `MD 원본 파일` 링크까지 열리게 하려면 아래 폴더도 같이 올립니다.

- `recipe-md/`

`recipe-md/`에는 레시피 MD 파일이 1,420개 들어 있어서 GitHub 웹 업로드가 오래 걸릴 수 있습니다. 웹에서 올릴 때는 `recipe-md` 폴더째 드래그해서 올리는 것이 가장 쉽고, 실패하면 GitHub Desktop이나 `git push`로 올리는 편이 안정적입니다.

### 압축 파일

- `cook-mobile-app.zip`은 백업/이동용 압축 파일입니다.
- GitHub Pages는 ZIP을 자동으로 풀어주지 않으므로, 사이트에 반영하려면 ZIP이 아니라 압축을 푼 파일들을 올려야 합니다.

## 핸드폰 홈 화면에 추가

1. 핸드폰에서 위 주소 열기
2. iPhone: Safari 공유 버튼 -> `홈 화면에 추가`
3. Android: Chrome 메뉴 -> `홈 화면에 추가` 또는 `앱 설치`

이후에는 홈 화면 아이콘을 눌러 바로 사용할 수 있습니다.

## 주의

- 노트북 안의 `file://` 주소는 핸드폰에서 앱처럼 설치하기 어렵습니다.
- 인터넷 주소가 있어야 홈 화면 추가와 오프라인 캐시가 안정적으로 동작합니다.
- 사진 OCR은 처음 사용할 때 OCR 파일을 내려받기 때문에 인터넷 연결이 필요할 수 있습니다.
