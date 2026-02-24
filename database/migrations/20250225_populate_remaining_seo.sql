-- Migration: Populate contextual SEO data (FAQs, How-Tos, Related Entities, Updated By)
-- Date: 2025-02-25
-- Description: Fills the remaining 4 columns in the unified_seo table

-- [UP]
-- 1. Populate updated_by with the discovered admin user
UPDATE public.unified_seo
SET updated_by = '790e1c2d-1e33-4580-a253-77579a942bf0'
WHERE updated_by IS NULL;

-- 2. Populate related_entities (Linking sub-services to parents)
UPDATE public.unified_seo
SET related_entities = ARRAY['/services/administrative']
WHERE entity_id LIKE '/services/administrative/%';

UPDATE public.unified_seo
SET related_entities = ARRAY['/services/creative-design']
WHERE entity_id LIKE '/services/creative-design/%';

UPDATE public.unified_seo
SET related_entities = ARRAY['/services/ecommerce']
WHERE entity_id LIKE '/services/ecommerce/%';

UPDATE public.unified_seo
SET related_entities = ARRAY['/services/digital-marketing']
WHERE entity_id LIKE '/services/digital-marketing/%';

UPDATE public.unified_seo
SET related_entities = ARRAY['/services/web-development']
WHERE entity_id LIKE '/services/web-development/%';

-- 3. Populate faq_schema for main service pages
UPDATE public.unified_seo
SET faq_schema = jsonb_build_object(
    '@context', 'https://schema.org',
    '@type', 'FAQPage',
    'mainEntity', jsonb_build_array(
        jsonb_build_object(
            '@type', 'Question',
            'name', 'What services do your virtual assistants provide?',
            'acceptedAnswer', jsonb_build_object(
                '@type', 'Answer',
                'text', 'Our VAs provide a wide range of services including administrative support, digital marketing, creative design, and e-commerce management.'
            )
        ),
        jsonb_build_object(
            '@type', 'Question',
            'name', 'How do I get started with TasksACE?',
            'acceptedAnswer', jsonb_build_object(
                '@type', 'Answer',
                'text', 'Simply contact us through our website, and we will match you with a virtual assistant that fits your needs.'
            )
        )
    )
)
WHERE entity_type = 'home' OR entity_id = '/services';

-- 4. Populate howto_schema for specialized service pages
UPDATE public.unified_seo
SET howto_schema = jsonb_build_object(
    '@context', 'https://schema.org',
    '@type', 'HowTo',
    'name', 'How to Scale Your Business with TasksACE',
    'step', jsonb_build_array(
        jsonb_build_object(
            '@type', 'HowToStep',
            'name', 'Identify Tasks',
            'text', 'Identify the repetitive tasks you want to outsource.'
        ),
        jsonb_build_object(
            '@type', 'HowToStep',
            'name', 'Connect with a VA',
            'text', 'We match you with a professional virtual assistant.'
        ),
        jsonb_build_object(
            '@type', 'HowToStep',
            'name', 'Scale Up',
            'text', 'Focus on growth while we handle the daily operations.'
        )
    )
)
WHERE entity_id IN ('/services/administrative', '/services/web-development');

-- [DOWN]
-- UPDATE public.unified_seo SET faq_schema = NULL, howto_schema = NULL, related_entities = NULL, updated_by = NULL;
