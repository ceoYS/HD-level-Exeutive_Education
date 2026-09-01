import { useEffect, useState } from 'react'
import { getAppPathname } from '../routing'

export function usePathname() {
  const [pathname, setPathname] = useState(getAppPathname)

  useEffect(() => {
    const updatePath = () => setPathname(getAppPathname())
    window.addEventListener('popstate', updatePath)
    return () => window.removeEventListener('popstate', updatePath)
  }, [])

  return pathname
}
