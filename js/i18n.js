// i18n.js - 다국어 지원 모듈
class I18n {
  constructor() {
    this.currentLang = 'ko'; // 기본 언어: 한국어
    this.translations = {};
    this.supportedLanguages = ['ko', 'en', 'ja'];
  }

  // 초기화: 저장된 언어 불러오기 및 번역 파일 로드
  async init() {
    // localStorage에서 저장된 언어 불러오기
    const savedLang = localStorage.getItem('language');
    if (savedLang && this.supportedLanguages.includes(savedLang)) {
      this.currentLang = savedLang;
    }

    // 번역 파일 로드
    await this.loadTranslations(this.currentLang);

    return this.currentLang;
  }

  // 번역 파일 로드
  async loadTranslations(lang) {
    // 여러 경로를 시도
    const paths = ['./locales', '../locales', '/locales'];

    for (const basePath of paths) {
      try {
        const response = await fetch(`${basePath}/${lang}.json`);
        if (response.ok) {
          this.translations = await response.json();
          console.log(`Loaded translations from ${basePath}/${lang}.json`);
          return true;
        }
      } catch (error) {
        // 다음 경로 시도
        continue;
      }
    }

    // 모든 경로 실패
    console.error(`Failed to load ${lang}.json from any path`);

    // 기본 언어로 폴백 (무한 루프 방지)
    if (lang !== 'ko') {
      return this.loadTranslations('ko');
    }

    return false;
  }

  // 언어 변경
  async setLanguage(lang) {
    if (!this.supportedLanguages.includes(lang)) {
      console.warn(`Language ${lang} is not supported`);
      return false;
    }

    this.currentLang = lang;
    localStorage.setItem('language', lang);
    await this.loadTranslations(lang);

    // 페이지 업데이트
    this.updatePageContent();

    return true;
  }

  // 현재 언어 가져오기
  getCurrentLanguage() {
    return this.currentLang;
  }

  // 번역 텍스트 가져오기
  // 사용 예: t('nav.home') -> "홈"
  t(key) {
    const keys = key.split('.');
    let value = this.translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return value;
  }

  // data-i18n 속성을 가진 모든 요소의 텍스트 업데이트
  updatePageContent() {
    // data-i18n 속성으로 텍스트 업데이트
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);

      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });

    // data-i18n-html 속성으로 HTML 업데이트 (줄바꿈 포함)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      const translation = this.t(key);
      element.innerHTML = translation.replace(/\n/g, '<br>');
    });

    // title 속성 업데이트
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
      const key = element.getAttribute('data-i18n-title');
      element.title = this.t(key);
    });

    // HTML lang 속성 업데이트
    document.documentElement.lang = this.currentLang;

    // 커스텀 이벤트 발생 (다른 스크립트에서 언어 변경 감지 가능)
    window.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: this.currentLang }
    }));
  }

  // 지원 언어 목록 가져오기
  getSupportedLanguages() {
    return this.supportedLanguages;
  }
}

// 전역 인스턴스 생성
const i18n = new I18n();

// 모듈 export (ES6 모듈 사용 시)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18n;
}
