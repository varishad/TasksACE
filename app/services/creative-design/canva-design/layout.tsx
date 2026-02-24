import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Canva Graphic Design Services | TasksACE Creative Solutions',
  description: 'Professional Canva graphic design services for social media posts, marketing materials, presentations, and brand graphics. Creative designs that capture attention.',
}

export default function CanvaDesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}