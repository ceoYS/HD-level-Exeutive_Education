import { useState, type CSSProperties } from 'react'
import { CapabilityCheck } from '../components/CapabilityCheck'
import { HdecLeverageEpilogue } from '../components/HdecLeverageEpilogue'
import { Mission } from '../components/Mission'
import { PromptBlock } from '../components/PromptBlock'
import { Reveal } from '../components/Reveal'
import { ScreenshotPlaceholder } from '../components/ScreenshotPlaceholder'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader } from '../components/SiteHeader'
import { TryThisPrompt } from '../components/TryThisPrompt'
import { missions } from '../content/book05-practice'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

export function Book05Page() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()
  const [chaptersOpen, setChaptersOpen] = useState(false)

  return (
    <div className="book-page" style={{ '--book-accent': 'var(--color-yellow)' } as CSSProperties}>
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} bookNumber="05" bookKeyword="APPLY" />
      <main id="main-content">
        <article>
          <header className="book-opening book-entry-surface">
            <div className="book-opening__index">
              <span>BOOK</span>
              <strong>05</strong>
              <span>APPLY</span>
            </div>
            <div className="book-opening__statement">
              <p>AI BUILD · FIELD PLAYBOOK</p>
              <h1>
                실제 업무에서
                <br />
                계속 쓰고 고치기.
              </h1>
              <p className="book-opening__sub">
                다시 처음부터 만드는 법이 아니라
                <br />
                <em>현업에서 자주 생기는 상황에 대응하는 법</em>을 다룹니다.
              </p>
            </div>
            <button
              type="button"
              className="chapter-toggle"
              aria-expanded={chaptersOpen}
              aria-controls="chapter-list"
              onClick={() => setChaptersOpen((current) => !current)}
            >
              <span>6 PLAYBOOKS</span>
              <i aria-hidden="true">{chaptersOpen ? '−' : '+'}</i>
            </button>
            <ol id="chapter-list" className={`chapter-list${chaptersOpen ? ' is-open' : ''}`}>
              {missions.map((mission) => (
                <li key={mission.number}>
                  <a href={`#mission-${mission.number}`} onClick={() => setChaptersOpen(false)}>
                    <span>{mission.number}</span>
                    {mission.title}
                  </a>
                </li>
              ))}
            </ol>
            <a className="book-opening__begin" href="#intro">
              OPEN THE PLAYBOOK <span aria-hidden="true">↓</span>
            </a>
          </header>

          <section className="chapter chapter--light" id="intro">
            <div className="chapter__inner">
              <SectionIntro number="00" title="만든 뒤부터가 실제 사용입니다" english="BUILD → REAL WORK">
                <p>
                  Book 04에서 만드는 과정은 끝났습니다. 실제 업무에 넣으면 화면이 다르거나, 오류가 생기거나,
                  새 기능이 필요하거나, 작업을 다음 세션으로 넘겨야 하는 순간이 생깁니다.
                </p>
              </SectionIntro>
              <p className="editorial-lead">
                이 책은 제작 과정을 다시 반복하지 않습니다. <strong>캡처 · 오류 원문 · Targeted Fix · Reviewer ·
                Checkpoint · 작은 SPEC</strong>처럼 실제로 계속 써먹는 방법만 모았습니다.
              </p>
            </div>
          </section>

          <section className="chapter chapter--bright">
            {missions.map((mission) => (
              <Mission
                key={mission.number}
                number={mission.number}
                title={mission.title}
                goal={mission.goal}
                minutes={mission.minutes}
                steps={mission.steps}
              >
                {mission.prompt && (
                  <TryThisPrompt heading={mission.prompt.label}>
                    <PromptBlock label="SAY THIS" tone={mission.prompt.tone ?? 'dark'}>
                      {mission.prompt.text}
                    </PromptBlock>
                  </TryThisPrompt>
                )}
                {mission.screenshot && (
                  <Reveal>
                    <ScreenshotPlaceholder
                      tool={mission.screenshot.tool}
                      purpose={mission.screenshot.purpose}
                      description={mission.screenshot.description}
                      ratio="16:10"
                      annotation={mission.screenshot.annotation}
                    />
                  </Reveal>
                )}
                {mission.note && <p className="mission__note">{mission.note}</p>}
                <div className="cert-group">
                  <p className="cert-group__label">CAN DO · 나는 지금 이것을 할 수 있다</p>
                  <CapabilityCheck id={mission.cert.id} statement={mission.cert.statement} evidence={false} />
                </div>
              </Mission>
            ))}
          </section>

          <footer className="book-ending" id="book-05-ending">
            <div className="book-ending__opening">
              <p>현업에서 계속 쓸 때</p>
              <h2>다시 처음부터 만들지 않고, 필요한 부분만 정확하게 이어갑니다.</h2>
            </div>
            <Reveal className="book-ending__finale">
              <p>AI Builder에게 중요한 것은</p>
              <h2>
                첫 버전을 만드는 것보다
                <br />
                계속 다듬을 수 있는 능력입니다.
              </h2>
              <span>
                상태를 보여주고 · 범위를 통제하고 · 검토하고 · 기록하고 · 필요한 기능만 확장합니다.
              </span>
            </Reveal>
          </footer>
          <HdecLeverageEpilogue />
        </article>
      </main>
    </div>
  )
}
