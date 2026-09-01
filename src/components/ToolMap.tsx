import { useState, type CSSProperties } from 'react'
import { toolGroups } from '../content/books'

export function ToolMap() {
  const [activeId, setActiveId] = useState(toolGroups[0].id)
  const activeGroup = toolGroups.find((group) => group.id === activeId) ?? toolGroups[0]

  return (
    <div className="tool-map">
      <div className="tool-map__header">
        <div>
          <span>AI TOOL MAP</span>
          <strong>역할로 고릅니다.</strong>
        </div>
        <p>
          <b>2026.09 기준</b>
          도구와 추천 역할은 계속 바뀔 수 있습니다.
        </p>
      </div>
      <div className="tool-map__body">
        <div className="tool-map__tabs" role="tablist" aria-label="AI 도구 역할">
          {toolGroups.map((group, index) => (
            <button
              key={group.id}
              id={`tool-tab-${group.id}`}
              type="button"
              role="tab"
              aria-selected={activeId === group.id}
              aria-controls={`tool-panel-${group.id}`}
              tabIndex={activeId === group.id ? 0 : -1}
              onClick={() => setActiveId(group.id)}
            >
              <span>0{index + 1}</span>
              {group.label}
            </button>
          ))}
        </div>
        <div
          id={`tool-panel-${activeGroup.id}`}
          role="tabpanel"
          aria-labelledby={`tool-tab-${activeGroup.id}`}
          className="tool-map__panel"
          key={activeGroup.id}
        >
          {activeGroup.tools.map((tool, index) => (
            <div className="tool-map__tool" key={tool.name} style={{ '--item-index': index } as CSSProperties}>
              <strong>{tool.name}</strong>
              <span>{tool.role}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="tool-map__footnote">
        하나의 정답 대신, <strong>지금 하려는 일에 맞는 역할</strong>을 선택합니다.
      </p>
    </div>
  )
}
