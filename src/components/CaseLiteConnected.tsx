import type { ReactNode } from 'react'
import { NavigateLink } from './NavigateLink'
import { Reveal } from './Reveal'
import { aiRoles } from '../content/ai-roles'
import type { CaseData } from '../content/cases'

function Chain({ steps, tone, delay = 0 }: { steps: string[]; tone: 'lite' | 'connected'; delay?: number }) {
  return (
    <ol className={`case-chain case-chain--${tone}`}>
      {steps.map((step, index) => (
        <Reveal as="li" delay={delay + index * 140} key={step}>
          <span>{step}</span>
          {index < steps.length - 1 && <i aria-hidden="true">↓</i>}
        </Reveal>
      ))}
    </ol>
  )
}

/** 대표 사례 1개 = LITE · 지금 바로 / CONNECTED · 연결하면 두 열. 역할 chip은 05 STEP 1과 같은 문자열. */
export function CaseLiteConnected({ data, children }: { data: CaseData; children?: ReactNode }) {
  return (
    <div className="case-block" id={`case-${data.number}`}>
      <Reveal className="case-block__head">
        <p className="case-block__eyebrow">
          <span>CASE {data.number} · {data.title}</span>
          <span className="case-block__roles">
            {data.roles.map((key) => {
              const role = aiRoles.find((item) => item.key === key)!
              return <b key={key}>{role.name}</b>
            })}
          </span>
        </p>
        <h2>{data.headline}</h2>
      </Reveal>

      <div className="case-block__columns">
        <div className="case-column case-column--lite">
          <p className="case-column__label">LITE · 지금 바로</p>
          <Chain steps={data.lite} tone="lite" />
        </div>
        <div className="case-column case-column--connected">
          <p className="case-column__label">CONNECTED · 연결하면</p>
          <Chain steps={data.connected} tone="connected" delay={500} />
          {data.connectedNote && (
            <NavigateLink href={data.connectedNote.href} className="case-column__note">
              {data.connectedNote.label} <i aria-hidden="true">↗</i>
            </NavigateLink>
          )}
        </div>
      </div>

      {children}
    </div>
  )
}
