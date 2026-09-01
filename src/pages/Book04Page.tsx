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
                읽는 책이 아닙니다. 8주 동안
                <br />
                <em>하나의 실제 도구</em>를 함께 만드는 워크북입니다.
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
              <SectionIntro number="00" title="실장이 문제를 소유합니다" english="HOW WE WORK">
                <p>
                  이 8주는 ACE가 대신 만들어주는 과정이 아닙니다. <strong>실장이 문제·결정·우선순위·
                  판단을 소유</strong>하고, ACE는 그것을 구조화하고 구현을 돕습니다.
                </p>
              </SectionIntro>
              <div className="contrast-pair">
                <div className="contrast-pair__side contrast-pair__side--accent">
                  <span>EXECUTIVE · 실장</span>
                  <strong>문제와 결정을 소유합니다</strong>
                  <p>무엇이 중요한지 알고, 우선순위를 정하고, 결과가 쓸모 있는지 판단합니다.</p>
                </div>
                <span className="contrast-pair__op" aria-hidden="true">×</span>
                <div className="contrast-pair__side">
                  <span>ACE</span>
                  <strong>구조화하고 구현을 돕습니다</strong>
                  <p>맥락을 정리하고, 막힌 곳을 뚫고, 구현을 지원합니다. 대신 전부 만들어주지 않습니다.</p>
                </div>
              </div>
              <p className="editorial-lead">
                매주 <strong>산출물</strong>이 하나씩 쌓이고, 그 주에 실장이 <strong>직접 할 수 있게 된
                것</strong>을 스스로 인증합니다. 자기인증은 시험이 아니라, 습득한 역량을 확인하는
                기록입니다.
              </p>
              <ExecutiveTakeaway>
                8주가 끝나면 남는 것은 지식이 아니라 <strong>작동하는 도구 하나와, 그것을 3분 안에
                설명할 수 있는 실장 자신</strong>입니다.
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
                    이번 주의 핵심은 속도가 아니라 안전입니다. 기밀 사내 정보를 승인되지 않은 외부
                    AI에 넣지 마세요. 연결이 필요하면 <strong>승인·권한·거버넌스</strong>를 먼저
                    확인하고, 그전까지는 합성·공개 데이터로 진행합니다.
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
              <p>8주 뒤, 실장은</p>
              <h2>작동하는 도구 하나를 직접 만들어냅니다.</h2>
            </div>
            <Reveal className="book-ending__finale">
              <p>가장 중요한 것은 그 도구가 아니라</p>
              <h2>
                이제 실장이
                <br />
                직접 만들 수 있다는 사실입니다.
              </h2>
              <span>
                문제를 정의하고, 방향을 정하고, 결과를 판단하고, 다시 지시하는 능력.
                <br />
                그것은 8주 뒤에도 사라지지 않습니다.
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
