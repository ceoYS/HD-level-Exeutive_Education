import type { CSSProperties } from 'react'
import { BookCover } from '../components/BookCover'
import { CaseLiteConnected } from '../components/CaseLiteConnected'
import { NavigateLink } from '../components/NavigateLink'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import { ContractUseCaseCard, KisconUseCaseCard } from '../components/UseCaseCards'
import { cases, liteDefinition, liteReferenceExamples } from '../content/cases'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

// 04 WHAT CAN WE BUILD? · PART 3 적용. 정의(LITE vs CONNECTED) → CASE 1 → CASE 2 → LITE REFERENCE → NEXT 05.
export function CasesPage() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()

  return (
    <div className="book-page" style={{ '--book-accent': 'var(--color-orange)' } as CSSProperties}>
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} bookNumber="04" bookKeyword="WHAT CAN WE BUILD?" />
      <main id="main-content">
        <article>
          <BookCover
            number="04"
            keyword="WHAT CAN WE BUILD?"
            count="2 CASES"
            chapters={cases.map((item) => ({ href: `#case-${item.number}`, label: `CASE ${item.number} · ${item.title}` }))}
            beginHref="#lite-connected"
          >
            <div className="book-opening__statement">
              <p>AI BUILD · WHAT CAN WE BUILD?</p>
              <h1>
                AI로
                <br />
                무엇을 만들 수 있는가.
              </h1>
              <p className="book-opening__sub">대표 사례 2개를 LITE와 CONNECTED로 비교합니다.</p>
            </div>
          </BookCover>

          <section className="chapter chapter--light" id="lite-connected">
            <div className="chapter__inner">
              <Reveal className="lite-definition">
                <h2>{liteDefinition.headline}</h2>
                <div className="lite-definition__pair">
                  <Reveal className="lite-definition__cell lite-definition__cell--lite" delay={150}>
                    <span>{liteDefinition.lite.label}</span>
                    <strong>{liteDefinition.lite.chain}</strong>
                  </Reveal>
                  <Reveal className="lite-definition__cell lite-definition__cell--connected" delay={300}>
                    <span>{liteDefinition.connected.label}</span>
                    <strong>{liteDefinition.connected.chain}</strong>
                  </Reveal>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="chapter chapter--bright">
            <div className="chapter__inner">
              <CaseLiteConnected data={cases[0]} />
            </div>
          </section>

          <section className="chapter chapter--light">
            <div className="chapter__inner">
              <CaseLiteConnected data={cases[1]}>
                <details className="actual-build">
                  <summary>
                    <span>ACTUAL LITE BUILD · 개발사업부 6월 USE CASE</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <div className="actual-build__body">
                    <ContractUseCaseCard />
                  </div>
                </details>
              </CaseLiteConnected>
            </div>
          </section>

          <section className="chapter chapter--spruce" id="lite-reference">
            <div className="chapter__inner">
              <Reveal className="lite-reference__head">
                <p className="step-eyebrow">LITE REFERENCE · 지금 바로 만들 수 있는 형태</p>
                <h2>이미 만들어진 부서 특화 Use Case</h2>
              </Reveal>
              <ul className="lite-reference__list" aria-label="부서 특화 Use Case 예시">
                {liteReferenceExamples.map((item, index) => (
                  <Reveal as="li" delay={index * 60} key={item}>{item}</Reveal>
                ))}
              </ul>
              <Reveal className="lite-reference__api">
                <p className="lite-reference__api-eyebrow">API CONNECTION · HDEC USE CASE</p>
                <h3>외부 API와 실제 업무데이터를 연결한 활용 사례</h3>
                <p>공개 데이터와 사내 데이터를 연결해 조회 · 비교 · 검토형 업무 도구로 확장할 수 있습니다.</p>
                <details className="actual-build actual-build--light">
                  <summary>
                    <span>KISCON 건설업체 조회 · 협력업체 교차 분석기</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <div className="actual-build__body">
                    <KisconUseCaseCard />
                  </div>
                </details>
              </Reveal>
              <p className="lite-reference__more">그 밖에 · 법률 / 세무 Q&A Agent, 부서 특화 HTML Use Case</p>
            </div>
          </section>

          <footer className="book-ending book-ending--short">
            <NavigateLink href="/book/build" className="next-book">
              <span>NEXT BOOK · 05</span>
              <div>
                <strong>EXECUTIVE × ACE BUILD</strong>
                <p>이제 내 조직에서 AI에게 맡길 역할을 정합니다.</p>
              </div>
              <i aria-hidden="true">→</i>
            </NavigateLink>
          </footer>
        </article>
      </main>
    </div>
  )
}
