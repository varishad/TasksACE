-- Migration: Create Unified SEO Table
-- Date: 2025-02-25
-- Description: Adds the centralized SEO metadata table

-- [UP]
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

CREATE INDEX IF NOT EXISTS idx_unified_seo_entity ON public.unified_seo(entity_type, entity_id);

ALTER TABLE public.unified_seo ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read access to unified_seo') THEN
        CREATE POLICY "Allow public read access to unified_seo" ON public.unified_seo FOR SELECT USING (true);
    END IF;
END $$;

-- [DOWN]
-- DROP TABLE IF EXISTS public.unified_seo;
