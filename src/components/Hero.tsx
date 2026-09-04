const Hero = () => (
  <section className="hero container">
    <div className="hero-inner reveal">
      <div className="eyebrow">Self-hosted · Always building</div>
      <h1>
        <span>FlickLabs.</span>
        <br />
        <strong>Documented.</strong>
      </h1>
      <p className="hero-copy">
        A living record of my homelab — servers, services, network experiments, configs,
        scripts, and all the questionable decisions that somehow ended up working.
      </p>
      <div className="hero-actions">
        <a className="text-button primary" href="#documentation">
          Read the docs <span aria-hidden="true">↗</span>
        </a>
        <a className="text-button" href="#projects">
          View projects <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </section>
)

export default Hero
