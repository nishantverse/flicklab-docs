export type DiagramNode = {
  label: string
  note?: string
}

export type DiagramLayer = DiagramNode & {
  /** When present the layer renders as a fan-out row of sibling boxes. */
  items?: DiagramNode[]
}

type ArchitectureDiagramProps = {
  title?: string
  layers: DiagramLayer[]
  caption?: string
  /**
   * Marks the diagram as an illustration of the idea rather than a verified
   * map of the running setup. Defaults to true because guessing is worse.
   */
  conceptual?: boolean
}

const ArchitectureDiagram = ({
  title,
  layers,
  caption,
  conceptual = true,
}: ArchitectureDiagramProps) => (
  <figure className="doc-diagram" aria-label={title ?? 'Architecture diagram'}>
    {title || conceptual ? (
      <div className="doc-diagram-head">
        {title ? <span className="label">{title}</span> : <span />}
        {conceptual ? <span className="badge">Conceptual</span> : null}
      </div>
    ) : null}

    <div className="doc-diagram-stack">
      {layers.map((layer, i) => (
        <div className="doc-diagram-row" key={`${layer.label}-${i}`}>
          {i > 0 ? (
            <span className="doc-diagram-arrow" aria-hidden="true">
              ↓
            </span>
          ) : null}

          {layer.items?.length ? (
            <>
              <div className="doc-diagram-node is-parent">
                <strong>{layer.label}</strong>
                {layer.note ? <span>{layer.note}</span> : null}
              </div>
              <span className="doc-diagram-arrow" aria-hidden="true">
                ↓
              </span>
              <div className="doc-diagram-branch">
                {layer.items.map(item => (
                  <div className="doc-diagram-node is-leaf" key={item.label}>
                    <strong>{item.label}</strong>
                    {item.note ? <span>{item.note}</span> : null}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="doc-diagram-node">
              <strong>{layer.label}</strong>
              {layer.note ? <span>{layer.note}</span> : null}
            </div>
          )}
        </div>
      ))}
    </div>

    {caption ? <figcaption>{caption}</figcaption> : null}
  </figure>
)

export default ArchitectureDiagram
