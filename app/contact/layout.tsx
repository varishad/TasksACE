import { generateDynamicMetadata } from '@/lib/seo'
import React from 'react'
import type { Metadata } from 'next'

export async function generateMetadata() {
  return await generateDynamicMetadata('/contact')
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 