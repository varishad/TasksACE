import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email Management Services | TasksACE Professional Support',
  description: 'Professional email management services including inbox organization, response management, follow-up scheduling, and priority filtering.',
}

export default function EmailManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}