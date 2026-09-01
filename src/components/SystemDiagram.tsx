const systemItems = [
  { name: 'FRONTEND', note: '보이는 화면과 경험', className: 'front' },
  { name: 'BACKEND', note: '규칙과 실제 기능', className: 'back' },
  { name: 'DATABASE', note: '기억하고 축적하는 곳', className: 'data' },
  { name: 'API', note: '시스템을 잇는 통로', className: 'api' },
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
      <div className="system-diagram__systems">INTERNAL / EXTERNAL SYSTEM</div>
    </figure>
  )
}
