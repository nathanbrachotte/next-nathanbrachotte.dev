import { increment } from 'app/actions'
import { ViewsCount } from 'lib/metrics'

export default function ViewCounter({
  slug,
  allViews,
  trackView,
}: {
  slug: string
  allViews: ViewsCount
  trackView?: boolean
}) {
  const viewsForSlug = allViews && allViews.find((view) => view.slug === slug)
  console.log({ slug, allViews, viewsForSlug })

  if (trackView) {
    increment(slug)
  }

  if (!viewsForSlug?.count) {
    return null
  }

  const number = new Number(
    trackView ? viewsForSlug.count + 1 : viewsForSlug.count,
  )

  return (
    <span className="text-neutral-400">
      {`👀 ${number.toLocaleString()} views`}
    </span>
  )
}
