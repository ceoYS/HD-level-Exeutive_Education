import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react'
import { flushSync } from 'react-dom'
import { NavigateLink } from '../components/NavigateLink'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import { books, type Book } from '../content/books'
import { toAppHref } from '../routing'

const libraryJourney = [
  ['01', 'AI와 바이브코딩을 이해하고'],
  ['02', '무엇을 만들 수 있는지 살펴보고'],
  ['03', '내가 만들 제품을 고르고'],
  ['04', '실제 제품으로 만들고'],
  ['05', '직접 적용하고 개선합니다'],
]

const libraryShelves = [
  { label: 'UNDERSTAND · EXPLORE', range: 'STEPS 01—02', books: books.slice(0, 2) },
  { label: 'CHOOSE · BUILD · PRACTICE', range: 'STEPS 03—05', books: books.slice(2) },
]

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => { finished: Promise<void> }
}

type LibraryBookProps = {
  book: Book
  index: number
  isOpening: boolean
  onOpen: (book: Book, event: MouseEvent<HTMLAnchorElement>) => void
}

function LibraryBook({ book, index, isOpening, onOpen }: LibraryBookProps) {
  return (
    <Reveal className={`shelf-volume shelf-volume--${book.slug}`} delay={index * 70}>
      <NavigateLink
        href={`/book/${book.slug}`}
        className={`library-book${isOpening ? ' is-opening' : ''}`}
        style={
          {
            '--book-accent': book.accent,
            '--book-foreground': book.foreground,
            '--book-index': index,
          } as CSSProperties
        }
        onClick={(event) => onOpen(book, event)}
        aria-label={`Book ${book.number}, ${book.keyword}: ${book.koreanTitle}${book.status === 'upcoming' ? ', preview' : ''}`}
      >
        <span className="book-object" aria-hidden="true">
          <span className="book-object__pages" />
          <span className="book-cover">
            <span className="book-cover__collection">HDEC AI BUILD · FIELD GUIDE</span>
            <span className="book-cover__number">{book.number}</span>
            <span className="book-cover__graphic">
              {Array.from({ length: 8 }, (_, graphicIndex) => <i key={graphicIndex} />)}
            </span>
            <span className="book-cover__title">
              <b>{book.keyword}</b>
              <em>{book.koreanTitle}</em>
            </span>
            <span className="book-cover__line">{book.libraryLine}</span>
            <span className="book-cover__edition">{book.note}</span>
          </span>
          <span className="book-object__spine">{book.keyword}</span>
        </span>
        <span className="library-book__action" aria-hidden="true">
          <span>OPEN BOOK</span><i>↗</i>
        </span>
      </NavigateLink>
    </Reveal>
  )
}

export function HomePage() {
  const [openingBook, setOpeningBook] = useState<string | null>(null)
  const openingBookRef = useRef<string | null>(null)
  const navigationTimerRef = useRef<number | null>(null)

  useEffect(() => () => {
    if (navigationTimerRef.current !== null) window.clearTimeout(navigationTimerRef.current)
  }, [])

  const openBook = (book: Book, event: MouseEvent<HTMLAnchorElement>) => {
    const isModifiedClick =
      event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isModifiedClick || prefersReducedMotion) return

    event.preventDefault()
    if (openingBookRef.current) return

    openingBookRef.current = book.slug
    setOpeningBook(book.slug)

    navigationTimerRef.current = window.setTimeout(() => {
      const navigate = () => {
        window.history.pushState({}, '', toAppHref(`/book/${book.slug}`))
        window.dispatchEvent(new PopStateEvent('popstate'))
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
      const transitionDocument = document as ViewTransitionDocument

      if (transitionDocument.startViewTransition) {
        transitionDocument.startViewTransition(() => flushSync(navigate))
      } else {
        navigate()
      }
    }, 260)
  }

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero__grid" aria-hidden="true" />
          <div className="home-hero__edition">
            <span>EXECUTIVE FIELD GUIDE</span>
            <span>DESIGN BASELINE · 2026</span>
          </div>
          <div className="home-hero__content">
            <p className="eyebrow eyebrow--signal">HDEC AI BUILD</p>
            <h1 id="home-title">
              <span>Experience</span>
              <i aria-hidden="true">×</i>
              <span>AI</span>
              <i aria-hidden="true">→</i>
              <strong>Build</strong>
            </h1>
            <p className="home-hero__kicker">
              임원진의 경험에서 발견한 업무 Pain Point를
              <br />
              AI로 제품화하여 해결합니다.
            </p>
          </div>
          <div className="home-hero__foot">
            <p>
              8주 동안 ACE와 함께
              <br />
              실제 업무 문제 하나를 제품으로 만들어봅니다.
            </p>
            <a href="#library-transition" className="scroll-cue">
              <span>BEGIN THE FIELD GUIDE</span>
              <i aria-hidden="true">↓</i>
            </a>
          </div>
        </section>

        <section className="library-transition" id="library-transition" aria-labelledby="library-transition-title">
          <div className="library-transition__inner">
            <span className="folio">THE HDEC AI BUILD JOURNEY</span>
            <Reveal className="library-transition__statement">
              <h2 id="library-transition-title">
                다섯 단계로
                <br />
                <em>AI Builder가 되실 수 있습니다.</em>
              </h2>
            </Reveal>
            <ol className="library-journey" aria-label="다섯 단계의 AI Builder 학습 흐름">
              {libraryJourney.map(([number, label], index) => (
                <Reveal as="li" delay={index * 60} key={number}>
                  <span>{number}</span>
                  <strong>{label}</strong>
                  {index < libraryJourney.length - 1 && <i aria-hidden="true">→</i>}
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section
          className={`library${openingBook ? ' is-opening-book' : ''}`}
          id="library"
          aria-labelledby="library-title"
        >
          <header className="library__header">
            <div>
              <span className="folio">THE COLLECTION · STEPS 01—05</span>
              <h2 id="library-title">OPEN A BOOK</h2>
            </div>
            <p>
              01부터 순서대로 따라가면 됩니다.
              <br />
              각 단계는 다음 단계의 선택과 실습으로 이어집니다.
            </p>
          </header>

          <div className="library-mobile-guide" aria-hidden="true">
            <span>05 STEPS</span>
            <p>한 단계씩 넘겨 살펴보세요.</p>
            <span>SWIPE →</span>
          </div>

          <div className="library-stage">
            <div className="library-stage__shelves">
              {libraryShelves.map((shelf, shelfIndex) => (
                <div className={`library-shelf library-shelf--${shelfIndex + 1}`} key={shelf.label}>
                  <div className="library-shelf__label">
                    <span>{shelf.label}</span>
                    <span>{shelf.range}</span>
                  </div>
                  <div className="library-shelf__books">
                    {shelf.books.map((book) => {
                      const index = books.indexOf(book)
                      return (
                        <LibraryBook
                          book={book}
                          index={index}
                          isOpening={openingBook === book.slug}
                          onOpen={openBook}
                          key={book.number}
                        />
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="home-footer">
          <span>HDEC AI BUILD</span>
          <p>EXECUTIVE EXPERIENCE × AI BUILD</p>
          <span>EXECUTIVE FIELD GUIDE · 2026</span>
        </footer>
      </main>
    </>
  )
}
