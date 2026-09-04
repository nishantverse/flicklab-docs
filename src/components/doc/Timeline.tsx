import type { ReactNode } from 'react'

type TimelineProps = {
  children: ReactNode
}

export const Timeline = ({ children }: TimelineProps) => (
  <ol className="doc-timeline">{children}</ol>
)

type TimelineItemProps = {
  index: string
  title: string
  /** Freeform time marker. Leave as a placeholder rather than inventing a date. */
  when?: string
  children: ReactNode
}

export const TimelineItem = ({ index, title, when, children }: TimelineItemProps) => (
  <li className="doc-timeline-item">
    <div className="doc-timeline-marker" aria-hidden="true">
      <span>{index}</span>
    </div>
    <div className="doc-timeline-body">
      <div className="doc-timeline-head">
        <h3>{title}</h3>
        {when ? <span className="badge">{when}</span> : null}
      </div>
      <div className="doc-prose">{children}</div>
    </div>
  </li>
)

export default Timeline
