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

/** 사내 통제형 AI 인프라 · 원문(옵션 3 · 요건 11). 05 W06 TIP 접이식에서 재렌더. */
export function ControlledInfrastructure() {
  return (
    <div className="hdec-leverage hdec-leverage--inline">
      <Reveal className="internal-premise">
        <span>CONNECTING KNOWLEDGE TO AI</span>
        <p>
          민감한 사내 지식과 데이터를 AI에 연결하려면 접근 권한, 감사 기록, 데이터 등급, 모델 연결,
          내부 검색까지 함께 관리해야 합니다.
          <br />
          이런 운영 조건을 한곳에서 통제할 수 있는 ‘사내 통제형 AI 인프라’가 필요합니다.
        </p>
      </Reveal>

      <Reveal className="controlled-infrastructure">
        <div className="controlled-infrastructure__intro">
          <span>CONTROLLED AI INFRASTRUCTURE</span>
          <h3>사내 통제형<br />AI 인프라</h3>
          <p>
            안전성은 서버의 물리적 위치만으로 결정되지 않습니다. 어떤 배치 형태를 쓰든 사람, 데이터,
            모델, 비용, 행동을 통제하고 기록하는 운영 체계가 함께 있어야 합니다.
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
    </div>
  )
}

/** FLYWHEEL · 외부 벤치마크 4 · KPI 8 · 원문. 05 W08 TIP에서 재렌더. */
export function LeverageEvidence() {
  return (
    <div className="hdec-leverage hdec-leverage--inline">
      <Reveal as="figure" className="knowledge-flywheel">
        <figcaption>
          <span>HDEC KNOWLEDGE FLYWHEEL</span>
          <strong>지식을 업무에 쓰고,<br />업무에서 다시 지식을 남깁니다.</strong>
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

      <div className="evidence-section">
        <Reveal className="evidence-section__intro">
          <span>EXTERNAL BENCHMARKS / POTENTIAL RANGE</span>
          <h3>외부 수치는<br />Pilot 목표를 잡을 때 참고합니다.</h3>
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
          Use Case마다 현재 업무시간·오류·재작업을 먼저 측정하고 Pilot 뒤에 실제 변화를 확인합니다.
          내부 Pilot 데이터가 생기기 전에는 외부 benchmark를 HDEC의 개선률로 쓰지 않습니다.
        </p>
        <div className="pilot-kpis">
          {kpis.map((kpi) => <span key={kpi}>{kpi}</span>)}
        </div>
      </Reveal>
    </div>
  )
}

/** 에필로그 오프닝 + 피날레 · 원문. 05 엔딩 마지막에 놓인다. */
export function LeverageFinale() {
  return (
    <section className="hdec-leverage" id="hdec-leverage" aria-labelledby="hdec-leverage-title">
      <header className="hdec-leverage__opening hdec-leverage__opening--short">
        <p>FINAL COURSE EPILOGUE · FROM INDIVIDUAL BUILD TO ORGANIZATIONAL LEVERAGE</p>
        <h2 id="hdec-leverage-title">HDEC AI<br />LEVERAGE</h2>
        <span>개인이 만든 업무 도구와 판단을 조직이 다시 쓸 수 있는 지식으로 연결합니다.</span>
      </header>
      <div className="hdec-leverage__body">
        <Reveal className="hdec-leverage__finale hdec-leverage__finale--short">
          <p>실장의 판단이 도구에 반영되고,<br />그 도구의 사용 경험과 데이터가 다음 판단을 돕습니다.</p>
          <h3>한 사람이 만든 개선을<br />다음 사람과 다음 프로젝트가 다시 쓸 수 있게 합니다.</h3>
          <span>THIS IS HDEC AI LEVERAGE.</span>
        </Reveal>

        <NavigateLink href="/#library" className="next-book hdec-leverage__return">
          <span>BACK TO</span>
          <div>
            <strong>THE LIBRARY</strong>
            <p>다섯 단계로 돌아가기</p>
          </div>
          <i aria-hidden="true">↗</i>
        </NavigateLink>
      </div>
    </section>
  )
}
