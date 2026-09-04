export type FlowStep = {
  label: string
  note?: string
  /** Optional label printed on the arrow leading into this step. */
  via?: string
}

type FlowDiagramProps = {
  title?: string
  steps: FlowStep[]
  caption?: string
  conceptual?: boolean
}

/** A numbered left-to-right-on-desktop, top-to-bottom-on-mobile pipeline. */
const FlowDiagram = ({ title, steps, caption, conceptual = true }: FlowDiagramProps) => (
  <figure className="doc-flow" aria-label={title ?? 'Pipeline diagram'}>
    {title || conceptual ? (
      <div className="doc-diagram-head">
        {title ? <span className="label">{title}</span> : <span />}
        {conceptual ? <span className="badge">Conceptual</span> : null}
      </div>
    ) : null}

    <ol className="doc-flow-steps">
      {steps.map((step, i) => (
        <li key={step.label}>
          {i > 0 ? (
            <span className="doc-flow-arrow" aria-hidden="true">
              {step.via ? <em>{step.via}</em> : null}↓
            </span>
          ) : null}
          <div className="doc-flow-step">
            <span className="doc-flow-index" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <strong>{step.label}</strong>
              {step.note ? <p>{step.note}</p> : null}
            </div>
          </div>
        </li>
      ))}
    </ol>

    {caption ? <figcaption>{caption}</figcaption> : null}
  </figure>
)

export default FlowDiagram
