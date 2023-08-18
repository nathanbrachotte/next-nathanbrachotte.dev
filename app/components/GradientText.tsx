import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export const GradientText = ({ children }: PropsWithChildren) => {
  return (
    <span
      className={twMerge(
        'mb-0 mt-0',
        'transition-all duration-300 ease-out',
        'text-transparent',
        'bg-gradient-to-r from-gradient-pink via-gradient-purple to-gradient-cyan bg-clip-text',
        'animate-text-gradient-background',
      )}
    >
      {children}
    </span>
  )
}
