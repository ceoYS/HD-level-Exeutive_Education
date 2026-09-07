import { AiCoreVisual } from '../components/AiCoreVisual'
import { AiReadyData } from '../components/ai-foundation/AiReadyData'
import { DataRoles } from '../components/ai-foundation/DataRoles'
import { ModelVsCompanyKnowledge } from '../components/ai-foundation/ModelVsCompanyKnowledge'
import { TrainingVsUse } from '../components/ai-foundation/TrainingVsUse'
import { BookCover } from '../components/BookCover'
import { CapabilityCheck } from '../components/CapabilityCheck'
import { ContextPack, GoodInstruction } from '../components/DevelopmentLoop'
import { NavigateLink } from '../components/NavigateLink'
import { ChapterAiLayers, ChapterToolMap } from '../components/Part1Blocks'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import { bookChapters } from '../content/books'
import { CERT_LABEL, book01Certs } from '../content/part1-lock'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

// 01 AI · PART 1 개념. AI CORE VISUAL(신규) → AI/DATA FOUNDATION 4 Visual(신규) → 원문 Ch2 → 원문 Ch3.
export function AiPage() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()

  return (
    <div className="book-page">
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} bookNumber="01" bookKeyword="AI" total={2} />
      <main id="main-content">
        <article>
          <BookCover
            number="01"
            keyword="AI"
            count="2 CHAPTERS"
            chapters={[
              { href: '#chapter-1', label: bookChapters[1] },
              { href: '#chapter-2', label: bookChapters[2] },
            ]}
            beginHref="#ai-core"
          >
            <div className="book-opening__statement">
              <p>PART 1 · 개념</p>
              <h1>AI</h1>
              <p className="book-opening__sub">AI가 무엇이고 어떻게 일하는지, 분야별 핵심 AI 지도를 봅니다.</p>
            </div>
          </BookCover>

          <AiCoreVisual />

          <TrainingVsUse />
          <DataRoles />
          <AiReadyData />
          <ModelVsCompanyKnowledge />

          <ChapterAiLayers number="01">
            <GoodInstruction />
            <ContextPack />
          </ChapterAiLayers>
          <ChapterToolMap number="02" />

          <footer className="book-ending book-ending--short">
            <Reveal className="cert-group">
              <p className="cert-group__label">{CERT_LABEL}</p>
              <CapabilityCheck id={book01Certs[0].id} evidence={false} statement={book01Certs[0].statement} />
            </Reveal>
            <NavigateLink href="/book/vibe-coding" className="next-book">
              <span>NEXT BOOK · 02</span>
              <div>
                <strong>VIBE CODING</strong>
                <p>AI를 알았으니, 만드는 방식이 어떻게 달라졌는지 봅니다.</p>
              </div>
              <i aria-hidden="true">→</i>
            </NavigateLink>
          </footer>
        </article>
      </main>
    </div>
  )
}
