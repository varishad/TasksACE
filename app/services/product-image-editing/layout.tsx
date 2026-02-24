import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/product-image-editing')
}

export default function ImageProcessingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}