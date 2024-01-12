export function getBaseUrl() {
  console.log({ VERCEL_URL: process.env.VERCEL_URL })
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export function getProductionUrl() {
  return `https://${process.env.VERCEL_URL}`
}
