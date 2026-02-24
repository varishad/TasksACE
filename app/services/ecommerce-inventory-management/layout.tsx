import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/ecommerce-inventory-management')
}

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}