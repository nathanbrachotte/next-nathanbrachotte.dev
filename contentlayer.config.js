import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { transformerCopyButton } from '@rehype-pretty/transformers'

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
  structuredData: {
    type: 'object',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image
        ? `https://nathanbrachotte.dev${doc.image}`
        : `https://nathanbrachotte.dev/og?title=${doc.title}`,
      url: `https://nathanbrachotte.dev/blog/${doc._raw.flattenedPath}`,
      author: {
        '@type': 'Person',
        name: 'Nathan Brachotte',
      },
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
  computedFields,
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
    isSideProject: {
      type: 'boolean',
    },
    status: {
      type: 'enum',
      options: ['live', 'work-in-progress', 'abandoned'],
    },
    analytics: {
      type: 'string',
    },
  },
  computedFields,
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
