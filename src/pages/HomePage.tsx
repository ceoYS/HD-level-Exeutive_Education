import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react'
import { flushSync } from 'react-dom'
import { NavigateLink } from '../components/NavigateLink'
import { ImplementationShiftDiagram } from '../components/ImplementationShiftDiagram'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import { books, type Book } from '../content/books'
import { toAppHref } from '../routing'

const experienceFlow = [
  ['20–30 YEARS', '산업과 업무를 겪으며 쌓은 판단'],
  ['FIELD REALITY', '프로젝트마다 반복되는 마찰을 보는 눈'],
  ['EXECUTIVE', '현장 현실과 경영 전략을 함께 이해하는 위치'],
  ['AI BUILD', '문제를 빠르게 Prototype으로 옮기는 구현 레버리지'],
  ['WORKING TOOL', '직접 써보고 정밀하게 고쳐 만든 업무 도구'],
]

const partners = [
  {
    number: '01',
    name: 'EXECUTIVE',
    korean: '문제와 업무를 가장 잘 아는 사람',
    detail: '현장 현실과 경영 전략 사이의 차이를 보고, 무엇이 중요한지 판단합니다.',
  },
  {
    number: '02',
    name: 'AI',
    korean: '구현 속도를 높이는 도구',
    detail: '대화와 실험을 통해 Pain Point를 MVP로 옮기는 거리를 줄입니다.',
  },
  {
    number: '03',
    name: 'ACE',
    korean: '둘 사이를 연결하는 제작 파트너',
    detail: 'ACE는 실장과 1:1로 함께하며 AI 활용과 구현을 돕는 내부 코치입니다.',
  },
]

const libraryJourney = [
  ['01', '이해하고'],
  ['02', '일을 시키고'],
  ['03', '선택하고'],
  ['04', '함께 만들고'],
  ['05', '직접 해봅니다'],
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
              실제로 작동하는 업무 도구로 만듭니다.
            </p>
          </div>
          <div className="home-hero__foot">
            <p>
              8주 동안 ACE와 함께
              <br />
              하나의 실제 업무 문제를 AI Solution으로 전환합니다.
            </p>
            <a href="#thesis" className="scroll-cue">
              <span>BEGIN THE FIELD GUIDE</span>
              <i aria-hidden="true">↓</i>
            </a>
          </div>
        </section>

        <section className="thesis" id="thesis" aria-labelledby="thesis-title">
          <Reveal className="thesis__opening">
            <span className="folio">01 · THE PREMISE</span>
            <h2 id="thesis-title">
              AI가 줄인 것은
              <br />
              <em>구현의 장벽입니다.</em>
            </h2>
            <p>문제를 보는 눈까지 만들어준 것은 아닙니다.</p>
          </Reveal>

          <Reveal>
            <ImplementationShiftDiagram />
          </Reveal>

          <Reveal className="home-domain-thesis">
            <p>
              진짜 Pain Point는 산업 경험, 운영에 대한 이해, 프로젝트를 가로질러 반복되는 마찰을
              알아보는 눈에서 나옵니다. HDEC 실장은 현장 현실과 경영 전략을 함께 보는 자리에 있습니다.
            </p>
            <strong>DEEP DOMAIN INSIGHT × AI IMPLEMENTATION CAPABILITY</strong>
          </Reveal>

          <div className="experience-ledger">
            {experienceFlow.map(([english, korean], index) => (
              <Reveal className="experience-ledger__row" delay={index * 70} key={english}>
                <span className="experience-ledger__index">{String(index + 1).padStart(2, '0')}</span>
                <strong>{english}</strong>
                <p>{korean}</p>
                <i aria-hidden="true">{index < experienceFlow.length - 1 ? '↓' : '●'}</i>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="partnership" aria-labelledby="partnership-title">
          <div className="partnership__intro">
            <span className="folio">02 · HOW WE BUILD</span>
            <h2 id="partnership-title">
              문제에서 작동하는 도구까지
              <br />
              <span>조직의 거리를 줄입니다.</span>
            </h2>
          </div>
          <div className="partnership__formula" aria-label="Executive 곱하기 AI 곱하기 ACE">
            <span>DEEP INSIGHT</span><i>×</i><span>AI BUILD</span><i>×</i><span>ACE</span>
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
                이제 다섯 권의
                <br />
                <em>가이드를 따라갑니다.</em>
              </h2>
              <p>
                하나의 업무 문제를 발견하는 데서 시작해
                <br />
                실제로 작동하는 결과물까지 나아갑니다.
              </p>
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
              순서대로 읽거나, 지금 필요한 권부터 꺼내보세요.
              <br />
              다섯 권은 하나의 실제 결과물로 이어집니다.
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
          <p>DEEP DOMAIN INSIGHT × AI IMPLEMENTATION CAPABILITY × ACE SUPPORT</p>
          <span>FOUNDER CONTEXT V2 · 2026</span>
        </footer>
      </main>
    </>
  )
}
