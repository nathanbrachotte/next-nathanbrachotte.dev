import './global.css'
import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navbar from './components/navbar'
import { Analytics } from '@vercel/analytics/react'

const graphik = localFont({
  src: [
    {
      path: '../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-graphik',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nathanbrachotte.dev'),
  title: {
    default: 'Nathan Brachotte',
    template: '%s | Nathan Brachotte',
  },
  description: 'Senior Software Engineer - Full Stack',
  openGraph: {
    title: 'Nathan Brachotte',
    description: 'Senior Software Engineer',
    url: 'https://nathanbrachotte.dev',
    siteName: 'Nathan Brachotte',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Nathan Brachotte',
    // card: 'summary_large_image',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'dark',
        // OG
        // 'bg-white text-black dark:bg-slate-800 dark:text-white',
        // Nice alternative
        // 'bg-slate-900 text-white',
        // Newest
        'bg-background text-white',

        graphik.variable,
      )}
    >
      <body className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}
