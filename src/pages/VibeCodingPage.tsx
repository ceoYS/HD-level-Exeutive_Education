import { BookCover } from '../components/BookCover'
import { CapabilityCheck } from '../components/CapabilityCheck'
import { ConnectMap } from '../components/ConnectMap'
import { NavigateLink } from '../components/NavigateLink'
import {
  ChapterConnect,
  ChapterHarness,
  ChapterLeverage,
  ChapterMap,
  ChapterSystem,
  EndingOpening,
  MasterMapStatement,
} from '../components/Part1Blocks'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import { VideoSlot } from '../components/VideoSlot'
import { bookChapters } from '../content/books'
import { CERT_INTRO, CERT_LABEL, book01Certs } from '../content/part1-lock'
import { videos } from '../content/videos'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

// 02 VIBE CODING · PART 1 개념. 원문 Ch1 → Ch4 → Ch5(지도) → Ch7 → Ch8. 심화 카드는 05 BUILD TIP으로.
const chapters = [0, 3, 4, 6, 7].map((chapterIndex, index) => ({ href: `#chapter-${index + 1}`, label: bookChapters[chapterIndex] }))

export function VibeCodingPage() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()

  return (
    <div className="book-page">
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} bookNumber="02" bookKeyword="VIBE CODING" total={5} />
      <main id="main-content">
        <article>
          <BookCover number="02" keyword="VIBE CODING" count="5 CHAPTERS" chapters={chapters} beginHref="#chapter-1">
            <MasterMapStatement />
          </BookCover>

          <VideoSlot video={videos['02']} />

          <ChapterLeverage number="01" />
          <ChapterSystem number="02" />
          <ChapterConnect number="03">
            <ConnectMap />
          </ChapterConnect>
          <ChapterHarness number="04" />
          <ChapterMap number="05" />

          <footer className="book-ending">
            <EndingOpening />
            <Reveal className="cert-group">
              <p className="cert-group__intro">{CERT_INTRO}</p>
              <p className="cert-group__label">{CERT_LABEL}</p>
              {book01Certs.slice(1).map((cert) => (
                <CapabilityCheck key={cert.id} id={cert.id} evidence={false} statement={cert.statement} />
              ))}
            </Reveal>
            <NavigateLink href="/book/hdec-context" className="next-book">
              <span>NEXT BOOK · 03</span>
              <div>
                <strong>HDEC CONTEXT</strong>
                <p>그런데 회사에서 AI가 제대로 일하려면, 무엇이 더 필요할까요?</p>
              </div>
              <i aria-hidden="true">→</i>
            </NavigateLink>
          </footer>
        </article>
      </main>
    </div>
  )
}
