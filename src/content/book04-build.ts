// BOOK 04 — BUILD. 8주 Executive × ACE 실행 워크북.
// Book 03에서 제품 유형과 첫 실험을 고른 뒤, 여기서는 실제 산출물을 순서대로 만든다.

export type WeekCert = { id: string; statement: string; ace?: boolean }

export type WeekData = {
  week: string
  phase: string
  title: string
  intent: string
  tasks: string[]
  deliverable: string
  prompt?: { label: string; text: string; tone?: 'light' | 'dark' | 'signal' }
  security?: boolean
  certs: WeekCert[]
}

export const weeks: WeekData[] = [
  {
    week: '01',
    phase: 'BUILD BRIEF',
    title: '선택한 문제와 제품을 한 장에 모은다',
    intent: 'Book 03에서 고른 Pain Point·제품 유형·첫 실험 범위를 실제 제작의 출발 문서로 고정하고, 나중에 효과를 비교할 현재 기준선도 함께 기록한다.',
    tasks: [
      '해결할 Pain Point와 사용자 확인',
      '선택한 제품 유형과 시작 방식 기록',
      '현재 업무 흐름과 가장 큰 마찰 지점 기록',
      'Baseline 기록: 업무 빈도 · 평균 소요 시간 · 오류/재작업',
      '첫 실험에서 확인할 핵심 흐름 1개 지정',
      '이번에 하지 않을 범위 명시',
    ],
    deliverable: 'Build Brief · 1 page + Baseline',
    prompt: {
      label: 'Build Brief를 만들 때',
      text: '지금까지 정한 Pain Point, 사용자, 현재 업무 흐름, 선택한 제품 유형, 시작 방식, 첫 실험 범위를 한 장의 Build Brief로 정리해줘. 현재 기준선으로 업무 빈도, 평균 소요 시간, 오류·재작업 정도도 함께 정리하고, 모르는 값은 추측하지 말고 TBD로 남겨줘. 내가 말하지 않은 요구사항은 추가하지 말고 빠진 결정은 질문으로 남겨줘.',
      tone: 'signal',
    },
    certs: [
      { id: 'b04-w01-a', statement: '나는 무엇을 왜 만들지 Build Brief 한 장으로 설명할 수 있다.' },
      { id: 'b04-w01-b', statement: '나는 첫 실험에서 할 것과 하지 않을 것을 구분했다.' },
      { id: 'b04-w01-c', statement: '나는 나중에 Pilot과 비교할 현재 업무의 Baseline을 기록했다.' },
    ],
  },
  {
    week: '02',
    phase: 'PRD',
    title: 'PRD로 제품 의도를 고정한다',
    intent: 'Build Brief를 바탕으로 왜 만들고, 누가 쓰고, 무엇이 성공인지 제품 요구사항으로 고정한다.',
    tasks: [
      'Problem · User · Current Workflow 작성',
      'Desired Outcome 작성',
      'Must-have와 Non-goal 구분',
      'Input · Output 정의',
      'Success Criteria 작성',
      'ACE와 빠진 의사결정 검토',
    ],
    deliverable: 'PRD.md',
    prompt: {
      label: 'PRD를 만들 때',
      text: '첨부한 Build Brief를 바탕으로 PRD 초안을 만들어줘. Problem / User / Current Workflow / Desired Outcome / Must-have / Non-goal / Input / Output / Success Criteria 순서로 작성하고, 빠진 판단은 임의로 채우지 말고 질문으로 남겨줘.',
      tone: 'signal',
    },
    certs: [
      { id: 'b04-w02-a', statement: '나는 PRD가 제품의 목적과 범위를 고정하는 문서라는 것을 실제 산출물로 확인했다.' },
      { id: 'b04-w02-b', statement: '나는 이번 버전에 넣을 것과 넣지 않을 것을 PRD에 명시했다.' },
    ],
  },
  {
    week: '03',
    phase: 'SPEC',
    title: 'PRD를 구현 가능한 SPEC으로 바꾼다',
    intent: 'PRD의 의도를 Builder가 작업할 수 있는 행동·화면·데이터·예외·검증 기준으로 구체화한다.',
    tasks: [
      '핵심 User Flow 작성',
      '화면·기능별 Behavior 정의',
      '필요 Data와 Sample Data 정의',
      '예외 상황과 Error State 작성',
      'Acceptance Criteria 작성',
      'SPEC → PLAN → TASKS로 작업 단위 생성',
    ],
    deliverable: 'SPEC.md + PLAN.md + TASKS.md',
    prompt: {
      label: 'PRD를 SPEC으로 바꿀 때',
      text: '첨부한 PRD를 구현용 SPEC으로 바꿔줘. User Flow / Behavior / Data / Exceptions / Acceptance Criteria를 작성하고, 그다음 PLAN과 실행 가능한 TASKS로 나눠줘. PRD에 없는 기능은 추가하지 마.',
      tone: 'signal',
    },
    certs: [
      { id: 'b04-w03-a', statement: '나는 PRD와 SPEC의 역할 차이를 실제 문서로 확인했다.' },
      { id: 'b04-w03-b', statement: '나는 Builder가 실행할 PLAN과 TASKS를 준비했다.' },
    ],
  },
  {
    week: '04',
    phase: 'PROTOTYPE',
    title: '샘플 데이터로 먼저 눈앞에 만든다',
    intent: '실제 데이터나 복잡한 연결 전에 핵심 화면과 사용자 흐름을 빠르게 만들어 직접 확인한다.',
    tasks: [
      'SPEC 기준 핵심 화면 또는 핵심 경험 생성',
      'Sample Data로 주요 상태 표현',
      '핵심 User Flow를 직접 눌러보기',
      '업무와 다른 지점 기록',
      '화면·흐름 수정 후 방향 확정',
    ],
    deliverable: 'Prototype V0.1',
    prompt: {
      label: 'Prototype을 만들 때',
      text: '첨부한 PRD와 SPEC을 기준으로 핵심 사용자 흐름을 먼저 눈앞에 볼 수 있는 Prototype으로 만들어줘. 지금은 Sample Data를 사용하고 실제 Database·로그인·사내 시스템 연결은 하지 마. 내가 직접 눌러볼 수 있게 만들어줘.',
    },
    certs: [
      { id: 'b04-w04-a', statement: '나는 실제 연결 전에 Prototype으로 화면과 흐름을 확인했다.' },
      { id: 'b04-w04-b', statement: '나는 직접 사용해보고 업무와 다른 지점을 찾아 수정했다.' },
    ],
  },
  {
    week: '05',
    phase: 'BUILD',
    title: 'Builder에 문서를 넘기고 핵심 기능을 만든다',
    intent: '확정한 문서와 범위·유지사항·참고자료·검증 기준을 Builder의 작업 맥락으로 넘기고 핵심 흐름이 실제로 작동하게 만든다.',
    tasks: [
      'DOCS · PRD · SPEC · PLAN · TASKS를 Builder에 제공',
      'SCOPE · 이번에 구현할 기능과 작업 범위 명시',
      'KEEP · Prototype에서 확정한 화면·흐름과 변경 금지 사항 명시',
      'REFERENCES · 필요한 화면 · 샘플 · 기존 코드 제공',
      'VERIFY · Build · Test · Acceptance Criteria 확인 기준 명시',
      '가장 중요한 기능부터 구현',
      '실제로 실행되는 MVP 확보',
    ],
    deliverable: 'MVP V0.2',
    prompt: {
      label: 'Builder에 넘길 때',
      text: '첨부한 PRD·SPEC·PLAN·TASKS와 확정된 Prototype을 기준으로 작업해. 이번 작업 범위는 [SCOPE]이고 [KEEP]은 바꾸지 마. 필요한 참고자료는 [REFERENCES]를 사용해. 문서에 없는 요구사항은 추가하지 말고 핵심 흐름이 실제로 작동하는 MVP까지만 구현해. 완료 후 Build/Test/Acceptance Criteria 검증 결과와 남은 TASKS를 보고해줘.',
    },
    certs: [
      { id: 'b04-w05-a', statement: '나는 기준 문서·범위·유지사항·참고자료·검증 기준을 Builder에 넘겼다.' },
      { id: 'b04-w05-b', statement: '나는 핵심 업무 흐름이 실제로 실행되는 것을 확인했다.' },
    ],
  },
  {
    week: '06',
    phase: 'CONNECT',
    title: '필요한 데이터와 시스템만 연결한다',
    intent: 'MVP에 실제 Database·API·Authentication·사내 시스템 연결이 필요한지 판단하고 승인 범위 안에서 진행한다.',
    tasks: [
      '실제 데이터 연결이 필요한 기능만 목록화',
      '필요한 Database · API · Authentication 확인',
      'M365 · SharePoint · Teams 등 연결 대상과 권한 확인',
      '보안·승인 조건 확인',
      '승인 전에는 합성·공개 데이터 유지',
    ],
    deliverable: 'Integration Plan 또는 승인된 연결',
    security: true,
    certs: [
      { id: 'b04-w06-a', statement: '나는 제품에 필요한 Frontend·Backend·Database·API 연결을 구분할 수 있다.' },
      { id: 'b04-w06-b', statement: '나는 승인 범위 안에서만 실제 데이터와 시스템을 연결한다.' },
    ],
  },
  {
    week: '07',
    phase: 'PILOT & FIX',
    title: '실제 업무에서 쓰고 오차만 고친다',
    intent: 'Actual User로 직접 사용하며 업무와 다른 지점을 기록하고 필요한 부분만 Targeted Fix한다.',
    tasks: [
      '실제 업무에서 직접 사용',
      '현행 업무와 다른 지점 기록',
      '빠진 기능 · 불필요한 기능 · 오류 구분',
      '중요도 순으로 Targeted Fix 요청',
      '수정 후 같은 업무 흐름으로 다시 검증',
    ],
    deliverable: 'Pilot Notes + V0.9',
    certs: [
      { id: 'b04-w07-a', statement: '나는 Actual User로 직접 써보고 업무 오차를 찾았다.' },
      { id: 'b04-w07-b', statement: '나는 전체를 다시 만들지 않고 필요한 부분만 Targeted Fix했다.' },
    ],
  },
  {
    week: '08',
    phase: 'DEMO & MEASURE',
    title: '결과와 다음 결정을 정리한다',
    intent: 'Pain Point·제품·효과·한계·다음 행동을 짧게 설명하고 Pilot 결과를 기존 방식과 비교한다.',
    tasks: [
      'Pain Point → Product → Result를 3분 Demo로 정리',
      'Week 01에 기록한 Baseline과 Pilot 결과 비교',
      '절감 시간 · 오류 · 재작업 등 확인',
      '현재 한계와 운영 조건 기록',
      '중단 / 추가 개선 / 확장 중 다음 행동 결정',
    ],
    deliverable: 'Working Demo + Pilot Result + Next Decision',
    certs: [
      { id: 'b04-w08-a', statement: '나는 Pain Point에서 제품 결과까지 3분 안에 설명할 수 있다.', ace: true },
      { id: 'b04-w08-b', statement: '나는 Pilot 결과를 Week 01 Baseline과 비교해 말할 수 있다.', ace: true },
      { id: 'b04-w08-c', statement: '나는 다음 단계가 중단·개선·확장 중 무엇인지 결정했다.', ace: true },
    ],
  },
]
