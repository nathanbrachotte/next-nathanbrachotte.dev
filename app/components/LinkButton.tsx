import clsx from 'clsx'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export const ctaButtonClassName = [
  'flex flex-row items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-neon',
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  'animate-text-gradient-background bg-gradient-to-r from-gradient-purple to-gradient-pink',
  'transition-all hover:scale-105',
  'active:scale-95',
].join(' ')

export function LinkButton({
  children,
  href,
  className,
}: PropsWithChildren<{ href: string; className?: string }>) {
  return (
    <Link href={href} className={clsx(ctaButtonClassName, className)}>
      {children}
    </Link>
  )
}
