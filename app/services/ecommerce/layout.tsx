import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-commerce Solutions | TasksACE Professional Online Store Management',
  description: 'Professional e-commerce solutions including product upload, image processing, inventory management, customer support, and product description writing for Shopify, WooCommerce, Wix & Magento.',
}

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 