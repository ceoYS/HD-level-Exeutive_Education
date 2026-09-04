import { useState } from 'react'
import { ExploreTypesReference } from './ExploreTypesReference'
import { Reveal } from './Reveal'
import { aiRoles } from '../content/ai-roles'

/** STEP 1 · AI에게 어떤 일을 맡기고 싶습니까? 기술 분류보다 역할이 먼저. 기술 분류는 아래 ACE 참고 접이식. */
export function RoleSelect() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="role-select">
      <Reveal className="role-select__head">
        <p className="step-eyebrow">STEP 1 · AI에게 맡길 역할</p>
        <p className="role-select__not"><s>어떤 기술을 만들고 싶습니까?</s></p>
        <h2>AI에게 어떤 일을 맡기고 싶습니까?</h2>
      </Reveal>

      <div className="role-select__cards" role="radiogroup" aria-label="AI에게 맡길 역할">
        {aiRoles.map((role, index) => (
          <Reveal as="label" className={`role-card${selected === role.key ? ' is-selected' : ''}`} delay={index * 120} key={role.key}>
            <input type="radio" name="ai-role" value={role.key} checked={selected === role.key} onChange={() => setSelected(role.key)} />
            <strong>{role.name}</strong>
            <p>{role.desc}</p>
            <small>예 · {role.example}</small>
            <span className="role-card__check"><i aria-hidden="true" />선택</span>
          </Reveal>
        ))}
      </div>

      <Reveal className="role-select__ace" delay={200}>
        <p>ACE가 구현 방식으로 바꿉니다 · 임원이 외울 내용이 아닙니다.</p>
        <div className="role-select__map">
          {aiRoles.map((role) => (
            <span className={selected === null || selected === role.key ? 'is-on' : ''} key={role.key}>{role.ace}</span>
          ))}
        </div>
      </Reveal>

      <details className="ace-reference">
        <summary>
          <span>ACE 참고 · 구현 유형 4가지</span>
          <i aria-hidden="true">+</i>
        </summary>
        <div className="ace-reference__body">
          <ExploreTypesReference />
        </div>
      </details>
    </div>
  )
}
