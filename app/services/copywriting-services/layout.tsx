import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/copywriting-services')
}

export default function CopywritingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}