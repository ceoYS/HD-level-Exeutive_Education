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
                가장 큰 낭비는 느린 제작이 아니라
                <br />
                <em>잘못된 것을 만드는 것</em>입니다.
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
              <SectionIntro number="01" title="잘못된 것을 만들지 않는다" english="CHOOSE WISELY" inverse>
                <p>
                  AI 덕분에 무엇이든 빠르게 만들 수 있게 되면서, 오히려 <strong>엉뚱한 것을 빠르게
                  만드는</strong> 위험이 커졌습니다. 만들기 전에 두 가지를 정합니다.
                </p>
              </SectionIntro>
              <p className="editorial-lead">
                하나, <strong>무엇을</strong> 만들 것인가(제품의 형태). 둘, <strong>어떻게</strong>
                시작할 것인가(시작 방식). 이 장은 그 두 결정을 돕습니다.
              </p>
              <div className="mini-flow" aria-label="무엇을 그리고 어떻게">
                <span className="is-strong">WHAT<small>제품의 형태</small></span>
                <i aria-hidden="true">+</i>
                <span>HOW<small>시작하는 방식</small></span>
                <i aria-hidden="true">→</i>
                <span>FIRST EXPERIMENT<small>첫 실험</small></span>
              </div>
              <ExecutiveTakeaway>
                실장이 방향을 정하면 ACE가 구현합니다. 이 장의 목표는 코드가 아니라
                <strong> "우리 문제는 어떤 유형인가"</strong>를 스스로 판단하는 것입니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          {/* 02 */}
          <section className="chapter chapter--light" id="chapter-2">
            <div className="chapter__inner">
              <SectionIntro number="02" title="무엇을 만들 것인가" english="PART A · WHAT TO BUILD">
                <p>
                  대부분의 업무 문제는 네 가지 형태 중 하나로 시작됩니다. 각각 <strong>언제 가장
                  잘 맞는지</strong>가 다릅니다.
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
              <WatchOut title="Agent는 별개의 난이도입니다">
                GPT · Gem · Project를 만드는 것과 <strong>진짜 자율 Agent</strong>를 만드는 것은
                난이도가 다릅니다. Agent는 권한·관측·오류·비용·루프 제어·사람 승인을 함께
                설계해야 합니다. "대화형 도우미"와 "스스로 판단하는 일꾼"을 혼동하지 마세요.
              </WatchOut>
            </div>
          </section>

          {/* 03 */}
          <section className="chapter chapter--bright" id="chapter-3">
            <div className="chapter__inner">
              <SectionIntro number="03" title="어떻게 시작할 것인가" english="PART B · HOW TO START">
                <p>
                  형태를 정했다면, 시작 방식은 세 가지입니다. 대개 <strong>기존 업무에서 시작</strong>
                  하는 것이 실장에게 가장 빠릅니다.
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
                레퍼런스나 기존 업무에서 시작하면, 빈 화면 앞에서 막히지 않습니다. 실장이 이미 아는
                <strong> 실제 업무 흐름</strong>이 가장 좋은 출발점입니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          {/* 04 */}
          <section className="chapter chapter--light" id="chapter-4">
            <div className="chapter__inner">
              <SectionIntro number="04" title="무엇을 만들지 진단한다" english="DECISION TOOL">
                <p>
                  아래 질문에 답하면 <strong>예상 솔루션 타입 · 난이도 · 첫 실험</strong>을 제안합니다.
                  정답이 아니라 대화를 시작하는 출발점입니다.
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
                  같은 문제라도 어떤 형태로 푸느냐에 따라 난이도가 달라집니다. 처음에는
                  <strong> 낮은 난이도에서 확실한 성공</strong>을 만드는 것이 좋습니다.
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
                난이도 표는 대략의 지도입니다. "우리 것은 정확히 MEDIUM"처럼 <strong>과도한 정밀도</strong>는
                피하세요. 중요한 것은 등급이 아니라, 처음에 무엇으로 <strong>작은 성공</strong>을
                만들지입니다.
              </WatchOut>
            </div>
          </section>

          <footer className="book-ending">
            <div className="book-ending__opening">
              <p>이제 실장은</p>
              <h2>무엇을, 어떻게 만들지 결정할 수 있습니다.</h2>
            </div>

            <Reveal className="cert-group">
              <p className="cert-group__intro">스스로 확인합니다.</p>
              <p className="cert-group__label">SELF CERTIFICATION · 나는 지금 이것을 할 수 있다</p>
              <CapabilityCheck id="b03-classify" evidence={false} statement="내 업무 문제를 네 가지 솔루션 타입 중 하나로 분류할 수 있다." />
              <CapabilityCheck id="b03-start" evidence={false} statement="무엇을, 어떻게 시작할지 정하고 첫 실험을 한 문장으로 말할 수 있다." />
              <CapabilityCheck id="b03-agent" evidence={false} statement="Custom AI와 자율 Agent의 차이, 그리고 Agent가 왜 더 어려운지 설명할 수 있다." />
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
