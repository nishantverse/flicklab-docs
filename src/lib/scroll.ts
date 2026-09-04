/**
 * Space to leave clear when scrolling something into view.
 *
 * The site header is fixed and 72px tall; the rest is breathing room so a
 * heading never sits flush against it. Matches the `rootMargin` used by the
 * documentation table of contents, so the section you land on is the section it
 * marks as active.
 *
 * The `scroll-margin-top` rules in the stylesheets cover the same ground for
 * native jumps — landing directly on a hash, or reduced motion, where Lenis
 * stays out of the way.
 */
export const HEADER_OFFSET = 96
