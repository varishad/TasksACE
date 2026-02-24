import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/ecommerce-product-listing')
}

export default function ProductUploadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 