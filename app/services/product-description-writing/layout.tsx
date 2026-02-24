import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/product-description-writing')
}

export default function ProductDescriptionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 