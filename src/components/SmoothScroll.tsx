import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'
import { HEADER_OFFSET } from '../lib/scroll'

/**
 * Global smooth scrolling.
 *
 * `root` attaches Lenis to the window instead of a wrapper element, so the real
 * scroll position keeps driving IntersectionObserver and `position:sticky`. The
 * reveal animations, the sticky doc sidebar and its active-section highlighting
 * all depend on that, and a transform-based scroller would break them.
 *
 * Reduced motion is not handled here: Lenis checks
 * `prefers-reduced-motion: reduce` itself and stays inert when it is set, so
 * anyone who asked for less movement keeps plain native scrolling.
 */
const SmoothScroll = ({ children }: { children: ReactNode }) => (
  <ReactLenis
    root
    options={{
      // Low enough to still read as scrolling rather than gliding, which suits
      // a flat, typographic site more than a long easing curve would.
      lerp: 0.1,
      // Send in-page `#` links (the doc contents list) through Lenis rather
      // than letting the browser jump, clearing the fixed header on the way.
      anchors: { offset: -HEADER_OFFSET },
    }}
  >
    {children}
  </ReactLenis>
)

export default SmoothScroll
