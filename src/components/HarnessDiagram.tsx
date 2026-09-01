const satellites = ['REPOSITORY', 'INSTRUCTIONS', 'TESTS', 'SKILLS', 'PERMISSIONS', 'MCP']

export function HarnessDiagram() {
  return (
    <figure className="harness-diagram">
      <figcaption>HARNESS</figcaption>
      <div className="harness-diagram__field">
        <div className="harness-diagram__core">
          <span>CODING</span>
          <strong>AGENT</strong>
          <small>계속 작업하는 AI</small>
        </div>
        {satellites.map((item, index) => (
          <span
            className={`harness-diagram__satellite harness-diagram__satellite--${index + 1}`}
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
      <p>AI가 오래, 안전하게, 같은 방향으로 일하도록 만드는 작업 환경</p>
    </figure>
  )
}
