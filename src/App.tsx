import { useEffect } from 'react'
import { NavigateLink } from './components/NavigateLink'
import { usePathname } from './hooks/usePathname'
import { Book01Page } from './pages/Book01Page'
import { Book02Page } from './pages/Book02Page'
import { Book03Page } from './pages/Book03Page'
import { Book04Page } from './pages/Book04Page'
import { Book05Page } from './pages/Book05Page'
import { HomePage } from './pages/HomePage'

const bookPages = {
  '/book/understand': Book01Page,
  '/book/instruct': Book02Page,
  '/book/choose': Book03Page,
  '/book/build': Book04Page,
  '/book/practice': Book05Page,
} as const

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

  if (pathname in bookPages) {
    const Page = bookPages[pathname as keyof typeof bookPages]
    return <Page />
  }

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
