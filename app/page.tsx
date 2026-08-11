const projects = [
  {
    no: "01",
    title: "VIROZET",
    type: "FIRMWARE + DESKTOP",
    status: "DELIVERED · 2026",
    stack: ["C++", "RP2040", "Rust", "Tauri"],
    quest:
      "RP2040 장치의 펌웨어부터 설정·진단용 데스크톱 도구, 현장 배포 흐름까지 하나의 운영 체계로 연결했습니다.",
    challenges: [
      "센서·모터·DCDC·오디오를 제어하는 장치 상태 머신",
      "USB CDC·BLE UART 명령과 EEPROM 설정 저장",
      "운영자/개발자 권한을 분리한 Rust·Tauri 도구",
    ],
    result: "통합 펌웨어, 두 권한 수준의 운영 도구, UF2 배포 산출물",
    private: true,
  },
  {
    no: "02",
    title: "RE:AL HX TOOLS",
    type: "FIRMWARE RESEARCH",
    status: "VERIFIED · 2026",
    stack: ["Python", "HID", "Capstone", "Binary"],
    quest:
      "키보드의 동작을 직접 바꾸기 위해 제조사 펌웨어와 USB OTA 프로토콜을 분석하고 안전한 패치 도구를 만들었습니다.",
    challenges: [
      "펌웨어 이미지 구조와 HID OTA 조건 분석",
      "물리 키 위치·키코드 단위 키맵 패치",
      "실제 하드웨어에서 SpaceFn 탐색 레이어 검증",
    ],
    result: "조회·검증·업데이트 CLI와 반복 가능한 바이너리 분석 흐름",
    private: true,
  },
  {
    no: "03",
    title: "REPO BOOKS",
    type: "AI DEVELOPER TOOL",
    status: "BUILT · 2026",
    stack: ["TypeScript", "React", "Fastify", "SQLite"],
    quest:
      "큰 GitHub 저장소를 구조와 코드 흐름을 따라 읽을 수 있는 한 권의 기술서로 변환하는 도구를 설계했습니다.",
    challenges: [
      "근거 수집부터 챕터 생성까지 이어지는 다단계 파이프라인",
      "장기 실행 작업·실패 artifact·선택 재시도",
      "데스크톱 3열 리더와 모바일 TOC·튜터 UI",
    ],
    result: "생성 품질과 실패 상태를 숨기지 않는 저장소 학습 워크플로",
    private: true,
  },
  {
    no: "04",
    title: "NIMBUS",
    type: "WINDOWS FILE WORKBENCH",
    status: "IN PROGRESS · 2026—",
    stack: ["Rust", "GPUI", "Windows API", "ZIP"],
    quest:
      "다중 폴더 탐색과 대량 파일 작업을 개발자 흐름에 맞게 재설계한 Windows 파일 워크벤치를 개발하고 있습니다.",
    challenges: [
      "1—4개 재귀 분할 패널과 패널별 탭·히스토리",
      "충돌 사전 검사와 pause·resume·cancel·undo 작업 큐",
      "Quick Look·명령 팔레트·PowerShell/WSL 연동",
    ],
    result: "fmt·test·clippy -D warnings 자동 검증 통과",
    href: "https://github.com/seobaeksol/nimbus/tree/agent/nimbus-v1",
  },
  {
    no: "05",
    title: "ESP32-P4 BARE METAL",
    type: "LOW-LEVEL RUST",
    status: "LAB COMPLETE · 2026",
    stack: ["Rust", "no_std", "RISC-V", "PAC"],
    quest:
      "ESP32-P4의 부팅 흐름과 주변장치를 프레임워크 아래가 아닌 레지스터 수준에서 이해하기 위한 샘플을 작성했습니다.",
    challenges: [
      "riscv-rt entry와 trap·interrupt hook",
      "SVD 기반 PAC와 watchdog·system timer 제어",
      "UART0·USB Serial/JTAG 저수준 문자열 출력",
    ],
    result: "HAL 없이 부팅·출력·watchdog 제어가 가능한 모듈형 펌웨어",
    href: "https://github.com/seobaeksol/esp32-p4-example",
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
  ["OPEN SOURCE", "mdterm", "재귀 Markdown picker와 fuzzy subsequence 검색", "https://github.com/seobaeksol/mdterm/commit/c478b386047478dd9e8482ac5847c18c6fe9ce2e"],
  ["RUST UI", "GPUI Monitor", "CPU·메모리 시계열과 프로세스·디스크·배터리 모니터", "https://github.com/seobaeksol/gpui-studies"],
  ["DRIVER", "XL Driver RS", "Vector XL Driver용 system binding과 Rust wrapper", "https://github.com/seobaeksol/xl-driver-rs"],
  ["DESKTOP", "oh-my-desk", "웹 콘텐츠를 데스크톱 위젯으로 만드는 Electron 플랫폼", "https://github.com/AhKi/oh-my-desk"],
  ["DISTRIBUTED", "News Graph", "Hadoop·Spark R 기반 뉴스 사회망 분석과 시각화", null],
  ["HARDWARE", "Smart Attendance", "Raspberry Pi·Android·REST API 기반 자동 출결", null],
] as const;

const skillGroups = [
  ["CORE", "C#", "Rust", "TypeScript", "Python", "C / C++"],
  ["DESKTOP", ".NET 8/9", "WPF", "WinUI 3", "GPUI", "Tauri"],
  ["COMM", "CAN", "Automotive Ethernet", "TCP", "SSH/SFTP", "Serial / Modbus"],
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
          <p className="eyebrow pixel"><span className="status-dot" /> PLAYER 01 · ONLINE</p>
          <h1 id="hero-title">
            시스템을 이해하고,<br />
            <span>끝까지 작동하게 만듭니다.</span>
          </h1>
          <p className="hero-lead">
            차량과 장비의 저수준 통신부터 안전한 시험 실행, 자동 판정, 증적 수집,
            Windows 애플리케이션과 배포까지 하나의 시스템으로 연결하는 소프트웨어 엔지니어입니다.
          </p>
          <div className="hero-actions">
            <a className="pixel-button primary" href="#experience"><span aria-hidden="true">▶</span> VIEW EXPERIENCE</a>
            <a className="pixel-button ghost" href="https://github.com/seobaeksol" target="_blank" rel="noreferrer">GITHUB ↗</a>
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
            <div><dt>FOCUS</dt><dd>SYSTEMS / TOOLS / AUTO</dd></div>
            <div><dt>BASE</dt><dd>GYEONGNAM, KR</dd></div>
          </dl>
        </div>

        <a className="scroll-cue pixel" href="#profile">SCROLL TO PLAY <span aria-hidden="true">↓</span></a>
      </section>

      <div id="content">
        <section className="section profile-section" id="profile" aria-labelledby="profile-title">
          <div className="section-kicker pixel"><span>01</span> PLAYER PROFILE</div>
          <div className="profile-layout">
            <div>
              <h2 id="profile-title">복잡한 경계를<br />명시적인 구조로.</h2>
              <p className="section-intro">
                C#/.NET 기반 차량 통신·보안 시험 자동화와 현장 장비 운영 소프트웨어를 개발합니다.
                실장비의 제약, 비동기 통신, 실패와 복구, 자동 검증을 제품의 한 흐름으로 다루는 데 집중합니다.
              </p>
              <div className="profile-facts">
                <div><span className="fact-value">10+ YRS</span><span className="fact-label">BUILDING SOFTWARE</span></div>
                <div><span className="fact-value">172/172</span><span className="fact-label">LATEST E2E + UNIT TESTS</span></div>
                <div><span className="fact-value">LOW ↔ HIGH</span><span className="fact-label">FIRMWARE TO PRODUCT</span></div>
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
              <p className="window-note">숙련도 수치 대신, 실제로 연결해 본 기술의 경계를 표시합니다.</p>
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
          <div className="section-kicker pixel"><span>03</span> PERSONAL PROJECTS</div>
          <div className="section-heading-row">
            <h2 id="projects-title">개인 프로젝트를 선택하세요.</h2>
            <p>카드를 열면 Quest / Challenge / Result 기록을 확인할 수 있습니다.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <details className="project-card" key={project.no}>
                <summary>
                  <span className="project-no pixel">PROJECT {project.no}</span>
                  <span className="project-status"><i />{project.status}</span>
                  <span className="project-glyph" aria-hidden="true">{project.no === "01" ? "▦" : project.no === "02" ? "⌨" : project.no === "03" ? "▤" : project.no === "04" ? "▣" : "◆"}</span>
                  <span className="project-type pixel">{project.type}</span>
                  <span className="project-title">{project.title}</span>
                  <span className="project-stack">{project.stack.join(" · ")}</span>
                  <span className="open-label pixel"><b className="closed">OPEN QUEST</b><b className="opened">CLOSE QUEST</b><i>+</i></span>
                </summary>
                <div className="quest-panel">
                  <div className="quest-copy"><span className="mini-label pixel">QUEST</span><p>{project.quest}</p></div>
                  <div><span className="mini-label pixel">CHALLENGES</span><ol>{project.challenges.map((item) => <li key={item}>{item}</li>)}</ol></div>
                  <div className="quest-result"><span className="mini-label pixel">RESULT</span><p>{project.result}</p></div>
                  {project.href ? (
                    <a className="project-link pixel" href={project.href} target="_blank" rel="noreferrer">VIEW REPOSITORY ↗</a>
                  ) : (
                    <span className="private-label pixel">■ PRIVATE REPOSITORY</span>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="section lab-section" id="lab" aria-labelledby="lab-title">
          <div className="section-kicker pixel"><span>04</span> PIXEL LAB</div>
          <div className="section-heading-row">
            <h2 id="lab-title">작은 실험이<br />다음 도구가 됩니다.</h2>
            <p>오픈소스 기여, UI 실험, 드라이버, 분산 처리와 하드웨어까지. 완성도보다 탐구의 방향을 기록합니다.</p>
          </div>
          <div className="lab-grid">
            {labItems.map(([type, title, copy, href], index) => {
              const content = <><span className="lab-index pixel">SLOT 0{index + 1}</span><span className="lab-icon" aria-hidden="true">{[">_", "▥", "⚙", "▦", "⌘", "⌁"][index]}</span><span className="lab-type pixel">{type}</span><h3>{title}</h3><p>{copy}</p><span className="lab-open">{href ? "OPEN ↗" : "ARCHIVED"}</span></>;
              return href ? <a className="lab-card" href={href} target="_blank" rel="noreferrer" key={title}>{content}</a> : <article className="lab-card" key={title}>{content}</article>;
            })}
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="quest-complete pixel">★ QUEST COMPLETE ★</div>
          <h2 id="contact-title">함께 풀 문제를<br />들려주세요.</h2>
          <p>장비와 소프트웨어 사이, 반복되는 시험과 운영 사이에 더 나은 구조가 필요하다면 이야기 나누고 싶습니다.</p>
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
