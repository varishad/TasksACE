import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/video-editing-solutions')
}

export default function VideoEditingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}