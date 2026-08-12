type ProjectScope = "CLIENT" | "PERSONAL" | "TEAM" | "RESEARCH";
type Availability = "PUBLIC" | "PRIVATE" | "ARCHIVED";

type Project = {
  slug: string;
  no: string;
  title: string;
  type: string;
  scopes: ProjectScope[];
  availability: Availability;
  status: string;
  stack: string[];
  summary: string;
  quest: string;
  challenges: string[];
  result: string;
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    slug: "virozet",
    no: "01",
    title: "VIROZET",
    type: "FIRMWARE + DESKTOP",
    scopes: ["CLIENT"],
    availability: "PRIVATE",
    status: "DELIVERED · 2026",
    stack: ["C++", "RP2040", "Rust", "Tauri"],
    summary: "펌웨어·운영 도구·현장 배포를 잇는 RP2040 통합 시스템",
    quest:
      "RP2040 장치의 펌웨어부터 설정·진단용 데스크톱 도구, 현장 배포 흐름까지 하나의 운영 체계로 연결했습니다.",
    challenges: [
      "센서·모터·DCDC·오디오를 제어하는 장치 상태 머신",
      "USB CDC·BLE UART 명령과 EEPROM 설정 저장",
      "운영자/개발자 권한을 분리한 Rust·Tauri 도구",
    ],
    result: "통합 펌웨어, 두 권한 수준의 운영 도구, UF2 배포 산출물",
  },
  {
    slug: "real-hx-tools",
    no: "02",
    title: "RE:AL HX TOOLS",
    type: "FIRMWARE RESEARCH",
    scopes: ["PERSONAL"],
    availability: "PRIVATE",
    status: "VERIFIED · 2026",
    stack: ["Python", "HID", "Capstone", "Binary"],
    summary: "키보드 펌웨어와 USB OTA 프로토콜을 분석한 패치 도구",
    quest:
      "키보드의 동작을 직접 바꾸기 위해 제조사 펌웨어와 USB OTA 프로토콜을 분석하고 안전한 패치 도구를 만들었습니다.",
    challenges: [
      "펌웨어 이미지 구조와 HID OTA 조건 분석",
      "물리 키 위치·키코드 단위 키맵 패치",
      "실제 하드웨어에서 SpaceFn 탐색 레이어 검증",
    ],
    result: "조회·검증·업데이트 CLI와 반복 가능한 바이너리 분석 흐름",
  },
  {
    slug: "repo-books",
    no: "03",
    title: "REPO BOOKS",
    type: "AI DEVELOPER TOOL",
    scopes: ["PERSONAL"],
    availability: "PRIVATE",
    status: "BUILT · 2026",
    stack: ["TypeScript", "React", "Fastify", "SQLite"],
    summary: "GitHub 저장소를 구조적인 기술서로 변환하는 AI 도구",
    quest:
      "큰 GitHub 저장소를 구조와 코드 흐름을 따라 읽을 수 있는 한 권의 기술서로 변환하는 도구를 설계했습니다.",
    challenges: [
      "근거 수집부터 챕터 생성까지 이어지는 다단계 파이프라인",
      "장기 실행 작업·실패 artifact·선택 재시도",
      "데스크톱 3열 리더와 모바일 TOC·튜터 UI",
    ],
    result: "생성 품질과 실패 상태를 숨기지 않는 저장소 학습 워크플로",
  },
  {
    slug: "nimbus",
    no: "04",
    title: "NIMBUS",
    type: "WINDOWS FILE WORKBENCH",
    scopes: ["PERSONAL"],
    availability: "PUBLIC",
    status: "IN PROGRESS · 2026—",
    stack: ["Rust", "GPUI", "Windows API", "ZIP"],
    summary: "안전한 대량 작업과 다중 패널을 갖춘 파일 워크벤치",
    quest:
      "다중 폴더 탐색과 대량 파일 작업을 개발자 흐름에 맞게 재설계한 Windows 파일 워크벤치를 개발하고 있습니다.",
    challenges: [
      "1—4개 재귀 분할 패널과 패널별 탭·히스토리",
      "충돌 사전 검사와 pause·resume·cancel·undo 작업 큐",
      "Quick Look·명령 팔레트·PowerShell/WSL 연동",
    ],
    result: "fmt·test·clippy -D warnings 자동 검증 통과",
    links: [{ label: "GITHUB · AGENT/NIMBUS-V1", href: "https://github.com/seobaeksol/nimbus/tree/agent/nimbus-v1" }],
  },
  {
    slug: "esp32-p4-bare-metal",
    no: "05",
    title: "ESP32-P4 BARE METAL",
    type: "LOW-LEVEL RUST",
    scopes: ["RESEARCH"],
    availability: "PUBLIC",
    status: "LAB COMPLETE · 2026",
    stack: ["Rust", "no_std", "RISC-V", "PAC"],
    summary: "레지스터 수준에서 구현한 ESP32-P4 Rust 펌웨어 샘플",
    quest:
      "ESP32-P4의 부팅 흐름과 주변장치를 프레임워크 아래가 아닌 레지스터 수준에서 이해하기 위한 샘플을 작성했습니다.",
    challenges: [
      "riscv-rt entry와 trap·interrupt hook",
      "SVD 기반 PAC와 watchdog·system timer 제어",
      "UART0·USB Serial/JTAG 저수준 문자열 출력",
    ],
    result: "HAL 없이 부팅·출력·watchdog 제어가 가능한 모듈형 펌웨어",
    links: [{ label: "GITHUB", href: "https://github.com/seobaeksol/esp32-p4-example" }],
  },
  {
    slug: "krx-rs",
    no: "06",
    title: "KRX-RS",
    type: "RUST DATA CLIENT",
    scopes: ["PERSONAL"],
    availability: "PUBLIC",
    status: "BUILT · 2026",
    stack: ["Rust", "Tokio", "Polars", "tracing"],
    summary: "KRX 시장 데이터를 타입 안전하게 다루는 Rust API 클라이언트",
    quest:
      "KRX Open API의 여러 시장 데이터를 타입 안전한 Rust 인터페이스와 분석 가능한 DataFrame 흐름으로 연결했습니다.",
    challenges: [
      "주식·지수·채권·ETP·파생상품 API를 모듈화한 클라이언트",
      "날짜·최신 데이터 조회를 표현하는 builder 기반 요청 구성",
      "비동기 실행, 오류 문맥, 민감정보 필터링 로깅과 Polars 변환",
    ],
    result: "예제와 테스트를 포함한 KRX Open API용 비동기 Rust 클라이언트",
    links: [{ label: "GITHUB", href: "https://github.com/seobaeksol/krx-rs" }],
  },
  {
    slug: "oh-my-desk",
    no: "07",
    title: "OH-MY-DESK",
    type: "TEAM DESKTOP PRODUCT",
    scopes: ["TEAM"],
    availability: "PUBLIC",
    status: "RELEASED · 2017",
    stack: ["Electron", "React", "Redux", "Jest"],
    summary: "웹 콘텐츠를 위젯처럼 관리하는 Electron 데스크톱 앱",
    quest:
      "웹 콘텐츠를 데스크톱 위젯처럼 고정하고 키보드 중심으로 관리할 수 있는 크로스플랫폼 애플리케이션을 팀으로 개발했습니다.",
    challenges: [
      "위젯 플로팅과 등록·수정·삭제, 브라우저형 상호작용",
      "검색 창·전역 단축키·환경설정으로 이어지는 데스크톱 UX",
      "Windows·macOS 패키징, 단위 테스트와 릴리스 운영",
    ],
    result: "공개 릴리스와 커뮤니티 운영까지 이어진 Electron 데스크톱 제품",
    links: [{ label: "GITHUB · TEAM REPOSITORY", href: "https://github.com/AhKi/oh-my-desk" }],
  },
  {
    slug: "ahoy-keyboard",
    no: "08",
    title: "AHOYKEYBOARD",
    type: "WINDOWS SYSTEM UTILITY",
    scopes: ["PERSONAL"],
    availability: "PUBLIC",
    status: "PROTOTYPE · 2025",
    stack: ["C#", ".NET 9", "WPF", "Windows"],
    summary: "내장 키보드를 제어하는 Windows 트레이 유틸리티",
    quest:
      "외장 키보드를 사용할 때 노트북 내장 키보드를 빠르게 켜고 끌 수 있는 Windows 트레이 유틸리티를 만들었습니다.",
    challenges: [
      "관리자 권한이 필요한 키보드 장치 활성화·비활성화 흐름",
      "현재 장치 상태를 즉시 확인하는 WPF 인터페이스",
      "백그라운드 실행과 시스템 트레이 중심의 최소 조작 UX",
    ],
    result: "키보드 제어·상태 확인·트레이 동작을 갖춘 .NET 9 프로토타입",
    links: [{ label: "GITHUB", href: "https://github.com/seobaeksol/AhoyKeyboard" }],
  },
  {
    slug: "distributed-news-analytics",
    no: "09",
    title: "DISTRIBUTED NEWS ANALYTICS",
    type: "ACADEMIC DATA SYSTEM",
    scopes: ["RESEARCH"],
    availability: "ARCHIVED",
    status: "PRESENTED · 2017",
    stack: ["Hadoop", "Spark R", "AWS Lambda", "Alexa"],
    summary: "분산 뉴스 분석과 음성 질의를 연결한 연구 시스템",
    quest:
      "뉴스 데이터를 분산 처리해 사회연결망과 핵심 키워드를 분석하고, 결과를 음성 인터페이스로 조회하는 연구 흐름을 구축했습니다.",
    challenges: [
      "뉴스 수집·정형화와 PC 4대 Hadoop 분산 처리 환경",
      "Spark R 기반 중심성 분석과 사회연결망 시각화",
      "AWS Lambda와 Alexa를 연결한 뉴스 분석 결과 질의",
    ],
    result: "분산 뉴스 분석과 음성 인터페이스를 각각 학회 발표로 연결",
    links: [
      { label: "HADOOP ARCHIVE", href: "https://github.com/seobaeksol/superhot" },
      { label: "ALEXA ARCHIVE", href: "https://github.com/seobaeksol/super_hot_echo" },
      { label: "CRAWLER ARCHIVE", href: "https://github.com/seobaeksol/news_crawling" },
    ],
  },
  {
    slug: "smart-attendance",
    no: "10",
    title: "SMART ATTENDANCE",
    type: "IOT FULLSTACK SYSTEM",
    scopes: ["RESEARCH"],
    availability: "ARCHIVED",
    status: "BUILT · 2016",
    stack: ["AWS EC2", "MySQL", "REST API", "Raspberry Pi", "Android"],
    summary: "서버·단말기·앱을 연결한 자동 출결 프로토타입",
    quest:
      "스마트폰과 강의실 단말기, 서버를 연결해 학생 출결을 자동으로 확인하는 시스템을 설계하고 구현했습니다.",
    challenges: [
      "AWS EC2 웹 서버와 MySQL 기반 출결 데이터 모델",
      "학생·강의·출석 처리를 연결하는 REST API",
      "Raspberry Pi 강의실 단말기와 Android 학생용 앱 연동",
    ],
    result: "서버·하드웨어·모바일 앱을 관통하는 자동 출결 프로토타입",
  },
];

const currentWork = [
  {
    date: "2026.07",
    title: "차량 보안 검증 API와 장비 안전 게이트",
    copy: "SSH/SFTP·DLT 기반 수집과 판정, 파괴적 조작 승인·복구·증적 계약. C# 약 10.2K라인, public API inventory 538개.",
    metric: "64 DEVICE EVIDENCE PASSED",
  },
  {
    date: "2026.06",
    title: "Step·Check·Evidence 시험 실행 프레임워크",
    copy: "반복되던 원격 명령·수집·판정·기록을 실행 모델과 확장 registry로 표준화하고 4개 NuGet 패키지로 분리했습니다.",
    metric: "4 PACKAGES · 22 TESTS",
  },
  {
    date: "2026.04—05",
    title: "Automotive Ethernet 런타임",
    copy: "차량 Ethernet 네이티브 API를 typed 계층으로 추상화하고 fake driver와 수동 clock으로 하드웨어 비의존 검증 체계를 만들었습니다.",
    metric: "91 TEST DECLARATIONS",
  },
  {
    date: "2025.07—09",
    title: "제네릭 TCP 통신 라이브러리",
    copy: "fragmentation·stickiness를 다루는 framing 계층과 lifecycle, timeout, pooling을 갖춘 제네릭 client/server를 구현했습니다.",
    metric: "3 RELEASES · 118 TESTS",
  },
  {
    date: "2024.06—NOW",
    title: "현장 설비 통합 서비스 에이전트",
    copy: "이종 통신, OTA, 프로세스와 장치 수명주기를 .NET 서비스로 통합하고 실제와 동일한 Windows 가상 E2E 환경을 구축했습니다.",
    metric: "172 / 172 TESTS PASSED",
  },
];

const labItems = [
  { type: "AI R&D", title: "Repo Tutor", copy: "Repo Books 이전에 시도한 저장소 색인·학습 도구 실험", href: null, state: "PRIVATE" },
  { type: "FIRMWARE", title: "JC4880 Rust Labs", copy: "ESP-IDF Rust 빌드와 JC4880 보드 부팅·개발 환경 검증", href: "https://github.com/seobaeksol/jc4880-rust-labs", state: "OPEN ↗" },
  { type: "RUST UI", title: "GPUI Monitor", copy: "GPUI 컴포넌트와 CPU·메모리·디스크 시스템 지표 UI", href: "https://github.com/seobaeksol/gpui-studies", state: "OPEN ↗" },
  { type: "DRIVER", title: "XL Driver RS", copy: "Vector XL Driver FFI와 안전한 Rust wrapper 탐구", href: "https://github.com/seobaeksol/xl-driver-rs", state: "OPEN ↗" },
  { type: "OPEN SOURCE", title: "mdterm", copy: "재귀 Markdown picker와 fuzzy subsequence 검색 기여", href: "https://github.com/seobaeksol/mdterm/commit/c478b386047478dd9e8482ac5847c18c6fe9ce2e", state: "OPEN ↗" },
  { type: "KEYBOARD", title: "Lofree SpaceFn", copy: "VIA 레이아웃, 벤더 펌웨어 패치 도구와 복구 문서", href: "https://github.com/seobaeksol/lofree-flow-spacefn-layout", state: "OPEN ↗" },
] as const;

const skillGroups = [
  ["CORE", "C#", "Rust", "TypeScript", "Python", "C / C++"],
  ["PRODUCT", ".NET 8/9", "WPF", "WinUI 3", "GPUI", "Tauri"],
  ["CONNECT", "CAN", "Automotive Ethernet", "TCP", "SSH/SFTP", "Serial / Modbus"],
  ["VERIFY", "xUnit", "MSTest", "pytest", "Playwright", "Evidence design"],
  ["SYSTEM", "ESP-IDF", "RP2040", "ESP32-P4", "RISC-V", "Windows API"],
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">본문으로 이동</a>

      <header className="site-header">
        <a className="brand pixel" href="#top" aria-label="첫 화면으로 이동">
          <span className="brand-cursor" aria-hidden="true">◆</span> SUYOUNG.DEV
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#profile">PROFILE</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
          <a href="#lab">LAB</a>
        </nav>
        <a className="header-contact" href="#contact">CONTACT ↘</a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow pixel"><span className="status-dot" /> PLAYER 01 · READY FOR NEW QUESTS</p>
          <h1 id="hero-title">
            기술보다 문제에서<br />
            <span>출발합니다.</span>
          </h1>
          <p className="hero-lead">
            펌웨어, 애플리케이션, 웹과 시스템의 경계를 넘나들며<br className="hero-lead-break" />
            문제에 필요한 기술을 탐구하고 하나의 해법으로 연결합니다.
          </p>
          <p className="hero-range pixel" aria-label="개발 경험 분야">
            FIRMWARE <span>·</span> APPLICATION <span>·</span> WEB <span>·</span> TOOLS <span>·</span> AUTOMATION
          </p>
          <div className="hero-actions">
            <a className="pixel-button primary" href="#experience"><span aria-hidden="true">▶</span> EXPLORE MY WORK</a>
            <a className="pixel-button ghost" href="#contact">CONTACT ME ↗</a>
          </div>
        </div>

        <div className="hero-console" aria-label="김수영 개발자 상태 카드">
          <div className="console-bar"><span>PLAYER_PROFILE.DAT</span><span>● ● ●</span></div>
          <div className="avatar-stage">
            <div className="pixel-avatar" aria-hidden="true">
              <span className="avatar-hair" /><span className="avatar-face" />
              <span className="avatar-body" /><span className="avatar-screen" />
            </div>
            <span className="signal s1" aria-hidden="true" /><span className="signal s2" aria-hidden="true" />
          </div>
          <dl className="console-stats">
            <div><dt>NAME</dt><dd>KIM SUYOUNG</dd></div>
            <div><dt>CLASS</dt><dd>SOFTWARE ENGINEER</dd></div>
            <div><dt>RANGE</dt><dd>FIRMWARE → PRODUCT</dd></div>
            <div><dt>STATUS</dt><dd>OPEN TO NEW QUESTS</dd></div>
          </dl>
        </div>

        <a className="scroll-cue pixel" href="#profile">CONTINUE THE QUEST <span aria-hidden="true">↓</span></a>
      </section>

      <div id="content">
        <section className="section profile-section" id="profile" aria-labelledby="profile-title">
          <div className="section-kicker pixel"><span>01</span> PLAYER PROFILE</div>
          <div className="profile-layout">
            <div>
              <h2 id="profile-title">넓게 보고,<br />필요한 곳까지 깊이 들어갑니다.</h2>
              <p className="section-intro">
                펌웨어, 애플리케이션, 웹과 시스템을 직접 만들며 하나의 문제를 여러 계층에서 다뤄왔습니다.
                익숙한 기술에 문제를 맞추기보다 요구와 제약을 먼저 이해하고,
                필요한 기술을 탐구해 적합한 구조로 연결합니다.
              </p>
              <div className="profile-facts">
                <div><span className="fact-value">10+ YEARS</span><span className="fact-label">BUILDING SOFTWARE</span></div>
                <div><span className="fact-value">LOW ↔ HIGH</span><span className="fact-label">CROSS-LAYER EXPERIENCE</span></div>
                <div><span className="fact-value">172 / 172</span><span className="fact-label">LATEST TESTS PASSED</span></div>
              </div>
            </div>

            <div className="skill-window pixel-window">
              <div className="window-title pixel"><span>SKILL_INVENTORY</span><span>05 SLOTS</span></div>
              <div className="skill-groups">
                {skillGroups.map(([label, ...skills]) => (
                  <div className="skill-row" key={label}>
                    <span className="skill-label pixel">{label}</span>
                    <div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                  </div>
                ))}
              </div>
              <p className="window-note">기술의 개수보다, 문제를 해결하며 실제로 연결해 본 영역을 보여줍니다.</p>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-kicker pixel"><span>02</span> WORK EXPERIENCE</div>
          <div className="experience-layout">
            <div className="experience-aside">
              <p className="company-now pixel">CURRENT COMPANY</p>
              <h2 id="experience-title">FESCARO</h2>
              <p>SOFTWARE DEVELOPER<br />2023.10 — PRESENT</p>
              <div className="xp-badge"><span>DOMAIN</span><strong>AUTOMOTIVE<br />SECURITY</strong></div>
            </div>
            <div className="log-list">
              {currentWork.map((item) => (
                <article className="log-item" key={item.date}>
                  <time className="pixel">{item.date}</time>
                  <div><h3>{item.title}</h3><p>{item.copy}</p><span className="metric pixel">{item.metric}</span></div>
                </article>
              ))}
            </div>
          </div>

          <div className="career-archive">
            <article><time className="pixel">2021.03 — 12</time><h3>주식회사위노비앤티</h3><p>차량용품 견적·장착 중개 서비스의 인프라, 백엔드, 데이터베이스, 모바일 앱과 관리자 기능 전반을 담당했습니다.</p><span>FULLSTACK · APP DEVELOPER</span></article>
            <article><time className="pixel">2018.04 — 2020.08</time><h3>FESCARO · FIRST RUN</h3><p>SCMS PKI 인프라, CAN 기반 3D 도시 주행 시뮬레이터와 DoS·Replay 해킹 시뮬레이션을 개발했습니다.</p><span>FULLSTACK DEVELOPER</span></article>
            <article><time className="pixel">2016.03 — 2018.02</time><h3>JHRSOFT</h3><p>대학 관생 배정 시스템과 CMS·마일리지 시스템의 아키텍처, 데이터베이스와 풀스택 개발을 이끌었습니다.</p><span>FULLSTACK DEVELOPER</span></article>
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-kicker pixel"><span>03</span> SELECTED PROJECTS</div>
          <div className="section-heading-row">
            <h2 id="projects-title">퀘스트를 선택하세요.</h2>
            <p>외주·개인·팀·연구 프로젝트에서 맡은 문제와 도전, 결과를 구분해 기록했습니다.</p>
          </div>

          <fieldset className="project-quest-window">
            <legend className="sr-only">상세 내용을 확인할 프로젝트 선택</legend>
            {projects.map((project) => (
              <input
                aria-controls={`project-detail-${project.slug}`}
                className="project-choice"
                id={`quest-${project.slug}`}
                key={project.slug}
                name="selected-project"
                type="radio"
              />
            ))}
            <input
              aria-label="프로젝트 상세 닫기"
              className="project-dismiss-choice"
              id="quest-dismiss"
              name="selected-project"
              type="radio"
            />

            <div className="project-quest-layout">
              <div className="project-list" role="list" aria-label="프로젝트 퀘스트 목록">
                <div className="project-list-bar pixel"><span>QUEST_LOG.DAT</span><span>{projects.length} ENTRIES</span></div>
                {projects.map((project) => (
                  <label
                    className="project-option"
                    htmlFor={`quest-${project.slug}`}
                    id={`project-label-${project.slug}`}
                    key={project.slug}
                    role="listitem"
                  >
                    <span className="project-option-no pixel">{project.no}</span>
                    <span className="project-option-copy">
                      <strong>{project.title}</strong>
                      <span className="project-option-summary">{project.summary}</span>
                      <small className="pixel">{project.scopes.join(" · ")} · {project.status}</small>
                    </span>
                    <span className="project-option-state pixel">{project.availability}</span>
                    <i aria-hidden="true">›</i>
                  </label>
                ))}
              </div>

              <div className="project-detail-stage" aria-label="선택한 프로젝트 상세 내용">
                <label aria-label="프로젝트 상세 닫기" className="project-modal-backdrop" htmlFor="quest-dismiss" />
                <div className="project-empty">
                  <span className="project-empty-icon pixel" aria-hidden="true">◇</span>
                  <strong className="pixel">SELECT A QUEST</strong>
                  <p>왼쪽 목록에서 프로젝트를 선택하세요.</p>
                  <small className="pixel">↑ ↓ MOVE · SPACE SELECT</small>
                </div>

                {projects.map((project) => (
                  <article
                    aria-labelledby={`project-detail-title-${project.slug}`}
                    className="project-detail"
                    data-project={project.slug}
                    id={`project-detail-${project.slug}`}
                    key={project.slug}
                    role="dialog"
                  >
                    <label className="project-modal-close pixel" htmlFor="quest-dismiss">CLOSE <span aria-hidden="true">×</span></label>
                    <header className="project-detail-header">
                      <div className="project-detail-meta">
                        <span className="project-detail-no pixel">PROJECT {project.no}</span>
                        <span className="project-detail-status pixel"><i />{project.status}</span>
                      </div>
                      <div className="project-badges pixel">
                        {project.scopes.map((scope) => <span key={scope}>{scope}</span>)}
                        <span className={`availability ${project.availability.toLowerCase()}`}>{project.availability}</span>
                      </div>
                      <span className="project-detail-type pixel">{project.type}</span>
                      <h3 id={`project-detail-title-${project.slug}`}>{project.title}</h3>
                      <div className="project-stack-list">{project.stack.map((skill) => <span key={skill}>{skill}</span>)}</div>
                    </header>

                    <div className="project-detail-grid">
                      <div className="quest-copy"><span className="mini-label pixel">QUEST</span><p>{project.quest}</p></div>
                      <div className="challenge-list"><span className="mini-label pixel">CHALLENGES</span><ol>{project.challenges.map((item) => <li key={item}>{item}</li>)}</ol></div>
                      <div className="quest-result"><span className="mini-label pixel">RESULT</span><p>{project.result}</p></div>
                      <div className="project-link-row">
                        {project.links?.length ? project.links.map((link) => (
                          <a className="project-link pixel" href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>
                        )) : (
                          <span className="private-label pixel">■ {project.availability === "PRIVATE" ? "PRIVATE REPOSITORY" : "ARCHIVED · NO PUBLIC REPOSITORY"}</span>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </fieldset>
        </section>

        <section className="section lab-section" id="lab" aria-labelledby="lab-title">
          <div className="section-kicker pixel"><span>04</span> PIXEL LAB</div>
          <div className="section-heading-row">
            <h2 id="lab-title">작은 실험이<br />다음 도구가 됩니다.</h2>
            <p>오픈소스 기여, UI 실험, 드라이버, 분산 처리와 하드웨어까지. 완성도보다 탐구의 방향을 기록합니다.</p>
          </div>
          <div className="lab-grid">
            {labItems.map((item, index) => {
              const content = <><span className="lab-index pixel">SLOT 0{index + 1}</span><span className="lab-icon" aria-hidden="true">{[">_", "▥", "⚙", "▦", "⌘", "⌁"][index]}</span><span className="lab-type pixel">{item.type}</span><h3>{item.title}</h3><p>{item.copy}</p><span className="lab-open">{item.state}</span></>;
              return item.href ? <a className="lab-card" href={item.href} target="_blank" rel="noreferrer" key={item.title}>{content}</a> : <article className="lab-card" key={item.title}>{content}</article>;
            })}
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="quest-complete pixel">★ NEW QUESTS WELCOME ★</div>
          <h2 id="contact-title">다음에 함께 풀 문제를<br />들려주세요.</h2>
          <p>지금까지의 전문 분야는 출발점일 뿐입니다. 새로운 도메인과 역할에서 서로 다른 기술을 연결해 풀어야 할 문제가 있다면 이야기 나누고 싶습니다.</p>
          <div className="contact-actions">
            <a className="pixel-button primary" href="mailto:seobaeksol@gmail.com">EMAIL ME ↗</a>
            <a className="pixel-button ghost" href="https://github.com/seobaeksol" target="_blank" rel="noreferrer">GITHUB ↗</a>
            <a className="pixel-button ghost" href="/resume.md" download>RESUME ↓</a>
          </div>
          <dl className="contact-list">
            <div><dt>DEVELOPMENT</dt><dd><a href="mailto:seobaeksol@gmail.com">seobaeksol@gmail.com</a></dd></div>
            <div><dt>GENERAL</dt><dd><a href="mailto:suyoung154@gmail.com">suyoung154@gmail.com</a></dd></div>
            <div><dt>BLOG</dt><dd><a href="https://blog.naver.com/suyoung154" target="_blank" rel="noreferrer">blog.naver.com/suyoung154 ↗</a></dd></div>
          </dl>
        </section>
      </div>

      <footer>
        <span>© 2026 KIM SUYOUNG</span>
        <span className="pixel">BUILT WITH CURIOSITY + EVIDENCE</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
