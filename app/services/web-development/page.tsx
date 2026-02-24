import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WebDevelopmentClient from './WebDevelopmentClient'
import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services/web-development')
}

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <WebDevelopmentClient />
      <Footer />
    </main>
  )
}