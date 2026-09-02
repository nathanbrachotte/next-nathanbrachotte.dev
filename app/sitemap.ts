import { routes as allRoutes } from 'app/routes'
import { allProjects } from 'contentlayer/generated'
import { releasedBlogs } from 'helpers/posts'

export default async function sitemap() {
  const blogs = releasedBlogs.map((post) => ({
    url: `https://nathanbrachotte.dev/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  const projects = allProjects.map((post) => ({
    url: `https://nathanbrachotte.dev/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  const routes = ['', ...Object.keys(allRoutes)].map((route) => ({
    url: `https://nathanbrachotte.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...projects, ...blogs]
}
