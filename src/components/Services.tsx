import { Link } from 'react-router-dom'
import { services, type Service } from '../data/site'

const isPlaceholder = (value: string) => /\[.+\]/.test(value)

const ServiceCard = ({ service }: { service: Service }) => (
  <article className="service reveal">
    <div className="node-top">
      <div>
        <div className="eyebrow">{service.category}</div>
        <h3>{service.title}</h3>
      </div>
      <span className="live">
        <i aria-hidden="true" />
        {service.status}
      </span>
    </div>

    <p className="service-tagline">{service.tagline}</p>
    <p className="service-copy">{service.description}</p>

    <dl className="service-specs">
      <div>
        <dt>Role</dt>
        <dd>{service.role}</dd>
      </div>
      <div>
        <dt>Platform</dt>
        <dd>{service.platform}</dd>
      </div>
      <div data-unverified={isPlaceholder(service.host) || undefined}>
        <dt>Host</dt>
        <dd>{service.host}</dd>
      </div>
    </dl>

    <div className="tags">
      {service.tags.map(tag => (
        <span key={tag}>{tag}</span>
      ))}
    </div>

    <Link className="service-link" to={service.href}>
      Read how it works <span aria-hidden="true">↗</span>
    </Link>
  </article>
)

const Services = () => (
  <section className="services container" id="services">
    <div className="section-kicker reveal">Services</div>
    <div className="section-heading reveal">
      <h2>What the lab actually runs.</h2>
      <p>Each one has a page explaining what it does and why it earned a slot.</p>
    </div>
    <div className="service-grid">
      {services.map(service => (
        <ServiceCard service={service} key={service.id} />
      ))}
    </div>
  </section>
)

export default Services
