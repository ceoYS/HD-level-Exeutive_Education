// BOOK 05 — APPLY. 8주 Build 이후 실제 업무에서 계속 쓰고 고치는 실전 Playbook.
// Book 04의 제작 절차를 반복하지 않고, 현업에서 자주 마주치는 수정·검토·인계 상황만 다룬다.

export type MissionData = {
  number: string
  title: string
  goal: string
  minutes?: string
  steps: string[]
  prompt?: { label: string; text: string; tone?: 'light' | 'dark' | 'signal' }
  screenshot?: { tool: string; purpose: string; description: string; annotation: string }
  cert: { id: string; statement: string }
  note?: string
}

export const missions: MissionData[] = [
  {
    number: '01',
    title: '캡처로 현재 상태를 보여주기',
    goal: '말로 길게 설명하지 않고 실제 화면을 기준으로 수정 지점을 전달한다.',
    minutes: '3분',
    steps: [
      '문제가 보이는 화면을 그대로 캡처한다.',
      '어느 부분이 문제인지 한두 곳만 표시한다.',
      '현재 동작과 원하는 동작을 각각 한 문장으로 적는다.',
      'AI에게 캡처에서 확인되지 않는 내용은 추측하지 말라고 지시한다.',
    ],
    prompt: {
      label: '화면을 기준으로 수정할 때',
      text: '첨부한 화면을 기준으로 봐줘. 현재는 [현재 동작]이고, 원하는 것은 [원하는 동작]이야. 표시한 부분만 확인하고 화면에서 알 수 없는 내용은 추측하지 마. 먼저 수정 범위를 한 줄로 정리해줘.',
      tone: 'signal',
    },
    cert: { id: 'b05-m01', statement: '나는 화면 캡처를 근거로 수정 지점을 정확히 전달할 수 있다.' },
  },
  {
    number: '02',
    title: '오류 원문으로 원인 찾기',
    goal: '오류를 요약해서 전달하지 않고 재현 조건과 원문을 그대로 줘서 원인을 찾게 한다.',
    minutes: '5분',
    steps: [
      '오류 메시지 전체를 복사한다.',
      '오류가 발생하기 직전에 한 행동을 적는다.',
      '원래 기대했던 결과를 한 문장으로 적는다.',
      '바로 고치게 하기 전에 가능한 원인과 확인 순서를 먼저 요청한다.',
      '수정 후 같은 방법으로 다시 재현해 검증한다.',
    ],
    prompt: {
      label: '오류를 잡을 때',
      text: '아래는 실제 오류 원문이야. 발생 직전에는 [행동]을 했고, 기대한 결과는 [기대 결과]였어. 먼저 가능한 원인을 우선순위로 정리하고 어떤 파일·로그·상태를 확인할지 말해줘. 확인 없이 추측해서 여러 파일을 바꾸지 마.',
    },
    cert: { id: 'b05-m02', statement: '나는 오류 원문과 재현 조건을 이용해 AI가 추측하지 않게 디버깅시킬 수 있다.' },
  },
  {
    number: '03',
    title: '바꿀 것과 유지할 것을 같이 말하기',
    goal: '수정 범위를 좁혀 이미 잘 작동하는 부분이 같이 흔들리지 않게 한다.',
    minutes: '3분',
    steps: [
      '이번에 바꿀 부분을 한 문장으로 적는다.',
      '반드시 유지해야 할 화면·기능·문구를 같이 적는다.',
      '전체 재설계나 관련 없는 개선은 하지 말라고 범위를 고정한다.',
      '수정 후 바뀐 파일과 검증 결과만 보고받는다.',
    ],
    prompt: {
      label: 'Targeted Fix를 요청할 때',
      text: '전체를 다시 만들지 마. 이번에는 [바꿀 부분]만 수정해. [유지할 부분]은 그대로 두고 관련 없는 리팩터링이나 기능 추가는 하지 마. 수정 후 변경한 파일과 같은 흐름으로 다시 검증한 결과만 알려줘.',
      tone: 'signal',
    },
    cert: { id: 'b05-m03', statement: '나는 변경 범위와 유지 범위를 함께 지정해 Targeted Fix를 요청할 수 있다.' },
  },
  {
    number: '04',
    title: 'Reviewer로 다시 보기',
    goal: 'Builder가 만든 결과를 같은 Agent의 자기평가에만 맡기지 않고 다른 관점에서 검토한다.',
    minutes: '10분',
    steps: [
      'PRD·SPEC 또는 이번 변경 요청을 Reviewer에게 제공한다.',
      '구현 결과가 요구사항을 지켰는지 먼저 본다.',
      '오류 가능성·누락된 Acceptance Criteria·예상치 못한 변경만 찾게 한다.',
      '새 기능 아이디어는 Review에서 제외한다.',
      '중요한 지적만 Builder에게 다시 전달한다.',
    ],
    prompt: {
      label: '독립 검토를 시킬 때',
      text: '이 구현을 Reviewer 관점에서 검토해줘. 기준은 첨부한 요구사항과 Acceptance Criteria야. 문서와 다른 동작, 오류 가능성, 빠진 검증, 범위 밖 변경만 찾아줘. 새로운 기능 제안이나 전체 재설계 제안은 하지 마.',
    },
    cert: { id: 'b05-m04', statement: '나는 Builder와 Reviewer의 역할을 분리해 구현 결과를 검토할 수 있다.' },
  },
  {
    number: '05',
    title: '긴 작업을 Checkpoint로 이어가기',
    goal: '대화가 길어지거나 담당 Agent가 바뀌어도 결정과 현재 상태가 사라지지 않게 한다.',
    minutes: '5분',
    steps: [
      '현재 목표와 이번 범위를 한 줄로 남긴다.',
      '완료한 작업·남은 작업·중요한 결정 사항을 정리한다.',
      '현재 Build/Test 상태와 알려진 문제를 기록한다.',
      '다음 Agent가 먼저 읽어야 할 파일과 다음 작업을 적는다.',
      '새 세션에서는 Checkpoint부터 읽고 작업하게 한다.',
    ],
    prompt: {
      label: '작업을 인계할 때',
      text: '지금까지의 작업을 다음 세션이 바로 이어갈 수 있는 Checkpoint로 정리해줘. Goal / Scope / Completed / Decisions / Current Build-Test Status / Known Issues / Next Tasks / Files to Read 순서로 작성하고, 아직 확인하지 않은 것은 확인했다고 쓰지 마.',
      tone: 'dark',
    },
    cert: { id: 'b05-m05', statement: '나는 긴 AI 개발 작업을 Checkpoint로 끊어서 안전하게 이어갈 수 있다.' },
  },
  {
    number: '06',
    title: '새 기능을 작은 SPEC으로 붙이기',
    goal: '제품을 다시 처음부터 만들지 않고 기존 동작을 유지한 채 필요한 기능만 확장한다.',
    minutes: '10분',
    steps: [
      '새로 필요한 기능과 그 이유를 한 문장으로 적는다.',
      '기존 동작 중 반드시 유지할 것을 명시한다.',
      '새 기능의 입력·동작·예외·Acceptance Criteria만 작은 SPEC으로 만든다.',
      '현재 코드에서 영향을 받는 범위를 먼저 확인한다.',
      '작은 PLAN·TASKS로 구현하고 기존 흐름까지 회귀 검증한다.',
    ],
    prompt: {
      label: '기능을 확장할 때',
      text: '현재 제품은 유지하고 [새 기능]만 추가하려고 해. 먼저 이 변경만을 위한 작은 SPEC을 작성해줘. Input / Behavior / Exceptions / Acceptance Criteria / 기존 기능 중 유지할 것 / 영향받을 가능성이 있는 범위를 적고, 확인 후에만 PLAN과 TASKS를 만들어줘.',
      tone: 'signal',
    },
    cert: { id: 'b05-m06', statement: '나는 기존 제품을 유지하면서 새 기능만 작은 SPEC으로 추가할 수 있다.' },
  },
]
