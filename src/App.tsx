import { useEffect } from 'react'
import { NavigateLink } from './components/NavigateLink'
import { usePathname } from './hooks/usePathname'
import { AiPage } from './pages/AiPage'
import { BuildPage } from './pages/BuildPage'
import { CasesPage } from './pages/CasesPage'
import { HdecContextPage } from './pages/HdecContextPage'
import { HomePage } from './pages/HomePage'
import { VibeCodingPage } from './pages/VibeCodingPage'

// 신규 route + 구 alias(기존 링크 보존)
const bookPages = {
  '/book/ai': AiPage,
  '/book/understand': AiPage,
  '/book/vibe-coding': VibeCodingPage,
  '/book/hdec-context': HdecContextPage,
  '/book/cases': CasesPage,
  '/book/instruct': CasesPage,
  '/book/build': BuildPage,
  '/book/choose': BuildPage,
  '/book/practice': BuildPage,
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
