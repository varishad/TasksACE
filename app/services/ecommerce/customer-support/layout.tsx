import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-commerce Customer Support | TasksACE Service Solutions',
  description: 'Professional e-commerce customer support including live chat, order management, returns processing, and customer inquiry handling.',
}

export default function CustomerSupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 