import { Reveal } from './Reveal'

const executiveOwns = ['무엇을 만들 것인가', '왜 필요한가', '어떤 업무가 중요한가', '어떤 지식과 데이터가 필요한가', '결과가 실제 업무에 의미가 있는가']
const aceOwns = ['어떻게 구현할 것인가', '업무 구조화', '데이터 / 자료 위치 정리', 'AI 적용방법 설계', 'PRD / SPEC 지원', 'Prototype 제작', '반복 개선']

/** EXECUTIVE = WHAT / WHY × ACE = HOW. 원문 contrast-pair를 감싸고 역할 목록만 더한다. */
export function RoleSplit() {
  return (
    <Reveal className="role-split">
      <div className="contrast-pair">
        <div className="contrast-pair__side contrast-pair__side--accent">
          <span>EXECUTIVE · 실장</span>
          <strong>문제와 결정을 맡습니다</strong>
          <p>무엇이 중요한지 알고, 우선순위를 정하고, 결과가 실제 업무에 맞는지 판단합니다.</p>
          <b className="role-split__tag">WHAT / WHY</b>
          <ul className="role-split__list">
            {executiveOwns.map((item, index) => (
              <Reveal as="li" delay={index * 90} key={item}>{item}</Reveal>
            ))}
          </ul>
        </div>
        <span className="contrast-pair__op" aria-hidden="true">×</span>
        <div className="contrast-pair__side">
          <span>ACE</span>
          <strong>정리와 구현을 지원합니다</strong>
          <p>맥락을 정리하고, 막힌 곳을 함께 풀고, AI와 구현 작업을 이어갈 수 있게 돕습니다.</p>
          <b className="role-split__tag">HOW</b>
          <ul className="role-split__list">
            {aceOwns.map((item, index) => (
              <Reveal as="li" delay={index * 90} key={item}>{item}</Reveal>
            ))}
          </ul>
        </div>
      </div>
      <p className="role-split__equation">
        <span>EXECUTIVE = WHAT / WHY</span>
        <span>ACE = HOW</span>
      </p>
      <p className="role-split__line">실장은 개발자가 되는 것이 아닙니다.</p>
    </Reveal>
  )
}
