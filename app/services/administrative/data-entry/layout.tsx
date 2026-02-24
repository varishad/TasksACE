import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Entry Services | TasksACE Accurate Data Management',
  description: 'Accurate data entry and management services including CRM data entry, database organization, data verification, and document processing. 99.9% accuracy guaranteed.',
}

export default function DataEntryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}