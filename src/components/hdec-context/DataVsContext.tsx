import { Reveal } from '../Reveal'
import { dataContext } from '../../content/hdec-context'

export function DataVsContext() {
  return (
    <div className="context-visual data-context">
      <Reveal className="context-visual__head">
        <p>{dataContext.eyebrow}</p>
        <h2>{dataContext.title}</h2>
      </Reveal>

      <div className="data-context__map" aria-label="시스템과 기록은 있지만 AI에 회사 맥락이 자동으로 연결되지는 않는 구조">
        <div className="data-context__sources">
          {dataContext.systems.map((system, index) => (
            <Reveal className="data-context__pair" delay={index * 80} key={system}>
              <strong>{system}</strong>
              <i aria-hidden="true" />
              <span>{dataContext.records[index]}</span>
            </Reveal>
          ))}
        </div>
        <div className="data-context__unknown" aria-hidden="true">
          <span>?</span><i /><span>?</span>
        </div>
        <Reveal className="data-context__ai" delay={450}>
          <strong>AI</strong>
          <span>?</span>
        </Reveal>
      </div>

      <Reveal className="data-context__distinction">
        <p className="data-context__caption">보조 도식 · 서로 다른 두 축</p>
        <div className="data-context__axes">
          {dataContext.axes.map((axis) => (
            <div className="data-context__axis" key={axis.label}>
              <strong>{axis.label}</strong>
              <span>{axis.start}</span>
              <i aria-hidden="true" />
              <span>{axis.end}</span>
            </div>
          ))}
          <b>{dataContext.distinction}</b>
        </div>
        <div className="data-context__knowledge">
          <div>
            <strong>{dataContext.recorded}</strong>
            <i aria-hidden="true">→</i>
            <span>{dataContext.recordedResult}</span>
          </div>
          <div>
            <strong>{dataContext.tacit}</strong>
            <i aria-hidden="true">→</i>
            <span>{dataContext.tacitBridge}</span>
            <i aria-hidden="true">→</i>
            <span>{dataContext.tacitResult}</span>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
