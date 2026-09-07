import { relationship } from '../../content/hdec-context'
import { useStep } from '../../hooks/useStep'

const positions = [
  [110, 75], [360, 42], [640, 58], [875, 120], [890, 330],
  [650, 405], [360, 420], [95, 350], [35, 210], [500, 230],
] as const

function ProjectNetwork() {
  return (
    <>
      <svg className="project-network" viewBox="0 0 1000 480" role="img" aria-label="Project를 중심으로 계약, 설계, 구매, 공정, 원가, 품질, 안전, Claim, 담당조직, 현장이 연결된 관계망">
        <g className="project-network__lines" aria-hidden="true">
          {positions.slice(0, 9).map(([x, y], index) => (
            <line x1="500" y1="240" x2={x + (index === 8 ? 75 : 55)} y2={y + 28} key={`${x}-${y}`} />
          ))}
        </g>
        <g className="project-network__center">
          <rect x="400" y="190" width="200" height="100" rx="4" />
          <text x="500" y="250">Project</text>
        </g>
        {relationship.projectNodes.slice(0, 9).map((node, index) => {
          const [x, y] = positions[index]
          const wide = node === '담당조직'
          return (
            <g className="project-network__node" key={node}>
              <rect x={x} y={y} width={wide ? 150 : 110} height="56" rx="3" />
              <text x={x + (wide ? 75 : 55)} y={y + 35}>{node}</text>
            </g>
          )
        })}
        <g className="project-network__site">
          <text x="500" y="350">{relationship.projectNodes[9]}</text>
          <line x1="500" y1="290" x2="500" y2="325" />
        </g>
      </svg>
      <div className="project-network-mobile">
        <strong>Project</strong>
        <ul>
          {relationship.projectNodes.map((node) => <li key={node}>{node}</li>)}
        </ul>
      </div>
    </>
  )
}

function CompanyNetwork() {
  return (
    <div className="company-network" aria-label="Project 관계망이 회사와 외부 Context로 확장되는 구조">
      <div className="company-network__band company-network__band--external">
        <span>{relationship.companyBands[0]}</span>
        <div className="company-network__band company-network__band--enterprise">
          <span>{relationship.companyBands[1]}</span>
          <div className="company-network__links">
            {relationship.companyLinks.map((link) => <b key={link}>{link}</b>)}
          </div>
          <div className="company-network__projects">
            <i>Project</i><i>Project</i><i>Project</i>
          </div>
        </div>
      </div>
    </div>
  )
}

function NewsTrace() {
  return (
    <ol className="news-trace" aria-label={relationship.traceLabel}>
      {relationship.trace.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{item}</strong>
          {index < relationship.trace.length - 1 && <i aria-hidden="true">→</i>}
        </li>
      ))}
    </ol>
  )
}

export function RelationshipZoom() {
  const { ref, step, replay } = useStep(3, 850)

  return (
    <div className={`context-visual relationship-zoom is-step-${step}`} ref={ref}>
      <div className="context-visual__head context-visual__head--action">
        <div>
          <p>{relationship.eyebrow}</p>
          <h2>{relationship.title}</h2>
        </div>
        <button type="button" onClick={replay}>{relationship.replay} <span aria-hidden="true">↻</span></button>
      </div>

      <div className="relationship-zoom__progress" aria-hidden="true">
        {[1, 2, 3].map((item) => <i className={step >= item ? 'is-active' : ''} key={item} />)}
      </div>

      <figure className="relationship-phase relationship-phase--project">
        <figcaption><span>PROJECT CONTEXT</span><strong>{relationship.projectLabel}</strong></figcaption>
        <ProjectNetwork />
      </figure>

      <div className="relationship-zoom__transition" aria-hidden="true">
        <span>PROJECT CONTEXT</span><i>→</i><strong>COMPANY CONTEXT</strong>
      </div>

      <figure className="relationship-phase relationship-phase--company">
        <figcaption><span>COMPANY CONTEXT</span><strong>{relationship.companyLabel}</strong></figcaption>
        <CompanyNetwork />
      </figure>

      <figure className="relationship-phase relationship-phase--trace">
        <figcaption><span>NEWS TRACE</span><strong>{relationship.traceLabel}</strong></figcaption>
        <NewsTrace />
      </figure>

      <aside className="relationship-legend">
        <strong>{relationship.legendTitle}</strong>
        {relationship.legend.map((line) => <p key={line}>{line}</p>)}
      </aside>
    </div>
  )
}
