import { useState } from 'react'
import { BuildMap } from '../components/BuildMap'
import { HarnessDiagram } from '../components/HarnessDiagram'
import { NavigateLink } from '../components/NavigateLink'
import { PromptBlock } from '../components/PromptBlock'
import { Reveal } from '../components/Reveal'
import { ScreenshotPlaceholder } from '../components/ScreenshotPlaceholder'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader } from '../components/SiteHeader'
import { SystemDiagram } from '../components/SystemDiagram'
import { ToolMap } from '../components/ToolMap'
import { bookChapters } from '../content/books'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

const referenceSteps = [
  ['01', 'FIND', '좋은 화면을 찾는다'],
  ['02', 'CAPTURE', '필요한 장면을 캡처한다'],
  ['03', 'ANALYZE', '정보구조와 흐름을 분석한다'],
  ['04', 'REINTERPRET', '우리 업무에 맞게 재구성한다'],
  ['05', 'BUILD', '첫 번째 버전을 만든다'],
]

const endingAbilities = [
  '문제를 발견하는 능력',
  '맥락을 설명하는 능력',
  '결과를 판단하는 능력',
  'AI에게 다시 지시하는 능력',
  '업무에 적용하는 능력',
]

export function BookPage() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()
  const [chaptersOpen, setChaptersOpen] = useState(false)

  return (
    <div className="book-page">
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} />
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
                코딩을 배우는
                <br />
                과정이 아닙니다.
              </h1>
              <p className="book-opening__sub">
                AI에게 제대로 일을 시키기 위해
                <br />
                <em>“무엇이 어떻게 연결되는지”</em>를 이해하는 과정입니다.
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
              <SectionIntro number="01" title="AI는 어디까지 할 수 있는가">
                <p>
                  AI는 막연한 마법이 아니라, <strong>사람의 의도를 다양한 결과로 바꾸는 엔진</strong>입니다.
                  무엇을 넣고 어떤 맥락을 주는지가 결과를 바꿉니다.
                </p>
              </SectionIntro>

              <Reveal className="intent-machine">
                <div className="intent-machine__input">
                  <span>HUMAN INTENT</span>
                  <strong>문제 · 지시 · 자료 · 기준</strong>
                </div>
                <span className="intent-machine__arrow" aria-hidden="true">→</span>
                <div className="intent-machine__core">
                  <span>LARGE LANGUAGE MODEL</span>
                  <strong>LLM</strong>
                  <small>맥락을 읽고 다음 결과를 생성</small>
                </div>
                <span className="intent-machine__arrow" aria-hidden="true">→</span>
                <div className="intent-machine__outputs">
                  {['TEXT', 'ANALYSIS', 'IMAGE', 'CODE', 'ACTION'].map((output) => (
                    <span key={output}>{output}</span>
                  ))}
                </div>
              </Reveal>

              <div className="concept-notes">
                <Reveal as="article">
                  <span>01</span>
                  <h3>Prompt</h3>
                  <p>지금 AI에게 보내는 하나의 요청</p>
                </Reveal>
                <Reveal as="article" delay={80}>
                  <span>02</span>
                  <h3>Context</h3>
                  <p>그 요청을 제대로 이해하는 데 필요한 배경과 자료</p>
                </Reveal>
                <Reveal as="article" delay={160}>
                  <span>03</span>
                  <h3>AI Product</h3>
                  <p>AI 능력이 화면·데이터·업무 흐름과 연결된 실제 서비스</p>
                </Reveal>
              </div>
              <p className="chapter-pullquote">
                같은 AI라도 <em>무엇을 알고 시작하는가</em>에 따라
                <br /> 전혀 다른 결과를 만듭니다.
              </p>
            </div>
          </section>

          <section className="chapter chapter--tools" id="chapter-2">
            <div className="chapter__inner">
              <SectionIntro number="02" title="AI마다 역할이 다르다">
                <p>
                  도구 이름부터 외울 필요는 없습니다. 먼저 <strong>지금 해야 할 일</strong>을 정하면,
                  적절한 AI의 역할이 보입니다.
                </p>
              </SectionIntro>
              <Reveal><ToolMap /></Reveal>
            </div>
          </section>

          <section className="chapter chapter--system" id="chapter-3">
            <div className="chapter__inner">
              <SectionIntro number="03" title="프로그램은 무엇으로 이루어지는가" inverse>
                <p>
                  모든 구조를 직접 만들기 위해서가 아니라, <strong>무엇을 먼저 결정하고 무엇을 나중에 연결할지</strong>
                  지시하기 위해 알아야 합니다.
                </p>
              </SectionIntro>
              <Reveal><SystemDiagram /></Reveal>

              <div className="system-terms">
                {[
                  ['FRONTEND', '사용자가 보고 누르는 화면'],
                  ['BACKEND', '화면 뒤에서 규칙을 처리하는 기능'],
                  ['DATABASE', '정보를 기억하고 다시 꺼내는 저장소'],
                  ['API', '내부·외부 시스템과 데이터를 주고받는 연결'],
                  ['AUTHENTICATION', '누가 들어왔는지 확인하고 권한을 나누는 과정'],
                  ['DEPLOY', '만든 제품을 실제로 접속할 수 있게 내보내는 일'],
                ].map(([term, meaning]) => (
                  <Reveal as="div" className="system-term" key={term}>
                    <strong>{term}</strong><p>{meaning}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal className="why-terms">
                <p className="eyebrow">WHY THESE WORDS MATTER</p>
                <h3>
                  직접 코딩하기 위해서가 아니라,
                  <br />
                  <em>일의 순서를 정확히 지시하기 위해서.</em>
                </h3>
              </Reveal>
              <Reveal>
                <PromptBlock tone="signal">
                  Frontend부터 설계하고 실제 기능은 나중에 연결해. 확정된 Frontend는 바꾸지 말고 Backend와 Database를 연결해.
                </PromptBlock>
              </Reveal>
            </div>
          </section>

          <section className="chapter chapter--screen" id="chapter-4">
            <div className="chapter__inner">
              <SectionIntro number="04" title="AI로 화면부터 만든다">
                <p>
                  실제 기능에 시간과 비용을 쓰기 전, <strong>사용자가 보게 될 경험</strong>부터 빠르게 만들어 확인할 수 있습니다.
                </p>
              </SectionIntro>
              <ol className="screen-workflow" aria-label="화면부터 만드는 순서">
                {[
                  ['PROBLEM', '문제와 아이디어'],
                  ['CONVERSATION', '요구사항 대화'],
                  ['REFERENCE', '좋은 사례 탐색'],
                  ['DESIGN', '설계와 Prototype'],
                  ['FRONTEND', '첫 화면 구현'],
                ].map(([title, korean], index) => (
                  <Reveal as="li" delay={index * 70} key={title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{title}</strong>
                    <p>{korean}</p>
                  </Reveal>
                ))}
              </ol>
              <Reveal>
                <ScreenshotPlaceholder
                  tool="Claude Design"
                  purpose="초기 인터페이스 생성 장면"
                  description="생성된 UI와 prompt 입력 영역이 함께 보이는 화면"
                  ratio="16:10"
                  annotation="generated UI / prompt area / preview"
                />
              </Reveal>
              <p className="tool-example-note">
                <span>CURRENT EXAMPLE</span>
                Claude Design은 현재 예시입니다. 이 섹션은 도구가 바뀌어도 같은 제작 원리를 설명하도록 구성되어 있습니다.
              </p>
            </div>
          </section>

          <section className="chapter chapter--reference" id="chapter-5">
            <div className="chapter__inner">
              <SectionIntro number="05" title="처음부터 생각할 필요는 없습니다." english="REFERENCE-DRIVEN BUILD">
                <p>
                  이미 검증된 화면에서 <strong>정보의 구조와 사용자 흐름</strong>을 읽어내고,
                  HDEC 업무 맥락에 맞는 새로운 제품으로 재구성합니다.
                </p>
              </SectionIntro>

              <div className="reference-sequence">
                {referenceSteps.map(([number, english, korean], index) => (
                  <Reveal className="reference-step" delay={index * 60} key={number}>
                    <span>{number}</span>
                    <strong>{english}</strong>
                    <p>{korean}</p>
                    {index < referenceSteps.length - 1 && <i aria-hidden="true">→</i>}
                  </Reveal>
                ))}
              </div>

              <div className="reference-boundary">
                <div>
                  <span>REFERENCE</span>
                  <strong>구조와 원리를 분석합니다.</strong>
                  <p>정보 위계 · 사용자 흐름 · 상호작용 패턴</p>
                </div>
                <i aria-hidden="true">≠</i>
                <div>
                  <span>COPY</span>
                  <strong>소유물을 복제하지 않습니다.</strong>
                  <p>독점 코드 · 브랜드 · 이미지 · 고유 자산</p>
                </div>
              </div>

              <Reveal className="hdec-scenario">
                <div className="hdec-scenario__rail">
                  <span>HDEC FIELD SCENARIO</span>
                  <strong>프로젝트 포트폴리오 관리 화면</strong>
                </div>
                <div className="hdec-scenario__prompts">
                  <PromptBlock label="01 · ANALYZE" tone="light">
                    이 화면의 정보구조와 사용자 흐름을 분석해줘.
                  </PromptBlock>
                  <PromptBlock label="02 · REINTERPRET" tone="light">
                    이 구조를 현대건설 실장급 임원이 여러 프로젝트를 관리하는 화면으로 재구성해줘.
                  </PromptBlock>
                  <PromptBlock label="03 · BUILD" tone="light">
                    실제 Backend는 연결하지 말고 Dummy Data로 Frontend부터 만들어줘.
                  </PromptBlock>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="chapter chapter--connect" id="chapter-6">
            <div className="chapter__inner">
              <SectionIntro number="06" title="화면 뒤에 실제 기능을 연결한다">
                <p>
                  경험이 승인되면 그때 실제 데이터를 저장하고, 사내외 시스템과 연결하고,
                  사용자별 권한을 설정합니다.
                </p>
              </SectionIntro>

              <Reveal className="stack-equation" aria-label="Frontend 더하기 Backend 더하기 Database 더하기 API 더하기 Authentication">
                {['FRONTEND', 'BACKEND', 'DATABASE', 'API', 'AUTH'].map((item, index) => (
                  <div key={item}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{item}</strong>
                    {index < 4 && <i aria-hidden="true">+</i>}
                  </div>
                ))}
                <p>= WORKING PRODUCT</p>
              </Reveal>

              <div className="connect-copy">
                <p>
                  <span>먼저</span>
                  화면에서 업무 흐름을 확인합니다.
                </p>
                <p>
                  <span>그다음</span>
                  승인된 흐름을 유지하며 실제 기능을 연결합니다.
                </p>
              </div>
              <Reveal>
                <PromptBlock>
                  지금 확정된 화면 구조와 상호작용은 유지해. 프로젝트 데이터를 저장하는 Database와 조회·수정 기능을 담당할 Backend를 연결하고, 사용자 역할별 접근 권한을 추가해.
                </PromptBlock>
              </Reveal>
            </div>
          </section>

          <section className="chapter chapter--harness" id="chapter-7">
            <div className="chapter__inner">
              <SectionIntro number="07" title="한 번의 프롬프트에서 프로젝트 시스템으로" inverse>
                <p>
                  좋은 프롬프트는 한 번의 일을 잘 시작합니다. 좋은 환경은 AI가 <strong>며칠, 몇 주 동안 같은 방향으로</strong>
                  계속 일하게 합니다.
                </p>
              </SectionIntro>

              <div className="prompt-versus">
                <Reveal className="prompt-versus__side">
                  <span>ONE GOOD PROMPT</span>
                  <strong>한 번의 지시</strong>
                  <p>지금 필요한 결과를 선명하게 요청합니다.</p>
                  <div className="prompt-versus__line">INSTRUCTION → RESULT</div>
                </Reveal>
                <Reveal className="prompt-versus__side prompt-versus__side--project" delay={100}>
                  <span>PROJECT SYSTEM</span>
                  <strong>계속 이어지는 작업</strong>
                  <p>맥락, 규칙, 검증 방법을 환경 안에 남깁니다.</p>
                  <div className="prompt-versus__line">CONTEXT ↔ WORK ↔ VERIFY ↺</div>
                </Reveal>
              </div>

              <Reveal><HarnessDiagram /></Reveal>

              <div className="project-language">
                {[
                  ['Repository', '프로젝트의 파일과 변경 이력이 모이는 작업장'],
                  ['Git / GitHub', '무엇이 언제 바뀌었는지 기록하고 협업하는 방식'],
                  ['CLAUDE.md / AGENTS.md', 'AI가 프로젝트 목적과 규칙을 계속 기억하도록 주는 지침'],
                  ['MCP / Connectors', 'AI가 허용된 도구와 외부 자료에 연결되는 통로'],
                  ['Skills', '반복 업무를 일관되게 수행하는 전문 작업법'],
                  ['Tests', '결과가 실제로 작동하는지 확인하는 기준'],
                  ['Permissions', 'AI가 어디까지 읽고 바꿀 수 있는지 정한 경계'],
                ].map(([term, explanation], index) => (
                  <Reveal as="article" className="project-term" delay={(index % 3) * 60} key={term}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{term}</h3>
                    <p>{explanation}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal className="harness-definition">
                <span>PROMPT</span><p>AI에게 주는 하나의 지시</p>
                <i aria-hidden="true">≠</i>
                <span>HARNESS</span><p>AI가 신뢰할 수 있게 계속 일하도록 돕는 전체 환경</p>
              </Reveal>
            </div>
          </section>

          <section className="chapter chapter--map" id="chapter-8">
            <div className="chapter__inner chapter__inner--wide">
              <SectionIntro number="08" title="전체 지도를 한 장에 놓습니다." english="THE AI BUILD MAP">
                <p>
                  모든 프로젝트가 완전히 같지는 않습니다. 그러나 문제에서 업무 적용까지,
                  <strong>판단해야 할 순서</strong>는 하나의 지도로 볼 수 있습니다.
                </p>
              </SectionIntro>
              <Reveal><BuildMap /></Reveal>
            </div>
          </section>

          <footer className="book-ending">
            <div className="book-ending__opening">
              <p>AI 시대에 실장에게 가장 중요한 것은</p>
              <h2>더 많은 코딩 지식이 아닙니다.</h2>
            </div>
            <ol className="book-ending__abilities">
              {endingAbilities.map((ability, index) => (
                <Reveal as="li" delay={index * 60} key={ability}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{ability}</strong>
                  {index < endingAbilities.length - 1 && <i aria-hidden="true">↓</i>}
                </Reveal>
              ))}
            </ol>
            <Reveal className="book-ending__finale">
              <p>문제를 발견하는 능력은</p>
              <h2>이미 여러분이<br />가장 잘하는 일입니다.</h2>
              <span>
                20–30년 동안 축적한 현장의 판단과 조직의 암묵지.<br />
                AI BUILD는 그 지식을 작동하는 도구로 이어갑니다.
              </span>
            </Reveal>
            <NavigateLink href="/book/instruct" className="next-book">
              <span>NEXT BOOK · 02</span>
              <div>
                <strong>INSTRUCT</strong>
                <p>AI에게 일을 시키는 방법</p>
              </div>
              <i aria-hidden="true">→</i>
            </NavigateLink>
          </footer>
        </article>
      </main>
    </div>
  )
}
