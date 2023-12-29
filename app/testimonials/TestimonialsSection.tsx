'use client'

import { SeeOriginalButton, SeeOriginalLink } from 'app/testimonials/Links'
import { LayoutGroup, motion } from 'framer-motion'
import { Testimonial, testimonials } from 'app/testimonials/data'
import clsx from 'clsx'
import { getGradientPerIndex } from 'helpers/gradients'
import { User } from 'icons/User'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'

export interface TestimonialsSectionProps {
  filters: string[]
}

export const TestimonialsSection = ({ filters }: TestimonialsSectionProps) => {
  // Otherwise Tailwind purges bgs that aren't used anywhere else
  const possibleBlockquoteBg = [
    'bg-gradient-purple',
    'bg-gradient-orange',
    'bg-gradient-blue',
  ]
  const filteredTestimonials =
    filters.length > 0
      ? testimonials.filter((testimonial) => {
          return filters.includes(testimonial.type)
        })
      : testimonials

  return (
    <LayoutGroup>
      {filteredTestimonials.map((testimonial, index) => (
        <motion.div
          layout
          className="group/testimonials prose prose-invert pb-2"
          key={testimonial.name}
        >
          <Profile {...testimonial} />
          <blockquote className="relative border-l-0">
            <div
              className={clsx(
                'absolute bottom-0 left-0 top-0 w-[2px] bg-gradient-to-b',
                getGradientPerIndex(index),
              )}
            />
            {testimonial.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-md">
                {paragraph}
              </p>
            ))}
          </blockquote>
          <div className="-mt-3 mb-3 flex justify-end sm:hidden">
            <SeeOriginalLink testimonialLink={testimonial.testimonialLink} />
          </div>
        </motion.div>
      ))}
    </LayoutGroup>
  )
}

function Profile({
  authorLink,
  name,
  pic,
  position,
  testimonialLink,
}: Testimonial) {
  return (
    <div className="flex flex-col items-start justify-start sm:flex-row sm:items-center sm:justify-between">
      <Link
        href={authorLink}
        className="flex cursor-pointer flex-row items-center no-underline"
      >
        {pic ? (
          <Image
            alt={name}
            src={pic}
            width={50}
            height={50}
            className="h-14 w-14 rounded-full transition-all group-hover/testimonials:shadow-neon"
          />
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-800 transition-all group-hover/testimonials:shadow-neon">
            <User />
          </div>
        )}
        <div className="ml-2 flex-col justify-center">
          <h3
            className={cn(
              'mb-0 mt-0',
              'transition-all',
              'group-hover/testimonials:text-transparent',
              'bg-gradient-to-r from-gradient-purple to-gradient-pink bg-clip-text',
              'animate-text-gradient-background',
            )}
          >
            {name}
          </h3>
          <span
            className={cn(
              'transition-all',
              'group-hover/testimonials:text-transparent',
              'bg-gradient-to-r from-gradient-purple to-gradient-pink bg-clip-text',
              'animate-text-gradient-background',
            )}
          >
            {position}
          </span>
        </div>
      </Link>
      <div className="hidden max-w-sm sm:flex">
        <SeeOriginalButton testimonialLink={testimonialLink} />
      </div>
    </div>
  )
}
