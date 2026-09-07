import { ExecutiveTakeaway } from '../Callout'
import { Reveal } from '../Reveal'
import { FoundationHead } from './FoundationHead'
import { trainingVsUse as copy } from '../../content/ai-foundation'

/** NEW 01 · AI를 만드는 학습(좌)과 AI를 사용하는 대화(우)를 나란히 대비한다. 문서 투입은 재학습이 아니라 맥락 제공. */
export function TrainingVsUse() {
  const { make, use } = copy

  return (
    <section className="ai-found ai-found--paper training-use" id="ai-training-use" aria-labelledby="ai-training-use-title">
      <div className="ai-found__inner">
        <FoundationHead eyebrow={copy.eyebrow} title={copy.title} id="ai-training-use-title" />

        <div className="training-use__compare">
          <Reveal as="figure" className="training-use__side training-use__side--make">
            <figcaption>{make.label}</figcaption>
            <ol className="training-use__chain">
              <li className="training-use__step training-use__step--source">
                <div>
                  <strong>{make.data.name}</strong>
                  <span>{make.data.note}</span>
                </div>
                <i aria-hidden="true">+</i>
                <div>
                  <strong>{make.compute}</strong>
                </div>
              </li>
              {make.steps.map((step) => (
                <li className="training-use__step" key={step.name}>
                  <strong>{step.name}</strong>
                  <span>{step.note}</span>
                </li>
              ))}
              <li className="training-use__step training-use__step--result">
                <strong>{make.result}</strong>
              </li>
            </ol>
          </Reveal>

          <div className="training-use__divider" aria-hidden="true" />

          <Reveal as="figure" className="training-use__side training-use__side--use" delay={220}>
            <figcaption>{use.label}</figcaption>
            <ol className="training-use__chain">
              <li className="training-use__step training-use__step--inputs">
                {use.inputs.map((input) => <b key={input}>{input}</b>)}
              </li>
              <li className="training-use__step">
                <strong>{use.step}</strong>
              </li>
              <li className="training-use__step training-use__step--result">
                <strong>{use.result}</strong>
              </li>
            </ol>
          </Reveal>
        </div>

        <ExecutiveTakeaway>
          <p>
            <strong>
              {copy.takeaway[0]}
              <br />
              {copy.takeaway[1]}
            </strong>
          </p>
          <p>{copy.support}</p>
        </ExecutiveTakeaway>
      </div>
    </section>
  )
}
