import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type CalloutVariant = 'takeaway' | 'watch' | 'security'

const eyebrows: Record<CalloutVariant, string> = {
  takeaway: '실장 관점 · EXECUTIVE TAKEAWAY',
  watch: '주의 · WATCH OUT',
  security: '보안 · SECURITY',
}

type CalloutProps = {
  variant: CalloutVariant
  title?: string
  eyebrow?: string
  children: ReactNode
}

export function Callout({ variant, title, eyebrow, children }: CalloutProps) {
  return (
    <Reveal as="aside" className={`callout callout--${variant}`}>
      <p className="callout__eyebrow">
        <span className="callout__mark" aria-hidden="true" />
        {eyebrow ?? eyebrows[variant]}
      </p>
      {title && <h4 className="callout__title">{title}</h4>}
      <div className="callout__body">{children}</div>
    </Reveal>
  )
}

type CalloutContentProps = {
  title?: string
  children: ReactNode
}

export function ExecutiveTakeaway({ title, children }: CalloutContentProps) {
  return (
    <Callout variant="takeaway" title={title}>
      {children}
    </Callout>
  )
}

export function WatchOut({ title, children }: CalloutContentProps) {
  return (
    <Callout variant="watch" title={title}>
      {children}
    </Callout>
  )
}

export function SecurityGate({ title, children }: CalloutContentProps) {
  return (
    <Callout variant="security" title={title}>
      {children}
    </Callout>
  )
}
