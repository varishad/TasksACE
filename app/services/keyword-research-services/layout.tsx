import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/keyword-research-services')
}

export default function KeywordResearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}