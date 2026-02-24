import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/calendar-management-services')
}

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}