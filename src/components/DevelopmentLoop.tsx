import { LabeledGrid } from './LabeledGrid'

const roles = [
  { number: '01', role: 'PLANNER', title: '문제와 요구사항을 문서로 정리', tools: 'ChatGPT Project · Claude Project' },
  { number: '02', role: 'BUILDER', title: '실제 파일을 읽고 수정 · 실행', tools: 'Claude Code · Codex · Cursor · Antigravity' },
  { number: '03', role: 'REVIEWER', title: '다른 검토와 테스트로 작동 여부 확인', tools: 'Agent / Test / Build / Lint / Browser / Visual' },
  { number: '04', role: 'ACTUAL USER', title: '실장이 직접 써보고 업무와 다른 지점 확인', tools: '현장 판단 → 정밀 수정 요청' },
]

const instructionParts = [
  { en: 'GOAL', label: '목적', desc: '무엇을 이루려는가' },
  { en: 'BACKGROUND', label: '배경', desc: '왜 필요한가 · 어떤 상황인가' },
  { en: 'INPUT', label: '입력', desc: '어떤 자료·데이터로 시작하는가' },
  { en: 'OUTPUT', label: '원하는 결과', desc: '어떤 형태로 받고 싶은가' },
  { en: 'CONSTRAINTS', label: '제약', desc: '지켜야 할 범위·금지사항' },
  { en: 'CRITERIA', label: '판단 기준', desc: '무엇이 좋은 결과인가' },
]

const contextParts = [
  { en: 'WHO', label: '사용자·독자', desc: '누가 결과를 쓰거나 보는가' },
  { en: 'WHEN', label: '사용 상황', desc: '언제 어떤 업무에서 쓰는가' },
  { en: 'CURRENT', label: '현재 방식', desc: '지금은 어떻게 일하고 있는가' },
  { en: 'MATERIALS', label: '근거 자료', desc: '기존 문서·파일·예시·데이터' },
  { en: 'BOUNDARY', label: '경계', desc: '이번에 건드릴 것과 건드리지 않을 것' },
]

export function DevelopmentLoop() {
  return (
    <>
      <figure className="development-loop">
        <figcaption>
          <span>HOW AI DEVELOPMENT ACTUALLY WORKS</span>
          <strong>계획하고, 만들고, 검토하고, 직접 씁니다.</strong>
        </figcaption>
        <div
          aria-label="01 Planner부터 03 Reviewer까지는 AI Agent가 자동화하고 04 Actual User는 임원진이 직접 판단합니다."
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            marginBottom: '0.6rem',
            fontFamily: 'var(--font-editorial)',
            fontSize: '0.68rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
          }}
        >
          <div
            style={{
              gridColumn: '1 / 4',
              display: 'flex',
              justifyContent: 'space-between',
              gap: '1rem',
              padding: '0.75rem 1rem',
              color: 'var(--color-spruce-deep)',
              border: 'var(--border-light)',
              background: 'var(--color-mint)',
            }}
          >
            <span>01–03 · AI AGENT · AUTOMATED</span>
            <strong>PLANNER → BUILDER → REVIEWER</strong>
          </div>
          <div
            style={{
              gridColumn: '4',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0.75rem 1rem',
              color: 'var(--color-spruce-deep)',
              border: 'var(--border-light)',
              background: 'var(--color-signal)',
              textAlign: 'center',
            }}
          >
            <span>04 · EXECUTIVE · HUMAN JUDGMENT</span>
          </div>
        </div>
        <ol>
          {roles.map((item, index) => (
            <li className={item.role === 'ACTUAL USER' ? 'is-human' : ''} key={item.role}>
              <span>{item.number} · ROLE</span>
              <strong>{item.role}</strong>
              <p>{item.title}</p>
              <small>{item.tools}</small>
              {index < roles.length - 1 && <i aria-hidden="true">→</i>}
            </li>
          ))}
        </ol>
        <b aria-hidden="true">TARGETED FIX ↺</b>
      </figure>

      <div className="prd-principle">
        <span>BEFORE YOU DELEGATE · GOOD INSTRUCTION</span>
        <h3>AI에게 일을 맡길 때도 좋은 업무지시가 먼저입니다.</h3>
        <p>
          프롬프트 문구를 외우는 것보다 <strong>무엇을 왜 원하는지, 무엇을 주고 어떤 결과를 받을지,
          어디까지 허용할지</strong>를 분명히 전달하는 것이 중요합니다.
        </p>
        <LabeledGrid items={instructionParts} />
      </div>

      <div className="prd-principle">
        <span>CONTEXT · WHAT AI DOES NOT KNOW</span>
        <h3>AI가 모르는 업무 맥락은 사람이 채워야 합니다.</h3>
        <p>
          AI는 조직의 업무 배경을 저절로 알지 못합니다. 자료를 많이 넣는 것이 아니라
          <strong> 결과를 판단하는 데 필요한 사용자·상황·현재 방식·근거·경계</strong>를 작업 맥락으로 줍니다.
        </p>
        <LabeledGrid items={contextParts} />
      </div>
    </>
  )
}
