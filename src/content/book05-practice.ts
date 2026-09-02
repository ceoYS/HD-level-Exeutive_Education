// BOOK 05 — PRACTICE. 앞의 내용을 다시 설명하지 않고 하나의 Mini Build로 끝까지 실행한다.
// 6개 미션은 서로 독립된 팁이 아니라 하나의 산출물이 이어지는 연속 실습이다.

export type MissionData = {
  number: string
  title: string
  goal: string
  minutes: string
  steps: string[]
  prompt?: { label: string; text: string; tone?: 'light' | 'dark' | 'signal' }
  screenshot?: { tool: string; purpose: string; description: string; annotation: string }
  cert: { id: string; statement: string }
  note?: string
}

export const missions: MissionData[] = [
  {
    number: '01',
    title: 'Problem Brief 만들기',
    goal: '실제 업무 문제 하나를 고르고 현재 흐름을 짧게 정리한다.',
    minutes: '10분',
    steps: [
      '지금 가장 바꾸고 싶은 반복 업무 하나를 고른다.',
      '현재 업무가 어떻게 돌아가는지 평소 말투로 설명한다.',
      'AI에게 해결책은 말하지 말고 현재 문제와 흐름만 정리하게 한다.',
      '틀린 부분을 직접 고쳐 Problem Brief를 확정한다.',
    ],
    prompt: {
      label: 'STEP 1 · PROBLEM',
      text: '내 업무를 설명할게. 해결책을 제안하지 말고, 누가 어떤 상황에서 어떤 순서로 일하는지와 가장 큰 불편만 Problem Brief로 정리해줘. 내가 말하지 않은 내용은 추가하지 마.',
      tone: 'signal',
    },
    cert: { id: 'b05-m01', statement: '나는 실제 업무 문제 하나를 Problem Brief로 정리했다.' },
  },
  {
    number: '02',
    title: 'PRD 한 장 만들기',
    goal: '왜 만들고 무엇까지 만들지 한 장에 고정한다.',
    minutes: '15분',
    steps: [
      'Problem Brief를 AI에게 준다.',
      'User · Outcome · Must-have · Non-goal · Success Criteria를 정리한다.',
      '애매한 부분은 AI가 임의로 채우지 않고 질문하게 한다.',
      '답을 반영해 PRD를 확정한다.',
    ],
    prompt: {
      label: 'STEP 2 · PRD',
      text: '첨부한 Problem Brief로 1페이지 PRD를 만들어줘. Problem / User / Desired Outcome / Must-have / Non-goal / Input / Output / Success Criteria만 넣어. 모르는 내용은 추측하지 말고 질문으로 남겨줘.',
    },
    cert: { id: 'b05-m02', statement: '나는 만들려는 도구의 목적과 범위를 PRD 한 장으로 고정했다.' },
  },
  {
    number: '03',
    title: 'SPEC · PLAN · TASKS 만들기',
    goal: 'PRD를 실제 구현에 필요한 문서와 작업 단위로 바꾼다.',
    minutes: '20분',
    steps: [
      'PRD를 구현용 SPEC으로 변환한다.',
      '사용자 흐름과 화면·기능별 동작을 적는다.',
      'Acceptance Criteria를 넣는다.',
      'SPEC을 PLAN과 TASKS로 나눈다.',
      'GitHub Spec Kit 같은 spec-driven 방식은 필요하면 이 단계에서 사용한다.',
    ],
    prompt: {
      label: 'STEP 3 · SPEC',
      text: '이 PRD를 구현용 SPEC으로 바꿔줘. 사용자 흐름, 기능별 동작, 데이터, 예외, Acceptance Criteria를 포함하고, 그다음 PLAN과 실행 가능한 TASKS로 나눠줘. PRD에 없는 기능은 만들지 마.',
      tone: 'signal',
    },
    cert: { id: 'b05-m03', statement: '나는 PRD를 SPEC · PLAN · TASKS로 바꿨다.' },
    note: 'GitHub Spec Kit은 이 과정을 운영하는 한 가지 예입니다. 핵심은 특정 도구가 아니라 의도를 문서로 이어가는 방식입니다.',
  },
  {
    number: '04',
    title: 'Builder로 MVP 만들기',
    goal: '준비한 문서를 Builder에 넘겨 가장 작은 작동 버전을 만든다.',
    minutes: '30분',
    steps: [
      'Claude Code · Codex · Cursor 등 사용할 Builder를 연다.',
      'PRD · SPEC · PLAN · TASKS를 작업 맥락으로 제공한다.',
      '이번에 만들 범위와 바꾸지 말아야 할 것을 함께 적는다.',
      '핵심 흐름만 구현한다.',
      'Build/Test 결과와 실제 화면을 확인한다.',
    ],
    prompt: {
      label: 'STEP 4 · BUILD',
      text: '첨부한 PRD·SPEC·PLAN·TASKS를 기준으로 핵심 흐름이 작동하는 MVP를 만들어줘. 문서에 없는 기능은 추가하지 말고, 이번 범위 밖의 파일이나 확정된 화면은 바꾸지 마. 끝나면 Build/Test 결과와 남은 항목을 보고해줘.',
    },
    screenshot: {
      tool: 'Builder 작업 화면',
      purpose: 'PRD와 SPEC을 작업 맥락으로 넣고 MVP를 구현하는 장면',
      description: '문서 + 구현 결과 + Build/Test 확인',
      annotation: 'docs / build / verify',
    },
    cert: { id: 'b05-m04', statement: '나는 문서를 Builder에 넘겨 실행 가능한 MVP를 만들었다.' },
  },
  {
    number: '05',
    title: 'Reviewer와 실제 사용으로 검토하기',
    goal: '코드 검토와 실제 업무 사용을 분리해서 확인한다.',
    minutes: '20분',
    steps: [
      '다른 Agent 또는 검증 수단으로 구현 결과를 검토한다.',
      'Build · Test · Browser · 화면을 확인한다.',
      '그다음 내가 직접 MVP를 사용한다.',
      '현장 업무와 다른 지점을 구체적으로 기록한다.',
      '코드 문제와 업무 문제를 나눠 Review Notes에 적는다.',
    ],
    prompt: {
      label: 'STEP 5 · REVIEW',
      text: '이 구현이 PRD와 SPEC을 지켰는지 검토해줘. 문서와 다른 동작, 오류 가능성, 빠진 Acceptance Criteria만 찾아줘. 새로운 기능 제안은 하지 마.',
    },
    cert: { id: 'b05-m05', statement: '나는 구현 검토와 실제 사용자 검토를 나눠서 진행했다.' },
  },
  {
    number: '06',
    title: 'Targeted Fix로 마무리하기',
    goal: '실제 사용에서 찾은 오차만 고쳐 Working Prototype을 만든다.',
    minutes: '20분',
    steps: [
      'Review Notes에서 가장 중요한 오차 하나를 고른다.',
      '유지할 것과 바꿀 것을 함께 적는다.',
      '그 부분만 수정한다.',
      '같은 업무 흐름으로 다시 사용해본다.',
      '필요한 수정만 한 번 더 반복하고 현재 버전을 저장한다.',
    ],
    prompt: {
      label: 'STEP 6 · TARGETED FIX',
      text: '전체를 다시 만들지 마. 현재 구현에서 [실제 업무와 다른 지점]만 수정해. [유지할 부분]은 그대로 두고, 수정 후 같은 흐름이 제대로 작동하는지 다시 검증해줘.',
      tone: 'signal',
    },
    cert: { id: 'b05-m06', statement: '나는 실제 사용에서 찾은 오차만 수정해 Working Prototype을 만들었다.' },
  },
]
