'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

// Hides site chrome (e.g. the live projects banner) on private /clients pages
export function HiddenOnClientPages({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  if (pathname.startsWith('/clients')) {
    return null
  }

  return children
}
