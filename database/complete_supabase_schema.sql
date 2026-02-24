-- TasksACE Master Database Schema
-- Last Updated: 2025-02-25

-- ==========================================
-- EXTENSIONS
-- ==========================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "pgcrypto" SCHEMA "extensions";

-- ==========================================
-- TABLES
-- ==========================================

-- UNIFIED SEO TABLE
-- Centralized storage for metadata, Open Graph, and JSON-LD schemas
CREATE TABLE IF NOT EXISTS public.unified_seo (
    id UUID PRIMARY KEY DEFAULT extensions.uuid_generate_v4(),
    entity_type TEXT NOT NULL CHECK (entity_type IN ('page', 'blog', 'product', 'tool', 'calculator', 'home', 'category', 'other')),
    entity_id TEXT,
    meta_title TEXT NOT NULL,
    meta_description TEXT NOT NULL,
    canonical_url TEXT,
    og_title TEXT,
    og_description TEXT,
    og_image TEXT,
    structured_data JSONB,
    faq_schema JSONB,
    howto_schema JSONB,
    breadcrumb_schema JSONB,
    robots_meta TEXT,
    related_entities TEXT[],
    primary_keyword TEXT,
    focus_status TEXT DEFAULT 'draft' CHECK (focus_status IN ('draft', 'optimized', 'needs_review')),
    priority_score INTEGER DEFAULT 80 CHECK (priority_score >= 0 AND priority_score <= 100),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    CONSTRAINT valid_og_image CHECK (og_image IS NULL OR og_image ~ '^https?://'),
    CONSTRAINT unique_entity_seo UNIQUE (entity_type, entity_id)
);

-- ==========================================
-- INDEXES
-- ==========================================
CREATE INDEX IF NOT EXISTS idx_unified_seo_entity ON public.unified_seo(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_unified_seo_updated_at ON public.unified_seo(updated_at);

-- ==========================================
-- RLS POLICIES (Row Level Security)
-- ==========================================
ALTER TABLE public.unified_seo ENABLE ROW LEVEL SECURITY;

-- Allow public read access to SEO data
CREATE POLICY "Allow public read access to unified_seo" 
ON public.unified_seo FOR SELECT 
USING (true);

-- Allow authenticated users with service role/admin to manage SEO data
-- (Note: Customize this based on your specific admin role logic)
CREATE POLICY "Allow service role to manage unified_seo" 
ON public.unified_seo FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- ==========================================
-- FUNCTIONS & TRIGGERS
-- ==========================================

-- Function to handle updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for unified_seo
CREATE TRIGGER set_updated_at_unified_seo
    BEFORE UPDATE ON public.unified_seo
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();
