import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Video Editing for Small Business 2026: Elevate Your Brand Story | TasksACE',
    description: 'Attention spans are shrinking, but video engagement is skyrocketing. Learn how professional video editing can dramatically boost your brand ROI and customer trust.',
    openGraph: {
        title: 'Video Editing for Small Business 2026: Elevate Your Brand Story',
        description: 'Attention spans are shrinking, but video engagement is skyrocketing. Learn how professional video editing can dramatically boost your brand ROI and customer trust.',
        images: [
            {
                url: '/blog-video-editing-pro.png',
                width: 1200,
                height: 630,
                alt: 'Video Editing for Small Business - TasksACE',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Video Editing for Small Business 2026: Elevate Your Brand Story',
        description: 'Attention spans are shrinking, but video engagement is skyrocketing. Learn how professional video editing can dramatically boost your brand ROI and customer trust.',
        images: ['/blog-video-editing-pro.png'],
    }
}

export default function VideoEditingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
