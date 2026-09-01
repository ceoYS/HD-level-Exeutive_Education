# HDEC AI BUILD — Content Architecture V1

이 문서는 Executive Content V1의 편집 구조를 정의합니다. 다섯 권(Book 01–05)이 하나의
학습 여정으로 이어지도록, 각 Book의 목표 · 습득 역량 · 챕터 · 핵심 개념 · HDEC 예시 ·
실습 · 기대 결과를 명시합니다.

핵심 논지(전체 관통):

> 실장은 이미 가장 어려운 자산(현장의 판단과 조직의 암묵지)을 갖고 있다.
> AI는 그 암묵지와 "작동하는 도구" 사이의 거리를 줄인다.
> 실장은 프로그래머가 될 필요가 없다. AI에게 정확히 지시하고 결과를 판단할 언어만 있으면 된다.

편집 리듬(모든 Book 공통):

CONCEPT → WHY IT MATTERS → REAL EXAMPLE → SOMETHING I CAN SAY → WHAT TO WATCH FOR

여섯 개의 질문(WHAT · WHY · WHEN · EXAMPLE · SAY THIS · WATCH OUT) 중 각 주요 챕터는
최소 4개에 답한다. 라벨을 기계적으로 반복하지 않고 편집적으로 변주한다.

---

## 콘텐츠 파일 구조

```text
src/content/
├── books.ts                # 다섯 권 메타데이터, 상태, accent + JOB 기준 ToolMap 데이터
├── book02-instruct.ts      # Book 02 챕터 데이터(업무지시 6요소, 피드백 언어, 단계별 프롬프트)
├── book03-choose.ts        # Book 03 솔루션 타입, 시작 방식, 난이도 매트릭스
├── book04-build.ts         # Book 04 8주 캔버스(주차별 목표·할 일·산출물·자기인증)
└── book05-practice.ts      # Book 05 6개 미션 데이터
```

Book 01은 기존 승인된 편집 구성을 보존하기 위해 본문을 페이지 컴포넌트(`BookPage.tsx`)에
그대로 두고 심화했다(ToolMap·BuildMap 등 공용 데이터만 `books.ts`/컴포넌트에 분리). Books
02–05는 사실 콘텐츠(프롬프트·예시·문항·산출물)를 콘텐츠 파일로 분리하고, 편집 레이아웃은 각
페이지에서 고유하게 구성한다(단일 JSON 스키마로 강제하지 않는다).

페이지: `src/pages/BookPage.tsx`(Book 01), `Book02Page.tsx` … `Book05Page.tsx`.

---

## 재사용 편집 컴포넌트

| 컴포넌트 | 역할 | 주 사용처 |
| --- | --- | --- |
| `ExecutiveTakeaway` | "실장 관점" 한 줄 결론 | 전 권 |
| `WatchOut` | 흔한 실수·한계 경고 | 전 권 |
| `RealWorldExample` | HDEC 현장 시나리오 + 프롬프트 | 전 권 |
| `TryThisPrompt` | "이렇게 말해보세요" 복사 가능한 지시문 | 01–03 |
| `PromptProgression` | BAD → BETTER → ADVANCED 프롬프트 진화 | 01–03 |
| `SourceNote` | `UPDATED · 2026.09` 접이식 출처 노트 | 시간민감 섹션 |
| `CapabilityCheck` | 자기인증 체크(문장+증빙+ACE 확인, localStorage) | 04, 01 마무리 |
| `WeekCanvas` | 8주 주차 캔버스(목표·산출물·자기인증) | 04 |
| `DecisionDiagnostic` | 솔루션 타입 진단(인터랙티브) | 03 |
| `SecurityGate` | 사내 데이터·보안 경계 콜아웃 | 01·03·04 |
| `Mission` | 실습 미션 카드 | 05 |

기존 자산 유지·재사용: `SectionIntro`, `PromptBlock`, `ScreenshotPlaceholder`, `Reveal`,
`ToolMap`, `SystemDiagram`, `HarnessDiagram`, `BuildMap`.

---

## BOOK 01 — UNDERSTAND · AI로 무언가를 만드는 전체 지도

- **목표**: AI와 IT의 최소 개념을 하나의 연결된 제작 흐름으로 이해한다.
- **습득 역량**: 디지털 제품이 무엇으로·어떤 순서로 만들어지는지 설명하고, 제작 순서를 지시할 수 있다.
- **하드 자산 논지**: 코딩 지식이 아니라 "무엇이 어떻게 연결되는가"의 언어.

### 챕터 (기존 8장 심화, 서사 유지)
1. **AI는 어디까지 할 수 있는가** — LLM, model vs AI product, prompt, context, multimodal, tool use, 생성 vs 사실확실성. "AI가 잘한다고 맞다는 뜻은 아니다"(hallucination) 섹션.
2. **AI마다 역할이 다르다** — JOB 기준 툴맵: THINK · RESEARCH · KNOWLEDGE · CREATE · BUILD · AUTOMATE · AGENT. "도구 선택은 임시, 워크플로 사고는 지속."
3. **프로그램은 무엇으로 이루어지는가** — FE/BE/DB/API/Auth/Deploy + **Prototype vs Production** + 순서 지시 프롬프트.
4. **AI로 화면부터 만든다** — 문제→요구사항 대화→레퍼런스→UI/UX 프로토타입→프론트엔드. 프로토타입 리뷰 체크리스트(실장 전문성이 빛나는 지점).
5. **Reference-driven Build** — 3계층(Visual/Interaction/Information-architecture), CAPTURE→ANALYZE→EXTRACT→REINTERPRET→BUILD, 4단계 프롬프트 체인, reference ≠ copy.
6. **화면 뒤에 실제 기능을 연결한다** — DISPLAY vs STORE/RETRIEVE, BE/DB/API/Auth 하나의 예시, 내부 통합(M365/SharePoint/Teams는 승인 필요 예시), **SECURITY 콜아웃**.
7. **한 번의 프롬프트에서 프로젝트 시스템으로** — Chat/Project/Repository/CLAUDE.md·AGENTS.md/MCP/Skills/Tests/Permissions/Harness. "좋은 Prompt vs 좋은 Harness." Git/GitHub 임원 수준 설명.
8. **The AI Build Map** — **결정 게이트** 포함 마스터 지도: `[USEFUL?]`, `[APPROVED DATA / SECURITY?]`. 반복은 정상.

- **핵심 HDEC 예시**: 프로젝트 포트폴리오 대시보드, 현장 리스크 요약, 경영회의 Action Tracker, 신규 사업 기초검토.
- **실습(경량)**: 각 장 끝 성찰 프롬프트 + 마무리 CapabilityCheck. 본격 실습은 Book 05.
- **기대 결과**: 실장이 "Frontend부터 만들어 / 현재 UI 유지하고 Backend 연결 / Database 구조부터 정의 / 먼저 구현계획 작성 후 진행" 같은 지시를 스스로 말할 수 있다.

---

## BOOK 02 — INSTRUCT · AI에게 일을 시키는 방법

- **목표**: 통제 가능한 결과를 만드는 지시·맥락·피드백의 언어를 익힌다.
- **습득 역량**: 구조화된 업무지시, 맥락 제공, 캡처 기반 질문, 반복 수정.

### 챕터
1. **좋은 프롬프트보다 좋은 업무지시** — 목적·배경·입력·원하는 결과·제약·판단기준(전부 매번 필요하진 않음). 약한 vs 강한 지시.
2. **AI가 모르면 맥락을 준다** — context/파일/기존 문서/예시/제약/대상 독자. "이 보고서는 CEO가 3분 안에 핵심을 이해해야 한다."
3. **모르면 캡처해서 물어본다** — 스크린샷→첨부→목표→막힌 지점→**한 단계만** 요청. 기억에 남는 초보 프롬프트.
4. **나온 결과를 고친다** — 피드백 언어("전체 다시 만들지 마 / 이 부분은 유지 / 이것만 수정 / 변경 전후 먼저 설명 / 승인 전 삭제 금지"). 의도 보존.
5. **AI에게 디자인을 시킨다** — user/goal/정보 위계/원하는 행동/레퍼런스/제약. Claude Design류 프롬프트.
6. **AI에게 개발을 시킨다** — 단계별: inspect → plan → implement → verify → report.
7. **오류가 나면 AI와 같이 해결한다** — 스크린샷 + **정확한 오류 텍스트**. 기대/실제/화면/오류/직전 행동.
8. **긴 프로젝트에서 AI를 관리한다** — CLAUDE.md·AGENTS.md/체크포인트/범위/"바꾸지 마"/테스트/핸드오프/커밋 규율. 명령어 암기 아님.

- **핵심 HDEC 예시**: 주간 현황 취합 지시, 경영회의 보고 초안, 설계변경 이슈 정리.
- **실습**: 약한→강한 지시 재작성, 3회 이상 수정 지시.
- **기대 결과**: 실장이 멀티스텝 작업을 지시하고 결과를 반복 교정할 수 있다.

---

## BOOK 03 — CHOOSE · 무엇을 만들 것인가

- **목표**: 업무 문제에 맞는 제품 형태와 시작 방식을 선택해, 잘못된 것을 만들지 않는다.
- **습득 역량**: 문제를 솔루션 타입으로 분류하고 첫 실험을 정한다.

### Part A — WHAT TO BUILD
- **Custom AI** (GPT/Gem/Project ≠ 자율 Agent): 대화 중심·반복 지시·지식 모음.
- **Web / App**: 전용 화면·데이터 표시/입력·반복 사용.
- **Workflow Automation**: 명확한 트리거·반복 단계·예측 가능한 결과.
- **Agent**: 목표는 알지만 경로가 고정 아님·AI가 다음 행동 판단·여러 도구/데이터. 복잡성(권한·관측·오류·비용·루프·사람 승인) 명시.

### Part B — HOW TO START
- Blank / Reference-driven / Existing-workflow(주간 Excel+Email+PPT 업무를 그대로 보여주고 매핑).

### 인터랙티브
- **DecisionDiagnostic**: 화면 필요? 반복? 대화 핵심? 고정 순서? AI 자율 판단? 사내 데이터? 다수 사용자? → 예상 타입 + 이유 + 난이도 + 첫 실험.
- **난이도/리스크 매트릭스**: LOW(Custom AI) · MEDIUM(Web/App·Automation) · HIGH(Agent·다수 엔터프라이즈 통합). 과도한 정밀도 지양.

- **기대 결과**: 실장이 자기 문제를 타입으로 분류하고 첫 실험을 말한다.

---

## BOOK 04 — BUILD · 실장 × ACE AI BUILD (8주 워크북)

- **목표**: 8주 동안 하나의 실제 업무 문제를 작동하는 도구로 전환한다.
- **원칙**: 실장이 문제·결정·우선순위·판단을 소유. ACE는 코치·구조화·언블록·구현 지원. ACE가 조용히 전부 만들지 않는다.
- **성격**: 읽는 책이 아니라 실제로 사용하는 워크북.

### 주차 (각 주 = WeekCanvas + 산출물 + 자기인증 CapabilityCheck)
1. **PROBLEM** — 문제 정의 → Problem Brief.
2. **OUTCOME** — user/결과/입력/출력/성공기준/non-goal → One-page Product Intent.
3. **CHOOSE** — 타입 + 시작 방식 + 레퍼런스 → Solution Direction.
4. **PROTOTYPE** — 첫 가시 버전(Dummy Data). 실장이 직접 사용·문제 지적·수정 1건 요청 → V0.1.
5. **BUILD** — 핵심 워크플로 구현, 실장이 우선순위 결정 → V0.2.
6. **CONNECT** — 실제 데이터/통합 필요 판단 + 보안/승인 체크 → 연결 프로토타입 또는 통합 계획서.
7. **PILOT** — 실제 업무에서 사용, 작동/실패/혼란/제거 대상 기록 → Pilot Notes + V0.9.
8. **DEMO** — 문제·타입 선택 이유·AI 사용법·본인 기여·업무 변화·한계·다음 행동 → Working Demo + 3분 스토리 + 최종 자기인증.

- **자기인증 설계**: 지식 퀴즈 아님. "**나는 지금 이것을 직접 할 수 있다.**" 체크 + 증빙(스크린샷/링크) + 선택적 ACE 확인. 실패를 모욕적으로 표현하지 않음.
- **기대 결과**: 작동하는 데모 + 3분 스토리 + 인증된 역량.

---

## BOOK 05 — PRACTICE · 직접 만들어보기 (6개 미션)

- **목표**: 작고 쉬운 실습으로 직접 지시·판단·수정한다. 휴대폰/태블릿에서도 따라갈 수 있게.
- **미션**
  1. **AI에게 내 업무 설명하기** — 막연한 생각 → 구조화된 문제 진술.
  2. **캡처해서 도움받기** — 스크린샷 → 한 단계 안내.
  3. **나만의 Custom AI 만들기** — 현재 지원되는 한 예시로 개념 학습(제품 UI 바뀌어도 대체 가능, 스크린샷 플레이스홀더).
  4. **내 첫 웹 화면 만들기** — 쉬운 현재 빌더(AI Studio/Manus 등 검증된 옵션), 합성 데이터로 시작, 화면에 무언가 작동하는 것 보기.
  5. **좋은 앱을 보고 내 업무용으로 재구성하기** — Reference-driven Build 미니 실습.
  6. **AI에게 수정시키기** — 최소 3회 수정. 교훈: 첫 출력은 최종 출력이 아니다.

- **기대 결과**: 실장이 직접 지시·캡처·생성·재구성·수정을 경험했다.

---

## HDEC 시나리오 정책 (전 권 공통)

현실적이지만 **일반적인** 건설·엔지니어링 시나리오만 사용한다. 현대건설 기밀 사실을 지어내지
않는다. 합성 예시는 라벨링한다. 안전 예시: 프로젝트 포트폴리오 현황, 설계변경 이슈, 경영회의
Action Item, 신규 사업 기초검토, 프로젝트 리스크 요약, 보고자료 초안, Lessons Learned 검색,
주간 현황 취합. 실제 사내 통합이 존재한다고 암시하지 않는다.

## 보안/엔터프라이즈 위생 (전 권 공통)

공개/합성 데이터는 외부 실험에 상대적으로 안전 · 사내 업무 데이터는 승인된 서비스·정책에 따라 ·
민감/기밀 자료는 외부 소비자 도구에 함부로 업로드 금지 · API/커넥터는 접근·권한·거버넌스 필요 ·
AI 출력은 고영향 업무 사용 전 반드시 검증. 법률적이지 않고 실무적으로.

## 시간 민감 콘텐츠 / 갱신 아키텍처

도구·버전 주장에는 `UPDATED · 2026.09` 표기와 접이식 `SourceNote`. 개별 도구 권장은 쉽게
교체 가능하도록 데이터로 분리. "X가 항상 최선" 류 금지. 검증 불가 시 카테고리/원리 수준으로 서술.
사실 확인 기록은 `docs/CONTENT_FACT_CHECK.md`.

## 향후 삽입 지점 (Founder 제공 예정 자료)

"Claude 실제 사용법" 보충 자료는 재설계 없이 Book 01 도구 소개 · Book 02 실습 지시 · Book 05
실습에 삽입 가능하도록 구조화한다.
