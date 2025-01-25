import { allSnippets } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '../components/mdx'
import { H1 } from 'app/components/Typography'

const snippets = allSnippets[0]

export const metadata = {
  title: snippets.title,
  description: snippets.description,
}

export default function SnippetsPage() {
  if (!snippets) {
    notFound()
  }

  return (
    <div>
      <div className="flex flex-col items-start">
        <H1>{snippets.title}</H1>
        <p className="text-xl text-muted-foreground">{snippets.description}</p>

        <hr className="mt-8 w-full border-border" />
        <Mdx code={snippets.body.code} />
      </div>
    </div>
  )
}
