import * as Badges from 'app/components/Badges'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  console.log({ Badges })
  return (
    <section>
      <h1 className="mb-8 text-2xl font-bold tracking-tighter">Hey there 👋</h1>
      <p className="prose prose-neutral dark:prose-invert">
        I'm Nathan (
        <Link
          href={'https://github.com/nathanbrachotte'}
          className="text-blue-500 dark:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          @N8
        </Link>
        ), a Full Stack Software Engineer specializing in <Badges.ReactBadge />{' '}
        & <Badges.ReactNativeBadge />.
      </p>
      <Image
        alt="A photo of me"
        src={'/images/avatar.png'}
        className="h-40 w-40 flex-grow-0 rounded-full bg-gradient-pink bg-gradient-to-tr from-transparent to-gradient-purple"
        width={1024}
        height={1024}
      />
      <p>
        My main focus is to consistently deliver the best value to my clients
        while delivering high-quality, scalable software. I'm now working as a
        Freelance, helping people & companies turn their ideas into mobile apps
        and websites with delightful UI & UX.
      </p>
      <div className="h-10 w-10 bg-gradient-purple bg-gradient-to-tr from-transparent to-gradient-pink"></div>
      <div className="h-10 w-10 bg-gradient-orange bg-gradient-to-tr from-transparent to-gradient-yellow"></div>
      <div className="h-10 w-10 bg-gradient-blue bg-gradient-to-tr from-transparent to-gradient-cyan"></div>
      <div className="space-x-2">
        {Object.values(Badges).map((BadgeComponent, index) => {
          // Ensure BadgeComponent is a valid React component
          if (React.isValidElement(<BadgeComponent />)) {
            return <BadgeComponent key={index} />
          }
          return null
        })}
      </div>
    </section>
  )
}
