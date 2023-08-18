// import 'server-only' not working with API routes yet
import { Generated, Kysely } from 'kysely'
import { PlanetScaleDialect } from 'kysely-planetscale'

interface CommentsTable {
  id: Generated<number>
  name: string
  body: string
  created_by: string
}

interface ViewsTable {
  slug: string
  count: number
}

interface Database {
  comments: CommentsTable
  views: ViewsTable
}

console.log({ url: process.env.DATABASE_URL })
export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
})
