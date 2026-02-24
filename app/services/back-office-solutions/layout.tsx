import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/back-office-solutions')
}

export default function BackOfficeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 