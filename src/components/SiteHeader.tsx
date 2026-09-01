import { BrandMark } from './BrandMark'
import { NavigateLink } from './NavigateLink'

type SiteHeaderProps = {
  bookMode?: boolean
  progress?: number
  currentChapter?: number
}

export function SiteHeader({ bookMode = false, progress = 0, currentChapter = 1 }: SiteHeaderProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 건너뛰기
      </a>
      <header className={`site-header${bookMode ? ' site-header--book' : ''}`}>
        <NavigateLink href="/" className="site-header__brand">
          <BrandMark />
        </NavigateLink>
        {bookMode ? (
          <div className="book-header__meta" aria-label="현재 읽는 책">
            <span>BOOK 01</span>
            <strong>UNDERSTAND</strong>
            <em>CH {String(currentChapter).padStart(2, '0')} / 08 · {Math.round(progress * 100)}%</em>
          </div>
        ) : (
          <nav aria-label="주요 탐색">
            <a href="#library" className="nav-link">
              THE FIVE BOOKS
            </a>
          </nav>
        )}
        {bookMode && (
          <NavigateLink href="/#library" className="nav-link nav-link--back">
            <span aria-hidden="true">←</span> LIBRARY
          </NavigateLink>
        )}
      </header>
      {bookMode && (
        <div className="reading-progress" aria-hidden="true">
          <i style={{ transform: `scaleX(${progress})` }} />
        </div>
      )}
    </>
  )
}
