# pixelab (픽셀연구소)

심플하고 모던한 앱과 게임을 개발하는 1인 개발자의 공식 홈페이지입니다.

## 🎯 프로젝트 소개

pixelab는 일상생활에 꼭 필요한 앱을 심플하고 모던하게, 단순하면서도 아기자기한 게임을 개발합니다.

### 핵심 가치

- **심플함**: 불필요한 것을 제거하고 본질에 집중
- **모던함**: 최신 기술과 트렌드를 반영한 디자인
- **아기자기함**: 사용하는 즐거움을 느낄 수 있는 경험

## 🌐 다국어 지원

이 웹사이트는 다음 언어를 지원합니다:

- 🇰🇷 한국어 (기본)
- 🇺🇸 영어
- 🇯🇵 일본어

언어는 자동으로 브라우저에 저장되어 다음 방문 시에도 유지됩니다.

## 🏗️ 프로젝트 구조

```
pixelab/
├── index.html              # 메인 페이지
├── privacy.html            # 개인정보처리방침
├── css/
│   └── style.css          # 스타일시트
├── js/
│   ├── i18n.js            # 다국어 지원 모듈
│   └── main.js            # 메인 스크립트
├── locales/               # 다국어 번역 파일
│   ├── ko.json            # 한국어
│   ├── en.json            # 영어
│   └── ja.json            # 일본어
└── images/                # 이미지 리소스
```

## 🚀 로컬 실행 방법

1. 저장소를 클론합니다:
```bash
git clone https://github.com/[username]/pixelab.git
cd pixelab
```

2. 로컬 서버를 실행합니다:

**Python이 설치되어 있는 경우:**
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

**Node.js가 설치되어 있는 경우:**
```bash
npx serve
```

**VS Code를 사용하는 경우:**
- Live Server 확장 프로그램을 설치하고 index.html을 열어 실행

3. 브라우저에서 `http://localhost:8000` 접속

## 📦 GitHub Pages 배포

### 1. GitHub 저장소 생성

```bash
git init
git add .
git commit -m "Initial commit: pixelab website"
git branch -M main
git remote add origin https://github.com/[username]/pixelab.git
git push -u origin main
```

### 2. GitHub Pages 활성화

1. GitHub 저장소의 **Settings** 탭으로 이동
2. 왼쪽 메뉴에서 **Pages** 선택
3. **Source** 섹션에서:
   - Branch: `main`
   - Folder: `/ (root)`
4. **Save** 클릭

몇 분 후 `https://[username].github.io/pixelab/`에서 사이트에 접속할 수 있습니다.

### 3. 커스텀 도메인 연결 (선택사항)

1. 도메인 제공업체에서 DNS 설정:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

2. GitHub Pages 설정에서 **Custom domain** 입력
3. **Enforce HTTPS** 체크

## 🎨 디자인 특징

- **Apple 스타일 UI/UX**: 세련되고 미니멀한 디자인
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- **스크롤 애니메이션**: 부드러운 스크롤 효과
- **다크/라이트 모드 준비**: CSS 변수를 사용한 테마 시스템

## 🔧 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **다국어**: 커스텀 i18n 모듈
- **호스팅**: GitHub Pages
- **디자인**: Apple Human Interface Guidelines 참고

## 📱 제품

### MP3 Player (개발 중)
심플하고 직관적인 음악 플레이어

*더 많은 제품이 추가될 예정입니다.*

## 🔄 업데이트 방법

새로운 제품이나 콘텐츠를 추가하려면:

1. **HTML 수정**: `index.html`의 제품 섹션에 새 카드 추가
2. **다국어 추가**: `locales/` 폴더의 각 JSON 파일에 번역 추가
3. **커밋 및 푸시**:
```bash
git add .
git commit -m "Add new product"
git push
```

GitHub Pages가 자동으로 업데이트됩니다.

## 📝 라이선스

© 2025 pixelab. All rights reserved.

## 📧 문의

웹사이트를 통해 문의해주세요.
