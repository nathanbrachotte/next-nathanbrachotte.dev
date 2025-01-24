import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import Balancer from 'react-wrap-balancer'

export function H1({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'pb-6 text-2xl font-bold tracking-tighter sm:text-3xl',
        className,
      )}
      {...props}
    >
      <Balancer>{children}</Balancer>
    </h1>
  )
}

export function H2({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'pb-2 text-xl font-bold tracking-tighter sm:text-2xl',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}
