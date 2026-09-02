import { Reveal } from './Reveal'
import { NavigateLink } from './NavigateLink'

const flywheel = [
  ['KNOWLEDGE', 'Tacit + Explicit Knowledge'],
  ['CONTROL', '사내 통제형 AI 인프라'],
  ['ACCESS', 'RAG · Search · MCP · Agents'],
  ['BUILD', 'Custom Software'],
  ['FLOW', 'Workflow Automation'],
  ['DECIDE', 'Decision Support'],
  ['LEARN', 'New Operational Data'],
  ['REUSE', 'Organizational Knowledge'],
]

const controlRequirements = [
  'IDENTITY / ACCESS CONTROL',
  'DATA CLASSIFICATION',
  'ENCRYPTION',
  'AUDIT LOGS',
  'MODEL GATEWAY',
  'USAGE / COST CONTROL',
  'APPROVED MODEL ROUTING',
  'RAG / INTERNAL SEARCH',
  'PERMISSIONS',
  'MONITORING',
  'GOVERNANCE',
]

const benchmarks = [
  {
    source: 'McKINSEY · E&C DIGITAL',
    metric: '14–15%',
    second: 'PRODUCTIVITY POTENTIAL',
    detail: '4–6% cost reduction potential도 함께 제시',
    caveat: '건설업 전반의 Digital Transformation 잠재치입니다. GenAI 단독 효과나 HDEC 예측치로 해석할 수 없습니다.',
    href: 'https://www.mckinsey.com/capabilities/operations/our-insights/decoding-digital-transformation-in-construction',
  },
  {
    source: 'HARVARD / BCG · KNOWLEDGE WORK',
    metric: '25%+',
    second: 'FASTER',
    detail: 'Human-rated performance 40%+ · task completion 12%+',
    caveat: 'AI capability frontier 안의 컨설팅형 지식 업무 결과이며 건설기업 전체 성과로 일반화할 수 없습니다.',
    href: 'https://aiinstitute.hbs.edu/navigating-the-jagged-technological-frontier/',
  },
  {
    source: 'MIT · NOY / ZHANG',
    metric: '40%',
    second: 'LOWER TASK TIME',
    detail: '평가 품질 약 18% 향상',
    caveat: '대학 교육을 받은 전문가의 제한된 글쓰기 과제에서 나온 task-specific 결과입니다.',
    href: 'https://economics.mit.edu/sites/default/files/inline-files/Noy_Zhang_1_0.pdf',
  },
  {
    source: 'RICS · AI IN CONSTRUCTION 2025',
    metric: 'EARLY',
    second: 'ADOPTION, RISING INTENT',
    detail: '대다수 응답 조직은 미도입 또는 초기 Pilot 단계',
    caveat: '경쟁사 대비 이점을 수치화하지 않습니다. 산업의 도입 방향과 장벽을 보는 자료입니다.',
    href: 'https://www.rics.org/news-insights/artificial-intelligence-in-construction-report',
  },
]

const kpis = [
  'PROCESS TIME',
  'REWORK',
  'ERROR RATE',
  'SEARCH TIME',
  'REPORT PREPARATION TIME',
  'DECISION LEAD TIME',
  'REUSE OF KNOWLEDGE',
  'USER ADOPTION',
]

export function HdecLeverageEpilogue() {
  return (
    <section className="hdec-leverage" id="hdec-leverage" aria-labelledby="hdec-leverage-title">
      <header className="hdec-leverage__opening">
        <p>FINAL COURSE EPILOGUE · THE REASON THIS MATTERS</p>
        <h2 id="hdec-leverage-title">HDEC AI<br />LEVERAGE</h2>
        <span>사람과 문서에 축적된 지식을 다음 판단과 도구로 다시 흐르게 하는 일</span>
      </header>

      <div className="hdec-leverage__body">
        <Reveal className="knowledge-premise">
          <div className="knowledge-premise__heading">
            <span>HDEC HAS</span>
            <h3>두 종류의<br />깊은 지식.</h3>
          </div>
          <div className="knowledge-pair">
            <article>
              <span>01 · PEOPLE</span>
              <h4>TACIT KNOWLEDGE</h4>
              <ul>
                <li>사람에게 축적된 판단</li>
                <li>노하우와 현장 감각</li>
                <li>프로젝트를 겪으며 배운 교훈</li>
                <li>문서만으로 옮기기 어려운 맥락</li>
              </ul>
            </article>
            <i aria-hidden="true">+</i>
            <article>
              <span>02 · RECORDS</span>
              <h4>EXPLICIT KNOWLEDGE</h4>
              <ul>
                <li>매뉴얼과 시방서</li>
                <li>보고서와 Lessons Learned</li>
                <li>프로젝트 문서</li>
                <li>축적된 정형·비정형 데이터</li>
              </ul>
            </article>
          </div>
        </Reveal>

        <Reveal className="construction-knowledge-note">
          <span>EXTERNAL RESEARCH · CONSTRUCTION KNOWLEDGE</span>
          <h3>프로젝트가 끝나도<br />지식까지 끝나서는 안 됩니다.</h3>
          <p>
            건설업은 프로젝트 단위로 조직과 참여자가 바뀌기 때문에, 경험과 교훈을 다음 프로젝트로
            전달·재사용하는 일이 오랫동안 지식관리의 과제로 지적돼 왔습니다.
          </p>
          <div className="research-links">
            <a href="https://salford-repository.worktribe.com/output/1461831/collaborative-knowledge-management-a-construction-case-study" target="_blank" rel="noreferrer">Dave & Koskela · Automation in Construction ↗</a>
            <a href="https://epress.lib.uts.edu.au/journals/index.php/AJCEB/article/view/8390" target="_blank" rel="noreferrer">Hubbard et al. · Lessons Learned in Construction ↗</a>
            <a href="https://journals.vilniustech.lt/index.php/JCEM/article/view/16006" target="_blank" rel="noreferrer">Yepes & López · Construction Knowledge Management Review ↗</a>
          </div>
        </Reveal>

        <Reveal className="internal-premise">
          <span>CONNECTING KNOWLEDGE TO AI</span>
          <p>
            민감한 사내 지식과 데이터를 권한·감사·거버넌스까지 포함해 AI와 연결하려면, 일반
            소비자용 AI만으로는 운영 요구사항을 충족하기 어렵습니다.
            <br />
            접근 권한, 데이터 등급, 암호화, 로그, 모델 연결, 내부 검색과 거버넌스를 통제할 수
            있는 ‘사내 통제형 AI 인프라’가 필요합니다.
          </p>
        </Reveal>

        <Reveal className="controlled-infrastructure">
          <div className="controlled-infrastructure__intro">
            <span>CONTROLLED AI INFRASTRUCTURE</span>
            <h3>사내 통제형<br />AI 인프라</h3>
            <p>
              물리 Server 한 대가 있다고 AI가 안전해지는 것은 아닙니다. 어떤 배치 형태를 고르든 사람,
              데이터, 모델, 비용, 행동을 통제하고 기록하는 운영 체계가 함께 있어야 합니다.
            </p>
          </div>
          <div className="deployment-options">
            <span>ON-PREMISES</span>
            <span>PRIVATE CLOUD / VPC</span>
            <span>APPROVED ENTERPRISE MODEL ENDPOINTS</span>
          </div>
          <div className="control-requirements">
            {controlRequirements.map((item, index) => (
              <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>
            ))}
          </div>
        </Reveal>

        <Reveal as="figure" className="knowledge-flywheel">
          <figcaption>
            <span>HDEC KNOWLEDGE FLYWHEEL</span>
            <strong>지식이 업무를 만들고,<br />업무가 다시 지식을 남깁니다.</strong>
          </figcaption>
          <ol>
            {flywheel.map(([phase, label], index) => (
              <li className={index === 0 || index === flywheel.length - 1 ? 'is-knowledge' : index === 1 ? 'is-control' : ''} key={phase}>
                <span>{String(index + 1).padStart(2, '0')} · {phase}</span>
                <strong>{label}</strong>
                {index < flywheel.length - 1 && <i aria-hidden="true">↓</i>}
              </li>
            ))}
          </ol>
          <b aria-hidden="true">↺ CAPTURE · LEARN · REUSE</b>
        </Reveal>

        <Reveal className="long-horizon">
          <span>LONGER HORIZON</span>
          <div>
            {[
              ['SOFTWARE', '업무 도구'],
              ['AGENTIC SYSTEMS', '여러 단계의 디지털 실행'],
              ['VISION · ROBOT · DRONE · SENSOR', '현장과 물리 세계를 읽고 작동'],
              ['PHYSICAL AI', '디지털 판단과 물리 행동의 결합'],
            ].map(([title, note], index) => (
              <article key={title}>
                <strong>{title}</strong><p>{note}</p>
                {index < 3 && <i aria-hidden="true">→</i>}
              </article>
            ))}
          </div>
          <p>
            Physical AI는 긴 시간의 데이터 기반, 안전 검증, Hardware와 현장 통합, 규제와 전문
            Engineering이 필요한 장기 과제입니다. Software Prototype의 다음 단계처럼 단순하게 이어지지 않습니다.
          </p>
        </Reveal>

        <div className="evidence-section">
          <Reveal className="evidence-section__intro">
            <span>EXTERNAL BENCHMARKS / POTENTIAL RANGE</span>
            <h3>숫자는 약속이 아니라<br />검증 범위를 정하는 참고점입니다.</h3>
          </Reveal>
          <div className="benchmark-evidence">
            {benchmarks.map((benchmark, index) => (
              <Reveal as="article" delay={(index % 2) * 80} key={benchmark.source}>
                <span>{benchmark.source}</span>
                <strong>{benchmark.metric}</strong>
                <b>{benchmark.second}</b>
                <p>{benchmark.detail}</p>
                <small>{benchmark.caveat}</small>
                <a href={benchmark.href} target="_blank" rel="noreferrer">SOURCE ↗</a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="pilot-measurement">
          <div>
            <span>HDEC-ORIENTED INTERPRETATION</span>
            <h3>먼저 Baseline,<br />그다음 Pilot.</h3>
          </div>
          <p>
            검증 가능한 목표는 타사 대비 몇 %를 선언하는 것이 아니라, Use Case별로 현재 업무시간·오류·
            재작업을 먼저 측정하고, Pilot 이후 실제 개선률을 확인하는 것입니다. 내부 Pilot 데이터가
            생기기 전에는 HDEC의 개선률을 말하지 않습니다.
          </p>
          <div className="pilot-kpis">
            {kpis.map((kpi) => <span key={kpi}>{kpi}</span>)}
          </div>
        </Reveal>

        <Reveal className="hdec-leverage__finale">
          <p>실장의 경험이 Pain Point를 고르고,<br />통제된 AI가 그 지식을 작동하게 합니다.</p>
          <h3>사람에게 있던 판단이 도구가 되고,<br />도구에서 나온 데이터가 다시 조직의 지식이 됩니다.</h3>
          <span>THIS IS HDEC AI LEVERAGE.</span>
        </Reveal>

        <NavigateLink href="/#library" className="next-book hdec-leverage__return">
          <span>BACK TO</span>
          <div>
            <strong>THE LIBRARY</strong>
            <p>다섯 권의 지도로 돌아가기</p>
          </div>
          <i aria-hidden="true">↗</i>
        </NavigateLink>
      </div>
    </section>
  )
}
