import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/ecommerce-customer-support')
}

export default function CustomerSupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 