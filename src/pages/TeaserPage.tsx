import type { CSSProperties } from 'react'
import { NavigateLink } from '../components/NavigateLink'
import { SiteHeader } from '../components/SiteHeader'
import type { Book } from '../content/books'

type TeaserPageProps = {
  book: Book
}

const teaserDetails: Record<string, string[]> = {
  instruct: ['Prompting', '맥락과 요구사항', '캡처 기반 질문', '반복 수정'],
  choose: ['Custom AI', 'Web / App', 'Workflow Automation', 'Agent'],
  build: ['8-week build', 'Executive × ACE', 'Weekly Self Certification', 'Field application'],
  practice: ['작은 실습', '모바일·태블릿', '직접 지시하기', '직접 판단하기'],
}

export function TeaserPage({ book }: TeaserPageProps) {
  return (
    <div
      className="teaser-page"
      style={
        {
          '--book-accent': book.accent,
          '--book-foreground': book.foreground,
        } as CSSProperties
      }
    >
      <SiteHeader />
      <main id="main-content" className="teaser-page__main book-entry-surface">
        <div className="teaser-page__number" aria-hidden="true">{book.number}</div>
        <div className="teaser-page__content">
          <p className="eyebrow">BOOK {book.number} · PREVIEW</p>
          <h1>{book.keyword}</h1>
          <h2>{book.koreanTitle}</h2>
          <p>{book.description}</p>
          <ul aria-label="예정된 주요 내용">
            {(teaserDetails[book.slug] ?? []).map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </div>
        <div className="teaser-page__foot">
          <p>
            DESIGN BASELINE V1에서는 Book 01의 디자인 시스템을 먼저 검증합니다.
            <br />
            이 Book의 본문은 다음 단계에서 같은 편집 언어로 확장됩니다.
          </p>
          <NavigateLink href="/#library" className="text-link">
            THE FIVE BOOKS로 돌아가기 <span aria-hidden="true">↗</span>
          </NavigateLink>
        </div>
      </main>
    </div>
  )
}
