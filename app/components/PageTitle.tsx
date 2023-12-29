import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import Balancer from 'react-wrap-balancer'

export function PageTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn('pb-6 text-2xl font-bold tracking-tighter', className)}
      {...props}
    >
      <Balancer>{children}</Balancer>
    </h1>
  )
}
