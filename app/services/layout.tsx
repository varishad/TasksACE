import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Virtual Assistant Services | TasksACE Complete Solutions',
  description: 'Comprehensive virtual assistant services including administrative support, e-commerce solutions, creative design, digital marketing, and web development. Expert VA services for business growth.',
  keywords: 'virtual assistant services, administrative support, e-commerce solutions, creative design services, digital marketing, web development, VA services, business support',
  openGraph: {
    title: 'Virtual Assistant Services | TasksACE - Professional Business Support',
    description: 'Comprehensive virtual assistant services including administrative support, e-commerce solutions, creative design, digital marketing, and web development.',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        {/* Service Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Virtual Assistant Services",
              "description": "Comprehensive virtual assistant services including administrative support, e-commerce solutions, creative design, digital marketing, and web development.",
              "provider": {
                "@type": "Organization",
                "name": "TasksACE",
                "url": "https://tasksace.com"
              },
              "serviceType": "Virtual Assistant Services",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Virtual Assistant Service Categories",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Administrative Services",
                      "description": "Streamline your daily operations with professional administrative and back-office support"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "8-15",
                      "unitText": "per hour"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Solutions",
                      "description": "Professional product upload and management across Shopify, WooCommerce, Wix, and Magento"
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
                      "name": "Creative & Design Services",
                      "description": "Professional visual content creation using Canva and basic video editing services"
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
                      "name": "Digital Marketing & Content",
                      "description": "Grow your online presence with expert digital marketing and content creation services"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "10-18",
                      "unitText": "per hour"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development & Technical",
                      "description": "Custom technical solutions including websites, tools, and development services"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "15-25",
                      "unitText": "per hour"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "26"
              }
            })
          }}
        />
      </head>
      {children}
    </>
  )
} 