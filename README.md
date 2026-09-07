# HDEC AI BUILD

HDEC senior executives가 1:1 AI ACE 지원과 함께 현장 경험과 조직의 암묵지를 실제로 작동하는 AI 업무 도구로 전환하도록 돕는 편집형 학습 경험입니다.

이 사이트는 LMS나 개발 튜토리얼이 아닙니다. 실장이 AI에게 업무와 맥락을 정확히 전달하고 결과를 판단할 수 있도록 돕는 digital field guide입니다.

> Executive tacit knowledge × AI implementation capability × ACE support → working business tools

## V3 information architecture

| Part | Step | Route | Content |
|---|---:|---|---|
| PART 1 · 개념 | 01 | `/book/ai` | AI CORE, Assistant·Agent, 분야별 AI 지도 |
| PART 1 · 개념 | 02 | `/book/vibe-coding` | 바이브코딩과 AI Build 전체 흐름 |
| PART 2 · 우리 회사 | 03 | `/book/hdec-context` | DATA ≠ CONTEXT, Project·Company Context, NOW → TARGET |
| PART 3 · 적용 | 04 | `/book/cases` | HDEC NEWS / ISSUE, CONTRACT PRE-REVIEW의 LITE vs CONNECTED |
| PART 3 · 적용 | 05 | `/book/build` | Executive × ACE 역할, 과제 선택, 8주 Build |

기존 주소 `/book/understand`, `/book/instruct`, `/book/choose`, `/book/practice`는 호환 alias로 유지합니다.

## Stack and commands

- Vite + React + TypeScript
- CSS custom properties and browser APIs
- History API client routing
- Intersection Observer reveal/progress motion

```bash
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

## Important paths

```text
src/
├── components/   # editorial blocks, diagrams, navigation
├── content/      # editable curriculum and case data
├── hooks/        # routing, reading progress, staged visual behavior
├── pages/        # Home and five route-level experiences
└── styles/       # tokens, foundations, page composition
review/
├── content-lock/ # locked-copy extraction, rendering, and gate reports
└── qa/           # Playwright screenshot and overflow checks
```

- `src/content/books.ts` — Home Library의 5 STEP 메타데이터
- `src/content/hdec-context.ts` — 03 HDEC CONTEXT 도식 데이터
- `src/content/cases.ts` — 04 LITE / CONNECTED 사례
- `docs/CONTENT_ARCHITECTURE_V3.md` — 현재 route·page·content 구조
- `review/IA_REDESIGN_PLAN_V3.md` — 승인된 V3 구현 계획

## Content lock and QA

Book 01 원문은 source/render multiset으로 보호합니다. 변경 후 `review/content-lock/check-lock.mjs`의 `TEXT_DIFF`, `MISSING`, `UNAPPROVED_NEW`가 모두 0이어야 합니다.

최종 QA는 Home과 5개 주요 route, 4개 alias를 1440px과 390px에서 검사합니다. 가로 넘침, SVG label overlap, broken route/image, browser error를 확인합니다.

## Deployment

`main`에 push하면 GitHub Pages Actions가 production build를 배포합니다.

[Production](https://ceoys.github.io/HD-level-Exeutive_Education/)

사용 색상은 공식 HDEC 브랜드 색이 아닌 교체 가능한 임시 프로젝트 팔레트입니다. Backend, authentication, database, analytics는 포함하지 않습니다.
