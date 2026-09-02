const loop = ['PLAN', 'SPEC', 'BUILD', 'REVIEW', 'TEST', 'USE', 'TARGETED FIX']

export function HarnessDiagram() {
  return (
    <figure className="harness-diagram">
      <figcaption>
        <span>RELIABLE DEVELOPMENT LOOP</span>
        <strong>HARNESS</strong>
      </figcaption>
      <div className="harness-diagram__loop">
        {loop.map((item, index) => (
          <div className={item === 'USE' ? 'is-human' : ''} key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item}</strong>
            {index < loop.length - 1 && <i aria-hidden="true">→</i>}
          </div>
        ))}
        <b aria-hidden="true">↺</b>
      </div>
      <div className="harness-diagram__supports">
        {['PRD / SPEC', 'PROJECT RULES', 'SKILLS / MCP', 'PERMISSIONS', 'TESTS', 'GIT HISTORY', 'REVIEW CRITERIA'].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <p>AI 개발이 여러 번 반복되어도 같은 기준과 검증 순서로 돌아가게 하는 작업 체계</p>
    </figure>
  )
}
