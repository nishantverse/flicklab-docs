const Working = () => (
  <section className="working container reveal">
    <div className="section-kicker">In progress</div>
    <h2>Currently Working On.</h2>
    <div className="working-card">
      <span className="w-icon" aria-hidden="true">
        🔧
      </span>
      <div>
        <strong>One dashboard for the whole lab.</strong>
        <p>
          CPU, memory, storage, uptime, IPs, service health and node status — collected by
          lightweight agents and shown in one place.
        </p>
      </div>
      <span className="badge">Building</span>
    </div>
  </section>
)

export default Working
