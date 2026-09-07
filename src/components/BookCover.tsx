import { useState, type ReactNode } from 'react'

type BookCoverProps = {
  number: string
  keyword: string
  count: string
  chapters: { href: string; label: string }[]
  beginHref: string
  beginLabel?: string
  children: ReactNode
  aside?: ReactNode
}

const DEFAULT_BEGIN_LABEL = 'START READING'

/** Shared book opening: index · statement · chapter list · begin link. Text comes from the page. */
export function BookCover({ number, keyword, count, chapters, beginHref, beginLabel = DEFAULT_BEGIN_LABEL, children, aside }: BookCoverProps) {
  const [chaptersOpen, setChaptersOpen] = useState(false)

  return (
    <header className="book-opening book-entry-surface">
      <div className="book-opening__index">
        <span>BOOK</span>
        <strong>{number}</strong>
        <span>{keyword}</span>
      </div>
      {children}
      {aside}
      <button
        type="button"
        className="chapter-toggle"
        aria-expanded={chaptersOpen}
        aria-controls="chapter-list"
        onClick={() => setChaptersOpen((current) => !current)}
      >
        <span>{count}</span>
        <i aria-hidden="true">{chaptersOpen ? '−' : '+'}</i>
      </button>
      <ol id="chapter-list" className={`chapter-list${chaptersOpen ? ' is-open' : ''}`}>
        {chapters.map((chapter, index) => (
          <li key={chapter.label}>
            <a href={chapter.href} onClick={() => setChaptersOpen(false)}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {chapter.label}
            </a>
          </li>
        ))}
      </ol>
      <a className="book-opening__begin" href={beginHref}>
        {beginLabel} <span aria-hidden="true">↓</span>
      </a>
    </header>
  )
}
