import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type MissionProps = {
  number: string
  title: string
  goal: string
  minutes?: string
  steps: string[]
  children?: ReactNode
}

/**
 * Book 05의 실습 미션. 휴대폰/태블릿에서도 따라갈 수 있도록 단계는 짧고 명확하게.
 */
export function Mission({ number, title, goal, minutes, steps, children }: MissionProps) {
  return (
    <section className="mission" id={`mission-${number}`}>
      <Reveal className="mission__head">
        <div className="mission__index">
          <span>MISSION</span>
          <strong>{number}</strong>
        </div>
        <div className="mission__headline">
          <h3>{title}</h3>
          <p className="mission__goal">
            <span>목표</span>
            {goal}
          </p>
          {minutes && <p className="mission__minutes">약 {minutes}</p>}
        </div>
      </Reveal>

      <Reveal className="mission__steps" delay={60}>
        <p className="mission__label">따라 하기</p>
        <ol>
          {steps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      {children && <div className="mission__body">{children}</div>}
    </section>
  )
}
