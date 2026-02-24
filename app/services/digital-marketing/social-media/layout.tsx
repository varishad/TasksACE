import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Management | TasksACE Digital Marketing',
  description: 'Professional social media management including content planning, posting schedules, engagement management, and analytics reporting. Grow your social media presence.',
}

export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}