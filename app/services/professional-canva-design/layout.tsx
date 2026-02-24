import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/professional-canva-design')
}

export default function CanvaDesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}