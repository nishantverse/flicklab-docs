import { Link } from 'react-router-dom'
import type { DocMeta } from '../../data/docs'

type RelatedPagesProps = {
  items: DocMeta[]
}

const RelatedPages = ({ items }: RelatedPagesProps) => {
  if (!items.length) return null

  return (
    <nav className="doc-related" aria-label="Related documentation">
      <div className="section-kicker">Keep going</div>
      <div className="doc-related-grid">
        {items.map(item => (
          <Link className="doc-related-card" to={item.slug} key={item.slug}>
            <span className="label">{item.eyebrow}</span>
            <strong>{item.title}</strong>
            <p>{item.subtitle}</p>
            <span className="doc-related-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default RelatedPages
