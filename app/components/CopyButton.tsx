'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckIcon, ClipboardCopyIcon } from '@radix-ui/react-icons'
import { motion, AnimatePresence } from 'framer-motion'

interface CopyButtonProps {
  content: string
}

export function CopyButton({ content }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      onClick={handleCopy}
      variant="outline"
      size="sm"
      disabled={copied}
      className="hover:bg-slate-700 disabled:bg-slate-800 disabled:opacity-100"
    >
      <AnimatePresence initial={false} mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.1 }}
          >
            <CheckIcon />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.1 }}
          >
            <ClipboardCopyIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  )
}
