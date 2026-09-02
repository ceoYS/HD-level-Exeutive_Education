// BOOK 04 — BUILD. 8주 Executive × ACE 워크북 데이터.
// 실장이 실제로 사용하는 워크북. 자기인증은 지식 퀴즈가 아니라 "지금 직접 할 수 있다"의 확인.

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
    phase: 'PROBLEM',
    title: '문제를 내 말로 정의한다',
    intent: '해결하고 싶은 업무 문제를 실장 자신의 언어로 정리한다. 도구를 고르기 전에 현재 업무부터 본다.',
    tasks: [
      '현재 어떤 일이 불편한가?',
      '누가 그 불편을 겪는가?',
      '얼마나 자주 발생하는가?',
      '지금은 어떻게 해결하고 있는가?',
      '개선되면 무엇이 달라지는가?',
    ],
    deliverable: 'Problem Brief · 한 장',
    prompt: {
      label: '문제를 구조화할 때',
      text: '내가 겪는 업무 불편을 설명할게. 이걸 문제 정의로 정리해줘: 누가·언제·얼마나 자주 겪는지, 지금의 해결 방식, 개선 시 기대 효과로 나눠서. 내 표현을 바꾸지 말고 구조만 잡아줘.',
    },
    certs: [
      { id: 'b04-w01-a', statement: '나는 해결하고 싶은 업무 문제를 내 말로 설명할 수 있다.' },
      { id: 'b04-w01-b', statement: '나는 현재 업무 방식의 문제점을 설명할 수 있다.' },
      { id: 'b04-w01-c', statement: '나는 이 문제가 해결됐을 때 기대하는 결과를 설명할 수 있다.' },
    ],
  },
  {
    week: '02',
    phase: 'OUTCOME',
    title: '완성 기준을 한 장으로 정리한다',
    intent: '사용자·원하는 결과·성공 기준·이번에 하지 않을 것(non-goal)을 한 장에 정리한다.',
    tasks: [
      '사용자는 누구인가?',
      '원하는 결과(Outcome)는 무엇인가?',
      '입력: 무엇으로 시작하는가?',
      '출력: 무엇을 받는가?',
      '성공 기준: 무엇을 보면 성공인가?',
      'Non-goal: 이번에 하지 않을 것은?',
    ],
    deliverable: 'One-page Product Intent',
    prompt: {
      label: '의도를 한 장으로',
      text: '이 도구의 사용자·원하는 결과·입력·출력·성공 기준·하지 않을 것을 한 장으로 정리해줘. 각 항목은 한두 문장으로. 애매한 부분은 나에게 질문으로 되물어줘.',
    },
    certs: [
      { id: 'b04-w02-a', statement: '나는 이 도구의 사용자와 원하는 결과를 한 문장으로 말할 수 있다.' },
      { id: 'b04-w02-b', statement: '나는 무엇이 성공이고 무엇을 하지 않을지(non-goal) 구분할 수 있다.' },
    ],
  },
  {
    week: '03',
    phase: 'CHOOSE',
    title: '형태와 시작 방식을 정한다',
    intent: 'Book 03의 진단을 활용해 솔루션 타입과 시작 방식을 정하고 참고할 사례를 모은다.',
    tasks: [
      'Book 03 Decision Diagnostic으로 타입 후보 확인',
      '타입 결정: Custom AI / Web·App / Automation / Agent',
      '시작 방식 결정: Blank / Reference / Existing-workflow',
      '참고할 화면·서비스 2–3개 수집',
    ],
    deliverable: 'Solution Direction',
    certs: [
      { id: 'b04-w03-a', statement: '나는 이 문제를 어떤 솔루션 타입으로 풀지 정하고 이유를 말할 수 있다.' },
      { id: 'b04-w03-b', statement: '나는 어떤 방식으로 시작할지(Blank/Reference/Existing) 정했다.' },
    ],
  },
  {
    week: '04',
    phase: 'PROTOTYPE',
    title: '첫 화면을 만든다',
    intent: '샘플 데이터로 첫 번째 가시 버전을 만들고 직접 눌러보며 흐름을 확인한다.',
    tasks: [
      '핵심 화면 1개를 Prototype으로 생성',
      '샘플 데이터로 사용자 흐름 확인',
      '실장이 직접 조작해본다',
      '문제를 최소 1개 찾는다',
      '수정 1건을 직접 요청한다',
    ],
    deliverable: 'V0.1 (Prototype)',
    prompt: {
      label: 'Prototype만 만들 때',
      text: '지금은 Prototype만 만든다. 실제 데이터·로그인·Database는 연결하지 마. 첨부한 방향대로 핵심 화면 하나를 샘플 데이터로 만들어서, 내가 흐름을 눌러볼 수 있게 해줘.',
      tone: 'signal',
    },
    certs: [
      { id: 'b04-w04-a', statement: '나는 만들어진 Prototype을 직접 써보고, 무엇이 부족한지 지적할 수 있다.' },
      { id: 'b04-w04-b', statement: '나는 AI에게 최소 한 가지 개선을 직접 요청했다.' },
    ],
  },
  {
    week: '05',
    phase: 'BUILD',
    title: '핵심 흐름을 구현한다',
    intent: '가장 중요한 업무 흐름 하나가 실제로 작동하도록 만든다. 무엇부터 구현할지는 실장이 정한다.',
    tasks: [
      '가장 중요한 기능 1–2개를 실장이 선택',
      '승인된 화면·흐름은 유지',
      '핵심 흐름을 구현',
      '각 단계가 실제로 작동하는지 확인',
    ],
    deliverable: 'V0.2 (핵심 흐름 작동)',
    prompt: {
      label: '우선순위를 지시할 때',
      text: '확정된 화면과 흐름은 그대로 유지해. 이번에는 [가장 중요한 기능]만 실제로 작동하게 구현하고, 나머지는 아직 손대지 마. 끝나면 무엇을 했는지 짧게 보고해줘.',
    },
    certs: [
      { id: 'b04-w05-a', statement: '나는 어떤 기능이 가장 먼저 필요한지 정하고 그 이유를 설명할 수 있다.' },
      { id: 'b04-w05-b', statement: '나는 핵심 업무 흐름이 실제로 작동하는 것을 확인했다.' },
    ],
  },
  {
    week: '06',
    phase: 'CONNECT',
    title: '실제 데이터 연결을 판단한다',
    intent: '실제 데이터·시스템 연결이 필요한지 판단한다. 필요하면 보안과 승인 조건부터 확인하고, 그전에는 합성 데이터를 쓴다.',
    tasks: [
      '실제 데이터·시스템 연결이 정말 필요한지 판단',
      '필요한 연결 목록화 (예: M365 · SharePoint · Teams — 모두 승인 대상)',
      '보안·승인 체크리스트 확인',
      '승인 전에는 합성·공개 데이터로 계속 진행',
    ],
    deliverable: '연결된 프로토타입 또는 통합 계획서',
    security: true,
    certs: [
      { id: 'b04-w06-a', statement: '나는 실제 데이터 연결이 필요한지 판단하고, 필요한 승인이 무엇인지 말할 수 있다.' },
      { id: 'b04-w06-b', statement: '나는 승인 전에는 외부 실험에 합성·공개 데이터를 써야 함을 안다.' },
    ],
  },
  {
    week: '07',
    phase: 'PILOT',
    title: '실제 업무에서 써본다',
    intent: '실제 업무에서 파일럿하고, 작동한 부분과 불편한 부분을 기록한다.',
    tasks: [
      '실제 업무에서 한 주 사용',
      '작동한 것을 기록',
      '실패한 것을 기록',
      '혼란스러웠던 것을 기록',
      '제거해도 될 것을 기록',
    ],
    deliverable: 'Pilot Notes + V0.9',
    certs: [
      { id: 'b04-w07-a', statement: '나는 이 도구를 실제 업무에서 직접 사용해봤다.' },
      { id: 'b04-w07-b', statement: '나는 무엇이 작동하고 무엇이 부족한지 근거를 들어 말할 수 있다.' },
    ],
  },
  {
    week: '08',
    phase: 'DEMO',
    title: '3분으로 설명한다',
    intent: '문제부터 결과와 다음 행동까지 3분 안에 설명할 수 있도록 정리한다.',
    tasks: [
      '원래 문제는 무엇이었나',
      '왜 이 솔루션 타입을 골랐나',
      'AI를 어떻게 활용했나',
      '내가 직접 한 것은 무엇인가',
      '업무가 어떻게 달라지나',
      '한계는 무엇인가',
      '다음 행동은 무엇인가',
    ],
    deliverable: 'Working Demo + 3분 스토리',
    certs: [
      { id: 'b04-w08-a', statement: '나는 이 도구로 실제 업무 문제를 해결했고, 그 과정을 3분 안에 설명할 수 있다.', ace: true },
      { id: 'b04-w08-b', statement: '나는 AI가 한 일과 내가 직접 판단·결정한 일을 구분해 설명할 수 있다.', ace: true },
      { id: 'b04-w08-c', statement: '나는 이 도구의 한계와 다음 개선 방향을 말할 수 있다.', ace: true },
    ],
  },
]
