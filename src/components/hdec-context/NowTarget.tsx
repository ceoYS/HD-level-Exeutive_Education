import { Reveal } from '../Reveal'
import { nowTarget } from '../../content/hdec-context'

export function NowTarget() {
  return (
    <div className="context-visual now-target">
      <Reveal className="context-visual__head">
        <p>{nowTarget.eyebrow}</p>
        <h2>{nowTarget.title}</h2>
      </Reveal>

      <div className="now-target__compare">
        <Reveal className="now-target__side now-target__side--now">
          <p>NOW</p>
          <div className="now-target__systems">
            {nowTarget.systems.map((system) => <span key={system}>{system}</span>)}
          </div>
          <strong>각 시스템에 존재</strong>
          <ol>{nowTarget.nowFlows.map((flow) => <li key={flow}>{flow}</li>)}</ol>
        </Reveal>

        <div className="now-target__divider" aria-hidden="true"><span>→</span></div>

        <Reveal className="now-target__side now-target__side--target" delay={300}>
          <p>TARGET</p>
          <strong>{nowTarget.systems.join(' + ')}</strong>
          <i aria-hidden="true">↓</i>
          <b>MCP / API / 권한</b>
          <i aria-hidden="true">↓</i>
          <div className="now-target__context">
            <em>HDEC BUSINESS CONTEXT</em>
            <div>{nowTarget.context.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
          <i aria-hidden="true">↓</i>
          <b>AI</b>
          <i aria-hidden="true">↓</i>
          <strong>전사 → 본부 → 부서 → 개인</strong>
        </Reveal>
      </div>

      <Reveal className="now-target__conclusion">{nowTarget.conclusion}</Reveal>
    </div>
  )
}
