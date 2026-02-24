import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/business-branding-materials')
}

export default function BusinessMaterialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}