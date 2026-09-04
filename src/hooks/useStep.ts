import { useCallback, useEffect, useRef, useState } from 'react'

/** Runs a short, one-shot staged reveal when the diagram enters the viewport. */
export function useStep(total: number, interval = 700) {
  const ref = useRef<HTMLDivElement | null>(null)
  const timers = useRef<number[]>([])
  const played = useRef(false)
  const [step, setStep] = useState(0)

  const clear = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer))
    timers.current = []
  }, [])

  const replay = useCallback(() => {
    clear()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.requestAnimationFrame(() => setStep(reduced ? total : 0))
    if (reduced) return

    timers.current = Array.from({ length: total }, (_, index) => (
      window.setTimeout(() => setStep(index + 1), 180 + index * interval)
    ))
  }, [clear, interval, total])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !played.current) {
        played.current = true
        replay()
        observer.disconnect()
      }
    }, { rootMargin: '0px 0px -20% 0px', threshold: 0.12 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      clear()
    }
  }, [clear, replay])

  return { ref, step, replay }
}
