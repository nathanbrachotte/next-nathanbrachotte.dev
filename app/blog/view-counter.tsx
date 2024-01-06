import { increment } from 'app/actions'

export default function ViewCounter({
  slug,
  allViews,
  trackView,
}: {
  slug: string
  allViews: {
    slug: string
    count: number
  }[]
  trackView?: boolean
}) {
  const viewsForSlug = allViews && allViews.find((view) => view.slug === slug)

  const number = new Number(viewsForSlug?.count || 0)

  if (trackView) {
    increment(slug)
  }

  if (!viewsForSlug?.count) {
    return null
  }

  return (
    <span className="text-neutral-400">
      dsa
      {`👀 ${number.toLocaleString()} views`}
    </span>
  )
}
