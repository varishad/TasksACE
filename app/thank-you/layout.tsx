import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You - TasksACE Contact Confirmation',
  description: 'Thank you for contacting TasksACE! We have received your message and will respond within 24 hours. Start your virtual assistant journey today.',
  keywords: 'thank you, contact confirmation, TasksACE response, virtual assistant consultation',
}

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        {/* WebPage Schema for Confirmation Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Thank You - Contact Confirmation",
              "description": "Thank you page confirming successful contact form submission to TasksACE",
              "url": "https://tasksace.com/thank-you",
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
                "name": "Contact Confirmation"
              },
              "mainEntity": {
                "@type": "Organization",
                "name": "TasksACE",
                "description": "Professional virtual assistant services",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "availableLanguage": "English"
                }
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
                    "name": "Contact",
                    "item": "https://tasksace.com/contact"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Thank You",
                    "item": "https://tasksace.com/thank-you"
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