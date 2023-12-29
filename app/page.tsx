import { Badges } from 'app/components/Badges'
import { GradientLink } from 'app/components/GradientLink'
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
        I'm Nathan (
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
        ), Senior Full Stack Software Engineer with 5+ years of experience, I
        specialize in <Badges.React />
        , <Badges.ReactNative /> & <Badges.Node /> frameworks.
        <div className="pt-4">
          <Image
            alt="picture of me"
            src="/images/nate.webp"
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
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
          at heart,I've helped many companies build great team culture and craft
          high-performance, customer-centric, well-architected apps. Always
          aiming for that ✨ <GradientText>UI & UX extra touch</GradientText> ✨
        </p>
        <p>Some facts about me:</p>
        <ul>
          <li>🚀 Passionate about building world-class products.</li>
          <li>
            ✍️ Love to share my passion for engineering through{' '}
            <GradientLink href={'/blog'}>my blog</GradientLink>, also{' '}
            <GradientLink href="/blog/put-a-cherry-on-top">
              gave a talk
            </GradientLink>{' '}
            at Klarna KonferenSE20.
          </li>
          <li>
            ☁️{' '}
            <GradientLink href="https://www.credly.com/badges/91e5da96-297c-418a-a8a4-789df7fecdbf/public_url">
              AWS Certified Cloud Practitioner
            </GradientLink>
          </li>
          <li>
            <div className="mb-2 flex flex-wrap space-x-2">
              <span className="mb-1">🛠 Tech Stack:</span>
              <Badges.TypeScript />
              <Badges.JavaScript />
              <Badges.React />
              <Badges.ReactNative />
              <Badges.AWS />
              <Badges.Next />
              <span className="mb-1">
                <Badges.Node />
              </span>
              <Badges.Nest />
              <Badges.Express />
              <Badges.Prisma />
              <Badges.Postgre />
              <Badges.Tailwind />
              <span>& much more!</span>
            </div>
          </li>
        </ul>
        {/* // TODO: Scroll animation (https://www.framer.com/motion/scroll-animations/) */}
        <p>
          <span className="font-bold">Want to know more about me?</span> Here is
          my{' '}
          <GradientLink href="https://docs.google.com/document/d/1_bO2q6WnJVjbryx6EF0J4qjppmmwAWXUYl1kryGPpiY">
            my resume
          </GradientLink>
          . <span className="font-bold">Want to work with me?</span> 🤝 Please{' '}
          <Link
            href={'mailto:hey+nate@nathanbrachotte.dev'}
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
        <p></p>
        <p>
          <span className="font-bold">Still unsure?</span> Maybe these{' '}
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
