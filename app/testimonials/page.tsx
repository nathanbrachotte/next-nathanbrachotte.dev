// TODO: Make only important part client
'use client'
import { TestimonialsSection } from 'app/testimonials/TestimonialsSection'
import React, { useCallback, useEffect } from 'react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { TESTIMONIAL_TYPES } from 'app/constants'
import { cn } from '@/lib/utils'
import {
  clientTestimonials,
  colleagueTestimonials,
  leadTestimonials,
  testimonials,
} from 'app/testimonials/data'
import { H1 } from 'app/components/Typography'

const TestimonialsPage = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const searchParamFilters = searchParams
    .getAll('key')
    .filter((value) => TESTIMONIAL_TYPES.includes(value))

  const createQueryString = useCallback((name: string, values: string[]) => {
    const params = new URLSearchParams([
      ...values.map((value) => ['key', value]),
    ])

    return params.toString()
  }, [])

  useEffect(() => {
    if (searchParamFilters.length === 0) {
      router.push(pathname + '?' + createQueryString('key', TESTIMONIAL_TYPES))
    }
  }, [searchParamFilters])

  const filteredTestimonials =
    searchParamFilters.length > 0
      ? testimonials.filter((testimonial) => {
          return searchParamFilters.includes(testimonial.type)
        })
      : testimonials

  return (
    <section>
      <H1>Some good words from my past clients, leads and coworkers 🙏</H1>
      <div className="flex flex-col items-center justify-center pb-6">
        <ToggleGroup
          type="multiple"
          defaultValue={
            searchParamFilters.length > 0
              ? searchParamFilters
              : TESTIMONIAL_TYPES
          }
          variant={'outline'}
          className="space-x-2 pb-2"
          onValueChange={(value) => {
            router.push(pathname + '?' + createQueryString('key', value))
          }}
        >
          <ToggleGroupItem
            value="clients"
            aria-label="Toogle clients"
            className={cn(
              'bg-transparent data-[state=on]:border-gradient-purple data-[state=on]:bg-slate-900',
              'transition-all hover:scale-105',
              'active:scale-95',
              'whitespace-nowrap',
              // Style override for filters to keep the same look while adding search params to URL
            )}
          >
            Clients ({clientTestimonials.length})
          </ToggleGroupItem>
          <ToggleGroupItem
            value="leads"
            aria-label="Toggle leads"
            className={cn(
              'bg-transparent data-[state=on]:border-gradient-purple data-[state=on]:bg-slate-900',
              'transition-all hover:scale-105',
              'active:scale-95',
              'whitespace-nowrap',
            )}
          >
            Leads ({leadTestimonials.length})
          </ToggleGroupItem>
          <ToggleGroupItem
            value="colleagues"
            aria-label="Toggle colleagues"
            className={cn(
              'bg-transparent data-[state=on]:border-gradient-purple data-[state=on]:bg-slate-900',
              'transition-all hover:scale-105',
              'active:scale-95',
              'whitespace-nowrap',
            )}
          >
            Colleagues ({colleagueTestimonials.length})
          </ToggleGroupItem>
        </ToggleGroup>
        <p className="text-xs text-slate-400">
          Showing {filteredTestimonials.length} testimonials
        </p>
      </div>
      <div>
        <TestimonialsSection filters={searchParamFilters} />
      </div>
    </section>
  )
}

export default TestimonialsPage
