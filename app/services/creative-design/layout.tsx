import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creative & Design Services | TasksACE Professional Solutions',
  description: 'Professional creative and design services including graphic design, social media content, e-commerce graphics, business materials, and video editing.',
}

export default function CreativeDesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 