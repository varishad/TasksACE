import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/ecommerce-website-design')
}

export default function EcommerceWebsitesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}