import type { Metadata } from 'next'
import { allBlogs } from 'contentlayer/generated'
import { parseISO, format } from 'date-fns'
import { getViewsCount } from 'lib/metrics'
import { H1, H2 } from 'app/components/PageTitle'

export const metadata: Metadata = {
  title: 'N8 - Resources',
  description:
    'A place for all values resources I find and want to keep track of',
}

export default async function BlogPage() {
  return (
    <section>
      <H1>{metadata.description}</H1>
      <H2>Links</H2>
      <H2>Resources</H2>
      <h3>Startup</h3>
      <p>https://youform.com/pricing/</p>
      <H2>Typescript Goodies</H2>
      React type: PropsWithChildren
      <H2>Tips</H2>
      Github -{'>'} .dev = editor
    </section>
  )
}
