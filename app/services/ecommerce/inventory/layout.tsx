import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inventory Management | TasksACE E-commerce Solutions',
  description: 'Complete inventory management services including stock tracking, inventory updates, multi-platform synchronization, and automated reporting.',
}

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}