// app/providers.tsx
'use client'

import posthog from 'posthog-js'
import {PostHogProvider as PHProvider} from 'posthog-js/react'
import {useEffect} from 'react'

export function PostHogProvider({children}: { children: React.ReactNode }) {
  useEffect(() => {

    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || !process.env.NEXT_PUBLIC_POSTHOG_HOST) {
      console.warn('PostHog key or host is not set. PostHog will not be initialized.')
      return
    }

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: 'history_change'
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      {children}
    </PHProvider>
  )
}