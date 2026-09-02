const roles = [
  { number: '01', role: 'PLANNER', title: '문제를 제품 언어로 정리', tools: 'ChatGPT Project · Claude Project' },
  { number: '02', role: 'BUILDER', title: '실제 파일을 읽고 수정 · 실행', tools: 'Claude Code · Codex · Cursor · Antigravity' },
  { number: '03', role: 'REVIEWER', title: '방향과 작동 여부를 다각도로 검증', tools: 'Agent / Test / Build / Lint / Browser / Visual' },
  { number: '04', role: 'ACTUAL USER', title: '실장이 MVP를 직접 사용', tools: '현장 판단 → 정밀 수정 요청' },
]

export function DevelopmentLoop() {
  return (
    <figure className="development-loop">
      <figcaption>
        <span>HOW AI DEVELOPMENT ACTUALLY WORKS</span>
        <strong>계획하고, 만들고, 검토하고, 직접 씁니다.</strong>
      </figcaption>
      <ol>
        {roles.map((item, index) => (
          <li className={item.role === 'ACTUAL USER' ? 'is-human' : ''} key={item.role}>
            <span>{item.number} · ROLE</span>
            <strong>{item.role}</strong>
            <p>{item.title}</p>
            <small>{item.tools}</small>
            {index < roles.length - 1 && <i aria-hidden="true">→</i>}
          </li>
        ))}
      </ol>
      <b aria-hidden="true">TARGETED FIX ↺</b>
    </figure>
  )
}
