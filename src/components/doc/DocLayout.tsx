import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { DocMeta } from '../../data/docs'
import { relatedDocs } from '../../data/docs'
import FeedbackCTA from './FeedbackCTA'
import RelatedPages from './RelatedPages'

type TocEntry = {
  id: string
  index: string
  title: string
}

type DocLayoutProps = {
  meta: DocMeta
  children: ReactNode
}

/**
 * Shared shell for every documentation page: header, contents, prose column,
 * related reading and the way back to the dashboard.
 *
 * The table of contents is read out of the rendered DocSections, so content
 * files never have to declare their own outline twice.
 */
const DocLayout = ({ meta, children }: DocLayoutProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [toc, setToc] = useState<TocEntry[]>([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const root = contentRef.current
    if (!root) return

    const sections = Array.from(root.querySelectorAll<HTMLElement>('[data-doc-section]'))

    setToc(
      sections.map(section => ({
        id: section.id,
        index: section.dataset.docIndex ?? '',
        title: section.dataset.docTitle ?? '',
      })),
    )
    setActiveId(sections[0]?.id ?? '')

    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -62% 0px' },
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [meta.slug])

  return (
    <article className="doc container">
      <nav className="doc-crumbs" aria-label="Breadcrumb">
        <Link to="/">FlickLabs</Link>
        <span aria-hidden="true">/</span>
        <span>{meta.eyebrow}</span>
      </nav>

      <header className="doc-header">
        <div className="eyebrow">{meta.eyebrow}</div>
        <h1>{meta.title}</h1>
        <p className="doc-subtitle">{meta.subtitle}</p>
      </header>

      <div className="doc-body">
        <aside className="doc-aside">
          <nav className="doc-toc" aria-label="On this page">
            <div className="label">Contents</div>
            <ol>
              {toc.map(entry => (
                <li key={entry.id}>
                  <a
                    href={`#${entry.id}`}
                    className={entry.id === activeId ? 'is-active' : undefined}
                    aria-current={entry.id === activeId ? 'true' : undefined}
                  >
                    {entry.index ? <span aria-hidden="true">{entry.index}</span> : null}
                    {entry.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="doc-content" ref={contentRef}>
          {children}
          <FeedbackCTA />
        </div>
      </div>

      <RelatedPages items={relatedDocs(meta.slug)} />

      <Link className="doc-back" to="/">
        Back to the lab <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}

export default DocLayout
