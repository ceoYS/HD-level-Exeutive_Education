import { Fragment } from 'react'
import { Reveal } from '../Reveal'
import { FoundationHead } from './FoundationHead'
import { aiReady as copy } from '../../content/ai-foundation'

// P-101을 중심(500,220)으로 한 타원 궤도 위 7개 문서 위치(viewBox 1000×440).
const pumpPositions = [
  [500, 70], [797, 127], [870, 253], [665, 355], [335, 355], [130, 253], [203, 127],
] as const

function PumpMap() {
  return (
    <>
      <svg
        className="pump-map__svg"
        viewBox="0 0 1000 440"
        role="img"
        aria-label={`${copy.pump.center}를 중심으로 ${copy.pump.nodes.join(', ')}이 연결된 관계망`}
      >
        <g className="pump-map__lines" aria-hidden="true">
          {pumpPositions.map(([x, y]) => <line x1="500" y1="220" x2={x} y2={y} key={`${x}-${y}`} />)}
        </g>
        <g className="pump-map__center">
          <circle cx="500" cy="220" r="96" />
          <text x="500" y="228">{copy.pump.center}</text>
        </g>
        {copy.pump.nodes.map((node, index) => {
          const [x, y] = pumpPositions[index]
          return (
            <g className="pump-map__node" key={node}>
              <rect x={x - 66} y={y - 25} width="132" height="50" rx="3" />
              <text x={x} y={y + 7}>{node}</text>
            </g>
          )
        })}
      </svg>
      <div className="pump-map__list">
        <strong>{copy.pump.center}</strong>
        <ul>
          {copy.pump.nodes.map((node) => <li key={node}>{node}</li>)}
        </ul>
      </div>
    </>
  )
}

/** NEW 03 · 데이터 형태(보조) → AI-READY 여섯 층(핵심) → P-101 관계지도 → 암묵지 ≠ 비정형(보조 노트). */
export function AiReadyData() {
  return (
    <section className="ai-found ai-found--bright ai-ready" id="ai-ready-data" aria-labelledby="ai-ready-data-title">
      <div className="ai-found__inner">
        <FoundationHead eyebrow={copy.eyebrow} title={copy.title} id="ai-ready-data-title" />

        <Reveal as="figure" className="ai-ready__forms">
          <figcaption className="axis-tag axis-tag--form">
            <span className="axis-tag__ko">{copy.formsAxis.ko}</span>
            <span className="axis-tag__en">{copy.formsAxis.en}</span>
            <span className="axis-tag__hint">{copy.formsAxis.hint}</span>
          </figcaption>
          <ul>
            {copy.forms.map(([name, examples]) => (
              <li key={name}>
                <strong>{name}</strong>
                <span>{examples}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="ai-ready__core">
          <Reveal className="ai-ready__statement">
            <h3>{copy.statement}</h3>
          </Reveal>
          <ol className="ai-ready__stack" aria-label="AI-READY DATA를 이루는 여섯 층">
            {copy.layers.map((layer, index) => (
              <Reveal as="li" className="ai-ready__layer" delay={index * 110} key={layer.name}>
                <strong>{layer.name}</strong>
                <em>{layer.question}</em>
                {'detail' in layer && <small>{layer.detail}</small>}
              </Reveal>
            ))}
            <Reveal as="li" className="ai-ready__layer ai-ready__layer--result" delay={copy.layers.length * 110}>
              <strong>{copy.result}</strong>
            </Reveal>
          </ol>
        </div>

        <Reveal as="figure" className="pump-map">
          <PumpMap />
          <figcaption>
            <div className="pump-map__copy">
              <p>
                {copy.pump.human[0]}
                <br />
                {copy.pump.human[1]}
              </p>
              <p>
                {copy.pump.ai[0]}
                <br />
                {copy.pump.ai[1]}
              </p>
            </div>
            <p className="pump-map__equation">
              {copy.pump.equation.map((term, index) => (
                <Fragment key={term}>
                  {index > 0 && <i>+</i>}
                  <span>{term}</span>
                </Fragment>
              ))}
            </p>
            <p className="pump-map__note">{copy.pump.note}</p>
          </figcaption>
        </Reveal>

        <Reveal as="aside" className="tacit-note">
          <p className="tacit-note__label">
            <span>{copy.tacit.eyebrow}</span>
            {copy.tacit.label}
          </p>
          <div className="tacit-note__grid">
            <div className="tacit-note__row">
              <strong>{copy.tacit.recorded.label}</strong>
              <span className="tacit-note__chips">
                {copy.tacit.recorded.items.map((item) => <b key={item}>{item}</b>)}
              </span>
              <i aria-hidden="true">→</i>
              <em>{copy.tacit.recorded.result}</em>
            </div>
            <div className="tacit-note__row tacit-note__row--mind">
              <strong>{copy.tacit.mind.label}</strong>
              <span className="tacit-note__chips">
                {copy.tacit.mind.items.map((item) => <b key={item}>{item}</b>)}
              </span>
              <i aria-hidden="true">→</i>
              <em>{copy.tacit.mind.result}</em>
              <i aria-hidden="true">→</i>
              <span className="tacit-note__chips tacit-note__chips--bridge">
                {copy.tacit.mind.bridge.map((item) => <b key={item}>{item}</b>)}
              </span>
              <i aria-hidden="true">→</i>
              <em className="is-final">{copy.tacit.mind.final}</em>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
