import { Reveal } from './Reveal'
import { claudeDesign as copy } from '../content/claude-design'

/** 02 CH 04 · 역할 4개 뒤 삽입. 디자인을 말로만 전달하지 않고 Claude Design으로 먼저 보이게 만든 뒤 개발로 넘기는 흐름. */
export function ClaudeDesignFlow() {
  return (
    <Reveal as="figure" className="design-handoff">
      <figcaption>
        <span>{copy.eyebrow}</span>
        <strong>
          {copy.statement[0]}
          <br />
          {copy.statement[1]}
          <br />
          {copy.statement[2]}
        </strong>
      </figcaption>
      <ol className="design-handoff__flow">
        {copy.flow.map((step, index) => (
          <li className={`design-handoff__step${'items' in step ? ' design-handoff__step--design' : ''}`} key={step.name}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step.name}</strong>
            {'items' in step && (
              <ul>
                {step.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ol>
      <ul className="design-handoff__caps">
        {copy.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
      </ul>
    </Reveal>
  )
}
