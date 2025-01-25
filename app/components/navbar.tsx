'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutGroup, motion } from 'framer-motion'
import { routes } from 'app/routes'
import { GithubIcon } from 'icons/Github'
import { BlueskyIcon } from 'icons/Bluesky'
import { Button } from '@/components/ui/button'
import { LINKS } from 'app/constants'

// Menu, Header
export default function Navbar() {
  let pathname = usePathname() || '/'

  if (pathname.includes(routes['/blog'].url)) {
    pathname = routes['/blog'].url
  }

  if (pathname.includes(routes['/projects'].url)) {
    pathname = routes['/projects'].url
  }

  return (
    <aside className="-ml-[8px] mb-12 tracking-tight">
      <div className="flex flex-row items-center justify-between lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto"
            id="nav"
          >
            <div className="flex flex-row flex-wrap space-x-0 pr-10">
              {Object.entries(routes).map(([path, { name }]) => {
                const isActive = path === pathname
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
                      {
                        'text-neutral-400': !isActive,
                      },
                    )}
                  >
                    <span className="relative px-2 py-1">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 top-7 z-[-1] mx-2 h-[3px] bg-gradient-purple bg-gradient-to-tr from-transparent to-gradient-pink"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 20,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                )
              })}
            </div>
          </nav>
        </LayoutGroup>
        <div className="flex flex-row justify-end gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href={LINKS.BLUESKY}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BlueskyIcon className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  )
}
