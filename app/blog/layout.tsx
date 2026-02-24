import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/blog')
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 