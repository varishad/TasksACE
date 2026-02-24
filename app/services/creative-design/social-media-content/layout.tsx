import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Content Creation | TasksACE Creative Services',
  description: 'Professional social media content creation including posts, stories, graphics, and video content. Boost engagement and grow your social media presence.',
}

export default function SocialMediaContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}