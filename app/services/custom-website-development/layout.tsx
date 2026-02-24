import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/custom-website-development')
}

export default function CustomWebsitesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}