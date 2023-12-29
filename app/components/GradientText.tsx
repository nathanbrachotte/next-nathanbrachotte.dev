import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'

export const GradientText = ({ children }: PropsWithChildren) => {
  return (
    <span
      className={cn(
        'mb-0 mt-0',
        'duration-[1500] transition-all ease-linear',
        'text-transparent',
        'bg-gradient-to-r from-gradient-pink via-gradient-purple to-gradient-cyan bg-clip-text',
        'animate-text-gradient-background',
      )}
    >
      {children}
    </span>
  )
}
