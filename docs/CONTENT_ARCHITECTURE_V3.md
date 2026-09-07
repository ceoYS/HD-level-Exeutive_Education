# HDEC AI BUILD · CONTENT ARCHITECTURE V3

## Journey

1. AI를 이해한다.
2. AI와 함께 만드는 방식을 본다.
3. 회사의 데이터·관계·맥락이 AI에 닿는 구조를 본다.
4. LITE와 CONNECTED 사례로 결과물의 모습을 본다.
5. AI에게 맡길 역할을 정하고 ACE와 함께 만든다.

## Route composition

| Route | Page | Composition |
|---|---|---|
| `/` | `HomePage` | Hero → 5 STEP journey → 3 PART Library |
| `/book/ai` | `AiPage` | AI CORE → AI layers → tool map |
| `/book/vibe-coding` | `VibeCodingPage` | implementation shift → system → connection map → build loop → master map |
| `/book/hdec-context` | `HdecContextPage` | DATA ≠ CONTEXT → Project/Company zoom → NOW/TARGET → personal Agent → BRIDGE |
| `/book/cases` | `CasesPage` | LITE/CONNECTED definition → news case → contract case → LITE reference |
| `/book/build` | `BuildPage` | role split → role selection → task choice → roadmap → W01–W08 |

Compatibility aliases:

- `/book/understand` → `/book/ai`
- `/book/instruct` → `/book/cases`
- `/book/choose` → `/book/build`
- `/book/practice` → `/book/build`

## Content ownership

- `content/part1-lock.ts`, `components/Part1Blocks.tsx`: locked Book 01 source text and render blocks
- `content/hdec-context.ts`: educational target-concept labels for the four 03 visuals
- `content/cases.ts`: Book 04 case chains and LITE references
- `content/ai-roles.ts`, `content/book04-build.ts`: Book 05 roles and weekly curriculum
- `content/videos.ts`: optional VIDEO 01–03 sources; no `src` means no public placeholder

## Reusable structural components

- `BookCover`, `SiteHeader`, `NavigateLink`: common reading chrome and SPA navigation
- `WorkChain`: 03 BRIDGE and 05 BLUEPRINT shared spine
- `VideoSlot`: source-driven media slot
- `CaseLiteConnected`: paired LITE/CONNECTED case renderer
- `RoleSplit`, `RoleSelect`, `BuildRoadmap`, `Blueprint`, `BuildTip`: Book 05 build structure
- `hdec-context/*`: diagram-only components for Visual A–D

## Editing rules

- Do not edit locked Book 01 prose. Recompose it through existing exports.
- Treat H-MAP, HSP/ERP, and Autoway labels as educational conceptual roles, not official enterprise-architecture definitions.
- Keep LITE reference files unpublished unless their internal content is separately approved.
- Add real media to `content/videos.ts`; do not expose empty preparation states.
- Run build, lint, diff check, content lock, and 1440/390 route QA before deployment.
