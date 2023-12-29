export const TESTIMONIAL_TYPE = {
  CLIENT: 'clients',
  LEAD: 'leads',
  COLLEAGUE: 'colleagues',
}

export const TESTIMONIAL_TYPES = Object.values(TESTIMONIAL_TYPE)

export type TESTIMONIAL_TYPE = (typeof TESTIMONIAL_TYPES)[number]
