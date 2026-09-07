import { PromptBlock } from './PromptBlock'
import { Reveal } from './Reveal'
import { WorkChain } from './WorkChain'

const cells = [
  ['①', '대상 업무', '← 할 일 01'],
  ['②', '현재 업무 흐름', '← 할 일 03'],
  ['③', '핵심 지식', '← BRIDGE · 지식'],
  ['④', '필요한 데이터 / 자료', '← BRIDGE · 데이터 · W06'],
  ['⑤', '업무·문서·사람·시스템 관계', '← BRIDGE · 관계'],
  ['⑥', 'AI가 맡아야 할 질문 또는 행동', '← STEP 1 역할 · 할 일 05'],
  ['⑦', '현재 부족한 조건', '← 데이터 / 권한 / 기록'],
  ['⑧', '이번 과제에서 실제로 만들 범위', '← 할 일 02 · 04 · 06'],
]

const blueprintPrompt =
  '지금까지 정리한 대상 업무, 현재 업무 흐름, 핵심 지식, 필요한 데이터와 자료, 업무·문서·사람·시스템 관계, AI에게 맡길 질문이나 행동, 현재 부족한 조건, 이번에 만들 범위를 1 PAGE BLUEPRINT 한 장으로 정리해줘. 모르는 값은 TBD로 남기고, 내가 말하지 않은 내용은 추가하지 말고 질문으로 남겨줘.'

/** W01 Build Brief를 8칸 설계도로 넓힌 BUILD GATE. 최종 산출물이 아니라 W02 PRD로 넘어가는 관문. */
export function Blueprint() {
  return (
    <Reveal className="blueprint" id="blueprint">
      <div className="blueprint__head">
        <p className="step-eyebrow">1 PAGE BLUEPRINT · BUILD GATE</p>
        <p>Build Brief를 8칸 설계도 한 장으로 넓힙니다.</p>
      </div>
      <WorkChain questions={false} compact />
      <ol className="blueprint__grid">
        {cells.map(([mark, label, source]) => (
          <li key={label}>
            <span>{mark}</span>
            <strong>{label}</strong>
            <small>{source}</small>
          </li>
        ))}
      </ol>
      <p className="blueprint__gate">GATE · 8칸이 채워지면 W02 PRD로 넘어갑니다.</p>
      <details className="blueprint__prompt">
        <summary>
          <span>OPTIONAL TIP · BLUEPRINT 프롬프트</span>
          <i aria-hidden="true">+</i>
        </summary>
        <div>
          <PromptBlock label="BLUEPRINT" tone="signal">{blueprintPrompt}</PromptBlock>
        </div>
      </details>
    </Reveal>
  )
}
