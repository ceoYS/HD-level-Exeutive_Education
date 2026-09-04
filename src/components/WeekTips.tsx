import { BuildTip } from './BuildTip'
import { AutomationTermCards, PrdPrinciple, ReferenceBody, ReferenceCopy, SystemTermList } from './Part1Blocks'
import { bookChapters } from '../content/books'
import { REFERENCE_ENGLISH, REFERENCE_TITLE, automationTerms, systemTerms } from '../content/part1-lock'

const term = (name: string) => automationTerms.filter(([t]) => t === name)
const terms = (names: string[]) => automationTerms.filter(([t]) => names.includes(t))

/** 주차별 TIP · DEEP DIVE. 원문 블록을 필요한 BUILD 순간에만 재렌더한다. */
export function WeekTips({ week }: { week: string }) {
  switch (week) {
    case '02':
      return (
        <BuildTip id="tip-w02-prd" label="문제 정의 → PRD / SPEC KIT">
          <PrdPrinciple />
        </BuildTip>
      )
    case '04':
      return (
        <BuildTip id="tip-w04-reference" label="디자인 전달 → Reference / Screenshot Feedback" title={REFERENCE_TITLE} origin={[REFERENCE_ENGLISH, bookChapters[5]]} tone="light">
          <div className="tip-surface tip-surface--reference">
            <ReferenceCopy />
            <ReferenceBody />
          </div>
        </BuildTip>
      )
    case '05':
      return (
        <>
          <BuildTip id="tip-w05-rules" label="AI 일관성 유지 → Rule / Harness">
            <AutomationTermCards terms={terms(['PROJECT INSTRUCTIONS / RULES', 'CONTEXT / DOCS', 'SKILL', 'HARNESS / LOOP'])} />
          </BuildTip>
          <BuildTip id="tip-w05-handoff" label="작업 장기화 → GitHub / Checkpoint / Hand-off">
            <AutomationTermCards terms={term('HAND-OFF / CHECKPOINT')} />
          </BuildTip>
        </>
      )
    case '06':
      return (
        <BuildTip id="tip-w06-mcp" label="외부 데이터 연결 → API / MCP">
          <AutomationTermCards terms={term('MCP')} />
        </BuildTip>
      )
    case '07':
      return (
        <BuildTip id="tip-w07-loop" label="반복 개선 → Loop">
          <AutomationTermCards terms={term('HARNESS / LOOP')} />
        </BuildTip>
      )
    case '08':
      return (
        <BuildTip id="tip-w08-deploy" label="배포 → Deploy">
          <SystemTermList terms={systemTerms.filter(([t]) => t === 'DEPLOY')} />
        </BuildTip>
      )
    default:
      return null
  }
}
