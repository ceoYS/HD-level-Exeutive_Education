type BuildStep = {
  phase: string
  title: string
  note?: string
  options?: string[]
  loop?: boolean
  gate?: boolean
  no?: string
  yes?: string
}

const buildSteps: BuildStep[] = [
  { phase: 'PROBLEM', title: '업무 문제 발견', note: '현장의 마찰을 포착합니다.' },
  { phase: 'DEFINE', title: '목표 · 사용자 · 기대 결과', note: 'AI와 함께 문제를 구체화합니다.' },
  {
    phase: 'CHOOSE',
    title: '무엇을 만들 것인가?',
    options: ['Custom AI', 'Web / App', 'Automation', 'Agent'],
  },
  {
    phase: 'START',
    title: '어떻게 시작할 것인가?',
    options: ['Blank Build', 'Reference-driven', 'Existing-workflow'],
  },
  { phase: 'DESIGN', title: 'UI / UX 설계', note: '사용 흐름을 먼저 그립니다.' },
  { phase: 'PROTOTYPE', title: 'Frontend · Prototype', note: 'Dummy Data로 보이는 경험을 만듭니다.' },
  { phase: 'REVIEW', title: '실장이 직접 검토', note: '업무가 이 화면에서 도는지 봅니다.' },
  {
    phase: 'GATE',
    title: '이 도구가 실제로 쓸모 있는가?',
    gate: true,
    no: 'NO → 화면·흐름을 수정하고 다시 검토',
    yes: 'YES → 실제 기능 연결로',
  },
  {
    phase: 'GATE',
    title: '데이터 · 보안 승인이 되었는가?',
    gate: true,
    no: 'NO → 합성·공개 데이터로 계속, 승인 절차 진행',
    yes: 'YES → 승인된 사내 데이터 연결',
  },
  { phase: 'CONNECT', title: 'Backend · Database · API · Auth', note: '실제 기능과 데이터를 연결합니다.' },
  { phase: 'SYSTEM', title: 'Repository · Project instructions', note: 'AI가 이어서 일할 맥락을 남깁니다.' },
  { phase: 'BUILD', title: 'Harness · Coding Agent', note: '구현을 반복할 환경을 갖춥니다.' },
  { phase: 'VERIFY', title: 'Test → Pilot(실제 사용)', note: '작동 여부가 기준입니다.' },
  { phase: 'IMPROVE', title: '캡처 → 수정 요청 → 다시 테스트', note: '결과를 보며 반복합니다. 반복은 정상입니다.', loop: true },
  { phase: 'APPLY', title: '실제 업무 적용', note: '현장의 도구가 됩니다.' },
]

export function BuildMap() {
  return (
    <figure className="build-map">
      <figcaption>
        <span>BOOK 01 · MASTER VIEW</span>
        <strong>THE AI BUILD MAP</strong>
      </figcaption>
      <ol>
        {buildSteps.map((step, index) => {
          const className = [step.loop ? 'build-map__loop' : '', step.gate ? 'build-map__gate' : '']
            .filter(Boolean)
            .join(' ')
          return (
            <li className={className} key={`${step.phase}-${index}`}>
              <span className="build-map__index">{String(index + 1).padStart(2, '0')}</span>
              <span className="build-map__phase">{step.gate ? 'DECISION' : step.phase}</span>
              <div>
                <strong>{step.gate ? `[ ${step.title} ]` : step.title}</strong>
                {step.note && <p>{step.note}</p>}
                {step.options && (
                  <div className="build-map__options">
                    {step.options.map((option) => (
                      <span key={option}>{option}</span>
                    ))}
                  </div>
                )}
                {step.gate && (
                  <div className="build-map__branches">
                    <span className="build-map__branch build-map__branch--no">{step.no}</span>
                    <span className="build-map__branch build-map__branch--yes">{step.yes}</span>
                  </div>
                )}
              </div>
              <span className="build-map__arrow" aria-hidden="true">↓</span>
            </li>
          )
        })}
      </ol>
    </figure>
  )
}
