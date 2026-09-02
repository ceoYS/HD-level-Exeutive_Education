import { useState, type CSSProperties } from 'react'
import { ExecutiveTakeaway, WatchOut } from '../components/Callout'
import { CapabilityCheck } from '../components/CapabilityCheck'
import { DecisionDiagnostic } from '../components/DecisionDiagnostic'
import { LabeledGrid } from '../components/LabeledGrid'
import { NavigateLink } from '../components/NavigateLink'
import { PromptBlock } from '../components/PromptBlock'
import { RealWorldExample } from '../components/RealWorldExample'
import { Reveal } from '../components/Reveal'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader } from '../components/SiteHeader'
import { TryThisPrompt } from '../components/TryThisPrompt'
import {
  book03Sections,
  difficultyRows,
  existingWorkflowAsks,
  solutionTypes,
  startModes,
} from '../content/book03-choose'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

export function Book03Page() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()
  const [chaptersOpen, setChaptersOpen] = useState(false)

  return (
    <div className="book-page" style={{ '--book-accent': 'var(--color-mint)' } as CSSProperties}>
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} bookNumber="03" bookKeyword="CHOOSE" total={5} unit="PART" />
      <main id="main-content">
        <article>
          <header className="book-opening book-entry-surface">
            <div className="book-opening__index">
              <span>BOOK</span>
              <strong>03</strong>
              <span>CHOOSE</span>
            </div>
            <div className="book-opening__statement">
              <p>AI BUILD · BUILD THE RIGHT THING</p>
              <h1>
                무엇을
                <br />
                만들 것인가.
              </h1>
              <p className="book-opening__sub">
                만들기 전에 먼저
                <br />
                <em>문제에 맞는 형태와 시작점</em>을 고릅니다.
              </p>
            </div>
            <button
              type="button"
              className="chapter-toggle"
              aria-expanded={chaptersOpen}
              aria-controls="chapter-list"
              onClick={() => setChaptersOpen((current) => !current)}
            >
              <span>5 PARTS</span>
              <i aria-hidden="true">{chaptersOpen ? '−' : '+'}</i>
            </button>
            <ol id="chapter-list" className={`chapter-list${chaptersOpen ? ' is-open' : ''}`}>
              {book03Sections.map((section, index) => (
                <li key={section}>
                  <a href={`#chapter-${index + 1}`} onClick={() => setChaptersOpen(false)}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {section}
                  </a>
                </li>
              ))}
            </ol>
            <a className="book-opening__begin" href="#chapter-1">
              START READING <span aria-hidden="true">↓</span>
            </a>
          </header>

          {/* 01 */}
          <section className="chapter chapter--spruce" id="chapter-1">
            <div className="chapter__inner">
              <SectionIntro number="01" title="무엇을 만들지 먼저 정한다" english="CHOOSE WISELY" inverse>
                <p>
                  AI로 제작 속도가 빨라진 만큼, 시작 전에 <strong>무엇을 만들지</strong> 정하는 일이 더
                  중요해졌습니다. 먼저 두 가지를 고릅니다.
                </p>
              </SectionIntro>
              <p className="editorial-lead">
                하나는 <strong>제품의 형태(WHAT)</strong>, 다른 하나는 <strong>시작 방식(HOW)</strong>입니다.
                이 두 결정이 첫 실험의 범위를 정합니다.
              </p>
              <div className="mini-flow" aria-label="무엇을 그리고 어떻게">
                <span className="is-strong">WHAT<small>제품의 형태</small></span>
                <i aria-hidden="true">+</i>
                <span>HOW<small>시작하는 방식</small></span>
                <i aria-hidden="true">→</i>
                <span>FIRST EXPERIMENT<small>첫 실험</small></span>
              </div>
              <ExecutiveTakeaway>
                실장이 문제와 방향을 정하고, ACE와 AI가 구현을 돕습니다. 여기서는
                <strong> "우리 문제에 어떤 형태가 맞는가"</strong>를 판단합니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          {/* 02 */}
          <section className="chapter chapter--light" id="chapter-2">
            <div className="chapter__inner">
              <SectionIntro number="02" title="무엇을 만들 것인가" english="PART A · WHAT TO BUILD">
                <p>
                  업무 문제를 풀 때 자주 쓰는 네 가지 형태입니다. 각각 잘 맞는 상황과 운영 난이도가
                  다릅니다.
                </p>
              </SectionIntro>
              <div className="solution-cards">
                {solutionTypes.map((type) => (
                  <Reveal className="solution-card" key={type.key}>
                    <div className="solution-card__head">
                      <strong>{type.name}</strong>
                      <span>{type.korean}</span>
                    </div>
                    <div>
                      <ul className="solution-card__when">
                        {type.whenBest.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                      <div className="solution-card__examples">
                        {type.examples.map((example) => (
                          <span key={example}>{example}</span>
                        ))}
                      </div>
                      <p className="solution-card__note">{type.note}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <WatchOut title="Agent는 운영 설계까지 함께 봅니다">
                GPT · Gem · Project처럼 지시와 지식을 저장한 작업공간과, 여러 도구를 쓰며 다음 행동을
                판단하는 Agent는 운영 범위가 다릅니다. Agent는 <strong>권한·관측·오류·비용·중단 조건·
                사람 승인</strong>까지 함께 설계해야 합니다.
              </WatchOut>
            </div>
          </section>

          {/* 03 */}
          <section className="chapter chapter--bright" id="chapter-3">
            <div className="chapter__inner">
              <SectionIntro number="03" title="어떻게 시작할 것인가" english="PART B · HOW TO START">
                <p>
                  형태를 정했다면 시작점을 고릅니다. 이미 반복하는 업무가 있다면
                  <strong> 그 업무를 그대로 보여주는 것</strong>이 가장 구체적인 출발점이 될 수 있습니다.
                </p>
              </SectionIntro>
              <LabeledGrid
                items={startModes.map((mode) => ({
                  en: mode.en,
                  label: mode.label,
                  desc: `${mode.desc} · ${mode.when}`,
                }))}
              />
              <RealWorldExample
                title="지금 하는 주간 업무에서 시작하기"
                scenario="매주 반복하는 Excel · Email · PowerPoint 업무를 그대로 AI에게 보여준 뒤, 무엇을 자동화할지 함께 정리합니다."
              >
                <TryThisPrompt heading="기존 업무를 매핑시킬 때">
                  {existingWorkflowAsks.map((ask, index) => (
                    <PromptBlock key={ask} label={`STEP ${index + 1}`} tone={index === existingWorkflowAsks.length - 1 ? 'signal' : 'light'}>
                      {ask}
                    </PromptBlock>
                  ))}
                </TryThisPrompt>
              </RealWorldExample>
              <ExecutiveTakeaway>
                레퍼런스나 기존 업무가 있으면 처음부터 설명해야 할 것이 줄어듭니다. 특히
                <strong> 실제로 반복하는 업무 흐름</strong>은 좋은 입력 자료가 됩니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          {/* 04 */}
          <section className="chapter chapter--light" id="chapter-4">
            <div className="chapter__inner">
              <SectionIntro number="04" title="무엇을 만들지 진단한다" english="DECISION TOOL">
                <p>
                  아래 질문에 답하면 <strong>예상 솔루션 타입 · 난이도 · 첫 실험</strong>을 볼 수 있습니다.
                  결과는 정답표가 아니라 ACE와 첫 대화를 시작하기 위한 초안입니다.
                </p>
              </SectionIntro>
              <DecisionDiagnostic />
            </div>
          </section>

          {/* 05 */}
          <section className="chapter chapter--bright" id="chapter-5">
            <div className="chapter__inner">
              <SectionIntro number="05" title="난이도와 리스크" english="DIFFICULTY & RISK">
                <p>
                  같은 문제라도 선택한 형태에 따라 필요한 데이터, 권한, 운영 설계가 달라집니다. 처음에는
                  <strong> 작은 범위에서 먼저 검증</strong>하는 편이 좋습니다.
                </p>
              </SectionIntro>
              <div className="difficulty-matrix">
                {difficultyRows.map((row) => (
                  <Reveal className="difficulty-matrix__row" key={row.level}>
                    <span className={`difficulty-matrix__level is-${row.level.toLowerCase()}`}>{row.level}</span>
                    <div>
                      <strong>{row.types}</strong>
                      <p>{row.note}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <WatchOut>
                이 표는 대략적인 지도입니다. 등급 자체보다 <strong>첫 실험의 범위를 어디까지 줄일지</strong>
                정하는 데 쓰면 됩니다.
              </WatchOut>
            </div>
          </section>

          <footer className="book-ending">
            <div className="book-ending__opening">
              <p>Book 03을 마치며</p>
              <h2>무엇을, 어떤 방식으로 시작할지 정할 수 있습니다.</h2>
            </div>

            <Reveal className="cert-group">
              <p className="cert-group__intro">스스로 확인합니다.</p>
              <p className="cert-group__label">SELF CERTIFICATION · 나는 지금 이것을 할 수 있다</p>
              <CapabilityCheck id="b03-classify" evidence={false} statement="내 업무 문제를 네 가지 솔루션 타입 중 하나로 분류할 수 있다." />
              <CapabilityCheck id="b03-start" evidence={false} statement="무엇을, 어떻게 시작할지 정하고 첫 실험을 한 문장으로 말할 수 있다." />
              <CapabilityCheck id="b03-agent" evidence={false} statement="Custom AI와 Agent의 차이, 그리고 Agent에 추가 운영 설계가 필요한 이유를 설명할 수 있다." />
            </Reveal>

            <NavigateLink href="/book/build" className="next-book">
              <span>NEXT BOOK · 04</span>
              <div>
                <strong>BUILD</strong>
                <p>실장 × ACE AI BUILD</p>
              </div>
              <i aria-hidden="true">→</i>
            </NavigateLink>
          </footer>
        </article>
      </main>
    </div>
  )
}
