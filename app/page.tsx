import { Badges } from 'app/components/Badges'
import { GradientText } from 'app/components/GradientText'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-bold tracking-tighter">Hey there 👋</h1>
      <span className="prose prose-invert">
        I'm Nate (
        <Link
          href={'https://github.com/nathanbrachotte'}
          className="text-blue-500 dark:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          @N8
        </Link>
        ), a Senior <Badges.TypeScript /> Engineer specializing in{' '}
        <Badges.React />
        , <Badges.ReactNative /> & <Badges.Node /> frameworks.
        <div className="pt-8">
          <Image
            alt="A photo of me"
            src={'/images/avatar.png'}
            className="mb-8 flex-grow-0 rounded-full bg-gradient-pink bg-gradient-to-tr from-transparent to-gradient-purple"
            width={128}
            height={128}
          />
        </div>
        <p>
          My main focus is to consistently deliver the best value to my clients
          while delivering high-quality, scalable software. I'm now working as a
          contractors, helping companies and teams elevate their web and mobile
          apps to the next level.
        </p>
        <p>
          {/* // TODO: Scroll animation (https://www.framer.com/motion/scroll-animations/) */}
          ✨{' '}
          <GradientText>
            Always with a touch of extra delightful UI & UX.
          </GradientText>{' '}
          ✨
        </p>
        <p>
          Want to work with me? Please{' '}
          <Link
            href={'mailto:hey@nathanbrachotte.dev'}
            className={twMerge(
              'mb-0 mt-0 font-bold underline hover:text-transparent',
              'animate-text-gradient-background bg-gradient-to-r from-gradient-blue to-gradient-cyan bg-clip-text transition-all duration-300 ease-out',
            )}
          >
            reach out by email
          </Link>{' '}
          or on{' '}
          <Link
            href={'https://www.linkedin.com/in/nathan-brachotte/'}
            className={twMerge(
              'mb-0 mt-0 font-bold underline hover:text-transparent',
              'animate-text-gradient-background bg-gradient-to-r from-gradient-blue to-gradient-cyan bg-clip-text transition-all duration-300 ease-out',
            )}
          >
            Linkedin
          </Link>
        </p>
        <p>
          Still unsure? Maybe these{' '}
          <Link
            href={'/testimonials'}
            className={twMerge(
              'mb-0 mt-0 font-bold underline hover:text-transparent',
              'animate-text-gradient-background bg-gradient-to-r from-gradient-blue to-gradient-cyan bg-clip-text transition-all duration-300 ease-out',
            )}
          >
            recommendations
          </Link>{' '}
          from my past clients and coworkers will give you a better idea of what
          I could bring to your team 😊
        </p>
      </span>
    </section>
  )
}
