import { useLocation } from 'react-router-dom'
import { navLinks } from '../data/site'
import { useTheme } from '../hooks/useTheme'
import SiteLink from './SiteLink'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()
  const isDark = theme === 'dark'

  const isCurrent = (to: string) => {
    const [path] = to.split('#')
    if (to === '/') return pathname === '/'
    // Section links live on the home route; page links match their own path.
    return path !== '/' && path !== '' && pathname === path.replace(/\/$/, '')
  }

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <SiteLink to="/" className="brand">
          <span>FlickLabs.</span>
          <em>Documented.</em>
        </SiteLink>

        <nav className="desktop-nav" aria-label="Primary">
          {navLinks.map(link => (
            <SiteLink
              key={link.to}
              to={link.to}
              className={isCurrent(link.to) ? 'is-current' : undefined}
            >
              {link.label}
            </SiteLink>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          aria-pressed={isDark}
        >
          <span aria-hidden="true">{isDark ? '☾' : '☀'}</span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
