const AVERAGE_LETTERS_PER_MINUTE_READ = 1000 // Very arbitrary since we don't get "words" but

export function getTimePerPost(body: string) {
  return `📖 ${Math.ceil(
    body.length / AVERAGE_LETTERS_PER_MINUTE_READ,
  )} min read`
}
