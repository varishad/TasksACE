import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calendar & Scheduling Services | TasksACE Time Management',
  description: 'Complete calendar management and scheduling services including appointment scheduling, meeting coordination, calendar organization, and reminder management.',
}

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}