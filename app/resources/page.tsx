import type { Metadata } from 'next'
import { allBlogs } from 'contentlayer/generated'
import { parseISO, format } from 'date-fns'
import { getViewsCount } from 'lib/metrics'
import { H1 } from 'app/components/PageTitle'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Things I find great and want to share to the world',
}

export default async function BlogPage() {
  const allViews = await getViewsCount()

  return (
    <section>
      <H1>{metadata.description}</H1>
      React type: PropsWithChildren
    </section>
  )
}
