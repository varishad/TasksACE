import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Copywriting Services | TasksACE Converting Content',
  description: 'Expert copywriting services including sales copy, email sequences, landing pages, product descriptions, and marketing copy that converts visitors into customers.',
  keywords: 'copywriting services, sales copy, email marketing, landing page copy, product descriptions, marketing copy, content writing, conversion copywriting',
}

export default function CopywritingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        {/* Service Category Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Professional Copywriting Services",
              "description": "Expert copywriting services that convert visitors into customers through compelling sales copy, email sequences, and marketing content.",
              "url": "https://tasksace.com/services/copywriting",
              "provider": {
                "@type": "Organization",
                "name": "TasksACE",
                "url": "https://tasksace.com"
              },
              "serviceType": "Copywriting Services",
              "category": "Content & Marketing Services",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Copywriting Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sales Copy",
                      "description": "High-converting sales copy for landing pages, sales pages, and marketing campaigns"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "15-20",
                      "unitText": "per hour"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Email Marketing Copy",
                      "description": "Engaging email sequences, newsletters, and marketing campaigns that drive conversions"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "12-18",
                      "unitText": "per hour"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Copy",
                      "description": "Compelling website copy including homepage, about pages, and service descriptions"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "12-16",
                      "unitText": "per hour"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Product Descriptions",
                      "description": "SEO-optimized product descriptions that highlight benefits and drive sales"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "10-15",
                      "unitText": "per hour"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Marketing Materials",
                      "description": "Persuasive copy for brochures, advertisements, and promotional materials"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "12-16",
                      "unitText": "per hour"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "26"
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
                    "name": "Services",
                    "item": "https://tasksace.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Copywriting",
                    "item": "https://tasksace.com/services/copywriting"
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