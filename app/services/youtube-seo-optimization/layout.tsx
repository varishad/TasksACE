import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/youtube-seo-optimization')
}

export default function YouTubeSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Service Schema for YouTube SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "YouTube SEO Services",
            "description": "Professional YouTube SEO services including video optimization, keyword research, channel optimization, and analytics to grow your YouTube channel.",
            "provider": {
              "@type": "Organization",
              "name": "TasksACE",
              "url": "https://tasksace.com"
            },
            "serviceType": "YouTube SEO",
            "areaServed": {
              "@type": "Country",
              "name": "Worldwide"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "YouTube SEO Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Video Optimization",
                    "description": "Complete optimization of video titles, descriptions, tags, and thumbnails"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Keyword Research",
                    "description": "In-depth keyword research for YouTube niche and trending topics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Channel Optimization",
                    "description": "Complete channel setup and optimization including channel art and playlists"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Analytics & Reporting",
                    "description": "Regular performance tracking and detailed growth reports"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "15",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      {children}
    </>
  )
}