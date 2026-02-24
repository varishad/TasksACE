import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - TasksACE Virtual Assistant Services',
  description: 'TasksACE Cookie Policy explains how we use cookies and similar technologies to improve your experience on our website.',
  keywords: 'TasksACE cookie policy, cookies usage, website tracking, user experience, data collection',
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        {/* WebPage Schema for Legal Document */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Cookie Policy",
              "description": "Cookie Policy for TasksACE explaining how we use cookies and similar technologies",
              "url": "https://tasksace.com/cookies",
              "isPartOf": {
                "@type": "WebSite",
                "name": "TasksACE",
                "url": "https://tasksace.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "TasksACE",
                "url": "https://tasksace.com"
              },
              "inLanguage": "en-US",
              "about": {
                "@type": "Thing",
                "name": "Cookie Policy"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://tasksace.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Cookie Policy",
                    "item": "https://tasksace.com/cookies"
                  }
                ]
              }
            })
          }}
        />
      </head>
      {children}
    </>
  )
} 