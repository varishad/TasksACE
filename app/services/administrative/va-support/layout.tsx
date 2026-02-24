import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Virtual Assistant Support | TasksACE General VA Services',
  description: 'General virtual assistant support for administrative tasks, document preparation, research activities, and business coordination.',
}

export default function VASupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}