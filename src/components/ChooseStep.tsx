import { ExecutiveTakeaway, WatchOut } from './Callout'
import { CapabilityCheck } from './CapabilityCheck'
import { DecisionDiagnostic } from './DecisionDiagnostic'
import { LabeledGrid } from './LabeledGrid'
import { NavigateLink } from './NavigateLink'
import { PromptBlock } from './PromptBlock'
import { RealWorldExample } from './RealWorldExample'
import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'
import { TryThisPrompt } from './TryThisPrompt'
import { difficultyRows, existingWorkflowAsks, startModes } from '../content/book03-choose'

// STEP 2 · 과제 선택. A = 04 사례에서 고른다, B = 구 Book03 원문 블록(Pain Point → 시작 방식 → 진단 → 첫 실험 범위).
const choiceInputs = [
  { en: 'PAIN POINT', label: '업무 Pain Point', desc: '어디서 시간·오류·재작업이 생기는가' },
  { en: 'USER', label: '사용자', desc: '누가 이 문제를 겪고 누가 결과를 쓰는가' },
  { en: 'CURRENT', label: '현재 방식', desc: '지금은 어떤 도구와 순서로 처리하는가' },
  { en: 'OUTCOME', label: '원하는 변화', desc: '제품이 생기면 무엇이 더 빨라지거나 쉬워져야 하는가' },
]

export function ChooseStep() {
  return (
    <>
      <section className="chapter chapter--bright" id="step-2">
        <div className="chapter__inner">
          <Reveal className="step-head">
            <p className="step-eyebrow">STEP 2 · 과제 선택</p>
            <h2>
              무엇을
              <br />
              만들 것인가.
            </h2>
          </Reveal>
          <div className="choose-paths">
            <Reveal as="article" className="choose-path">
              <span>A</span>
              <strong>제시된 사례 / 유형에서 고른다</strong>
              <NavigateLink href="/book/cases">
                WHAT CAN WE BUILD? <i aria-hidden="true">↗</i>
              </NavigateLink>
            </Reveal>
            <Reveal as="article" className="choose-path" delay={120}>
              <span>B</span>
              <strong>내 조직의 Pain Point에서 찾는다</strong>
              <a href="#choose-1">
                아래 순서로 <i aria-hidden="true">↓</i>
              </a>
            </Reveal>
          </div>
          <WatchOut>
            과제는 회사 업무여야 합니다. 개인 가계부, 사주 앱처럼 업무와 무관한 개인 프로젝트는 최종 과제가 될 수 없습니다.
          </WatchOut>
        </div>
      </section>

      <section className="chapter chapter--spruce" id="choose-1">
        <div className="chapter__inner">
          <SectionIntro label="STEP 2 · B" number="01" title="내 Pain Point를 선택 기준으로 정리한다" english="START FROM YOUR WORK" inverse>
            <p>
              제품 유형부터 고르지 않습니다. 먼저 <strong>내가 실제로 겪는 업무 문제</strong>를 네 가지로만
              정리하면 어떤 제품이 필요한지 판단하기 쉬워집니다.
            </p>
          </SectionIntro>
          <LabeledGrid items={choiceInputs} numbered />
          <TryThisPrompt heading="Pain Point를 정리할 때">
            <PromptBlock label="SAY THIS" tone="light">
              내가 반복해서 겪는 업무 문제를 설명할게. 해결책은 아직 제안하지 말고 Pain Point / User / Current Workflow / Desired Outcome 네 항목으로만 정리해줘. 내가 말하지 않은 내용은 질문으로 남겨줘.
            </PromptBlock>
          </TryThisPrompt>
        </div>
      </section>

      <section className="chapter chapter--bright" id="choose-2">
        <div className="chapter__inner">
          <SectionIntro label="STEP 2 · B" number="02" title="어떻게 시작할 것인가" english="CHOOSE A STARTING POINT">
            <p>
              같은 제품이라도 시작 방식은 다를 수 있습니다. <strong>빈 화면 / 좋은 레퍼런스 / 지금 하는 업무</strong>
              중 가장 구체적인 출발점을 고릅니다.
            </p>
          </SectionIntro>
          <LabeledGrid
            items={startModes.map((mode) => ({
              en: mode.en,
              label: mode.label,
              desc: `${mode.desc} · ${mode.when}`,
            }))}
          />
          <RealWorldExample
            title="지금 하는 주간 업무에서 시작하기"
            scenario="매주 반복하는 Excel · Email · PowerPoint 업무가 있다면 그 흐름 자체가 가장 좋은 설계 재료가 될 수 있습니다."
          >
            <TryThisPrompt heading="기존 업무를 보여줄 때">
              {existingWorkflowAsks.map((ask, index) => (
                <PromptBlock key={ask} label={`STEP ${index + 1}`} tone={index === existingWorkflowAsks.length - 1 ? 'signal' : 'light'}>
                  {ask}
                </PromptBlock>
              ))}
            </TryThisPrompt>
          </RealWorldExample>
        </div>
      </section>

      <section className="chapter chapter--light" id="choose-3">
        <div className="chapter__inner">
          <SectionIntro label="STEP 2 · B" number="03" title="무엇을 만들지 진단한다" english="DECISION TOOL">
            <p>
              Book 02에서 본 네 유형을 기준으로 질문에 답합니다. 결과는 정답이 아니라
              <strong> 첫 제품 후보와 첫 실험</strong>을 잡기 위한 출발점입니다.
            </p>
          </SectionIntro>
          <DecisionDiagnostic />
        </div>
      </section>

      <section className="chapter chapter--bright" id="choose-4">
        <div className="chapter__inner">
          <SectionIntro label="STEP 2 · B" number="04" title="첫 실험 범위를 정한다" english="MAKE IT SMALL ENOUGH">
            <p>
              제품 유형을 골랐다면 첫 버전에서 어디까지 할지 정합니다. 처음부터 실제 데이터·권한·통합을
              모두 넣기보다 <strong>가장 중요한 가설부터 확인</strong>합니다.
            </p>
          </SectionIntro>
          <div className="difficulty-matrix">
            {difficultyRows.map((row) => (
              <Reveal className="difficulty-matrix__row" key={row.level}>
                <span className={`difficulty-matrix__level is-${row.level.toLowerCase()}`}>{row.level}</span>
                <div>
                  <strong>{row.types}</strong>
                  <p>{row.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <TryThisPrompt heading="선택을 한 문장으로 고정할 때">
            <PromptBlock label="MY FIRST BUILD" tone="signal">
              내 Pain Point는 [문제]이고, 첫 제품은 [Custom AI / Web·App / Automation / Agent]로 시작한다. 시작 방식은 [Blank / Reference / Existing Workflow]다. 첫 실험에서는 [확인할 핵심 흐름]까지만 만들고, [실제 데이터·로그인·외부 시스템 연결 등]은 아직 제외한다.
            </PromptBlock>
          </TryThisPrompt>
          <WatchOut>
            여기서 결정하는 것은 최종 시스템이 아니라 <strong>첫 번째로 검증할 제품 형태와 범위</strong>입니다.
            실제로 만들어본 뒤 바꿔도 됩니다.
          </WatchOut>
          <ExecutiveTakeaway>
            이 단계가 끝나면 "무엇을 만들까?"가 아니라 <strong>"나는 이 Pain Point를 이 제품으로 먼저 시험한다"</strong>라고 말할 수 있어야 합니다.
          </ExecutiveTakeaway>
          <Reveal className="cert-group">
            <p className="cert-group__intro">스스로 확인합니다.</p>
            <p className="cert-group__label">SELF CERTIFICATION · 나는 지금 이것을 할 수 있다</p>
            <CapabilityCheck id="b03-pain" evidence={false} statement="내 업무 Pain Point와 원하는 변화를 설명할 수 있다." />
            <CapabilityCheck id="b03-type" evidence={false} statement="내가 만들 제품 유형을 하나 고르고 이유를 말할 수 있다." />
            <CapabilityCheck id="b03-scope" evidence={false} statement="첫 실험에서 만들 것과 아직 하지 않을 것을 구분할 수 있다." />
          </Reveal>
        </div>
      </section>
    </>
  )
}
