import { useState } from 'react'
import { AiLayersDiagram } from '../components/AiLayersDiagram'
import { BuildMap } from '../components/BuildMap'
import { ExecutiveTakeaway, SecurityGate, WatchOut } from '../components/Callout'
import { CapabilityCheck } from '../components/CapabilityCheck'
import { DevelopmentLoop } from '../components/DevelopmentLoop'
import { HarnessDiagram } from '../components/HarnessDiagram'
import { ImplementationShiftDiagram } from '../components/ImplementationShiftDiagram'
import { NavigateLink } from '../components/NavigateLink'
import { PromptBlock } from '../components/PromptBlock'
import { Reveal } from '../components/Reveal'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader } from '../components/SiteHeader'
import { SourceNote } from '../components/SourceNote'
import { SystemDiagram } from '../components/SystemDiagram'
import { ToolMap } from '../components/ToolMap'
import { bookChapters } from '../content/books'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

const referenceSteps = [
  ['01', 'FIND', '유사한 문제를 푸는 서비스를 찾는다'],
  ['02', 'USE', '직접 써보며 가치와 흐름을 경험한다'],
  ['03', 'ANALYZE', '정보구조와 사용 순서를 분석한다'],
  ['04', 'EXTRACT PRINCIPLES', '재사용할 해결 원리를 뽑는다'],
  ['05', 'REINTERPRET', '우리 업무의 제약과 우선순위로 다시 설계한다'],
  ['06', 'BUILD', '새로운 업무 도구로 구현한다'],
]

const endingAbilities = [
  '좋은 Pain Point를 고르는 판단',
  '해결할 문제를 구체화하는 언어',
  'AI와 제품 구조를 보는 지도',
  'MVP를 직접 써보는 태도',
  '틀린 지점을 정밀하게 고치는 피드백',
]

const agentElements = [
  ['CONTEXT', '현재 목표와 상황을 이해하는 배경'],
  ['TOOLS', '검색·파일·브라우저·업무 시스템에 접근하는 수단'],
  ['MEMORY / KNOWLEDGE', '참고할 자료와 이전 작업에서 이어갈 정보'],
  ['LOOP', '행동하고 결과를 본 뒤 다음 행동을 정하는 반복'],
  ['GUARDRAILS', '허용 범위·승인·중단 조건을 정한 안전장치'],
]

const systemTerms = [
  ['FRONTEND', '사용자가 보는 화면'],
  ['BACKEND', '화면 뒤에서 규칙을 처리'],
  ['DATABASE', '정보를 기억'],
  ['API', '시스템 사이를 연결'],
  ['SERVER', 'Backend · data · service가 실제로 실행되는 컴퓨팅 환경'],
  ['AUTHENTICATION', '누가 들어왔고 무엇을 할 수 있는지 확인'],
  ['DEPLOY', '다른 사람이 실제로 접속해서 쓸 수 있게 내보내는 과정'],
]

export function BookPage() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()
  const [chaptersOpen, setChaptersOpen] = useState(false)

  return (
    <div className="book-page">
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} bookNumber="01" bookKeyword="UNDERSTAND" total={8} />
      <main id="main-content">
        <article>
          <header className="book-opening book-entry-surface">
            <div className="book-opening__index">
              <span>BOOK</span>
              <strong>01</strong>
              <span>UNDERSTAND</span>
            </div>
            <div className="book-opening__statement">
              <p>AI BUILD · THE FIRST MAP</p>
              <h1>
                문제에서 도구까지의
                <br />
                새로운 거리.
              </h1>
              <p className="book-opening__sub">
                AI와 IT의 단어를 외우는 대신
                <br />
                <em>어디에서 판단하고 어떻게 만드는지</em> 봅니다.
              </p>
            </div>
            <button
              type="button"
              className="chapter-toggle"
              aria-expanded={chaptersOpen}
              aria-controls="chapter-list"
              onClick={() => setChaptersOpen((current) => !current)}
            >
              <span>8 CHAPTERS</span>
              <i aria-hidden="true">{chaptersOpen ? '−' : '+'}</i>
            </button>
            <ol id="chapter-list" className={`chapter-list${chaptersOpen ? ' is-open' : ''}`}>
              {bookChapters.map((chapter, index) => (
                <li key={chapter}>
                  <a href={`#chapter-${index + 1}`} onClick={() => setChaptersOpen(false)}>
                    <span>{String(index + 1).padStart(2, '0')}</span>{chapter}
                  </a>
                </li>
              ))}
            </ol>
            <a className="book-opening__begin" href="#chapter-1">
              START READING <span aria-hidden="true">↓</span>
            </a>
          </header>

          <section className="chapter chapter--intent" id="chapter-1">
            <div className="chapter__inner">
              <SectionIntro number="01" title="AI가 바꾼 것은 구현의 장벽" english="THE IMPLEMENTATION LEVERAGE">
                <p>
                  AI는 실장에게 20–30년의 산업 경험을 새로 주지 않습니다. 대신 그 경험에서 발견한
                  문제를 <strong>직접 확인할 수 있는 형태로 옮기는 힘</strong>을 줍니다.
                </p>
              </SectionIntro>

              <Reveal className="founder-thesis">
                <span>THE CENTRAL THESIS</span>
                <blockquote>
                  AI가 줄인 것은 구현의 장벽입니다.
                  <br />
                  <em>문제를 보는 눈까지 만들어준 것은 아닙니다.</em>
                </blockquote>
              </Reveal>

              <Reveal><ImplementationShiftDiagram compact /></Reveal>

              <div className="sub-statement">
                <span className="eyebrow">WHERE EXECUTIVES STAND</span>
                <h3>
                  현장이 실제로 움직이는 방식과
                  <br />
                  <em>경영이 기대하는 방식 사이.</em>
                </h3>
                <p>
                  실장은 여러 프로젝트의 반복을 봐왔고, 왜 지금의 절차가 생겼는지도 압니다. 현장의
                  제약과 회사의 전략을 함께 보기 때문에 그 둘이 어긋나는 지점을 발견할 수 있습니다.
                  쓸모 있는 Pain Point가 자주 나오는 자리입니다.
                </p>
              </div>

              <Reveal className="executive-bridge" aria-label="현장 현실과 경영 전략 사이의 실장">
                <div><span>PRACTICE / OPERATIONS</span><strong>현장 현실</strong></div>
                <i aria-hidden="true">↕</i>
                <div className="executive-bridge__center"><span>SENIOR EXECUTIVE</span><strong>해석하고 연결하는 사람</strong></div>
                <i aria-hidden="true">↕</i>
                <div><span>MANAGEMENT / STRATEGY</span><strong>경영 전략</strong></div>
              </Reveal>

              <div className="concept-notes">
                <Reveal as="article"><span>01</span><h3>INDUSTRY DEPTH</h3><p>업의 구조와 이해관계를 겪으며 쌓은 감각</p></Reveal>
                <Reveal as="article" delay={80}><span>02</span><h3>OPERATIONAL INSIGHT</h3><p>일이 왜 지금 순서로 돌아가는지 아는 이해</p></Reveal>
                <Reveal as="article" delay={160}><span>03</span><h3>RECURRING FRICTION</h3><p>프로젝트마다 되풀이되는 손실과 불편을 알아보는 눈</p></Reveal>
              </div>

              <Reveal className="insight-equation">
                <div><span>DEEP</span><strong>INSIGHT</strong></div>
                <i>×</i>
                <div><span>AI</span><strong>BUILD</strong></div>
                <i>=</i>
                <div className="insight-equation__result"><span>SHORTER</span><strong>PROBLEM → TOOL</strong></div>
              </Reveal>

              <ExecutiveTakeaway>
                이 과정은 실장이 문제를 고르고, 빠른 MVP를 직접 사용하고, 무엇이 틀렸는지 판단할 만큼의
                AI Build 능력을 다룹니다. 전문 개발자 양성을 목표로 두지 않습니다.
                운영 시스템으로 확장할 때는 전문 엔지니어와 보안·아키텍처·운영 조직이 이어받습니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--tools" id="chapter-2">
            <div className="chapter__inner">
              <SectionIntro number="02" title="AI · Assistant · Agent는 무엇이 다른가" inverse>
                <p>
                  같은 AI라는 이름 아래에 기반 모델, 대화 제품, 여러 행동을 수행하는 Agent가 섞여
                  있습니다. <strong>세 층만 구분하면</strong> 제품 이름이 바뀌어도 구조가 보입니다.
                </p>
              </SectionIntro>

              <Reveal><AiLayersDiagram /></Reveal>

              <Reveal className="custom-ai-note">
                <span>CUSTOM DOES NOT AUTOMATICALLY MEAN AUTONOMOUS</span>
                <strong>Custom GPT · Project · Gem ≠ 자동으로 Agent</strong>
                <p>
                  맞춤 작업공간에 지시와 파일을 저장하면 같은 배경을 매번 설명하는 수고가 줄어듭니다.
                  다만 사람이 질문하고 AI가 답하는 방식이라면 Assistant에 가깝습니다. 목표를 받은 뒤 도구를 고르고, 여러 행동의
                  결과를 관찰하며 계속 진행해야 Agent라고 설명할 수 있습니다.
                </p>
              </Reveal>

              <div className="project-language">
                {agentElements.map(([term, explanation], index) => (
                  <Reveal as="article" className="project-term" delay={(index % 3) * 60} key={term}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{term}</h3>
                    <p>{explanation}</p>
                  </Reveal>
                ))}
              </div>

              <div className="sub-statement">
                <span className="eyebrow">GENERATION ≠ TRUTH</span>
                <h3>잘 생성한 답도<br /><em>검증이 필요합니다.</em></h3>
                <p>
                  모델은 맥락을 바탕으로 그럴듯한 결과를 만듭니다. 사실과 다른 내용을 확신 있게 말할
                  수 있고, Agent는 그 오류를 다음 행동으로 이어갈 수도 있습니다. 출처 확인과 승인
                  지점은 자율성이 커질수록 더 중요해집니다.
                </p>
              </div>
              <WatchOut>
                계약 금액, 법규 조항, 프로젝트 사실처럼 틀리면 대가가 큰 정보는 원문을 확인하세요.
                외부 시스템을 바꾸거나 메시지를 보내는 행동에는 권한과 사람의 승인을 둡니다.
              </WatchOut>
              <SourceNote>
                <ul>
                  <li>OpenAI는 Agent를 LLM이 Workflow 실행을 관리하고 도구를 동적으로 선택하는 시스템으로 설명합니다.</li>
                  <li>ChatGPT Projects와 Claude Projects는 파일·지시·대화를 유지하는 작업공간입니다. 제품별 Agent 기능은 별도 기능과 설정에 따라 달라집니다.</li>
                  <li>출처: OpenAI, A practical guide to building agents · ChatGPT Projects · Anthropic, Claude Projects. 2026.09 확인.</li>
                </ul>
              </SourceNote>
            </div>
          </section>

          <section className="chapter chapter--screen" id="chapter-3">
            <div className="chapter__inner">
              <SectionIntro number="03" title="AI로 할 수 있는 일의 전체 지도" english="AI CAPABILITY MAP">
                <p>
                  유행하는 브랜드 순위 대신 <strong>지금 해야 할 일</strong>로 고릅니다. 한 제품이 여러
                  역할을 할 수 있고, 역할마다 다른 제품을 조합해도 됩니다.
                </p>
              </SectionIntro>
              <Reveal><ToolMap /></Reveal>

              <div className="sub-statement">
                <span className="eyebrow">JOB → ROLE → TOOL</span>
                <h3>도구보다 먼저<br /><em>일의 종류를 정합니다.</em></h3>
                <p>
                  근거를 찾는 일인지, 내 자료를 읽는 일인지, 화면을 만드는 일인지, 반복 업무를
                  자동화하는 일인지 먼저 말해보세요. 그다음 보안·비용·기존 업무 환경을 보고 도구를
                  고르면 됩니다.
                </p>
              </div>

              <SourceNote updated="2026.09" summary="OFFICIAL CAPABILITY SOURCES">
                <ul>
                  <li>General assistants: OpenAI ChatGPT capabilities · Anthropic Claude · Google Gemini.</li>
                  <li>Knowledge: Google NotebookLM Help — 답변은 notebook sources에 근거하고 인용을 제공합니다.</li>
                  <li>Video / audio / design: Higgsfield · Google Veo/Flow · Adobe Firefly · Suno · Figma Make 공식 제품 페이지.</li>
                  <li>Build: Anthropic Claude Code docs · OpenAI Codex CLI · Cursor docs · Google Antigravity 공식 소개.</li>
                  <li>Automation / Agent: n8n · Zapier Agents · Make AI Agents · Microsoft agentic automation 공식 자료.</li>
                  <li>대표 사례를 직무별로 배치했으며 순위를 매기지 않았습니다. 가격·한도·세부 기능은 도입 시점에 다시 확인합니다.</li>
                </ul>
              </SourceNote>
            </div>
          </section>

          <section className="chapter chapter--system" id="chapter-4">
            <div className="chapter__inner">
              <SectionIntro number="04" title="프로그램과 AI 시스템은 무엇으로 이루어지는가" inverse>
                <p>
                  구현 문법을 배울 필요는 없습니다. 화면, 규칙, 기억, 연결, 실행 환경이 어떻게 이어지는지
                  알면 <strong>무엇을 먼저 확인하고 언제 전문가가 필요한지</strong> 판단할 수 있습니다.
                </p>
              </SectionIntro>
              <Reveal><SystemDiagram /></Reveal>

              <div className="system-terms">
                {systemTerms.map(([term, meaning]) => (
                  <Reveal as="div" className="system-term" key={term}>
                    <strong>{term}</strong><p>{meaning}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal className="why-terms">
                <p className="eyebrow">WHY THESE WORDS MATTER</p>
                <h3>코딩 시험과 무관합니다.<br /><em>제품의 상태를 판단하기 위한 언어입니다.</em></h3>
              </Reveal>

              <div className="sub-statement">
                <span className="eyebrow">MOCK / PROTOTYPE → WORKING PRODUCT</span>
                <h3>보이는 화면과<br /><em>데이터가 움직이는 제품.</em></h3>
                <p>
                  첫 화면에는 <strong>샘플 데이터(Dummy Data)</strong>를 넣어 업무 흐름을 확인할 수
                  있습니다. 화면이 실제처럼 보여도 Database와 연결되지 않았다면 아직 목업 / Frontend
                  Prototype입니다.
                </p>
              </div>
              <div className="contrast-pair">
                <div className="contrast-pair__side">
                  <span>MOCK / FRONTEND PROTOTYPE</span>
                  <strong>샘플 값으로 화면과 흐름을 확인</strong>
                  <p>Database 연결 없음 · 빠르게 바꿔볼 수 있음 · 사용자 경험 검토에 적합</p>
                </div>
                <span className="contrast-pair__op" aria-hidden="true">→</span>
                <div className="contrast-pair__side contrast-pair__side--accent">
                  <span>WORKING PRODUCT</span>
                  <strong>Backend + Database가 실제 데이터를 처리</strong>
                  <p>저장 · 조회 · 수정 · 권한 · 오류 대응 · 운영과 유지보수</p>
                </div>
              </div>
              <WatchOut>
                매끄러운 Frontend Prototype은 화면과 흐름을 검증한 상태입니다. 실제 사용자를 받는 순간
                보안, Server 구조, 데이터 품질, 장애 대응, 운영과 유지보수 문제가 함께
                시작됩니다. 이 단계에는 전문 소프트웨어 엔지니어링이 필요합니다.
              </WatchOut>
              <SecurityGate>
                사내 데이터 연결 전에는 샘플·공개·익명화된 데이터로 흐름을 검증합니다. 실제 시스템과
                API를 연결할 때는 회사가 승인한 환경, 계정, 권한, 기록 정책 안에서 진행합니다.
              </SecurityGate>
            </div>
          </section>

          <section className="chapter chapter--connect" id="chapter-5">
            <div className="chapter__inner">
              <SectionIntro number="05" title="Workflow · Agent · MCP · Skill">
                <p>
                  자동화 방식은 다음 단계가 대부분 정해져 있는지, 상황을 읽고 AI가
                  <strong> 다음 행동을 골라야 하는지</strong>에 따라 달라집니다.
                </p>
              </SectionIntro>

              <div className="workflow-agent-contrast">
                <Reveal className="workflow-agent-contrast__side">
                  <span>IF THE PATH IS MOSTLY FIXED</span>
                  <strong>WORKFLOW AUTOMATION</strong>
                  <p>트리거와 순서, 조건이 비교적 명확합니다.</p>
                  <div>접수 → 분류 규칙 → 담당자 배정 → 알림</div>
                </Reveal>
                <Reveal className="workflow-agent-contrast__side workflow-agent-contrast__side--agent" delay={100}>
                  <span>IF AI MUST DECIDE THE NEXT ACTION</span>
                  <strong>AGENT / AGENTIC AUTOMATION</strong>
                  <p>문맥과 결과를 보고 다음 도구와 행동을 선택합니다.</p>
                  <div>목표 → 판단 → 도구 → 관찰 → 다음 행동 ↺</div>
                </Reveal>
              </div>

              <div className="sub-statement">
                <span className="eyebrow">THE AUTOMATION FAMILY</span>
                <h3>정해진 흐름과 AI의 판단을<br /><em>한 시스템 안에서 섞을 수 있습니다.</em></h3>
                <p>
                  n8n, Zapier, Make, Power Automate는 넓은 Workflow Automation 제품군입니다. 현재는
                  정형 흐름에 AI 단계, Agent, 사람의 승인, 기존 시스템 연결을
                  함께 구성하는 방향으로 발전했습니다.
                </p>
              </div>
              <div className="automation-family" aria-label="Workflow automation examples">
                {['n8n', 'ZAPIER', 'MAKE', 'POWER AUTOMATE'].map((tool) => <span key={tool}>{tool}</span>)}
              </div>

              <div className="project-language project-language--three">
                <Reveal as="article" className="project-term">
                  <span>01</span><h3>MCP</h3>
                  <p>AI가 외부 도구·데이터와 연결되는 방식을 표준화한 연결 규격</p>
                </Reveal>
                <Reveal as="article" className="project-term" delay={60}>
                  <span>02</span><h3>SKILL</h3>
                  <p>특정 일을 반복해서 잘하도록 만든 재사용 가능한 작업법과 절차</p>
                </Reveal>
                <Reveal as="article" className="project-term" delay={120}>
                  <span>03</span><h3>HARNESS</h3>
                  <p>AI 작업이 여러 번 반복되어도 같은 규칙과 검증 흐름으로 돌아가게 하는 체계</p>
                </Reveal>
              </div>

              <Reveal className="mcp-explainer">
                <div><span>AI</span><strong>AGENT / ASSISTANT</strong></div>
                <i aria-hidden="true">↔</i>
                <div className="mcp-explainer__standard"><span>STANDARD</span><strong>MCP</strong></div>
                <i aria-hidden="true">↔</i>
                <div><span>TOOLS + DATA</span><strong>FILES · SEARCH · SYSTEMS</strong></div>
              </Reveal>

              <SourceNote>
                <ul>
                  <li>Anthropic은 predefined code path를 Workflow, LLM이 process와 tool usage를 동적으로 지휘하는 시스템을 Agent로 구분합니다.</li>
                  <li>n8n, Zapier, Make, Microsoft 공식 자료 모두 기존 자동화에 AI 또는 Agent 기능을 결합하는 현재 제품 방향을 설명합니다.</li>
                  <li>MCP 공식 사양은 LLM application과 external data sources/tools를 연결하는 open protocol로 정의합니다. 2026.09 확인.</li>
                </ul>
              </SourceNote>
              <ExecutiveTakeaway>
                예측 가능한 단계에는 Workflow가 관리하기 쉽습니다. 해석과 예외 판단이 필요한 구간만
                Agent에게 맡기고, 중요한 행동 앞에는 승인과 기록을 둡니다. 자율성은 필요한 만큼만
                부여할 때 관리하기 쉽습니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--reference" id="chapter-6">
            <div className="chapter__inner">
              <SectionIntro number="06" title="이미 검증된 서비스에서 시작할 수 있다" english="REFERENCE-DRIVEN BUILD">
                <p>
                  이미 사람들이 돈을 내고 사용하는 유사 서비스가 있다면, 검증된 구조에서 시작할 수
                  있습니다. <strong>시장에 존재하는 해결 방식을 읽고</strong> 우리 업무에 맞게 다시
                  설계하는 접근입니다.
                </p>
              </SectionIntro>

              <Reveal className="market-signal">
                <span>PAID PRODUCT = A MARKET SIGNAL</span>
                <strong>누군가 그 문제의 해결에 돈을 낼 만큼 가치를 느꼈다는 증거</strong>
                <p>우리 업무에 맞는지는 별도로 검토합니다. 시장에서 무엇이 검증되었는지 분석할 출발점이 생긴 것입니다.</p>
              </Reveal>

              <div className="sub-statement">
                <span className="eyebrow">WHAT WE BENCHMARK</span>
                <h3>화면의 모양보다<br /><em>해결 구조를 읽습니다.</em></h3>
              </div>
              <div className="benchmark-grid">
                {['INFORMATION ARCHITECTURE', 'USER FLOW', 'INTERACTION PATTERN', 'PRIORITIZATION', 'WORKFLOW STRUCTURE', 'VALUE PROPOSITION'].map((item, index) => (
                  <Reveal as="div" delay={(index % 3) * 60} key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></Reveal>
                ))}
              </div>

              <div className="reference-sequence">
                {referenceSteps.map(([number, english, korean], index) => (
                  <Reveal className="reference-step" delay={index * 50} key={number}>
                    <span>{number}</span><strong>{english}</strong><p>{korean}</p>
                    {index < referenceSteps.length - 1 && <i aria-hidden="true">→</i>}
                  </Reveal>
                ))}
              </div>

              <div className="reference-boundary">
                <div>
                  <span>ANALYZE & REINTERPRET</span>
                  <strong>검증된 해결 원리를 배웁니다.</strong>
                  <p>정보구조 · 사용자 흐름 · 상호작용 · 우선순위 · 가치 제안</p>
                </div>
                <i aria-hidden="true">≠</i>
                <div>
                  <span>DO NOT COPY</span>
                  <strong>타인의 소유물을 복제하지 않습니다.</strong>
                  <p>독점 소스 코드 · 브랜드 · 문구 · 이미지 · 저작권이 있는 고유 자산</p>
                </div>
              </div>

              <Reveal className="hdec-scenario">
                <div className="hdec-scenario__rail">
                  <span>HDEC FIELD SCENARIO</span>
                  <strong>프로젝트 포트폴리오 관리 화면</strong>
                </div>
                <div className="hdec-scenario__prompts">
                  <PromptBlock label="01 · USE & ANALYZE" tone="light">유사한 유료 서비스를 직접 사용한 메모와 화면이다. 어떤 사용자 문제를 어떤 순서로 해결하는지 분석해줘.</PromptBlock>
                  <PromptBlock label="02 · EXTRACT PRINCIPLES" tone="light">정보 위계, 사용자 행동, 우선순위, 반복 Workflow에서 재사용할 원칙만 추출해줘. 브랜드·문구·고유 자산은 제외해.</PromptBlock>
                  <PromptBlock label="03 · REINTERPRET" tone="light">이 원칙을 여러 건설 프로젝트를 동시에 보는 실장의 업무로 다시 설계해줘. 현장 리스크가 공정률보다 먼저 보이게 해.</PromptBlock>
                  <PromptBlock label="04 · BUILD" tone="light">실제 사내 데이터는 연결하지 말고, 샘플 데이터로 목업 / Frontend Prototype을 만들어줘.</PromptBlock>
                </div>
              </Reveal>

              <ExecutiveTakeaway>
                이미 시장에서 검증된 해결 구조를 분석한 뒤, 우리 업무 맥락으로 다시 설계합니다.
                Reference-driven Build는 문제 해결 원리를 읽고 독자적으로 재설계하는 일입니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--harness" id="chapter-7">
            <div className="chapter__inner">
              <SectionIntro number="07" title="실제로 AI와 개발하는 방법" english="PLAN → BUILD → REVIEW → USE" inverse>
                <p>
                  AI 개발은 문제를 계획하고, 실제 파일을 만들고, 여러 방식으로 검토한 뒤,
                  <strong> 실장이 직접 써보는 반복</strong>으로 진행됩니다.
                </p>
              </SectionIntro>

              <Reveal><DevelopmentLoop /></Reveal>

              <div className="role-sections">
                <Reveal as="article" className="role-section">
                  <span>ROLE 1 · PLANNER</span>
                  <h3>나와 같은 선상에서 계속 의논할 수 있는 AI 기획자</h3>
                  <p>
                    ChatGPT Project나 Claude Project 같은 Planning / Conversation Surface에서 Pain Point,
                    사용자, 기대 결과, 업무 흐름, 기능, 제약, 성공 기준을 함께 정리합니다.
                  </p>
                  <div className="role-section__chips">{['PAIN POINT', 'USER', 'OUTCOME', 'WORKFLOW', 'FEATURES', 'CONSTRAINTS', 'SUCCESS CRITERIA'].map((item) => <span key={item}>{item}</span>)}</div>
                  <small>OUTPUT · PRD · SPEC · Markdown planning docs · Rules / project instructions</small>
                </Reveal>

                <Reveal as="article" className="role-section role-section--builder">
                  <span>ROLE 2 · BUILDER</span>
                  <h3>AI가 실제 파일을 읽고 수정하고 실행하는 곳</h3>
                  <p>
                    Claude Code와 Codex CLI는 Terminal-based 환경의 대표 예입니다. Cursor와 Google
                    Antigravity는 IDE / agent-first 환경에서 에디터, 터미널, 브라우저를 함께 사용합니다.
                    실장은 명령어보다 이곳이 실제 구현이 일어나는 작업면이라는 점을 이해하면 됩니다.
                  </p>
                  <div className="builder-surfaces">
                    <div><span>TERMINAL-BASED</span><strong>Claude Code · Codex CLI</strong></div>
                    <div><span>IDE / AGENT-FIRST</span><strong>Cursor · Google Antigravity</strong></div>
                  </div>
                </Reveal>

                <Reveal as="article" className="role-section">
                  <span>ROLE 3 · REVIEWER</span>
                  <h3>AI 교차 검토에 여러 검증 수단을 더합니다.</h3>
                  <p>다른 Coding Agent나 모델의 검토에 자동 검사와 실제 화면 확인을 더합니다.</p>
                  <div className="role-section__chips">{['ANOTHER AGENT', 'TESTS', 'BUILD', 'LINT', 'BROWSER', 'VISUAL INSPECTION'].map((item) => <span key={item}>{item}</span>)}</div>
                  <small>FOUNDER EXAMPLE · Claude Code builds → Codex reviews → planner Claude / GPT re-evaluates direction. 하나의 예시이며 필수 조합은 아닙니다.</small>
                </Reveal>

                <Reveal as="article" className="role-section role-section--human">
                  <span>ROLE 4 · ACTUAL USER</span>
                  <h3>실장이 직접 써보고 최종 오차를 찾습니다.</h3>
                  <div className="precision-feedback">
                    <blockquote>“이 버튼은 실제 업무에서 쓰지 않는다.”</blockquote>
                    <blockquote>“현장에서는 이 순서가 아니다.”</blockquote>
                    <blockquote>“이 숫자보다 리스크가 먼저 보여야 한다.”</blockquote>
                    <blockquote>“이 단계가 하나 빠졌다.”</blockquote>
                  </div>
                  <p>
                    경험을 근거로 정확한 오차를 찾아 그 부분만 고치는 <strong>정밀 타격</strong>입니다.
                    이때 Domain Knowledge가 제품 품질로 바뀝니다.
                  </p>
                </Reveal>
              </div>

              <Reveal className="spec-kit-note">
                <span>REAL EXAMPLE · GITHUB SPEC KIT</span>
                <strong>SPEC → PLAN → TASKS → IMPLEMENT</strong>
                <p>의도를 문서로 남기고 단계별 산출물이 다음 구현의 맥락이 되게 하는 공개 도구의 한 예입니다.</p>
              </Reveal>

              <div className="sub-statement">
                <span className="eyebrow">HARNESS · A RELIABLE LOOP</span>
                <h3>같은 기준으로<br /><em>개발 반복을 이어가는 체계.</em></h3>
                <p>
                  PRD와 SPEC, 프로젝트 규칙, Skills, MCP, 권한, Tests, Git history, Review criteria가
                  반복을 받쳐줄 수 있습니다. 매번 계획·구현·검토·사용의 순서를 같은 기준으로 이어가는
                  운영 방식이 Harness를 완성합니다.
                </p>
              </div>
              <Reveal><HarnessDiagram /></Reveal>

              <div className="prompt-versus">
                <Reveal className="prompt-versus__side">
                  <span>GOOD PROMPT</span><strong>한 번의 일을 잘 시킨다.</strong>
                  <p>지금 필요한 결과와 기준을 선명하게 전달합니다.</p>
                  <div className="prompt-versus__line">INSTRUCTION → RESULT</div>
                </Reveal>
                <Reveal className="prompt-versus__side prompt-versus__side--project" delay={100}>
                  <span>GOOD HARNESS</span><strong>여러 번의 개발 반복이 같은 기준으로 돌아가게 한다.</strong>
                  <p>맥락, 규칙, 검증, 실제 사용을 다음 반복에도 이어갑니다.</p>
                  <div className="prompt-versus__line">PLAN ↔ BUILD ↔ USE ↺</div>
                </Reveal>
              </div>

              <WatchOut title="Harness에도 무게가 있습니다.">
                긴 프로젝트에서는 연속성과 유지보수성을 높이지만, 초기 실험부터 절차를 크게 만들면
                확인이 늦어질 수 있습니다. 초기 MVP는 충분히 계획하고, 작게 만든 뒤, 빨리 보고 써보는
                편이 낫습니다.
              </WatchOut>

              <Reveal className="mvp-rhythm">
                {['PLAN WELL', 'BUILD MVP QUICKLY', 'LOOK AT IT', 'USE IT', 'FIX PRECISELY'].map((item, index) => (
                  <div key={item}><strong>{item}</strong>{index < 4 && <i aria-hidden="true">→</i>}</div>
                ))}
              </Reveal>
              <p className="chapter-pullquote">
                오래 개발했다고 좋은 제품이 되는 것은 아닙니다.<br />
                <em>실제로 써보지 않은 코드는 결국 내 컴퓨터 안에 있는 코드 조각일 수 있습니다.</em>
              </p>

              <div className="sub-statement">
                <span className="eyebrow">LOCAL → GITHUB → DEPLOY</span>
                <h3>실장이 기억할<br /><em>세 개의 장소.</em></h3>
              </div>
              <Reveal className="delivery-path">
                <div><span>LOCAL / 내 PC</span><strong>Claude Code · Codex가 실제 코드를 만드는 곳</strong></div>
                <i aria-hidden="true">↓</i>
                <div><span>GITHUB</span><strong>코드와 변경 이력을 원격에 보관하고 공유하는 저장소</strong></div>
                <i aria-hidden="true">↓</i>
                <div><span>DEPLOY</span><strong>실제 사용자가 접속 가능한 서비스로 내보내는 과정</strong></div>
              </Reveal>
              <p className="delivery-note">
                GitHub는 코드를 저장하고 변경 이력을 관리합니다. GitHub Pages는 일부 정적 사이트를
                호스팅합니다. 서비스 성격에 따라 Vercel, Azure, AWS 또는 회사가 승인한 다른 인프라를
                배포 환경으로 선택할 수 있습니다.
              </p>

              <SourceNote>
                <ul>
                  <li>ChatGPT Projects와 Claude Projects는 파일·지시·대화를 유지하는 Planning / Conversation Surface의 실제 예입니다.</li>
                  <li>Claude Code와 Codex CLI는 terminal coding agent, Cursor와 Antigravity는 editor/agent-first development environment로 공식 문서에서 설명됩니다.</li>
                  <li>GitHub Spec Kit 공식 흐름: Spec → Plan → Tasks → Implement. 2026.09 확인.</li>
                </ul>
              </SourceNote>
            </div>
          </section>

          <section className="chapter chapter--map" id="chapter-8">
            <div className="chapter__inner chapter__inner--wide">
              <SectionIntro number="08" title="The AI Build Map" english="DEEP INSIGHT → WORKING TOOL">
                <p>
                  AI가 구현의 희소성을 빠르게 낮추고 있습니다. 어떤 문제를 고를지, 결과가 실제로
                  쓸모 있는지 판단하는 능력은 여전히 귀합니다. <strong>그 판단이 지도의 시작과 반복을 이끕니다.</strong>
                </p>
              </SectionIntro>
              <Reveal><BuildMap /></Reveal>
              <Reveal className="scarcity-statement">
                <div><span>MORE ACCESSIBLE</span><strong>BUILD</strong><p>AI가 빠르게 낮추고 있는 구현의 문턱</p></div>
                <i aria-hidden="true">×</i>
                <div><span>STILL SCARCE</span><strong>PROBLEM SELECTION + JUDGMENT</strong><p>경험과 실제 사용에서 나오는 판단</p></div>
              </Reveal>
            </div>
          </section>

          <footer className="book-ending">
            <div className="book-ending__opening">
              <p>Book 01을 마치며</p>
              <h2>문제를 보는 눈과 구현 레버리지가 만나는 지점을 이해했습니다.</h2>
            </div>
            <ol className="book-ending__abilities">
              {endingAbilities.map((ability, index) => (
                <Reveal as="li" delay={index * 60} key={ability}>
                  <span>{String(index + 1).padStart(2, '0')}</span><strong>{ability}</strong>
                  {index < endingAbilities.length - 1 && <i aria-hidden="true">↓</i>}
                </Reveal>
              ))}
            </ol>
            <Reveal className="cert-group">
              <p className="cert-group__intro">이제, 스스로 확인합니다.</p>
              <p className="cert-group__label">SELF CERTIFICATION · 나는 지금 이것을 할 수 있다</p>
              <CapabilityCheck id="b01-ai-layers" evidence={false} statement="Model · Assistant · Agent의 차이를 내 말로 설명할 수 있다." />
              <CapabilityCheck id="b01-structure" evidence={false} statement="Frontend부터 Server와 Deploy까지 제품의 구성 요소를 설명할 수 있다." />
              <CapabilityCheck id="b01-workflow-agent" evidence={false} statement="고정된 Workflow와 AI가 다음 행동을 판단하는 Agent를 구분할 수 있다." />
              <CapabilityCheck id="b01-use-loop" evidence={false} statement="MVP를 직접 써보고, 현장과 다른 지점을 정밀하게 수정 요청할 수 있다." />
            </Reveal>

            <Reveal className="book-ending__finale">
              <p>AI가 가까이 가져온 것은 구현입니다.</p>
              <h2>무엇을 만들지는<br />여전히 사람이 정합니다.</h2>
              <span>
                HDEC 실장이 가진 깊은 업무 판단에 AI Build와 ACE의 지원을 연결합니다.<br />
                그 조합이 문제에서 작동하는 도구까지의 거리를 줄입니다.
              </span>
            </Reveal>
            <NavigateLink href="/book/instruct" className="next-book">
              <span>NEXT BOOK · 02</span>
              <div><strong>INSTRUCT</strong><p>AI에게 일을 시키는 방법</p></div>
              <i aria-hidden="true">→</i>
            </NavigateLink>
          </footer>
        </article>
      </main>
    </div>
  )
}
