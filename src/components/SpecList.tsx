import type { SpecRow } from '../data/site'

type SpecListProps = {
  rows: SpecRow[]
}

const SpecList = ({ rows }: SpecListProps) => (
  <dl>
    {rows.map(row => (
      <div key={row.term}>
        <dt>{row.term}</dt>
        <dd>{row.detail}</dd>
      </div>
    ))}
  </dl>
)

export default SpecList
