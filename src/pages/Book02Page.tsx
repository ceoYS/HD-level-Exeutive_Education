import { useState, type CSSProperties } from 'react'
import { ExecutiveTakeaway, WatchOut } from '../components/Callout'
import { NavigateLink } from '../components/NavigateLink'
import { Reveal } from '../components/Reveal'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader } from '../components/SiteHeader'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

type ExploreType = {
  key: string
  name: string
  korean: string
  summary: string
  whenBest: string[]
  examples: string[]
  buildSteps: string[]
  concepts: string[]
  caution: string
}

const exploreTypes: ExploreType[] = [
  {
    key: 'custom-ai',
    name: 'CUSTOM AI',
    korean: '맞춤형 AI',
    summary: '반복해서 묻고 답하는 업무에 지시와 참고자료를 붙여 나만의 업무 AI로 만듭니다.',
    whenBest: [
      '질문과 답변 중심의 업무다',
      '반복되는 지시 방식이 있다',
      '참고해야 할 문서나 기준이 있다',
      '별도의 복잡한 화면은 필요하지 않다',
    ],
    examples: [
      '계약조건 · Specification 질의 AI',
      '사업검토 자료를 읽고 쟁점을 정리하는 AI',
      '회의 전 검토 질문과 체크리스트를 만드는 AI',
    ],
    buildSteps: [
      '사용자와 반복 업무를 정한다',
      '항상 지킬 지시와 답변 기준을 적는다',
      '참고할 문서와 지식 범위를 넣는다',
      '실제 질문으로 테스트한다',
      '틀린 답변을 보고 지시·지식·범위를 고친다',
    ],
    concepts: ['Model / Assistant', 'Instructions', 'Context', 'Knowledge / RAG'],
    caution: '지시와 지식을 저장한 Custom AI와, 여러 도구를 스스로 선택해 행동하는 Agent는 구분합니다.',
  },
  {
    key: 'web-app',
    name: 'WEB / APP',
    korean: '업무용 웹 · 앱',
    summary: '전용 화면에서 데이터를 보고 입력하고 판단해야 할 때 업무용 제품으로 만듭니다.',
    whenBest: [
      '여러 사람이 반복해서 사용할 화면이 필요하다',
      '데이터를 한눈에 보고 비교해야 한다',
      '버튼·폼·대시보드 같은 인터페이스가 필요하다',
      '업무 흐름을 하나의 제품 안에 모으고 싶다',
    ],
    examples: [
      '프로젝트 포트폴리오 현황 · 리스크 대시보드',
      '현장 품질·안전 점검결과 관리 화면',
      '개발사업 비교시설 벤치마킹 분석 도구',
    ],
    buildSteps: [
      'Pain Point와 사용자를 정한다',
      '참고 화면이나 원하는 흐름을 정한다',
      '샘플 데이터로 Frontend Prototype을 만든다',
      '핵심 기능과 Backend 로직을 연결한다',
      '필요한 Database · API · Authentication을 붙인다',
      '실제로 써보고 고친 뒤 Deploy한다',
    ],
    concepts: ['Frontend', 'Backend', 'Database', 'API', 'Authentication', 'Deploy'],
    caution: '처음부터 모든 시스템을 연결하지 않습니다. 화면과 핵심 흐름을 먼저 확인한 뒤 필요한 연결만 붙입니다.',
  },
  {
    key: 'automation',
    name: 'WORKFLOW AUTOMATION',
    korean: '업무 흐름 자동화',
    summary: '매번 같은 순서로 반복되는 일을 트리거와 규칙으로 연결해 자동으로 흐르게 만듭니다.',
    whenBest: [
      '시작 조건이 분명하다',
      '반복되는 단계가 비슷하다',
      '입력과 결과의 형태가 비교적 일정하다',
      '사람이 매번 복사·이동·정리하는 일이 많다',
    ],
    examples: [
      '점검결과 → 보고서 초안 → 담당자 공유',
      'Email 첨부 → 정보 추출 → SharePoint 기록 → Teams 알림',
      '회의록 → Action Item 추출 → 담당자별 후속 알림',
    ],
    buildSteps: [
      '현재 업무 Workflow를 그대로 그린다',
      'Trigger · Input · Action · Output을 나눈다',
      '사람이 판단해야 할 지점을 표시한다',
      '반복 단계부터 자동화한다',
      '오류·예외·승인 경로를 추가한다',
      '실제 케이스로 테스트하고 운영 범위를 정한다',
    ],
    concepts: ['Workflow', 'Trigger', 'API', 'Connector', 'Human Approval'],
    caution: '예외가 많은 판단 업무까지 억지로 규칙으로 만들기보다, 자동화할 단계와 사람이 남을 단계를 나눕니다.',
  },
  {
    key: 'agent',
    name: 'AI AGENT',
    korean: '목표를 받고 행동하는 Agent',
    summary: '경로가 고정되지 않은 업무에서 AI가 상황을 보고 다음 행동과 도구를 선택하도록 만듭니다.',
    whenBest: [
      '목표는 분명하지만 매번 처리 경로가 달라진다',
      '여러 데이터·도구를 오가야 한다',
      'AI가 다음 행동을 판단해야 한다',
      '중간 결과를 보고 다시 계획해야 한다',
    ],
    examples: [
      '여러 프로젝트 자료를 확인하고 리스크 후보를 정리하는 Agent',
      '시장·경쟁 정보를 조사하고 근거와 함께 브리핑하는 Agent',
      'PRD·SPEC을 읽고 파일을 수정·테스트하는 Coding Agent',
    ],
    buildSteps: [
      'Agent가 달성할 Goal과 행동 범위를 정한다',
      '사용할 Tool · Data · API를 정한다',
      '필요한 MCP · Skill · Instructions를 연결한다',
      '계획 → 행동 → 관찰 → 다음 행동의 Loop를 만든다',
      '권한 · 비용 · 중단 조건 · 사람 승인 지점을 둔다',
      '로그를 보며 실제 업무에서 반복 검증한다',
    ],
    concepts: ['Model / Assistant / Agent', 'Tool Use', 'MCP', 'Skill', 'API', 'Observability'],
    caution: 'Agent는 행동 범위가 넓기 때문에 기능보다 권한·로그·오류·비용·중단 조건을 함께 설계해야 합니다.',
  },
]

const chapterTitles = exploreTypes.map((type) => `${type.korean} · ${type.name}`)

export function Book02Page() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()
  const [chaptersOpen, setChaptersOpen] = useState(false)

  return (
    <div className="book-page" style={{ '--book-accent': 'var(--color-orange)' } as CSSProperties}>
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} bookNumber="02" bookKeyword="EXPLORE" total={4} unit="TYPE" />
      <main id="main-content">
        <article>
          <header className="book-opening book-entry-surface">
            <div className="book-opening__index">
              <span>BOOK</span>
              <strong>02</strong>
              <span>EXPLORE</span>
            </div>
            <div className="book-opening__statement">
              <p>AI BUILD · WHAT CAN WE BUILD?</p>
              <h1>
                AI로
                <br />
                무엇을 만들 수 있는가.
              </h1>
              <p className="book-opening__sub">
                먼저 제품 유형과 실제 예시를 보고
                <br />
                <em>어떻게 만들어지는지</em> 펼쳐봅니다.
              </p>
            </div>
            <button
              type="button"
              className="chapter-toggle"
              aria-expanded={chaptersOpen}
              aria-controls="chapter-list"
              onClick={() => setChaptersOpen((current) => !current)}
            >
              <span>4 PRODUCT TYPES</span>
              <i aria-hidden="true">{chaptersOpen ? '−' : '+'}</i>
            </button>
            <ol id="chapter-list" className={`chapter-list${chaptersOpen ? ' is-open' : ''}`}>
              {chapterTitles.map((chapter, index) => (
                <li key={chapter}>
                  <a href={`#chapter-${index + 1}`} onClick={() => setChaptersOpen(false)}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {chapter}
                  </a>
                </li>
              ))}
            </ol>
            <a className="book-opening__begin" href="#intro">
              EXPLORE THE TYPES <span aria-hidden="true">↓</span>
            </a>
          </header>

          <section className="chapter chapter--light" id="intro">
            <div className="chapter__inner">
              <SectionIntro number="00" title="먼저 가능성을 봅니다" english="SEE THE MENU FIRST">
                <p>
                  바로 "무엇을 만들까요?"라고 묻기보다, <strong>AI로 만들 수 있는 제품 유형과 예시</strong>를
                  먼저 본 뒤 내 업무에 맞는 것을 고르는 편이 훨씬 쉽습니다.
                </p>
              </SectionIntro>
              <div
                className="mini-flow"
                aria-label="Explore then choose"
                style={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr)',
                  gap: 'clamp(0.7rem, 1.5vw, 1.4rem)',
                }}
              >
                <span className="is-strong" style={{ padding: '1.2rem 1.4rem' }}>EXPLORE<small>유형과 예시를 본다</small></span>
                <i aria-hidden="true">→</i>
                <span style={{ padding: '1.2rem 1.4rem' }}>UNDERSTAND<small>만드는 과정을 본다</small></span>
                <i aria-hidden="true">→</i>
                <span style={{ padding: '1.2rem 1.4rem' }}>CHOOSE<small>내 제품을 고른다</small></span>
              </div>
            </div>
          </section>

          {exploreTypes.map((type, index) => (
            <section
              className={`chapter ${index % 2 === 0 ? 'chapter--bright' : 'chapter--spruce'}`}
              id={`chapter-${index + 1}`}
              key={type.key}
            >
              <div className="chapter__inner">
                <SectionIntro
                  number={String(index + 1).padStart(2, '0')}
                  title={type.korean}
                  english={type.name}
                  inverse={index % 2 === 1}
                >
                  <p>{type.summary}</p>
                </SectionIntro>

                <div className="explore-type-grid">
                  <Reveal as="article" className="explore-panel">
                    <span>WHEN IT FITS</span>
                    <h3>이럴 때 잘 맞습니다</h3>
                    <ul>
                      {type.whenBest.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </Reveal>
                  <Reveal as="article" className="explore-panel explore-panel--examples">
                    <span>EXAMPLES · 건설업 예시</span>
                    <h3>이런 제품을 생각할 수 있습니다</h3>
                    <ul>
                      {type.examples.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </Reveal>
                </div>

                <Reveal>
                  <details className="explore-build-detail">
                    <summary>
                      <span>HOW IT GETS BUILT</span>
                      <strong>이 유형은 실제로 어떻게 만드나</strong>
                      <i aria-hidden="true">+</i>
                    </summary>
                    <div className="explore-build-detail__body">
                      <ol className="explore-build-steps">
                        {type.buildSteps.map((step, stepIndex) => (
                          <li key={step}>
                            <span>{String(stepIndex + 1).padStart(2, '0')}</span>
                            <p>{step}</p>
                          </li>
                        ))}
                      </ol>
                      <div className="explore-concepts">
                        <span>이 과정에서 쓰는 개념</span>
                        <div>
                          {type.concepts.map((concept) => <strong key={concept}>{concept}</strong>)}
                        </div>
                      </div>
                    </div>
                  </details>
                </Reveal>

                <WatchOut>{type.caution}</WatchOut>
              </div>
            </section>
          ))}

          <footer className="book-ending">
            <div className="book-ending__opening">
              <p>네 가지 유형을 살펴봤다면</p>
              <h2>이제 내 Pain Point에 어떤 제품이 맞는지 고릅니다.</h2>
            </div>
            <ExecutiveTakeaway>
              정답을 미리 맞힐 필요는 없습니다. <strong>유형과 만드는 과정을 본 뒤 첫 후보를 고르고, 작은 실험으로 확인</strong>하면 됩니다.
            </ExecutiveTakeaway>
            <NavigateLink href="/book/choose" className="next-book">
              <span>NEXT BOOK · 03</span>
              <div>
                <strong>CHOOSE</strong>
                <p>무엇을 만들 것인가</p>
              </div>
              <i aria-hidden="true">→</i>
            </NavigateLink>
          </footer>
        </article>
      </main>
    </div>
  )
}