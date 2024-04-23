import { increment } from 'app/actions'
import { getViewsCount } from 'lib/metrics'

export default function ViewCounter({
  slug,
  allViews,
  trackView,
}: {
  slug: string
  allViews: Awaited<ReturnType<typeof getViewsCount>>
  trackView?: boolean
}) {
  const viewsForSlug = allViews && allViews.find((view) => view.slug === slug)

  if (trackView) {
    increment(slug)
  }

  if (!viewsForSlug?.count) {
    return null
  }

  const number = new Number(viewsForSlug.count)

  return (
    <span className="text-neutral-400">
      {`👀 ${number.toLocaleString()} views`}
    </span>
  )
}
