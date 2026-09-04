import type { SpecRow } from '../../data/site'

type SpecTableProps = {
  label?: string
  rows: SpecRow[]
  /** Adds a "[VERIFY]" style tint to rows whose detail is still a placeholder. */
  caption?: string
}

const isUnverified = (detail: string) => /\[.+\]/.test(detail)

const SpecTable = ({ label, rows, caption }: SpecTableProps) => (
  <div className="doc-spec">
    {label ? <div className="label">{label}</div> : null}
    <dl>
      {rows.map(row => (
        <div key={`${row.term}-${row.detail}`} data-unverified={isUnverified(row.detail) || undefined}>
          <dt>{row.term}</dt>
          <dd>{row.detail}</dd>
        </div>
      ))}
    </dl>
    {caption ? <p className="doc-caption">{caption}</p> : null}
  </div>
)

export default SpecTable
