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

/** Book 05의 실전 Playbook. 필요한 상황에서 바로 꺼내 쓰도록 짧고 명확하게 구성한다. */
export function Mission({ number, title, goal, minutes, steps, children }: MissionProps) {
  return (
    <section className="mission" id={`mission-${number}`}>
      <Reveal className="mission__head">
        <div className="mission__index">
          <span>PLAYBOOK</span>
          <strong>{number}</strong>
        </div>
        <div className="mission__headline">
          <h3>{title}</h3>
          <p className="mission__goal">
            <span>언제 쓰나</span>
            {goal}
          </p>
          {minutes && <p className="mission__minutes">약 {minutes}</p>}
        </div>
      </Reveal>

      <Reveal className="mission__steps" delay={60}>
        <p className="mission__label">이렇게 합니다</p>
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
