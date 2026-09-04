import { useState, type CSSProperties } from 'react'
import { ApiUseCaseDetails } from '../components/ApiUseCaseDetails'
import { ExecutiveTakeaway, WatchOut } from '../components/Callout'
import { NavigateLink } from '../components/NavigateLink'
import { Reveal } from '../components/Reveal'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader } from '../components/SiteHeader'
import { exploreTypes } from '../content/explore-types'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

const chapterTitles = exploreTypes.map((type) => `${type.korean} · ${type.name}`)

export function Book02Page() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()
  const [chaptersOpen, setChaptersOpen] = useState(false)

  return (
    <div className="book-page" style={{ '--book-accent': 'var(--color-orange)' } as CSSProperties}>
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} bookNumber="02" bookKeyword="EXPLORE" total={4} unit="TYPE" />
      <main id="main-content">
        <article>
          <header className="book-opening book-entry-surface">
            <div className="book-opening__index">
              <span>BOOK</span>
              <strong>02</strong>
              <span>EXPLORE</span>
            </div>
            <div className="book-opening__statement">
              <p>AI BUILD · WHAT CAN WE BUILD?</p>
              <h1>
                AI로
                <br />
                무엇을 만들 수 있는가.
              </h1>
              <p className="book-opening__sub">
                먼저 제품 유형과 실제 예시를 보고
                <br />
                <em>어떻게 만들어지는지</em> 펼쳐봅니다.
              </p>
            </div>
            <button
              type="button"
              className="chapter-toggle"
              aria-expanded={chaptersOpen}
              aria-controls="chapter-list"
              onClick={() => setChaptersOpen((current) => !current)}
            >
              <span>4 PRODUCT TYPES</span>
              <i aria-hidden="true">{chaptersOpen ? '−' : '+'}</i>
            </button>
            <ol id="chapter-list" className={`chapter-list${chaptersOpen ? ' is-open' : ''}`}>
              {chapterTitles.map((chapter, index) => (
                <li key={chapter}>
                  <a href={`#chapter-${index + 1}`} onClick={() => setChaptersOpen(false)}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {chapter}
                  </a>
                </li>
              ))}
            </ol>
            <a className="book-opening__begin" href="#intro">
              EXPLORE THE TYPES <span aria-hidden="true">↓</span>
            </a>
          </header>

          <section className="chapter chapter--light" id="intro">
            <div className="chapter__inner">
              <SectionIntro number="00" title="먼저 가능성을 봅니다" english="SEE THE MENU FIRST">
                <p>
                  바로 "무엇을 만들까요?"라고 묻기보다, <strong>AI로 만들 수 있는 제품 유형과 예시</strong>를
                  먼저 본 뒤 내 업무에 맞는 것을 고르는 편이 훨씬 쉽습니다.
                </p>
              </SectionIntro>
              <div
                className="mini-flow"
                aria-label="Explore then choose"
                style={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr)',
                  gap: 'clamp(0.7rem, 1.5vw, 1.4rem)',
                }}
              >
                <span className="is-strong" style={{ padding: '1.2rem 1.4rem' }}>EXPLORE<small>유형과 예시를 본다</small></span>
                <i aria-hidden="true">→</i>
                <span style={{ padding: '1.2rem 1.4rem' }}>UNDERSTAND<small>만드는 과정을 본다</small></span>
                <i aria-hidden="true">→</i>
                <span style={{ padding: '1.2rem 1.4rem' }}>CHOOSE<small>내 제품을 고른다</small></span>
              </div>
            </div>
          </section>

          {exploreTypes.map((type, index) => (
            <section
              className={`chapter ${index % 2 === 0 ? 'chapter--bright' : 'chapter--spruce'}`}
              id={`chapter-${index + 1}`}
              key={type.key}
            >
              <div className="chapter__inner">
                <SectionIntro
                  number={String(index + 1).padStart(2, '0')}
                  title={type.korean}
                  english={type.name}
                  inverse={index % 2 === 1}
                >
                  <p>{type.summary}</p>
                </SectionIntro>

                <div className="explore-type-grid">
                  <Reveal as="article" className="explore-panel">
                    <span>WHEN IT FITS</span>
                    <h3>이럴 때 잘 맞습니다</h3>
                    <ul>
                      {type.whenBest.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </Reveal>
                  <Reveal as="article" className="explore-panel explore-panel--examples">
                    <span>EXAMPLES · 건설업 예시</span>
                    <h3>이런 제품을 생각할 수 있습니다</h3>
                    <ul>
                      {type.examples.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </Reveal>
                </div>

                {type.key === 'web-app' && (
                  <Reveal as="article" className="explore-panel explore-panel--examples">
                    <span>API CONNECTION · HDEC USE CASE</span>
                    <h3>외부 API와 실제 업무데이터를 연결한 활용 사례</h3>
                    <p style={{ marginTop: '0.55rem', maxWidth: '54rem', fontSize: '0.96rem', lineHeight: 1.65, opacity: 0.78 }}>
                      공개 데이터와 사내 데이터를 연결해 조회 · 비교 · 검토형 업무 도구로 확장할 수 있습니다.
                    </p>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '0.85rem',
                        marginTop: '1.15rem',
                      }}
                    >
                      <article
                        style={{
                          display: 'grid',
                          gap: '0.85rem',
                          padding: '1.1rem',
                          border: '1px solid rgba(17, 46, 40, 0.18)',
                          borderRadius: '0.95rem',
                          background: 'rgba(255, 255, 255, 0.78)',
                          color: '#17362f',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                          <small style={{ fontWeight: 900, letterSpacing: '0.08em', color: 'var(--color-orange)' }}>CASE 01</small>
                          <small style={{ fontWeight: 800, opacity: 0.58 }}>업체 조회 · 비교</small>
                        </div>
                        <strong style={{ fontSize: '1.05rem', lineHeight: 1.45 }}>
                          KISCON 건설업체 조회 · 협력업체 교차 분석기
                        </strong>
                        <div style={{ display: 'grid', gap: '0.35rem' }}>
                          <small style={{ fontWeight: 900, color: '#215d4c' }}>목적</small>
                          <span style={{ lineHeight: 1.55 }}>공공 건설업체 데이터와 사내 협력업체 목록 비교</span>
                        </div>
                        <div style={{ display: 'grid', gap: '0.4rem' }}>
                          <small style={{ fontWeight: 900, color: '#215d4c' }}>핵심 흐름</small>
                          <b
                            style={{
                              padding: '0.7rem 0.8rem',
                              borderRadius: '0.7rem',
                              background: 'rgba(17, 46, 40, 0.07)',
                              fontSize: '0.86rem',
                              lineHeight: 1.55,
                            }}
                          >
                            KISCON API 연결 → 업체정보 조회 → 사내 CSV 업로드 → 교차분석
                          </b>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {['등록업체 확인', '비등록 후보 확인', '검토 필요 업체 정리'].map((item) => (
                            <small
                              key={item}
                              style={{
                                padding: '0.35rem 0.55rem',
                                border: '1px solid rgba(17, 46, 40, 0.14)',
                                borderRadius: '999px',
                                fontWeight: 800,
                              }}
                            >
                              {item}
                            </small>
                          ))}
                        </div>
                      </article>

                      <article
                        style={{
                          display: 'grid',
                          gap: '0.85rem',
                          padding: '1.1rem',
                          border: '1px solid rgba(17, 46, 40, 0.18)',
                          borderRadius: '0.95rem',
                          background: 'rgba(255, 255, 255, 0.78)',
                          color: '#17362f',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                          <small style={{ fontWeight: 900, letterSpacing: '0.08em', color: 'var(--color-orange)' }}>CASE 02</small>
                          <small style={{ fontWeight: 800, opacity: 0.58 }}>계약 검토 · 법령 확인</small>
                        </div>
                        <strong style={{ fontSize: '1.05rem', lineHeight: 1.45 }}>
                          개발사업 계약서 법률 리스크 분석 시스템
                        </strong>
                        <div style={{ display: 'grid', gap: '0.35rem' }}>
                          <small style={{ fontWeight: 900, color: '#215d4c' }}>목적</small>
                          <span style={{ lineHeight: 1.55 }}>계약 리스크와 관련 법령 · 최신 법령 후보를 함께 확인</span>
                        </div>
                        <div style={{ display: 'grid', gap: '0.4rem' }}>
                          <small style={{ fontWeight: 900, color: '#215d4c' }}>핵심 흐름</small>
                          <b
                            style={{
                              padding: '0.7rem 0.8rem',
                              borderRadius: '0.7rem',
                              background: 'rgba(17, 46, 40, 0.07)',
                              fontSize: '0.86rem',
                              lineHeight: 1.55,
                            }}
                          >
                            계약서 분석 → 법령 검색 API 연결 → 최신 법령 확인 → 검토 근거 보강
                          </b>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {['법률 리스크 정리', '관련 법령 확인', '검토 근거 확보'].map((item) => (
                            <small
                              key={item}
                              style={{
                                padding: '0.35rem 0.55rem',
                                border: '1px solid rgba(17, 46, 40, 0.14)',
                                borderRadius: '999px',
                                fontWeight: 800,
                              }}
                            >
                              {item}
                            </small>
                          ))}
                        </div>
                      </article>
                    </div>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto minmax(0, 1fr)',
                        gap: '0.75rem 1rem',
                        alignItems: 'center',
                        marginTop: '0.85rem',
                        padding: '0.85rem 1rem',
                        border: '1px solid rgba(17, 46, 40, 0.18)',
                        borderRadius: '0.85rem',
                        background: 'rgba(17, 46, 40, 0.06)',
                      }}
                    >
                      <strong style={{ fontSize: '0.83rem', letterSpacing: '0.06em', color: 'var(--color-orange)' }}>API KEY</strong>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem 1rem', fontSize: '0.88rem', fontWeight: 800 }}>
                        <span>외부 공유 금지</span>
                        <span>공개 화면 노출 금지</span>
                        <span>배포 파일 포함 금지</span>
                      </div>
                    </div>

                    <ApiUseCaseDetails />
                  </Reveal>
                )}

                <Reveal>
                  <details className="explore-build-detail">
                    <summary>
                      <span>HOW IT GETS BUILT</span>
                      <strong>이 유형은 실제로 어떻게 만드나</strong>
                      <i aria-hidden="true">+</i>
                    </summary>
                    <div className="explore-build-detail__body">
                      <ol className="explore-build-steps">
                        {type.buildSteps.map((step, stepIndex) => (
                          <li key={step}>
                            <span>{String(stepIndex + 1).padStart(2, '0')}</span>
                            <p>{step}</p>
                          </li>
                        ))}
                      </ol>
                      <div className="explore-concepts">
                        <span>이 과정에서 쓰는 개념</span>
                        <div>
                          {type.concepts.map((concept) => <strong key={concept}>{concept}</strong>)}
                        </div>
                      </div>
                    </div>
                  </details>
                </Reveal>

                <WatchOut>{type.caution}</WatchOut>
              </div>
            </section>
          ))}

          <footer className="book-ending">
            <div className="book-ending__opening">
              <p>네 가지 유형을 살펴봤다면</p>
              <h2>이제 내 Pain Point에 어떤 제품이 맞는지 고릅니다.</h2>
            </div>
            <ExecutiveTakeaway>
              정답을 미리 맞힐 필요는 없습니다. <strong>유형과 만드는 과정을 본 뒤 첫 후보를 고르고, 작은 실험으로 확인</strong>하면 됩니다.
            </ExecutiveTakeaway>
            <NavigateLink href="/book/choose" className="next-book">
              <span>NEXT BOOK · 03</span>
              <div>
                <strong>CHOOSE</strong>
                <p>무엇을 만들 것인가</p>
              </div>
              <i aria-hidden="true">→</i>
            </NavigateLink>
          </footer>
        </article>
      </main>
    </div>
  )
}
