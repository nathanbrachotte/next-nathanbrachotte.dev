import 'server-only'

// import { google } from 'googleapis'
import { queryBuilder } from 'lib/planetscale'
import { cache } from 'react'

// const googleAuth = new google.auth.GoogleAuth({
//   credentials: {
//     client_email: process.env.GOOGLE_CLIENT_EMAIL,
//     private_key: process.env.GOOGLE_PRIVATE_KEY,
//   },
//   scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
// })

// const youtube = google.youtube({
//   version: 'v3',
//   auth: googleAuth,
// })

export const getBlogViews = cache(async () => {
  if (!process.env.DATABASE_HOST) {
    return 0
  }

  try {
    const data = await queryBuilder
      .selectFrom('views')
      .select(['count'])
      .execute()

    return data.reduce((acc, curr) => acc + Number(curr.count), 0)
  } catch (error) {
    console.error({ error })
    return null
  }
})

export const getViewsCount = cache(async () => {
  try {
    return await queryBuilder
      .selectFrom('views')
      .select(['slug', 'count'])
      .execute()
  } catch (error) {
    console.error({ error })
    return []
  }
})

// export const getLeeYouTubeSubs = cache(async () => {
//   const response = await youtube.channels.list({
//     id: ['UCZMli3czZnd1uoc1ShTouQw'],
//     part: ['statistics'],
//   })

//   let channel = response.data.items![0]
//   return Number(channel?.statistics?.subscriberCount)
// })

// export const getVercelYouTubeSubs = cache(async () => {
//   const response = await youtube.channels.list({
//     id: ['UCLq8gNoee7oXM7MvTdjyQvA'],
//     part: ['statistics'],
//   })

//   let channel = response.data.items![0]
//   return Number(channel?.statistics?.subscriberCount)
// })
