import type { ReactNode } from 'react'

type PlaceholderProps = {
  /** Short label for what is missing, e.g. "When did I start?" */
  ask: string
  /** Optional hint about what a good answer looks like. */
  children?: ReactNode
  /** Renders inline inside a paragraph instead of as a block. */
  inline?: boolean
}

/**
 * A deliberately loud marker for content only the lab owner can write.
 * Never fabricate the answer: leave one of these instead.
 */
const Placeholder = ({ ask, children, inline = false }: PlaceholderProps) => {
  if (inline) {
    return (
      <span className="doc-placeholder-inline" data-placeholder="">
        [{ask}]
      </span>
    )
  }

  return (
    <div className="doc-placeholder" data-placeholder="">
      <span className="doc-placeholder-tag">Needs your input</span>
      <strong>[{ask}]</strong>
      {children ? <div className="doc-placeholder-hint">{children}</div> : null}
    </div>
  )
}

export default Placeholder
