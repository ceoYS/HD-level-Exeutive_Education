// BOOK 03 — CHOOSE. 솔루션 타입 · 시작 방식 · 난이도. 갱신 가능하도록 데이터로 분리.

export const book03Sections = [
  '무엇을 만들지 먼저 정한다',
  '무엇을 만들 것인가 (WHAT)',
  '어떻게 시작할 것인가 (HOW)',
  '무엇을 만들지 진단한다',
  '난이도와 리스크',
]

export type SolutionType = {
  key: string
  name: string
  korean: string
  whenBest: string[]
  examples: string[]
  note: string
}

export const solutionTypes: SolutionType[] = [
  {
    key: 'customai',
    name: 'Custom AI',
    korean: '맞춤형 AI 어시스턴트',
    whenBest: ['주로 대화로 이루어진다', '반복되는 지시가 있다', '참고할 지식 모음이 있다', '복잡한 전용 화면이 필요 없다'],
    examples: ['사업검토 보조', '회의 질문 생성', '계약 문서 질의'],
    note: 'ChatGPT GPT/Project · Claude Project · Gemini Gem은 지시 + 맥락 + 지식을 저장한 "설정"입니다. 자동으로 자율 에이전트가 되지는 않습니다.',
  },
  {
    key: 'webapp',
    name: 'Web / App',
    korean: '전용 화면이 있는 웹·앱',
    whenBest: ['사람들이 쓸 전용 인터페이스가 필요하다', '데이터를 표시·입력해야 한다', '반복 사용이 중요하다', '버튼·폼·대시보드가 필요하다'],
    examples: ['프로젝트 포트폴리오 대시보드', '의사결정 트래커', '프로젝트 리스크 보드'],
    note: '화면부터(Prototype) 만들어 흐름을 확인한 뒤, 필요하면 실제 기능과 데이터를 연결합니다.',
  },
  {
    key: 'automation',
    name: 'Workflow Automation',
    korean: '업무 흐름 자동화',
    whenBest: ['트리거가 분명하다', '단계가 반복 가능하다', '기대 결과가 예측 가능하다'],
    examples: ['메일 → 첨부 저장 → 정보 추출 → SharePoint 기록 → Teams 알림'],
    note: '대부분 미리 정해진 순서를 따릅니다. 예외 판단이나 승인이 필요한 지점은 사람이 남길 수 있습니다.',
  },
  {
    key: 'agent',
    name: 'AI Agent',
    korean: '상황을 보고 다음 행동을 정하는 에이전트',
    whenBest: ['목표는 알지만 경로가 고정되어 있지 않다', 'AI가 다음 행동을 스스로 판단해야 한다', '여러 도구·데이터 소스를 오간다'],
    examples: ['범용 자율 에이전트(Manus)', '사내 업무 에이전트(Copilot Studio)', '코딩 에이전트(Claude Code · Codex)'],
    note: '권한과 행동 범위가 넓어질수록 관측·오류·비용·루프 제어·사람 승인까지 함께 설계해야 합니다. 처음에는 범위를 좁혀 검증하는 편이 관리하기 쉽습니다.',
  },
]

export type StartMode = {
  en: string
  label: string
  desc: string
  when: string
}

export const startModes: StartMode[] = [
  {
    en: 'BLANK',
    label: '빈 화면에서',
    desc: '요구사항을 대화로 정리하며 처음부터 만든다',
    when: '만들 것이 비교적 단순하거나 새로울 때',
  },
  {
    en: 'REFERENCE',
    label: '레퍼런스에서',
    desc: '검증된 화면의 정보구조·흐름을 분석해 재구성한다',
    when: '참고하고 싶은 구조나 사용 경험이 있을 때',
  },
  {
    en: 'EXISTING',
    label: '기존 업무에서',
    desc: '지금 하는 Excel·Email·PPT 업무를 그대로 보여주고 매핑한다',
    when: '이미 반복하는 수작업이 있을 때',
  },
]

export const existingWorkflowAsks = [
  '이 업무의 흐름을 단계로 정리해줘.',
  '반복되는 단계와 사람이 판단해야 하는 단계를 구분해줘.',
  '자동화할 부분과 사람이 남겨야 할 부분을 나눠서 제안해줘.',
]

export type DifficultyRow = {
  level: 'LOW' | 'MEDIUM' | 'HIGH'
  types: string
  note: string
}

export const difficultyRows: DifficultyRow[] = [
  { level: 'LOW', types: 'Custom AI · 간단한 Prototype', note: '작은 범위에서 바로 시험해볼 수 있음' },
  { level: 'MEDIUM', types: 'Web / App · Workflow Automation', note: '화면·데이터·흐름 설계가 필요' },
  { level: 'HIGH', types: 'Agent · 다수 엔터프라이즈 통합', note: '권한·보안·운영·비용 관리까지 함께 필요' },
]
