// BOOK 04 — BUILD. 8주 Executive × ACE 실행 워크북.
// 개념을 다시 설명하지 않는다. 앞에서 정한 판단을 실제 산출물로 쌓는 데 집중한다.

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
    title: '실제 문제 하나를 고른다',
    intent: '8주 동안 끝까지 가져갈 업무 문제 하나를 정하고 현재 업무 흐름을 기록한다.',
    tasks: [
      '해결할 업무 문제 1개 선택',
      '현재 업무 흐름을 5–10단계로 기록',
      '가장 큰 시간·오류·재작업 지점 표시',
      '사용자와 문제 발생 빈도 확인',
    ],
    deliverable: 'Problem Brief + Current Workflow',
    prompt: {
      label: '현재 업무를 정리할 때',
      text: '내가 지금 하는 업무 흐름을 설명할게. 내가 말한 내용만 사용해서 현재 업무를 단계별로 정리하고, 반복되는 불편·대기·재작업 지점을 표시해줘. 아직 해결책은 제안하지 마.',
    },
    certs: [
      { id: 'b04-w01-a', statement: '나는 8주 동안 해결할 업무 문제 하나를 정했다.' },
      { id: 'b04-w01-b', statement: '나는 현재 업무 흐름과 가장 큰 마찰 지점을 기록했다.' },
    ],
  },
  {
    week: '02',
    phase: 'PRD',
    title: 'PRD로 의도를 고정한다',
    intent: '왜 만들고, 누가 쓰고, 무엇이 성공인지 한 문서에 고정한다.',
    tasks: [
      '사용자와 사용 상황 정의',
      '해결할 문제와 기대 결과 작성',
      '필수 기능과 이번에 하지 않을 것(Non-goal) 구분',
      '입력·출력·성공 기준 작성',
      'ACE와 PRD 내용 검토 후 확정',
    ],
    deliverable: 'PRD.md',
    prompt: {
      label: 'PRD를 만들 때',
      text: '지금까지 정리한 Problem Brief를 바탕으로 PRD 초안을 만들어줘. Problem / User / Current Workflow / Desired Outcome / Must-have / Non-goal / Input / Output / Success Criteria 순서로 작성하고, 빠진 판단은 임의로 채우지 말고 질문으로 남겨줘.',
      tone: 'signal',
    },
    certs: [
      { id: 'b04-w02-a', statement: '나는 이 도구를 왜 만드는지 PRD 한 장으로 설명할 수 있다.' },
      { id: 'b04-w02-b', statement: '나는 이번 버전에 넣을 것과 넣지 않을 것을 구분했다.' },
    ],
  },
  {
    week: '03',
    phase: 'CHOOSE',
    title: '해결 형태와 참고 사례를 정한다',
    intent: 'Book 03에서 배운 기준으로 솔루션 형태와 시작 방식을 결정한다.',
    tasks: [
      '솔루션 타입 결정: Custom AI / Web·App / Automation / Agent',
      '시작 방식 결정: Blank / Reference / Existing Workflow',
      '필요하면 참고 사례 2–3개만 선정',
      '선택 이유를 PRD에 한 단락으로 추가',
    ],
    deliverable: 'Solution Direction',
    certs: [
      { id: 'b04-w03-a', statement: '나는 해결 형태와 시작 방식을 정했고 그 이유를 설명할 수 있다.' },
    ],
  },
  {
    week: '04',
    phase: 'SPEC',
    title: '구현 가능한 SPEC으로 바꾼다',
    intent: 'PRD의 의도를 Builder가 바로 작업할 수 있는 수준의 행동·화면·데이터·검증 기준으로 구체화한다.',
    tasks: [
      '핵심 사용자 흐름 작성',
      '화면·기능별 동작 정의',
      '필요 데이터와 샘플 데이터 정의',
      'Acceptance Criteria 작성',
      'SPEC → PLAN → TASKS 순서로 작업 단위 생성',
    ],
    deliverable: 'SPEC.md + PLAN.md + TASKS.md',
    prompt: {
      label: 'PRD를 SPEC으로 바꿀 때',
      text: '첨부한 PRD를 구현용 SPEC으로 바꿔줘. 사용자 흐름, 화면/기능별 동작, 데이터, 예외, Acceptance Criteria를 작성하고, 그다음 PLAN과 실행 가능한 TASKS로 나눠줘. PRD에 없는 기능은 추가하지 마.',
      tone: 'signal',
    },
    certs: [
      { id: 'b04-w04-a', statement: '나는 PRD와 SPEC의 역할 차이를 실제 산출물로 확인했다.' },
      { id: 'b04-w04-b', statement: '나는 Builder가 작업할 PLAN과 TASKS를 준비했다.' },
    ],
  },
  {
    week: '05',
    phase: 'BUILD',
    title: 'Builder에 문서를 넘기고 MVP를 만든다',
    intent: '확정한 PRD·SPEC·PLAN·TASKS를 Builder의 작업 맥락으로 넣고 가장 작은 작동 버전을 만든다.',
    tasks: [
      'PRD·SPEC·PLAN·TASKS를 Builder에 제공',
      '변경 금지 사항과 이번 구현 범위 명시',
      '가장 중요한 흐름부터 구현',
      'Build/Test 결과 확인',
      '실제로 열어볼 수 있는 MVP 확보',
    ],
    deliverable: 'MVP V0.1',
    prompt: {
      label: 'Builder에 넘길 때',
      text: '첨부한 PRD·SPEC·PLAN·TASKS를 기준으로 작업해. 문서에 없는 요구사항은 임의로 추가하지 말고, 이번에는 핵심 흐름이 작동하는 MVP까지만 구현해. 구현 후 Build/Test 결과와 남은 항목을 보고해줘.',
    },
    certs: [
      { id: 'b04-w05-a', statement: '나는 문서를 Builder의 작업 맥락으로 넘겨 MVP를 만들었다.' },
      { id: 'b04-w05-b', statement: '나는 실제로 실행되는 핵심 흐름을 확인했다.' },
    ],
  },
  {
    week: '06',
    phase: 'CONNECT',
    title: '필요한 연결만 검토한다',
    intent: 'MVP에 실제 데이터·시스템 연결이 필요한지 판단하고 승인 범위 안에서만 진행한다.',
    tasks: [
      '실제 데이터 연결이 꼭 필요한 항목만 목록화',
      'M365 · SharePoint · Teams 등 연결 대상과 권한 확인',
      '보안·승인 조건 확인',
      '승인 전에는 합성·공개 데이터 유지',
    ],
    deliverable: 'Integration Plan 또는 승인된 연결',
    security: true,
    certs: [
      { id: 'b04-w06-a', statement: '나는 필요한 연결과 불필요한 연결을 구분했다.' },
      { id: 'b04-w06-b', statement: '나는 승인 범위 안에서만 실제 데이터를 연결한다.' },
    ],
  },
  {
    week: '07',
    phase: 'PILOT & FIX',
    title: '실제 업무에서 쓰고 오차만 고친다',
    intent: '실제 사용 중 발견한 업무 오차를 기록하고 필요한 부분만 수정한다.',
    tasks: [
      '실제 업무에서 사용',
      '현장 흐름과 다른 지점 기록',
      '불필요한 기능과 빠진 기능 구분',
      '중요도 순으로 Targeted Fix 요청',
      '수정 후 같은 업무에서 다시 확인',
    ],
    deliverable: 'Pilot Notes + V0.9',
    certs: [
      { id: 'b04-w07-a', statement: '나는 실제 사용에서 발견한 오차를 근거로 수정했다.' },
      { id: 'b04-w07-b', statement: '나는 전체를 다시 만들지 않고 필요한 부분만 고쳤다.' },
    ],
  },
  {
    week: '08',
    phase: 'DEMO & MEASURE',
    title: '결과와 다음 결정을 정리한다',
    intent: '문제·도구·효과·한계·다음 행동을 짧게 설명하고 Pilot 결과를 기준선과 비교한다.',
    tasks: [
      '문제 → 해결 흐름을 3분 Demo로 정리',
      'Baseline과 Pilot 결과 비교',
      '절감 시간·오류·재작업 등 확인',
      '현재 한계와 운영 조건 기록',
      '중단 / 추가 개선 / 확장 중 다음 행동 결정',
    ],
    deliverable: 'Working Demo + Pilot Result + Next Decision',
    certs: [
      { id: 'b04-w08-a', statement: '나는 문제부터 결과까지 3분 안에 설명할 수 있다.', ace: true },
      { id: 'b04-w08-b', statement: '나는 Pilot 결과를 Baseline과 비교해 말할 수 있다.', ace: true },
      { id: 'b04-w08-c', statement: '나는 다음 단계가 중단·개선·확장 중 무엇인지 결정했다.', ace: true },
    ],
  },
]
