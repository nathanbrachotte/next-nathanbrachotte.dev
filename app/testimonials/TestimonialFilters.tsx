'use client'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { cn } from '@/lib/utils'
import { TESTIMONIAL_TYPES } from 'app/constants'
import {
  clientTestimonials,
  colleagueTestimonials,
  leadTestimonials,
} from 'app/testimonials/data'
import { usePathname, useRouter } from 'next/navigation'
import React, { useCallback } from 'react'

// Style override for filters to keep the same look while adding search params to URL
const toggleItemClassName = cn(
  'bg-transparent data-[state=on]:border-gradient-purple data-[state=on]:bg-slate-900',
  'transition-all hover:scale-105',
  'active:scale-95',
  'whitespace-nowrap',
)

export interface TestimonialFiltersProps {
  filters: string[]
}

export const TestimonialFilters = ({ filters }: TestimonialFiltersProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const createQueryString = useCallback((values: string[]) => {
    return new URLSearchParams(values.map((value) => ['key', value])).toString()
  }, [])

  return (
    <ToggleGroup
      type="multiple"
      defaultValue={filters.length > 0 ? filters : TESTIMONIAL_TYPES}
      variant={'outline'}
      className="space-x-2 pb-2"
      onValueChange={(value) => {
        router.push(pathname + '?' + createQueryString(value))
      }}
    >
      <ToggleGroupItem
        value="clients"
        aria-label="Toogle clients"
        className={toggleItemClassName}
      >
        Clients ({clientTestimonials.length})
      </ToggleGroupItem>
      <ToggleGroupItem
        value="leads"
        aria-label="Toggle leads"
        className={toggleItemClassName}
      >
        Leads ({leadTestimonials.length})
      </ToggleGroupItem>
      <ToggleGroupItem
        value="colleagues"
        aria-label="Toggle colleagues"
        className={toggleItemClassName}
      >
        Colleagues ({colleagueTestimonials.length})
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
