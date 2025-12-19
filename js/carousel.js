// carousel.js - 제품 캐러셀 기능

class ProductCarousel {
  constructor() {
    this.currentIndex = 0;
    this.track = document.querySelector('.carousel-track');
    this.cards = document.querySelectorAll('.product-card');
    this.prevBtn = document.querySelector('.carousel-prev');
    this.nextBtn = document.querySelector('.carousel-next');
    this.indicators = document.querySelectorAll('.indicator');
    this.totalCards = this.cards.length;
    this.isAnimating = false;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000; // 5초마다 자동 전환
  }

  init() {
    if (this.totalCards === 0) return;

    // 이벤트 리스너 설정
    this.setupEventListeners();

    // 초기 위치 설정
    this.updateCarousel(false);

    // 자동 재생 시작
    this.startAutoPlay();

    console.log('Carousel initialized with', this.totalCards, 'products');
  }

  setupEventListeners() {
    // 이전/다음 버튼
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());

    // 인디케이터 클릭
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });

    // 키보드 네비게이션
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    // 마우스 호버 시 자동재생 일시정지
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    carouselWrapper.addEventListener('mouseenter', () => this.stopAutoPlay());
    carouselWrapper.addEventListener('mouseleave', () => this.startAutoPlay());

    // 터치 스와이프 지원
    this.setupTouchEvents();
  }

  setupTouchEvents() {
    let touchStartX = 0;
    let touchEndX = 0;

    this.track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    this.track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe(touchStartX, touchEndX);
    });
  }

  handleSwipe(startX, endX) {
    const swipeThreshold = 50;
    const diff = startX - endX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // 왼쪽으로 스와이프 -> 다음
        this.next();
      } else {
        // 오른쪽으로 스와이프 -> 이전
        this.prev();
      }
    }
  }

  prev() {
    if (this.isAnimating) return;
    this.currentIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
    this.updateCarousel();
  }

  next() {
    if (this.isAnimating) return;
    this.currentIndex = (this.currentIndex + 1) % this.totalCards;
    this.updateCarousel();
  }

  goToSlide(index) {
    if (this.isAnimating || index === this.currentIndex) return;
    this.currentIndex = index;
    this.updateCarousel();
  }

  updateCarousel(animate = true) {
    if (!animate) {
      this.track.style.transition = 'none';
    } else {
      this.track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      this.isAnimating = true;

      setTimeout(() => {
        this.isAnimating = false;
      }, 500);
    }

    // 캐러셀 이동
    const offset = -this.currentIndex * 100;
    this.track.style.transform = `translateX(${offset}%)`;

    // 인디케이터 업데이트
    this.updateIndicators();

    // 버튼 상태 업데이트 (필요시)
    this.updateButtons();
  }

  updateIndicators() {
    this.indicators.forEach((indicator, index) => {
      if (index === this.currentIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  updateButtons() {
    // 첫 번째/마지막 슬라이드에서 버튼 비활성화 (선택사항)
    // 현재는 무한 루프이므로 항상 활성화 상태
    this.prevBtn.style.opacity = '1';
    this.nextBtn.style.opacity = '1';
  }

  startAutoPlay() {
    this.stopAutoPlay(); // 기존 타이머 정리
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  // 제품 수에 따라 캐러셀 비활성화
  disable() {
    this.stopAutoPlay();
    if (this.prevBtn) this.prevBtn.style.display = 'none';
    if (this.nextBtn) this.nextBtn.style.display = 'none';
    this.indicators.forEach(ind => ind.style.display = 'none');
  }
}

// DOM 로드 완료 시 초기화
document.addEventListener('DOMContentLoaded', () => {
  const carousel = new ProductCarousel();

  // 제품이 1개 이하면 캐러셀 비활성화
  if (carousel.totalCards <= 1) {
    carousel.disable();
  } else {
    carousel.init();
  }

  // 전역 변수로 저장 (디버깅용)
  window.productCarousel = carousel;
});
