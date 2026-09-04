import { Link } from 'react-router-dom'

/**
 * Closing nudge on every document.
 *
 * Rendered by DocLayout rather than written into each MDX file, so every page
 * carries it — including ones added later — and the wording only lives once.
 */
const FeedbackCTA = () => (
  <aside className="doc-feedback">
    <span className="doc-feedback-label">Something unclear?</span>
    <p>
      If you found a mistake, something outdated, or a part that could use more
      explanation, <Link to="/contact">let me know</Link>.
    </p>
  </aside>
)

export default FeedbackCTA
