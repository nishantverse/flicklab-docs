export type Metric = {
  value: string
  label: string
}

export type SpecRow = {
  term: string
  detail: string
}

export type LabNode = {
  id: string
  eyebrow: string
  title: string
  status: string
  specs: SpecRow[]
  tags: string[]
  /** Optional label for the tag column, used by the featured node layout. */
  tagsLabel?: string
}

export type Project = {
  mark: string
  category: string
  title: string
  copy: string
  meta: string
  /** Omit when there is nothing written up yet — the card renders unlinked. */
  href?: string
}

export type Guide = {
  index: string
  title: string
  copy: string
  href: string
}

/**
 * A running service, as opposed to a LabNode which is physical hardware.
 * `[VERIFY]` / `[...]` values are rendered as obvious placeholders in the UI.
 */
export type Service = {
  id: string
  category: string
  title: string
  tagline: string
  description: string
  status: string
  host: string
  platform: string
  role: string
  tags: string[]
  href: string
}

export type NavLink = {
  label: string
  /** Router path. A hash on the home route scrolls to that section. */
  to: string
}

/**
 * One way of getting in touch, rendered as a card on the contact page.
 * Deliberately a short list: the point is to route feedback to the right
 * place, not to publish every address I own.
 */
export type ContactChannel = {
  id: string
  /** Monospace label above the title — what this channel is best for. */
  kicker: string
  title: string
  copy: string
  /** Text for the action line at the bottom of the card. */
  action: string
  /**
   * Destination. Omit while a channel has nowhere to point yet: the card then
   * renders an obvious placeholder instead of a link that goes nowhere.
   */
  href?: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Story', to: '/story' },
  { label: 'Infrastructure', to: '/#nodes' },
  { label: 'Services', to: '/#services' },
  { label: 'Projects', to: '/#projects' },
  // { label: 'Guides', to: '/#guides' },
  { label: 'Contact', to: '/contact' },
]

export const metrics: Metric[] = [
  { value: '100%', label: 'Self-hosted' },
  { value: '0', label: 'Public ports' },
  { value: '24/7', label: 'Always tinkering' },
]

export const featuredNode: LabNode = {
id: 'prodesk',
    eyebrow: 'Compute node',
    title: 'Dell Optiplex 7070 micro',
    status: 'Online',
    specs: [
      { term: 'CPU', detail: 'Intel Core i5 8500T' },
      { term: 'RAM', detail: '24 GB' },
      { term: 'Storage', detail: '512 GB NVME SSD' },
      { term: 'Storage', detail: '512GB Sata SSD'},
      { term: 'OS', detail: ' Proxmox VE 9' },
    ],
    tags: ['Virtualization', 'Ubuntu', 'Proxmox', 'Docker', 'Webmin'],

}

export const nodes: LabNode[] = [
  { 
    id: 'zimaos',
  eyebrow: 'Storage / Services',
  title: 'ZimaOS Server',
  status: 'Online',
  specs: [
    { term: 'Platform', detail: 'ZimaOS' },
    { term: 'Network', detail: 'Wired ethernet · Static IP' },
    { term: 'Role', detail: 'Storage + self-hosted services' },
    { term: 'Access', detail: 'SSH · SFTP · SMB' },
  ],
  tagsLabel: 'What lives here',
  tags: [
    'File shares',
    'Backups',
    'Docker',
    'Media',
    'SSH',
    'SFTP',
    'SMB',
    'Homelab storage',
  ],
  },
  {
    id: 'pi',
    eyebrow: 'Network / Edge',
    title: 'Raspberry Pi 5',
    status: 'Online',
    specs: [
      { term: 'Platform', detail: 'Raspberry Pi 5' },
      { term: 'RAM', detail: '8GB'},
      { term: 'Role', detail: 'Always-on utility node' },
      { term: 'Management', detail: 'SSH' },
      { term: 'Network', detail: 'LAN · Wired / Wi-Fi' },
      { term: 'OS', detail: ' Raspberry pi OS' },
    ],
    tags: ['Monitoring', 'Utilities', 'Networking', 'Automation'],
  },
]

export const services: Service[] = [
  {
    id: 'jellyfin',
    category: 'Media',
    title: 'Jellyfin',
    tagline: 'My self-hosted media server.',
    description:
      'Turns the files sitting on lab storage into a real library with artwork, seasons and resume-where-I-left-off playback.',
    status: 'Online',
    host: 'Dell Optiplex 7070 micro',
    platform: 'Linux / Docker',
    role: 'Media streaming',
    tags: ['Media', 'Docker', 'Streaming'],
    href: '/services/jellyfin',
  },
  {
    id: 'arr-stack',
    category: 'Automation',
    title: 'ARR Stack',
    tagline: 'The automation layer behind the media library.',
    description:
      'Watches for the things I have asked for, hands them to a downloader, then names and files the results so the library stays tidy.',
    status: 'Online',
    host: 'Dell Optiplex 7070 micro',
    platform: 'Linux / Docker',
    role: 'Media automation',
    tags: ['Automation', 'Docker', 'Media'],
    href: '/services/arr-stack',
  },
]

export const networkAccess: SpecRow[] = [
  { term: 'Remote', detail: 'Tailscale · SSH · xfreerdp · SFTP' },
  { term: 'File access', detail: 'SMB/CIFS mounts' },
  { term: 'Management', detail: 'LAN-first' },
  { term: 'Exposure', detail: '0 public ports' },
]

export const projects: Project[] = [
  {
    mark: '⌁',
    category: 'Networking',
    title: 'Homelab Access',
    copy: 'Tailscale, SSH, SFTP, SMB and remote desktop access across the LAN.',
    meta: 'SSH · Networking ↗',
    href: '/#network',
  },
  {
    mark: '▣',
    category: 'Virtualization',
    title: 'Proxmox Experiments',
    copy: 'Turning spare hardware into a flexible compute playground.',
    meta: 'Proxmox · VMs ↗',
    href: '/infrastructure/proxmox',
  },
  {
    mark: '⌘',
    category: 'Linux',
    title: 'Ubuntu Server',
    copy: 'Learning by running real services instead of just reading about them.',
    meta: 'Ubuntu · Docker ↗',
    href: '/#services',
  },
  {
    mark: '◉',
    category: 'Storage',
    title: 'ZimaOS Setup',
    copy: 'Shares, storage, apps and reliable access to the home server.',
    meta: 'Linux · Storage ↗',
    href: '/#nodes',
  },
  {
    mark: '⌘',
    category: 'Automation',
    title: 'FlickLabs Scripts',
    copy: 'Shell tools and little utilities that make the lab easier to operate.',
    // TODO: link this once there is a page for the scripts.
    meta: 'Bash · Python',
  },
  {
    mark: '↗',
    category: 'Open source',
    title: 'GitHub Projects',
    copy: 'Configs, experiments and the useful stuff that survives cleanup.',
    // TODO: point this at the real GitHub profile, same as the footer link.
    meta: 'Git · GitHub',
  },
]

export const guides: Guide[] = [
  {
    index: '01',
    title: 'Mounting ZimaOS shares on Linux',
    copy: 'SMB/CIFS setup, mount points, credentials and checking whether a mount actually worked.',
    href: '#',
  },
  {
    index: '02',
    title: 'Remote desktop with xfreerdp',
    copy: 'Multiple monitors, session disconnects, authentication and the useful command-line flags.',
    href: '#',
  },
  {
    index: '03',
    title: 'SSH without password prompts',
    copy: 'Keys, permissions, authorized_keys and diagnosing the annoying "Permission denied" cases.',
    href: '#',
  },
  {
    index: '04',
    title: 'Building the FlickLabs dashboard',
    copy: 'How the monitoring page ties together system health, uptime and the network.',
    href: '#',
  },
]

/* ------------------------------------------------------------------ contact --- */

/** Verified: this account exists. Single source of truth for the profile link. */
export const githubProfile = 'https://github.com/nishantverse'

/** Public repo behind this site. Verified public, with issues enabled. */
export const docsRepo = 'https://github.com/nishantverse/flicklab-docs'

/** Straight to the new-issue form: this is the path for reporting a problem. */
export const issuesUrl = `${docsRepo}/issues/new`

/**
 * Address for private questions. Only surfaced on the contact page, never in
 * the nav or footer, so it stays one step removed from every other page.
 */
export const contactEmail: string | undefined = 'vishvesh346@gmail.com'

export const contactChannels: ContactChannel[] = [
  {
    id: 'issues',
    kicker: 'Best for corrections',
    title: 'Open an issue',
    copy: 'Documentation mistakes, steps that have gone stale, broken links, or a suggestion for something worth adding. Public, so the fix helps whoever reads the page next.',
    action: 'File an issue',
    href: issuesUrl,
  },
  {
    id: 'email',
    kicker: 'Best for private questions',
    title: 'Email',
    copy: 'Anything that should not be public, or a question that does not really fit as an issue on a documentation repo.',
    action: 'Send an email',
    href: contactEmail ? `mailto:${contactEmail}` : undefined,
  },
  {
    id: 'github',
    kicker: 'General contact',
    title: 'GitHub',
    copy: 'The rest of what I am building, and the easiest way to find me if none of the above quite fits.',
    action: '@nishantverse',
    href: githubProfile,
  },
]

export const footerLinks: NavLink[] = [
  { label: 'GitHub ↗', to: githubProfile },
  { label: 'Story', to: '/story' },
  { label: 'Proxmox', to: '/infrastructure/proxmox' },
  { label: 'Jellyfin', to: '/services/jellyfin' },
  { label: 'ARR Stack', to: '/services/arr-stack' },
  { label: 'Contact', to: '/contact' },
]
