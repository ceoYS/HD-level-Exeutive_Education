import { Reveal } from './Reveal'

const steps = [
  ['INSIGHT', '현업 경험에서 중요한 Pain Point를 발견합니다.'],
  ['DEFINE', '누구의 어떤 문제인지 구체적으로 정의합니다.'],
  ['PROTOTYPE', 'AI 바이브코딩으로 가장 작은 제품 형태를 빠르게 만듭니다.'],
  ['TEST', '실제 업무에서 직접 사용해 가설을 확인합니다.'],
  ['REFINE', '관찰한 차이만 다시 제품에 반영합니다.'],
]

export function InsightDiamond() {
  return (
    <Reveal className="insight-diamond">
      <div className="insight-diamond__copy">
        <span>DESIGN THINKING · EXECUTIVE ATTITUDE</span>
        <h3>좋은 제품의 출발점은<br />임원진의 깊은 인사이트입니다.</h3>
        <p>
          AI가 빠르게 구현해준다고 해서 처음 떠오른 해결책을 바로 만드는 것이 아니라,
          <strong> 사람과 문제를 먼저 이해하고 작은 형태로 시험한 뒤 다시 고칩니다.</strong>
        </p>
      </div>

      <div className="insight-diamond__visual" aria-label="임원진의 인사이트가 제품으로 다듬어지는 디자인씽킹 흐름">
        <div className="insight-diamond__stage" aria-hidden="true">
          <div className="insight-diamond__gem">
            <span className="insight-diamond__face insight-diamond__face--front">INSIGHT</span>
            <span className="insight-diamond__face insight-diamond__face--back">JUDGMENT</span>
            <span className="insight-diamond__face insight-diamond__face--left">EXPERIENCE</span>
            <span className="insight-diamond__face insight-diamond__face--right">CONTEXT</span>
          </div>
        </div>
        <p>EXECUTIVE INSIGHT · THE DIAMOND</p>
      </div>

      <ol className="insight-diamond__steps">
        {steps.map(([title, text], index) => (
          <li key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{title}</strong>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  )
}
