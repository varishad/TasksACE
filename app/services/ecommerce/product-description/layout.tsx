import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Description Writing | TasksACE SEO Content',
  description: 'Professional product description writing services that convert visitors into customers. SEO-optimized, engaging, and persuasive content for e-commerce stores.',
}

export default function ProductDescriptionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 