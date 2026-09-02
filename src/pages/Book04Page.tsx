import { useState, type CSSProperties } from 'react'
import { ExecutiveTakeaway, SecurityGate } from '../components/Callout'
import { CapabilityCheck } from '../components/CapabilityCheck'
import { NavigateLink } from '../components/NavigateLink'
import { PromptBlock } from '../components/PromptBlock'
import { Reveal } from '../components/Reveal'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader } from '../components/SiteHeader'
import { TryThisPrompt } from '../components/TryThisPrompt'
import { WeekCanvas } from '../components/WeekCanvas'
import { weeks } from '../content/book04-build'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

export function Book04Page() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()
  const [chaptersOpen, setChaptersOpen] = useState(false)

  return (
    <div className="book-page" style={{ '--book-accent': 'var(--color-blue)' } as CSSProperties}>
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} bookNumber="04" bookKeyword="BUILD" />
      <main id="main-content">
        <article>
          <header className="book-opening book-entry-surface">
            <div className="book-opening__index">
              <span>BOOK</span>
              <strong>04</strong>
              <span>BUILD</span>
            </div>
            <div className="book-opening__statement">
              <p>AI BUILD · 8-WEEK WORKBOOK</p>
              <h1>
                실장 × ACE
                <br />
                AI BUILD.
              </h1>
              <p className="book-opening__sub">
                8주 동안
                <br />
                <em>실제 업무 도구 하나</em>를 함께 만듭니다.
              </p>
            </div>
            <button
              type="button"
              className="chapter-toggle"
              aria-expanded={chaptersOpen}
              aria-controls="chapter-list"
              onClick={() => setChaptersOpen((current) => !current)}
            >
              <span>8 WEEKS</span>
              <i aria-hidden="true">{chaptersOpen ? '−' : '+'}</i>
            </button>
            <ol id="chapter-list" className={`chapter-list${chaptersOpen ? ' is-open' : ''}`}>
              {weeks.map((week) => (
                <li key={week.week}>
                  <a href={`#week-${week.week}`} onClick={() => setChaptersOpen(false)}>
                    <span>{week.week}</span>
                    {`${week.phase} · ${week.title}`}
                  </a>
                </li>
              ))}
            </ol>
            <a className="book-opening__begin" href="#intro">
              START THE PROJECT <span aria-hidden="true">↓</span>
            </a>
          </header>

          <section className="chapter chapter--light" id="intro">
            <div className="chapter__inner">
              <SectionIntro number="00" title="실장이 문제와 방향을 잡습니다" english="HOW WE WORK">
                <p>
                  실장은 <strong>문제·우선순위·결정·최종 판단</strong>을 맡고, ACE는 내용을 구조화하고
                  구현 과정을 지원합니다.
                </p>
              </SectionIntro>
              <div className="contrast-pair">
                <div className="contrast-pair__side contrast-pair__side--accent">
                  <span>EXECUTIVE · 실장</span>
                  <strong>문제와 결정을 맡습니다</strong>
                  <p>무엇이 중요한지 알고, 우선순위를 정하고, 결과가 실제 업무에 맞는지 판단합니다.</p>
                </div>
                <span className="contrast-pair__op" aria-hidden="true">×</span>
                <div className="contrast-pair__side">
                  <span>ACE</span>
                  <strong>정리와 구현을 지원합니다</strong>
                  <p>맥락을 정리하고, 막힌 곳을 함께 풀고, AI와 구현 작업을 이어갈 수 있게 돕습니다.</p>
                </div>
              </div>
              <p className="editorial-lead">
                매주 산출물을 하나씩 남기고, 그 주에 <strong>직접 해본 것</strong>을 짧게 확인합니다.
                결과물만 남기는 것이 아니라 다음 프로젝트에서도 다시 쓸 수 있는 방식까지 익히는 과정입니다.
              </p>
              <ExecutiveTakeaway>
                8주 뒤에는 <strong>작동하는 도구 하나와 그 도구가 왜 필요한지 설명할 수 있는 경험</strong>이
                남습니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--bright">
            {weeks.map((week) => (
              <WeekCanvas
                key={week.week}
                week={week.week}
                phase={week.phase}
                title={week.title}
                intent={week.intent}
                tasks={week.tasks}
                deliverable={week.deliverable}
              >
                {week.prompt && (
                  <TryThisPrompt heading={week.prompt.label}>
                    <PromptBlock label="SAY THIS" tone={week.prompt.tone ?? 'dark'}>
                      {week.prompt.text}
                    </PromptBlock>
                  </TryThisPrompt>
                )}
                {week.security && (
                  <SecurityGate>
                    실제 사내 정보를 연결하기 전에는 승인 범위와 권한을 먼저 확인합니다. 승인되지 않은
                    외부 AI에는 기밀 정보를 넣지 않고, 그전까지는 <strong>합성·공개 데이터</strong>로
                    흐름을 검증합니다.
                  </SecurityGate>
                )}
                <div className="cert-group">
                  <p className="cert-group__label">SELF CERTIFICATION · 나는 지금 이것을 직접 할 수 있다</p>
                  {week.certs.map((cert) => (
                    <CapabilityCheck key={cert.id} id={cert.id} statement={cert.statement} ace={cert.ace} />
                  ))}
                </div>
              </WeekCanvas>
            ))}
          </section>

          <footer className="book-ending">
            <div className="book-ending__opening">
              <p>8주 뒤</p>
              <h2>실제 업무에서 시험해본 도구 하나가 남습니다.</h2>
            </div>
            <Reveal className="book-ending__finale">
              <p>그리고 다음 업무에서도</p>
              <h2>
                같은 방식으로
                <br />
                다시 시작할 수 있습니다.
              </h2>
              <span>
                문제를 정리하고, 방향을 고르고, 결과를 써보고, 필요한 부분을 다시 고치는 흐름.
                <br />
                이 방식이 다음 AI Build의 출발점이 됩니다.
              </span>
            </Reveal>
            <NavigateLink href="/book/practice" className="next-book">
              <span>NEXT BOOK · 05</span>
              <div>
                <strong>PRACTICE</strong>
                <p>직접 만들어보기</p>
              </div>
              <i aria-hidden="true">→</i>
            </NavigateLink>
          </footer>
        </article>
      </main>
    </div>
  )
}
