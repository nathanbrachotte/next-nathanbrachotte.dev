import { routes as allRoutes } from 'app/routes'
import { allBlogs, allProjects } from 'contentlayer/generated'

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://nathanbrachotte.dev/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  const projects = allProjects.map((post) => ({
    url: `https://nathanbrachotte.dev/projects/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  const routes = ['', ...Object.keys(allRoutes)].map((route) => ({
    url: `https://nathanbrachotte.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...projects, ...blogs]
}
