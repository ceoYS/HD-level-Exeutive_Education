// BOOK 02 — INSTRUCT. 대화를 구현 가능한 문서와 작업 맥락으로 바꾸는 법.
// 캡처·디버깅·부분 수정은 독립 챕터가 아니라 필요한 순간 쓰는 보조 수단으로 다룬다.

export const book02Chapters = [
  '좋은 프롬프트보다 좋은 업무지시',
  'AI가 모르는 맥락을 채운다',
  '대화를 Problem Intent로 구조화한다',
  '요구사항을 PRD로 고정한다',
  'PRD를 SPEC으로 바꾼다',
  'Builder에 작업 맥락을 넘긴다',
  '검토하고 필요한 부분만 고친다',
  '긴 프로젝트의 맥락을 유지한다',
]

export const instructionParts = [
  { en: 'GOAL', label: '목적', desc: '무엇을 이루려는가' },
  { en: 'BACKGROUND', label: '배경', desc: '왜 필요한가 · 어떤 상황인가' },
  { en: 'INPUT', label: '입력', desc: '어떤 자료·데이터로 시작하는가' },
  { en: 'OUTPUT', label: '원하는 결과', desc: '어떤 형태로 받고 싶은가' },
  { en: 'CONSTRAINTS', label: '제약', desc: '지켜야 할 범위·금지사항' },
  { en: 'CRITERIA', label: '판단 기준', desc: '무엇이 좋은 결과인가' },
]

export const contextPack = [
  { en: 'WHO', label: '사용자·독자', desc: '누가 결과를 쓰거나 보는가' },
  { en: 'WHEN', label: '사용 상황', desc: '언제 어떤 업무에서 쓰는가' },
  { en: 'CURRENT', label: '현재 방식', desc: '지금은 어떻게 일하고 있는가' },
  { en: 'MATERIALS', label: '근거 자료', desc: '기존 문서·파일·예시·데이터' },
  { en: 'BOUNDARY', label: '경계', desc: '이번에 건드릴 것과 건드리지 않을 것' },
]

export const problemIntentParts = [
  { en: 'PAIN', label: 'Pain Point', desc: '어디에서 시간·오류·재작업이 생기는가' },
  { en: 'USER', label: 'User', desc: '누가 가장 직접적으로 겪는가' },
  { en: 'WORKFLOW', label: 'Current Workflow', desc: '현재 업무가 어떤 순서로 돌아가는가' },
  { en: 'OUTCOME', label: 'Desired Outcome', desc: '무엇이 달라지면 해결된 것인가' },
]

export const prdParts = [
  { en: 'PROBLEM', label: 'Problem', desc: '해결하려는 문제' },
  { en: 'USER', label: 'User', desc: '사용자와 사용 상황' },
  { en: 'OUTCOME', label: 'Desired Outcome', desc: '도구가 만들어야 할 변화' },
  { en: 'MUST-HAVE', label: 'Must-have', desc: '이번 버전에 꼭 필요한 것' },
  { en: 'NON-GOAL', label: 'Non-goal', desc: '이번에는 하지 않을 것' },
  { en: 'I/O', label: 'Input / Output', desc: '무엇을 넣고 무엇을 받는가' },
  { en: 'SUCCESS', label: 'Success Criteria', desc: '무엇을 보면 성공인지' },
]

export const specParts = [
  { en: 'FLOW', label: 'User Flow', desc: '사용자가 어떤 순서로 움직이는가' },
  { en: 'BEHAVIOR', label: 'Behavior', desc: '화면·기능이 어떻게 동작하는가' },
  { en: 'DATA', label: 'Data', desc: '어떤 데이터가 필요하고 어떻게 보이는가' },
  { en: 'EXCEPTION', label: 'Exceptions', desc: '실패·빈 값·예외 상황을 어떻게 처리하는가' },
  { en: 'ACCEPTANCE', label: 'Acceptance Criteria', desc: '구현 완료를 어떻게 확인할 것인가' },
]

export const builderHandoff = [
  { en: 'DOCS', label: 'PRD · SPEC · PLAN · TASKS', desc: '구현의 기준 문서' },
  { en: 'SCOPE', label: '이번 작업 범위', desc: '지금 구현할 기능과 파일' },
  { en: 'KEEP', label: '유지할 것', desc: '이미 확정되어 바꾸지 않을 부분' },
  { en: 'REFERENCES', label: '참고 자료', desc: '필요한 화면·샘플·기존 코드' },
  { en: 'VERIFY', label: '검증 기준', desc: 'Build · Test · Acceptance Criteria' },
]

export const reviewInputs = [
  { en: 'DOC CHECK', label: '문서와 비교', desc: 'PRD·SPEC에서 벗어난 것이 있는가' },
  { en: 'TEST', label: '자동 검증', desc: 'Build · Test · Lint 등으로 깨진 곳 확인' },
  { en: 'USE', label: '직접 사용', desc: '실제 업무 순서와 다른 곳 확인' },
  { en: 'EVIDENCE', label: '오류 증거', desc: '필요하면 화면·오류 원문·재현 순서를 그대로 제공' },
  { en: 'TARGET', label: '수정 범위', desc: '유지할 것과 바꿀 것을 분리해 요청' },
]

export const projectManagement = [
  { en: 'INSTRUCTIONS', label: 'CLAUDE.md · AGENTS.md', desc: '프로젝트 목적과 규칙을 계속 이어가기' },
  { en: 'CHECKPOINT', label: '체크포인트', desc: '의미 있는 지점마다 저장' },
  { en: 'SCOPE', label: '범위', desc: '이번에 건드릴 것과 아닌 것' },
  { en: 'DECISIONS', label: '확정된 결정', desc: '다시 뒤집지 않을 사항을 기록' },
  { en: 'TESTS', label: '테스트', desc: '망가지지 않았는지 확인할 기준' },
  { en: 'HANDOFF', label: '핸드오프', desc: '다음 대화에 현재 상태와 결정을 넘기기' },
]
