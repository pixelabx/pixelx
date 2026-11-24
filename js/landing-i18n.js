// pixelab — 3-Language Support (KO / EN / JP) for Landing & Privacy Pages
// Shares localStorage key 'language' with legacy js/i18n.js so subpages stay in sync.

const LANDING_TRANSLATIONS = {
  ko: {
    meta: {
      title: 'pixelab | 픽셀연구소 — 일상의 작은 불편을 감각적인 앱으로',
      description: '픽셀연구소(pixelab)는 일상의 작은 불편을 심플하고 모던한 모바일 앱으로 해결하는 인디 앱 스튜디오입니다.',
      privacy_title: '개인정보처리방침 | pixelab',
    },
    nav: {
      products: 'Products',
      showcase: 'Showcase',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact',
      cta: '앱 다운로드',
      back_home: '← 홈으로 돌아가기',
    },
    hero: {
      badge: '픽셀연구소 · Independent Mobile App Studio',
      title_html: '일상의 작은 불편을<br><span class="text-blue-500">감각적인 앱</span>으로 해결합니다.',
      subtitle:
        '하나하나의 픽셀을 연구하듯, 불필요한 기능과 소음을 과감히 덜어냅니다. 픽셀연구소는 매일 손이 가는 심플하고 모던한 모바일 경험을 설계합니다.',
      cta_primary: '대표 앱 보기',
      cta_secondary: '회사 소개',
      metric1_label: 'Apps in Lab',
      metric2_label: 'Native Craft',
      metric3_label: 'Ad Tracking',
      mockup_today_focus: '오늘 집중',
      mockup_streak: '연속 기록',
    },
    bento: {
      eyebrow: 'Products',
      title: '꼭 필요한 기능만 정교하게 다듬은 앱',
      subtitle: '화려한 장식 대신 오래 써도 질리지 않는 미니멀한 인터페이스와 빠른 반응 속도에 집중합니다.',
      mp3: {
        status: '개발 중',
        desc: '광고와 알고리즘 추천을 모두 덜어내고 음악 감상의 본질만 남겼습니다. FLAC·ALAC 무손실 음원과 한 손 제스처 컨트롤을 지원하는 미니멀 플레이어입니다.',
      },
      timer: {
        status: '프로토타입',
        desc: '흐르는 집중 시간을 픽셀 매트릭스로 시각화하는 포모도로 타이머. 초침 대신 고요히 채워지는 픽셀로 몰입을 돕습니다.',
      },
      memo: {
        status: '기획 중',
        desc: '앱을 열면 3초 만에 오늘의 페이지가 열립니다. 서버 전송 없는 100% 로컬 퍼스트 일상 기록 앱.',
        quote: '“복잡한 기능 대신, 매일 한 줄씩 가볍게 남기는 습관.”',
      },
      block: {
        status: '기획 중 · 게임',
        desc: '한 픽셀씩 정성스럽게 제작한 도트 아트와 8-bit 칩튠 사운드로 재해석한 클래식 아케이드 블록 깨기.',
      },
      strength1_title: '초경량 네이티브 성능',
      strength1_desc: '평균 15MB 미만의 가벼운 용량과 즉각적인 실행 속도로, 기기 배터리를 낭비하지 않습니다.',
      strength2_title: '프라이버시 퍼스트',
      strength2_desc: '불필요한 회원가입이나 광고 추적 코드를 배제하고, 사용자의 데이터를 기기 안에 안전하게 지킵니다.',
      strength3_title: '절제된 60fps 인터랙션',
      strength3_desc: '손끝의 제스처와 햅틱 피드백까지 세밀하게 조율해, 설명서 없이도 자연스럽게 익숙해집니다.',
    },
    showcase: {
      eyebrow: 'App Showcase',
      title: '스크린으로 미리 보는 픽셀연구소',
      detail_link: '제품 상세 스펙 보기',
      memo_screen_title: '오늘의 한 줄 기록',
      memo_screen_body: '새 랜딩페이지 디자인 완성. 여백이 넉넉해지니 오히려 메시지가 더 선명해졌다.',
      apps: [
        {
          id: 'mp3player',
          index: '01 / 04',
          status: '개발 중 · 2026 출시 예정',
          name: 'MP3 Player',
          tagline: '당신의 음악, 오직 본질만 남겼습니다.',
          description:
            '복잡한 추천 피드와 광고를 모두 덜어내고 음악 감상에만 집중한 미니멀 오디오 플레이어입니다. FLAC·ALAC 무손실 음원 재생과 한 손 제스처 컨트롤을 지원합니다.',
          platforms: ['iOS 15+', 'Android 10+'],
          specs: [
            { label: '지원 포맷', value: 'FLAC · ALAC · MP3 · WAV' },
            { label: '앱 용량', value: '약 15MB 초경량' },
            { label: '조작 방식', value: '풀 제스처 미니멀 UI' },
          ],
          detailUrl: 'products/mp3player.html',
        },
        {
          id: 'pixeltimer',
          index: '02 / 04',
          status: '개발 예정 · 프로토타입',
          name: 'Pixel Timer',
          tagline: '흐르는 시간을 픽셀로 시각화하다.',
          description:
            '숫자가 줄어드는 압박감 대신, 25분 포모도로 집중 시간이 픽셀 매트릭스로 차곡차곡 채워집니다. 몰입을 돕는 12가지 절제된 다크·라이트 테마를 제공합니다.',
          platforms: ['iOS', 'Android', 'Web PWA'],
          specs: [
            { label: '핵심 모드', value: '포모도로 · 딥워크 · 스톱워치' },
            { label: '앱 용량', value: '약 8MB' },
            { label: '알림 경험', value: '부드러운 앰비언트 햅틱' },
          ],
          detailUrl: 'products/pixeltimer.html',
        },
        {
          id: 'dailymemo',
          index: '03 / 04',
          status: '기획 중 · 프리뷰',
          name: 'Daily Memo',
          tagline: '앱을 열면 3초 만에 오늘을 기록합니다.',
          description:
            '무거운 폴더 구조나 로그인 절차 없이 하루 한 장의 깨끗한 페이지를 엽니다. 모든 기록은 오직 사용자 기기에만 로컬 저장되어 완벽한 프라이버시를 보장합니다.',
          platforms: ['iOS', 'Android'],
          specs: [
            { label: '데이터 보안', value: '100% 온디바이스 로컬 저장' },
            { label: '앱 용량', value: '약 5MB' },
            { label: '핵심 기능', value: '캘린더 히트맵 · 즉시 검색' },
          ],
          detailUrl: 'products/dailymemo.html',
        },
        {
          id: 'blockbreak',
          index: '04 / 04',
          status: '기획 중 · 게임',
          name: 'Block Break',
          tagline: '수작업 도트 아트로 재해석한 클래식 아케이드.',
          description:
            '한 픽셀씩 정성스레 빚은 레트로 그래픽과 60fps 물리 엔진이 만났습니다. 100개의 전략 스테이지와 칩튠 사운드로 짧지만 강렬한 몰입을 선사합니다.',
          platforms: ['iOS', 'Android'],
          specs: [
            { label: '콘텐츠', value: '100개 핸드크래프트 스테이지' },
            { label: '오디오', value: '오리지널 8-bit 칩튠' },
            { label: '플레이', value: '오프라인 완벽 지원' },
          ],
          detailUrl: 'products/blockbreak.html',
        },
      ],
    },
    about: {
      eyebrow: 'About pixelab',
      title_html: '모든 픽셀에는<br>의미가 있습니다.',
      description:
        '픽셀연구소(pixelab)는 디지털 화면의 최소 단위인 픽셀처럼, 앱을 이루는 가장 작은 인터랙션 하나까지 집요하게 고민하는 인디 스튜디오입니다. 기술은 정교하게, 사용자 경험은 단순하게 만드는 것이 우리의 기준입니다.',
      p1_title: '01 · 본질에 집중',
      p1_desc: '기능을 계속 덧붙이기보다, 사용자의 흐름을 방해하는 요소를 하나씩 걷어냅니다. 정말 필요한 기능만 직관적인 자리에 남깁니다.',
      p2_title: '02 · 모던한 완성도',
      p2_desc: '유행에 휩쓸리지 않는 타이포그래피와 여백의 균형, 그리고 플랫폼 네이티브 감각을 존중하는 디자인 시스템을 유지합니다.',
      p3_title: '03 · 지속 가능한 가치',
      p3_desc: '단발성 호기심에 그치지 않고, 매일의 루틴 속에서 조용히 효용을 만들어내는 도구를 꾸준히 업데이트합니다.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: '자주 묻는 질문',
      subtitle: '앱 지원, 협업 및 파트너십, 채용에 대해 궁금한 점을 정리했습니다.',
      q1: '앱들은 언제 출시되며 어떤 기기에서 사용할 수 있나요?',
      a1_html:
        '현재 대표 제품인 MP3 Player를 중심으로 순차 출시를 준비 중이며, iOS와 Android를 모두 지원합니다. 출시 알림이나 베타 테스트(TestFlight) 참여를 원하시면 <a href="mailto:hello@pixelabx.com" class="text-blue-400 hover:underline">hello@pixelabx.com</a>으로 편하게 연락해 주세요.',
      q2: '앱 사용 중 오류 제보나 기능 제안은 어떻게 하나요?',
      a2_html:
        '이메일(<a href="mailto:hello@pixelabx.com" class="text-blue-400 hover:underline">hello@pixelabx.com</a>)로 사용 중인 기기 모델과 상황을 알려주시면 개발자가 직접 확인하고 영업일 기준 2일 이내에 답변드립니다.',
      q3: '기업 협업, 프로덕트 파트너십 또는 외주 문의도 가능한가요?',
      a3_html:
        '네, 픽셀연구소의 디자인 철학과 방향성이 맞는 브랜드 협업, 모바일 MVP 설계 및 공동 개발 제안은 언제든 열려 있습니다. 간단한 프로젝트 개요와 일정을 메일로 보내주시면 빠르게 검토해 회신드리겠습니다.',
      q4: '사용자 개인정보와 앱 내 데이터는 안전하게 보호되나요?',
      a4_html:
        '픽셀연구소는 \'로컬 퍼스트\' 원칙을 따릅니다. 필수적인 경우를 제외하고 서버로 데이터를 전송하지 않으며 제3자 광고 추적 도구를 탑재하지 않습니다. 자세한 내용은 <a href="privacy.html" class="text-blue-400 hover:underline">개인정보처리방침</a>에서 확인하실 수 있습니다.',
      q5: '채용이나 스튜디오 합류 기회는 어떻게 확인하나요?',
      a5_html:
        '현재 소수 정예 인디 스튜디오 형태로 운영 중이며, iOS/Android 엔지니어 및 프로덕트 디자이너와의 프로젝트 단위 협업이나 상시 커피챗은 언제든 환영합니다. 포트폴리오나 GitHub 링크와 함께 메일로 인사해 주세요.',
    },
    contact: {
      eyebrow: 'Contact',
      title: '함께 만들고 싶은 아이디어가 있으신가요?',
      description:
        '제품 피드백, 협업 제안, 베타 테스트 문의 등 어떤 이야기든 환영합니다. 보내주신 모든 메시지는 픽셀연구소 팀이 직접 읽고 답변합니다.',
      email_btn: '이메일로 문의하기',
    },
    footer: {
      desc: '픽셀연구소 (pixelab) · 모바일 애플리케이션 및 디지털 프로덕트 개발 스튜디오',
      location: '소재지: 서울특별시 (Seoul, Republic of Korea)',
      inquiry_label: '문의:',
      privacy: '개인정보처리방침',
    },
    toast: {
      store_coming_soon: '{app} ({store}) 출시 준비 중입니다. 출시 알림은 hello@pixelabx.com으로 문의해 주세요.',
      email_copied: '이메일 주소(hello@pixelabx.com)가 클립보드에 복사되었습니다.',
    },
    privacy: {
      eyebrow: 'Legal',
      title: '개인정보처리방침',
      updated: '최종 수정일: 2025-01-01',
      intro:
        'pixelab(\'픽셀연구소\')는 개인정보 보호법 제30조에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.',
      s1_title: '1. 개인정보의 처리 목적',
      s1_body:
        'pixelab는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.\n\n• 서비스 제공 및 운영: 앱 서비스 제공, 콘텐츠 제공, 맞춤 서비스 제공 및 부정이용 방지\n• 회원 관리: 본인확인, 개인 식별, 불량회원의 부정 이용 방지 및 분쟁 조정을 위한 기록 보존\n• 고객 지원: 고객 문의 대응, 불만처리 및 공지사항 전달',
      s2_title: '2. 개인정보의 처리 및 보유기간',
      s2_body:
        '① pixelab는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.\n\n② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다:\n• 서비스 이용 관련 정보: 회원 탈퇴 시까지\n• 계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)\n• 대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)\n• 소비자 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)\n• 로그인 기록: 3개월 (통신비밀보호법)',
      s3_title: '3. 정보주체의 권리·의무 및 행사방법',
      s3_body:
        '이용자는 pixelab에 대해 언제든지 개인정보 열람 요구, 오류 정정 요구, 삭제 요구, 처리정지 요구 등의 권리를 행사할 수 있습니다. 권리 행사는 전자우편(hello@pixelabx.com)을 통해 하실 수 있으며, pixelab는 이에 대해 지체 없이 조치하겠습니다.',
      s4_title: '4. 개인정보의 파기',
      s4_body:
        'pixelab는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다. 전자적 파일 형태의 정보는 복구 및 재생이 불가능한 기술적 방법을 사용하여 완전히 삭제합니다.',
      s5_title: '5. 개인정보 보호책임자',
      s5_officer_label: '책임자:',
      s5_officer_value: 'pixelab 대표',
      s5_email_label: '이메일:',
      s6_title: '6. 개인정보 처리방침의 변경',
      s6_body:
        '이 개인정보 처리방침은 2025년 1월 1일부터 적용됩니다. 법령·정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을 시에는 변경사항의 시행 7일 전부터 웹사이트를 통해 공지할 것입니다.',
    },
  },

  en: {
    meta: {
      title: 'pixelab — Thoughtful Mobile Apps for Everyday Clarity',
      description: 'pixelab is an independent mobile app studio crafting minimal, modern applications that solve everyday friction.',
      privacy_title: 'Privacy Policy | pixelab',
    },
    nav: {
      products: 'Products',
      showcase: 'Showcase',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Get Apps',
      back_home: '← Back to Home',
    },
    hero: {
      badge: 'pixelab · Independent Mobile App Studio',
      title_html: 'Solving everyday friction<br>with <span class="text-blue-500">thoughtful apps</span>.',
      subtitle:
        'Studying every single pixel with care, we strip away unnecessary clutter and noise. pixelab designs simple, modern mobile experiences you reach for every day.',
      cta_primary: 'Explore Apps',
      cta_secondary: 'About Studio',
      metric1_label: 'Apps in Lab',
      metric2_label: 'Native Craft',
      metric3_label: 'Ad Tracking',
      mockup_today_focus: 'Today Focus',
      mockup_streak: 'Current Streak',
    },
    bento: {
      eyebrow: 'Products',
      title: 'Refined down to what truly matters',
      subtitle: 'Instead of visual noise, we focus on timeless minimal interfaces and instantaneous responsiveness.',
      mp3: {
        status: 'In Development',
        desc: 'Zero ads, zero algorithmic clutter—just pure listening. A minimal hi-res audio player supporting FLAC/ALAC lossless playback and one-handed gestures.',
      },
      timer: {
        status: 'Prototype',
        desc: 'A Pomodoro timer that visualizes flowing time through a calm pixel matrix. Watch focus fill pixel by pixel instead of racing against ticking digits.',
      },
      memo: {
        status: 'Planning',
        desc: 'Opens directly to today’s page in 3 seconds. A featherweight local-first daily journal with zero server transmission.',
        quote: '“Skip the heavy setup—just one effortless line every day.”',
      },
      block: {
        status: 'Planning · Game',
        desc: 'A classic brick-breaker reimagined with handcrafted pixel art, crisp 60fps physics, and original 8-bit chiptune sound.',
      },
      strength1_title: 'Featherweight Native Speed',
      strength1_desc: 'Under 15MB on average with instant cold start, built to respect your device storage and battery life.',
      strength2_title: 'Privacy First by Design',
      strength2_desc: 'No forced accounts, no ad trackers, and no hidden analytics—your data stays safely on your device.',
      strength3_title: 'Fluid 60fps Micro-Interactions',
      strength3_desc: 'Every gesture and subtle haptic cue is tuned so the interface feels second-nature without a manual.',
    },
    showcase: {
      eyebrow: 'App Showcase',
      title: 'A closer look at pixelab screens',
      detail_link: 'View full specifications',
      memo_screen_title: 'Today’s Quick Note',
      memo_screen_body: 'Shipped the new studio landing page. More whitespace made every message sharper.',
      apps: [
        {
          id: 'mp3player',
          index: '01 / 04',
          status: 'In Development · Coming 2026',
          name: 'MP3 Player',
          tagline: 'Your music, stripped to its pure essence.',
          description:
            'A distraction-free audio player that removes crowded feeds and ads. Built for audiophiles who value lossless FLAC/ALAC playback and effortless one-hand gestures.',
          platforms: ['iOS 15+', 'Android 10+'],
          specs: [
            { label: 'Formats', value: 'FLAC · ALAC · MP3 · WAV' },
            { label: 'App Size', value: '~15MB Ultra-light' },
            { label: 'Interaction', value: 'Full-gesture minimal UI' },
          ],
          detailUrl: 'products/mp3player.html',
        },
        {
          id: 'pixeltimer',
          index: '02 / 04',
          status: 'Upcoming · Prototype',
          name: 'Pixel Timer',
          tagline: 'Visualizing flowing time in pixels.',
          description:
            'Replace the stress of counting down with a serene 25-minute pixel matrix that fills gradually. Includes 12 curated dark and light focus themes.',
          platforms: ['iOS', 'Android', 'Web PWA'],
          specs: [
            { label: 'Modes', value: 'Pomodoro · Deep Work · Stopwatch' },
            { label: 'App Size', value: '~8MB' },
            { label: 'Alerts', value: 'Gentle ambient haptics' },
          ],
          detailUrl: 'products/pixeltimer.html',
        },
        {
          id: 'dailymemo',
          index: '03 / 04',
          status: 'Planning · Preview',
          name: 'Daily Memo',
          tagline: 'Capture your day in 3 seconds flat.',
          description:
            'No deep folder trees or mandatory sign-ups—just one clean sheet for today. Every entry stays stored locally on your device for complete privacy.',
          platforms: ['iOS', 'Android'],
          specs: [
            { label: 'Privacy', value: '100% On-device local storage' },
            { label: 'App Size', value: '~5MB' },
            { label: 'Highlights', value: 'Calendar heatmap · Instant search' },
          ],
          detailUrl: 'products/dailymemo.html',
        },
        {
          id: 'blockbreak',
          index: '04 / 04',
          status: 'Planning · Game',
          name: 'Block Break',
          tagline: 'Classic arcade craft, pixel by pixel.',
          description:
            'Handcrafted retro dot art meets crisp 60fps arcade physics. Conquer 100 tactical stages accompanied by original 8-bit chiptune audio.',
          platforms: ['iOS', 'Android'],
          specs: [
            { label: 'Content', value: '100 handcrafted stages' },
            { label: 'Audio', value: 'Original 8-bit chiptune' },
            { label: 'Play Mode', value: 'Full offline support' },
          ],
          detailUrl: 'products/blockbreak.html',
        },
      ],
    },
    about: {
      eyebrow: 'About pixelab',
      title_html: 'Every pixel<br>carries meaning.',
      description:
        'Like the smallest unit on a digital display, pixelab obsesses over the finest interactions inside every app. Our standard is simple: keep engineering rigorous and the user experience effortless.',
      p1_title: '01 · Focus on Essence',
      p1_desc: 'Rather than piling on features, we subtract friction one step at a time—leaving only what feels natural and genuinely useful.',
      p2_title: '02 · Modern Craft',
      p2_desc: 'We rely on timeless typography, generous whitespace, and platform-native polish instead of short-lived visual trends.',
      p3_title: '03 · Lasting Utility',
      p3_desc: 'We build calm, dependable tools designed to quietly elevate your daily routine and keep improving over time.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions',
      subtitle: 'Quick answers on releases, support, partnerships, privacy, and joining the studio.',
      q1: 'When will the apps launch and which platforms are supported?',
      a1_html:
        'We are preparing sequential releases starting with our flagship MP3 Player across both iOS and Android. For early access or TestFlight beta invites, reach out to <a href="mailto:hello@pixelabx.com" class="text-blue-400 hover:underline">hello@pixelabx.com</a>.',
      q2: 'How can I report a bug or suggest a new feature?',
      a2_html:
        'Send your device model and details to <a href="mailto:hello@pixelabx.com" class="text-blue-400 hover:underline">hello@pixelabx.com</a>. Every message is reviewed directly by our developer with a response within 2 business days.',
      q3: 'Are you open to partnerships, collaborations, or product consulting?',
      a3_html:
        'Yes. We welcome brand collaborations, mobile MVP design, and co-development projects aligned with pixelab’s craft philosophy. Share a brief overview and timeline by email.',
      q4: 'How are my personal data and app records protected?',
      a4_html:
        'pixelab follows a strict local-first principle. We avoid unnecessary server storage and never embed third-party ad trackers. Read more in our <a href="privacy.html" class="text-blue-400 hover:underline">Privacy Policy</a>.',
      q5: 'Are there open roles or opportunities to work with pixelab?',
      a5_html:
        'We operate as a lean independent studio, and we are always glad to connect with iOS/Android engineers and product designers for project collaborations or a casual coffee chat.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Have an idea you want to build together?',
      description:
        'Product feedback, collaboration proposals, or beta access inquiries—we read and personally reply to every message.',
      email_btn: 'Send an Email',
    },
    footer: {
      desc: 'pixelab — Independent Mobile Application & Digital Product Studio',
      location: 'Location: Seoul, Republic of Korea',
      inquiry_label: 'Contact:',
      privacy: 'Privacy Policy',
    },
    toast: {
      store_coming_soon: '{app} on {store} is coming soon. Email hello@pixelabx.com for launch notifications.',
      email_copied: 'Email address (hello@pixelabx.com) copied to clipboard.',
    },
    privacy: {
      eyebrow: 'Legal',
      title: 'Privacy Policy',
      updated: 'Last Updated: 2025-01-01',
      intro:
        'pixelab respects your privacy and is committed to protecting your personal information in accordance with applicable privacy laws. This Privacy Policy explains how we collect, use, and safeguard your information.',
      s1_title: '1. Purpose of Processing Personal Information',
      s1_body:
        'pixelab processes personal information strictly for the following purposes and will obtain separate consent if those purposes ever change:\n\n• Service Provision & Operation: Delivering app functionality, content, and preventing unauthorized use.\n• Account & Member Management: Identity verification, fraud prevention, and dispute resolution records.\n• Customer Support: Responding to user inquiries, feedback, and service notices.',
      s2_title: '2. Retention Period',
      s2_body:
        '① pixelab retains personal information only for as long as necessary to fulfill the stated purposes or as mandated by applicable laws.\n\n② Specific retention periods:\n• Service usage records: Until account deletion\n• Contract or withdrawal records: 5 years (E-Commerce Act)\n• Payment and supply records: 5 years (E-Commerce Act)\n• Consumer complaint records: 3 years (E-Commerce Act)\n• Login logs: 3 months (Communications Privacy Act)',
      s3_title: '3. Your Privacy Rights',
      s3_body:
        'You may request access, correction, deletion, or restriction of your personal information at any time by contacting hello@pixelabx.com. We will process your request promptly without undue delay.',
      s4_title: '4. Data Deletion',
      s4_body:
        'When personal information is no longer needed due to expiration of the retention period or completion of its purpose, pixelab permanently deletes electronic files using irrecoverable technical methods.',
      s5_title: '5. Privacy Officer',
      s5_officer_label: 'Officer:',
      s5_officer_value: 'pixelab Representative',
      s5_email_label: 'Email:',
      s6_title: '6. Policy Changes',
      s6_body:
        'This Privacy Policy takes effect on January 1, 2025. Any updates required by law or security improvements will be announced on this website at least 7 days prior to taking effect.',
    },
  },

  ja: {
    meta: {
      title: 'pixelab | ピクセル研究所 — 日常の小さな不便を洗練されたアプリで',
      description: 'ピクセル研究所（pixelab）は、日常の小さな不便をシンプルでモダンなモバイルアプリで解決するインディーアプリスタジオです。',
      privacy_title: 'プライバシーポリシー | pixelab',
    },
    nav: {
      products: 'Products',
      showcase: 'Showcase',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'アプリを見る',
      back_home: '← ホームに戻る',
    },
    hero: {
      badge: 'ピクセル研究所 · Independent Mobile App Studio',
      title_html: '日常の小さな不便を<br><span class="text-blue-500">洗練されたアプリ</span>で解決します。',
      subtitle:
        'ピクセル一つひとつを研究するように、不要な機能やノイズを潔く削ぎ落とします。ピクセル研究所は、毎日手に取りたくなるシンプルでモダンな体験を設計します。',
      cta_primary: '代表アプリを見る',
      cta_secondary: 'スタジオ紹介',
      metric1_label: 'Apps in Lab',
      metric2_label: 'Native Craft',
      metric3_label: 'Ad Tracking',
      mockup_today_focus: '今日の集中',
      mockup_streak: '連続記録',
    },
    bento: {
      eyebrow: 'Products',
      title: '本当に必要な機能だけを研ぎ澄ませたアプリ',
      subtitle: '派手な装飾ではなく、長く使っても飽きないミニマルなUIと軽快なレスポンスに集中しています。',
      mp3: {
        status: '開発中',
        desc: '広告や複雑な推薦フィードを取り除き、音楽鑑賞の本質だけを残しました。FLAC・ALACロスレス再生と片手ジェスチャーに対応したミニマルプレーヤーです。',
      },
      timer: {
        status: 'プロトタイプ',
        desc: '流れる集中時間をピクセルマトリクスで視覚化するポモドーロタイマー。秒針の代わりに静かに満ちるピクセルが没入を支えます。',
      },
      memo: {
        status: '企画中',
        desc: 'アプリを開けば3秒で今日のページへ。サーバー送信なしの100%ローカルファーストなデイリーメモ。',
        quote: '「複雑な設定は不要。毎日一行、軽やかに残す習慣。」',
      },
      block: {
        status: '企画中 · ゲーム',
        desc: '1ピクセルずつ丁寧に描いたドットアートと8-bitチップチューン音源で再解釈したクラシック・ブロック崩し。',
      },
      strength1_title: '超軽量ネイティブ性能',
      strength1_desc: '平均15MB未満の軽量サイズと即座の起動スピードで、デバイスの容量とバッテリーを圧迫しません。',
      strength2_title: 'プライバシーファースト',
      strength2_desc: '不要な会員登録や広告トラッカーを排除し、大切なデータを端末内に安全に保ちます。',
      strength3_title: '滑らかな60fpsインタラクション',
      strength3_desc: '指先のジェスチャーとハプティクスまで繊細に調整し、説明書なしでも自然に馴染む操作感を実現します。',
    },
    showcase: {
      eyebrow: 'App Showcase',
      title: 'スクリーンで見るピクセル研究所のアプリ',
      detail_link: '製品詳細スペックを見る',
      memo_screen_title: '今日の一行メモ',
      memo_screen_body: '新しいランディングページが完成。余白を広げたらメッセージがより鮮明になった。',
      apps: [
        {
          id: 'mp3player',
          index: '01 / 04',
          status: '開発中 · 2026年リリース予定',
          name: 'MP3 Player',
          tagline: 'あなたの音楽、本質だけを残しました。',
          description:
            '煩雑なフィードや広告を一切省き、音楽鑑賞だけに集中できるミニマルオーディオプレーヤー。FLAC・ALACロスレス再生と直感的な片手ジェスチャーに対応します。',
          platforms: ['iOS 15+', 'Android 10+'],
          specs: [
            { label: '対応フォーマット', value: 'FLAC · ALAC · MP3 · WAV' },
            { label: 'アプリ容量', value: '約15MB 超軽量' },
            { label: '操作方式', value: 'フルジェスチャーUI' },
          ],
          detailUrl: 'products/mp3player.html',
        },
        {
          id: 'pixeltimer',
          index: '02 / 04',
          status: '開発予定 · プロトタイプ',
          name: 'Pixel Timer',
          tagline: '流れる時間をピクセルで視覚化する。',
          description:
            '数字が減るプレッシャーの代わりに、25分のポモドーロ集中時間がピクセルマトリクスとして静かに満たされていきます。12種類の洗練されたテーマを搭載。',
          platforms: ['iOS', 'Android', 'Web PWA'],
          specs: [
            { label: '主要モード', value: 'ポモドーロ · ディープワーク' },
            { label: 'アプリ容量', value: '約8MB' },
            { label: '通知体験', value: '穏やかなアンビエント触覚' },
          ],
          detailUrl: 'products/pixeltimer.html',
        },
        {
          id: 'dailymemo',
          index: '03 / 04',
          status: '企画中 · プレビュー',
          name: 'Daily Memo',
          tagline: '開いた瞬間、3秒で今日を記録。',
          description:
            '複雑なフォルダ階層やログイン手続きなしで、1日1枚のクリーンなページが開きます。すべての記録は端末内にローカル保存され、完全なプライバシーを守ります。',
          platforms: ['iOS', 'Android'],
          specs: [
            { label: 'データ保護', value: '100% オンデバイス保存' },
            { label: 'アプリ容量', value: '約5MB' },
            { label: '主要機能', value: 'カレンダー可視化 · 高速検索' },
          ],
          detailUrl: 'products/dailymemo.html',
        },
        {
          id: 'blockbreak',
          index: '04 / 04',
          status: '企画中 · ゲーム',
          name: 'Block Break',
          tagline: '手作りドットアートで蘇るクラシック・アーケード。',
          description:
            '1ピクセルずつ丹精込めて描いたレトロアートと60fps物理演算が融合。100の戦略ステージとオリジナル8-bitチップチューンが心地よい没入感をもたらします。',
          platforms: ['iOS', 'Android'],
          specs: [
            { label: 'コンテンツ', value: '100のハンドクラフトステージ' },
            { label: 'オーディオ', value: 'オリジナル8-bitチップチューン' },
            { label: 'プレイ環境', value: 'オフライン完全対応' },
          ],
          detailUrl: 'products/blockbreak.html',
        },
      ],
    },
    about: {
      eyebrow: 'About pixelab',
      title_html: 'すべてのピクセルには<br>意味があります。',
      description:
        'デジタル画面の最小単位であるピクセルのように、ピクセル研究所（pixelab）はアプリを構成する小さなインタラクション一つまで徹底的に磨き上げるインディースタジオです。技術は精緻に、体験はシンプルに。',
      p1_title: '01 · 本質への集中',
      p1_desc: '機能を無闇に増やすのではなく、思考や操作を妨げる要素を一つずつ引き算し、本当に必要な機能だけを直感的に配置します。',
      p2_title: '02 · モダンな完成度',
      p2_desc: '一過性の流行に流されないタイポグラフィと余白の設計、そしてOSネイティブの美しさを尊重するデザインシステムを維持します。',
      p3_title: '03 · 持続的な価値',
      p3_desc: '一時的な話題性にとどまらず、毎日のルーティンの中で静かに役立ち続けるプロダクトを着実にアップデートしていきます。',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'よくある質問',
      subtitle: 'リリース予定、サポート、協業のご相談、採用についてまとめました。',
      q1: 'アプリはいつリリースされ、どの端末で使えますか？',
      a1_html:
        '現在、代表アプリであるMP3 Playerを中心にiOS・Android双方での順次リリースを準備中です。リリース通知やTestFlightベータ参加をご希望の方は <a href="mailto:hello@pixelabx.com" class="text-blue-400 hover:underline">hello@pixelabx.com</a> までお気軽にご連絡ください。',
      q2: '不具合の報告や機能のリクエストはどこに送ればよいですか？',
      a2_html:
        'ご利用の端末と状況を <a href="mailto:hello@pixelabx.com" class="text-blue-400 hover:underline">hello@pixelabx.com</a> までお送りください。開発者が直接確認し、2営業日以内にご返信いたします。',
      q3: '企業との協業、パートナーシップ、受託開発の相談は可能ですか？',
      a3_html:
        'はい。pixelabのデザイン哲学と方向性が合うブランド協業、モバイルMVP設計、共同開発のご相談を歓迎しています。プロジェクト概要とスケジュールをメールにてお送りください。',
      q4: '個人情報やアプリ内データは安全に保護されますか？',
      a4_html:
        'pixelabは「ローカルファースト」を原則としています。不要なサーバー送信やサードパーティ広告トラッカーの組み込みを行いません。詳細は<a href="privacy.html" class="text-blue-400 hover:underline">プライバシーポリシー</a>をご確認ください。',
      q5: '採用やスタジオへの参加機会はありますか？',
      a5_html:
        '現在は少数精鋭のインディースタジオとして活動しています。iOS/Androidエンジニアやプロダクトデザイナーとのプロジェクト単位の協業やカジュアルな情報交換はいつでも歓迎です。',
    },
    contact: {
      eyebrow: 'Contact',
      title: '一緒に形にしたいアイデアはありますか？',
      description:
        '製品のフィードバック、協業のご提案、ベータテストのお問い合わせまで大歓迎です。いただいたメッセージはすべてチームが直接目を通し返信いたします。',
      email_btn: 'メールで問い合わせる',
    },
    footer: {
      desc: 'ピクセル研究所（pixelab）· モバイルアプリ＆デジタルプロダクト開発スタジオ',
      location: '所在地: ソウル特別市（Seoul, Republic of Korea）',
      inquiry_label: 'お問い合わせ:',
      privacy: 'プライバシーポリシー',
    },
    toast: {
      store_coming_soon: '{app}（{store}）はリリース準備中です。通知ご希望は hello@pixelabx.com までご連絡ください。',
      email_copied: 'メールアドレス（hello@pixelabx.com）をクリップボードにコピーしました。',
    },
    privacy: {
      eyebrow: 'Legal',
      title: 'プライバシーポリシー',
      updated: '最終更新日: 2025-01-01',
      intro:
        'pixelab（ピクセル研究所）は、個人情報保護法に基づき、ユーザーの個人情報を保護し、これに関するお問い合わせを迅速かつ円滑に処理するため、以下の通りプライバシーポリシーを策定・公開します。',
      s1_title: '1. 個人情報の処理目的',
      s1_body:
        'pixelabは次の目的のために個人情報を処理します。目的が変更される場合には、法令に従って別途同意を得るなど必要な措置を講じます。\n\n• サービスの提供と運営：アプリ機能・コンテンツの提供および不正利用の防止\n• 会員管理：本人確認、不正利用防止および紛争対応のための記録保存\n• カスタマーサポート：お問い合わせ対応および重要なお知らせの伝達',
      s2_title: '2. 個人情報の保有期間',
      s2_body:
        '① pixelabは法令に基づく保有期間、またはご同意いただいた期間内でのみ個人情報を処理・保有します。\n\n② 主な保有期間：\n• サービス利用関連情報：退会時まで\n• 契約または申込撤回に関する記録：5年（電子商取引法）\n• 決済および供給に関する記録：5年（電子商取引法）\n• 消費者苦情・紛争処理に関する記録：3年（電子商取引法）\n• ログイン記録：3ヶ月（通信秘密保護法）',
      s3_title: '3. 情報主体の権利および行使方法',
      s3_body:
        'ユーザーはいつでも個人情報の閲覧、訂正、削除、処理停止を請求することができます。ご請求はメール（hello@pixelabx.com）にて受け付けており、遅滞なく対応いたします。',
      s4_title: '4. 個人情報の廃棄',
      s4_body:
        '保有期間の経過や処理目的の達成により不要となった個人情報は遅滞なく廃棄します。電子ファイルは復元不可能な技術的方法により完全に削除します。',
      s5_title: '5. 個人情報保護責任者',
      s5_officer_label: '責任者:',
      s5_officer_value: 'pixelab 代表',
      s5_email_label: 'メール:',
      s6_title: '6. プライバシーポリシーの変更',
      s6_body:
        '本ポリシーは2025年1月1日より適用されます。法令やセキュリティ方針の変更に伴い改定がある場合は、施行の7日前までに本ウェブサイト上でお知らせいたします。',
    },
  },
};

const LandingI18n = {
  supported: ['ko', 'en', 'ja'],
  currentLang: 'ko',

  init() {
    const saved = localStorage.getItem('language');
    if (saved && this.supported.includes(saved)) {
      this.currentLang = saved;
    }

    this.bindSwitchers();
    this.applyLanguage(this.currentLang);
  },

  bindSwitchers() {
    document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang-switch');
        this.setLanguage(lang);
      });
    });
  },

  setLanguage(lang) {
    if (!this.supported.includes(lang)) return;
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    this.applyLanguage(lang);
  },

  get(path) {
    const dict = LANDING_TRANSLATIONS[this.currentLang] || LANDING_TRANSLATIONS.ko;
    return path.split('.').reduce((acc, part) => (acc && part in acc ? acc[part] : undefined), dict);
  },

  applyLanguage(lang) {
    document.documentElement.lang = lang;

    // Update page title & meta description if tagged
    const titleKey = document.body.getAttribute('data-page-title-key');
    if (titleKey) {
      const titleVal = this.get(titleKey);
      if (titleVal) document.title = titleVal;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && !titleKey?.includes('privacy')) {
      const descVal = this.get('meta.description');
      if (descVal) metaDesc.setAttribute('content', descVal);
    }

    // Plain text translations
    document.querySelectorAll('[data-t]').forEach((el) => {
      const val = this.get(el.getAttribute('data-t'));
      if (typeof val === 'string') {
        el.textContent = val;
      }
    });

    // HTML translations (e.g., line breaks, links, accent spans)
    document.querySelectorAll('[data-t-html]').forEach((el) => {
      const val = this.get(el.getAttribute('data-t-html'));
      if (typeof val === 'string') {
        el.innerHTML = val;
      }
    });

    // Update language switcher button styles
    document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      const active = btn.getAttribute('data-lang-switch') === lang;
      btn.classList.toggle('bg-white/15', active);
      btn.classList.toggle('text-white', active);
      btn.classList.toggle('text-zinc-400', !active);
      btn.setAttribute('aria-pressed', String(active));
    });

    // Notify dynamic widgets (Showcase Carousel, Toasts, etc.)
    window.dispatchEvent(new CustomEvent('landingLanguageChanged', { detail: { lang } }));
  },
};

window.LandingI18n = LandingI18n;
