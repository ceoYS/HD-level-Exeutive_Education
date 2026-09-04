import type { CSSProperties } from 'react'
import { Blueprint } from '../components/Blueprint'
import { BookCover } from '../components/BookCover'
import { BuildRoadmap } from '../components/BuildRoadmap'
import { ExecutiveTakeaway, SecurityGate } from '../components/Callout'
import { CapabilityCheck } from '../components/CapabilityCheck'
import { ChooseStep } from '../components/ChooseStep'
import { LeverageFinale } from '../components/HdecLeverageEpilogue'
import { PromptBlock } from '../components/PromptBlock'
import { Reveal } from '../components/Reveal'
import { RoleSelect } from '../components/RoleSelect'
import { RoleSplit } from '../components/RoleSplit'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader } from '../components/SiteHeader'
import { TryThisPrompt } from '../components/TryThisPrompt'
import { WeekCanvas } from '../components/WeekCanvas'
import { WeekTips } from '../components/WeekTips'
import { weeks } from '../content/book04-build'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

// 05 EXECUTIVE × ACE BUILD · PART 3 적용.
// HOW WE WORK(원문) + EXECUTIVE × ACE → STEP 1 역할 3유형 → STEP 2 과제 선택(구 Book03 원문) → BUILD ROADMAP → W01(+BLUEPRINT) … W08 + TIP → 엔딩.
export function BuildPage() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()

  return (
    <div className="book-page" style={{ '--book-accent': 'var(--color-blue)' } as CSSProperties}>
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} bookNumber="05" bookKeyword="EXECUTIVE × ACE BUILD" />
      <main id="main-content">
        <article>
          <BookCover
            number="05"
            keyword="EXECUTIVE × ACE BUILD"
            count="8 WEEKS"
            chapters={weeks.map((week) => ({ href: `#week-${week.week}`, label: `${week.phase} · ${week.title}` }))}
            beginHref="#how-we-work"
            beginLabel="START THE PROJECT"
          >
            <div className="book-opening__statement">
              <p>PART 3 · 적용</p>
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
          </BookCover>

          <section className="chapter chapter--light" id="how-we-work">
            <div className="chapter__inner">
              <SectionIntro number="00" title="실장이 문제와 방향을 잡습니다" english="HOW WE WORK">
                <p>
                  실장은 <strong>문제·우선순위·결정·최종 판단</strong>을 맡고, ACE는 내용을 구조화하고
                  구현 과정을 지원합니다.
                </p>
              </SectionIntro>
              <RoleSplit />
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

          <section className="chapter chapter--spruce" id="step-1">
            <div className="chapter__inner">
              <RoleSelect />
            </div>
          </section>

          <ChooseStep />

          <section className="chapter chapter--dark" id="roadmap">
            <div className="chapter__inner">
              <BuildRoadmap />
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
                {week.week === '01' && <Blueprint />}
                {week.prompt && (
                  <TryThisPrompt heading={week.prompt.label}>
                    <PromptBlock label="SAY THIS" tone={week.prompt.tone ?? 'dark'}>
                      {week.prompt.text}
                    </PromptBlock>
                  </TryThisPrompt>
                )}
                <WeekTips week={week.week} />
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

          <footer className="book-ending" id="book-05-ending">
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
            <div className="book-ending__opening book-ending__opening--short">
              <p>현업에서 계속 쓸 때</p>
              <h2>다시 처음부터 만들지 않고, 필요한 부분만 정확하게 이어갑니다.</h2>
            </div>
            <Reveal className="book-ending__finale book-ending__finale--short">
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
          <LeverageFinale />
        </article>
      </main>
    </div>
  )
}
