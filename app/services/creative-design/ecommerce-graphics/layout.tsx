import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-commerce Graphics Design | TasksACE Visual Solutions',
  description: 'Professional e-commerce graphics design including product banners, promotional graphics, category images, and store visuals. Increase sales with stunning visuals.',
}

export default function EcommerceGraphicsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}