import { contextZoom } from '../../content/hdec-context'

export function ContextZoom() {
  return (
    <div className="context-visual context-zoom">
      <div className="context-visual__head">
        <p>{contextZoom.eyebrow}</p>
        <h2>{contextZoom.title}</h2>
      </div>
      <div className="context-zoom__rings" aria-label={contextZoom.rings.join(' → ')}>
        {contextZoom.rings.map((ring, index) => (
          <div className={`context-zoom__ring context-zoom__ring--${index + 1}`} key={ring}>
            <span>{ring}</span>
          </div>
        ))}
      </div>
      <div className="context-zoom__path" aria-hidden="true">
        {contextZoom.rings.map((_, index) => <i key={index} />)}
      </div>
      <p className="context-zoom__flow">{contextZoom.flow}</p>
    </div>
  )
}
