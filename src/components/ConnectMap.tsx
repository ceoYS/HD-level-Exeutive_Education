import { NavigateLink } from './NavigateLink'
import { automationTerms } from '../content/part1-lock'

// 02 CH 03 지도: 원문 카드 제목 6개만 노드로 보여주고, 본문은 05 BUILD의 TIP에서 필요한 순간에 읽는다.
const tipAnchors: Record<string, string> = {
  'PROJECT INSTRUCTIONS / RULES': 'tip-w05-rules',
  'CONTEXT / DOCS': 'tip-w05-rules',
  'HAND-OFF / CHECKPOINT': 'tip-w05-handoff',
  MCP: 'tip-w06-mcp',
  SKILL: 'tip-w05-rules',
  'HARNESS / LOOP': 'tip-w07-loop',
}

export function ConnectMap() {
  return (
    <nav className="connect-map" aria-label="규칙과 도구 지도">
      {automationTerms.map(([term], index) => (
        <NavigateLink href={`/book/build#${tipAnchors[term]}`} key={term}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{term}</strong>
          <i aria-hidden="true">↗</i>
        </NavigateLink>
      ))}
    </nav>
  )
}
