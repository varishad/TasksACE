import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video Editing Services | TasksACE Creative Solutions',
  description: 'Professional video editing services including promotional videos, social media content, product demos, and basic editing. Bring your video content to life.',
}

export default function VideoEditingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}