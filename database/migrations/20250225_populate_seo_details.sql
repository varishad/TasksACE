-- Migration: Populate missing SEO columns
-- Date: 2025-02-25
-- Description: Fills canonical_url, og_title, og_description, og_image, and robots_meta for existing records

-- [UP]
UPDATE public.unified_seo
SET 
    canonical_url = 'https://tasksace.com' || CASE WHEN entity_id = '/' THEN '' ELSE entity_id END,
    og_title = meta_title,
    og_description = meta_description,
    og_image = 'https://tasksace.com/Home Featured.webp',
    robots_meta = 'index, follow'
WHERE canonical_url IS NULL;

-- [DOWN]
-- UPDATE public.unified_seo SET canonical_url = NULL, og_title = NULL, og_description = NULL, og_image = NULL, robots_meta = NULL;
