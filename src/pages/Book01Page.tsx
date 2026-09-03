import { useState } from 'react'
import { AiLayersDiagram } from '../components/AiLayersDiagram'
import { BuildMap } from '../components/BuildMap'
import { ExecutiveTakeaway, SecurityGate, WatchOut } from '../components/Callout'
import { CapabilityCheck } from '../components/CapabilityCheck'
import { DevelopmentLoop } from '../components/DevelopmentLoop'
import { ImplementationShiftDiagram } from '../components/ImplementationShiftDiagram'
import { InsightDiamond } from '../components/InsightDiamond'
import { NavigateLink } from '../components/NavigateLink'
import { Reveal } from '../components/Reveal'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader } from '../components/SiteHeader'
import { SystemDiagram } from '../components/SystemDiagram'
import { ToolMap } from '../components/ToolMap'
import { bookChapters } from '../content/books'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

const systemTerms = [
  ['FRONTEND', '사용자가 보는 화면'],
  ['BACKEND', '화면 뒤에서 규칙을 처리'],
  ['DATABASE', '정보를 저장하고 불러옴'],
  ['API', '시스템 사이를 연결'],
  ['SERVER', '서비스가 실제로 실행되는 환경'],
  ['AUTHENTICATION', '누가 무엇을 할 수 있는지 확인'],
  ['DEPLOY', '다른 사람이 접속할 수 있게 내보내는 과정'],
]

const automationTerms = [
  ['WORKFLOW', '순서와 조건이 비교적 정해진 반복 업무'],
  ['AGENT', '상황을 보고 다음 행동이나 도구를 선택해야 하는 업무'],
  ['MCP', 'AI가 외부 도구·데이터와 연결되는 방식을 표준화한 규격'],
  ['SKILL', '특정 일을 반복해서 수행하도록 만든 재사용 가능한 작업법'],
]

const referenceSteps = [
  ['01', 'USE', '유사 서비스를 직접 써본다'],
  ['02', 'ANALYZE', '정보구조와 사용자 흐름을 본다'],
  ['03', 'EXTRACT', '재사용할 해결 원리를 뽑는다'],
  ['04', 'REINTERPRET', '우리 업무의 제약과 우선순위로 다시 설계한다'],
]

const founderBuildExample = [
  ['PLANNER', 'ChatGPT Project', '장기 프로젝트 맥락을 유지하면서 문제 정의·제품 방향·기능 우선순위·PRD/SPEC을 함께 논의합니다.'],
  ['BUILDER', 'Claude Code', 'CMD/터미널에서 프로젝트 파일과 구현 문서를 읽고 실제 코드를 만들고 실행·수정합니다.'],
  ['REVIEWER', 'Codex', '별도의 관점에서 요구사항 준수, 코드 변경 범위, 테스트와 빠진 항목을 검토합니다.'],
  ['ACTUAL USER', 'Executive', '직접 제품을 써보고 현업과 다른 지점을 판단한 뒤 필요한 부분만 다시 수정합니다.'],
]

export function Book01Page() {
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
              <p>AI BUILD · THE MASTER MAP</p>
              <h1>
                바이브코딩과
                <br />
                Product 구조
              </h1>
              <p className="book-opening__sub">
                제품을 만들기 위한
                <br />
                <em>기초 IT · AI 개념을 이해합니다.</em>
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
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {chapter}
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
                  개발자를 통해서 제품을 만들어야 하는 환경에서 AI 바이브코딩을 통해 빠르게 제작할 수 있게 되었습니다.
                </p>
              </SectionIntro>
              <Reveal className="founder-thesis">
                <span>THE CENTRAL THESIS</span>
                <blockquote style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}>
                  But, AI가 줄인 것은 구현의 장벽 뿐입니다.
                  <br />
                  <em>문제를 보는 눈까지 만들어준 것은 아닙니다.</em>
                </blockquote>
              </Reveal>
              <Reveal><ImplementationShiftDiagram compact /></Reveal>
              <ExecutiveTakeaway>
                이 교육은 개발자 양성이 아니라, <strong>임원진이 해결할 문제를 고르고 MVP제품을 AI로 직접 제작하는 기초 능력</strong>을 배양합니다.
              </ExecutiveTakeaway>
              <InsightDiamond />
            </div>
          </section>

          <section className="chapter chapter--tools" id="chapter-2">
            <div className="chapter__inner">
              <SectionIntro number="02" title="Model · Assistant · Agent는 무엇이 다른가" inverse>
                <p>
                  세 개를 고정된 단계로 외우기보다 <strong>각각 어떤 역할을 하는지</strong> 이해하면 AI 제품이 어떻게 작동하는지 판단하기 쉬워집니다.
                </p>
              </SectionIntro>
              <Reveal><AiLayersDiagram /></Reveal>
              <WatchOut>
                Custom GPT·Project·Gem처럼 지시와 지식을 저장했다고 자동으로 Agent가 되는 것은 아닙니다. 목표를 받고 상황에 따라 다음 행동과 도구 사용을 판단하며 여러 단계를 수행할 때 Agent에 가깝습니다.
              </WatchOut>
            </div>
          </section>

          <section className="chapter chapter--screen" id="chapter-3">
            <div className="chapter__inner">
              <SectionIntro number="03" title="AI로 할 수 있는 일의 전체 지도" english="AI CAPABILITY MAP">
                <p>
                  브랜드를 외우기보다 <strong>지금 해야 할 일</strong>로 도구를 고릅니다. 한 제품이 여러 역할을 할 수도 있습니다.
                </p>
              </SectionIntro>
              <Reveal><ToolMap /></Reveal>
              <ExecutiveTakeaway>
                검색, 문서, 이미지, 화면, 개발, 자동화처럼 <strong>일의 종류를 먼저 정하고</strong> 보안·비용·업무 환경을 보고 도구를 고릅니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--system" id="chapter-4">
            <div className="chapter__inner">
              <SectionIntro number="04" title="프로그램과 AI 시스템은 무엇으로 이루어지는가" inverse>
                <p>
                  코딩 문법보다 화면·규칙·데이터·연결·실행 환경이 어떻게 이어지는지 이해하면 됩니다.
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
              <SecurityGate>
                Prototype 단계에서는 샘플·공개·익명화 데이터를 사용합니다. 실제 시스템과 데이터를 연결할 때는 승인된 환경과 권한 안에서 진행합니다.
              </SecurityGate>
            </div>
          </section>

          <section className="chapter chapter--connect" id="chapter-5">
            <div className="chapter__inner">
              <SectionIntro number="05" title="Workflow · Agent · MCP · Skill">
                <p>
                  자동화는 <strong>정해진 흐름을 실행하는 부분</strong>과 <strong>AI가 다음 행동을 판단하는 부분</strong>을 나눠서 보면 됩니다.
                </p>
              </SectionIntro>
              <div className="project-language project-language--three">
                {automationTerms.map(([term, meaning], index) => (
                  <Reveal as="article" className="project-term" delay={(index % 3) * 60} key={term}>
                    <span>{String(index + 1).padStart(2, '0')}</span><h3>{term}</h3><p>{meaning}</p>
                  </Reveal>
                ))}
              </div>
              <ExecutiveTakeaway>
                예측 가능한 단계는 Workflow로 두고, 해석과 예외 판단이 필요한 곳만 Agent에 맡기는 편이 운영하기 쉽습니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--reference" id="chapter-6">
            <div className="chapter__inner">
              <SectionIntro number="06" title="이미 검증된 서비스에서 시작할 수 있다" english="REFERENCE-DRIVEN BUILD">
                <p>
                  유사 서비스를 베끼는 것이 아니라 <strong>어떤 문제를 어떤 구조로 풀었는지</strong> 분석해 우리 업무에 맞게 다시 설계할 수 있습니다.
                </p>
              </SectionIntro>
              <div className="reference-sequence">
                {referenceSteps.map(([number, english, korean], index) => (
                  <Reveal className="reference-step" delay={index * 50} key={number}>
                    <span>{number}</span><strong>{english}</strong><p>{korean}</p>
                    {index < referenceSteps.length - 1 && <i aria-hidden="true">→</i>}
                  </Reveal>
                ))}
              </div>
              <WatchOut>
                정보구조·사용자 흐름·우선순위는 분석할 수 있지만, 독점 코드·브랜드·문구·이미지·고유 자산을 복제하지 않습니다.
              </WatchOut>
            </div>
          </section>

          <section className="chapter chapter--harness" id="chapter-7">
            <div className="chapter__inner">
              <SectionIntro number="07" title="AI를 역할별로 나누어 제품을 만든다" english="PLAN → BUILD → REVIEW → USE" inverse>
                <p>
                  바이브코딩은 AI 하나에게 전부 맡기는 일이 아닙니다. <strong>기획·구현·검토·실사용의 역할을 나누고</strong> 각 단계에서 사람이 방향과 기준을 잡습니다.
                </p>
              </SectionIntro>
              <Reveal><DevelopmentLoop /></Reveal>
              <div className="role-sections">
                <Reveal as="article" className="role-section">
                  <span>ROLE 1 · PLANNER</span>
                  <h3>문제와 요구사항을 함께 구체화합니다.</h3>
                </Reveal>
                <Reveal as="article" className="role-section role-section--builder">
                  <span>ROLE 2 · BUILDER</span>
                  <h3>확정된 문서를 기준으로 실제 제품을 구현합니다.</h3>
                </Reveal>
                <Reveal as="article" className="role-section">
                  <span>ROLE 3 · REVIEWER</span>
                  <h3>요구사항과 구현 결과를 다른 관점에서 검토합니다.</h3>
                </Reveal>
                <Reveal as="article" className="role-section role-section--human">
                  <span>ROLE 4 · ACTUAL USER</span>
                  <h3>임원진이 직접 써보고 실제 업무와 다른 지점을 판단합니다.</h3>
                </Reveal>
              </div>

              <Reveal className="prd-principle">
                <span>PLANNING PRINCIPLE · PRD</span>
                <h3>AI가 써준 PRD를 그대로 구현하지 않습니다.</h3>
                <p>
                  AI는 문서를 구조화할 수 있지만, <strong>무엇을 만들고 싶은지 결정하는 사람은 본인</strong>입니다. 사용자, 실제 Pain Point, 원하는 화면과 흐름, 반드시 필요한 기능, 하지 않을 것, 성공 기준을 최대한 구체적으로 설명하고 AI가 이해하지 못한 부분은 질문하게 합니다.
                </p>
                <blockquote>
                  “지금까지 내가 설명한 내용을 기준으로 PRD를 정리해줘. 내가 말하지 않은 요구사항은 임의로 추가하지 말고 질문으로 남겨줘.”
                </blockquote>
              </Reveal>

              <Reveal className="founder-build-example">
                <div className="founder-build-example__intro">
                  <span>ONE REAL BUILD PATTERN · EXAMPLE</span>
                  <h3>실제로는 AI마다 역할을 나누어<br />하나의 제품을 만들 수 있습니다.</h3>
                  <p>아래는 이 교육을 만든 사람이 실제 프로젝트에서 사용하는 한 가지 방식입니다. 특정 도구 조합이 정답이라는 뜻은 아닙니다.</p>
                </div>
                <ol>
                  {founderBuildExample.map(([role, tool, description], index) => (
                    <li key={role}>
                      <span>{String(index + 1).padStart(2, '0')} · {role}</span>
                      <strong>{tool}</strong>
                      <p>{description}</p>
                      {index < founderBuildExample.length - 1 && <i aria-hidden="true">↓</i>}
                    </li>
                  ))}
                </ol>
                <p className="founder-build-example__loop">PLANNER → BUILDER → REVIEWER → ACTUAL USER → TARGETED FIX ↺</p>
              </Reveal>

              <ExecutiveTakeaway>
                AI가 구현을 대신해도 <strong>문제 정의·우선순위·PRD의 의도·최종 판단은 임원진이 쥐고 있어야 합니다.</strong>
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--map" id="chapter-8">
            <div className="chapter__inner chapter__inner--wide">
              <SectionIntro number="08" title="The AI Build Map" english="MASTER VIEW">
                <p>
                  지금까지의 개념을 한 장에 모읍니다. 이후 Book들은 이 지도의 각 구간을 다시 설명하는 것이 아니라 <strong>실제로 실행하는 방법</strong>을 맡습니다.
                </p>
              </SectionIntro>
              <Reveal><BuildMap /></Reveal>
            </div>
          </section>

          <footer className="book-ending">
            <div className="book-ending__opening">
              <p>Book 01을 마치며</p>
              <h2>이제 어떤 개념이 어느 단계에 필요한지 전체 위치를 볼 수 있습니다.</h2>
            </div>
            <Reveal className="cert-group">
              <p className="cert-group__intro">스스로 확인합니다.</p>
              <p className="cert-group__label">SELF CERTIFICATION · 나는 지금 이것을 할 수 있다</p>
              <CapabilityCheck id="b01-ai-layers" evidence={false} statement="Model · Assistant · Agent의 역할 차이를 설명할 수 있다." />
              <CapabilityCheck id="b01-structure" evidence={false} statement="Frontend부터 Deploy까지 제품의 주요 구성 요소를 설명할 수 있다." />
              <CapabilityCheck id="b01-workflow-agent" evidence={false} statement="Workflow와 Agent를 언제 나눠 써야 하는지 설명할 수 있다." />
              <CapabilityCheck id="b01-build-loop" evidence={false} statement="Planner · Builder · Reviewer · Actual User의 역할을 구분할 수 있다." />
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
