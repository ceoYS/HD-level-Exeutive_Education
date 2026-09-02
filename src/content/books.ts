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
    description: 'AI와 IT의 핵심 개념을 실제 제작 흐름 안에서 이해합니다.',
    libraryLine: '제품이 어떻게 만들어지고 연결되는지 봅니다.',
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
    description: 'AI가 일을 제대로 이해하도록 목적·맥락·기준을 전달하는 법을 익힙니다.',
    libraryLine: '업무의 맥락과 기준을 AI에게 전달합니다.',
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
    description: '업무 문제에 맞는 제품 형태와 시작 방식을 고릅니다.',
    libraryLine: '무엇을, 어떻게 시작할지 결정합니다.',
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
    description: '8주 동안 실제 업무 문제 하나를 작동하는 도구로 만듭니다.',
    libraryLine: 'ACE와 실제 업무도구 하나를 완성합니다.',
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
    description: '짧은 실습으로 요청하고, 결과를 보고, 직접 고쳐봅니다.',
    libraryLine: '작은 미션으로 AI Build 흐름을 직접 경험합니다.',
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
    label: 'THINK / WRITE · 생각 · 문서',
    tools: [
      { name: 'ChatGPT', role: '대화 · 사고 정리 · 초안 · 파일 분석' },
      { name: 'Claude', role: '긴 문서 · 구조화 · 분석 · 작성' },
      { name: 'Gemini', role: '멀티모달 대화 · 문서와 아이디어 정리' },
    ],
  },
  {
    id: 'research',
    label: 'RESEARCH · 검색 · 근거',
    tools: [
      { name: 'ChatGPT', role: '웹 검색으로 최신 정보 조사' },
      { name: 'Claude', role: '웹과 연결 자료를 읽고 인용 보고서 작성' },
      { name: 'Gemini', role: 'Deep Research로 비교 · 근거 수집' },
    ],
  },
  {
    id: 'knowledge',
    label: 'KNOWLEDGE · 내 자료',
    tools: [
      { name: 'NotebookLM', role: '내 소스에 근거한 답변 · 인용 · 오디오 요약' },
      { name: 'Claude Project', role: '지식 문서 + 프로젝트별 지시' },
      { name: 'ChatGPT Project', role: '파일 + 지시 + 대화를 한 작업공간에 유지' },
      { name: 'Gemini Gem', role: '반복할 역할과 지식을 맞춤 설정' },
    ],
  },
  {
    id: 'image',
    label: 'IMAGE · 이미지',
    tools: [
      { name: 'ChatGPT Images', role: '대화로 이미지 생성 · 편집' },
      { name: 'Gemini', role: '이미지 생성 · 편집 · 시각적 아이디어' },
      { name: 'Adobe Firefly', role: '이미지 · 디자인 자산 생성과 편집' },
    ],
  },
  {
    id: 'video',
    label: 'VIDEO · 영상',
    tools: [
      { name: 'Higgsfield', role: 'AI 영상 · 카메라 움직임 · 크리에이티브 제작' },
      { name: 'Google Flow · Veo', role: '장면 · 영상 · 오디오를 함께 생성' },
      { name: 'Adobe Firefly', role: '영상 생성 · 편집 제작 흐름' },
    ],
  },
  {
    id: 'audio',
    label: 'MUSIC / AUDIO · 음악 · 음성',
    tools: [
      { name: 'Suno', role: '프롬프트로 음악을 만들고 편집' },
      { name: 'ElevenLabs', role: '음성 생성 · 더빙 · 오디오 제작' },
      { name: 'NotebookLM', role: '내 자료를 대화형 오디오 요약으로 변환' },
    ],
  },
  {
    id: 'design',
    label: 'UI / DESIGN · 화면 · 경험',
    tools: [
      { name: 'Figma Make', role: '디자인 맥락을 반영한 인터랙티브 Prototype' },
      { name: 'Claude Artifacts', role: '대화에서 업무 도구 · 시각화 Prototype' },
      { name: 'Gemini Canvas', role: '문서 · 코드 · 웹 Prototype을 함께 다듬기' },
    ],
  },
  {
    id: 'build',
    label: 'BUILD / CODE · 제품 · 코드',
    tools: [
      { name: 'Claude Code', role: '터미널에서 파일을 읽고 수정 · 실행' },
      { name: 'Codex CLI', role: '터미널에서 코드를 만들고 검증' },
      { name: 'Cursor', role: '에디터 안에서 계획 · 구현 · 검토' },
      { name: 'Google Antigravity', role: '에디터 · 터미널 · 브라우저를 쓰는 agent-first 환경' },
    ],
  },
  {
    id: 'automate',
    label: 'AUTOMATE · 흐름 자동화',
    tools: [
      { name: 'n8n', role: '시각적 Workflow + AI Agent + 코드' },
      { name: 'Zapier', role: '앱 연결 Workflow + AI Agent' },
      { name: 'Make', role: '시각적 자동화 + 적응형 AI Agent' },
      { name: 'Power Automate', role: 'Cloud · Desktop · AI 기반 업무 자동화' },
    ],
  },
  {
    id: 'agent',
    label: 'AGENT · 스스로 수행',
    tools: [
      { name: 'ChatGPT agent', role: '목표를 받아 웹과 연결 도구로 여러 단계를 수행' },
      { name: 'Copilot Studio', role: '조직 데이터와 흐름에 연결된 업무 Agent' },
      { name: 'Claude Code · Codex', role: '파일 · 명령 · 테스트를 쓰는 Coding Agent' },
      { name: 'n8n · Zapier · Make', role: '업무 흐름 안에 Agent 판단을 결합' },
    ],
  },
]

export const bookChapters = [
  'AI가 바꾼 것은 구현의 장벽',
  'AI · Assistant · Agent는 무엇이 다른가',
  'AI로 할 수 있는 일의 전체 지도',
  '프로그램과 AI 시스템은 무엇으로 이루어지는가',
  'Workflow · Agent · MCP · Skill',
  '이미 검증된 서비스에서 시작할 수 있다',
  '실제로 AI와 개발하는 방법',
  'The AI Build Map',
]
