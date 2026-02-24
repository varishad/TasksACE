import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-commerce Website Development | TasksACE Online Store Solutions',
  description: 'Professional e-commerce website development including online stores, payment integration, inventory management, and mobile-responsive design.',
}

export default function EcommerceWebsitesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}