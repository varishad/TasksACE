import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/web-development')
}

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 