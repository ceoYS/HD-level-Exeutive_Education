import { Reveal } from './Reveal'

const workChain = [
  ['업무', '무슨 일을 해결하려는가'],
  ['지식', '그 일을 잘하려면 무엇을 알아야 하는가'],
  ['데이터', '어떤 자료와 정보가 필요한가'],
  ['관계', '업무·문서·사람·시스템이 어떻게 연결되는가'],
  ['질문 / 행동', '그래서 AI에게 무엇을 맡길 것인가'],
] as const

type WorkChainProps = {
  questions?: boolean
  compact?: boolean
}

/** 업무 → 지식 → 데이터 → 관계 → 질문 / 행동. 03 BRIDGE(질문 표시)와 05 BLUEPRINT(compact)가 같은 컴포넌트를 쓴다. */
export function WorkChain({ questions = true, compact = false }: WorkChainProps) {
  return (
    <ol className={`work-chain${compact ? ' work-chain--compact' : ''}`} aria-label="업무에서 질문과 행동까지">
      {workChain.map(([label, question], index) => (
        <Reveal as="li" delay={index * 120} key={label}>
          <strong>{label}</strong>
          {questions && <p>{question}</p>}
          {index < workChain.length - 1 && <i aria-hidden="true">→</i>}
        </Reveal>
      ))}
    </ol>
  )
}
