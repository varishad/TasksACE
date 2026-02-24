import { Metadata } from 'next'
import { supabase } from './supabase'
import { config } from './config'

export interface SEOMetadata {
    meta_title: string
    meta_description: string
    canonical_url: string
    og_title: string
    og_description: string
    og_image: string
    robots_meta: string
    structured_data: any
    breadcrumb_schema: any
    faq_schema: any
    howto_schema: any
    primary_keyword: string
}

export async function getSEOMetadata(path: string): Promise<SEOMetadata | null> {
    // Normalize path
    const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '')

    const { data, error } = await supabase
        .from('unified_seo')
        .select('*')
        .eq('entity_id', normalizedPath)
        .single()

    if (error || !data) {
        console.error('SEO Data fetch error for:', path, error)
        return null
    }

    return data as SEOMetadata
}

export async function generateDynamicMetadata(path: string): Promise<Metadata> {
    const seo = await getSEOMetadata(path)

    if (!seo) {
        return {
            title: config.siteName,
            robots: 'index, follow'
        }
    }

    return {
        title: seo.meta_title,
        description: seo.meta_description,
        alternates: {
            canonical: seo.canonical_url,
        },
        robots: seo.robots_meta,
        openGraph: {
            title: seo.og_title || seo.meta_title,
            description: seo.og_description || seo.meta_description,
            url: seo.canonical_url,
            siteName: config.siteName,
            images: seo.og_image ? [{ url: seo.og_image }] : [],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: seo.og_title || seo.meta_title,
            description: seo.og_description || seo.meta_description,
            images: seo.og_image ? [seo.og_image] : [],
        },
        keywords: seo.primary_keyword,
    }
}
