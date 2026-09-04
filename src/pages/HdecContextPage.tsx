import type { CSSProperties } from 'react'
import { BookCover } from '../components/BookCover'
import { ContextZoom } from '../components/hdec-context/ContextZoom'
import { DataVsContext } from '../components/hdec-context/DataVsContext'
import { NowTarget } from '../components/hdec-context/NowTarget'
import { RelationshipZoom } from '../components/hdec-context/RelationshipZoom'
import { NavigateLink } from '../components/NavigateLink'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import { VideoSlot } from '../components/VideoSlot'
import { WorkChain } from '../components/WorkChain'
import { contextBridge, contextCover } from '../content/hdec-context'
import { videos } from '../content/videos'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

const chapters = contextCover.chapters.map((label, index) => ({ href: `#visual-${String.fromCharCode(97 + index)}`, label }))

// 03 HDEC CONTEXT · DATA ≠ CONTEXT → Project/Company progressive zoom → NOW/TARGET → personal Agent → work bridge.
export function HdecContextPage() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()

  return (
    <div className="book-page hdec-context-page" style={{ '--book-accent': 'var(--color-orange)' } as CSSProperties}>
      <SiteHeader
        bookMode
        progress={progress}
        currentChapter={currentChapter}
        bookNumber="03"
        bookKeyword="HDEC CONTEXT"
        total={4}
        unit="VISUAL"
      />
      <main id="main-content">
        <article>
          <BookCover number="03" keyword="HDEC CONTEXT" count="4 VISUALS" chapters={chapters} beginHref="#visual-a">
            <div className="book-opening__statement context-opening">
              <p>PART 2 · 우리 회사</p>
              <span>{contextCover.badge}</span>
              <h1>{contextCover.title}</h1>
              <ol>
                {contextCover.chapters.map((chapter, index) => (
                  <li key={chapter}><b>{String.fromCharCode(65 + index)}</b>{chapter}</li>
                ))}
              </ol>
            </div>
          </BookCover>

          <VideoSlot video={videos['03']} />

          <section className="chapter context-chapter context-chapter--data" id="visual-a">
            <div className="chapter__inner"><DataVsContext /></div>
          </section>

          <section className="chapter context-chapter context-chapter--relationship" id="visual-b">
            <div className="chapter__inner"><RelationshipZoom /></div>
          </section>

          <section className="chapter context-chapter context-chapter--target" id="visual-c">
            <div className="chapter__inner"><NowTarget /></div>
          </section>

          <section className="chapter context-chapter context-chapter--zoom" id="visual-d">
            <div className="chapter__inner"><ContextZoom /></div>
          </section>

          <section className="context-bridge" id="context-bridge">
            <div className="context-bridge__inner">
              <Reveal className="context-bridge__head">
                <p>{contextBridge.eyebrow}</p>
                <h2>{contextBridge.title}</h2>
              </Reveal>
              <div className="context-bridge__diagram">
                <Reveal className="context-bridge__company">
                  <span>{contextBridge.company}</span>
                  {contextBridge.inputs.map((item, index) => (
                    <strong key={item}>{item}{index < contextBridge.inputs.length - 1 && <i aria-hidden="true">+</i>}</strong>
                  ))}
                </Reveal>
                <Reveal className="context-bridge__arrow" delay={250}>
                  <span>{contextBridge.zoom}</span><i aria-hidden="true">→</i>
                </Reveal>
                <Reveal className="context-bridge__work" delay={400}>
                  <span>{contextBridge.work}</span>
                  <WorkChain />
                </Reveal>
              </div>
              <NavigateLink href="/book/cases" className="next-book">
                <span>NEXT BOOK · 04</span>
                <div>
                  <strong>WHAT CAN WE BUILD?</strong>
                  <p>{contextBridge.nextLead}</p>
                </div>
                <i aria-hidden="true">→</i>
              </NavigateLink>
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}
