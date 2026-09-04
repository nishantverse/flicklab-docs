import { guides } from '../data/site'

const Guides = () => (
  <section className="guides container reveal" id="guides">
    <div className="section-kicker">Documentation</div>
    <div className="section-heading">
      <h2>Step-by-step guides.</h2>
      <p>The commands and notes I wish I had before doing it the first time.</p>
    </div>
    <div className="guide-list">
      {guides.map(guide => (
        <a className="guide" href={guide.href} key={guide.index}>
          <span aria-hidden="true">{guide.index}</span>
          <div>
            <strong>{guide.title}</strong>
            <p>{guide.copy}</p>
          </div>
          <b aria-hidden="true">↗</b>
        </a>
      ))}
    </div>
  </section>
)

export default Guides
