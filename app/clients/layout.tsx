// Standalone layout for private client pages: no banner, navbar, footer or analytics
export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-12 sm:px-6">
      {children}
    </main>
  )
}
