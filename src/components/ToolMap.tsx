import { useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react'
import { toolGroups } from '../content/books'

type ToolLink = { label: string; url: string }

const toolLinks: Record<string, ToolLink[]> = {
  ChatGPT: [{ label: 'ChatGPT', url: 'https://chatgpt.com/' }],
  Claude: [{ label: 'Claude', url: 'https://claude.ai/' }],
  Gemini: [{ label: 'Gemini', url: 'https://gemini.google.com/' }],
  NotebookLM: [{ label: 'NotebookLM', url: 'https://notebooklm.google.com/' }],
  'Claude Project': [{ label: 'Claude Project', url: 'https://claude.ai/' }],
  'ChatGPT Project': [{ label: 'ChatGPT Project', url: 'https://chatgpt.com/' }],
  'Gemini Gem': [{ label: 'Gemini Gem', url: 'https://gemini.google.com/gems/' }],
  'ChatGPT Images': [{ label: 'ChatGPT Images', url: 'https://chatgpt.com/images/' }],
  'Adobe Firefly': [{ label: 'Adobe Firefly', url: 'https://firefly.adobe.com/' }],
  Higgsfield: [{ label: 'Higgsfield', url: 'https://higgsfield.ai/' }],
  'Google Flow · Veo': [{ label: 'Google Flow · Veo', url: 'https://labs.google/fx/tools/flow' }],
  Suno: [{ label: 'Suno', url: 'https://suno.com/' }],
  ElevenLabs: [{ label: 'ElevenLabs', url: 'https://elevenlabs.io/' }],
  'Figma Make': [{ label: 'Figma Make', url: 'https://www.figma.com/make/' }],
  'Claude Artifacts': [{ label: 'Claude Artifacts', url: 'https://claude.ai/artifacts' }],
  'Gemini Canvas': [{ label: 'Gemini Canvas', url: 'https://gemini.google.com/' }],
  'Claude Code': [{ label: 'Claude Code', url: 'https://claude.com/code' }],
  'Codex CLI': [{ label: 'Codex CLI', url: 'https://github.com/openai/codex' }],
  Cursor: [{ label: 'Cursor', url: 'https://cursor.com/' }],
  'Google Antigravity': [{ label: 'Google Antigravity', url: 'https://antigravity.google/' }],
  n8n: [{ label: 'n8n', url: 'https://n8n.io/' }],
  Zapier: [{ label: 'Zapier', url: 'https://zapier.com/' }],
  Make: [{ label: 'Make', url: 'https://www.make.com/' }],
  'Power Automate': [{ label: 'Power Automate', url: 'https://make.powerautomate.com/' }],
  'ChatGPT agent': [{ label: 'ChatGPT agent', url: 'https://chatgpt.com/' }],
  'Copilot Studio': [{ label: 'Copilot Studio', url: 'https://copilotstudio.microsoft.com/' }],
  'Claude Code · Codex': [
    { label: 'Claude Code', url: 'https://claude.com/code' },
    { label: 'Codex', url: 'https://chatgpt.com/codex' },
  ],
  'n8n · Zapier · Make': [
    { label: 'n8n', url: 'https://n8n.io/' },
    { label: 'Zapier', url: 'https://zapier.com/' },
    { label: 'Make', url: 'https://www.make.com/' },
  ],
}

function renderToolName(name: string): ReactNode {
  const links = toolLinks[name]
  if (!links?.length) return <strong>{name}</strong>

  return (
    <strong>
      {links.map((link, index) => (
        <span key={link.label}>
          {index > 0 && ' · '}
          <a href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>
        </span>
      ))}
    </strong>
  )
}

export function ToolMap() {
  const [activeId, setActiveId] = useState(toolGroups[0].id)
  const activeGroup = toolGroups.find((group) => group.id === activeId) ?? toolGroups[0]

  const moveToTab = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keyMoves = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: toolGroups.length - 1,
    } as const

    if (!(event.key in keyMoves)) return

    event.preventDefault()
    const nextIndex = keyMoves[event.key as keyof typeof keyMoves]
    const wrappedIndex = (nextIndex + toolGroups.length) % toolGroups.length
    const nextId = toolGroups[wrappedIndex].id
    setActiveId(nextId)
    document.getElementById(`tool-tab-${nextId}`)?.focus()
  }

  return (
    <div className="tool-map">
      <div className="tool-map__header">
        <div>
          <span>AI CAPABILITY MAP</span>
          <strong>해야 할 일로 고릅니다.</strong>
        </div>
        <p>
          <b>UPDATED · 2026.09</b>
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
              onKeyDown={(event) => moveToTab(event, index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
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
              {renderToolName(tool.name)}
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
