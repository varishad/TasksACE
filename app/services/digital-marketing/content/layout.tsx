import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Creation Services | TasksACE Marketing Solutions',
  description: 'Professional content creation services including blog posts, articles, website content, and marketing copy. Engaging content that drives results and conversions.',
}

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}