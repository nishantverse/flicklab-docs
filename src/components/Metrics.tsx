import { metrics } from '../data/site'

const Metrics = () => (
  <section className="metrics container reveal">
    {metrics.map(metric => (
      <div className="metric" key={metric.label}>
        <strong>{metric.value}</strong>
        <span>{metric.label}</span>
      </div>
    ))}
  </section>
)

export default Metrics
