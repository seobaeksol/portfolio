# 김수영 포트폴리오

이력서 내용을 현대적인 픽셀 게임 인터페이스로 재구성한 단일 페이지 포트폴리오입니다.

## 로컬 실행

Node.js 22 이상에서 다음 명령을 실행합니다.

```bash
npm install
npm run dev
```

기본 주소는 `http://localhost:3000`입니다.

## GitHub Pages 배포

이 폴더를 GitHub 저장소의 루트로 올리고 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택합니다. 이후 `main` 브랜치에 push하면 `.github/workflows/deploy-pages.yml`이 빌드와 배포를 수행합니다.

공개 다운로드 이력서는 개인정보 보호를 위해 전화번호를 제외한 `public/resume.md`를 사용합니다.
