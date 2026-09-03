type MiniFlywheelProps = {
  title: string
  steps: string[]
  tone?: 'light' | 'dark'
}

export function MiniFlywheel({ title, steps, tone = 'light' }: MiniFlywheelProps) {
  const radius = 38
  const markerId = `flywheel-arrow-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <div className={`mini-flywheel mini-flywheel--${tone}`} role="group" aria-label={title}>
      <p className="mini-flywheel__title">{title}</p>
      <div className="mini-flywheel__ring" aria-label={`${steps.join(' → ')} 순환 구조`}>
        <svg className="mini-flywheel__track" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <marker id={markerId} markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="currentColor" />
            </marker>
          </defs>
          <path
            className="mini-flywheel__track-path"
            d="M 50 88 A 38 38 0 1 1 49.9 88"
            markerEnd={`url(#${markerId})`}
          />
        </svg>
        <div className="mini-flywheel__center" aria-hidden="true">
          <span>FLYWHEEL</span>
          <strong>↻</strong>
        </div>
        {steps.map((step, index) => {
          const angle = -90 + (360 / steps.length) * index
          const radians = (angle * Math.PI) / 180
          const left = 50 + radius * Math.cos(radians)
          const top = 50 + radius * Math.sin(radians)

          return (
            <div
              className="mini-flywheel__node"
              style={{ left: `${left}%`, top: `${top}%` }}
              key={`${step}-${index}`}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </div>
          )
        })}
      </div>
    </div>
  )
}
