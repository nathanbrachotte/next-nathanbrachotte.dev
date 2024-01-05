import { GradientText } from 'app/components/GradientText'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export const NateDescription = () => {
  return (
    <p>
      I'm a{' '}
      <Link
        href={'https://posthog.com/blog/what-is-a-product-engineer'}
        className={twMerge(
          'mb-0 mt-0 font-bold underline hover:text-transparent',
          'animate-text-gradient-background cursor-pointer bg-gradient-to-r from-gradient-cyan to-gradient-blue bg-clip-text text-gradient-blue decoration-gradient-blue decoration-[0.1em] underline-offset-2 transition-all visited:text-cyan-300 visited:decoration-cyan-300 hover:text-transparent hover:decoration-gradient-cyan',
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        Product Engineer
      </Link>{' '}
      at heart, I've helped many companies build great team culture and craft
      high-performance, customer-centric, well-architected apps.
      <br />✨{' '}
      <GradientText>Always aiming for that UI & UX extra touch</GradientText> ✨
    </p>
  )
}
