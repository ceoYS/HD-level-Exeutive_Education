import { Reveal } from '../Reveal'
import { FoundationHead } from './FoundationHead'
import { dataRoles as copy } from '../../content/ai-foundation'

const delays: Record<string, number> = { training: 160, context: 280, retrieval: 400, operational: 520, feedback: 640 }

/** NEW 02 · 하나의 AI SYSTEM을 중심으로 다섯 데이터가 서로 다른 방향·역할로 연결되는 관계도. 카드 나열이 아니라 방향이 의미다. */
export function DataRoles() {
  return (
    <section className="ai-found ai-found--deep data-roles" id="ai-data-roles" aria-labelledby="ai-data-roles-title">
      <div className="ai-found__inner">
        <FoundationHead eyebrow={copy.eyebrow} title={copy.title} id="ai-data-roles-title" />

        <Reveal className="axis-tag">
          <span className="axis-tag__ko">{copy.axis.ko}</span>
          <span className="axis-tag__en">{copy.axis.en}</span>
          <span className="axis-tag__hint">{copy.axis.hint}</span>
        </Reveal>

        <div
          className="data-roles__map"
          role="group"
          aria-label="AI SYSTEM을 중심으로 Training, Context, Retrieval, Operational, Feedback 데이터가 서로 다른 역할로 연결되는 구조"
        >
          <Reveal className="data-roles__hub">
            <strong>{copy.hub}</strong>
          </Reveal>
          {copy.roles.map((role, index) => (
            <Reveal as="article" className={`data-roles__node data-roles__node--${role.key}`} delay={delays[role.key]} key={role.key}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{role.name}</strong>
              <p>{role.role}</p>
              <small>{role.examples}</small>
            </Reveal>
          ))}
          {copy.roles.map((role) => (
            <i className={`data-roles__link data-roles__link--${role.key}`} aria-hidden="true" key={`${role.key}-link`} />
          ))}
        </div>

        <Reveal className="data-roles__recap">
          <p className="data-roles__recap-label">{copy.recap}</p>
          <ol className="data-roles__memory">
            {copy.roles.map((role) => (
              <li key={role.key}>
                <strong>{role.short}</strong>
                <span>{role.memory}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
