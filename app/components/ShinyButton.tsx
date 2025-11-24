import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ShinyButtonProps {
  href: string
  children: ReactNode
  className?: string
  target?: string
}

export function ShinyButton({
  href,
  children,
  className,
  target,
}: ShinyButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        'group relative overflow-hidden rounded-full border border-white/10 bg-background px-6 py-2 transition-all hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(255,255,255,0.1)]',
        className,
      )}
    >
      <Link href={href} target={target}>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:animate-shine group-hover:opacity-100" />
        <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
          {children}
        </span>
      </Link>
    </Button>
  )
}
