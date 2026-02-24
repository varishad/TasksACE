import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Back-Office Solutions | TasksACE Administrative Support',
  description: 'Professional back-office solutions including invoice processing, HR data management, financial data entry, and customer database management.',
}

export default function BackOfficeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 