# HDEC AI BUILD — Content Fact Check

시간에 민감한 제품/도구 주장을 기록한다. 각 항목: 주장 · 출처 · 검증일 · 사용처.
원칙: 카테고리/역할 수준으로 서술한다. 모델 버전명·정확한 한도·GA 날짜처럼 매월 바뀌는
specifics는 피하고, 필요 시 "현재 대표 모델" 같은 표현을 쓴다. 콘텐츠의 시간 표기는
`UPDATED · 2026.09` / `2026.09 기준`.

검증일: **2026-09-01** (일부 항목은 2026 초 이후 변동 — 재검증 필요 표시).

| # | 주장 (콘텐츠에 쓰는 카테고리 수준) | 근거/출처 | 신뢰도 | 사용처 |
| --- | --- | --- | --- | --- |
| 1 | **Custom AI**(맞춤형 AI 어시스턴트)는 지시 + 맥락 + 지식파일(+선택적 도구/액션)을 저장한 "설정"이며, 사람이 매 턴을 주도하는 반응형이다. | crescendo.ai, salesforce.com (2026 업계 일치) | 검증 | 01-2, 03-A, 05-3 |
| 2 | **AI Agent**는 목표를 받아 계획→도구 선택→여러 단계 수행→결과 관찰→계속/중단한다. 위임 후 검토하는 대상. 자율성은 이분법이 아니라 스펙트럼. | 위 동일 | 검증 | 01-7, 03-A |
| 3 | **ChatGPT 커스텀 GPT/Projects**: 지시 + 지식파일 + 내장기능(웹·데이터분석·이미지) + **Actions**(외부 API). ChatGPT 안에서만 실행. | openai.com/academy/custom-gpts | 검증(구조). 모델 버전·에이전트 모드는 재검증 | 01-2, 03-A, 05-3 |
| 4 | **Claude Projects**: 지식베이스 + 프로젝트별 지시. 커넥터/MCP는 **프로젝트 내부가 아니라 계정 수준** 기능. | support.claude.com/articles/9517075 | 검증(1차 출처) | 01-2, 01-7 |
| 5 | **Gemini Gems**: 이름 + 지시 + 지식파일 + Google 내장도구. **제3자 API 액션은 미지원**(커스텀 GPT와 차이). 공유 가능. | gemini.google/overview/gems | 검증(1차 출처) | 01-2, 03-A |
| 6 | **NotebookLM**: 업로드한 **내 자료에서만** 인용과 함께 답한다(소스 기반). Audio Overview로 요약을 음성으로. 일반 웹 에이전트 아님. | blog.google, en.wikipedia.org/wiki/NotebookLM | 검증(핵심). 플랜별 수치 한도는 재검증 | 01-2, 02-2, 05 |
| 7 | **Manus**: 클라우드 가상 컴퓨터에서 목표를 받아 스스로 계획·실행해 보고서·시트·슬라이드·웹앱 등 **완성 산출물**을 낸다. | manus.im (+2차 리뷰) | 부분검증 → **원리 수준으로 서술** | 01-2, 03-A, 05-4 |
| 8 | **Copilot Studio**: 사내 지식에 근거한 맞춤 **에이전트를 만드는 로우코드 플랫폼**. 생성형 오케스트레이션. M365/Power Platform 환경에서 가치. | learn.microsoft.com/microsoft-copilot-studio/whats-new | 검증(MS 1차). May 2026 GA 항목 재검증 | 03-A |
| 9 | **Claude Code**: 코드베이스를 읽고 파일 편집·테스트·PR을 수행하는 **터미널 기반 에이전틱 코딩 도구**(챗박스 아님). CLAUDE.md·MCP로 구성. 기술 사용자 대상. | releasebot.io/anthropic/claude-code | 검증(카테고리). 데스크톱앱·서브에이전트 등 재검증 | 01-2, 01-7 |
| 10 | **Codex**: GitHub 저장소를 샌드박스에 받아 코드 작성·테스트·반복·PR을 여는 **클라우드 에이전틱 코딩 에이전트**. 개발자 도구. | en.wikipedia.org/wiki/OpenAI_Codex_(AI_agent) | 검증(카테고리). 버전·데스크톱앱 재검증 | 01-2, 01-7 |
| 11 | **Google AI Studio**: Gemini API로 **프로토타이핑하는 개발자용 웹 도구**(프롬프트/모델 실험, 코드 생성, 소형 앱 빌드). 소비자 어시스턴트가 아님(그건 Gemini 앱). 무료 티어는 데이터 학습 사용 가능 — 민감자료 주의. | ai.google.dev/aistudio | 검증(카테고리). 기본 모델명 재검증 | 05-4 |
| 12 | **Microsoft 365 Copilot**: Word·Excel·PowerPoint·Outlook·Teams에 내장된 **생산성 어시스턴트**. 테넌트 업무 데이터(Graph)에 근거. 유료 애드온. Copilot **Studio**(빌더)와 다른 제품. | learn.microsoft.com/microsoft-365/copilot | 검증(MS 1차) | 01-2, 03-A |
| 13 | **MCP(Model Context Protocol)**: AI 앱을 외부 도구·데이터에 잇는 **개방형 표준**(Anthropic 2024.11 도입, "AI의 USB-C"). OpenAI·Google·Microsoft 채택, 2025 말/2026 초 Linux Foundation에 기부 — 사실상 교차 벤더 표준. | en.wikipedia.org/wiki/Model_Context_Protocol | 검증 | 01-7 |
| 14 | **GPT Actions / Gems / Projects 도구 비교**: 커스텀 GPT는 지식+제3자 액션 모두 O; Gems는 지식 O·제3자 액션 X; Claude Project는 지식 O·도구는 계정 수준. | openai.com, gemini.google, support.claude.com | 검증(3자 모두 1차) | 03-A |

## 재검증 필요 (2026 초 이후 변동 빠름)

콘텐츠에서 **의도적으로 피한** specifics — 필요 시 게시 시점에 공식 페이지로 재확인:

- 모든 **모델 버전명**(예: GPT-5.x, Gemini 3.x). → "현재 대표 모델"로 표기.
- 제품별 **정확한 한도·가격·GA 날짜**.
- Claude Code/Codex **데스크톱 앱·서브에이전트·보안 기능**(2026 상반기 신규).
- Copilot Studio **컴퓨터 사용 에이전트·Agent 365**(2026-05 전후).
- MCP **2026-07 스펙 개정**.

## 갱신 방법

- 도구별 역할·예시는 `src/content/book01-understand.ts`(툴맵)와 각 Book 콘텐츠 파일의
  데이터로 분리되어 있어, 문구 교체만으로 갱신 가능하다.
- 시간 표기는 `SourceNote`(`UPDATED · 2026.09`)와 `ToolMap` 헤더의 `2026.09 기준`에서 관리한다.
- 순위/"항상 최선" 주장은 쓰지 않는다. 역할·원리 수준을 유지한다.
