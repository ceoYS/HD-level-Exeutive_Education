import type { ReactNode } from 'react'

type SourceNoteProps = {
  updated?: string
  summary?: string
  children: ReactNode
}

/**
 * 시간에 민감한 도구/버전 주장에 붙이는 접이식 출처 노트.
 * 본문 리듬을 해치지 않도록 기본은 접혀 있다.
 */
export function SourceNote({ updated = '2026.09', summary = 'SOURCE NOTES', children }: SourceNoteProps) {
  return (
    <details className="source-note">
      <summary>
        <span className="source-note__badge">UPDATED · {updated}</span>
        <span className="source-note__label">{summary}</span>
        <span className="source-note__chev" aria-hidden="true" />
      </summary>
      <div className="source-note__body">{children}</div>
    </details>
  )
}
