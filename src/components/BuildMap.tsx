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
  { phase: 'INSIGHT', title: 'DEEP DOMAIN INSIGHT', note: '경험에서 반복되는 마찰과 중요한 빈틈을 봅니다.' },
  { phase: 'PROBLEM', title: 'PAIN POINT', note: '해결할 가치가 있는 실제 업무 문제를 고릅니다.' },
  { phase: 'DEFINE', title: 'DEFINE PROBLEM', note: '사용자 · 기대 결과 · 제약 · 성공 기준을 정합니다.' },
  {
    phase: 'CHOOSE',
    title: 'CHOOSE SOLUTION TYPE',
    options: ['Custom AI', 'Web / App', 'Automation', 'Agent'],
  },
  {
    phase: 'START',
    title: 'CHOOSE STARTING POINT',
    options: ['Reference', 'Blank', 'Existing Workflow'],
  },
  { phase: 'SPEC', title: 'PRD / SPEC', note: '무엇을 왜 만드는지 구현 가능한 문서로 남깁니다.' },
  { phase: 'PROTOTYPE', title: 'PROTOTYPE / MVP', note: '작게 만들고 실제로 눌러볼 수 있게 합니다.' },
  { phase: 'USE', title: 'EXECUTIVE USES IT', note: '실장이 직접 써보며 현장과 다른 지점을 찾습니다.' },
  {
    phase: 'GATE',
    title: 'USEFUL?',
    gate: true,
    no: 'NO → TARGETED FIX → 다시 사용',
    yes: 'YES → 보안·데이터 검토',
  },
  {
    phase: 'GATE',
    title: 'SECURITY / DATA APPROVAL',
    gate: true,
    no: 'NO → 샘플·공개·익명화 데이터로 제한',
    yes: 'YES → 승인된 연결로 진행',
  },
  { phase: 'CONNECT', title: 'REAL BACKEND / DATA / AUTOMATION', note: '승인된 실제 기능과 시스템을 연결합니다.' },
  { phase: 'PILOT', title: 'PILOT', note: '작은 범위에서 시간·오류·재작업을 측정합니다.' },
  { phase: 'TOOL', title: 'WORKING TOOL', note: '운영·보안·유지보수 조건을 갖춰 실제 업무에 적용합니다.', loop: true },
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
