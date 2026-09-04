import { useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { HEADER_OFFSET } from '../lib/scroll'

/**
 * Router navigation doesn't move the viewport on its own. Jump to the hash
 * target when there is one, otherwise start new pages at the top.
 *
 * Scrolling goes through Lenis so it animates instead of fighting the native
 * jump. When Lenis is absent — reduced motion, or the frame before the instance
 * exists — the native calls still run, so navigation never silently stops
 * working.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation()
  const lenis = useLenis()
  const previousPathname = useRef<string | null>(null)

  useEffect(() => {
    // Animate only while staying on the page already on screen. Arriving on a
    // new route jumps instead, so navigation never plays a long scroll through
    // content the visitor has not looked at yet.
    const samePage = previousPathname.current === pathname
    previousPathname.current = pathname

    const target = hash ? document.querySelector(hash) : null

    if (target instanceof HTMLElement) {
      if (lenis) lenis.scrollTo(target, { offset: -HEADER_OFFSET, immediate: !samePage })
      else target.scrollIntoView({ block: 'start' })
      return
    }

    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo({ top: 0 })
  }, [pathname, hash, lenis])

  return null
}

export default ScrollManager
