-- Migration to flatten service URLs in unified_seo table
-- Applied on 2026-02-24

BEGIN;

-- Update Administrative Services
UPDATE public.unified_seo SET entity_id = '/services/back-office-solutions' WHERE entity_id = '/services/administrative/back-office';
UPDATE public.unified_seo SET entity_id = '/services/data-entry-specialists' WHERE entity_id = '/services/administrative/data-entry';
UPDATE public.unified_seo SET entity_id = '/services/virtual-assistant-support' WHERE entity_id = '/services/administrative/va-support';
UPDATE public.unified_seo SET entity_id = '/services/email-management-solutions' WHERE entity_id = '/services/administrative/email-management';
UPDATE public.unified_seo SET entity_id = '/services/calendar-management-services' WHERE entity_id = '/services/administrative/calendar';

-- Update E-commerce Services
UPDATE public.unified_seo SET entity_id = '/services/ecommerce-product-listing' WHERE entity_id = '/services/ecommerce/product-upload';
UPDATE public.unified_seo SET entity_id = '/services/product-description-writing' WHERE entity_id = '/services/ecommerce/product-description';
UPDATE public.unified_seo SET entity_id = '/services/product-image-editing' WHERE entity_id = '/services/ecommerce/image-processing';
UPDATE public.unified_seo SET entity_id = '/services/ecommerce-inventory-management' WHERE entity_id = '/services/ecommerce/inventory';
UPDATE public.unified_seo SET entity_id = '/services/ecommerce-customer-support' WHERE entity_id = '/services/ecommerce/customer-support';
UPDATE public.unified_seo SET entity_id = '/services/ecommerce-assistant-services' WHERE entity_id = '/services/ecommerce-assistant';

-- Update Creative & Design Services
UPDATE public.unified_seo SET entity_id = '/services/professional-canva-design' WHERE entity_id = '/services/creative-design/canva-design';
UPDATE public.unified_seo SET entity_id = '/services/business-branding-materials' WHERE entity_id = '/services/creative-design/business-materials';
UPDATE public.unified_seo SET entity_id = '/services/ecommerce-graphic-design' WHERE entity_id = '/services/creative-design/ecommerce-graphics';
UPDATE public.unified_seo SET entity_id = '/services/video-editing-solutions' WHERE entity_id = '/services/creative-design/video-editing';
UPDATE public.unified_seo SET entity_id = '/services/social-media-graphics' WHERE entity_id = '/services/creative-design/social-media-content';

-- Update Digital Marketing Services
UPDATE public.unified_seo SET entity_id = '/services/copywriting-services' WHERE entity_id = '/services/digital-marketing/copywriting';
UPDATE public.unified_seo SET entity_id = '/services/youtube-seo-optimization' WHERE entity_id = '/services/digital-marketing/youtube-seo';
UPDATE public.unified_seo SET entity_id = '/services/keyword-research-services' WHERE entity_id = '/services/digital-marketing/keyword-research';
UPDATE public.unified_seo SET entity_id = '/services/content-marketing-solutions' WHERE entity_id = '/services/digital-marketing/content';
UPDATE public.unified_seo SET entity_id = '/services/social-media-management' WHERE entity_id = '/services/digital-marketing/social-media';

-- Update Web Development Services
UPDATE public.unified_seo SET entity_id = '/services/custom-website-development' WHERE entity_id = '/services/web-development/custom-websites';
UPDATE public.unified_seo SET entity_id = '/services/ecommerce-website-design' WHERE entity_id = '/services/web-development/ecommerce-websites';
UPDATE public.unified_seo SET entity_id = '/services/web-development-tools' WHERE entity_id = '/services/web-development/tools';
UPDATE public.unified_seo SET entity_id = '/services/high-converting-landing-pages' WHERE entity_id = '/services/web-development/landing-pages';
UPDATE public.unified_seo SET entity_id = '/services/website-maintenance-services' WHERE entity_id = '/services/web-development/maintenance';

-- Ensure entity_type is set to 'page' for all flattened services for consistency
UPDATE public.unified_seo 
SET entity_type = 'page' 
WHERE entity_id LIKE '/services/%' 
AND entity_id NOT IN ('/services/administrative', '/services/creative-design', '/services/ecommerce', '/services/digital-marketing', '/services/web-development');

COMMIT;
