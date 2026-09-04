import { networkAccess } from '../data/site'
import SpecList from './SpecList'

const Network = () => (
  <section className="network container reveal" id="network">
    <div className="section-kicker">Networking</div>
    <div className="section-heading">
      <h2>The FlickLabs Network.</h2>
      <span className="badge">Private by default</span>
    </div>
    <div className="network-grid">
      <div>
        <div className="label">Access</div>
        <SpecList rows={networkAccess} />
      </div>
      <div>
        <div className="label">The practical stuff</div>
        <p className="muted-copy">
          The goal is simple: one reliable box should make it easy to reach the rest of the
          network. SSH is the control plane, storage stays mounted cleanly, and anything
          exposed to the internet should earn its place.
        </p>
      </div>
    </div>
  </section>
)

export default Network
