import { footerLinks } from '../data/site'
import SiteLink from './SiteLink'

const Footer = () => (
  <footer className="footer container">
    <div className="footer-rule" />
    <div className="footer-row">
      <div>
        <strong>FlickLabs.</strong>
        <span>Built at home. Documented here.</span>
      </div>
      <nav aria-label="Footer">
        {footerLinks.map(link => (
          <SiteLink key={link.label} to={link.to}>
            {link.label}
          </SiteLink>
        ))}
      </nav>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} FlickLabs.</span>
      <span>Self-hosted · Always building</span>
    </div>
  </footer>
)

export default Footer
