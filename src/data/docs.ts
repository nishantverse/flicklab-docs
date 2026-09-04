/**
 * Registry for the documentation layer.
 *
 * Only navigational metadata lives here — titles, taglines, relationships.
 * The prose itself lives in `content/**` as MDX so writing stays out of the UI.
 */
export type DocMeta = {
  /** Route path, also used as the identifier in `related`. */
  slug: string
  /** Small monospace label above the title, doubles as the breadcrumb. */
  eyebrow: string
  title: string
  subtitle: string
  /** Copy for the homepage bridge cards. */
  card: {
    kicker: string
    copy: string
  }
  related: string[]
}

export const docs: DocMeta[] = [
  {
    slug: '/story',
    eyebrow: 'Homelab story',
    title: 'How this became a homelab.',
    subtitle:
      'A small collection of machines, services and experiments that started with curiosity.',
    card: {
      kicker: 'The story',
      copy: 'How this became a homelab',
    },
    related: ['/infrastructure/proxmox', '/services/jellyfin', '/services/arr-stack'],
  },
  {
    slug: '/infrastructure/proxmox',
    eyebrow: 'Infrastructure',
    title: 'Proxmox',
    subtitle: 'The layer underneath the lab.',
    card: {
      kicker: 'Proxmox',
      copy: 'The virtualization layer',
    },
    related: ['/story', '/services/jellyfin', '/services/arr-stack'],
  },
  {
    slug: '/services/jellyfin',
    eyebrow: 'Services',
    title: 'Jellyfin',
    subtitle: 'My self-hosted media server.',
    card: {
      kicker: 'Jellyfin',
      copy: 'The media server',
    },
    related: ['/services/arr-stack', '/infrastructure/proxmox', '/story'],
  },
  {
    slug: '/services/arr-stack',
    eyebrow: 'Services',
    title: 'ARR Stack',
    subtitle: 'The automation layer behind the media library.',
    card: {
      kicker: 'ARR Stack',
      copy: 'The automation pipeline',
    },
    related: ['/services/jellyfin', '/infrastructure/proxmox', '/story'],
  },
]

const bySlug = new Map(docs.map(doc => [doc.slug, doc]))

export function getDoc(slug: string): DocMeta {
  const doc = bySlug.get(slug)
  if (!doc) throw new Error(`Unknown doc slug: ${slug}`)
  return doc
}

export function relatedDocs(slug: string): DocMeta[] {
  return getDoc(slug)
    .related.map(related => bySlug.get(related))
    .filter((doc): doc is DocMeta => Boolean(doc))
}
