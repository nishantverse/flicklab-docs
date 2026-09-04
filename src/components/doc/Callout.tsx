import type { ReactNode } from 'react'

export type CalloutKind = 'note' | 'why' | 'gotcha' | 'verify'

const KIND_LABEL: Record<CalloutKind, string> = {
  note: 'Note',
  why: 'Why',
  gotcha: 'Gotcha',
  verify: 'Verify',
}

const KIND_MARK: Record<CalloutKind, string> = {
  note: '›',
  why: '?',
  gotcha: '!',
  verify: '⌗',
}

type CalloutProps = {
  kind?: CalloutKind
  /** Overrides the default label derived from `kind`. */
  title?: string
  children: ReactNode
}

const Callout = ({ kind = 'note', title, children }: CalloutProps) => (
  <aside className="doc-callout" data-kind={kind}>
    <span className="doc-callout-mark" aria-hidden="true">
      {KIND_MARK[kind]}
    </span>
    <div>
      <span className="doc-callout-label">{title ?? KIND_LABEL[kind]}</span>
      <div className="doc-callout-body">{children}</div>
    </div>
  </aside>
)

export default Callout
