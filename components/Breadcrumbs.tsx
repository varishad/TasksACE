'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
    label: string
    href: string
}

export default function Breadcrumbs() {
    const pathname = usePathname()

    if (pathname === '/' || pathname.startsWith('/blog')) return null

    const pathSegments = pathname.split('/').filter(segment => segment !== '')

    const breadcrumbs: BreadcrumbItem[] = pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`
        // Format label: capitalize and replace hyphens
        const label = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

        return { label, href }
    })

    // Add Home at the start
    const allBreadcrumbs = [{ label: 'Home', href: '/' }, ...breadcrumbs]

    // Generate JSON-LD
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": allBreadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.label,
            "item": `https://tasksace.com${crumb.href}` // Hardcoded base URL for production readiness
        }))
    }

    return (
        <nav aria-label="Breadcrumb" className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-2">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ol className="flex items-center space-x-2 text-sm text-gray-500 font-medium">
                {allBreadcrumbs.map((crumb, index) => {
                    const isLast = index === allBreadcrumbs.length - 1

                    return (
                        <li key={crumb.href} className="flex items-center">
                            {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
                            {isLast ? (
                                <span className="text-primary-600 font-bold" aria-current="page">
                                    {crumb.label}
                                </span>
                            ) : (
                                <Link
                                    href={crumb.href}
                                    className="hover:text-primary-500 transition-colors flex items-center"
                                >
                                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                                    {crumb.label}
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
