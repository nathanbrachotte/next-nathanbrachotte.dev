import { allTips } from 'contentlayer/generated'
import { Mdx } from 'app/components/mdx'
import type { Metadata } from 'next'
import { H1 } from 'app/components/Typography'

export async function generateMetadata(): Promise<Metadata> {
  const resource = allTips[0]
  if (!resource) {
    return {}
  }

  return {
    title: resource.title,
    description: resource.description,
  }
}

export default function ResourcesPage() {
  const resource = allTips[0]

  return (
    <section>
      <H1>{resource?.[0]?.title}</H1>
      {allTips.map((resource) => (
        <Mdx key={resource.slug} code={resource.body.code} tweets={[]} />
      ))}
    </section>
  )
}
