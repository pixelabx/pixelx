// pixelab — Interactive Landing Page Script

document.addEventListener('DOMContentLoaded', () => {
  if (window.LandingI18n) {
    window.LandingI18n.init();
  }
  initStickyHeader();
  initMobileMenu();
  initScrollReveal();
  initBentoSpotlight();
  initHeroMockup();
  initShowcaseCarousel();
  initFaqAccordion();
  initContactActions();
});

/* ---------------------------------------------------------
 * Toast Notification Helper
 * --------------------------------------------------------- */
let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById('toast-banner');
  const toastText = document.getElementById('toast-message');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('is-visible');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 3000);
}

/* ---------------------------------------------------------
 * 1. Sticky Header Backdrop Blur on Scroll
 * --------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const updateHeader = () => {
    if (window.scrollY > 16) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

/* ---------------------------------------------------------
 * 2. Mobile Navigation Drawer
 * --------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  if (!toggleBtn || !drawer) return;

  const setOpen = (open) => {
    drawer.classList.toggle('is-open', open);
    toggleBtn.setAttribute('aria-expanded', String(open));
    if (iconOpen && iconClose) {
      iconOpen.classList.toggle('hidden', open);
      iconClose.classList.toggle('hidden', !open);
    }
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('is-open');
    setOpen(!isOpen);
  });

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
}

/* ---------------------------------------------------------
 * 3. Scroll Fade-In Reveal (IntersectionObserver)
 * --------------------------------------------------------- */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------
 * 4. Bento Card Mouse-Tracking Spotlight
 * --------------------------------------------------------- */
function initBentoSpotlight() {
  const cards = document.querySelectorAll('.bento-card');
  cards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ---------------------------------------------------------
 * 5. Hero Interactive Smartphone Mockup
 * --------------------------------------------------------- */
function initHeroMockup() {
  const tracks = [
    { title: 'Midnight Grid', artist: 'Seoul Ambient · FLAC 24-bit', duration: '03:42', current: '01:28', progress: 40 },
    { title: 'Quiet Pixel Rain', artist: 'Minimal Tape · ALAC Lossless', duration: '04:15', current: '02:11', progress: 52 },
    { title: 'Analog Horizon', artist: 'Night Desk · WAV 96kHz', duration: '03:18', current: '00:54', progress: 27 }
  ];

  let trackIdx = 0;
  let isPlaying = true;

  const titleEl = document.getElementById('hero-track-title');
  const artistEl = document.getElementById('hero-track-artist');
  const currentEl = document.getElementById('hero-track-current');
  const durationEl = document.getElementById('hero-track-duration');
  const progressEl = document.getElementById('hero-track-progress');
  const eqWrap = document.getElementById('hero-eq-wrap');
  const playBtn = document.getElementById('hero-play-btn');
  const iconPlay = document.getElementById('hero-icon-play');
  const iconPause = document.getElementById('hero-icon-pause');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');

  const renderTrack = () => {
    const t = tracks[trackIdx];
    if (titleEl) titleEl.textContent = t.title;
    if (artistEl) artistEl.textContent = t.artist;
    if (currentEl) currentEl.textContent = t.current;
    if (durationEl) durationEl.textContent = t.duration;
    if (progressEl) progressEl.style.width = `${t.progress}%`;
  };

  const renderPlayState = () => {
    if (eqWrap) eqWrap.classList.toggle('eq-paused', !isPlaying);
    if (iconPlay && iconPause) {
      iconPlay.classList.toggle('hidden', isPlaying);
      iconPause.classList.toggle('hidden', !isPlaying);
    }
    if (playBtn) {
      playBtn.setAttribute('aria-label', isPlaying ? '일시정지' : '재생');
    }
  };

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      renderPlayState();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      trackIdx = (trackIdx - 1 + tracks.length) % tracks.length;
      renderTrack();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      trackIdx = (trackIdx + 1) % tracks.length;
      renderTrack();
    });
  }

  // Hero mockup app mode toggle (MP3 Player vs Pixel Timer)
  const tabBtns = document.querySelectorAll('[data-hero-tab]');
  const panels = document.querySelectorAll('[data-hero-panel]');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-hero-tab');
      tabBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('bg-white/10', active);
        b.classList.toggle('text-white', active);
        b.classList.toggle('text-zinc-500', !active);
      });
      panels.forEach((p) => {
        p.classList.toggle('hidden', p.getAttribute('data-hero-panel') !== target);
      });
    });
  });

  renderTrack();
  renderPlayState();
}

/* ---------------------------------------------------------
 * 6. App Showcase Carousel
 * --------------------------------------------------------- */
function initShowcaseCarousel() {
  const getApps = () => {
    const localized = window.LandingI18n && window.LandingI18n.get('showcase.apps');
    if (Array.isArray(localized) && localized.length) return localized;
    return [];
  };

  const track = document.getElementById('showcase-track');
  const prevBtn = document.getElementById('showcase-prev');
  const nextBtn = document.getElementById('showcase-next');
  const dots = document.querySelectorAll('[data-showcase-dot]');
  const pills = document.querySelectorAll('[data-showcase-pill]');

  const metaIndex = document.getElementById('showcase-index');
  const metaStatus = document.getElementById('showcase-status');
  const metaName = document.getElementById('showcase-name');
  const metaTagline = document.getElementById('showcase-tagline');
  const metaDesc = document.getElementById('showcase-desc');
  const metaPlatforms = document.getElementById('showcase-platforms');
  const metaSpecs = document.getElementById('showcase-specs');
  const metaDetailLink = document.getElementById('showcase-detail-link');

  if (!track) return;

  let current = 0;

  const updateShowcase = (idx) => {
    const apps = getApps();
    if (!apps.length) return;
    current = (idx + apps.length) % apps.length;
    const app = apps[current];

    track.style.transform = `translateX(-${current * 100}%)`;

    if (metaIndex) metaIndex.textContent = app.index;
    if (metaStatus) metaStatus.textContent = app.status;
    if (metaName) metaName.textContent = app.name;
    if (metaTagline) metaTagline.textContent = app.tagline;
    if (metaDesc) metaDesc.textContent = app.description;
    if (metaDetailLink) metaDetailLink.setAttribute('href', app.detailUrl);

    if (metaPlatforms) {
      metaPlatforms.innerHTML = app.platforms
        .map(
          (p) =>
            `<span class="inline-flex items-center px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08] rounded-md">${p}</span>`
        )
        .join('');
    }

    if (metaSpecs) {
      metaSpecs.innerHTML = app.specs
        .map(
          (s) => `
          <div class="flex items-center justify-between py-2.5 border-b border-white/[0.06] last:border-b-0">
            <span class="text-xs text-zinc-500">${s.label}</span>
            <span class="text-xs font-medium text-zinc-200">${s.value}</span>
          </div>`
        )
        .join('');
    }

    dots.forEach((dot, i) => {
      const active = i === current;
      dot.classList.toggle('w-7', active);
      dot.classList.toggle('bg-blue-500', active);
      dot.classList.toggle('w-2', !active);
      dot.classList.toggle('bg-zinc-700', !active);
      dot.setAttribute('aria-current', active ? 'true' : 'false');
    });

    pills.forEach((pill, i) => {
      const active = i === current;
      pill.classList.toggle('border-blue-500/60', active);
      pill.classList.toggle('bg-blue-500/10', active);
      pill.classList.toggle('text-white', active);
      pill.classList.toggle('border-white/[0.08]', !active);
      pill.classList.toggle('text-zinc-400', !active);
    });
  };

  if (prevBtn) prevBtn.addEventListener('click', () => updateShowcase(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateShowcase(current + 1));

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      updateShowcase(Number(dot.getAttribute('data-showcase-dot')));
    });
  });

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      updateShowcase(Number(pill.getAttribute('data-showcase-pill')));
    });
  });

  // Touch swipe support on carousel viewport
  const viewport = document.getElementById('showcase-viewport');
  if (viewport) {
    let startX = 0;
    let deltaX = 0;

    viewport.addEventListener(
      'touchstart',
      (e) => {
        startX = e.touches[0].clientX;
        deltaX = 0;
      },
      { passive: true }
    );

    viewport.addEventListener(
      'touchmove',
      (e) => {
        deltaX = e.touches[0].clientX - startX;
      },
      { passive: true }
    );

    viewport.addEventListener('touchend', () => {
      if (Math.abs(deltaX) > 48) {
        updateShowcase(deltaX < 0 ? current + 1 : current - 1);
      }
    });
  }

  // Store badge feedback (localized)
  document.querySelectorAll('[data-store-badge]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const apps = getApps();
      const store = btn.getAttribute('data-store-badge');
      const appName = apps[current] ? apps[current].name : 'App';
      const tpl =
        (window.LandingI18n && window.LandingI18n.get('toast.store_coming_soon')) ||
        '{app} ({store}) 출시 준비 중입니다. 출시 알림은 hello@pixelabx.com으로 문의해 주세요.';
      showToast(tpl.replace('{app}', appName).replace('{store}', store));
    });
  });

  // Re-render current slide info whenever language changes
  window.addEventListener('landingLanguageChanged', () => {
    updateShowcase(current);
  });

  updateShowcase(0);
}

/* ---------------------------------------------------------
 * 7. FAQ Accordion
 * --------------------------------------------------------- */
function initFaqAccordion() {
  const items = document.querySelectorAll('.accordion-item');
  if (!items.length) return;

  items.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close other items for a clean, focused reading flow
      items.forEach((other) => {
        if (other !== item) {
          other.classList.remove('is-open');
          const otherBtn = other.querySelector('.accordion-trigger');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

/* ---------------------------------------------------------
 * 8. Contact Email Copy Action
 * --------------------------------------------------------- */
function initContactActions() {
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  const email = 'hello@pixelabx.com';

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const copiedMsg =
        (window.LandingI18n && window.LandingI18n.get('toast.email_copied')) ||
        `이메일 주소(${email})가 클립보드에 복사되었습니다.`;
      try {
        await navigator.clipboard.writeText(email);
        showToast(copiedMsg);
      } catch {
        // Fallback for older browsers
        const temp = document.createElement('input');
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        showToast(copiedMsg);
      }
    });
  });
}
