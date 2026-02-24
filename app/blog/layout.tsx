import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | TasksACE Blog',
    default: 'Blog - TasksACE | Insights, Tips & Industry Updates',
  },
  description: 'Stay updated with the latest insights, tips, and industry updates from TasksACE. Expert advice on virtual assistance, business growth, and digital transformation.',
  keywords: 'blog, virtual assistant tips, business insights, digital transformation, productivity tips, industry updates',
  authors: [{ name: 'TasksACE' }],
  creator: 'TasksACE',
  publisher: 'TasksACE',
  robots: 'index, follow',
  openGraph: {
    title: 'Blog - TasksACE | Insights, Tips & Industry Updates',
    description: 'Stay updated with the latest insights, tips, and industry updates from TasksACE.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TasksACE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - TasksACE | Insights, Tips & Industry Updates',
    description: 'Stay updated with the latest insights, tips, and industry updates from TasksACE.',
    creator: '@tasksace',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 