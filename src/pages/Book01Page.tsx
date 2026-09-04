import { BookCover } from '../components/BookCover'
import { CapabilityCheck } from '../components/CapabilityCheck'
import { ContextPack, GoodInstruction } from '../components/DevelopmentLoop'
import { NavigateLink } from '../components/NavigateLink'
import {
  ChapterAiLayers,
  ChapterConnect,
  ChapterHarness,
  ChapterLeverage,
  ChapterMap,
  ChapterReference,
  ChapterSystem,
  ChapterToolMap,
  EndingOpening,
  MasterMapStatement,
  PrdPrinciple,
} from '../components/Part1Blocks'
import { CERT_INTRO, CERT_LABEL, book01Certs } from '../content/part1-lock'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import { bookChapters } from '../content/books'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

export function Book01Page() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()

  return (
    <div className="book-page">
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} bookNumber="01" bookKeyword="UNDERSTAND" total={8} />
      <main id="main-content">
        <article>
          <BookCover
            number="01"
            keyword="UNDERSTAND"
            count="8 CHAPTERS"
            chapters={bookChapters.map((label, index) => ({ href: `#chapter-${index + 1}`, label }))}
            beginHref="#chapter-1"
          >
            <MasterMapStatement />
          </BookCover>

          <ChapterLeverage number="01" />
          <ChapterAiLayers number="02" />
          <ChapterToolMap number="03" />
          <ChapterSystem number="04" />
          <ChapterConnect number="05" />
          <ChapterReference number="06" />
          <ChapterHarness number="07" loopExtras={<><GoodInstruction /><ContextPack /></>}>
            <PrdPrinciple />
          </ChapterHarness>
          <ChapterMap number="08" />

          <footer className="book-ending">
            <EndingOpening />
            <Reveal className="cert-group">
              <p className="cert-group__intro">{CERT_INTRO}</p>
              <p className="cert-group__label">{CERT_LABEL}</p>
              {book01Certs.map((cert) => (
                <CapabilityCheck key={cert.id} id={cert.id} evidence={false} statement={cert.statement} />
              ))}
            </Reveal>
            <NavigateLink href="/book/instruct" className="next-book">
              <span>NEXT BOOK · 02</span>
              <div><strong>INSTRUCT</strong><p>AI에게 일을 시키는 방법</p></div>
              <i aria-hidden="true">→</i>
            </NavigateLink>
          </footer>
        </article>
      </main>
    </div>
  )
}
