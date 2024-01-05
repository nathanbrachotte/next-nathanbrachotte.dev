import { formatDistanceToNow } from 'date-fns'

export function getDateWithDistance(date: string) {
  const targetDate = new Date(date)

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return `${fullDate} (${formatDistanceToNow(targetDate)} ago)`
}
