import { PromptBlock } from './PromptBlock'
import { Reveal } from './Reveal'

type Level = 'BAD' | 'BETTER' | 'ADVANCED'

export type PromptStep = {
  level: Level
  label: string
  prompt: string
  note?: string
}

const tones: Record<Level, 'light' | 'dark' | 'signal'> = {
  BAD: 'light',
  BETTER: 'dark',
  ADVANCED: 'signal',
}

const levelKorean: Record<Level, string> = {
  BAD: '약한 지시',
  BETTER: '더 나은 지시',
  ADVANCED: '숙련된 지시',
}

type PromptProgressionProps = {
  steps: PromptStep[]
}

/**
 * 같은 목표를 향한 프롬프트의 진화: BAD → BETTER → ADVANCED.
 * BAD 예시는 복사 버튼 없이 흐리게, 나머지는 복사 가능하게 보여준다.
 */
export function PromptProgression({ steps }: PromptProgressionProps) {
  return (
    <div className="prompt-progression">
      {steps.map((step, index) => (
        <Reveal className={`prompt-progression__step is-${step.level.toLowerCase()}`} delay={index * 80} key={step.level}>
          <div className="prompt-progression__meta">
            <span className="prompt-progression__level">{step.level}</span>
            <span className="prompt-progression__level-ko">{levelKorean[step.level]}</span>
            {step.note && <p>{step.note}</p>}
          </div>
          <PromptBlock label={step.label} tone={tones[step.level]} copyable={step.level !== 'BAD'}>
            {step.prompt}
          </PromptBlock>
        </Reveal>
      ))}
    </div>
  )
}
