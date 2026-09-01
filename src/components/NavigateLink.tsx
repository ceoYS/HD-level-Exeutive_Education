import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { toAppHref } from '../routing'

type NavigateLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export function NavigateLink({ href, onClick, ...props }: NavigateLinkProps) {
  const resolvedHref = toAppHref(href)

  const navigate = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      props.target === '_blank' ||
      href.startsWith('#')
    ) {
      return
    }

    event.preventDefault()
    window.history.pushState({}, '', resolvedHref)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return <a href={resolvedHref} onClick={navigate} {...props} />
}
