import { Fragment } from 'react'
import { Reveal } from '../Reveal'
import { FoundationHead } from './FoundationHead'
import { knowledge as copy } from '../../content/ai-foundation'

/** NEW 04 · MODEL KNOWLEDGE + (CONTEXT · RETRIEVAL · TOOLS/SYSTEMS) → BUSINESS RESULT. 하단에 Limit strip과 실제 사용(CHAT/AGENT) 예고 한 줄. */
export function ModelVsCompanyKnowledge() {
  return (
    <section className="ai-found ai-found--deep knowledge" id="ai-knowledge" aria-labelledby="ai-knowledge-title">
      <div className="ai-found__inner">
        <FoundationHead eyebrow={copy.eyebrow} title={copy.title} id="ai-knowledge-title" />

        <div className="knowledge__equation" role="group" aria-label="MODEL KNOWLEDGE + CONTEXT + RETRIEVAL + TOOLS / SYSTEMS → BUSINESS RESULT">
          <Reveal className="knowledge__model">
            <span>{copy.model.name}</span>
            <strong>{copy.model.lead}</strong>
            <small>{copy.model.note}</small>
          </Reveal>
          <i className="knowledge__plus" aria-hidden="true" />
          <div className="knowledge__company">
            {copy.company.map((group, index) => (
              <Reveal className="knowledge__group" delay={160 + index * 140} key={group.name}>
                <span>{group.name}</span>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
          <i className="knowledge__down" aria-hidden="true" />
          <Reveal className="knowledge__result" delay={640}>
            <strong>{copy.result}</strong>
          </Reveal>
        </div>

        <Reveal className="knowledge__statement">
          <h3>
            {copy.statement[0]}
            <br />
            {copy.statement[1]}
          </h3>
        </Reveal>

        <Reveal as="aside" className="limits">
          <p className="limits__eyebrow">{copy.limitsEyebrow}</p>
          <ul className="limits__list">
            {copy.limits.map(([left, right]) => (
              <li key={left}>
                <span>{left}</span>
                <i>≠</i>
                <span>{right}</span>
              </li>
            ))}
          </ul>
          <div className="limits__so">
            <strong>{copy.therefore}</strong>
            <p>
              {copy.design.map((term, index) => (
                <Fragment key={term}>
                  {index > 0 && <i aria-hidden="true">+</i>}
                  <b>{term}</b>
                </Fragment>
              ))}
            </p>
          </div>
        </Reveal>

        <Reveal className="knowledge__bridge">
          <p>
            {copy.bridge[0]}
            <br />
            {copy.bridge[1]}
            <br />
            {copy.bridge[2]}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
