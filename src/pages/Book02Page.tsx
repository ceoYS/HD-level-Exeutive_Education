import { useState, type CSSProperties } from 'react'
import { Callout, ExecutiveTakeaway, WatchOut } from '../components/Callout'
import { CapabilityCheck } from '../components/CapabilityCheck'
import { LabeledGrid } from '../components/LabeledGrid'
import { NavigateLink } from '../components/NavigateLink'
import { PromptBlock } from '../components/PromptBlock'
import { PromptProgression } from '../components/PromptProgression'
import { RealWorldExample } from '../components/RealWorldExample'
import { Reveal } from '../components/Reveal'
import { ScreenshotPlaceholder } from '../components/ScreenshotPlaceholder'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader } from '../components/SiteHeader'
import { TryThisPrompt } from '../components/TryThisPrompt'
import {
  book02Chapters,
  captureSteps,
  designBrief,
  devStages,
  errorInputs,
  feedbackPhrases,
  instructionParts,
  projectManagement,
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
              <p>AI BUILD · THE LANGUAGE OF DIRECTION</p>
              <h1>
                좋은 프롬프트보다
                <br />
                좋은 업무지시.
              </h1>
              <p className="book-opening__sub">
                결과가 덜 빗나가려면
                <br />
                <em>지시 · 맥락 · 피드백</em>이 분명해야 합니다.
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

          {/* 01 */}
          <section className="chapter chapter--light" id="chapter-1">
            <div className="chapter__inner">
              <SectionIntro number="01" title="좋은 프롬프트보다 좋은 업무지시">
                <p>
                  프롬프트 문구를 외우는 것보다 <strong>무엇을 왜 원하는지</strong> 분명히 말하는 편이
                  결과를 안정적으로 만듭니다.
                </p>
              </SectionIntro>
              <p className="editorial-lead">
                매번 여섯 가지를 모두 쓸 필요는 없습니다. 결과가 자꾸 빗나간다면 아래 항목 중 빠진 것이
                없는지 확인해보면 됩니다.
              </p>
              <LabeledGrid items={instructionParts} numbered />
              <PromptProgression
                steps={[
                  {
                    level: 'BAD',
                    label: '너무 막연함',
                    prompt: '프로젝트 관리 앱 만들어줘.',
                    note: '무엇을, 누구를 위해, 어떤 기준으로인지 없음',
                  },
                  {
                    level: 'BETTER',
                    label: '대상과 내용이 생김',
                    prompt:
                      '여러 프로젝트를 동시에 관리하는 실장급 임원용 현황 화면을 만들어줘. 각 프로젝트의 공정률, 주요 리스크, 다음 의사결정이 한눈에 보여야 해.',
                  },
                  {
                    level: 'ADVANCED',
                    label: '목적·기준·범위까지',
                    prompt:
                      '여러 프로젝트를 관리하는 실장급 임원용 현황 화면을 설계해줘. 목적은 주간 경영회의 시작 전에 프로젝트별 상태를 훑어보는 것. 각 카드에 공정률·핵심 리스크·다음 결정을 표시하고, 지연된 프로젝트가 위로 오도록 정렬해. 지금은 샘플 데이터로 Frontend Prototype만 만들고 실제 데이터는 연결하지 마.',
                  },
                ]}
              />
              <ExecutiveTakeaway>
                <strong>목적, 판단 기준, 유지할 범위</strong>가 보이면 AI도 무엇을 해야 하는지 훨씬
                정확하게 이해합니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          {/* 02 */}
          <section className="chapter chapter--spruce" id="chapter-2">
            <div className="chapter__inner">
              <SectionIntro number="02" title="AI가 모르는 맥락을 채운다" inverse>
                <p>
                  AI는 우리 회사의 사정이나 이 결과를 볼 사람을 저절로 알지 못합니다. 필요한
                  <strong> 배경과 독자</strong>를 함께 알려줘야 합니다.
                </p>
              </SectionIntro>
              <p className="editorial-lead">
                맥락에는 자료·기존 문서·예시·제약뿐 아니라 <strong>누가, 언제, 어떤 목적으로 쓸지</strong>도
                포함됩니다.
              </p>
              <RealWorldExample
                title="같은 초안, 다른 독자"
                scenario="주간 프로젝트 현황 보고 초안을 AI에게 다듬게 하는 상황."
              >
                <TryThisPrompt heading="독자를 알려주면">
                  <PromptBlock label="SAY THIS" tone="signal">
                    이 보고서는 CEO가 1분 안에 핵심을 파악해야 합니다. 첨부한 초안을 그 기준으로 다시 구성해줘. 결론을 맨 앞에 두고, 근거는 세 가지로 압축하고, 세부 수치는 뒤로 보내줘.
                  </PromptBlock>
                </TryThisPrompt>
              </RealWorldExample>
              <WatchOut>
                "잘 정리해줘"만으로는 어떤 기준을 원하는지 알기 어렵습니다.
                <strong> 누구를 위한 결과인지, 어디에서 쓸지</strong>를 먼저 알려주세요.
              </WatchOut>
            </div>
          </section>

          {/* 03 */}
          <section className="chapter chapter--bright" id="chapter-3">
            <div className="chapter__inner">
              <SectionIntro number="03" title="막히면 화면을 보여준다">
                <p>
                  처음 보는 도구에서 막히면 설명을 길게 하기보다 <strong>현재 화면을 보여주고 다음 한
                  단계</strong>를 물어보는 편이 빠릅니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={captureSteps} numbered />
              <TryThisPrompt heading="처음 쓰는 도구 앞에서">
                <PromptBlock label="BEGINNER'S PROMPT" tone="signal">
                  나는 이 도구를 처음 사용합니다. 현재 목표는 [여기에 목표]입니다. 첨부한 화면을 기준으로, 지금 해야 할 딱 한 단계만 알려주세요. 그 단계를 수행한 뒤 다음 화면을 다시 보여드리겠습니다.
                </PromptBlock>
              </TryThisPrompt>
              <Reveal>
                <ScreenshotPlaceholder
                  tool="캡처 → 첨부 → 질문"
                  purpose="막힌 화면을 그대로 캡처해 AI에게 붙이는 장면"
                  description="실제 화면 + '지금 무엇을 눌러야 하나요?' 질문 입력"
                  ratio="16:10"
                  annotation="screen capture / question input / one-step answer"
                />
              </Reveal>
              <ExecutiveTakeaway>
                처음 쓰는 도구는 <strong>한 화면씩 확인하면서</strong> 익히면 됩니다. 캡처는 그때 쓰는
                가장 간단한 보조 수단입니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          {/* 04 */}
          <section className="chapter chapter--light" id="chapter-4">
            <div className="chapter__inner">
              <SectionIntro number="04" title="결과를 부분별로 고친다">
                <p>
                  첫 결과를 본 뒤에는 <strong>유지할 것과 바꿀 것</strong>을 나눠서 말합니다.
                </p>
              </SectionIntro>
              <p className="editorial-lead">
                수정 범위가 넓으면 이미 괜찮은 부분까지 달라질 수 있습니다. 바꿀 범위를 좁혀주면
                변화도 확인하기 쉽습니다.
              </p>
              <LabeledGrid
                items={feedbackPhrases.map((item, index) => ({
                  en: String(index + 1).padStart(2, '0'),
                  label: item.phrase,
                  desc: item.why,
                }))}
              />
              <TryThisPrompt heading="한 부분만 고칠 때">
                <PromptBlock label="SAY THIS" tone="dark">
                  전체를 다시 만들지 마. 지금 레이아웃과 색은 그대로 유지하고, 상단 카드의 정렬만 지연된 프로젝트가 먼저 오도록 바꿔줘. 바꾸기 전에 무엇을 바꿀지 먼저 한 줄로 설명해줘.
                </PromptBlock>
              </TryThisPrompt>
              <WatchOut>
                "더 좋게 만들어줘"는 수정 범위가 너무 넓습니다.
                <strong> 유지할 것과 바꿀 것</strong>을 같이 적어주세요.
              </WatchOut>
            </div>
          </section>

          {/* 05 */}
          <section className="chapter chapter--spruce" id="chapter-5">
            <div className="chapter__inner">
              <SectionIntro number="05" title="화면을 설계하게 한다" inverse>
                <p>
                  화면 설계도 같은 원리입니다. <strong>누가 쓰는지, 무엇을 먼저 봐야 하는지, 어떤
                  행동을 해야 하는지</strong>를 알려줍니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={designBrief} numbered />
              <TryThisPrompt heading="화면을 설계시킬 때">
                <PromptBlock label="DESIGN BRIEF" tone="signal">
                  현장 실장이 주간 회의에서 쓸 프로젝트 현황 화면을 설계해줘. 가장 먼저 보여야 할 것은 지연·리스크가 있는 프로젝트야. 각 항목에서 상세로 들어가는 동작이 필요해. 참고로 카드형 대시보드 구조가 좋아. 지금은 샘플 데이터로 Prototype만, 실제 연결은 하지 마.
                </PromptBlock>
              </TryThisPrompt>
              <ExecutiveTakeaway>
                화면의 우선순위는 디자인 취향보다 업무 순서에서 나옵니다.
                <strong> 무엇을 먼저 봐야 하는지</strong>는 그 업무를 하는 사람이 정합니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          {/* 06 */}
          <section className="chapter chapter--bright" id="chapter-6">
            <div className="chapter__inner">
              <SectionIntro number="06" title="개발 작업을 단계로 맡긴다">
                <p>
                  코드를 바로 바꾸게 하기보다 <strong>현재 구조와 변경 범위를 먼저 확인</strong>한 뒤
                  구현하게 하면 엉뚱한 수정을 줄일 수 있습니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={devStages} numbered />
              <TryThisPrompt heading="개발을 단계로 시킬 때">
                <PromptBlock label="STAGE 1 · PLAN FIRST" tone="dark">
                  바로 코드를 수정하지 말고, 현재 구조를 먼저 분석해. 변경 대상 파일과 작업 순서를 제시한 뒤, 내 확인을 받고 진행해.
                </PromptBlock>
                <PromptBlock label="STAGE 2 · IMPLEMENT" tone="signal">
                  좋아. 확정된 Frontend는 그대로 유지하고, 계획한 순서대로 Backend를 연결해. 각 단계가 끝나면 무엇을 했는지 짧게 보고해줘.
                </PromptBlock>
              </TryThisPrompt>
              <WatchOut>
                구현이 끝났다는 설명만으로는 충분하지 않습니다.
                <strong> 계획 → 구현 → 검증 → 보고</strong> 순서로 확인하면 어디에서 문제가 생겼는지 보기 쉽습니다.
              </WatchOut>
            </div>
          </section>

          {/* 07 */}
          <section className="chapter chapter--light" id="chapter-7">
            <div className="chapter__inner">
              <SectionIntro number="07" title="오류는 원문 그대로 보여준다">
                <p>
                  오류가 나면 추측해서 설명하기보다 <strong>화면과 오류 문구, 직전 행동</strong>을 그대로
                  전달합니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={errorInputs} numbered />
              <TryThisPrompt heading="오류를 함께 풀 때">
                <PromptBlock label="DEBUG PROMPT" tone="dark">
                  화면이 저장 버튼을 눌러도 반응이 없어. 기대한 것은 저장 후 목록으로 돌아가는 것이었어. 첨부한 화면과, 아래 오류 문구 원문을 그대로 붙일게. 이 오류가 난 직전에 나는 새 프로젝트를 추가하고 저장을 눌렀어. 원인 후보와 다음 한 단계를 알려줘.
                </PromptBlock>
              </TryThisPrompt>
              <WatchOut>
                "무슨 에러가 났어요"처럼 기억으로 줄이면 원인을 추측하게 됩니다.
                <strong> 화면과 정확한 오류 문구를 원문 그대로</strong> 주세요.
              </WatchOut>
            </div>
          </section>

          {/* 08 */}
          <section className="chapter chapter--spruce" id="chapter-8">
            <div className="chapter__inner">
              <SectionIntro number="08" title="긴 프로젝트의 맥락을 유지한다" inverse>
                <p>
                  프로젝트가 길어지면 매번 처음부터 설명할 수 없습니다. <strong>목적, 확정 사항, 범위,
                  검증 기준</strong>을 다음 작업에도 이어지게 합니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={projectManagement} numbered />
              <Callout variant="takeaway" eyebrow="실장 관점 · EXECUTIVE TAKEAWAY">
                명령어를 많이 아는 것보다 <strong>이번 작업의 범위와 유지할 기준</strong>을 분명히 하는 것이
                중요합니다. ACE와 AI가 그 기준 안에서 실행을 이어갑니다.
              </Callout>
            </div>
          </section>

          <footer className="book-ending">
            <div className="book-ending__opening">
              <p>Book 02를 마치며</p>
              <h2>AI에게 필요한 일을 더 정확하게 맡길 수 있습니다.</h2>
            </div>

            <Reveal className="cert-group">
              <p className="cert-group__intro">스스로 확인합니다.</p>
              <p className="cert-group__label">SELF CERTIFICATION · 나는 지금 이것을 할 수 있다</p>
              <CapabilityCheck id="b02-instruction" evidence={false} statement="목적·결과·판단 기준을 담아 AI에게 업무지시를 쓸 수 있다." />
              <CapabilityCheck id="b02-capture" evidence={false} statement="막힌 화면을 보여주고 다음 한 단계를 물어볼 수 있다." />
              <CapabilityCheck id="b02-feedback" evidence={false} statement="유지할 것과 바꿀 것을 나눠 부분 수정 요청을 할 수 있다." />
              <CapabilityCheck id="b02-debug" evidence={false} statement="오류 화면과 정확한 문구를 갖춰 문제 해결을 요청할 수 있다." />
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
