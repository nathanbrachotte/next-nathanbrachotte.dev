/**
 * The registry of domains I actually pay for. Nothing else knows this: a
 * project can be served from a domain I don't own (client work), and a domain
 * I own can serve nothing at all.
 *
 * Everything a project already knows — what's on the domain, whether it's still
 * live — is read from its frontmatter via the `domain` computed field. Only add
 * `status` or `note` here for domains with no project behind them.
 */
export interface OwnedDomain {
  /** Bare domain, no protocol, no trailing slash. Matched against Project.domain. */
  name: string
  /** Only used when no project claims this domain. */
  status?: 'parked' | 'stopped'
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
  { name: 'brachotte.com', status: 'parked' },
  { name: 'soulether.com', status: 'parked' },
  { name: 'n8js.com', status: 'parked' },
]
