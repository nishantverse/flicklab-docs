import type { LabNode } from '../data/site'
import SpecList from './SpecList'

type NodeCardProps = {
  node: LabNode
  /** Featured cards use a two column layout with labelled groups. */
  featured?: boolean
}

const Tags = ({ tags }: { tags: string[] }) => (
  <div className="tags">
    {tags.map(tag => (
      <span key={tag}>{tag}</span>
    ))}
  </div>
)

const NodeCard = ({ node, featured = false }: NodeCardProps) => {
  const headingId = `node-${node.id}`

  return (
    <article
      className={featured ? 'node featured reveal' : 'node reveal'}
      aria-labelledby={headingId}
    >
      <div className="node-top">
        <div>
          <div className="eyebrow">{node.eyebrow}</div>
          <h2 id={headingId}>{node.title}</h2>
        </div>
        <span className="live">
          <i aria-hidden="true" />
          {node.status}
        </span>
      </div>

      {featured ? (
        <div className="node-columns">
          <div>
            <div className="label">Hardware</div>
            <SpecList rows={node.specs} />
          </div>
          <div>
            <div className="label">{node.tagsLabel ?? 'What lives here'}</div>
            <Tags tags={node.tags} />
          </div>
        </div>
      ) : (
        <>
          <SpecList rows={node.specs} />
          <Tags tags={node.tags} />
        </>
      )}
    </article>
  )
}

export default NodeCard
