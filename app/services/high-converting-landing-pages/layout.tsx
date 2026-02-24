import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/high-converting-landing-pages')
}

export default function LandingPagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}