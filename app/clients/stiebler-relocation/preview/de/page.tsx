import type { Metadata } from 'next'
import { StieblerSite } from '../StieblerSite'

// Protected by Basic Auth in middleware.ts
export const metadata: Metadata = {
  title: 'Stiebler Relocation Berlin – Vorschau',
  robots: { index: false, follow: false },
}

export default function StieblerPreviewPageDe() {
  return <StieblerSite lang="de" />
}
