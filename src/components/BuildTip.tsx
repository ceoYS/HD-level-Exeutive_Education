import { useEffect, useRef, type ReactNode } from 'react'
import { Reveal } from './Reveal'

type BuildTipProps = {
  id: string
  label: string
  title?: ReactNode
  origin?: string[]
  tone?: 'dark' | 'light'
  children: ReactNode
}

/** LEARN WHEN NEEDED. BUILD 순간에만 펼쳐 읽는 접이식 심화(원문 블록 재렌더). */
export function BuildTip({ id, label, title, origin, tone = 'dark', children }: BuildTipProps) {
  const ref = useRef<HTMLDetailsElement>(null)

  // 로드맵·지도 링크(#tip-…)로 도착하면 접힌 상태를 펼친다.
  useEffect(() => {
    const openIfTargeted = () => {
      if (window.location.hash === `#${id}` && ref.current) ref.current.open = true
    }
    openIfTargeted()
    window.addEventListener('hashchange', openIfTargeted)
    return () => window.removeEventListener('hashchange', openIfTargeted)
  }, [id])

  return (
    <Reveal>
      <details className={`build-tip build-tip--${tone}`} id={id} ref={ref}>
        <summary>
          <span className="build-tip__eyebrow">TIP · DEEP DIVE</span>
          <span className="build-tip__title">
            <strong>{label}</strong>
            {title && <em>{title}</em>}
          </span>
          <i aria-hidden="true">+</i>
        </summary>
        <div className="build-tip__body">
          {origin && (
            <p className="build-tip__origin">
              {origin.map((item) => <span key={item}>{item}</span>)}
            </p>
          )}
          {children}
        </div>
      </details>
    </Reveal>
  )
}
