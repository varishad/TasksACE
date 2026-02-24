import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | TasksACE Growth Solutions',
  description: 'Professional digital marketing services including social media management, content creation, copywriting, YouTube SEO, and keyword research.',
}

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 