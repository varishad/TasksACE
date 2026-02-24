-- Migration: Populate Advanced SEO columns
-- Date: 2025-02-25
-- Description: Fills primary_keyword, breadcrumb_schema, and basic structured_data

-- [UP]
-- 1. Populate primary_keyword based on meta_title (removing brand name)
UPDATE public.unified_seo
SET primary_keyword = REPLACE(REPLACE(meta_title, ' - TasksACE', ''), ' Services', '')
WHERE primary_keyword IS NULL;

-- 2. Populate basic structured_data (WebPage type)
UPDATE public.unified_seo
SET structured_data = jsonb_build_object(
    '@context', 'https://schema.org',
    '@type', 'WebPage',
    'name', meta_title,
    'description', meta_description,
    'url', canonical_url
)
WHERE structured_data IS NULL;

-- 3. Populate breadcrumb_schema (Basic list)
-- This is a simplified version, it will create a breadcrumb based on URL path
UPDATE public.unified_seo
SET breadcrumb_schema = jsonb_build_object(
    '@context', 'https://schema.org',
    '@type', 'BreadcrumbList',
    'itemListElement', jsonb_build_array(
        jsonb_build_object(
            '@type', 'ListItem',
            'position', 1,
            'name', 'Home',
            'item', 'https://tasksace.com'
        ),
        CASE 
            WHEN entity_id != '/' THEN 
                jsonb_build_object(
                    '@type', 'ListItem',
                    'position', 2,
                    'name', INITCAP(REPLACE(split_part(entity_id, '/', 2), '-', ' ')),
                    'item', 'https://tasksace.com/' || split_part(entity_id, '/', 2)
                )
            ELSE NULL
        END,
        CASE 
            WHEN array_length(string_to_array(trim(both '/' from entity_id), '/'), 1) > 1 THEN 
                jsonb_build_object(
                    '@type', 'ListItem',
                    'position', 3,
                    'name', INITCAP(REPLACE(split_part(entity_id, '/', 3), '-', ' ')),
                    'item', 'https://tasksace.com/' || split_part(entity_id, '/', 2) || '/' || split_part(entity_id, '/', 3)
                )
            ELSE NULL
        END
    ) - NULL -- Remove nulls from the array
)
WHERE breadcrumb_schema IS NULL;

-- [DOWN]
-- UPDATE public.unified_seo SET primary_keyword = NULL, structured_data = NULL, breadcrumb_schema = NULL;
