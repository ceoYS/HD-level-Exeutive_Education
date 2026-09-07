// 03 HDEC CONTEXT · Diagram copy and labels. These are educational target concepts, not official EA definitions.

export const contextCover = {
  title: 'AI가 현대건설을 제대로 이해하려면 무엇이 필요한가?',
  badge: '교육용 청사진 · TARGET CONCEPT',
  chapters: [
    '데이터는 많은데, AI는 회사를 모른다',
    'H-MAP이 업무의 지도가 된다',
    'NOW → TARGET',
    '회사에서 나에게까지',
  ],
} as const

export const dataContext = {
  eyebrow: 'VISUAL A · DATA ≠ CONTEXT',
  title: '데이터가 있다는 것과 AI가 회사의 맥락으로 이해한다는 것은 다릅니다.',
  systems: ['Autoway', 'H-MAP', 'HSP', 'ERP', '현장'],
  records: ['계약서', '보고서', '도면', '사진', '회의기록'],
  axes: [
    { label: '저장 구조', start: '정형', end: '비정형' },
    { label: '드러난 정도', start: '명시지', end: '암묵지' },
  ],
  distinction: '암묵지 ≠ 비정형',
  recorded: '이미 기록된 것 · 계약서 / 보고서 / ERP / 도면',
  recordedResult: 'AI 활용 가능',
  tacit: '사람 머릿속 · 경험 / 판단기준 / 노하우',
  tacitBridge: '대화 / 기록 / Decision Log',
  tacitResult: 'AI가 활용 가능한 형태',
} as const

export const relationship = {
  eyebrow: 'VISUAL B · RELATIONSHIP',
  title: 'H-MAP이 업무의 지도가 된다',
  projectLabel: 'B-1 · 하나의 Project 안에서',
  companyLabel: 'B-2 · Project를 넘어 회사 전체로',
  projectNodes: ['계약', '설계', '구매', '공정', '원가', '품질', '안전', 'Claim', '담당조직', '현장'],
  companyBands: [
    '외부 · 뉴스 / 정책 / 법규 / 시장',
    '전사 · 사업성 / 원가 / Risk / 품질 / 안전',
  ],
  companyLinks: ['본부 ↔ 본부', '부서 ↔ 부서', '본사 ↔ 현장', '현장 ↔ 현장'],
  traceLabel: 'TRACE · 뉴스 하나가 어디까지 닿는가',
  trace: ['NEWS', '국가', '사업', 'Project', '계약', '원가 / 공기 / Risk', '관련 조직'],
  replay: '다시 보기',
  legendTitle: '이 교육에서 이해하기 위한 개념적 역할',
  legend: [
    'H-MAP = 업무의 지도 · 업무 흐름 · 조직 간 업무관계 Context',
    'HSP / ERP = 회사의 주요 사실 및 업무 데이터',
    'Autoway = 문서 및 업무 지식이 축적된 공간',
  ],
} as const

export const nowTarget = {
  eyebrow: 'VISUAL C · NOW → TARGET',
  title: 'MCP / API는 AI의 지능이 아니라, AI가 필요한 정보와 시스템에 접근하기 위한 연결 통로입니다.',
  systems: ['H-MAP', 'HSP', 'ERP', 'Autoway', 'Field Data'],
  nowFlows: ['개별 파일 → AI → 결과', '개별 업무 → AI → 결과', '개별 Use Case → AI → 결과'],
  context: ['데이터', '관계', '업무 Context', '조직 Context', '접근권한'],
  conclusion: '다음 단계는 데이터 보유에서 맥락 연결로 가는 것입니다.',
} as const

export const contextZoom = {
  eyebrow: 'VISUAL D · ZOOM-IN',
  title: '회사에서 나에게까지',
  rings: ['현대건설 전체 Context', '본부 Context', '부서 Context', '업무 Context', '개인 Context', '맞춤형 AI Agent'],
  flow: '전사 → 본부 → 부서 → 업무 → 개인 → 맞춤형 AI Agent',
} as const

export const contextBridge = {
  eyebrow: 'BRIDGE · 회사 전체에서 내 업무 하나로',
  title: '이제 회사 전체에서 내 업무 하나로 내려와 봅시다.',
  company: '회사 전체',
  inputs: ['DATA', 'RELATIONSHIP', 'CONTEXT'],
  zoom: 'ZOOM-IN',
  work: '내 업무 하나',
  nextLead: '이 질문에 답한 결과물이 어떤 모습인지 먼저 봅니다.',
} as const
