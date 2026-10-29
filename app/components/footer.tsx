import Link from 'next/link'

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
        <a
          href="https://www.simpleanalytics.com?utm_source=nathanbrachotte.dev&utm_content=badge"
          referrerPolicy="origin"
          target="_blank"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- external badge SA checks for */}
          <img
            src="https://simpleanalyticsbadges.com/nathanbrachotte.dev?mode=dark&counter=false"
            alt="Simple Analytics"
            loading="lazy"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
          />
        </a>
        <span className="ml-auto">
          © {new Date().getFullYear()} Nathan Brachotte
        </span>
      </nav>
    </footer>
  )
}
