import * as React from 'react'
import { MdxLink } from 'app/components/MdxLink'
import {
  startupDirectoryCategories,
  type StartupDirectoryCategory,
} from 'app/data/startup-directories'

interface StartupDirectoriesProps {
  /** Render a single category without its heading. Omit to render them all. */
  category?: string
}

/**
 * Lists the shared startup promotion sites from app/data/startup-directories.ts
 * so the blog post and the bookmarks page never drift apart.
 */
export function StartupDirectories({ category }: StartupDirectoriesProps) {
  if (category) {
    const match = startupDirectoryCategories.find(({ id }) => id === category)
    if (!match) {
      throw new Error(`Unknown startup directory category: ${category}`)
    }
    return <DirectoryList category={match} />
  }

  return (
    <>
      {startupDirectoryCategories.map((item) => (
        <React.Fragment key={item.id}>
          <h4>{item.title}</h4>
          <DirectoryList category={item} />
        </React.Fragment>
      ))}
    </>
  )
}

function DirectoryList({ category }: { category: StartupDirectoryCategory }) {
  return (
    <ul>
      {category.directories.map(({ name, url, note }) => (
        <li key={url}>
          <MdxLink href={url}>{name}</MdxLink>
          {note ? ` - ${note}` : null}
        </li>
      ))}
    </ul>
  )
}
