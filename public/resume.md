# 김수영

- 공개 포트폴리오용 이력서에서는 전화번호를 제외했습니다. 연락은 이메일을 이용해 주세요.
- 이메일: [suyoung154@gmail.com](mailto:suyoung154@gmail.com) , [seobaeksol@gmail.com](mailto:seobaeksol@gmail.com) (개발 작업용)
- GitHub: [seobaeksol](https://github.com/seobaeksol) (현재 프로젝트)
- 블로그: [blog.naver.com/suyoung154](https://blog.naver.com/suyoung154)

## 소개

C#/.NET 기반 차량 통신·보안 시험 자동화와 현장 장비 운영 소프트웨어를 개발하고 있습니다. 차량·장비의 저수준 통신부터 안전한 시험 실행, 자동 판정, 증적 수집, Windows 애플리케이션과 배포까지 하나의 시스템으로 연결해 온 경험이 있습니다. Rust, TypeScript, Python을 활용한 임베디드 펌웨어, Windows 데스크톱 도구, AI 기반 개발 도구도 만들고 있으며, 풀스택 웹 개발과 자동차 보안·CAN 통신 프로젝트 경험을 보유하고 있습니다.

## 기술

- 주요 언어: C#, Rust, TypeScript, Python, C, C++
- .NET·데스크톱: .NET 8/9, WPF, Generic Host, WinUI 3, Tauri, Electron, GPUI
- 프론트엔드: React, Vite
- 백엔드·데이터: Node.js, Fastify, SQLite, MySQL, REST API
- 차량·장비 통신: CAN, Automotive Ethernet, TCP, WebSocket, HTTP, SSH/SFTP, Serial, Modbus
- 시험·보안: xUnit, MSTest, pytest, Playwright, 시나리오 자동화, fault injection, 증적 수집, 안전 게이트
- 임베디드·시스템: ESP-IDF, PlatformIO, RP2040, ESP32-P4, RISC-V, Raspberry Pi
- 인프라·데이터 처리: AWS EC2, AWS RDS, Apache Hadoop, Apache Spark, R
- 도구·라이브러리: pnpm, Crossterm, hidapi, Capstone, PowerShell, NuGet, Android
- 최근 GitHub 작업 기준 사용 언어:
  - Rust: `xl-driver-rs`, `mdterm`, `esp32-p4-example`, `gpui-studies`, `nimbus`
  - TypeScript: `repo-tutor`, `repo-books`
  - Python: `real-hx-firmware-tools`
- 기술 현황 업데이트: 2026-08-11

## 최근 대표 프로젝트

### Virozet 펌웨어 및 운영 도구 개발

- 기간: 2026
- 형태: 외주 개발
- 배경: 외주 의뢰를 받아 RP2040 기반 장치의 펌웨어와 장치 설정·진단용 데스크톱 도구를 개발했습니다.
- 역할: 펌웨어 구조화, 하드웨어 제어 로직, 통신 명령, 설정 저장, 운영자·개발자 도구 및 배포 흐름 개발
- 기술: C++, PlatformIO, RP2040, Arduino-Pico, Rust, Tauri, USB CDC, BLE UART, EEPROM
- 주요 작업:
  - 센서 입력, 모터 전·후진, DCDC, 오디오 이벤트, 오류 처리로 구성된 장치 상태 머신 구현
  - USB CDC와 BLE UART 명령 처리, EEPROM 기반 설정 저장, watchdog 복구 로직 개발
  - 기존 Arduino `.ino` 펌웨어를 PlatformIO 기반 C++ 모듈 구조로 전환하고 중복 상태와 초기화 결함 정리
  - 하나의 통합 펌웨어와 Basic 권한의 운영자 도구, 개발 명령을 해제하는 개발자 도구 구성
  - Rust/Tauri 기반 데스크톱 도구와 세션별 권한 제어, 펌웨어 버전·설정·진단 기능 개발
  - UF2 빌드 산출물 생성과 macOS 장치 배포 스크립트 구성
- 저장소: `virozet-clinic`, `virozet-home` (비공개)

### RE:AL HX 키보드 펌웨어 분석·수정 도구

- 기간: 2026
- 형태: 개인 프로젝트
- 배경: 사용 중인 키보드의 기본 키 동작이 마음에 들지 않아 원하는 키맵과 SpaceFn 동작을 적용하기 위해 시작했습니다.
- 역할: 제조사 펌웨어 추출·분석, USB OTA 프로토콜 처리, 키맵 패치, 실험 이미지 생성 및 실제 하드웨어 검증
- 기술: Python, hidapi, Capstone, USB HID, OTA, 바이너리 분석
- 주요 작업:
  - 제조사 업데이트 프로그램에서 펌웨어 이미지를 추출하고 이미지 구조와 HID OTA 조건 분석
  - USB HID 기반 펌웨어 조회·검증·업데이트 CLI 개발
  - 펌웨어 내부 키맵 테이블을 탐색하고 물리 키 위치 또는 키코드 단위로 수정하는 도구 구현
  - Right Shift를 Caps Lock으로 변경하는 패치와 SpaceFn 동작 검증용 바이너리 프로브 제작
  - 디스어셈블, jump table 및 Fn 조합 분석 명령을 구현하고 실제 키보드에서 탐색 레이어 동작 확인
- 저장소: `real-hx-firmware-tools` (비공개)

### Repo Books — AI 기반 저장소 기술서 생성 도구

- 기간: 2026
- 형태: 개인 프로젝트
- 배경: ESP32 저수준 펌웨어를 공부하면서 큰 저장소의 구조와 코드 흐름을 파악하기 어려워, GitHub 저장소를 한 권의 기술서처럼 변환하는 도구를 만들었습니다.
- 역할: 제품 기획, 저장소 색인·생성 파이프라인, 백엔드 API, 리더 UI, 로컬 상태와 테스트 구조 개발
- 기술: TypeScript, React, Vite, Fastify, SQLite, Zod, LM Studio SDK, pnpm, Playwright
- 주요 작업:
  - 저장소 checkout, 파일·문서 색인, 저장소 유형 분석과 근거 수집 과정 구현
  - 대단원·소단원 계획, chapter brief, section 생성, 수정, 책 전체 일관성 검사로 이어지는 다단계 생성 파이프라인 설계
  - 생성 품질이 기준을 통과하지 못한 챕터를 실패 상태와 artifact로 보존하고 선택적으로 재시도하는 구조 구현
  - queued/running 작업 polling, SSE 이벤트, 실패 챕터 재생성 등 장기 실행 작업 처리
  - 데스크톱 3열 리더, 모바일 TOC·튜터 화면, 사용자별 읽기 상태·테마·동기화 snapshot 구현
  - Fastify API, SQLite 저장소, 단위·API 테스트와 Playwright smoke test 구성
- 저장소: `repo-books` (비공개)

### Nimbus — 개발자용 Windows 파일 워크벤치

- 기간: 2026-현재
- 형태: 개인 프로젝트, 개발 중
- 개발 방식: **AI 코딩 에이전트를 적극 활용해 개발 중인 프로젝트입니다.** 구현 결과를 개인이 검토·시험하며 요구사항과 동작을 조정하는 방식으로 진행하고 있습니다.
- 배경: Windows 기본 파일 탐색기의 다중 폴더 작업과 대량 파일 처리 경험이 마음에 들지 않아 개발자 작업 흐름에 맞는 파일 도구를 만들기 시작했습니다.
- 기술: Rust 2024, GPUI, Windows API, serde, notify, walkdir, ZIP
- 주요 작업:
  - 하나에서 네 개까지 재귀적으로 분할할 수 있는 파일 패널, 패널별 탭·고정 탭·히스토리·정렬·필터·상태 복원 구현
  - 여러 위치의 파일을 임시로 모으는 Shelf와 복사·이동·ZIP·일괄 이름 변경 작업 구성
  - overwrite·skip·keep-both 충돌 사전 검사와 pause·resume·cancel·안전한 undo를 지원하는 순차 작업 큐 구현
  - 백그라운드 디렉터리 조회, 파일 감시, 재귀 검색, Git 읽기, 크기 계산 및 통계 처리
  - 이미지·텍스트 Quick Look, 명령 팔레트, Windows·PowerShell·WSL 경로 복사 및 Shell 연동 구현
  - `cargo fmt`, `cargo test`, `cargo clippy -D warnings` 자동 검증 통과
- 현재 상태:
  - 주요 구현은 `agent/nimbus-v1` 브랜치에 있으며 `main`에는 아직 병합하지 않았습니다.
  - release build와 Windows 수동 smoke test는 진행 중입니다.
- 저장소: [seobaeksol/nimbus — agent/nimbus-v1](https://github.com/seobaeksol/nimbus/tree/agent/nimbus-v1)

### ESP32-P4 저수준 Rust 펌웨어 샘플

- 기간: 2026
- 형태: 개인 학습 프로젝트
- 배경: ESP32-P4를 프레임워크 사용법만이 아니라 RISC-V 아키텍처, 부팅 흐름, 레지스터 수준부터 공부하기 위해 직접 작성했습니다.
- 역할: `no_std` 실행 환경, PAC 구성, 주변장치 레지스터 접근과 디버그 출력 구현
- 기술: Rust 2024, `no_std`, `no_main`, RISC-V, PAC, USB Serial/JTAG
- 주요 작업:
  - `riscv-rt` 기반 entry와 trap·interrupt hook을 구성하고 HAL 없이 동작하는 펌웨어 구조 작성
  - SVD 기반 PAC workspace를 구성하고 peripheral register block을 직접 사용
  - reset cause, TIMG watchdog, low-power watchdog, system timer 상태 조회와 제어 구현
  - UART0 및 USB Serial/JTAG 레지스터를 이용한 저수준 문자열 출력 구현
  - watchdog으로 인한 보드 재시작 문제를 분석하고 timer·watchdog 제어 코드를 모듈화
- 저장소: [seobaeksol/esp32-p4-example](https://github.com/seobaeksol/esp32-p4-example)

## 경력

### 주식회사페스카로 (FESCARO Co., Ltd.) — 소프트웨어 개발자

- 기간: 2023-10 ~ 재직 중 (재입사)
- 주요 분야: 차량·장비 통신, 보안 검증, 시험 자동화, Windows 현장 운영 소프트웨어
- 핵심 역할:
  - 저수준 통신과 원격 장비 제어부터 실행 안전성, 시나리오 자동화, 판정, 증적 보존, 패키징과 운영까지 연결되는 소프트웨어 설계·구현
  - C#/.NET 기반 비동기 통신과 장기 실행 서비스, Windows 데스크톱 애플리케이션, 실장비·가상 환경 검증 체계 개발
  - 고객사·장비·내부 정책과 인증정보는 공개하지 않고 프로젝트명을 역할 중심으로 일반화해 기재

#### 현장 설비 통합 서비스 에이전트

- 기간: 2024-06 ~ 현재
- 기술: C#/.NET 8, WPF, Generic Host, WebSocket, TCP, HTTP/FTP, SQLite, Serial, Modbus, Python, PyQt6, xUnit, pytest, PowerShell
- .NET 8 Generic Host와 `BackgroundService`를 기반으로 중앙 서버·사용자 인터페이스 컨트롤러·프로세스 관리자·하위 장치 간 연결 수명주기 구현
- WebSocket, TCP framing, HTTP/FTP, Serial, Modbus 등 이종 통신 경계를 통합하고 OTA·진단·로그·스케줄·설치·제거 기능 개발
- OTA의 실행 허용 조건, 단계별 결과, 전체 결과 집계, 최종 상태 단일 발행과 프로세스 전환 조건을 명시적인 계약으로 분리
- WPF 트레이 UI, 프로세스 관리자와 설치·제거 도구를 에이전트 런타임에 연결
- PyQt6 장치 시뮬레이터와 Windows headless 가상 E2E 환경을 구축해 정상 11종·장애 주입 10종 시나리오 검증
- 확인 가능한 성과: Git 커밋 282개, C# 약 22.6K라인, Python 시뮬레이터 약 1.4K라인, .NET 164개와 pytest 8개를 합한 자동 테스트 172/172 통과

#### Automotive Ethernet 런타임 및 검증 체계

- 기간: 2026-04 ~ 2026-05
- 기술: C#/.NET 9, async/await, `IAsyncEnumerable`, `IAsyncDisposable`, native driver interop, xUnit, fake adapter, WinUI 3, PowerShell, NuGet
- 차량 Ethernet 장비의 네이티브 API를 discovery, session, transport, packet, capture, diagnostics 계층의 typed API로 추상화
- network·segment·measurement point·virtual port 구성을 typed model로 변환하고 잘못된 binding, 누락 network와 중복 handle을 사전 검증
- 단건·burst·periodic 송신, link status, 다중 network, cancellation·shutdown과 bounded capture·조건 검색·PCAP export 구현
- Ethernet, ARP, IPv4, TCP, UDP, ICMP packet builder와 checksum·mutation 기능 구성
- fake driver와 수동 clock을 활용해 하드웨어 비의존 회귀 테스트를 설계하고 managed/native 자산을 포함한 NuGet 배포 계약 구성
- 확인 가능한 성과: HEAD 커밋 78개, 코어 C# 27개·테스트 C# 26개 파일, xUnit 테스트 선언 91개

#### 차량 보안 검증 API와 장비 안전 게이트

- 기간: 2026-07
- 기술: C#/.NET 9, SSH.NET, SSH/SFTP, DLT, xUnit, JSON/JSONL, Markdown/CSV evidence, reflection, PowerShell
- 원격 command·파일 조회·전송과 보안 alert·통계·정책·ruleset·packet dump·application log 수집을 공통 API로 표준화
- DLT parsing·filter·search와 alert·CPU·JSON·hash·retention·process 판정 구현
- root filesystem remount, process 제어, 시간 변경 등 파괴적 조작에 명시적 승인·사유·복구·cleanup과 증적 기록 적용
- reflection 기반 public API inventory에 검증 tier, mutation annotation과 baseline diff를 연결해 검증 누락을 식별
- 구현·로컬 검증·장비 smoke 필요·장비 검증 완료 상태를 분리해 실장비 검증 범위를 명확하게 관리
- 확인 가능한 성과: Git 커밋 33개, C# 소스 약 10.2K라인, public API inventory 538 endpoints, 저장된 장비 evidence 기준 read 43건·mutation 21건 통과

#### 제네릭 TCP 통신 라이브러리

- 기간: 2025-07 ~ 2025-09
- 기술: C#/.NET 9, TCP sockets, async/await, generics, reflection, `ArrayPool`, `CancellationToken`, MSTest, WPF
- TCP fragmentation과 stickiness를 처리하는 누적 buffer·packet extractor 기반 framing 계층을 제네릭 client/server에 통합
- attribute 기반 직렬화·역직렬화, STX/ETX와 사용자 정의 framing 전략, 연결·송수신 timeout과 도메인 예외 구현
- Stop·Restart·Dispose 및 연결별 cancellation 수명주기를 정리하고 `ArrayPool` 기반 I/O buffer 재사용과 최대 연결·패킷 크기 옵션 제공
- 통신·framing·restart·timeout·Dispose·성능 테스트 자산과 버전 태그·변경 이력·migration guide 구성
- 확인 가능한 성과: 현재 branch 커밋 53개 중 주 저자 identity 50개, C# 약 8.7K라인, 자동 테스트 선언 118개, 릴리스 태그 3개

#### Step·Check·Evidence 기반 시험 실행 프레임워크

- 기간: 2026-06
- 기술: C#/.NET 9, xUnit, `System.Text.Json`, dependency injection, SSH.NET, SSH/SFTP, PowerShell, NuGet
- 반복되던 원격 명령·파일 수집·판정·결과 기록을 Step·Check·Evidence 모델과 확장 registry로 표준화
- C# builder와 JSON 시나리오, Prepare·Stimulate·Control·Collect·Check·Cleanup 단계, 순차·offset·periodic 실행 구현
- timeout·retry·결과 집계와 occurrence 단위 evidence binding, Markdown/JSON 보고 기능 개발
- SSH/SFTP adapter를 Core와 분리하고 destructive step에 dry-run·승인 사유·credential 분리·strict host key·경로 이탈 방어 적용
- Core, SSH, 도메인 확장, Hosting으로 구성된 4개 NuGet 패키지와 migration 문서 작성
- 확인 가능한 성과: Git 커밋 12개, C# 약 5.8K라인, xUnit 테스트 선언 22개, 패키지 4개와 2.0.0 배포 기준선 구성

> 테스트 수는 저장된 실행 결과가 확인된 경우에만 “통과”로 표시했으며, 나머지는 소스에서 확인한 테스트 선언 수입니다. Git 이력이 집중된 프로젝트도 요구사항 정의, 리뷰, 외부 프로토콜·장비 공급자의 기여까지 개인 성과로 산정하지 않았습니다.

### 주식회사위노비앤티 — 풀스택·앱 개발자

- 기간: 2021-03 ~ 2021-12 (10개월)
- 프로젝트: 오토가이 차량용품 견적·장착 중개 서비스
- 역할: 서버 인프라 구축부터 백엔드·데이터베이스·모바일 앱·관리자 기능까지 서비스 개발 전반 담당
- 주요 개발 내용:
  - 차주와 장착점의 계정·역할을 분리하고 견적 요청, 장착점 응답, 취소, 진행 상태와 시공 완료로 이어지는 양면형 서비스 흐름 구현
  - 썬팅, 블랙박스, 내비게이션 매립, 후방카메라, 경보기와 기타 차량 액세서리별 견적 요청 폼 및 조건별·복수 선택 항목 개발
  - 사용자 위치와 장착점 주소를 활용한 지도 위치 선택, 거리 반경 기반 견적 요청 매칭과 장착점 지도 보기 기능 구현
  - 견적 요청서·견적서 수신, 이벤트 신청, 결제 완료 등을 위한 앱 알림·SMS 회원가입·안내 메시지 연동
  - 결제 수단 선택, 환불 규정 표시, 견적 상태·완료 내역 등 거래 과정의 앱 화면과 상태 처리 개발
  - SD 메모리카드 이벤트의 신청·예약·동의·취소·참여 내역과 장착점 알림 흐름 구현
  - 장착점·견적 요청 관리, 인앱 알림, 목록 수정과 페이지 이동 등 관리자 운영 기능 개발
  - iPhone 키보드·홈 바·팝업 크기와 날짜·시간 선택, 뒤로가기, 입력 검증 등 기기별 UI와 내비게이션 오류 개선
  - 장착점 연락처·주소·서비스 가입 상태와 썬팅·블랙박스·내비게이션 견적 데이터를 정리하고 운영 기능에 반영
- 분석 근거: `오토가이 수정사항.xlsx`의 2021년 완료 항목과 장착점·견적 데이터 시트를 기준으로 기능을 재구성했으며, 미완료 또는 보류로 표시된 항목은 성과에서 제외했습니다.

### 주식회사페스카로 (FESCARO Co., Ltd.) — 풀스택 개발자

- 기간: 2018-04 ~ 2020-08 (2년 5개월, 1차 재직)

#### SCMS PKI 인프라 개발

- 기간: 2019-06 ~ 2020-08
- PKI 인증 핵심 기술 구현
- SCMS PKI 인프라 구현
- 차량 데이터 검증 구조 구현
- 간이 SCMS PKI 인프라 구축

#### CAN 기반 3D 차량 도시 주행 시뮬레이터

- 기간: 2019-01 ~ 2019-05
- CAN 통신 기반 Unreal Engine API 개발
- 교통 시스템 및 차량 자율 주행 로직 개발
- CAN 통신 기반 3D 차량 주행 시뮬레이터 개발

#### CAN 해킹 시뮬레이션 개발

- 기간: 2018-05 ~ 2018-12
- C 기반 CAN 통신 장비 제어 기술 개발
- C/C# CAN 통신 장비를 이용한 DoS, Replay 등 해킹 기법 시뮬레이션 프로그램 개발
- CAN 로깅 및 분석 프로그램 개발

### JHRSOFT — 풀스택 개발자

- 기간: 2016-03 ~ 2018-02 (2년)
- 기술: AWS EC2, AWS RDS

#### 경상대학교 학생생활관 관생 배정 시스템

- 기간: 2018-01 ~ 2018-02
- 프로젝트 리더
- 초기 프레임워크 구축
- 전체 시스템 및 데이터베이스 설계
- 관생 우선순위 처리와 방 배정 프로세스를 포함한 백엔드 총괄
- 관리자 기숙사 관리 페이지와 학생 관실 지원 페이지 개발

#### KKUNGS 사내 CMS

- 기간: 2016-05 ~ 2016-07
- 시스템 설계 및 풀스택 개발
- AWS EC2 웹 서버와 AWS RDS 데이터베이스 구축
- 프로젝트 기본 프레임워크 구축
- 가맹점, 멤버십 회원, 상품, 반품, 한 줄 공지, 통계, SMS 연동, 이벤트 관리 기능 개발
- 통계 처리 SQL 작성

#### 경상대학교 창의적항공 IT 기계융합인재양성 사업단 마일리지 시스템

- 기간: 2016-03 ~ 2016-05
- 시스템 설계 및 풀스택 개발
- AWS EC2 웹 서버와 AWS RDS 데이터베이스 구축
- 프로젝트 기본 프레임워크 구축
- 마일리지 적립, 글로벌 인증 점수, 학생 참여 프로그램, 인적사항, 마일리지 관리 기능 개발
- SMS 전송과 팝업 시스템 개발
- 통계 처리 SQL 작성

## 기존 개인·연구 프로젝트

### 데스크톱 웹 위젯 플랫폼 oh-my-desk

- 기간: 2017
- 기술: Electron
- 설명: 웹 콘텐츠를 데스크톱 애플리케이션으로 전환하여 편리하게 사용하는 플랫폼
- 기획 및 개발
- Electron 개발 환경 구축
- 전체 시스템과 UI/UX 설계
- 위젯 플로팅, 등록·수정·삭제, 상호작용 기능 개발
- 저장소: [AhKi/oh-my-desk](https://github.com/AhKi/oh-my-desk)

### 하둡 기반 뉴스 사회망 분석 시스템

- 기간: 2017
- 기술: Apache Hadoop, Apache Spark, R
- 설명: 뉴스 데이터를 NLA를 거쳐 정형화한 뒤 사회연결망 분석을 수행하고 중심성 값에 따라 논제를 분석한 시스템
- 연구 설계 및 개발
- PC 4대로 Hadoop 분산 처리 환경 구축
- 뉴스 사이트 크롤링
- Spark R을 이용한 사회연결망 분석과 시각화
- 한국지능정보시스템학회 발표

### 하둡 기반 실시간 뉴스 키워드 분석

- 기간: 2017
- 기술: Apache Hadoop, AWS Lambda, Amazon Developer Kit
- 설명: 인공지능 개인비서 Alexa를 통해 분산 처리 기반 뉴스 분석 결과를 알려주는 기능 개발
- 연구 설계 및 개발
- AWS Lambda 기반 시스템 구현
- 뉴스 사이트 크롤링
- Amazon Developer Kit을 활용한 Echo Dot 인터페이스 구축
- 대한전자공학회 하계학술대회 발표

### Bluetooth 기반 API 스마트 출결 시스템

- 기간: 2016
- 기술: AWS EC2, MySQL, REST API, Raspberry Pi, Android
- 설명: 스마트폰, 강의실 단말기, 서버로 구성된 학생 자동 출결 시스템
- 시스템 설계 및 개발
- AWS EC2 웹 서버와 MySQL 서버 구축
- 출결 처리 기능을 RESTful API로 구현
- Raspberry Pi 기반 강의실 출결 확인 단말기 구축
- 학생용 Android 출석 앱 개발

### Raspberry Pi LED 음원 비주얼라이제이션 패널

- 기간: 2015
- 기술: Raspberry Pi
- 설명: 음원 파일을 분석하여 Raspberry Pi로 음원을 출력하고 시각화 결과를 LED로 표현
- 시스템 설계 및 개발
- 음원 분석 모듈 개발
- LED 제어 모듈 개발

## 기타 작업 사항

### mdterm 오픈소스 기여

- 직접 개발한 프로젝트가 아니라 기존 Rust 기반 터미널 Markdown 뷰어에 기여했습니다.
- 현재 디렉터리 또는 지정한 디렉터리에서 Markdown 파일을 재귀적으로 탐색하는 파일 picker 구현
- 경로에 대한 fuzzy subsequence 검색, 키보드 탐색, 새로고침과 파일 열기 흐름 추가
- 관련 커밋: [Add searchable markdown file picker](https://github.com/seobaeksol/mdterm/commit/c478b386047478dd9e8482ac5847c18c6fe9ce2e)

### GPUI 학습 및 시스템 모니터

- `gpui-studies` Cargo workspace에서 GPUI 컴포넌트와 상호작용 방식 학습
- CPU·메모리 시계열, 프로세스 목록, 디스크·배터리 정보를 표시하는 시스템 모니터 구현
- 프로세스 CPU·메모리 정렬과 주기적 데이터 갱신 처리
- 저장소: [seobaeksol/gpui-studies](https://github.com/seobaeksol/gpui-studies)

### JC4880·ESP-IDF Rust 조사

- `JC4880P443C_I_W` 관련 개발 문서와 부팅·메모리·주변장치 참고 자료 정리
- `jc4880-rust-labs`에서 `esp-idf-sys` 기반 Rust 펌웨어 빌드와 부팅 환경 구성
- 현재는 부팅 확인과 개발 환경 검증 단계이므로 독립 완성 프로젝트가 아닌 저수준 펌웨어 학습 작업으로 분류

### Vector XL Driver Rust 작업

- `xl-driver-rs` workspace에서 시스템 바인딩 crate와 Rust wrapper crate 구조 구성
- Vector XL Driver를 Rust에서 사용하기 위한 저수준 연동 방식 탐구
- 저장소: [seobaeksol/xl-driver-rs](https://github.com/seobaeksol/xl-driver-rs)

### 저장소 학습 도구 실험

- `repo-tutor`에서 TypeScript·pnpm monorepo 기반 서버·웹 구조와 저장소 학습 도구를 실험
- 이후 저장소 전체를 기술서로 변환하는 `repo-books` 프로젝트로 확장

## 교육

### 연암공과대학교

- 기간: 2013-03 ~ 2018-03
- 전공: 스마트소프트웨어
- 학위: 학사
- 학점: 4.02 / 4.31

## 외국어

- 영어: TOEIC 885
