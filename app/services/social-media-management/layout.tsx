import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/social-media-management')
}

export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}