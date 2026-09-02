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
      <p>여러 번 개발해도 같은 기준과 검증 순서를 이어가기 위한 작업 체계</p>
    </figure>
  )
}
