import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { transformerCopyButton } from '@rehype-pretty/transformers'

// Every content type lives under a folder that matches its route, so
// `flattenedPath` is already the full path ("blog/my-post", "projects/klarna").
// Prefixing it again is what pointed every post's structured data at a 404.
const SITE_URL = 'https://nathanbrachotte.dev'

const pageUrl = (doc) => `${SITE_URL}/${doc._raw.flattenedPath}`

const ogImage = (doc) =>
  doc.image
    ? `${SITE_URL}${doc.image}`
    : `${SITE_URL}/og?title=${encodeURIComponent(doc.title)}`

const author = {
  '@type': 'Person',
  name: 'Nathan Brachotte',
  url: SITE_URL,
}

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  tweetIds: {
    type: 'array',
    resolve: (doc) => {
      const tweetMatches = doc.body.raw.match(/<StaticTweet\sid="[0-9]+"\s\/>/g)
      return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || []
    },
  },
}

/** @type {import('contentlayer/source-files').ComputedFields} */
const blogComputedFields = {
  ...computedFields,
  structuredData: {
    type: 'object',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: doc.title,
      datePublished: doc.publishedAt,
      // No updated date is tracked in frontmatter yet, so this carries no
      // freshness signal beyond the publish date.
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: ogImage(doc),
      url: pageUrl(doc),
      mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl(doc) },
      author,
    }),
  },
}

/** @type {import('contentlayer/source-files').ComputedFields} */
const projectComputedFields = {
  ...computedFields,
  structuredData: {
    type: 'object',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
      // A portfolio write-up, not an article. SoftwareApplication would need
      // applicationCategory and operatingSystem, which aren't in frontmatter.
      '@type': 'CreativeWork',
      name: doc.title,
      datePublished: doc.publishedAt,
      description: doc.summary,
      image: ogImage(doc),
      url: pageUrl(doc),
      mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl(doc) },
      author,
    }),
  },
}

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/blog/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
    },
    draft: {
      type: 'boolean',
    },
    mediumLink: {
      type: 'string',
    },
  },
  computedFields: blogComputedFields,
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: true,
    },
    missions: {
      type: 'list',
      of: { type: 'string' },
    },
    tools: {
      type: 'list',
      of: { type: 'string' },
    },
    projectUrl: {
      type: 'string',
    },
    repoUrl: {
      type: 'string',
    },
    appleStoreUrl: {
      type: 'string',
    },
    playStoreUrl: {
      type: 'string',
    },
    isOpenSource: {
      type: 'boolean',
    },
    isSideProject: {
      type: 'boolean',
    },
    status: {
      type: 'enum',
      options: ['live', 'wip', 'abandoned'],
    },
    projectType: {
      type: 'enum',
      options: ['app', 'library'],
    },
    analytics: {
      type: 'string',
    },
  },
  computedFields: projectComputedFields,
}))

export const Tips = defineDocumentType(() => ({
  name: 'Tips',
  filePathPattern: `**/tips/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}))

export const Bookmarks = defineDocumentType(() => ({
  name: 'Bookmarks',
  filePathPattern: `**/bookmarks.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}))

export const Snippets = defineDocumentType(() => ({
  name: 'Snippets',
  filePathPattern: `**/snippets.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}))

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'dracula',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node) {
    if (!node.properties.className) {
      node.properties.className = ['line--highlighted']
    }
    node.properties.className.push('line--highlighted')
  },
  keepBackground: false,
  // Add these options for the copy button
  filterMetaString: (string) => string.replace(/copy/i, ''),
  // You can customize the copy button text here
  copyButtonText: 'Copy',
  copyButtonSuccessText: 'Copied!',
}

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog, Project, Tips, Bookmarks, Snippets],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, options],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})
