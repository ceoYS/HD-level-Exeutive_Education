import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionIntroProps = {
  number: string
  title: ReactNode
  english?: string
  children?: ReactNode
  inverse?: boolean
  label?: string
}

export function SectionIntro({ number, title, english, children, inverse = false, label = 'CHAPTER' }: SectionIntroProps) {
  return (
    <Reveal className={`section-intro${inverse ? ' section-intro--inverse' : ''}`}>
      <p className="section-intro__number">{label} {number}</p>
      <div className="section-intro__title">
        {english && <span>{english}</span>}
        <h2>{title}</h2>
      </div>
      {children && <div className="section-intro__copy">{children}</div>}
    </Reveal>
  )
}
