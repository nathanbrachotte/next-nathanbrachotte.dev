import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

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
    <html lang="en" className={clsx('dark', graphik.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
