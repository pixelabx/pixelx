// pixelab — 3-Language Translations & Interactions for Product Landing Pages

const PRODUCT_PAGE_TRANSLATIONS = {
  ko: {
    common: {
      back_products: '← 모든 제품 보기',
      features_eyebrow: 'Key Features',
      features_title: '핵심 기능',
      specs_eyebrow: 'Specifications',
      specs_title: '제품 사양',
      other_products: '다른 제품 둘러보기',
      notify_cta: '출시 알림 문의',
    },
    mp3player: {
      meta_title: 'MP3 Player | pixelab',
      status: '개발 중 · 2026 출시 예정',
      hero_title_html: '당신의 음악,<br><span class="text-blue-500">심플하게.</span>',
      hero_subtitle:
        '복잡한 설정, 화려한 이펙트, 불필요한 광고와 추천 피드를 모두 덜어냈습니다. 오직 음악과 당신만 남았습니다.',
      f1_title: '미니멀 인터페이스',
      f1_desc: '화면 가득 앨범 커버와 재생 컨트롤만 남겼습니다. 복잡한 메뉴는 숨기고 꼭 필요한 조작만 직관적으로 배치했습니다.',
      f2_title: '직관적인 한 손 제스처',
      f2_desc: '스와이프로 곡 넘기기, 탭으로 재생/정지, 길게 누르면 즐겨찾기. 설명서가 필요 없는 자연스러운 조작감을 제공합니다.',
      f3_title: '무손실 고음질 엔진',
      f3_desc: 'FLAC, ALAC, WAV, AAC 등 모든 고음질 포맷을 지원합니다. 원음의 결을 그대로 전달하도록 최적화된 오디오 엔진을 탑재했습니다.',
      f4_title: '스마트 플레이리스트',
      f4_desc: '자주 듣는 곡, 최근 추가한 앨범, 시간대별 청취 흐름을 정리해 별도 관리 없이도 쾌적한 재생 목록을 유지합니다.',
      spec1_label: '플랫폼',
      spec1_val: 'iOS 15+, Android 10+',
      spec2_label: '앱 용량',
      spec2_val: '약 15MB (초경량)',
      spec3_label: '지원 포맷',
      spec3_val: 'FLAC, ALAC, WAV, MP3, AAC, OGG',
      spec4_label: '출시 예정',
      spec4_val: '2026년 순차 출시',
      why_eyebrow: 'Philosophy',
      why_title: '왜 MP3 Player인가요?',
      why_desc:
        '이미 수많은 음악 플레이어가 있지만 대부분 너무 복잡하거나 불필요한 기능으로 가득합니다. 픽셀연구소는 "음악을 듣는다"는 본질에만 집중했습니다. 설정할 것도, 배울 것도 없습니다. 그저 재생 버튼을 누르세요.',
    },
    pixeltimer: {
      meta_title: 'Pixel Timer | pixelab',
      status: '개발 예정 · 프로토타입',
      hero_title_html: '시간을 픽셀로<br><span class="text-blue-500">표현하다.</span>',
      hero_subtitle:
        '초침이 줄어드는 압박감 대신 픽셀이 고요히 채워집니다. 흘러가는 집중 시간을 미니멀한 애니메이션으로 경험하세요.',
      f1_title: '픽셀 매트릭스 애니메이션',
      f1_desc: '시간이 흐를수록 픽셀이 하나씩 채워지는 시각적 경험. 시간을 숫자로 세는 대신, 몰입의 깊이를 한눈에 바라봅니다.',
      f2_title: '포모도로 집중 리듬',
      f2_desc: '25분 집중과 5분 휴식의 검증된 리듬을 군더더기 없이 구현했습니다. 세션 통계와 연속 기록으로 꾸준한 루틴을 만듭니다.',
      f3_title: '절제된 12가지 테마',
      f3_desc: '새벽의 고요함부터 밤의 깊은 몰입까지, 눈의 피로를 줄이는 다크·라이트 기반 12가지 컬러 팔레트를 제공합니다.',
      f4_title: '부드러운 앰비언트 알림',
      f4_desc: '집중이 끝나는 순간 놀라게 하는 알람 대신, 은은한 사운드와 미세한 햅틱 피드백으로 자연스럽게 전환을 알려줍니다.',
      spec1_label: '플랫폼',
      spec1_val: 'iOS, Android, Web (PWA)',
      spec2_label: '앱 용량',
      spec2_val: '약 8MB',
      spec3_label: '핵심 기능',
      spec3_val: '포모도로, 딥워크, 스톱워치, 통계',
      spec4_label: '개발 단계',
      spec4_val: '프로토타입 진행 중',
      why_eyebrow: 'Philosophy',
      why_title: '왜 Pixel Timer인가요?',
      why_desc:
        '카운트다운 숫자는 종종 집중을 돕기보다 조급함을 만듭니다. Pixel Timer는 시간을 부드러운 시각적 패턴으로 바꿔, 작업 자체에 온전히 머무를 수 있는 환경을 설계합니다.',
    },
    dailymemo: {
      meta_title: 'Daily Memo | pixelab',
      status: '기획 중 · 프리뷰',
      hero_title_html: '하루를 기록하는<br><span class="text-blue-500">가장 간단한 방법.</span>',
      hero_subtitle:
        '일기를 쓰기엔 부담스럽고 기억만으론 아쉬울 때. 앱을 열면 3초 만에 오늘의 페이지가 펼쳐집니다.',
      f1_title: '하루 한 장의 여백',
      f1_desc: '매일 하나의 깨끗한 페이지가 준비됩니다. 짧은 한 줄이어도, 긴 생각이어도 부담 없이 자유롭게 남길 수 있습니다.',
      f2_title: '3초 만에 바로 기록',
      f2_desc: '로딩 화면, 로그인, 복잡한 폴더 선택이 없습니다. 생각이 떠오른 그 순간 앱을 열어 바로 타이핑을 시작하세요.',
      f3_title: '캘린더 히트맵 회고',
      f3_desc: '기록이 쌓인 날짜가 달력 위에 픽셀처럼 채워집니다. 지난 날의 흐름을 한눈에 돌아보며 기록 습관을 이어갑니다.',
      f4_title: '100% 온디바이스 프라이버시',
      f4_desc: '모든 메모는 오직 당신의 기기에만 저장됩니다. 서버 전송·광고·추적 없이 가장 개인적인 생각을 안전하게 지킵니다.',
      spec1_label: '플랫폼',
      spec1_val: 'iOS, Android',
      spec2_label: '앱 용량',
      spec2_val: '약 5MB',
      spec3_label: '핵심 기능',
      spec3_val: '일일 메모, 캘린더 뷰, 태그, 로컬 암호화',
      spec4_label: '개발 단계',
      spec4_val: '기획 및 UI 설계 중',
      why_eyebrow: 'Philosophy',
      why_title: '왜 Daily Memo인가요?',
      why_desc:
        '기록이 오래가지 못하는 이유는 도구가 너무 무겁기 때문입니다. Daily Memo는 꾸미기와 정리의 부담을 걷어내고, 매일 한 줄 남기는 습관 그 자체에 집중합니다.',
    },
    blockbreak: {
      meta_title: 'Block Break | pixelab',
      status: '기획 중 · 게임',
      hero_title_html: '픽셀로 즐기는<br><span class="text-blue-500">클래식 아케이드.</span>',
      hero_subtitle:
        '레트로 오락실의 손맛과 현대적인 미니멀 디자인이 만났습니다. 짧지만 강렬한 몰입을 선사하는 블록 깨기 게임.',
      f1_title: '수작업 픽셀 아트',
      f1_desc: '블록 하나, 패들 하나까지 픽셀 단위로 정성스럽게 다듬어 레트로하면서도 모던한 비주얼을 완성했습니다.',
      f2_title: '100개 핸드크래프트 스테이지',
      f2_desc: '가벼운 워밍업부터 전략과 반사 신경이 필요한 고난도 패턴까지, 매 스테이지마다 새로운 공략의 재미가 기다립니다.',
      f3_title: '전략적 특수 블록 & 파워업',
      f3_desc: '폭탄 블록, 레이저, 멀티볼, 와이드 패들 등 20여 가지 특수 기믹으로 같은 스테이지도 다양한 방식으로 공략합니다.',
      f4_title: '오리지널 8-bit 칩튠 사운드',
      f4_desc: '블록이 부서질 때마다 쾌감을 주는 경쾌한 칩튠 효과음과 몰입감을 높이는 배경음악을 담았습니다.',
      spec1_label: '플랫폼',
      spec1_val: 'iOS, Android',
      spec2_label: '앱 용량',
      spec2_val: '약 20MB',
      spec3_label: '게임 모드',
      spec3_val: '스토리, 아케이드, 타임어택',
      spec4_label: '플레이 환경',
      spec4_val: '60fps · 오프라인 완벽 지원',
      why_eyebrow: 'Philosophy',
      why_title: '왜 Block Break인가요?',
      why_desc:
        '복잡한 과금 구조나 끝없는 튜토리얼 없이, 3분 동안 순수하게 즐길 수 있는 모바일 게임을 만들고 싶었습니다. 손끝의 리듬과 물리 타격감에만 집중한 클래식 아케이드입니다.',
    },
  },

  en: {
    common: {
      back_products: '← All Products',
      features_eyebrow: 'Key Features',
      features_title: 'Designed for Pure Focus',
      specs_eyebrow: 'Specifications',
      specs_title: 'Technical Specs',
      other_products: 'Explore More Apps',
      notify_cta: 'Request Launch Updates',
    },
    mp3player: {
      meta_title: 'MP3 Player | pixelab',
      status: 'In Development · Coming 2026',
      hero_title_html: 'Your Music,<br><span class="text-blue-500">Simply.</span>',
      hero_subtitle:
        'No crowded feeds, no noisy ads, no bloated settings. Everything non-essential is gone—leaving just you and your music.',
      f1_title: 'Minimal Interface',
      f1_desc: 'Full-focus album artwork and crisp playback controls. Complex menus stay out of sight so your attention stays on the sound.',
      f2_title: 'One-Hand Gestures',
      f2_desc: 'Swipe to skip, tap to play or pause, press and hold to favorite. Effortless controls that feel intuitive from second one.',
      f3_title: 'Lossless Audio Engine',
      f3_desc: 'Supports FLAC, ALAC, WAV, AAC, and more with a finely tuned playback engine built to preserve studio-grade detail.',
      f4_title: 'Smart Playlists',
      f4_desc: 'Automatically organizes your most-played tracks, recent additions, and listening rhythms without manual maintenance.',
      spec1_label: 'Platform',
      spec1_val: 'iOS 15+, Android 10+',
      spec2_label: 'App Size',
      spec2_val: '~15MB Ultra-light',
      spec3_label: 'Formats',
      spec3_val: 'FLAC, ALAC, WAV, MP3, AAC, OGG',
      spec4_label: 'Release',
      spec4_val: 'Scheduled for 2026',
      why_eyebrow: 'Philosophy',
      why_title: 'Why MP3 Player?',
      why_desc:
        'Countless music players already exist, yet most feel overloaded with algorithmic noise. We built MP3 Player around a single truth: listening to music should require nothing to configure and nothing to learn.',
    },
    pixeltimer: {
      meta_title: 'Pixel Timer | pixelab',
      status: 'Upcoming · Prototype',
      hero_title_html: 'Visualizing Time<br><span class="text-blue-500">in Pixels.</span>',
      hero_subtitle:
        'Instead of racing against ticking numbers, watch calm pixels fill one by one as deep focus unfolds.',
      f1_title: 'Pixel Matrix Animation',
      f1_desc: 'A tactile visual rhythm where each passing minute illuminates a new pixel—helping you feel time rather than stress over it.',
      f2_title: 'Pomodoro Deep Rhythm',
      f2_desc: 'Scientifically proven 25-minute focus and 5-minute rest intervals, paired with minimal session logs and streak insights.',
      f3_title: '12 Curated Themes',
      f3_desc: 'From dawn stillness to midnight focus, choose from 12 restrained dark and light palettes crafted to reduce eye strain.',
      f4_title: 'Gentle Ambient Alerts',
      f4_desc: 'Soft chimes and subtle haptic cues signal session transitions smoothly without breaking your calm.',
      spec1_label: 'Platform',
      spec1_val: 'iOS, Android, Web (PWA)',
      spec2_label: 'App Size',
      spec2_val: '~8MB',
      spec3_label: 'Core Modes',
      spec3_val: 'Pomodoro, Deep Work, Stopwatch, Stats',
      spec4_label: 'Stage',
      spec4_val: 'Active Prototype',
      why_eyebrow: 'Philosophy',
      why_title: 'Why Pixel Timer?',
      why_desc:
        'Countdown clocks often create anxiety instead of clarity. Pixel Timer turns elapsed time into a serene visual pattern so you can stay immersed in meaningful work.',
    },
    dailymemo: {
      meta_title: 'Daily Memo | pixelab',
      status: 'Planning · Preview',
      hero_title_html: 'The Simplest Way<br><span class="text-blue-500">to Record Your Day.</span>',
      hero_subtitle:
        'When a full journal feels heavy but memories deserve to stay. Open the app and start writing in under 3 seconds.',
      f1_title: 'One Clean Page a Day',
      f1_desc: 'A fresh minimal canvas awaits every morning. Write a single sentence or a full reflection—zero pressure, pure consistency.',
      f2_title: 'Capture in 3 Seconds',
      f2_desc: 'No splash delays, no mandatory sign-ins, no nested folders. Launch straight into today’s note the instant an idea arrives.',
      f3_title: 'Calendar Heatmap Reflection',
      f3_desc: 'Recorded days light up across a sleek monthly grid, letting you revisit past entries and visualize your daily streak.',
      f4_title: '100% On-Device Privacy',
      f4_desc: 'Every memo stays exclusively on your device. No server uploads, no ads, and no tracking—your thoughts stay yours.',
      spec1_label: 'Platform',
      spec1_val: 'iOS, Android',
      spec2_label: 'App Size',
      spec2_val: '~5MB',
      spec3_label: 'Core Features',
      spec3_val: 'Daily Note, Calendar View, Tags, Local Encryption',
      spec4_label: 'Stage',
      spec4_val: 'Design & Architecture',
      why_eyebrow: 'Philosophy',
      why_title: 'Why Daily Memo?',
      why_desc:
        'Most journaling habits fail because the tool gets in the way. Daily Memo removes formatting overhead so capturing one honest line a day becomes effortless.',
    },
    blockbreak: {
      meta_title: 'Block Break | pixelab',
      status: 'Planning · Game',
      hero_title_html: 'Classic Arcade,<br><span class="text-blue-500">Pixel by Pixel.</span>',
      hero_subtitle:
        'Retro arcade feel meets crisp modern minimalism. Short, tactile sessions designed for pure gameplay focus.',
      f1_title: 'Handcrafted Pixel Art',
      f1_desc: 'Every brick, ball, and effect is crafted at the pixel level—blending classic arcade charm with modern visual restraint.',
      f2_title: '100 Handcrafted Stages',
      f2_desc: 'Progress from breezy warm-ups to tactical challenge boards, each engineered with unique brick layouts and rhythm.',
      f3_title: 'Tactical Power-Ups',
      f3_desc: 'Over 20 special bricks and pickups—including multi-ball, laser, and bomb chains—keep every replay fresh.',
      f4_title: 'Original 8-Bit Chiptune',
      f4_desc: 'Crisp retro sound effects and original chiptune tracks tuned to make every bounce and break feel deeply satisfying.',
      spec1_label: 'Platform',
      spec1_val: 'iOS, Android',
      spec2_label: 'App Size',
      spec2_val: '~20MB',
      spec3_label: 'Game Modes',
      spec3_val: 'Story, Arcade, Time Attack',
      spec4_label: 'Runtime',
      spec4_val: '60fps · Full Offline Support',
      why_eyebrow: 'Philosophy',
      why_title: 'Why Block Break?',
      why_desc:
        'We wanted a mobile game you can enjoy for three pure minutes—without aggressive monetization or endless tutorials. Just crisp physics, clean visuals, and arcade flow.',
    },
  },

  ja: {
    common: {
      back_products: '← すべての製品を見る',
      features_eyebrow: 'Key Features',
      features_title: '主な特徴',
      specs_eyebrow: 'Specifications',
      specs_title: '製品仕様',
      other_products: '他のアプリを見る',
      notify_cta: 'リリース通知を希望する',
    },
    mp3player: {
      meta_title: 'MP3 Player | pixelab',
      status: '開発中 · 2026年リリース予定',
      hero_title_html: 'あなたの音楽を、<br><span class="text-blue-500">シンプルに。</span>',
      hero_subtitle:
        '煩雑な設定、派手な演出、不要な広告や推薦フィードをすべて取り除きました。残ったのは音楽とあなただけです。',
      f1_title: 'ミニマルインターフェース',
      f1_desc: 'アルバムアートと必要最小限の再生コントロールだけ。複雑なメニューを隠し、音楽に没頭できる画面に整えました。',
      f2_title: '直感的な片手ジェスチャー',
      f2_desc: 'スワイプで曲送り、タップで再生/停止、長押しでお気に入り。説明書なしで指に馴染む自然な操作感を実現します。',
      f3_title: 'ロスレス高音質エンジン',
      f3_desc: 'FLAC、ALAC、WAV、AACなど主要フォーマットに対応。原音の繊細なニュアンスをそのまま届ける設計です。',
      f4_title: 'スマートプレイリスト',
      f4_desc: 'よく聴く曲や最近追加したアルバムを自動で整理し、手間なく心地よい再生環境を保ちます。',
      spec1_label: 'プラットフォーム',
      spec1_val: 'iOS 15+, Android 10+',
      spec2_label: 'アプリ容量',
      spec2_val: '約15MB（超軽量）',
      spec3_label: '対応フォーマット',
      spec3_val: 'FLAC, ALAC, WAV, MP3, AAC, OGG',
      spec4_label: 'リリース予定',
      spec4_val: '2026年 順次公開',
      why_eyebrow: 'Philosophy',
      why_title: 'なぜ MP3 Player なのか',
      why_desc:
        'すでに数多くの音楽アプリが存在しますが、その多くは多機能すぎてノイズが多くなりがちです。私たちは「音楽を聴く」という本質だけに立ち返り、迷わず再生できる道具を作りました。',
    },
    pixeltimer: {
      meta_title: 'Pixel Timer | pixelab',
      status: '開発予定 · プロトタイプ',
      hero_title_html: '流れる時間を、<br><span class="text-blue-500">ピクセルで描く。</span>',
      hero_subtitle:
        '秒針に追われる感覚ではなく、静かに満ちていくピクセル。集中する時間そのものを心地よい視覚体験へ変えます。',
      f1_title: 'ピクセルマトリクス表現',
      f1_desc: '時間の経過に合わせてピクセルが一つずつ点灯。数字を数えるのではなく、集中の積み重ねを目で感じられます。',
      f2_title: 'ポモドーロ集中リズム',
      f2_desc: '25分の集中と5分の休憩をシンプルに実装。セッション履歴と連続記録で無理なく生産性を高めます。',
      f3_title: '12種類の洗練されたテーマ',
      f3_desc: '夜明けの静けさから深夜の作業まで、目の疲れを抑えるダーク・ライト基調の12テーマを収録しています。',
      f4_title: '穏やかなアンビエント通知',
      f4_desc: '終了時に驚かせるアラームではなく、柔らかな音色と繊細なハプティクスで自然に区切りを知らせます。',
      spec1_label: 'プラットフォーム',
      spec1_val: 'iOS, Android, Web (PWA)',
      spec2_label: 'アプリ容量',
      spec2_val: '約8MB',
      spec3_label: '主要機能',
      spec3_val: 'ポモドーロ、ディープワーク、統計',
      spec4_label: '開発状況',
      spec4_val: 'プロトタイプ制作中',
      why_eyebrow: 'Philosophy',
      why_title: 'なぜ Pixel Timer なのか',
      why_desc:
        '減っていく数字は時に焦りを生みます。Pixel Timerは時間を穏やかな視覚パターンに置き換えることで、作業そのものに深く没頭できる空間をつくります。',
    },
    dailymemo: {
      meta_title: 'Daily Memo | pixelab',
      status: '企画中 · プレビュー',
      hero_title_html: '一日を記録する、<br><span class="text-blue-500">最もシンプルな方法。</span>',
      hero_subtitle:
        '日記帳を開くのは少し重いけれど、今日の記憶は残したい。起動から3秒で書き始められる軽やかなメモアプリです。',
      f1_title: '一日一枚の余白',
      f1_desc: '毎日新しい1ページを用意。短い一行でも、長い思考でも、気負わず自分のペースで残せます。',
      f2_title: '3秒ですぐに記録',
      f2_desc: 'ローディングもログインも複雑なフォルダ階層も不要。思いついた瞬間にそのまま書き留められます。',
      f3_title: 'カレンダーヒートマップ',
      f3_desc: '記録した日がカレンダー上にピクセルのように灯ります。日々の積み重ねを一目で振り返れます。',
      f4_title: '100% オンデバイス保護',
      f4_desc: 'すべてのメモは端末内にのみ保存。サーバー送信や広告トラッキングを排除し、プライバシーを守り抜きます。',
      spec1_label: 'プラットフォーム',
      spec1_val: 'iOS, Android',
      spec2_label: 'アプリ容量',
      spec2_val: '約5MB',
      spec3_label: '主要機能',
      spec3_val: 'デイリーメモ、カレンダー、タグ、暗号化',
      spec4_label: '開発状況',
      spec4_val: 'UI設計・企画中',
      why_eyebrow: 'Philosophy',
      why_title: 'なぜ Daily Memo なのか',
      why_desc:
        '記録が続かない一番の理由は、ツールが重すぎることです。Daily Memoは装飾や管理の負担を省き、毎日一行を残す習慣そのものを支えます。',
    },
    blockbreak: {
      meta_title: 'Block Break | pixelab',
      status: '企画中 · ゲーム',
      hero_title_html: 'ピクセルで楽しむ<br><span class="text-blue-500">クラシック・アーケード。</span>',
      hero_subtitle:
        '往年のゲームセンターの手応えとモダンなミニマルデザインを融合。短時間でも深く熱中できるブロック崩しです。',
      f1_title: '手作りドットアート',
      f1_desc: 'ブロックやボールまで1ピクセル単位で丁寧に設計。レトロな温かみと現代的な洗練を両立しました。',
      f2_title: '100のハンドクラフトステージ',
      f2_desc: '軽快な導入ステージから戦略とタイミングが問われる高難度構成まで、多彩なパターンを収録します。',
      f3_title: '戦略的なパワーアップ',
      f3_desc: 'ボムブロック、レーザー、マルチボールなど20種類以上のギミックで、毎回異なる攻略を楽しめます。',
      f4_title: 'オリジナル8-bitチップチューン',
      f4_desc: 'ブロックを砕くたびに心地よく響く8-bit効果音と専用BGMで、リズム感のある没入体験を届けます。',
      spec1_label: 'プラットフォーム',
      spec1_val: 'iOS, Android',
      spec2_label: 'アプリ容量',
      spec2_val: '約20MB',
      spec3_label: 'ゲームモード',
      spec3_val: 'ストーリー、アーケード、タイムアタック',
      spec4_label: 'プレイ環境',
      spec4_val: '60fps · オフライン完全対応',
      why_eyebrow: 'Philosophy',
      why_title: 'なぜ Block Break なのか',
      why_desc:
        '煩雑な課金導線や長いチュートリアルなしに、空き時間の3分で純粋に熱中できるゲームを目指しました。指先の気持ちよい手応えだけに集中したアーケード作品です。',
    },
  },
};

// Merge productPage translations into global LANDING_TRANSLATIONS
if (window.LANDING_TRANSLATIONS) {
  ['ko', 'en', 'ja'].forEach((lang) => {
    window.LANDING_TRANSLATIONS[lang].productPage = PRODUCT_PAGE_TRANSLATIONS[lang];
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Handle store badge click on product pages
  const productName = document.body.getAttribute('data-product-name') || 'App';
  document.querySelectorAll('[data-product-store-badge]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const store = btn.getAttribute('data-product-store-badge');
      const tpl =
        (window.LandingI18n && window.LandingI18n.get('toast.store_coming_soon')) ||
        '{app} ({store}) 출시 준비 중입니다. 출시 알림은 hello@pixelabx.com으로 문의해 주세요.';
      const toast = document.getElementById('toast-banner');
      const toastText = document.getElementById('toast-message');
      if (toast && toastText) {
        toastText.textContent = tpl.replace('{app}', productName).replace('{store}', store);
        toast.classList.add('is-visible');
        clearTimeout(window.__productToastTimer);
        window.__productToastTimer = setTimeout(() => {
          toast.classList.remove('is-visible');
        }, 3000);
      }
    });
  });
});
