'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { DownloadIcon } from '@radix-ui/react-icons'

interface DownloadMarkdownButtonProps {
  markdownContent: string
  filename: string
}

export function DownloadMarkdownButton({
  markdownContent,
  filename,
}: DownloadMarkdownButtonProps) {
  function handleDownload() {
    const blob = new Blob([markdownContent], {
      type: 'text/markdown;charset=utf-8',
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename.endsWith('.mdx') ? filename : `${filename}.mdx`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <Button variant="outline" size="sm" onClick={handleDownload}>
      <DownloadIcon className="mr-2 h-4 w-4" />
      Download in Markdown
    </Button>
  )
}
