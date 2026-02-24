import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/content-marketing-solutions')
}


export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}