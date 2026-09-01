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
    note: '12 min read · 8 chapters',
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
    note: 'COMING NEXT',
    status: 'upcoming',
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
    note: 'PREVIEW',
    status: 'upcoming',
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
    note: '8-WEEK PROJECT',
    status: 'upcoming',
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
    note: 'HANDS-ON',
    status: 'upcoming',
    accent: '#efc653',
    foreground: '#201d13',
  },
]

export const toolGroups = [
  {
    id: 'thinking',
    label: '생각하고 탐색하기',
    tools: [
      { name: 'ChatGPT', role: '범용 사고 · 리서치 · 멀티모달 작업' },
      { name: 'Claude', role: '긴 문서 · 설계 · 개발 · 프로젝트 맥락' },
      { name: 'Gemini', role: 'Google 생태계 · 멀티모달 · AI Studio' },
    ],
  },
  {
    id: 'knowledge',
    label: '자료와 조직 지식 다루기',
    tools: [
      { name: 'NotebookLM', role: '지정한 자료를 중심으로 이해하고 정리' },
      { name: 'Microsoft Copilot', role: 'Microsoft 업무 환경 안의 생산성 지원' },
      { name: 'Copilot Studio', role: '업무용 Copilot과 자동화 구성' },
    ],
  },
  {
    id: 'build',
    label: '제품과 코드를 만들기',
    tools: [
      { name: 'Claude Code / Codex', role: '저장소와 코드베이스에서 직접 작업하는 Coding Agent' },
      { name: 'Manus', role: '여러 단계를 계획하고 수행하는 범용 Agent 사례' },
    ],
  },
]

export const bookChapters = [
  'AI는 어디까지 할 수 있는가',
  'AI마다 역할이 다르다',
  '프로그램은 무엇으로 이루어지는가',
  'AI로 화면부터 만든다',
  'Reference-driven Build',
  '화면 뒤에 실제 기능을 연결한다',
  '한 번의 프롬프트에서 프로젝트 시스템으로',
  'The AI Build Map',
]
