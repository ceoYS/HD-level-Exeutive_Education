import { useState, type CSSProperties } from 'react'
import { ExecutiveTakeaway, WatchOut } from '../components/Callout'
import { CapabilityCheck } from '../components/CapabilityCheck'
import { LabeledGrid } from '../components/LabeledGrid'
import { NavigateLink } from '../components/NavigateLink'
import { PromptBlock } from '../components/PromptBlock'
import { Reveal } from '../components/Reveal'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader } from '../components/SiteHeader'
import { TryThisPrompt } from '../components/TryThisPrompt'
import {
  book02Chapters,
  builderHandoff,
  contextPack,
  instructionParts,
  prdParts,
  problemIntentParts,
  projectManagement,
  reviewInputs,
  specParts,
} from '../content/book02-instruct'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

export function Book02Page() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()
  const [chaptersOpen, setChaptersOpen] = useState(false)

  return (
    <div className="book-page" style={{ '--book-accent': 'var(--color-orange)' } as CSSProperties}>
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} bookNumber="02" bookKeyword="INSTRUCT" total={8} />
      <main id="main-content">
        <article>
          <header className="book-opening book-entry-surface">
            <div className="book-opening__index">
              <span>BOOK</span>
              <strong>02</strong>
              <span>INSTRUCT</span>
            </div>
            <div className="book-opening__statement">
              <p>AI BUILD · FROM INTENT TO BUILD CONTEXT</p>
              <h1>
                생각을
                <br />
                구현 문서로 바꾸는 법.
              </h1>
              <p className="book-opening__sub">
                대화로 정한 의도를
                <br />
                <em>PRD · SPEC · 작업 맥락</em>으로 이어갑니다.
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
              {book02Chapters.map((chapter, index) => (
                <li key={chapter}>
                  <a href={`#chapter-${index + 1}`} onClick={() => setChaptersOpen(false)}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {chapter}
                  </a>
                </li>
              ))}
            </ol>
            <a className="book-opening__begin" href="#chapter-1">
              START READING <span aria-hidden="true">↓</span>
            </a>
          </header>

          <section className="chapter chapter--light" id="chapter-1">
            <div className="chapter__inner">
              <SectionIntro number="01" title="좋은 프롬프트보다 좋은 업무지시">
                <p>
                  한 번의 요청을 잘 만들 때는 <strong>목적·입력·결과·제약·판단 기준</strong>이 보이면
                  충분합니다. 문구를 외울 필요는 없습니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={instructionParts} numbered />
              <TryThisPrompt heading="업무지시를 시작할 때">
                <PromptBlock label="SAY THIS" tone="signal">
                  여러 프로젝트를 보는 실장용 현황 화면을 만들고 싶어. 주간 회의 전에 지연·리스크·다음 의사결정을 한눈에 보는 것이 목적이야. 지금은 샘플 데이터로만 시작하고 실제 사내 데이터는 연결하지 마.
                </PromptBlock>
              </TryThisPrompt>
              <ExecutiveTakeaway>
                이 장에서 필요한 것은 프롬프트 기술이 아니라 <strong>업무를 맡길 때 기준을 분명히 하는 습관</strong>입니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--spruce" id="chapter-2">
            <div className="chapter__inner">
              <SectionIntro number="02" title="AI가 모르는 맥락을 채운다" inverse>
                <p>
                  AI는 우리 업무의 배경을 저절로 알지 못합니다. 결과가 달라지는 데 필요한 맥락만 골라
                  <strong> 작업 재료</strong>로 줍니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={contextPack} numbered />
              <TryThisPrompt heading="맥락을 붙일 때">
                <PromptBlock label="CONTEXT" tone="light">
                  이 결과를 보는 사람은 본부 실장이고, 주간 회의 시작 전에 2–3분 안에 훑어봅니다. 현재는 Excel과 PPT를 따로 열어 확인합니다. 첨부한 기존 보고서의 항목명은 유지하되, 실제 데이터 연결은 이번 범위에서 제외합니다.
                </PromptBlock>
              </TryThisPrompt>
              <WatchOut>
                자료를 많이 넣는 것이 목적은 아닙니다. <strong>결과를 판단하는 데 필요한 배경만</strong> 넣어야 맥락이 선명해집니다.
              </WatchOut>
            </div>
          </section>

          <section className="chapter chapter--bright" id="chapter-3">
            <div className="chapter__inner">
              <SectionIntro number="03" title="대화를 Problem Intent로 구조화한다">
                <p>
                  처음부터 문서를 완벽하게 쓰려 하지 않습니다. 먼저 실제 업무를 설명하고, AI와 대화하면서
                  <strong>문제·사용자·현재 흐름·원하는 결과</strong>를 정리합니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={problemIntentParts} numbered />
              <TryThisPrompt heading="대화를 구조화할 때">
                <PromptBlock label="PROBLEM INTENT" tone="signal">
                  내가 지금 하는 업무를 설명할게. 해결책을 먼저 제안하지 말고 Pain Point / User / Current Workflow / Desired Outcome 네 항목으로만 정리해줘. 내가 말하지 않은 내용은 추측하지 말고 질문으로 남겨줘.
                </PromptBlock>
              </TryThisPrompt>
              <ExecutiveTakeaway>
                이 단계의 목적은 아이디어를 멋있게 만드는 것이 아니라 <strong>무엇을 해결하려는지 틀리지 않게 잡는 것</strong>입니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--light" id="chapter-4">
            <div className="chapter__inner">
              <SectionIntro number="04" title="요구사항을 PRD로 고정한다">
                <p>
                  대화에서 정한 내용을 PRD에 남깁니다. 이후 방향이 흔들릴 때 다시 확인할
                  <strong> 제품 의도의 기준점</strong>입니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={prdParts} numbered />
              <TryThisPrompt heading="PRD를 만들 때">
                <PromptBlock label="PRD" tone="dark">
                  지금까지 합의한 내용만 사용해서 1페이지 PRD를 작성해줘. Problem / User / Desired Outcome / Must-have / Non-goal / Input / Output / Success Criteria 순서로 정리하고, 아직 결정하지 않은 것은 TBD로 남겨줘.
                </PromptBlock>
              </TryThisPrompt>
              <WatchOut>
                PRD는 기능 목록을 늘리는 문서가 아닙니다. <strong>왜 만들고 어디까지 만들지</strong>를 고정하는 문서입니다.
              </WatchOut>
            </div>
          </section>

          <section className="chapter chapter--spruce" id="chapter-5">
            <div className="chapter__inner">
              <SectionIntro number="05" title="PRD를 SPEC으로 바꾼다" inverse>
                <p>
                  PRD가 방향을 정했다면 SPEC은 Builder가 구현할 수 있도록 <strong>행동·데이터·검증 기준</strong>을 구체화합니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={specParts} numbered />
              <div className="mini-flow" aria-label="Spec driven development flow">
                <span className="is-strong">PRD<small>왜 · 무엇을</small></span>
                <i aria-hidden="true">→</i>
                <span>SPEC<small>어떻게 동작할지</small></span>
                <i aria-hidden="true">→</i>
                <span>PLAN<small>작업 순서</small></span>
                <i aria-hidden="true">→</i>
                <span>TASKS<small>실행 단위</small></span>
              </div>
              <TryThisPrompt heading="SPEC으로 구체화할 때">
                <PromptBlock label="SPEC" tone="signal">
                  이 PRD를 구현용 SPEC으로 바꿔줘. User Flow / Behavior / Data / Exceptions / Acceptance Criteria를 작성하고, 그다음 PLAN과 실행 가능한 TASKS로 나눠줘. PRD에 없는 기능은 추가하지 마.
                </PromptBlock>
              </TryThisPrompt>
              <ExecutiveTakeaway>
                GitHub Spec Kit의 `SPEC → PLAN → TASKS → IMPLEMENT` 같은 방식은 이 흐름을 운영하는 한 예입니다. 핵심은 특정 도구가 아니라 <strong>의도를 문서로 이어가는 것</strong>입니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--bright" id="chapter-6">
            <div className="chapter__inner">
              <SectionIntro number="06" title="Builder에 작업 맥락을 넘긴다">
                <p>
                  Builder에게 다시 처음부터 설명하지 않습니다. 지금까지 만든 문서와 범위를 그대로
                  <strong> 구현의 입력</strong>으로 넘깁니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={builderHandoff} numbered />
              <TryThisPrompt heading="Builder에 넘길 때">
                <PromptBlock label="BUILD HANDOFF" tone="dark">
                  첨부한 PRD·SPEC·PLAN·TASKS를 기준으로 작업해. 이번 범위는 [범위]이고 [유지할 부분]은 바꾸지 마. 문서에 없는 기능은 추가하지 말고, 구현 후 Build/Test 결과와 남은 TASKS를 보고해줘.
                </PromptBlock>
              </TryThisPrompt>
              <ExecutiveTakeaway>
                좋은 Handoff는 길게 설명하는 것이 아니라 <strong>기준 문서·범위·유지사항·검증 기준</strong>을 빠뜨리지 않는 것입니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--light" id="chapter-7">
            <div className="chapter__inner">
              <SectionIntro number="07" title="검토하고 필요한 부분만 고친다">
                <p>
                  구현 뒤에는 문서와 작동 여부를 먼저 확인하고, 그다음 실제로 써봅니다. 문제를 찾으면
                  <strong>근거와 수정 범위</strong>를 함께 줍니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={reviewInputs} numbered />
              <TryThisPrompt heading="수정할 때">
                <PromptBlock label="TARGETED FIX" tone="signal">
                  현재 구현은 유지하고 [실제 업무와 다른 지점]만 수정해. 필요하면 첨부한 화면과 오류 원문을 기준으로 원인을 확인해. 바꾸기 전에 변경 범위를 한 줄로 말하고, 수정 후 같은 흐름으로 다시 검증해줘.
                </PromptBlock>
              </TryThisPrompt>
              <WatchOut>
                캡처나 오류 문구는 독립된 방법론이 아닙니다. <strong>AI가 추측하지 않게 실제 상태를 보여주는 증거</strong>로 쓰면 됩니다.
              </WatchOut>
            </div>
          </section>

          <section className="chapter chapter--spruce" id="chapter-8">
            <div className="chapter__inner">
              <SectionIntro number="08" title="긴 프로젝트의 맥락을 유지한다" inverse>
                <p>
                  프로젝트가 길어지면 가장 큰 문제는 새 대화가 아니라 <strong>결정과 기준이 사라지는 것</strong>입니다. 문서와 기록으로 이어갑니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={projectManagement} numbered />
              <ExecutiveTakeaway>
                실장이 기억해야 할 것은 명령어가 아니라 <strong>현재 기준이 어디에 기록되어 있고, 다음 작업이 무엇을 따라야 하는지</strong>입니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <footer className="book-ending">
            <div className="book-ending__opening">
              <p>Book 02를 마치며</p>
              <h2>대화에서 나온 의도를 Builder가 실행할 수 있는 맥락으로 바꿨습니다.</h2>
            </div>

            <Reveal className="cert-group">
              <p className="cert-group__intro">스스로 확인합니다.</p>
              <p className="cert-group__label">SELF CERTIFICATION · 나는 지금 이것을 할 수 있다</p>
              <CapabilityCheck id="b02-context" evidence={false} statement="필요한 업무 맥락을 골라 AI에게 전달할 수 있다." />
              <CapabilityCheck id="b02-prd" evidence={false} statement="Problem Intent를 PRD로 정리할 수 있다." />
              <CapabilityCheck id="b02-spec" evidence={false} statement="PRD를 SPEC · PLAN · TASKS로 구체화할 수 있다." />
              <CapabilityCheck id="b02-handoff" evidence={false} statement="문서·범위·검증 기준을 Builder에 넘길 수 있다." />
            </Reveal>

            <NavigateLink href="/book/choose" className="next-book">
              <span>NEXT BOOK · 03</span>
              <div>
                <strong>CHOOSE</strong>
                <p>무엇을 만들 것인가</p>
              </div>
              <i aria-hidden="true">→</i>
            </NavigateLink>
          </footer>
        </article>
      </main>
    </div>
  )
}
