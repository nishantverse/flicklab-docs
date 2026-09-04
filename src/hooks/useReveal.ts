import { useEffect } from 'react'

/**
 * Fades in every `.reveal` element as it scrolls into view, with a small
 * staggered delay so groups of cards animate in sequence.
 *
 * Pass the current route as `key` so the observer re-attaches after navigation.
 */
export function useReveal(key?: string) {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12 },
    )

    targets.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min((i % 5) * 70, 280)}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [key])
}
