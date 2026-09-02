# HDEC AI BUILD

HDEC senior executives가 1:1 AI ACE 지원과 함께 현장의 경험 및 조직의 암묵지를 실제로 작동하는 AI 업무 도구로 전환하도록 돕는 편집형 학습 경험입니다.

이 프로젝트는 일반적인 LMS나 개발 튜토리얼이 아닙니다. 실장이 프로그래머가 되는 대신, AI가 정확히 일하도록 문제와 맥락을 설명하고 결과를 판단할 수 있는 전체 지도를 제공합니다.

> Executive tacit knowledge × AI implementation capability × ACE support → working business tools

## Current scope — Executive Content V1

- Home / Book Library (다섯 권 모두 실제 콘텐츠로 접근 가능)
- BOOK 01 — UNDERSTAND: 8장 심화(환각·Prototype/Production·보안·Harness·결정 게이트 포함)
- BOOK 02 — INSTRUCT: 업무지시·맥락·캡처·피드백·디자인·개발·디버깅·프로젝트 관리 8장
- BOOK 03 — CHOOSE: 솔루션 타입/시작 방식 + interactive Decision Diagnostic + 난이도 매트릭스
- BOOK 04 — BUILD: 8주 Executive × ACE 워크북 + 주차별 Self Certification(브라우저 저장)
- BOOK 05 — PRACTICE: 휴대폰/태블릿 친화 6개 hands-on 미션
- JOB(THINK·RESEARCH·KNOWLEDGE·CREATE·BUILD·AUTOMATE·AGENT) 기준 AI Tool Map
- 재사용 편집 컴포넌트(ExecutiveTakeaway · WatchOut · RealWorldExample · TryThisPrompt · PromptProgression · SourceNote · CapabilityCheck · WeekCanvas · DecisionDiagnostic · SecurityGate · Mission)
- 실제 이미지로 교체 가능한 screenshot placeholder system
- Desktop, tablet, mobile responsive layout / keyboard focus / reduced-motion

Self Certification 체크는 각 브라우저의 localStorage에만 개인용으로 저장되며 서버로 전송되지
않습니다. Backend·authentication·database·analytics는 여전히 포함하지 않습니다. 도구/버전
주장은 `2026.09 기준`이며 `docs/CONTENT_FACT_CHECK.md`에 근거를 기록했습니다.

## Stack

- Vite
- React
- TypeScript
- CSS custom properties and browser APIs
- ESLint

라우팅과 reveal/progress motion은 별도 프레임워크 없이 History API와 Intersection Observer로 구현했습니다.

## Local setup

Node.js 22와 npm이 필요합니다.

```bash
npm install
npm run dev
```

기본 개발 서버 주소는 [http://localhost:5173](http://localhost:5173)입니다.

## Commands

```bash
npm run dev      # Vite development server
npm run build    # TypeScript check + production build
npm run lint     # ESLint
npm run preview  # preview the production build
```

## Deployment

GitHub Pages에서 [https://ceoys.github.io/HD-level-Exeutive_Education/](https://ceoys.github.io/HD-level-Exeutive_Education/)로 호스팅합니다. `main` 브랜치에 push하면 GitHub Actions가 production build를 만들고 배포합니다.

```bash
npm run dev      # local development
npm run build    # production build
```

## Important paths

```text
src/
├── components/   # navigation, editorial building blocks, diagrams, placeholders
├── content/      # editable Book metadata and curriculum configuration
├── hooks/        # pathname and reading-progress browser behavior
├── pages/        # Library, Book 01, Book teaser experiences
├── styles/       # tokens, foundations, component and page composition
└── assets/       # future local screenshots and supplied visual assets
```

- `src/styles/tokens.css` — temporary palette, typography, spacing, widths, borders, radius, and motion tokens
- `src/styles/editorial.css` — 재사용 편집 컴포넌트와 공용 콘텐츠 헬퍼 스타일
- `src/content/books.ts` — five-Book metadata, JOB 기준 Tool Map, Book 01 chapter titles
- `src/content/book02-instruct.ts` … `book05-practice.ts` — 각 Book의 사실 콘텐츠(프롬프트·예시·문항·산출물)
- `src/pages/HomePage.tsx` — hero, thesis, three-party model, and editorial Book Library
- `src/pages/BookPage.tsx` … `Book05Page.tsx` — 다섯 권의 편집 페이지(BookPage = Book 01)
- `src/components/ScreenshotPlaceholder.tsx` — future image replacement contract
- `docs/CONTENT_ARCHITECTURE_V2.md` — 권별 목표·챕터·핵심 개념·예시·산출물
- `docs/CONTENT_FACT_CHECK.md` — 시간 민감 도구 주장의 근거와 검증일
- `AGENTS.md` — repository purpose, architecture, design principles, scope, and working rules

## Screenshot replacement approach

Real product screenshots have deliberately not been simulated. `ScreenshotPlaceholder` accepts:

- `tool`
- `purpose`
- `description`
- `ratio`
- `annotation`

When a screenshot is supplied, add the optimized local file to `src/assets/`, preserve the wrapper aspect ratio, and replace only the placeholder's visual body with an accessible `<img>`. Keep its metadata as a caption or content record. The current Book 01 example recommends 16:10 and specifies the future annotation targets.

## Books

- BOOK 01 — UNDERSTAND: AI/IT 개념을 하나의 제작 흐름으로 이해 (8장)
- BOOK 02 — INSTRUCT: 지시·맥락·캡처·피드백·디자인·개발·디버깅·프로젝트 관리 (8장)
- BOOK 03 — CHOOSE: Custom AI / Web·App / Automation / Agent, 세 가지 시작 방식, Decision Diagnostic
- BOOK 04 — BUILD: 8주 Executive × ACE 워크북, 주차별 Self Certification
- BOOK 05 — PRACTICE: 휴대폰/태블릿 친화 6개 hands-on 미션

## Current status

Executive Content V1이 `feat/executive-content-v1` 브랜치에 구현되었습니다. 다섯 권 모두 실제
콘텐츠를 가지며, Founder 검토 후 `main`에 병합해 GitHub Pages로 배포합니다. Colors are a
sophisticated temporary project palette and are not presented as official HDEC brand colors. No
proprietary Hyundai/HDEC or reference-site assets are included. 실제 제품 스크린샷은 아직
placeholder이며 Founder가 이후 제공합니다.
