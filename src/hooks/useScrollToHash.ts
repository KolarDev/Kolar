import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Smooth-scrolls to the element matching the URL hash after route changes. */
export function useScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      if (pathname) window.scrollTo({ top: 0 })
      return
    }

    const id = hash.replace('#', '')
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash, pathname])
}
