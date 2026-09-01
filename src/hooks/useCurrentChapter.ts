import { useEffect, useState } from 'react'

export function useCurrentChapter() {
  const [currentChapter, setCurrentChapter] = useState(1)

  useEffect(() => {
    const chapters = Array.from(document.querySelectorAll<HTMLElement>('.chapter[id]'))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]

        if (visible) {
          const chapter = Number(visible.target.id.replace('chapter-', ''))
          if (Number.isFinite(chapter)) setCurrentChapter(chapter)
        }
      },
      { rootMargin: '-18% 0px -66% 0px', threshold: 0 },
    )

    chapters.forEach((chapter) => observer.observe(chapter))
    return () => observer.disconnect()
  }, [])

  return currentChapter
}
