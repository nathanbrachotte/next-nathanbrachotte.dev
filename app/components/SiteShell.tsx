import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from '@/components/ui/sonner'
import Navbar from './navbar'
import Footer from './footer'
import { LiveProjectsBanner } from './LiveProjectsBanner'

// Public site chrome: banner, navbar, footer and analytics.
// Private pages like /clients use their own layout instead.
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LiveProjectsBanner />
      <div className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col md:flex-row lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          {/* https://docs.simpleanalytics.com/dnt */}
          <Script
            data-collect-dnt="true"
            async
            defer
            src="https://scripts.simpleanalyticscdn.com/latest.js"
          />
          <SpeedInsights />
        </main>
      </div>
      <Toaster richColors />
    </>
  )
}
