import { useState, type CSSProperties } from 'react'
import { CapabilityCheck } from '../components/CapabilityCheck'
import { Mission } from '../components/Mission'
import { NavigateLink } from '../components/NavigateLink'
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
                읽기를 멈추고, 지금
                <br />
                <em>직접 지시하고 판단하고 고쳐봅니다.</em>
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
              <SectionIntro number="00" title="작게, 그러나 직접" english="LEARN BY DOING">
                <p>
                  각 미션은 짧습니다. 완성도보다 <strong>직접 해보는 경험</strong>이 목적입니다.
                  읽기와 캡처 질문은 휴대폰으로도 충분하지만, 화면을 만드는 <strong>미션
                  04–05</strong>는 태블릿이나 PC에서 더 수월합니다.
                </p>
              </SectionIntro>
              <p className="editorial-lead">
                순서대로 하면 자연스럽게 이어지지만, 지금 끌리는 미션부터 골라도 됩니다. 각 미션 끝에는
                작은 자기인증이 있습니다.
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

          <footer className="book-ending">
            <div className="book-ending__opening">
              <p>여섯 개의 미션을 마치면</p>
              <h2>실장은 AI에게 직접 일을 시켜본 사람입니다.</h2>
            </div>
            <Reveal className="book-ending__finale">
              <p>이제 다시 처음으로 돌아가</p>
              <h2>
                실제 업무 문제를
                <br />
                하나 골라보세요.
              </h2>
              <span>
                Book 04의 8주 과제는 바로 그 문제에서 시작합니다.
                <br />
                가장 잘 아는 현장의 문제가, 가장 좋은 출발점입니다.
              </span>
            </Reveal>
            <NavigateLink href="/#library" className="next-book">
              <span>BACK TO</span>
              <div>
                <strong>THE LIBRARY</strong>
                <p>다섯 권의 지도로 돌아가기</p>
              </div>
              <i aria-hidden="true">↗</i>
            </NavigateLink>
          </footer>
        </article>
      </main>
    </div>
  )
}
