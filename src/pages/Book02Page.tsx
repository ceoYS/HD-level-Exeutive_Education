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
                통제 가능한 결과는 요령이 아니라
                <br />
                <em>지시 · 맥락 · 피드백</em>의 언어에서 나옵니다.
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
                  AI에게 필요한 것은 마법의 문장이 아니라 <strong>분명한 업무지시</strong>입니다.
                  부하 직원에게 일을 맡길 때처럼, 목적과 기준을 주면 결과가 통제됩니다.
                </p>
              </SectionIntro>
              <p className="editorial-lead">
                매번 여섯 가지를 모두 쓸 필요는 없습니다. 그러나 결과가 자꾸 빗나간다면, 대개 이
                중 하나가 빠져 있습니다.
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
                      '여러 프로젝트를 관리하는 실장급 임원용 현황 화면을 설계해줘. 목적은 주간 경영회의에서 3분 안에 프로젝트별 상태를 파악하는 것. 각 카드에 공정률·핵심 리스크·다음 결정을 표시하고, 지연된 프로젝트가 위로 오도록 정렬해. 지금은 Dummy Data로 Frontend Prototype만 만들고 실제 데이터는 연결하지 마.',
                  },
                ]}
              />
              <ExecutiveTakeaway>
                실장은 이미 좋은 지시를 내리는 사람입니다. AI에게도 똑같이 하면 됩니다 —
                <strong> 목적을 말하고, 기준을 정하고, 하지 말아야 할 것을 짚어주는 것.</strong>
              </ExecutiveTakeaway>
            </div>
          </section>

          {/* 02 */}
          <section className="chapter chapter--spruce" id="chapter-2">
            <div className="chapter__inner">
              <SectionIntro number="02" title="AI가 모르면 맥락을 준다" inverse>
                <p>
                  AI는 우리 회사도, 이 보고서를 볼 사람도 모릅니다. <strong>맥락을 주면</strong>
                  같은 요청도 전혀 다른 결과가 됩니다.
                </p>
              </SectionIntro>
              <p className="editorial-lead">
                맥락은 자료·기존 문서·예시·제약·그리고 <strong>누가 이 결과를 볼 것인가</strong>
                입니다. 특히 "대상 독자"를 알려주는 순간 결과의 밀도가 달라집니다.
              </p>
              <RealWorldExample
                title="같은 초안, 다른 독자"
                scenario="주간 프로젝트 현황 보고 초안을 AI에게 다듬게 하는 상황."
              >
                <TryThisPrompt heading="독자를 알려주면">
                  <PromptBlock label="SAY THIS" tone="signal">
                    이 보고서는 CEO가 3분 안에 핵심을 이해해야 합니다. 첨부한 초안을 그 기준으로 다시 구성해줘. 결론을 맨 앞에 두고, 근거는 세 가지로 압축하고, 세부 수치는 뒤로 보내줘.
                  </PromptBlock>
                </TryThisPrompt>
              </RealWorldExample>
              <WatchOut>
                맥락 없이 "잘 정리해줘"라고 하면 AI는 평균적인 답을 냅니다. 평균은 실장에게 쓸모가
                없습니다. <strong>누구를 위한, 어떤 자리에서 쓸 결과인지</strong>를 먼저 주세요.
              </WatchOut>
            </div>
          </section>

          {/* 03 */}
          <section className="chapter chapter--bright" id="chapter-3">
            <div className="chapter__inner">
              <SectionIntro number="03" title="모르면 캡처해서 물어본다">
                <p>
                  처음 쓰는 도구 앞에서 막히는 것은 당연합니다. 이때 가장 강력한 방법은
                  <strong> 화면을 캡처해서 한 단계만 물어보는 것</strong>입니다.
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
                한 번에 다 배우려 하지 마세요. <strong>캡처 → 한 단계 → 다음 캡처</strong>를 반복하면
                어떤 새 도구도 실장이 직접 통과할 수 있습니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          {/* 04 */}
          <section className="chapter chapter--light" id="chapter-4">
            <div className="chapter__inner">
              <SectionIntro number="04" title="나온 결과를 고친다">
                <p>
                  첫 결과는 초안입니다. 중요한 것은 <strong>전체를 갈아엎지 않고</strong> 원하는
                  부분만 정확히 고치게 하는 언어입니다.
                </p>
              </SectionIntro>
              <p className="editorial-lead">
                AI는 지시를 넓게 해석해 멀쩡한 부분까지 다시 만들곤 합니다. 아래 표현들이
                <strong> 의도를 지키면서 부분만 바꾸게</strong> 합니다.
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
                "더 좋게 만들어줘" 같은 지시는 위험합니다. AI가 마음대로 다 바꿔도 막을 수 없습니다.
                <strong> 유지할 것과 바꿀 것을 항상 함께</strong> 말하세요.
              </WatchOut>
            </div>
          </section>

          {/* 05 */}
          <section className="chapter chapter--spruce" id="chapter-5">
            <div className="chapter__inner">
              <SectionIntro number="05" title="AI에게 디자인을 시킨다" inverse>
                <p>
                  화면을 만들 때도 지시의 구조는 같습니다. <strong>누가·무엇을·무엇이 먼저 보여야
                  하는지</strong>를 주면 AI가 화면을 제안합니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={designBrief} numbered />
              <TryThisPrompt heading="화면을 설계시킬 때">
                <PromptBlock label="DESIGN BRIEF" tone="signal">
                  현장 실장이 주간 회의에서 쓸 프로젝트 현황 화면을 설계해줘. 가장 먼저 보여야 할 것은 지연·리스크가 있는 프로젝트야. 각 항목에서 상세로 들어가는 동작이 필요해. 참고로 카드형 대시보드 구조가 좋아. 지금은 Dummy Data로 Prototype만, 실제 연결은 하지 마.
                </PromptBlock>
              </TryThisPrompt>
              <ExecutiveTakeaway>
                디자인 지시의 핵심은 예쁜 화면이 아니라 <strong>정보의 우선순위</strong>입니다. 무엇이
                먼저 보여야 하는지는, 그 업무를 아는 실장이 가장 잘 압니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          {/* 06 */}
          <section className="chapter chapter--bright" id="chapter-6">
            <div className="chapter__inner">
              <SectionIntro number="06" title="AI에게 개발을 시킨다">
                <p>
                  개발을 시킬 때 가장 흔한 실수는 "바로 고쳐줘"입니다. <strong>먼저 분석하고 계획을
                  받은 뒤 진행</strong>하게 하면 사고를 줄입니다.
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
                AI가 "다 했습니다"라고 해도 <strong>작동을 확인하기 전까지는 끝난 것이 아닙니다.</strong>
                계획 → 구현 → 검증 → 보고의 순서를 요구하면, 어디서 어긋났는지 함께 볼 수 있습니다.
              </WatchOut>
            </div>
          </section>

          {/* 07 */}
          <section className="chapter chapter--light" id="chapter-7">
            <div className="chapter__inner">
              <SectionIntro number="07" title="오류가 나면 AI와 같이 해결한다">
                <p>
                  오류는 실패가 아니라 <strong>정보</strong>입니다. AI에게 정확한 정보를 주면 대부분
                  함께 풀 수 있습니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={errorInputs} numbered />
              <TryThisPrompt heading="오류를 함께 풀 때">
                <PromptBlock label="DEBUG PROMPT" tone="dark">
                  화면이 저장 버튼을 눌러도 반응이 없어. 기대한 것은 저장 후 목록으로 돌아가는 것이었어. 첨부한 화면과, 아래 오류 문구 원문을 그대로 붙일게. 이 오류가 난 직전에 나는 새 프로젝트를 추가하고 저장을 눌렀어. 원인 후보와 다음 한 단계를 알려줘.
                </PromptBlock>
              </TryThisPrompt>
              <WatchOut>
                오류를 기억으로 요약하지 마세요. "무슨 에러가 났어요"는 AI가 추측하게 만듭니다.
                <strong> 화면과 정확한 오류 문구를 원문 그대로</strong> 주는 것이 가장 빠른 길입니다.
              </WatchOut>
            </div>
          </section>

          {/* 08 */}
          <section className="chapter chapter--spruce" id="chapter-8">
            <div className="chapter__inner">
              <SectionIntro number="08" title="긴 프로젝트에서 AI를 관리한다" inverse>
                <p>
                  8주짜리 프로젝트는 한 번의 지시로 끝나지 않습니다. AI가 <strong>같은 방향을 계속
                  유지</strong>하도록 관리하는 습관이 필요합니다.
                </p>
              </SectionIntro>
              <LabeledGrid items={projectManagement} numbered />
              <Callout variant="takeaway" eyebrow="실장 관점 · NOT A COMMAND TUTORIAL">
                명령어를 외울 필요는 없습니다. 실장이 할 일은 <strong>범위를 정하고, 지켜야 할 것을
                명시하고, 의미 있는 지점에서 저장하도록</strong> 방향을 주는 것입니다. 실행은 ACE와
                AI가 맡습니다.
              </Callout>
            </div>
          </section>

          <footer className="book-ending">
            <div className="book-ending__opening">
              <p>이제 실장은 AI에게</p>
              <h2>통제 가능한 결과를 지시할 수 있습니다.</h2>
            </div>

            <Reveal className="cert-group">
              <p className="cert-group__intro">스스로 확인합니다.</p>
              <p className="cert-group__label">SELF CERTIFICATION · 나는 지금 이것을 할 수 있다</p>
              <CapabilityCheck id="b02-instruction" evidence={false} statement="목적·결과·판단 기준을 담아 AI에게 업무지시를 쓸 수 있다." />
              <CapabilityCheck id="b02-capture" evidence={false} statement="막혔을 때 화면을 캡처해 '한 단계만' 물어볼 수 있다." />
              <CapabilityCheck id="b02-feedback" evidence={false} statement="전체를 갈아엎지 않고 원하는 부분만 고치도록 피드백할 수 있다." />
              <CapabilityCheck id="b02-debug" evidence={false} statement="오류가 났을 때 화면과 정확한 문구를 갖춰 AI와 함께 해결할 수 있다." />
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
