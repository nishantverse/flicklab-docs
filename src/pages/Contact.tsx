import { Link } from 'react-router-dom'
import SiteLink from '../components/SiteLink'
import type { ContactChannel } from '../data/site'
import { contactChannels } from '../data/site'

/**
 * One way of getting in touch. Channels without a destination yet still render,
 * marked as unavailable, rather than turning into a link that goes nowhere.
 */
const ChannelCard = ({ channel }: { channel: ContactChannel }) => {
  const body = (
    <>
      <small>{channel.kicker}</small>
      <strong>{channel.title}</strong>
      <p>{channel.copy}</p>
      {channel.href ? (
        <span className="contact-action">
          {channel.action} <span aria-hidden="true">↗</span>
        </span>
      ) : (
        <span className="contact-action is-pending">Not set up yet</span>
      )}
    </>
  )

  if (!channel.href) return <div className="contact-card">{body}</div>

  return (
    <SiteLink to={channel.href} className="contact-card is-link">
      {body}
    </SiteLink>
  )
}

/**
 * Where feedback lands. Kept outside the docs shell on purpose: it is a short
 * page, so the table of contents and related reading would only add noise.
 */
const Contact = () => (
  <main className="doc-main">
    <article className="contact container">
      <nav className="doc-crumbs" aria-label="Breadcrumb">
        <Link to="/">FlickLabs</Link>
        <span aria-hidden="true">/</span>
        <span>Contact</span>
      </nav>

      <header className="doc-header">
        <div className="eyebrow">Contact / Feedback</div>
        <h1>Found something wrong?</h1>
        <p className="doc-subtitle">
          Or have a question about any of this? Either one is welcome.
        </p>
      </header>

      <div className="contact-body">
        <div className="contact-intro doc-prose">
          <p>
            If something on this documentation is unclear, outdated, missing, or just
            plain wrong, feel free to reach out.
          </p>
          <p>
            I&apos;m still learning and the homelab keeps changing, so this site
            isn&apos;t meant to be a perfect, finished reference. If you spot something
            that could be improved, I&apos;d genuinely appreciate hearing about it.
          </p>
        </div>

        <div className="section-kicker">Ways to reach me</div>
        <div className="contact-grid">
          {contactChannels.map(channel => (
            <ChannelCard channel={channel} key={channel.id} />
          ))}
        </div>

        <p className="contact-note">
          No tracking, no mailing list, nothing to sign up for. Corrections are the most
          useful thing you can send — a wrong command or a stale version number is worth
          knowing about, however small it seems.
        </p>
      </div>

      <Link className="doc-back" to="/">
        Back to the lab <span aria-hidden="true">→</span>
      </Link>
    </article>
  </main>
)

export default Contact
