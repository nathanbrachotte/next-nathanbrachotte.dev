import { allSnippets } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '../components/mdx'
import { H1 } from 'app/components/Typography'

export const metadata = {
  title: 'Snippets',
  description:
    'A collection of useful React, TypeScript, and Next.js code snippets and type definitions',
}

export default function SnippetsPage() {
  const snippets = allSnippets[0]

  if (!snippets) {
    notFound()
  }

  return (
    <section className="container max-w-3xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <H1>{snippets.title}</H1>
          <p className="text-xl text-muted-foreground">
            {snippets.description}
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <Mdx code={snippets.body.code} />
    </section>
  )
}
