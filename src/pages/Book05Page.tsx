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
              <p>AI BUILD · HANDS-ON MISSIONS</p>
              <h1>
                직접
                <br />
                만들어보기.
              </h1>
              <p className="book-opening__sub">
                짧게 해보고
                <br />
                <em>결과를 보고 다시 고쳐봅니다.</em>
              </p>
            </div>
            <button
              type="button"
              className="chapter-toggle"
              aria-expanded={chaptersOpen}
              aria-controls="chapter-list"
              onClick={() => setChaptersOpen((current) => !current)}
            >
              <span>6 MISSIONS</span>
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
              START MISSIONS <span aria-hidden="true">↓</span>
            </a>
          </header>

          <section className="chapter chapter--light" id="intro">
            <div className="chapter__inner">
              <SectionIntro number="00" title="짧게 직접 해봅니다" english="LEARN BY DOING">
                <p>
                  각 미션은 10–25분 정도입니다. 결과물을 잘 만드는 것보다 <strong>내가 직접 요청하고,
                  확인하고, 수정해보는 것</strong>에 초점을 둡니다. 화면 제작 미션 04–05는 태블릿이나
                  PC에서 더 수월합니다.
                </p>
              </SectionIntro>
              <p className="editorial-lead">
                순서대로 해도 되고 필요한 미션부터 골라도 됩니다. 각 미션을 끝낸 뒤 실제로 해봤는지만
                짧게 확인합니다.
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
              <p>여섯 개의 미션을 마치면</p>
              <h2>AI에게 요청하고 결과를 고쳐보는 흐름을 한 번 경험했습니다.</h2>
            </div>
            <Reveal className="book-ending__finale">
              <p>이제 실제 업무에서</p>
              <h2>
                바꿔보고 싶은 문제를
                <br />
                하나 골라보세요.
              </h2>
              <span>
                작은 문제부터 같은 방식으로 시작하면 됩니다.
                <br />
                설명하고, 만들어보고, 직접 써보고, 필요한 부분을 고칩니다.
              </span>
            </Reveal>
          </footer>
          <HdecLeverageEpilogue />
        </article>
      </main>
    </div>
  )
}
