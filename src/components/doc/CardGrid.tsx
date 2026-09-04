import type { ReactNode } from 'react'

type CardGridProps = {
  /** 2 or 3 columns on desktop. Always one column on small screens. */
  columns?: 2 | 3
  children: ReactNode
}

export const CardGrid = ({ columns = 2, children }: CardGridProps) => (
  <div className="doc-card-grid" data-columns={columns}>
    {children}
  </div>
)

type CardProps = {
  kicker?: string
  title: string
  /** Small monospace marker shown top-right, e.g. a glyph or port number. */
  mark?: string
  children: ReactNode
}

export const Card = ({ kicker, title, mark, children }: CardProps) => (
  <article className="doc-card">
    <div className="doc-card-head">
      {kicker ? <span className="label">{kicker}</span> : <span />}
      {mark ? (
        <span className="doc-card-mark" aria-hidden="true">
          {mark}
        </span>
      ) : null}
    </div>
    <h3>{title}</h3>
    <div className="doc-prose">{children}</div>
  </article>
)

export default CardGrid
