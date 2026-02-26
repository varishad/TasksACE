import { Metadata } from 'next'
import { generateDynamicMetadata } from '@/lib/seo'

export const metadata: Metadata = {
    title: 'Web Development for Small Business 2026: Why Next.js is King | TasksACE',
    description: 'Stop losing customers to slow websites. Discover why Next.js is the framework of choice for small businesses looking to scale speed, SEO, and conversions in 2026.',
    alternates: {
        canonical: 'https://tasksace.com/blog/next-js-for-small-business',
    },
    openGraph: {
        title: 'Web Development for Small Business 2026: Why Next.js is King',
        description: 'Learn how Next.js transforms your business presence into a high-performance growth engine.',
        images: [{ url: '/blog-nextjs-small-business-pro.png' }],
        type: 'article',
    },
    keywords: 'Web development for small business, Next.js benefits, small business SEO 2026, TasksACE web services, fast business websites',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
