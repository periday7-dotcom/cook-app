# Firebase Firestore 규칙

Firebase Console에서 `Firestore Database` -> `규칙`에 아래 내용을 붙여넣고 게시하세요.

```txt
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

이 규칙은 로그인한 Google 계정의 사용자만 자기 데이터 문서에 접근할 수 있게 합니다.
