'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useId, useState } from 'react'

const easeOut = [0.22, 1, 0.36, 1] as const

// Fades and slides content in once it scrolls into view
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

// Header button that smoothly expands and collapses its content
export function Disclosure({
  header,
  children,
  className,
  openClassName,
  headerClassName,
  iconClassName,
}: {
  header: React.ReactNode
  children: React.ReactNode
  className?: string
  openClassName?: string
  headerClassName?: string
  iconClassName?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = useId()

  return (
    <div className={`${className ?? ''} ${isOpen ? openClassName ?? '' : ''}`}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((wasOpen) => !wasOpen)}
        className={`flex w-full items-start justify-between gap-4 text-left ${
          headerClassName ?? ''
        }`}
      >
        {header}
        <motion.span
          aria-hidden
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: easeOut }}
          className={`text-xl leading-none ${iconClassName ?? ''}`}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={contentId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
