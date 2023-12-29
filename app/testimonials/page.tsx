// TODO: Make only important part client
'use client'
import { TestimonialsSection } from 'app/testimonials/TestimonialsSection'
import React, { useCallback, useEffect } from 'react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { TESTIMONIAL_TYPES } from 'app/constants'
import { cn } from '@/lib/utils'

const TestimonialsPage = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const searchParamFilters = searchParams
    .getAll('key')
    .filter((value) => TESTIMONIAL_TYPES.includes(value))

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, values: string[]) => {
      // When trying to remove all filters, we want to actually turn them all on.
      // const newKeys = values.length > 0 ? values : TESTIMONIAL_TYPES

      const params = new URLSearchParams([
        ...values.map((value) => ['key', value]),
      ])

      return params.toString()
    },
    [searchParams],
  )

  useEffect(() => {
    if (searchParamFilters.length === 0) {
      router.push(pathname + '?' + createQueryString('key', TESTIMONIAL_TYPES))
    }
  }, [searchParamFilters])

  return (
    <section>
      <h1 className="pb-6 text-2xl font-bold tracking-tighter">
        Some good words from my past clients, leads, coworkers or mentees 🙏
      </h1>
      <ToggleGroup
        type="multiple"
        defaultValue={
          searchParamFilters.length > 0 ? searchParamFilters : TESTIMONIAL_TYPES
        }
        variant={'outline'}
        className="space-x-2 pb-6"
        onValueChange={(value) => {
          console.log({ value })
          const newRoute = pathname + '?' + createQueryString('key', value)

          router.push(newRoute)
        }}
      >
        <ToggleGroupItem
          value="clients"
          aria-label="Toogle clients"
          className={cn(
            'bg-transparent data-[state=on]:border-gradient-purple data-[state=on]:bg-slate-900',
            'transition-all hover:scale-105',
            'active:scale-95',
            // Style override for filters to keep the same look while adding search params to URL
          )}
        >
          Clients
        </ToggleGroupItem>
        <ToggleGroupItem
          value="leads"
          aria-label="Toggle leads"
          className={cn(
            'bg-transparent data-[state=on]:border-gradient-purple data-[state=on]:bg-slate-900',
            'transition-all hover:scale-105',
            'active:scale-95',
          )}
        >
          Leads
        </ToggleGroupItem>
        <ToggleGroupItem
          value="colleagues"
          aria-label="Toggle colleagues"
          className={cn(
            'bg-transparent data-[state=on]:border-gradient-purple data-[state=on]:bg-slate-900',
            'transition-all hover:scale-105',
            'active:scale-95',
          )}
        >
          Colleagues
        </ToggleGroupItem>
      </ToggleGroup>
      <div>
        <TestimonialsSection filters={searchParamFilters} />
      </div>
    </section>
  )
}

export default TestimonialsPage
