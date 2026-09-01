const buildSteps = [
  { phase: 'DISCOVER', title: '업무 문제 발견', note: '현장의 마찰을 포착합니다.' },
  { phase: 'DEFINE', title: 'AI와 문제 구체화', note: '사용자와 성공 기준을 정합니다.' },
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
  { phase: 'DESIGN', title: 'UI / UX 설계', note: '사용 흐름을 먼저 확인합니다.' },
  { phase: 'VISIBLE', title: 'Frontend', note: '보이는 경험을 합의합니다.' },
  { phase: 'CONNECT', title: 'Backend · Database · API', note: '실제 기능과 데이터를 연결합니다.' },
  { phase: 'SYSTEM', title: 'Repository · Project instructions', note: 'AI가 이어서 일할 맥락을 만듭니다.' },
  { phase: 'BUILD', title: 'Harness · Coding Agent', note: '구현을 반복할 환경을 갖춥니다.' },
  { phase: 'VERIFY', title: 'Test → 실제 사용', note: '작동 여부가 기준입니다.' },
  { phase: 'IMPROVE', title: '캡처 → 수정 요청 → 다시 테스트', note: '결과를 보며 반복합니다.', loop: true },
  { phase: 'APPLY', title: '업무 적용', note: '현장의 도구가 됩니다.' },
]

export function BuildMap() {
  return (
    <figure className="build-map">
      <figcaption>
        <span>BOOK 01 · MASTER VIEW</span>
        <strong>THE AI BUILD MAP</strong>
      </figcaption>
      <ol>
        {buildSteps.map((step, index) => (
          <li className={step.loop ? 'build-map__loop' : ''} key={step.phase}>
            <span className="build-map__index">{String(index + 1).padStart(2, '0')}</span>
            <span className="build-map__phase">{step.phase}</span>
            <div>
              <strong>{step.title}</strong>
              {step.note && <p>{step.note}</p>}
              {step.options && (
                <div className="build-map__options">
                  {step.options.map((option) => <span key={option}>{option}</span>)}
                </div>
              )}
            </div>
            <span className="build-map__arrow" aria-hidden="true">↓</span>
          </li>
        ))}
      </ol>
    </figure>
  )
}
