const basePath = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '')

export function toAppHref(href: string) {
  if (!href.startsWith('/') || href.startsWith('//')) return href
  return `${basePath}${href}` || '/'
}

export function getAppPathname(pathname = window.location.pathname) {
  if (!basePath) return pathname
  if (pathname === basePath) return '/'
  if (pathname.startsWith(`${basePath}/`)) return pathname.slice(basePath.length)
  return pathname
}
