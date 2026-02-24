import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Materials Design | TasksACE Professional Graphics',
  description: 'Professional business materials design including brochures, flyers, business cards, presentations, and marketing collateral. Professional brand representation.',
}

export default function BusinessMaterialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}