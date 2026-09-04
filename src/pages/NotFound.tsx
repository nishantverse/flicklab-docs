import { Link } from 'react-router-dom'

const NotFound = () => (
  <main className="doc-main">
    <div className="doc container">
      <header className="doc-header">
        <div className="eyebrow">404</div>
        <h1>Nothing running here.</h1>
        <p className="doc-subtitle">
          This route isn&apos;t part of the lab. It may have been renamed, or it may never
          have existed.
        </p>
      </header>
      <Link className="doc-back" to="/">
        Back to the lab <span aria-hidden="true">→</span>
      </Link>
    </div>
  </main>
)

export default NotFound
