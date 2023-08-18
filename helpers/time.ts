const AVERAGE_LINE_PER_MINUTE_READ = 600 // Very arbitrary since we don't get "words" but

export function getTimePerPost(body: string) {
  return `📖 ${Math.ceil(body.length / AVERAGE_LINE_PER_MINUTE_READ)} min read`
}
