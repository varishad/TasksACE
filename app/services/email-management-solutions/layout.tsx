import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'


export async function generateMetadata() {
  return await generateDynamicMetadata('/services/email-management-solutions')
}

export default function EmailManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}