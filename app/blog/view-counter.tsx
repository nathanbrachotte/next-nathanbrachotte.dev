import { increment } from 'app/actions'
import { ViewsCount } from 'lib/metrics'

export default function ViewCounter({
  slug,
  allViews,
  trackView,
  viewCount,
}: {
  slug: string
  allViews?: ViewsCount
  trackView?: boolean
  viewCount?: number | null
}) {
  // If passing a view count, we don't need to find it in allViews
  const viewsForSlug =
    viewCount ||
    (allViews && allViews.find((view) => view.slug === slug)?.count)

  if (trackView) {
    increment(slug)
  }

  if (viewsForSlug == null) {
    return null
  }

  // If we trackView, we incremented the DB so we need to add 1 to the count when displaying it
  const number = new Number(trackView ? viewsForSlug + 1 : viewsForSlug)

  return (
    <span className="text-neutral-400">
      {`👀 ${number.toLocaleString()} views`}
    </span>
  )
}
