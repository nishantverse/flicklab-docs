import type { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

/**
 * Anchor replacement for MDX content: routes in-app links through React Router
 * and opens external links in a new tab.
 */
const SmartLink = ({ href = '', ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternal = href.startsWith('/') && !href.startsWith('//')

  if (isInternal) return <Link to={href} {...rest} />

  const isExternal = /^https?:/.test(href)

  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      {...rest}
    />
  )
}

export default SmartLink
