import { TESTIMONIAL_TYPES } from 'app/constants'
import { H1 } from 'app/components/Typography'
import { TestimonialFilters } from 'app/testimonials/TestimonialFilters'
import { TestimonialsSection } from 'app/testimonials/TestimonialsSection'
import { testimonials } from 'app/testimonials/data'
import React from 'react'

interface TestimonialsPageProps {
  searchParams: { key?: string | string[] }
}

// Filters are read from the URL on the server so the testimonials themselves
// are in the HTML. Reading them client-side with useSearchParams opts the whole
// route out of prerendering, which served an error shell to crawlers instead.
const TestimonialsPage = ({ searchParams }: TestimonialsPageProps) => {
  const requestedFilters = Array.isArray(searchParams.key)
    ? searchParams.key
    : searchParams.key
      ? [searchParams.key]
      : []

  const filters = requestedFilters.filter((value) =>
    TESTIMONIAL_TYPES.includes(value),
  )

  const filteredTestimonials =
    filters.length > 0
      ? testimonials.filter((testimonial) => filters.includes(testimonial.type))
      : testimonials

  return (
    <section>
      <H1>Some good words from my past clients, leads and coworkers 🙏</H1>
      <div className="flex flex-col items-center justify-center pb-6">
        <TestimonialFilters filters={filters} />
        <p className="text-xs text-slate-400">
          Showing {filteredTestimonials.length} testimonials
        </p>
      </div>
      <div>
        <TestimonialsSection filters={filters} />
      </div>
    </section>
  )
}

export default TestimonialsPage
