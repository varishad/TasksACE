import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Maintenance Services | TasksACE Technical Support',
  description: 'Professional website maintenance services including updates, security monitoring, performance optimization, and technical support. Keep your website running smoothly.',
}

export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}