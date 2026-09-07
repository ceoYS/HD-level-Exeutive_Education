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
    slug: 'ai',
    keyword: 'AI',
    koreanTitle: 'AI 이해하기',
    description: 'AI가 무엇이고 어떻게 일하는지, 분야별 핵심 AI 지도를 봅니다.',
    libraryLine: 'AI가 어떻게 일하는지 먼저 봅니다.',
    note: '2 CHAPTERS',
    status: 'available',
    accent: '#d9ff57',
    foreground: '#112e28',
  },
  {
    number: '02',
    slug: 'vibe-coding',
    keyword: 'VIBE CODING',
    koreanTitle: 'AI와 바이브코딩 이해하기',
    description: 'AI·Assistant·Agent와 제품 구조, 바이브코딩의 전체 흐름을 이해합니다.',
    libraryLine: 'AI와 바이브코딩이 어떻게 제품으로 이어지는지 봅니다.',
    note: '5 CHAPTERS',
    status: 'available',
    accent: '#ff6b41',
    foreground: '#1d1815',
  },
  {
    number: '03',
    slug: 'hdec-context',
    keyword: 'HDEC CONTEXT',
    koreanTitle: 'AI가 현대건설을 이해하려면',
    description: '데이터·관계·연결 통로·개인 Agent까지, 회사 맥락이 AI에 닿는 구조를 봅니다.',
    libraryLine: '우리 회사의 맥락이 AI에 닿는 길을 봅니다.',
    note: '4 VISUALS',
    status: 'available',
    accent: '#9cc7bf',
    foreground: '#102521',
  },
  {
    number: '04',
    slug: 'cases',
    keyword: 'WHAT CAN WE BUILD?',
    koreanTitle: 'AI로 무엇을 만들 수 있는가',
    description: '대표 사례 2개를 LITE와 CONNECTED로 비교합니다.',
    libraryLine: '지금 바로 되는 것과 연결하면 되는 것을 봅니다.',
    note: '2 CASES',
    status: 'available',
    accent: '#ff6b41',
    foreground: '#f3efe6',
  },
  {
    number: '05',
    slug: 'build',
    keyword: 'EXECUTIVE × ACE BUILD',
    koreanTitle: '실장 × ACE AI BUILD',
    description: '8주 동안 Problem Brief부터 Pilot 결과까지 실제 산출물을 쌓습니다.',
    libraryLine: '8주 동안 실제 업무도구 하나를 완성합니다.',
    note: '8-WEEK WORKBOOK',
    status: 'available',
    accent: '#3657d6',
    foreground: '#f3efe6',
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
      { name: 'Perplexity', role: '검색 기반 최신 정보 · 출처 확인 · 리서치' },
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
  '대화에서 실행까지, AI는 어떻게 달라지는가',
  '분야 별 핵심 AI 지도',
  '프로그램과 AI 시스템은 무엇으로 이루어지는가',
  'AI에게 프로젝트의 규칙과 도구를 어떻게 연결하는가',
  '이미 검증된 서비스에서 시작할 수 있다',
  '실제로 AI와 개발하는 방법',
  'The AI Build Map',
]
