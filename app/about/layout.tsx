import { generateDynamicMetadata } from '@/lib/seo'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About TasksACE - Your Trusted Virtual Assistant Partner',
  description: 'Learn about TasksACE, a leading virtual assistant company founded in 2020. Meet our team, mission, and values. 386+ projects completed, 26+ happy clients, 99.9% success rate.',
  keywords: 'about TasksACE, virtual assistant company, our team, company mission, business values, professional VA services, reliable virtual assistants',
}


export async function generateMetadata() {
  return await generateDynamicMetadata('/about')
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        {/* AboutPage Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About TasksACE",
              "description": "Learn about TasksACE, a leading virtual assistant company founded in 2020 with 386+ successful projects and 99.9% success rate.",
              "url": "https://tasksace.com/about",
              "mainEntity": {
                "@type": "Organization",
                "name": "TasksACE",
                "foundingDate": "2020",
                "description": "TasksACE was founded with a simple yet powerful vision: to help businesses focus on what they do best by taking care of their administrative and operational tasks.",
                "url": "https://tasksace.com",
                "logo": "https://tasksace.com/tasksace-logo.png",
                "slogan": "Your Trusted Partner for Virtual Excellence",
                "numberOfEmployees": "10-50",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "Bangladesh"
                },
                "founder": [
                  {
                    "@type": "Person",
                    "name": "Md Rishad Rahman",
                    "jobTitle": "Founder & CEO",
                    "description": "With over 8 years of experience in business operations and virtual assistance, Rishad founded TasksACE with a vision to help businesses scale efficiently through dedicated support services."
                  }
                ],
                "employee": [
                  {
                    "@type": "Person",
                    "name": "Alfi Sharin Shimu",
                    "jobTitle": "Managing Director",
                    "description": "Alfi leads our operations team with expertise in process optimization and quality assurance, ensuring every client receives exceptional service and strategic growth."
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "26",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "award": [
                  "386+ Projects Completed",
                  "99.9% Success Rate",
                  "26+ Happy Clients",
                  "8+ Years Experience"
                ],
                "knowsAbout": [
                  "Virtual Assistant Services",
                  "Administrative Support",
                  "E-commerce Solutions",
                  "Creative Design",
                  "Digital Marketing",
                  "Web Development"
                ],
                "areaServed": {
                  "@type": "Place",
                  "name": "Worldwide"
                },
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
                    "name": "About",
                    "item": "https://tasksace.com/about"
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