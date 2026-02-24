import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - TasksACE Virtual Assistant Services',
  description: 'Read TasksACE Terms of Service for our virtual assistant services. Legal terms, conditions, and agreements for professional VA services.',
  keywords: 'TasksACE terms of service, virtual assistant terms, service agreement, legal terms, conditions',
}

export default function TermsLayout({
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
              "name": "Terms of Service",
              "description": "Terms of Service for TasksACE virtual assistant services",
              "url": "https://tasksace.com/terms",
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
                "name": "Terms of Service"
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
                    "name": "Terms of Service",
                    "item": "https://tasksace.com/terms"
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