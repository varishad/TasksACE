import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { config } from '@/lib/config'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'TasksACE - Professional Virtual Assistant Services | Scale Your Business',
  description: 'Transform your business with TasksACE virtual assistant services. Expert administrative support, e-commerce management, data entry, and digital marketing solutions. 99.9% success rate, 24/7 support.',
  keywords: 'virtual assistant services, administrative support, e-commerce assistant, data entry, lead generation, digital marketing, business support, remote assistant, professional VA services',
  authors: [{ name: 'TasksACE' }],
  creator: 'TasksACE',
  publisher: 'TasksACE',
  robots: 'index, follow',
  icons: {
    icon: '/tasksace-logo.png',
    shortcut: '/tasksace-logo.png',
    apple: '/tasksace-logo.png',
  },
  openGraph: {
    title: 'TasksACE - Professional Virtual Assistant Services | Scale Your Business',
    description: 'Transform your business with expert virtual assistant services. Administrative support, e-commerce management, and digital marketing solutions with 99.9% success rate.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TasksACE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TasksACE - Professional Virtual Assistant Services',
    description: 'Scale your business with expert virtual assistant services. 99.9% success rate, 24/7 support.',
    creator: '@tasksace',
  },
  verification: {
    google: config.googleSearchConsoleVerification,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tasksace-logo.png" />
        <link rel="shortcut icon" href="/tasksace-logo.png" />
        <link rel="apple-touch-icon" href="/tasksace-logo.png" />
        
        {/* Organization Schema for Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TasksACE",
              "alternateName": "Tasks ACE",
              "description": "Professional virtual assistant services specializing in administrative support, e-commerce management, creative design, digital marketing, and web development solutions.",
              "url": "https://tasksace.com",
              "logo": "https://tasksace.com/tasksace-logo.png",
              "foundingDate": "2023",
              "numberOfEmployees": "10-50",
              "slogan": "Scale Your Business with Professional Virtual Assistant Services",
              "serviceType": [
                "Virtual Assistant Services",
                "Administrative Support",
                "E-commerce Solutions",
                "Creative Design Services", 
                "Digital Marketing",
                "Web Development"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Worldwide"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Virtual Assistant Services",
                "itemListElement": [
                  {
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
                          "name": "Email Management",
                          "description": "Professional email handling and organization"
                        }
                      }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "E-commerce Solutions",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service", 
                          "name": "Product Image Processing",
                          "description": "Background removal, image enhancement, color correction"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Product Upload & Listing", 
                          "description": "Expert product uploading for Shopify, WooCommerce, Wix, Magento"
                        }
                      }
                    ]
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "26",
                "bestRating": "5",
                "worstRating": "1"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English",
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification", 
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              },
              "sameAs": [
                "https://www.linkedin.com/company/tasksace",
                "https://twitter.com/tasksace"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics gaId={config.googleAnalyticsId} />
        <Analytics />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
} 