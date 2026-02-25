-- Migration: Insert SEO Metadata for the Virtual Assistant Blog Post
-- Date: 2026-02-25
-- Description: Adds the meta title, description, and primary keyword for the new blog post.

-- [UP]
INSERT INTO public.unified_seo (
    entity_type, 
    entity_id, 
    meta_title, 
    meta_description, 
    primary_keyword, 
    focus_status,
    canonical_url,
    og_title,
    og_description,
    og_image
)
VALUES (
    'blog',
    '/blog/virtual-assistant-for-small-business',
    'Virtual Assistant for Small Business: 2026 Strategy to Scale',
    'Stop trading your hours for dollars. This guide reveals how the most successful small businesses use virtual assistants to reclaim 40+ hours a month.',
    'virtual assistant for small business',
    'optimized',
    'https://tasksace.com/blog/virtual-assistant-for-small-business',
    'Virtual Assistant for Small Business: 2026 Strategy to Scale',
    'Stop trading your hours for dollars. This guide reveals how the most successful small businesses use virtual assistants to reclaim 40+ hours a month.',
    'https://tasksace.com/blog-va-small-business.png'
)
ON CONFLICT (entity_type, entity_id) DO UPDATE SET 
    meta_title = EXCLUDED.meta_title,
    meta_description = EXCLUDED.meta_description,
    primary_keyword = EXCLUDED.primary_keyword,
    focus_status = EXCLUDED.focus_status,
    canonical_url = EXCLUDED.canonical_url,
    og_title = EXCLUDED.og_title,
    og_description = EXCLUDED.og_description,
    og_image = EXCLUDED.og_image,
    updated_at = NOW();

-- [DOWN]
-- DELETE FROM public.unified_seo WHERE entity_type = 'blog' AND entity_id = '/blog/virtual-assistant-for-small-business';
