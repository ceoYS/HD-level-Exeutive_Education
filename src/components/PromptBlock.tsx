import { useState } from 'react'

type PromptBlockProps = {
  label?: string
  children: string
  tone?: 'light' | 'dark' | 'signal'
  copyable?: boolean
}

export function PromptBlock({ label = 'DIRECT AI', children, tone = 'dark', copyable = true }: PromptBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <figure className={`prompt-block prompt-block--${tone}`}>
      <figcaption>
        <span className="prompt-block__signal" aria-hidden="true" />
        {label}
        {copyable && (
          <button type="button" onClick={copyPrompt} aria-label="프롬프트 문장 복사">
            {copied ? 'COPIED' : 'COPY'}
          </button>
        )}
      </figcaption>
      <blockquote>“{children}”</blockquote>
    </figure>
  )
}
