import { useEffect } from 'react'
import { NavigateLink } from './components/NavigateLink'
import { books } from './content/books'
import { usePathname } from './hooks/usePathname'
import { BookPage } from './pages/BookPage'
import { HomePage } from './pages/HomePage'
import { TeaserPage } from './pages/TeaserPage'

export default function App() {
  const pathname = usePathname()

  useEffect(() => {
    const targetId = window.location.hash.slice(1)
    if (targetId) {
      window.requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView())
      return
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  if (pathname === '/') return <HomePage />
  if (pathname === '/book/understand') return <BookPage />

  const teaser = books.find((book) => pathname === `/book/${book.slug}`)
  if (teaser) return <TeaserPage book={teaser} />

  return (
    <main className="not-found">
      <p className="eyebrow">404 · FIELD NOTE MISSING</p>
      <h1>이 페이지는 아직 지도에 없습니다.</h1>
      <NavigateLink href="/" className="text-link">
        Library로 돌아가기 <span aria-hidden="true">↗</span>
      </NavigateLink>
    </main>
  )
}
