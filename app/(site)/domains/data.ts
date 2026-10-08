/**
 * The registry of domains I actually pay for. Nothing else knows this: a
 * project can be served from a domain I don't own (client work), and a domain
 * I own can serve nothing at all.
 *
 * Everything a project already knows — what's on the domain, whether it's still
 * live — is read from its frontmatter via the `domain` computed field. Only add
 * `status` or `note` here for domains with no project behind them.
 */
export type DomainOnlyStatus =
  | 'redirect'
  | 'wip'
  | 'email'
  | 'parked'
  | 'stopped'

export const domainOnlyStatusConfig: Record<
  DomainOnlyStatus,
  { label: string; className: string }
> = {
  redirect: {
    label: 'Redirect',
    className: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
  },
  wip: {
    label: 'Work in Progress',
    className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  },
  email: {
    label: 'Email',
    className: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  },
  parked: {
    label: 'Parked',
    className: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  },
  stopped: {
    label: 'Stopped',
    className: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  },
}

export interface OwnedDomain {
  /** Bare domain, no protocol, no trailing slash. Matched against Project.domain. */
  name: string
  /** Only used when no project claims this domain. */
  status?: DomainOnlyStatus
  note?: string
}

export const ownedDomains: OwnedDomain[] = [
  { name: 'nathanbrachotte.dev' },
  { name: 'mymoneyviz.com' },
  { name: 'howisgamestopdoing.com' },
  { name: 'gitelahaut.com' },
  { name: 'gitelarandonnee.fr' },
  { name: 'tarotmultijoueur.fr' },
  { name: 'pantou-fle.fr' },
  { name: 'brachotte.com', status: 'redirect', note: 'Used as a redirect.' },
  {
    name: 'soulether.com',
    status: 'wip',
    note: 'Ongoing project, no write-up yet.',
  },
  { name: 'n8js.com', status: 'email', note: 'Used for email.' },
]
