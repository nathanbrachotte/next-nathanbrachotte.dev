'use client'

import clsx from 'clsx'
import { useCallback, useState } from 'react'
import { toast } from 'sonner'

import { ctaButtonClassName } from './LinkButton'

interface CopyEmailCtaProps {
  email?: string
  label?: string
  className?: string
}

const DEFAULT_EMAIL = 'hey+nate@nathanbrachotte.dev'

export function CopyEmailCta({
  email = DEFAULT_EMAIL,
  label = "Let's work together",
  className,
}: CopyEmailCtaProps) {
  const [isCopying, setIsCopying] = useState(false)

  const handleCopy = useCallback(async () => {
    if (isCopying) return
    setIsCopying(true)

    try {
      if (!navigator?.clipboard?.writeText) {
        throw new Error('Clipboard API unavailable')
      }

      await navigator.clipboard.writeText(email)
      toast.success('Email copied to clipboard 🎉')
    } catch (error) {
      console.error('Failed to copy email', error)
      toast.error('Copy failed, opening email app…')
      window.location.href = `mailto:${email}`
    } finally {
      setIsCopying(false)
    }
  }, [email, isCopying])

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={isCopying}
      className={clsx(
        ctaButtonClassName,
        'disabled:cursor-not-allowed disabled:opacity-80',
        className,
      )}
      aria-label="Copy email address to clipboard"
    >
      {label}
    </button>
  )
}
