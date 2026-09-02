import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react'
import { flushSync } from 'react-dom'
import { NavigateLink } from '../components/NavigateLink'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import { books, type Book } from '../content/books'
import { toAppHref } from '../routing'

const partners = [
  {
    number: '01',
    name: 'EXECUTIVE',
    korean: '문제와 우선순위를 정합니다',
    detail: '실제 업무에서 무엇이 불편한지 고르고, 결과가 쓸모 있는지 판단합니다.',
  },
  {
    number: '02',
    name: 'AI',
    korean: '빠르게 만들고 시험합니다',
    detail: '대화에서 시작해 문서, 화면, 코드까지 빠르게 만들어볼 수 있게 합니다.',
  },
  {
    number: '03',
    name: 'ACE',
    korean: '과정을 함께 연결합니다',
    detail: '문제 정리부터 구현·검토까지 실장과 1:1로 함께합니다.',
  },
]

const libraryJourney = [
  ['01', '전체 지도를 이해하고'],
  ['02', '의도를 문서로 넘기고'],
  ['03', '무엇을 만들지 정하고'],
  ['04', '8주 동안 실제로 만들고'],
  ['05', '작게 한 번 끝까지 해봅니다'],
]

const libraryShelves = [
  { label: 'FOUNDATION', range: 'VOLUMES 01—02', books: books.slice(0, 2) },
  { label: 'DECIDE · MAKE · PRACTICE', range: 'VOLUMES 03—05', books: books.slice(2) },
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
              실장의 경험을 AI와 연결해
              <br />
              실제 업무 문제를 직접 도구로 만들어봅니다.
            </p>
          </div>
          <div className="home-hero__foot">
            <p>
              8주 동안 ACE와 함께
              <br />
              하나의 문제를 끝까지 가져갑니다.
            </p>
            <a href="#course" className="scroll-cue">
              <span>BEGIN THE FIELD GUIDE</span>
              <i aria-hidden="true">↓</i>
            </a>
          </div>
        </section>

        <section className="thesis" id="course" aria-labelledby="course-title">
          <Reveal className="thesis__opening">
            <span className="folio">01 · THE COURSE</span>
            <h2 id="course-title">
              이 과정에서
              <br />
              <em>하나를 직접 만듭니다.</em>
            </h2>
            <p>AI 기능을 많이 아는 것보다, 실제 업무 문제를 끝까지 다뤄보는 데 초점을 둡니다.</p>
          </Reveal>

          <Reveal className="home-domain-thesis">
            <p>
              문제를 고르고, 의도를 문서로 남기고, 작은 버전을 만들고, 직접 써보고, 필요한 부분을 고칩니다.
              왜 이 방식이 가능한지와 AI·IT의 전체 구조는 Book 01에서 설명합니다.
            </p>
            <strong>PROBLEM → DOCUMENT → BUILD → USE → FIX</strong>
          </Reveal>
        </section>

        <section className="partnership" aria-labelledby="partnership-title">
          <div className="partnership__intro">
            <span className="folio">02 · HOW WE WORK</span>
            <h2 id="partnership-title">
              세 역할이
              <br />
              <span>분명하게 나뉩니다.</span>
            </h2>
          </div>
          <div className="partnership__people">
            {partners.map((partner, index) => (
              <Reveal as="article" className="partner" delay={index * 90} key={partner.name}>
                <span>{partner.number}</span>
                <h3>{partner.name}</h3>
                <strong>{partner.korean}</strong>
                <p>{partner.detail}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="library-transition" aria-labelledby="library-transition-title">
          <div className="library-transition__inner">
            <span className="folio">03 · THE HDEC AI BUILD LIBRARY</span>
            <Reveal className="library-transition__statement">
              <h2 id="library-transition-title">
                다섯 권은
                <br />
                <em>서로 다른 역할을 맡습니다.</em>
              </h2>
              <p>앞에서 설명한 내용을 뒤에서 다시 가르치지 않고, 다음 단계로 이어갑니다.</p>
            </Reveal>
            <ol className="library-journey" aria-label="다섯 권의 학습 흐름">
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
              <span className="folio">THE COLLECTION · VOLUMES 01—05</span>
              <h2 id="library-title">OPEN A BOOK</h2>
            </div>
            <p>
              처음부터 읽어도 되고, 지금 필요한 권부터 꺼내도 됩니다.
              <br />
              각 권은 맡은 역할만 설명합니다.
            </p>
          </header>

          <div className="library-mobile-guide" aria-hidden="true">
            <span>05 VOLUMES</span>
            <p>한 권씩 넘겨 살펴보세요.</p>
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
          <p>EXECUTIVE × AI × ACE</p>
          <span>EXECUTIVE FIELD GUIDE · 2026</span>
        </footer>
      </main>
    </>
  )
}
