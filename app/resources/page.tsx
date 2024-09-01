import { allTips } from 'contentlayer/generated'
import { Mdx } from 'app/components/mdx'
import type { Metadata } from 'next'

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
      <h1 className="mb-8 text-3xl font-bold tracking-tighter">
        {resource?.[0]?.title || 'Resources (WIP 🏗️👷🏻‍♂️)'}
      </h1>
      {allTips.map((resource) => (
        <Mdx key={resource.slug} code={resource.body.code} tweets={[]} />
      ))}
    </section>
  )
}
