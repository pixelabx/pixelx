// main.js - 메인 스크립트

// DOM이 로드되면 실행
document.addEventListener('DOMContentLoaded', async () => {
  // i18n 초기화
  await initializeI18n();

  // 언어 전환 버튼 이벤트 설정
  setupLanguageSwitcher();

  // 스크롤 애니메이션 설정
  setupScrollAnimations();

  // 네비게이션 스크롤 효과
  setupNavbarScroll();
});

// i18n 초기화
async function initializeI18n() {
  try {
    const currentLang = await i18n.init();

    // 현재 언어에 맞는 버튼 활성화
    updateLanguageButtons(currentLang);

    // 페이지 콘텐츠 업데이트
    i18n.updatePageContent();

    console.log('i18n initialized with language:', currentLang);
  } catch (error) {
    console.error('Failed to initialize i18n:', error);
  }
}

// 언어 전환 버튼 설정
function setupLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');

  langButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
      const lang = e.target.getAttribute('data-lang');

      // 언어 변경
      const success = await i18n.setLanguage(lang);

      if (success) {
        // 버튼 상태 업데이트
        updateLanguageButtons(lang);

        // 부드러운 전환 효과
        document.body.style.opacity = '0.8';
        setTimeout(() => {
          document.body.style.opacity = '1';
        }, 300);
      }
    });
  });
}

// 언어 버튼 상태 업데이트
function updateLanguageButtons(activeLang) {
  const langButtons = document.querySelectorAll('.lang-btn');

  langButtons.forEach(button => {
    const lang = button.getAttribute('data-lang');
    if (lang === activeLang) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// 스크롤 애니메이션 설정
function setupScrollAnimations() {
  // Intersection Observer 설정
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // 애니메이션 대상 요소들
  const animateElements = document.querySelectorAll(
    '.about-card, .value-item, .product-card, .section-header'
  );

  animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
  });
}

// 네비게이션 스크롤 효과
function setupNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // 스크롤 방향에 따라 네비게이션 표시/숨김
    if (currentScroll > lastScroll && currentScroll > 100) {
      // 아래로 스크롤
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // 위로 스크롤
      navbar.style.transform = 'translateY(0)';
    }

    // 스크롤 위치에 따라 배경 투명도 조절
    if (currentScroll > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.8)';
    }

    lastScroll = currentScroll;
  });
}

// 스무스 스크롤 (네비게이션 링크용)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');

    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// 페이지 로드 시 스크롤 위치 복원 방지
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// 언어 변경 이벤트 리스너 (다른 스크립트에서 사용 가능)
window.addEventListener('languageChanged', (event) => {
  console.log('Language changed to:', event.detail.language);

  // 페이지 타이틀 업데이트
  updatePageTitle(event.detail.language);
});

// 페이지 타이틀 업데이트
function updatePageTitle(lang) {
  const titles = {
    'ko': 'pixelab | 픽셀연구소',
    'en': 'pixelab | Pixel Laboratory',
    'ja': 'pixelab | ピクセル研究所'
  };

  if (document.title.includes('개인정보') || document.title.includes('Privacy')) {
    const privacyTitles = {
      'ko': '개인정보처리방침 | pixelab',
      'en': 'Privacy Policy | pixelab',
      'ja': 'プライバシーポリシー | pixelab'
    };
    document.title = privacyTitles[lang] || privacyTitles['ko'];
  } else {
    document.title = titles[lang] || titles['ko'];
  }
}

// 간단한 로딩 애니메이션
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-in';
    document.body.style.opacity = '1';
  }, 100);
});
