'use client'

import { Button } from '@/components/ui/button'
import { SimpleAnalytics } from 'icons/SimpleAnalytics'

export default function GoToAnalyticsButton({
  analytics,
}: {
  analytics: string
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      asChild
      onClick={() => {
        window.open(analytics, '_blank')
      }}
    >
      <SimpleAnalytics className="h-6 w-6" />
    </Button>
  )
}
