import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/web-development-tools')
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}