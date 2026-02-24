import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Administrative Virtual Assistant Services | TasksACE',
  description: 'Professional administrative virtual assistant services including back-office support, data entry, email management, calendar scheduling, and VA support.',
}

export default function AdministrativeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Service Schema for Administrative Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Administrative Virtual Assistant Services",
            "description": "Professional administrative virtual assistant services including back-office support, data entry, email management, calendar scheduling, and VA support.",
            "provider": {
              "@type": "Organization",
              "name": "TasksACE",
              "url": "https://tasksace.com"
            },
            "serviceType": "Administrative Support",
            "areaServed": {
              "@type": "Country",
              "name": "Worldwide"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Administrative Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Back-Office Solutions",
                    "description": "Invoice processing, HR data management, financial data entry"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Data Entry & Management",
                    "description": "Accurate data entry with quality assurance and database management"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Email Management",
                    "description": "Professional email handling, organization, and response management"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Calendar & Scheduling",
                    "description": "Complete calendar management and appointment scheduling"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Virtual Assistant Support",
                    "description": "General virtual assistance for various administrative tasks"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "20",
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