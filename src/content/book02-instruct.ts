// BOOK 02 — INSTRUCT. 편집 데이터(챕터 · 지시 구조 · 피드백 언어 · 프롬프트).
// 프롬프트/예시는 갱신 가능하도록 데이터로 분리한다.

export const book02Chapters = [
  '좋은 프롬프트보다 좋은 업무지시',
  'AI가 모르면 맥락을 준다',
  '모르면 캡처해서 물어본다',
  '나온 결과를 고친다',
  'AI에게 디자인을 시킨다',
  'AI에게 개발을 시킨다',
  '오류가 나면 AI와 같이 해결한다',
  '긴 프로젝트에서 AI를 관리한다',
]

// 좋은 업무지시의 6요소(매번 전부 필요하지는 않다).
export const instructionParts = [
  { en: 'GOAL', label: '목적', desc: '무엇을 이루려는가' },
  { en: 'BACKGROUND', label: '배경', desc: '왜 필요한가 · 어떤 상황인가' },
  { en: 'INPUT', label: '입력', desc: '어떤 자료·데이터로 시작하는가' },
  { en: 'OUTPUT', label: '원하는 결과', desc: '어떤 형태로 받고 싶은가' },
  { en: 'CONSTRAINTS', label: '제약조건', desc: '지켜야 할 한계·금지사항' },
  { en: 'CRITERIA', label: '판단 기준', desc: '무엇이 좋은 결과인가' },
]

// 결과를 통제하는 피드백 언어. 의도를 지키며 부분만 고치게 한다.
export const feedbackPhrases = [
  { phrase: '전체를 다시 만들지 마.', why: '멀쩡한 부분까지 새로 만드는 것을 막는다' },
  { phrase: '이 부분은 그대로 유지해.', why: '지켜야 할 것을 명시한다' },
  { phrase: '이것만 수정해.', why: '변경 범위를 좁힌다' },
  { phrase: '변경 전후를 먼저 설명해.', why: '바꾸기 전에 검토할 기회를 만든다' },
  { phrase: '내가 승인하기 전에는 삭제하지 마.', why: '되돌리기 어려운 손실을 막는다' },
]

// 캡처해서 물어보는 5단계.
export const captureSteps = [
  { en: 'CAPTURE', label: '화면을 캡처한다', desc: '지금 보고 있는 화면 그대로' },
  { en: 'ATTACH', label: '그대로 첨부한다', desc: '요약하지 말고 이미지로' },
  { en: 'GOAL', label: '목표를 말한다', desc: '지금 무엇을 하려는지' },
  { en: 'CONFUSION', label: '막힌 지점을 말한다', desc: '무엇이 헷갈리는지' },
  { en: 'ONE STEP', label: '한 단계만 요청한다', desc: '지금 해야 할 딱 한 가지' },
]

// AI에게 디자인을 시킬 때 담는 요소.
export const designBrief = [
  { en: 'USER', label: '사용자', desc: '누가 · 어떤 상황에서 쓰는가' },
  { en: 'GOAL', label: '목표', desc: '이 화면에서 무엇을 해내야 하는가' },
  { en: 'HIERARCHY', label: '정보 위계', desc: '가장 먼저 보여야 할 정보' },
  { en: 'ACTIONS', label: '원하는 행동', desc: '어떤 버튼·동작이 필요한가' },
  { en: 'REFERENCE', label: '레퍼런스', desc: '참고할 구조·흐름' },
  { en: 'CONSTRAINTS', label: '제약', desc: '샘플 데이터 · Prototype 등 범위' },
]

// 개발을 시킬 때의 5단계(바로 코드 수정 금지).
export const devStages = [
  { en: 'INSPECT', label: '분석', desc: '현재 구조부터 파악' },
  { en: 'PLAN', label: '계획', desc: '변경 대상 파일과 작업 순서 제시' },
  { en: 'IMPLEMENT', label: '구현', desc: '합의된 범위만 변경' },
  { en: 'VERIFY', label: '검증', desc: '작동 여부 확인 · 테스트' },
  { en: 'REPORT', label: '보고', desc: '무엇을 왜 바꿨는지 설명' },
]

// 오류를 함께 해결할 때 AI에게 주는 정보(기억으로 요약하지 말 것).
export const errorInputs = [
  { en: 'EXPECTED', label: '기대한 것', desc: '무엇이 일어나야 했는가' },
  { en: 'HAPPENED', label: '실제 일어난 것', desc: '대신 무엇이 일어났는가' },
  { en: 'SCREENSHOT', label: '화면', desc: '오류가 보이는 화면 캡처' },
  { en: 'ERROR TEXT', label: '정확한 오류 문구', desc: '원문 그대로 복사' },
  { en: 'RECENT', label: '직전 행동', desc: '무엇을 한 직후에 났는가' },
]

// 긴 프로젝트에서 AI를 관리하는 축.
export const projectManagement = [
  { en: 'INSTRUCTIONS', label: 'CLAUDE.md · AGENTS.md', desc: '프로젝트 목적·규칙을 계속 기억하게' },
  { en: 'CHECKPOINT', label: '체크포인트', desc: '의미 있는 지점마다 저장' },
  { en: 'SCOPE', label: '범위', desc: '이번에 건드릴 것과 아닌 것' },
  { en: 'DO NOT CHANGE', label: '"바꾸지 마"', desc: '지켜야 할 확정 사항 명시' },
  { en: 'TESTS', label: '테스트', desc: '망가지지 않았는지 확인 기준' },
  { en: 'HANDOFF', label: '핸드오프', desc: '다음 대화로 맥락 넘기기' },
]
