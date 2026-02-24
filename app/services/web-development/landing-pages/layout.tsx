import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landing Page Development | TasksACE Conversion Solutions',
  description: 'Professional landing page development focused on conversions. High-converting landing pages with modern design, fast loading, and mobile optimization.',
}

export default function LandingPagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}