import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Small Tools Development | TasksACE Custom Solutions',
  description: 'Professional small tools and utility development including calculators, converters, automation scripts, and custom business tools. Streamline your workflow.',
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}