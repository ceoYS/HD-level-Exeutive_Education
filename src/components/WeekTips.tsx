import { BuildTip } from './BuildTip'
import { CapabilityCheck } from './CapabilityCheck'
import { ControlledInfrastructure, LeverageEvidence } from './HdecLeverageEpilogue'
import { Mission } from './Mission'
import { AutomationTermCards, PrdPrinciple, ReferenceBody, ReferenceCopy, SystemTermList } from './Part1Blocks'
import { PromptBlock } from './PromptBlock'
import { TryThisPrompt } from './TryThisPrompt'
import { ApiKeyNotice } from './UseCaseCards'
import { bookChapters } from '../content/books'
import { missions } from '../content/book05-practice'
import { exploreTypes } from '../content/explore-types'
import { REFERENCE_ENGLISH, REFERENCE_TITLE, automationTerms, systemTerms } from '../content/part1-lock'

const term = (name: string) => automationTerms.filter(([t]) => t === name)
const terms = (names: string[]) => automationTerms.filter(([t]) => names.includes(t))
const mission = (number: string) => missions.find((item) => item.number === number)!

/** 구 Book05 Playbook(원문)을 필요한 주차 TIP 안에서 그대로 렌더한다. */
function MissionBlock({ number }: { number: string }) {
  const item = mission(number)
  return (
    <Mission number={item.number} title={item.title} goal={item.goal} minutes={item.minutes} steps={item.steps}>
      {item.prompt && (
        <TryThisPrompt heading={item.prompt.label}>
          <PromptBlock label="SAY THIS" tone={item.prompt.tone ?? 'dark'}>
            {item.prompt.text}
          </PromptBlock>
        </TryThisPrompt>
      )}
      {item.note && <p className="mission__note">{item.note}</p>}
      <div className="cert-group">
        <p className="cert-group__label">CAN DO · 나는 지금 이것을 할 수 있다</p>
        <CapabilityCheck id={item.cert.id} statement={item.cert.statement} evidence={false} />
      </div>
    </Mission>
  )
}

/** 주차별 TIP · DEEP DIVE. 원문 블록을 필요한 BUILD 순간에만 재렌더한다. */
export function WeekTips({ week }: { week: string }) {
  switch (week) {
    case '02':
      return (
        <BuildTip id="tip-w02-prd" label="문제 정의 → PRD / SPEC KIT">
          <PrdPrinciple />
        </BuildTip>
      )
    case '03':
      return (
        <BuildTip id="tip-w03-spec" label="문제 정의 → PRD / SPEC KIT" title={mission('06').title} tone="light">
          <MissionBlock number="06" />
        </BuildTip>
      )
    case '04':
      return (
        <BuildTip id="tip-w04-reference" label="디자인 전달 → Reference / Screenshot Feedback" title={REFERENCE_TITLE} origin={[REFERENCE_ENGLISH, bookChapters[5]]} tone="light">
          <div className="tip-surface tip-surface--reference">
            <ReferenceCopy />
            <ReferenceBody />
          </div>
          <MissionBlock number="01" />
        </BuildTip>
      )
    case '05':
      return (
        <>
          <BuildTip id="tip-w05-rules" label="AI 일관성 유지 → Rule / Harness">
            <AutomationTermCards terms={terms(['PROJECT INSTRUCTIONS / RULES', 'CONTEXT / DOCS', 'SKILL', 'HARNESS / LOOP'])} />
          </BuildTip>
          <BuildTip id="tip-w05-handoff" label="작업 장기화 → GitHub / Checkpoint / Hand-off" title={mission('05').title} tone="light">
            <div className="tip-surface tip-surface--dark">
              <AutomationTermCards terms={term('HAND-OFF / CHECKPOINT')} />
            </div>
            <MissionBlock number="05" />
          </BuildTip>
        </>
      )
    case '06':
      return (
        <BuildTip id="tip-w06-mcp" label="외부 데이터 연결 → API / MCP" tone="light">
          <div className="tip-surface tip-surface--dark">
            <AutomationTermCards terms={term('MCP')} />
          </div>
          <ApiKeyNotice />
          <ControlledInfrastructure />
        </BuildTip>
      )
    case '07':
      return (
        <BuildTip id="tip-w07-loop" label="반복 개선 → Loop" tone="light">
          <div className="tip-surface tip-surface--dark">
            <AutomationTermCards terms={term('HARNESS / LOOP')} />
          </div>
          <MissionBlock number="02" />
          <MissionBlock number="03" />
          <MissionBlock number="04" />
        </BuildTip>
      )
    case '08':
      return (
        <>
          <BuildTip id="tip-w08-deploy" label="배포 → Deploy">
            <SystemTermList terms={systemTerms.filter(([t]) => t === 'DEPLOY')} />
            <p className="tip-line">{exploreTypes[1].buildSteps[5]}</p>
          </BuildTip>
          <BuildTip id="tip-w08-baseline" label="Baseline · Pilot 효과" tone="light">
            <LeverageEvidence />
          </BuildTip>
        </>
      )
    default:
      return null
  }
}
