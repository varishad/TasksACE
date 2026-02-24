import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Image Processing | TasksACE Photo Editing',
  description: 'Professional product image processing including background removal, color correction, image enhancement, and optimization. Make your products look stunning online.',
}

export default function ImageProcessingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}