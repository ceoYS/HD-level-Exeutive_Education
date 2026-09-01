type ScreenshotPlaceholderProps = {
  tool: string
  purpose: string
  description: string
  ratio: string
  annotation: string
}

export function ScreenshotPlaceholder({
  tool,
  purpose,
  description,
  ratio,
  annotation,
}: ScreenshotPlaceholderProps) {
  return (
    <figure className="screenshot-placeholder" style={{ aspectRatio: ratio.replace(':', ' / ') }}>
      <div className="screenshot-placeholder__rails" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="screenshot-placeholder__content">
        <span>[ SCREENSHOT PLACEHOLDER ]</span>
        <h3>{tool}</h3>
        <p>{purpose}</p>
      </div>
      <dl>
        <div>
          <dt>SCREEN</dt>
          <dd>{description}</dd>
        </div>
        <div>
          <dt>RATIO</dt>
          <dd>{ratio}</dd>
        </div>
        <div>
          <dt>ANNOTATION</dt>
          <dd>{annotation}</dd>
        </div>
      </dl>
    </figure>
  )
}
