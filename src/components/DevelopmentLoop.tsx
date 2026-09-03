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
          style={{
            display: 'grid',
            gridTemplateColumns: '9rem 1fr',
            gap: '1rem',
            alignItems: 'center',
            marginBottom: '0.8rem',
            padding: '0.85rem 1rem',
            border: 'var(--border-light)',
          }}
        >
          <strong
            style={{
              color: 'var(--color-signal)',
              fontFamily: 'var(--font-editorial)',
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
            }}
          >
            HARNESS
          </strong>
          <span style={{ fontSize: '0.86rem', lineHeight: 1.55 }}>
            Planner · Builder · Reviewer · Actual User와 각 단계의 AI·도구·검증 절차를 하나의 제품 제작 구조로 묶은 방식
          </span>
        </div>

        <svg
          viewBox="0 0 1200 170"
          role="img"
          aria-label="AI Agent가 Planner, Builder, Reviewer 1~3단계를 실행하고 Actual User가 최종 판단하는 구조"
          style={{ width: '100%', height: 'auto', display: 'block', marginBottom: '0.8rem' }}
        >
          <defs>
            <marker id="agent-flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-signal)" />
            </marker>
          </defs>

          <rect x="8" y="10" width="875" height="148" rx="18" fill="rgba(205,255,73,0.08)" stroke="var(--color-mint)" strokeWidth="2" />
          <text x="32" y="34" fill="var(--color-mint)" fontSize="12" fontWeight="800" letterSpacing="2">01–03 · AI AGENT EXECUTION</text>

          <circle cx="108" cy="91" r="43" fill="var(--color-signal)" />
          <text x="108" y="86" textAnchor="middle" fill="var(--color-spruce-deep)" fontSize="13" fontWeight="800">AI</text>
          <text x="108" y="104" textAnchor="middle" fill="var(--color-spruce-deep)" fontSize="13" fontWeight="800">AGENT</text>

          <line x1="154" y1="91" x2="232" y2="91" stroke="var(--color-signal)" strokeWidth="2" markerEnd="url(#agent-flow-arrow)" />
          <rect x="242" y="53" width="170" height="76" rx="8" fill="transparent" stroke="var(--color-mint)" strokeWidth="2" />
          <text x="327" y="82" textAnchor="middle" fill="var(--color-paper-bright)" fontSize="12" fontWeight="800">01</text>
          <text x="327" y="104" textAnchor="middle" fill="var(--color-paper-bright)" fontSize="16" fontWeight="800">PLANNER</text>

          <line x1="414" y1="91" x2="470" y2="91" stroke="var(--color-signal)" strokeWidth="2" markerEnd="url(#agent-flow-arrow)" />
          <rect x="480" y="53" width="170" height="76" rx="8" fill="transparent" stroke="var(--color-mint)" strokeWidth="2" />
          <text x="565" y="82" textAnchor="middle" fill="var(--color-paper-bright)" fontSize="12" fontWeight="800">02</text>
          <text x="565" y="104" textAnchor="middle" fill="var(--color-paper-bright)" fontSize="16" fontWeight="800">BUILDER</text>

          <line x1="652" y1="91" x2="708" y2="91" stroke="var(--color-signal)" strokeWidth="2" markerEnd="url(#agent-flow-arrow)" />
          <rect x="718" y="53" width="140" height="76" rx="8" fill="transparent" stroke="var(--color-mint)" strokeWidth="2" />
          <text x="788" y="82" textAnchor="middle" fill="var(--color-paper-bright)" fontSize="12" fontWeight="800">03</text>
          <text x="788" y="104" textAnchor="middle" fill="var(--color-paper-bright)" fontSize="16" fontWeight="800">REVIEWER</text>

          <line x1="885" y1="91" x2="936" y2="91" stroke="var(--color-signal)" strokeWidth="2" markerEnd="url(#agent-flow-arrow)" />
          <polygon points="1048,22 1178,91 1048,160 918,91" fill="var(--color-signal)" />
          <text x="1048" y="75" textAnchor="middle" fill="var(--color-spruce-deep)" fontSize="12" fontWeight="800">04 · HUMAN JUDGMENT</text>
          <text x="1048" y="101" textAnchor="middle" fill="var(--color-spruce-deep)" fontSize="17" fontWeight="900">ACTUAL USER</text>
          <text x="1048" y="121" textAnchor="middle" fill="var(--color-spruce-deep)" fontSize="11" fontWeight="700">EXECUTIVE</text>
        </svg>

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

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '9rem 1fr',
            gap: '1rem',
            alignItems: 'center',
            marginTop: '1.2rem',
            paddingTop: '1rem',
            borderTop: 'var(--border-light)',
          }}
        >
          <strong
            style={{
              color: 'var(--color-signal)',
              fontFamily: 'var(--font-editorial)',
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
            }}
          >
            LOOP ↺
          </strong>
          <span style={{ fontSize: '0.86rem', lineHeight: 1.55 }}>
            이 Harness를 PLAN → BUILD → REVIEW → USE → FIX로 반복할수록 작업 맥락과 검증 기준이 축적되어 개발 속도와 정확도를 높일 수 있습니다.
          </span>
        </div>
      </figure>

      <div className="prd-principle">
        <span>BEFORE YOU DELEGATE · GOOD INSTRUCTION</span>
        <h3>
          AI도 사람과 같습니다.
          <br />
          일을 맡길 때, 정확한 업무지시는 필수입니다.
        </h3>
        <p>프롬프트는 어떤 목적을 원하고, 왜 원하는지, 어떤 조건들을 준수하며 작업 할 지를 분명히 전달하는 것이 중요합니다.</p>
        <div className="instruction-grid-six">
          <LabeledGrid items={instructionParts} />
        </div>
      </div>

      <div className="prd-principle">
        <span>CONTEXT · WHAT AI DOES NOT KNOW</span>
        <h3>
          AI가 모르는 업무 맥락은
          <br />
          사람이 채워야 합니다.
        </h3>
        <p>
          AI는 조직의 업무 배경을 저절로 알지 못합니다. 자료를 많이 넣는 것이 아니라
          <strong> 결과를 판단하는 데 필요한 사용자·상황·현재 방식·근거·경계</strong>를 작업 맥락으로 줍니다.
        </p>
        <div className="context-grid-visible">
          <LabeledGrid items={contextParts} />
        </div>
      </div>
    </>
  )
}
