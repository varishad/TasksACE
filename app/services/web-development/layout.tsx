import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Development Virtual Assistant Services | TasksACE Custom Websites & Tools',
  description: 'Professional web development virtual assistant services including custom websites, e-commerce websites, landing pages, web tools, and website maintenance. Build your online presence.',
  keywords: 'web development virtual assistant, custom website development, e-commerce websites, landing pages, web tools, website maintenance, web design',
  authors: [{ name: 'TasksACE' }],
  creator: 'TasksACE',
  publisher: 'TasksACE',
  robots: 'index, follow',
  openGraph: {
    title: 'Web Development Virtual Assistant Services | TasksACE Custom Websites & Tools',
    description: 'Professional web development virtual assistant services including custom websites, e-commerce websites, landing pages, web tools, and website maintenance. Build your online presence.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TasksACE',
    url: 'https://tasksace.com/services/web-development',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Virtual Assistant Services | TasksACE',
    description: 'Professional web development services. Custom websites, e-commerce sites, landing pages, and web tools.',
    creator: '@tasksace',
  },
}

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 