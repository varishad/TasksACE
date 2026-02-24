import React from 'react'
import type { Metadata } from 'next'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/ecommerce-assistant-services')
}

export default function EcommerceAssistantLayout({
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
              "name": "E-commerce Assistant Services",
              "description": "Dedicated e-commerce virtual assistant services for comprehensive online store management, customer support, and business growth.",
              "url": "https://tasksace.com/services/ecommerce-assistant-services",
              "provider": {
                "@type": "Organization",
                "name": "TasksACE",
                "url": "https://tasksace.com"
              },
              "serviceType": "E-commerce Assistant Services",
              "category": "E-commerce Support Services",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "E-commerce Assistant Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Store Management",
                      "description": "Complete online store management including product updates, inventory tracking, and platform optimization"
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
                      "name": "Product Listing & Optimization",
                      "description": "Professional product listing, SEO optimization, and catalog management for maximum visibility"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "8-12",
                      "unitText": "per hour"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Customer Support",
                      "description": "Dedicated customer service including live chat, email support, and order assistance"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "8-12",
                      "unitText": "per hour"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Order Processing",
                      "description": "Efficient order processing, tracking, and fulfillment coordination for smooth operations"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "8-10",
                      "unitText": "per hour"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Marketing Support",
                      "description": "E-commerce marketing assistance including social media, email campaigns, and promotional activities"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "10-15",
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
                    "name": "E-commerce Assistant",
                    "item": "https://tasksace.com/services/ecommerce-assistant-services"
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