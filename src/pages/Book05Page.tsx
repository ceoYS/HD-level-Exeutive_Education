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
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} bookNumber="05" bookKeyword="PRACTICE" />
      <main id="main-content">
        <article>
          <header className="book-opening book-entry-surface">
            <div className="book-opening__index">
              <span>BOOK</span>
              <strong>05</strong>
              <span>PRACTICE</span>
            </div>
            <div className="book-opening__statement">
              <p>AI BUILD · MINI BUILD</p>
              <h1>
                한 번
                <br />
                끝까지 만들어보기.
              </h1>
              <p className="book-opening__sub">
                앞에서 본 방법을 다시 설명하지 않고
                <br />
                <em>하나의 작은 도구를 끝까지 만들어봅니다.</em>
              </p>
            </div>
            <button
              type="button"
              className="chapter-toggle"
              aria-expanded={chaptersOpen}
              aria-controls="chapter-list"
              onClick={() => setChaptersOpen((current) => !current)}
            >
              <span>6 STEPS</span>
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
              START MINI BUILD <span aria-hidden="true">↓</span>
            </a>
          </header>

          <section className="chapter chapter--light" id="intro">
            <div className="chapter__inner">
              <SectionIntro number="00" title="여섯 단계가 하나로 이어집니다" english="ONE MINI BUILD">
                <p>
                  여기서는 새로운 개념을 배우지 않습니다. <strong>Problem Brief부터 Targeted Fix까지</strong>
                  앞에서 본 흐름을 작은 문제 하나에 그대로 적용합니다.
                </p>
              </SectionIntro>
              <p className="editorial-lead">
                미션은 서로 독립된 팁이 아닙니다. 01에서 만든 산출물이 02의 입력이 되고, 그 결과가 다시
                다음 단계로 넘어갑니다. 가능하면 PC에서 01부터 06까지 순서대로 진행하세요.
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
                  <p className="cert-group__label">DID IT · 직접 해봤다면</p>
                  <CapabilityCheck id={mission.cert.id} statement={mission.cert.statement} evidence={false} />
                </div>
              </Mission>
            ))}
          </section>

          <footer className="book-ending" id="book-05-ending">
            <div className="book-ending__opening">
              <p>여섯 단계를 마치면</p>
              <h2>Problem Brief에서 Working Prototype까지 한 번 직접 연결했습니다.</h2>
            </div>
            <Reveal className="book-ending__finale">
              <p>다음부터는</p>
              <h2>
                같은 흐름을
                <br />
                실제 업무 문제에 적용합니다.
              </h2>
              <span>
                문제의 크기와 연결 범위만 달라질 뿐,
                <br />
                PRD → SPEC → BUILD → REVIEW → USE → FIX의 흐름은 같습니다.
              </span>
            </Reveal>
          </footer>
          <HdecLeverageEpilogue />
        </article>
      </main>
    </div>
  )
}
