import type { Metadata } from 'next'
import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
    return await generateDynamicMetadata('/blog/virtual-assistant-for-small-business')
}

export default function BlogPostLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
