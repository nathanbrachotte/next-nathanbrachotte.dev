import { GradientLink } from 'app/components/GradientLink'
import React from 'react'

//! FIXME: https://github.com/vercel/next.js/issues/43704#issuecomment-1355372371
export const TwitterButton = ({
  title,
  slug,
}: {
  title: string
  slug: string
}) => {
  return (
    <GradientLink
      href={`https://twitter.com/intent/tweet?${new URLSearchParams({
        url: 'nathanbrachotte.dev/' + slug,
        text: `I just read "${title}" written by @nathanbrachotte`,
      })}`}
    >
      Tweet this article
    </GradientLink>
  )
}
