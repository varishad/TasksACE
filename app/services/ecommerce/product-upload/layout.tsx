import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Upload Services | TasksACE E-commerce Solutions',
  description: 'Professional product upload and listing services for Shopify, WooCommerce, Wix, and Magento. Accurate product details, SEO optimization, and bulk uploads available.',
}

export default function ProductUploadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 