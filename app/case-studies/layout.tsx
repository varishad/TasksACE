import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies - TasksACE Virtual Assistant Success Stories',
  description: 'Explore TasksACE case studies and success stories. See how our virtual assistant services have helped businesses grow and achieve their goals.',
  keywords: 'TasksACE case studies, virtual assistant success stories, client testimonials, business growth results, VA portfolio',
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        {/* CollectionPage Schema for Case Studies */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Case Studies",
              "description": "Collection of TasksACE client success stories and case studies showcasing virtual assistant service results",
              "url": "https://tasksace.com/case-studies",
              "isPartOf": {
                "@type": "WebSite",
                "name": "TasksACE",
                "url": "https://tasksace.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "TasksACE",
                "url": "https://tasksace.com",
                "logo": "https://tasksace.com/tasksace-logo.png"
              },
              "inLanguage": "en-US",
              "about": [
                {
                  "@type": "Thing",
                  "name": "Virtual Assistant Services"
                },
                {
                  "@type": "Thing",
                  "name": "Business Success Stories"
                },
                {
                  "@type": "Thing",
                  "name": "Client Results"
                }
              ],
              "mainEntity": {
                "@type": "Organization",
                "name": "TasksACE",
                "description": "Professional virtual assistant services with proven results",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "26"
                },
                "award": [
                  "386+ Projects Completed",
                  "99.9% Success Rate",
                  "26+ Happy Clients"
                ]
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "Business Owners, Entrepreneurs, Decision Makers"
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
                    "name": "Case Studies",
                    "item": "https://tasksace.com/case-studies"
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