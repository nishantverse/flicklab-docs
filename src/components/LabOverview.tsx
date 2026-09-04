import { Link } from 'react-router-dom'
import { featuredNode, nodes } from '../data/site'
import NodeCard from './NodeCard'

const LabOverview = () => (
  <section className="lab-overview container" id="nodes">
    <div className="section-kicker reveal">The infrastructure</div>

    <NodeCard node={featuredNode} featured />

    <div className="two-col">
      {nodes.map(node => (
        <NodeCard key={node.id} node={node} />
      ))}
    </div>

    <p className="lab-overview-more reveal" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
      The Optiplex runs Proxmox, which is what makes the rest of this flexible.{' '}
      <Link to="/infrastructure/proxmox">
        Read how the virtualization layer works <span aria-hidden="true">↗ (must read)</span>
      </Link>
    </p>
  </section>
)

export default LabOverview
