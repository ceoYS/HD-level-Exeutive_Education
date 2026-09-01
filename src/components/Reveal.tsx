import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ as: Tag = 'div', children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.unobserve(element)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
