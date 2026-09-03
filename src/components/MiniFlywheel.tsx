type MiniFlywheelProps = {
  title: string
  steps: string[]
  tone?: 'light' | 'dark'
}

export function MiniFlywheel({ title, steps, tone = 'light' }: MiniFlywheelProps) {
  const radius = 38

  return (
    <figure className={`mini-flywheel mini-flywheel--${tone}`}>
      <figcaption>{title}</figcaption>
      <div className="mini-flywheel__ring" aria-label={`${steps.join(' → ')} 순환 구조`}>
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
    </figure>
  )
}
