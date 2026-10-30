import Link from 'next/link'
import { simpleAnalyticsCredit } from './simpleAnalyticsCredit'

// Deliberately not in the navbar: these are personal-admin pages, not content.
const footerLinks = [{ href: '/domains', name: 'Domains' }]

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border pt-6 text-sm text-neutral-500">
      <nav className="flex flex-row flex-wrap items-center gap-4">
        {footerLinks.map(({ href, name }) => (
          <Link
            key={href}
            href={href}
            className="transition-colors hover:text-neutral-300"
          >
            {name}
          </Link>
        ))}
        {/* Required to stay on the Simple Analytics free plan */}
        <div
          className="text-xs"
          dangerouslySetInnerHTML={{ __html: simpleAnalyticsCredit }}
        />
        <span className="ml-auto">
          © {new Date().getFullYear()} Nathan Brachotte
        </span>
      </nav>
    </footer>
  )
}
