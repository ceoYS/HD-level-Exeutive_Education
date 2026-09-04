// CONTENT LOCK · 1단계 원문 데이터. 문장·단어 수정 금지. 컴포넌트는 ../components/Part1Blocks.tsx

export const systemTerms = [
  ['FRONTEND', '사용자가 보는 화면'],
  ['BACKEND', '화면 뒤에서 규칙을 처리'],
  ['DATABASE', '정보를 저장하고 불러옴'],
  ['API', '시스템 사이를 연결'],
  ['SERVER', '서비스가 실제로 실행되는 환경'],
  ['AUTHENTICATION', '누가 무엇을 할 수 있는지 확인'],
  ['DEPLOY', '다른 사람이 접속할 수 있게 내보내는 과정'],
  ['GITHUB REPOSITORY', '코드와 변경 이력을 저장하고, 이미 다른 개발자가 만들어 둔 기능·구조를 찾아 참고·활용할 수 있는 저장소'],
]

export const automationTerms = [
  ['PROJECT INSTRUCTIONS / RULES', 'AI가 프로젝트 전체에서 계속 지켜야 할 상시 작업 지시사항\n\n- 프로젝트 목적·기술 스택·수정 금지 범위·코딩/작성 규칙·Build/Test 방법 등을 기록해 매번 다시 설명하지 않아도 Agent가 같은 기준으로 일하도록 함.\n- ex) 관련 없는 파일 수정 금지 · 확정 UI 임의 변경 금지 · 변경 후 Build/Test 실행 · CLAUDE.md · AGENTS.md · .cursor/rules'],
  ['CONTEXT / DOCS', 'AI가 무엇을 만들고 무엇을 기준으로 판단할지 알려주는 프로젝트 기준 문서\n\n- 문제 정의·요구사항·기능 범위·사용자 흐름·작업 계획·남은 과제 등을 문서로 남겨 Agent가 같은 기준을 참고하도록 함.\n- ex) README.md · PRD.md · SPEC.md · PLAN.md · TASKS.md'],
  ['HAND-OFF / CHECKPOINT', '한 채팅방의 Context가 길어질수록 중요한 맥락을 안정적으로 유지하기 어려워지고 답변이 압축되거나 대화를 빨리 마무리하는 듯한 현상이 생길 수 있습니다. 현재 상태·결정사항·남은 작업·읽어야 할 파일을 Hand-Off 문서로 받아 프로젝트 내 새 채팅방으로 인계합니다.'],
  ['MCP', 'AI가 프로젝트 밖의 도구·데이터·서비스를 연결해 사용할 수 있게 하는 표준 연결 방식\n\n- Agent가 GitHub·Figma·Google Drive·Database 등 외부 시스템을 조회·사용할 수 있도록 연결하는 역할\n- ex) GitHub · Figma · Google Drive · Database 등의 외부 시스템 연결'],
  ['SKILL', '반복해서 시킬 일을 재사용 가능한 작업법으로 만들어 둡니다.'],
  ['HARNESS / LOOP', '여러 AI·도구·문서·검증 절차를 하나의 제품 제작 흐름으로 묶어 운영하는 방식\n\n- Harness: Planner·Builder·Reviewer 등 역할과 도구를 연결해 반복 가능한 작업 구조로 구성\n- Loop: PLAN → BUILD → REVIEW → USE → FIX를 반복하며 결과를 검증·개선하는 순환 구조'],
]

export const referenceSteps = [
  ['01', 'DIG UP', '벤치마크할 유사 서비스를 발굴합니다.'],
  ['02', 'ANALYZE', '정보구조와 사용자 흐름을 본다'],
  ['03', 'EXTRACT', '재사용할 제품의 구조를 추출한다.'],
  ['04', 'REINTERPRET', '업무 인프라 제약과 우선순위를 고려해 다시 설계한다.'],
  ['05', 'VALIDATE', '재설계한 구조가 실제 우리 업무에 맞는지 작은 Prototype으로 검증합니다.'],
]

export const founderBuildExample = [
  ['PLANNER', 'ChatGPT Project', '장기 프로젝트 맥락을 유지하면서 문제 정의·제품 방향·기능 우선순위·PRD/SPEC을 함께 논의합니다.'],
  ['BUILDER', 'Claude Code', 'CMD/터미널에서 프로젝트 파일과 구현 문서를 읽고 실제 코드를 만들고 실행·수정합니다.'],
  ['REVIEWER', 'Codex', '별도의 관점에서 요구사항 준수, 코드 변경 범위, 테스트와 빠진 항목을 검토합니다.'],
  ['ACTUAL USER', 'Executive', '직접 제품을 써보고 현업과 다른 지점을 판단한 뒤 필요한 부분만 다시 수정합니다.'],
]

export const book01Certs = [
  { id: 'b01-ai-layers', statement: 'Chat · Project · Agent가 각각 어디까지 일을 맡는지 설명할 수 있다.' },
  { id: 'b01-structure', statement: 'Frontend부터 Deploy까지 제품의 주요 구성 요소를 설명할 수 있다.' },
  { id: 'b01-workflow-agent', statement: 'Project Instructions · Docs · MCP · Skill이 각각 무엇을 위한 것인지 설명할 수 있다.' },
  { id: 'b01-build-loop', statement: 'Planner · Builder · Reviewer · Actual User의 역할을 구분할 수 있다.' },
]

export const CERT_INTRO = '스스로 확인합니다.'
export const CERT_LABEL = 'SELF CERTIFICATION · 나는 지금 이것을 할 수 있다'

export const REFERENCE_TITLE = '이미 검증된 제품을 벤치마킹 할 수 있다.'
export const REFERENCE_ENGLISH = 'REFERENCE-DRIVEN BUILD'
