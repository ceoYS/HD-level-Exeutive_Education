const systemItems = [
  { name: 'FRONTEND', note: '사용자가 보는 화면', className: 'front' },
  { name: 'BACKEND', note: '화면 뒤에서 규칙을 처리', className: 'back' },
  { name: 'DATABASE', note: '정보를 기억', className: 'data' },
  { name: 'API', note: '시스템 사이 연결', className: 'api' },
]

export function SystemDiagram() {
  return (
    <figure className="system-diagram">
      <figcaption>HOW A DIGITAL PRODUCT WORKS</figcaption>
      <div className="system-diagram__user">
        <span>USER</span>
        <b>사용자의 행동</b>
      </div>
      <span className="flow-arrow" aria-hidden="true">↓</span>
      <div className="system-diagram__grid">
        {systemItems.map((item) => (
          <div className={`system-node system-node--${item.className}`} key={item.name}>
            <strong>{item.name}</strong>
            <span>{item.note}</span>
          </div>
        ))}
      </div>
      <span className="flow-arrow" aria-hidden="true">↓</span>
      <div className="system-diagram__runtime">
        <div>
          <strong>SERVER</strong>
          <span>Backend · data · service가 실제로 실행되는 컴퓨팅 환경</span>
        </div>
        <div>
          <strong>AUTHENTICATION</strong>
          <span>누가 들어왔고 무엇을 할 수 있는지 확인</span>
        </div>
      </div>
      <span className="flow-arrow" aria-hidden="true">↓</span>
      <div className="system-diagram__systems">DEPLOY · 다른 사람이 접속해 쓸 수 있게 내보내기</div>
    </figure>
  )
}
