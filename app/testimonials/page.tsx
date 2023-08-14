import { TestimonialsSection } from 'app/testimonials/TestimonialsSection'
import React from 'react'

const TestimonialsPage = () => {
  return (
    <section>
      <h1 className="mb-12 text-2xl font-bold tracking-tighter">
        Some good words from my past clients, leads, coworkers or mentees 🙏
      </h1>
      <TestimonialsSection />
    </section>
  )
}

export default TestimonialsPage
