import * as React from 'react'
import { cn } from '@/lib/utils'

interface CollapsibleProps {
  /** Shown on the always-visible summary line */
  title: string
  /** Optional one-liner rendered next to the title */
  subtitle?: string
  /** Link to the original source of the content */
  source?: string
  /** Human-readable label for the source (defaults to "Source") */
  sourceLabel?: string
  children: React.ReactNode
}

/**
 * Native <details> disclosure, collapsed by default.
 * Server-component friendly, no JS needed.
 */
export function Collapsible({
  title,
  subtitle,
  source,
  sourceLabel = 'Source',
  children,
}: CollapsibleProps) {
  return (
    <details className="group/collapsible my-4 overflow-hidden rounded-lg border border-border bg-muted/20">
      <summary
        className={cn(
          'not-prose flex cursor-pointer list-none items-center gap-3 px-4 py-3',
          'transition-colors hover:bg-muted/40',
          '[&::-webkit-details-marker]:hidden',
        )}
      >
        <svg
          className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open/collapsible:rotate-90"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
        <span className="font-medium">{title}</span>
        {subtitle ? (
          <span className="text-sm text-muted-foreground">{subtitle}</span>
        ) : null}
      </summary>

      <div className="border-t border-border px-4 pb-4 pt-2">
        {source ? (
          <p className="not-prose mb-3 mt-2 text-sm text-muted-foreground">
            {`${sourceLabel}: `}
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient-blue underline decoration-gradient-blue decoration-[0.1em] underline-offset-2 transition-colors hover:text-gradient-cyan hover:decoration-gradient-cyan"
            >
              {source.replace(/^https?:\/\//, '')}
            </a>
          </p>
        ) : null}
        {children}
      </div>
    </details>
  )
}
