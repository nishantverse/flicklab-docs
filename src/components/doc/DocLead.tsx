import type { ReactNode } from 'react'

type DocLeadProps = {
  children: ReactNode
}

/** The opening paragraph of a document, set larger than body copy. */
const DocLead = ({ children }: DocLeadProps) => (
  <div className="doc-lead">{children}</div>
)

export default DocLead
