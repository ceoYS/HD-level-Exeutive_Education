import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type TryThisPromptProps = {
  heading?: string
  children: ReactNode
}

/**
 * "이렇게 말해보세요" 프레이밍으로 복사 가능한 지시문(PromptBlock)을 감싼다.
 */
export function TryThisPrompt({ heading = '이렇게 말해보세요', children }: TryThisPromptProps) {
  return (
    <Reveal className="try-this">
      <p className="try-this__eyebrow">
        <span aria-hidden="true" />
        SAY THIS · {heading}
      </p>
      <div className="try-this__body">{children}</div>
    </Reveal>
  )
}
