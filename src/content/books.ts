export type Book = {
  number: string
  slug: string
  keyword: string
  koreanTitle: string
  description: string
  libraryLine: string
  note: string
  status: 'available' | 'upcoming'
  accent: string
  foreground: string
}

export const books: Book[] = [
  {
    number: '01',
    slug: 'understand',
    keyword: 'UNDERSTAND',
    koreanTitle: 'AI로 무언가를 만드는 전체 지도',
    description: 'AI와 IT의 핵심 개념을 하나의 연결된 제작 흐름으로 이해합니다.',
    libraryLine: 'AI와 IT의 연결 구조를 한눈에 봅니다.',
    note: '8 CHAPTERS',
    status: 'available',
    accent: '#d9ff57',
    foreground: '#112e28',
  },
  {
    number: '02',
    slug: 'instruct',
    keyword: 'INSTRUCT',
    koreanTitle: 'AI에게 일을 시키는 방법',
    description: '좋은 결과를 만드는 지시, 맥락, 피드백의 언어를 익힙니다.',
    libraryLine: '맥락과 기준을 정확한 지시로 바꿉니다.',
    note: '8 CHAPTERS',
    status: 'available',
    accent: '#ff6b41',
    foreground: '#1d1815',
  },
  {
    number: '03',
    slug: 'choose',
    keyword: 'CHOOSE',
    koreanTitle: '무엇을 만들 것인가',
    description: '업무 문제에 맞는 제품 형태와 가장 좋은 시작 방식을 선택합니다.',
    libraryLine: '무엇을, 어떻게 만들지 결정합니다.',
    note: 'DECISION TOOL',
    status: 'available',
    accent: '#9cc7bf',
    foreground: '#102521',
  },
  {
    number: '04',
    slug: 'build',
    keyword: 'BUILD',
    koreanTitle: '실장 × ACE AI BUILD',
    description: '8주 동안 하나의 실제 업무 문제를 작동하는 도구로 전환합니다.',
    libraryLine: '8주 동안 ACE와 업무도구를 완성합니다.',
    note: '8-WEEK WORKBOOK',
    status: 'available',
    accent: '#3657d6',
    foreground: '#f3efe6',
  },
  {
    number: '05',
    slug: 'practice',
    keyword: 'PRACTICE',
    koreanTitle: '직접 만들어보기',
    description: '작고 쉬운 실습으로 AI에게 요청하고 판단하고 수정해 봅니다.',
    libraryLine: '작은 미션으로 직접 만들고 판단합니다.',
    note: '6 MISSIONS',
    status: 'available',
    accent: '#efc653',
    foreground: '#201d13',
  },
]

// 도구가 아니라 "지금 해야 할 일(JOB)"로 고른다. 하나의 도구는 여러 역할에 등장할 수 있다.
// 역할·예시는 2026.09 기준이며 데이터로 분리되어 있어 문구 교체만으로 갱신할 수 있다.
export const toolGroups = [
  {
    id: 'think',
    label: 'THINK · 생각 · 정리',
    tools: [
      { name: 'ChatGPT', role: '사고 정리 · 초안 · 멀티모달 대화' },
      { name: 'Claude', role: '긴 문서 · 설계 · 구조적 사고' },
      { name: 'Gemini', role: 'Google 환경의 정리 · 멀티모달' },
    ],
  },
  {
    id: 'research',
    label: 'RESEARCH · 검색 · 근거',
    tools: [
      { name: 'ChatGPT', role: '웹 검색으로 최신 정보 조사' },
      { name: 'Gemini', role: 'Deep Research로 비교 · 근거 수집' },
      { name: 'Claude', role: '자료를 읽고 비교 · 요약 · 분석' },
    ],
  },
  {
    id: 'knowledge',
    label: 'KNOWLEDGE · 내 자료',
    tools: [
      { name: 'NotebookLM', role: '내 자료에서만 인용과 함께 답한다(소스 근거)' },
      { name: 'Claude Project', role: '지식 문서 + 프로젝트 지시를 함께 저장' },
      { name: 'ChatGPT Project · GPT', role: '지식 파일 + 지시 + 액션' },
      { name: 'Gemini Gem', role: '지시 + 지식 파일(제3자 액션은 미지원)' },
    ],
  },
  {
    id: 'create',
    label: 'CREATE · 이미지 · 화면',
    tools: [
      { name: 'ChatGPT', role: '이미지 생성 · 시각 자료' },
      { name: 'Gemini · Canvas', role: '이미지 · 문서/화면 초안' },
      { name: 'Claude Design', role: '업무 화면 시안(Prototype)' },
    ],
  },
  {
    id: 'build',
    label: 'BUILD · 웹 · 앱 · 코드',
    tools: [
      { name: 'Claude Design', role: '화면부터 만드는 Prototype' },
      { name: 'Google AI Studio', role: 'Gemini API로 프로토타이핑(개발자용)' },
      { name: 'Claude Code · Codex', role: '저장소에서 직접 일하는 Coding Agent' },
      { name: 'Manus', role: '목표를 주면 산출물까지 만드는 범용 Agent' },
    ],
  },
  {
    id: 'automate',
    label: 'AUTOMATE · 업무 흐름',
    tools: [
      { name: 'Copilot Studio', role: '사내 지식 기반 흐름 · 에이전트 빌더' },
      { name: 'Power Automate', role: '정형화된 반복 흐름 자동화' },
      { name: 'M365 Copilot', role: 'Office 앱 안의 생산성 지원' },
    ],
  },
  {
    id: 'agent',
    label: 'AGENT · 스스로 수행',
    tools: [
      { name: 'Manus', role: '목표 → 계획 → 실행 → 산출물(범용 자율)' },
      { name: 'Copilot Studio', role: '사내 데이터에 연결된 업무 에이전트' },
      { name: 'Claude Code · Codex', role: '코드베이스에서 다단계로 일하는 에이전트' },
    ],
  },
]

export const bookChapters = [
  'AI는 어디까지 할 수 있는가',
  'AI마다 역할이 다르다',
  '프로그램은 무엇으로 이루어지는가',
  'AI로 화면부터 만든다',
  '처음부터 생각할 필요는 없습니다',
  '화면 뒤에 실제 기능을 연결한다',
  '한 번의 프롬프트에서 프로젝트 시스템으로',
  '전체 지도를 한 장에 놓습니다',
]
