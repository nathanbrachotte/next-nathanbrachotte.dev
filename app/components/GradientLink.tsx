import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export const GradientLink = ({
  children,
  href,
  className,
  ...props
}: React.PropsWithChildren<
  React.ComponentPropsWithoutRef<'a'> & { href: string }
>) => {
  return (
    <Link
      href={href}
      className={twMerge(
        'mb-0 mt-0 font-bold underline hover:text-transparent',
        'animate-text-gradient-background cursor-pointer bg-gradient-to-r from-gradient-cyan to-gradient-blue bg-clip-text text-gradient-blue decoration-gradient-blue decoration-[0.1em] underline-offset-2 transition-all visited:text-cyan-300 visited:decoration-cyan-300 hover:text-transparent hover:decoration-gradient-cyan',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
