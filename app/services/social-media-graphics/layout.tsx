import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/social-media-graphics')
}

export default function SocialMediaContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}