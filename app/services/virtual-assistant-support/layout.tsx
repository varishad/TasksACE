import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/virtual-assistant-support')
}

export default function VASupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}