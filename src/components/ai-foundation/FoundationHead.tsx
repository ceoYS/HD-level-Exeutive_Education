import { Fragment } from 'react'
import { Reveal } from '../Reveal'

type FoundationHeadProps = {
  eyebrow: string
  title: readonly string[]
  id: string
}

/** 01 AI 신규 4 Visual 공통 머리. eyebrow + 큰 제목(줄 단위 고정 줄바꿈). */
export function FoundationHead({ eyebrow, title, id }: FoundationHeadProps) {
  return (
    <Reveal className="ai-found__head">
      <p className="ai-found__eyebrow">{eyebrow}</p>
      <h2 id={id}>
        {title.map((line, index) => (
          <Fragment key={line}>
            {index > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </h2>
    </Reveal>
  )
}
