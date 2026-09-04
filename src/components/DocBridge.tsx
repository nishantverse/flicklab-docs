import { Link } from 'react-router-dom'
import { docs } from '../data/docs'

/**
 * The hand-off between the live dashboard above and the written documentation.
 * Cards are generated from the docs registry, so adding a doc adds a card.
 */
const DocBridge = () => (
  <section className="bridge container reveal" id="documentation">
    <div className="section-kicker">How the lab works</div>
    <div className="section-heading">
      <h2>There&apos;s more behind the dashboard.</h2>
      <p>
        The status blocks say what is running. These say why any of it exists, and how
        the pieces actually fit together.
      </p>
    </div>
    <div className="bridge-grid">
      {docs.map(doc => (
        <Link className="bridge-card" to={doc.slug} key={doc.slug}>
          <small>{doc.card.kicker}</small>
          <strong>{doc.card.copy}</strong>
          <span className="bridge-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
    </div>
  </section>
)

export default DocBridge
