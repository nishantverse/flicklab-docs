import type { ReactNode } from 'react'
import { slugify } from '../../lib/slug'

type DocSectionProps = {
  /** Two digit marker, e.g. "01". Optional for unnumbered sections. */
  index?: string
  title: string
  /** Anchor id. Derived from the title when omitted. */
  id?: string
  children: ReactNode
}

/**
 * One numbered chapter of a document. The table of contents in DocLayout is
 * built by reading these back out of the DOM, so nothing needs to be declared twice.
 */
const DocSection = ({ index, title, id, children }: DocSectionProps) => {
  const anchor = id ?? slugify(title)

  return (
    <section
      className="doc-section"
      id={anchor}
      data-doc-section=""
      data-doc-index={index ?? ''}
      data-doc-title={title}
    >
      <header className="doc-section-head">
        {index ? (
          <span className="doc-section-index" aria-hidden="true">
            {index}
          </span>
        ) : null}
        <h2>{title}</h2>
      </header>
      <div className="doc-prose">{children}</div>
    </section>
  )
}

export default DocSection
