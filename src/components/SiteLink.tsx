import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type SiteLinkProps = {
  to: string
  className?: string
  children: ReactNode
}

/**
 * One link component for nav and footer: router navigation for in-app paths,
 * a plain anchor for anything else (external URLs, bare `#` placeholders).
 */
const SiteLink = ({ to, className, children }: SiteLinkProps) => {
  const isInternal = to.startsWith('/')

  if (isInternal) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  const isExternal = /^https?:/.test(to)

  return (
    <a
      href={to}
      className={className}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {children}
    </a>
  )
}

export default SiteLink
