import type { Metadata } from 'next'
import { StieblerSite } from './StieblerSite'

// Protected by Basic Auth in middleware.ts
export const metadata: Metadata = {
  title: 'Stiebler Relocation Berlin – Preview',
  robots: { index: false, follow: false },
}

export default function StieblerPreviewPage() {
  return <StieblerSite lang="en" />
}
