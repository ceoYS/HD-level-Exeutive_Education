import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type RealWorldExampleProps = {
  title: string
  scenario?: string
  eyebrow?: string
  synthetic?: boolean
  children?: ReactNode
}

export function RealWorldExample({
  title,
  scenario,
  eyebrow = 'HDEC FIELD SCENARIO',
  synthetic = true,
  children,
}: RealWorldExampleProps) {
  return (
    <Reveal className="real-example">
      <div className="real-example__rail">
        <span className="real-example__eyebrow">
          {eyebrow}
          {synthetic && <em>합성 예시</em>}
        </span>
        <strong>{title}</strong>
        {scenario && <p>{scenario}</p>}
      </div>
      {children && <div className="real-example__body">{children}</div>}
    </Reveal>
  )
}
