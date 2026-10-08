'use client'

import Script from 'next/script'
import React from 'react'

export interface FollowTwitterButtonProps {}

export const FollowTwitterButton = ({}: FollowTwitterButtonProps) => {
  return (
    <>
      <a
        className="twitter-follow-button"
        href="https://twitter.com/nathanbrachotte"
        data-size="large"
      >
        Follow @nathanbrachotte
      </a>
      <Script src="https://platform.twitter.com/widgets.js" />
    </>
  )
}
