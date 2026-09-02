import * as React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface CollapsibleProps {
  /** Shown on the always-visible trigger line */
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
 * Single-item accordion for MDX, collapsed by default.
 * Wraps the shadcn/ui accordion so content files stay declarative.
 */
export function Collapsible({
  title,
  subtitle,
  source,
  sourceLabel = 'Source',
  children,
}: CollapsibleProps) {
  // The [&_h3] resets undo prose's h3 rule on the trigger Radix renders.
  // `not-prose` can't do it: typography 0.5.9 only exempts descendants of it.
  return (
    <Accordion
      type="single"
      collapsible
      className="my-4 overflow-hidden rounded-lg border border-border bg-muted/20 [&_h3]:my-0 [&_h3]:text-base [&_h3]:font-normal"
    >
      <AccordionItem value={title} className="border-b-0">
        <AccordionTrigger className="px-4 py-3 hover:bg-muted/40 hover:no-underline">
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-left">
            <span className="font-medium">{title}</span>
            {subtitle ? (
              <span className="text-sm font-normal text-muted-foreground">
                {subtitle}
              </span>
            ) : null}
          </span>
        </AccordionTrigger>

        <AccordionContent className="max-h-[70vh] overflow-y-auto border-t border-border px-4 pb-4 pt-2 text-base">
          {source ? (
            <div className="not-prose mb-3 text-sm text-muted-foreground">
              {`${sourceLabel}: `}
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient-blue underline decoration-gradient-blue decoration-[0.1em] underline-offset-2 transition-colors hover:text-gradient-cyan hover:decoration-gradient-cyan"
              >
                {source.replace(/^https?:\/\//, '')}
              </a>
            </div>
          ) : null}
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
