import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Tweet from './tweet'
import { Badges } from 'app/components/Badges'
import clsx from 'clsx'

const CustomLink = (props) => {
  const href = props.href
  const className =
    'animate-text-gradient-background cursor-pointer bg-gradient-to-r from-gradient-cyan to-gradient-blue bg-clip-text text-gradient-blue decoration-gradient-blue decoration-[0.1em] underline-offset-2 transition-all visited:text-gradient-pink visited:decoration-gradient-pink hover:text-transparent hover:decoration-gradient-cyan'

  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} className={className} />
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    />
  )
}

// TODO: Optimize image size
function RoundedImage(props) {
  return (
    <div className={clsx('relative aspect-video rounded-lg', props?.className)}>
      <Image
        alt={props.alt}
        fill
        style={{
          objectFit: 'cover',
        }}
        className={'rounded-lg object-cover object-top'}
        src={props.src}
        priority={props.priority}
      />
    </div>
  )
}

function Callout(props) {
  return (
    <div className="mb-8 flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-4 py-3 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
      <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
      <div className="callout w-full">{props.children}</div>
    </div>
  )
}

function ProsCard({ title, pros }) {
  return (
    <div className="my-4 w-full rounded-xl border border-emerald-200 bg-neutral-50 p-6 dark:border-emerald-900 dark:bg-neutral-900">
      <span>{`You might use ${title} if...`}</span>
      <div className="mt-4">
        {pros.map((pro) => (
          <div key={pro} className="mb-2 flex items-baseline font-medium">
            <div className="mr-2 h-4 w-4">
              <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ConsCard({ title, cons }) {
  return (
    <div className="my-6 w-full rounded-xl border border-red-200 bg-neutral-50 p-6 dark:border-red-900 dark:bg-neutral-900">
      <span>{`You might not use ${title} if...`}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="mb-2 flex items-baseline font-medium">
            <div className="mr-2 h-4 w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-red-500"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// TODO: Implement Image gallery with cloudinary: https://github.com/vercel/next.js/blob/canary/examples/with-cloudinary/pages/p/%5BphotoId%5D.tsx
// https://cloudinary.com/pricing
const components = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard,
  Badges,
}

interface MdxProps {
  code: string
  tweets: Record<string, any>
}

export function Mdx({ code, tweets }: MdxProps) {
  const Component = useMDXComponent(code)
  const StaticTweet = ({ id }) => {
    const tweet = tweets.find((tweet) => tweet.id === id)
    return <Tweet {...tweet} />
  }

  return (
    <article className="prose prose-neutral prose-quoteless dark:prose-invert">
      <Component components={{ ...components, StaticTweet }} />
    </article>
  )
}
