import type { ReactNode } from 'react'
import { AiLayersDiagram } from './AiLayersDiagram'
import { BuildMap } from './BuildMap'
import { ExecutiveTakeaway, SecurityGate, WatchOut } from './Callout'
import { DevelopmentLoop } from './DevelopmentLoop'
import { ImplementationShiftDiagram } from './ImplementationShiftDiagram'
import { InsightDiamond } from './InsightDiamond'
import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'
import { SystemDiagram } from './SystemDiagram'
import { ToolMap } from './ToolMap'
import {
  REFERENCE_ENGLISH,
  REFERENCE_TITLE,
  automationTerms,
  founderBuildExample,
  referenceSteps,
  systemTerms,
} from '../content/part1-lock'

// CONTENT LOCK · 1단계 원문 블록. 문장·단어는 여기서 수정하지 않는다. 페이지는 이 블록들을 조립만 한다.

type ChapterProps = { number: string; children?: ReactNode }

/** 표지 문장 블록 (eyebrow · h1 · sub). */
export function MasterMapStatement() {
  return (
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
  )
}

/** 원문 Ch1 · AI가 바꾼 것은 구현의 장벽 */
export function ChapterLeverage({ number, children }: ChapterProps) {
  return (
    <section className="chapter chapter--intent" id={`chapter-${Number(number)}`}>
      <div className="chapter__inner">
        <SectionIntro number={number} title="AI가 바꾼 것은 구현의 장벽" english="THE IMPLEMENTATION LEVERAGE">
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
        {children}
      </div>
    </section>
  )
}

/** 원문 Ch2 · 대화에서 실행까지, AI는 어떻게 달라지는가 */
export function ChapterAiLayers({ number, children }: ChapterProps) {
  return (
    <section className="chapter chapter--tools" id={`chapter-${Number(number)}`}>
      <div className="chapter__inner">
        <SectionIntro number={number} title="대화에서 실행까지, AI는 어떻게 달라지는가" inverse>
          <p>
            AI 제품 이름을 외우기보다 <strong>사람이 계속 지시하는 대화, 맥락을 이어가는 프로젝트, 도구를 사용해 실제 행동하는 Agent</strong>의 차이를 이해합니다.
          </p>
        </SectionIntro>
        <Reveal><AiLayersDiagram /></Reveal>
        <ExecutiveTakeaway>
          참고 · 이 모든 AI 제품의 판단과 생성 능력 뒤에는 <strong>Model / LLM</strong>이 있습니다.
          <br />
          지금 단계에서는 모델 종류와 ai를 외우기보다 각 업무에 어떤 ai를 사용하는지를 구분하면 됩니다.
        </ExecutiveTakeaway>
        {children}
      </div>
    </section>
  )
}

/** 원문 Ch3 · 분야 별 핵심 AI 지도 */
export function ChapterToolMap({ number }: ChapterProps) {
  return (
    <section className="chapter chapter--screen" id={`chapter-${Number(number)}`}>
      <div className="chapter__inner">
        <SectionIntro number={number} title="분야 별 핵심 AI 지도" english="AI CAPABILITY MAP">
          <p>
            툴 이름을 외우기보다
            <br />
            각 분야에서 제일 유능한 도구부터 사용해봅니다.
            <br />
            한 제품이 여러 역할을 할 수도 있습니다.
          </p>
        </SectionIntro>
        <Reveal><ToolMap /></Reveal>
        <ExecutiveTakeaway>
          검색, 문서, 이미지, 화면, 개발, 자동화처럼 <strong>일의 종류를 먼저 정하고</strong> 보안·비용·업무 환경을 보고 도구를 고릅니다.
        </ExecutiveTakeaway>
      </div>
    </section>
  )
}

/** 원문 Ch4 용어 목록. TIP에서는 일부 용어만 넘겨 재렌더할 수 있다. */
export function SystemTermList({ terms = systemTerms }: { terms?: string[][] }) {
  return (
    <div className="system-terms">
      {terms.map(([term, meaning]) => (
        <Reveal as="div" className="system-term" key={term}>
          <strong>{term}</strong>
          <p>
            {meaning}
            {term === 'GITHUB REPOSITORY' && (
              <>
                <br />
                <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
              </>
            )}
          </p>
        </Reveal>
      ))}
    </div>
  )
}

/** 원문 Ch4 · 프로그램과 AI 시스템은 무엇으로 이루어지는가 */
export function ChapterSystem({ number }: ChapterProps) {
  return (
    <section className="chapter chapter--system" id={`chapter-${Number(number)}`}>
      <div className="chapter__inner">
        <SectionIntro number={number} title={<>프로그램과<br />AI 시스템은 무엇으로 이루어지는가</>} inverse>
          <p>
            코딩 문법보다 화면·규칙·데이터·연결·실행 환경이 어떻게 이어지는지 이해하면 됩니다.
          </p>
        </SectionIntro>
        <Reveal><SystemDiagram /></Reveal>
        <SystemTermList />
        <SecurityGate>
          Prototype 단계에서는 샘플·공개·익명화 데이터를 사용합니다. 실제 시스템과 데이터를 연결할 때는 승인된 환경과 권한 안에서 진행합니다.
        </SecurityGate>
      </div>
    </section>
  )
}

/** 원문 Ch5 카드. TIP에서는 필요한 용어만 넘겨 재렌더한다. */
export function AutomationTermCards({ terms = automationTerms }: { terms?: string[][] }) {
  return (
    <div className="project-language project-language--three">
      {terms.map(([term, meaning], index) => (
        <Reveal as="article" className="project-term" delay={(index % 3) * 60} key={term}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h3>{term}</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{meaning}</p>
          {term === 'SKILL' && (
            <a className="project-term__link" href="https://skills.sh/" target="_blank" rel="noreferrer">skills.sh ↗</a>
          )}
        </Reveal>
      ))}
    </div>
  )
}

/** 원문 Ch5 · AI에게 프로젝트의 규칙과 도구를 어떻게 연결하는가. children = 카드 자리(원문 카드 또는 지도). */
export function ChapterConnect({ number, children }: ChapterProps) {
  return (
    <section className="chapter chapter--connect" id={`chapter-${Number(number)}`}>
      <div className="chapter__inner">
        <SectionIntro number={number} title="AI에게 프로젝트의 규칙과 도구를 어떻게 연결하는가">
          <p>
            Agent가 제대로 일하려면 <strong>계속 지킬 규칙, 기준 문서, 외부 도구 연결, 반복 작업법</strong>이 필요합니다.
          </p>
        </SectionIntro>
        {children ?? <AutomationTermCards />}
        <ExecutiveTakeaway>
          <strong>Rules는 어떻게 일할 것인가, Docs는 무엇을 만들 것인가</strong>를 알려줍니다. MCP는 외부 도구·데이터를 연결하고, Skill은 반복 작업을 재사용하게 합니다.
        </ExecutiveTakeaway>
      </div>
    </section>
  )
}

/** 원문 Ch6 · 벤치마킹 인트로 문단. 장으로도, TIP(제목 = summary)으로도 조립한다. */
export function ReferenceCopy() {
  return (
    <p>
      유사 서비스를 베끼는 것이 아니라 <strong>어떤 문제를 어떤 구조로 풀었는지</strong> 분석해 우리 업무에 맞게 벤치마킹하여 다시 설계할 수 있습니다.
    </p>
  )
}

/** 원문 Ch6 · 벤치마킹 본문(5단계 + 주의). */
export function ReferenceBody() {
  return (
    <>
      <div className="reference-sequence" style={{ gridTemplateColumns: `repeat(${referenceSteps.length}, minmax(0, 1fr))` }}>
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
    </>
  )
}

export function ChapterReference({ number }: ChapterProps) {
  return (
    <section className="chapter chapter--reference" id={`chapter-${Number(number)}`}>
      <div className="chapter__inner">
        <SectionIntro number={number} title={REFERENCE_TITLE} english={REFERENCE_ENGLISH}>
          <ReferenceCopy />
        </SectionIntro>
        <ReferenceBody />
      </div>
    </section>
  )
}

/** 원문 Ch7 PRD 원칙 + 프롬프트. */
export function PrdPrinciple() {
  return (
    <Reveal className="prd-principle">
      <span>PLANNING PRINCIPLE · PRD</span>
      <h3>
        AI가 써준 PRD를
        <br />
        그대로 구현하지 않습니다.
      </h3>
      <p>
        AI는 문서를 구조화할 수 있지만, <strong>무엇을 만들고 싶은지 결정하는 사람은 본인</strong>입니다. 사용자, 실제 Pain Point, 원하는 화면과 흐름, 반드시 필요한 기능, 하지 않을 것, 성공 기준을 최대한 구체적으로 설명하고 AI가 이해하지 못한 부분은 질문하게 합니다.
      </p>
      <blockquote>
        “지금까지 내가 설명한 내용을 기준으로 PRD를 정리해줘.
        <br />
        내가 말하지 않은 요구사항은 임의로 추가하지 말고 질문으로 남겨줘.”
      </blockquote>
    </Reveal>
  )
}

/** 원문 Ch7 · 역할을 부여해 반복 세팅. children = 루프 도식 뒤 삽입 자리(원문 순서: 루프 → 역할 4 → PRD → 예시 → Takeaway). */
export function ChapterHarness({ number, children, loopExtras }: ChapterProps & { loopExtras?: ReactNode }) {
  return (
    <section className="chapter chapter--harness" id={`chapter-${Number(number)}`}>
      <div className="chapter__inner">
        <SectionIntro number={number} title={<>AI에게 역할을 부여해<br />피드백 반영 과정을 자동 반복 세팅해 제품 개발</>} english="PLAN → BUILD → REVIEW → USE" inverse>
          <p>
            바이브코딩은 AI 하나에게 전부 맡기는 일이 아닙니다. <strong>기획·구현·검토·실사용의 역할을 나누고</strong> 각 단계에서 사람이 방향과 기준을 잡습니다.
          </p>
        </SectionIntro>
        <Reveal><DevelopmentLoop />{loopExtras}</Reveal>
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

        {children}

        <Reveal className="founder-build-example">
          <div className="founder-build-example__intro">
            <span>ONE REAL BUILD PATTERN · EXAMPLE</span>
            <h3>실제로는 AI마다 역할을 나누어<br />하나의 제품을 만들 수 있습니다.</h3>
            <p>아래는 AI디자인랩 선윤성 매니저가 실제 프로젝트에서 활용하는 방식입니다. 단, 특정 도구 조합이 정답이라는 뜻은 아닙니다.</p>
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
          <div className="founder-build-example__loop" aria-label="Planner, Builder, Reviewer, Actual User, Targeted Fix 반복 루프">
            <span>PLANNER →</span>
            <span>BUILDER →</span>
            <span>REVIEWER →</span>
            <span>ACTUAL USER → TARGETED FIX ↺</span>
          </div>
        </Reveal>

        <ExecutiveTakeaway>
          AI가 구현을 대신해도 <strong>문제 정의·우선순위·PRD의 의도·최종 판단은 임원진이 쥐고 있어야 합니다.</strong>
        </ExecutiveTakeaway>
      </div>
    </section>
  )
}

/** 원문 Ch8 · The AI Build Map */
export function ChapterMap({ number }: ChapterProps) {
  return (
    <section className="chapter chapter--map" id={`chapter-${Number(number)}`}>
      <div className="chapter__inner chapter__inner--wide">
        <SectionIntro number={number} title="The AI Build Map" english="MASTER VIEW">
          <p>
            지금까지의 개념을 한 장에 모읍니다. 이후 Book들은 이 지도의 각 구간을 다시 설명하는 것이 아니라 <strong>실제로 실행하는 방법</strong>을 맡습니다.
          </p>
        </SectionIntro>
        <Reveal><BuildMap /></Reveal>
      </div>
    </section>
  )
}

/** 원문 엔딩 첫 문장 블록. */
export function EndingOpening() {
  return (
    <div className="book-ending__opening">
      <p>Book 01을 마치며</p>
      <h2>이제 어떤 개념이 어느 단계에 필요한지 전체 위치를 볼 수 있습니다.</h2>
    </div>
  )
}
