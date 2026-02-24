import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - TasksACE Virtual Assistant Services',
  description: 'TasksACE Privacy Policy explains how we collect, use, and protect your personal information when using our virtual assistant services.',
  keywords: 'TasksACE privacy policy, data protection, personal information, privacy rights, data security',
}

export default function PrivacyLayout({
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
              "name": "Privacy Policy",
              "description": "Privacy Policy for TasksACE virtual assistant services explaining data collection and protection practices",
              "url": "https://tasksace.com/privacy",
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
                "name": "Privacy Policy"
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
                    "name": "Privacy Policy",
                    "item": "https://tasksace.com/privacy"
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