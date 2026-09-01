# HDEC AI BUILD

HDEC senior executives가 1:1 AI ACE 지원과 함께 현장의 경험 및 조직의 암묵지를 실제로 작동하는 AI 업무 도구로 전환하도록 돕는 편집형 학습 경험입니다.

이 프로젝트는 일반적인 LMS나 개발 튜토리얼이 아닙니다. 실장이 프로그래머가 되는 대신, AI가 정확히 일하도록 문제와 맥락을 설명하고 결과를 판단할 수 있는 전체 지도를 제공합니다.

> Executive tacit knowledge × AI implementation capability × ACE support → working business tools

## Current scope — Design Baseline V1

- Home / Book Library
- BOOK 01 — UNDERSTAND 전체 long-scroll reading experience
- BOOK 02–05의 개별 preview page
- 역할 중심의 interactive AI Tool Map
- Frontend / Backend / Database / API system diagram
- Reference-driven Build narrative와 HDEC 업무 예시
- Prompt와 Harness의 차이를 설명하는 diagram
- 반응형 AI Build Map
- 실제 이미지로 교체 가능한 screenshot placeholder system
- Desktop, tablet, mobile responsive layout
- keyboard focus, semantic structure, reduced-motion support

현재 포함하지 않는 범위는 backend, authentication, database, 학습상태 저장, 실제 self-certification, analytics입니다.

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
- `src/content/books.ts` — five-Book metadata, Tool Map content, chapter titles
- `src/pages/HomePage.tsx` — hero, thesis, three-party model, and editorial Book Library
- `src/pages/BookPage.tsx` — complete BOOK 01 narrative
- `src/components/ScreenshotPlaceholder.tsx` — future image replacement contract
- `AGENTS.md` — repository purpose, architecture, design principles, scope, and working rules

## Screenshot replacement approach

Real product screenshots have deliberately not been simulated. `ScreenshotPlaceholder` accepts:

- `tool`
- `purpose`
- `description`
- `ratio`
- `annotation`

When a screenshot is supplied, add the optimized local file to `src/assets/`, preserve the wrapper aspect ratio, and replace only the placeholder's visual body with an accessible `<img>`. Keep its metadata as a caption or content record. The current Book 01 example recommends 16:10 and specifies the future annotation targets.

## Next planned Books

- BOOK 02 — INSTRUCT: prompting, context, requirements, screenshot-based feedback, iterative correction
- BOOK 03 — CHOOSE: Custom AI, Web / App, Automation, Agent, and three build-start modes
- BOOK 04 — BUILD: 8-week Executive × ACE project and weekly Self Certification
- BOOK 05 — PRACTICE: very easy phone/tablet-friendly hands-on exercises

## Current status

Design Baseline V1 is implemented and prepared for its first GitHub Pages deployment. Colors are a sophisticated temporary project palette and are not presented as official HDEC brand colors. No proprietary Hyundai/HDEC or reference-site assets are included.
