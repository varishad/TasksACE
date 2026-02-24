import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Website Development | TasksACE Web Solutions',
  description: 'Professional custom website development including responsive design, modern UI/UX, and full-stack development. Build your perfect website from scratch.',
}

export default function CustomWebsitesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}