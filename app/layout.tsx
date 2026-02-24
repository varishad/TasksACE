import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { config } from '@/lib/config'
import { Analytics } from '@vercel/analytics/next'
import CookieConsent from '@/components/CookieConsent'
import Breadcrumbs from '@/components/Breadcrumbs'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://tasksace.com'),
  title: {
    default: 'TasksACE - Professional Virtual Assistant Services',
    template: '%s | TasksACE'
  },
  description: 'Transform your business with TasksACE virtual assistant services. Expert administrative support, e-commerce management, data entry, and digital marketing solutions.',
  icons: {
    icon: '/tasksace-logo.png',
    shortcut: '/tasksace-logo.png',
    apple: '/tasksace-logo.png',
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
        <Header />
        <div className="pt-16 lg:pt-20">
          <Breadcrumbs />
          {children}
        </div>
        <Footer />
        <CookieConsent />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
