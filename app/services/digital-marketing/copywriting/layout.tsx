import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Copywriting Services | TasksACE Professional Writing',
  description: 'Professional copywriting services including sales copy, email campaigns, product descriptions, and marketing materials. Persuasive copy that converts.',
}

export default function CopywritingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}