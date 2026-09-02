// BOOK 05 — PRACTICE. 작게 직접 해보는 6개 미션. 화면 제작 미션(04–05)은 태블릿·PC 권장.
// 도구 UI가 바뀌어도 대체 가능하도록 스크린샷은 placeholder, 단계는 원리 중심(2026.09 기준).

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
    title: 'AI에게 내 업무 설명하기',
    goal: '막연한 생각을 구조화된 문제 진술로 바꾼다.',
    minutes: '10분',
    steps: [
      '지금 가장 번거로운 업무 하나를 떠올린다.',
      '그 일을 평소 말투 그대로 AI에게 설명한다.',
      '"이걸 문제 정의로 정리해줘"라고 요청한다.',
      'AI가 정리한 것을 읽고, 틀린 부분을 한 줄로 고쳐준다.',
    ],
    prompt: {
      label: '이렇게 시작',
      text: '내가 매주 하는 번거로운 업무를 설명할게. 이걸 "누가·언제·얼마나 자주 겪는지 / 지금 방식 / 개선되면 좋은 점"으로 정리해줘. 내 표현은 바꾸지 말고 구조만 잡아줘.',
      tone: 'signal',
    },
    cert: { id: 'b05-m01', statement: '나는 내 업무 문제를 AI가 이해할 수 있게 설명할 수 있다.' },
  },
  {
    number: '02',
    title: '막힌 화면을 보여주고 한 단계씩 묻기',
    goal: '처음 쓰는 화면에서 막혔을 때 현재 화면을 보여주고 다음 행동을 묻는다.',
    minutes: '10분',
    steps: [
      '처음 쓰는 도구나 화면에서 막히는 지점을 연다.',
      '그 화면을 캡처한다.',
      'AI에게 캡처를 첨부하고 목표와 막힌 점을 말한다.',
      '"지금 해야 할 한 단계만" 요청한다.',
      '그 한 단계를 한 뒤 필요하면 다음 화면을 다시 보여준다.',
    ],
    prompt: {
      label: '처음 쓰는 화면에서',
      text: '나는 이 도구를 처음 사용합니다. 목표는 [여기에 목표]입니다. 첨부한 화면 기준으로, 지금 해야 할 딱 한 단계만 알려주세요. 그 단계를 한 뒤 다음 화면을 다시 보여드리겠습니다.',
    },
    screenshot: {
      tool: '막힌 화면 캡처',
      purpose: '처음 쓰는 도구의 화면을 그대로 캡처해 질문에 붙이는 장면',
      description: '실제 화면 캡처 + "지금 무엇을 눌러야 하나요?" 질문',
      annotation: 'capture / attach / one-step answer',
    },
    cert: { id: 'b05-m02', statement: '나는 막힌 화면을 보여주고 다음 한 단계를 물어볼 수 있다.' },
  },
  {
    number: '03',
    title: '나만의 Custom AI 만들기',
    goal: '자주 하는 지시와 참고 자료를 담은 나만의 AI 설정을 만든다.',
    minutes: '20분',
    steps: [
      '현재 지원되는 도구 하나를 연다 (예: ChatGPT Project · Claude Project · Gemini Gem).',
      '"항상 이렇게 답해줘" 같은 반복 지시를 적는다.',
      '자주 참고하는 문서(공개·합성 자료)를 지식으로 올린다.',
      '실제 업무 질문 3개를 던져 답을 확인한다.',
      '답이 아쉬우면 지시를 고쳐 다시 시킨다.',
    ],
    screenshot: {
      tool: 'Custom AI 설정 화면',
      purpose: '지시와 지식 파일을 넣어 나만의 AI를 구성하는 장면',
      description: '지시 입력 영역 + 지식 파일 업로드 영역',
      annotation: 'instructions / knowledge / try 3 questions',
    },
    cert: { id: 'b05-m03', statement: '나는 반복 지시와 자료를 담은 나만의 Custom AI를 만들 수 있다.' },
    note: '도구의 화면과 이름은 바뀔 수 있습니다(2026.09 기준). 여기서 익힐 것은 반복 지시와 참고 자료를 한 작업공간에 두는 방식입니다.',
  },
  {
    number: '04',
    title: '내 첫 웹 화면 만들기',
    goal: '샘플 데이터로 첫 화면을 만들고 직접 눌러본다.',
    minutes: '25분',
    steps: [
      '쉬운 현재 빌더를 하나 연다 (예: Google AI Studio · Manus · Claude Design).',
      '만들고 싶은 화면을 한 문장으로 설명한다.',
      '실제 데이터 대신 샘플 데이터로 만들어 달라고 한다.',
      '생성된 화면을 눌러보며 흐름을 확인한다.',
      '마음에 안 드는 부분 하나를 골라 수정을 요청한다.',
    ],
    prompt: {
      label: '첫 화면 요청',
      text: '건설 프로젝트 현황을 보여주는 간단한 화면을 만들어줘. 프로젝트 이름·공정률·주요 리스크가 카드로 보이면 돼. 실제 데이터는 없으니 샘플 데이터로 채워줘. 지금은 Prototype만, 로그인이나 저장 기능은 넣지 마.',
    },
    screenshot: {
      tool: '웹 빌더 결과 화면',
      purpose: '샘플 데이터로 생성된 첫 프로토타입 화면',
      description: '생성된 대시보드 카드 + 프롬프트 입력 영역',
      annotation: 'sample data / generated UI / iterate',
    },
    cert: { id: 'b05-m04', statement: '나는 샘플 데이터로 첫 웹 화면 Prototype을 직접 만들 수 있다.' },
  },
  {
    number: '05',
    title: '좋은 앱의 구조를 내 업무에 적용하기',
    goal: 'Reference-driven Build를 작게 경험한다.',
    minutes: '20분',
    steps: [
      '평소 잘 만들었다고 느낀 화면·앱을 하나 캡처한다.',
      'AI에게 "이 화면의 정보구조와 사용자 흐름을 분석해줘"라고 요청한다.',
      '"재사용 가능한 원칙만 추출해줘. 브랜드·문구·고유 자산은 제외"라고 덧붙인다.',
      '"이 구조를 내 업무용으로 재구성해줘"라고 요청한다.',
      '샘플 데이터로 Prototype을 만든다.',
    ],
    prompt: {
      label: '분석 → 재구성',
      text: '첨부한 화면을 디자인이 아니라 정보구조와 사용자 행동 관점에서 분석해줘. 재사용 가능한 UX 원칙만 추출하고 브랜드·문구·고유 자산은 제외해. 그다음 이 구조를 내 업무(프로젝트 현황 관리)용으로 재구성해서, 샘플 데이터로 Prototype만 만들어줘.',
      tone: 'signal',
    },
    cert: { id: 'b05-m05', statement: '나는 좋은 화면에서 원리를 뽑아 내 업무용으로 재구성할 수 있다.' },
  },
  {
    number: '06',
    title: '한 번 만든 결과를 나눠서 고치기',
    goal: '한 번에 다시 만들지 않고 바꿀 부분을 좁혀 세 번 수정해본다.',
    minutes: '15분',
    steps: [
      '앞 미션에서 만든 화면 하나를 연다.',
      '1차 수정: "이 부분만 바꿔, 나머지는 유지해".',
      '2차 수정: "방금 건 좋아, 이번엔 이걸 바꿔".',
      '3차 수정: "변경 전후를 먼저 설명하고 바꿔".',
      '세 번의 변화가 어떻게 쌓였는지 되돌아본다.',
    ],
    prompt: {
      label: '부분만 고치기',
      text: '전체를 다시 만들지 마. 지금 화면에서 [바꿀 부분]만 수정하고 나머지는 그대로 유지해. 바꾸기 전에 무엇을 어떻게 바꿀지 먼저 한 줄로 설명해줘.',
    },
    cert: { id: 'b05-m06', statement: '나는 바꿀 범위를 좁혀 AI 결과를 단계적으로 수정할 수 있다.' },
  },
]
