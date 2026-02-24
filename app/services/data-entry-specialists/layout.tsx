import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/data-entry-specialists')
}


export default function DataEntryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}