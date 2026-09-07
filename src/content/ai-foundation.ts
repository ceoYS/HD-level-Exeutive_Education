// 01 AI · AI / DATA FOUNDATION. AI CORE와 원문 CH 01 사이에 들어가는 신규 4 Visual의 카피.
// 원문(CONTENT LOCK) 바깥의 추가 문자열이며 review/content-lock/approved-new.txt [N]에 등록한다.
// 공학 강의가 아니라 실장급 의사결정에 필요한 추상화 수준까지만 다룬다.

export const trainingVsUse = {
  eyebrow: 'AI FOUNDATION · TRAINING vs USE',
  title: ["AI를 만드는 '학습'과,", "AI를 사용하는 '대화'는 다릅니다."],
  make: {
    label: 'AI를 만드는 단계',
    data: { name: 'TRAINING DATA', note: '텍스트 · 코드 · 이미지 · 음성 · 영상' },
    compute: 'COMPUTE',
    steps: [
      { name: 'PRE-TRAINING', note: '대규모 데이터에서 패턴을 학습' },
      { name: 'FOUNDATION MODEL', note: '학습 결과가 모델의 Parameters에 반영' },
      { name: 'POST-TRAINING', note: '지시 · 예시 · 사람의 Feedback' },
    ],
    result: 'ASSISTANT',
  },
  use: {
    label: 'AI를 사용하는 단계',
    inputs: ['질문', '지시', '업무 데이터', '맥락'],
    step: 'INFERENCE',
    result: 'RESULT',
  },
  takeaway: ['AI를 만드는 학습과', 'AI를 사용하는 대화는 서로 다른 단계입니다.'],
  support: '문서를 대화에 넣는 것은 보통 Base Model을 다시 학습시키는 것이 아니라, 현재 작업에 필요한 정보를 맥락으로 제공하는 것입니다.',
} as const

export const dataRoles = {
  eyebrow: 'DATA · DIFFERENT ROLES',
  title: ["AI에서 '데이터'는", '한 종류가 아닙니다.'],
  axis: { ko: 'DATA의 역할', en: 'ROLE OF DATA', hint: 'AI 시스템에서 어떤 역할을 하는가' },
  hub: 'AI SYSTEM',
  recap: 'REMEMBER',
  roles: [
    { key: 'training', name: 'TRAINING DATA', short: 'TRAINING DATA', role: '모델의 기본 능력을 만드는 데이터', examples: '웹 · 책 · 코드 · 이미지', memory: 'AI의 기본 능력을 만든다' },
    { key: 'context', name: 'CONTEXT DATA', short: 'CONTEXT DATA', role: '지금 이 일을 이해하는 데 쓰는 정보', examples: 'Prompt · 첨부문서 · 예시 · 조건', memory: '지금 일을 설명한다' },
    { key: 'retrieval', name: 'RETRIEVAL / REFERENCE DATA', short: 'RETRIEVAL DATA', role: '필요할 때 찾아오는 외부 지식', examples: '사내문서 · 규정 · 과거 사례 · DB', memory: '필요한 지식을 찾아준다' },
    { key: 'operational', name: 'OPERATIONAL DATA', short: 'OPERATIONAL DATA', role: '지금 시스템의 현재 상태를 알려주는 정보', examples: 'ERP · 일정 · 원가 · 승인상태 · Sensor', memory: '현재 상황을 알려준다' },
    { key: 'feedback', name: 'FEEDBACK DATA', short: 'FEEDBACK DATA', role: '결과를 평가하고 개선하는 정보', examples: '수정 · 평가 · 승인 · 실제 결과', memory: '평가와 개선의 근거가 된다' },
  ],
} as const

export const aiReady = {
  eyebrow: 'DATA · AI-READY',
  title: ['데이터가 많다고', 'AI가 잘 쓰는 것은 아닙니다.'],
  formsAxis: { ko: 'DATA의 형태', en: 'FORM OF DATA', hint: '데이터가 어떤 형태로 존재하는가' },
  forms: [
    ['STRUCTURED', 'ERP · 원가 · 일정 · 수치'],
    ['SEMI-STRUCTURED', 'Form · JSON · Log · 속성정보'],
    ['UNSTRUCTURED', '계약서 · 보고서 · 메일 · 회의록 · 도면'],
    ['MULTIMODAL', '사진 · 영상 · 음성 · Sensor'],
  ],
  layers: [
    { name: 'CONTENT', question: '무슨 정보가 있는가' },
    { name: 'IDENTITY / METADATA', question: '무엇에 대한 정보인가', detail: '언제 · 누가 · 어떤 버전인가' },
    { name: 'RELATIONSHIP', question: '무엇과 연결되어 있는가' },
    { name: 'CONTEXT', question: '업무에서 어떤 의미인가' },
    { name: 'PERMISSION', question: '누가 접근할 수 있는가' },
    { name: 'QUALITY / FRESHNESS', question: '정확한가 · 최신인가' },
  ],
  result: 'AI-READY DATA / CONTEXT',
  statement: '정형화되어 있다는 것과, AI가 업무의 의미와 관계를 이해할 수 있다는 것은 다른 문제입니다.',
  pump: {
    center: 'P-101 PUMP',
    nodes: ['설계도면', '시방서', '구매계약', '검사기록', '정비기록', '현장사진', 'Claim'],
    human: ['사람은 서로 다른 문서를 보고', '“같은 Pump에 대한 정보”라고 연결할 수 있습니다.'],
    ai: ['AI가 안정적으로 같은 관계를 활용하려면', '대상 식별과 관계, 업무 맥락이 함께 필요합니다.'],
    equation: ['DATA', 'RELATIONSHIP', 'CONTEXT'],
    note: '데이터는 관계와 업무 맥락이 연결될 때 AI가 활용할 수 있는 업무 정보가 됩니다.',
  },
  tacit: {
    eyebrow: 'SUPPORT',
    label: '암묵지 ≠ 비정형 데이터',
    recorded: { label: '이미 기록된 것', items: ['계약서', '보고서', 'ERP', '도면'], result: 'AI가 접근 가능한 정보가 될 수 있음' },
    mind: {
      label: '사람 머릿속',
      items: ['경험', '판단기준', '노하우'],
      result: '그 자체로는 아직 Data가 아님',
      bridge: ['대화', '기록', 'Annotation', 'Decision Log'],
      final: 'AI가 활용 가능한 형태',
    },
  },
} as const

export const knowledge = {
  eyebrow: 'KNOWLEDGE · MODEL vs COMPANY',
  title: ['똑똑한 AI가', '우리 회사를 자동으로 아는 것은 아닙니다.'],
  model: { name: 'MODEL KNOWLEDGE', lead: '사전학습된 일반 지식', note: '언어 · 패턴 · 일반상식' },
  company: [
    { name: 'CONTEXT', items: ['지금의 질문', 'Project', '역할', '목적', '조건'] },
    { name: 'RETRIEVAL', items: ['사내 문서', '규정', '과거 사례', '계약'] },
    { name: 'TOOLS / SYSTEMS', items: ['ERP', 'H-MAP', 'API', '검색', '계산', '실행'] },
  ],
  result: 'BUSINESS RESULT',
  statement: ['모델이 가진 일반 지식과,', '회사가 가진 업무 지식은 다릅니다.'],
  limitsEyebrow: 'AI LIMITS → SYSTEM DESIGN',
  limits: [
    ['생성', '사실 보장'],
    ['긴 Context', '모든 정보의 완전한 활용'],
    ['일반 지식', '우리 회사의 최신 지식'],
    ['접근 가능', '접근 권한 보유'],
  ],
  therefore: '그래서',
  design: ['SOURCE', 'CONTEXT', 'RETRIEVAL', 'TOOL', 'RULE', 'HUMAN CHECK'],
  bridge: ['그렇다면,', '이런 AI는 실제 업무에서', '어떤 형태로 사용하게 될까요?'],
} as const
