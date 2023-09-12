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
      <div className="prose prose-invert">
        I'm Nate (
        <Link
          href={'https://github.com/nathanbrachotte'}
          className={twMerge(
            'mb-0 mt-0 font-bold underline hover:text-transparent',
            'animate-text-gradient-background cursor-pointer bg-gradient-to-r from-gradient-cyan to-gradient-blue bg-clip-text text-gradient-blue decoration-gradient-blue decoration-[0.1em] underline-offset-2 transition-all visited:text-cyan-300 visited:decoration-cyan-300 hover:text-transparent hover:decoration-gradient-cyan',
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          @N8
        </Link>
        ), a Senior Software Engineer specializing in <Badges.React />
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
          My main focus is consistently delivering the best value to my clients
          while delivering high-quality, scalable software.{' '}
          <span className="font-bold">I'm a contractor</span>, helping companies
          and teams elevate their web and mobile apps to the next level.
          <br /> ✨{' '}
          <GradientText>
            Always with a touch of extra delightful UI & UX.
          </GradientText>{' '}
          ✨
        </p>
        <p>
          {/* // TODO: Scroll animation (https://www.framer.com/motion/scroll-animations/) */}
        </p>
        <p>
          Want to work with me? Please{' '}
          <Link
            href={'mailto:hey@nathanbrachotte.dev'}
            className={twMerge(
              'mb-0 mt-0 font-bold underline hover:text-transparent',
              'animate-text-gradient-background cursor-pointer bg-gradient-to-r from-gradient-cyan to-gradient-blue bg-clip-text text-gradient-blue decoration-gradient-blue decoration-[0.1em] underline-offset-2 transition-all visited:text-cyan-300 visited:decoration-cyan-300 hover:text-transparent hover:decoration-gradient-cyan',
            )}
          >
            reach out by email
          </Link>{' '}
          or on{' '}
          <Link
            href={'https://www.linkedin.com/in/nathan-brachotte/'}
            className={twMerge(
              'mb-0 mt-0 font-bold underline hover:text-transparent',
              'animate-text-gradient-background cursor-pointer bg-gradient-to-r from-gradient-cyan to-gradient-blue bg-clip-text text-gradient-blue decoration-gradient-blue decoration-[0.1em] underline-offset-2 transition-all visited:text-cyan-300 visited:decoration-cyan-300 hover:text-transparent hover:decoration-gradient-cyan',
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
              'animate-text-gradient-background cursor-pointer bg-gradient-to-r from-gradient-cyan to-gradient-blue bg-clip-text text-gradient-blue decoration-gradient-blue decoration-[0.1em] underline-offset-2 transition-all visited:text-cyan-300 visited:decoration-cyan-300 hover:text-transparent hover:decoration-gradient-cyan',
            )}
          >
            recommendations
          </Link>{' '}
          from my past clients and coworkers will give you a better idea of what
          I could bring to your team 😊
        </p>
      </div>
    </section>
  )
}
