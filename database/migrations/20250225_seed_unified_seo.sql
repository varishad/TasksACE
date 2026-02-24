-- Migration: Seed Unified SEO with existing website pages
-- Date: 2025-02-25
-- Description: Populates the unified_seo table with the current pages of the website

-- [UP]
INSERT INTO public.unified_seo (entity_type, entity_id, meta_title, meta_description)
VALUES 
    ('home', '/', 'TasksACE - Professional Virtual Assistant Services', 'Scale your business with expert virtual assistants. We handle the tasks so you can focus on growth.'),
    ('page', '/about', 'About Us - TasksACE', 'Learn about our mission, values, and the team behind TasksACE.'),
    ('page', '/contact', 'Contact Us - TasksACE', 'Get in touch for professional virtual assistant services.'),
    ('page', '/privacy-policy', 'Privacy Policy - TasksACE', 'Your privacy is important to us. Read our privacy policy.'),
    ('page', '/terms-of-service', 'Terms of Service - TasksACE', 'Read our terms of service.'),
    ('page', '/cookie-policy', 'Cookie Policy - TasksACE', 'Information about how we use cookies.'),
    ('blog', '/blog', 'Our Blog - TasksACE', 'Insights, tips, and news on virtual assistance and business growth.'),
    ('page', '/case-studies', 'Case Studies - TasksACE', 'Real-world examples of how we help businesses scale.'),
    ('page', '/thank-you', 'Thank You - TasksACE', 'Thank you for reaching out to us.'),
    
    -- Services - Core
    ('page', '/services', 'Our Services - TasksACE', 'Explore our range of virtual assistant services.'),
    ('page', '/services/creative-design', 'Creative Design Services - TasksACE', 'Professional graphics, video editing, and content creation.'),
    ('page', '/services/copywriting', 'Copywriting & Content - TasksACE', 'High-quality copywriting for your business.'),
    ('page', '/services/ecommerce', 'E-commerce Support - TasksACE', 'Scale your online store with specialized e-commerce virtual assistants.'),
    ('page', '/services/digital-marketing', 'Digital Marketing Support - TasksACE', 'SEO, social media, and content marketing services.'),
    ('page', '/services/administrative', 'Administrative Support - TasksACE', 'Daily operations, data entry, and email management.'),
    ('page', '/services/web-development', 'Web Development - TasksACE', 'Custom websites, landing pages, and maintenance.'),
    
    -- Services - Administrative Sub-pages
    ('page', '/services/administrative/calendar', 'Calendar Management - TasksACE', 'Professional scheduling and calendar services.'),
    ('page', '/services/administrative/data-entry', 'Data Entry Services - TasksACE', 'Fast and accurate data entry support.'),
    ('page', '/services/administrative/back-office', 'Back-Office Support - TasksACE', 'General administrative and back-office services.'),
    ('page', '/services/administrative/email-management', 'Email Management - TasksACE', 'Inbox zero and professional email communication.'),
    ('page', '/services/administrative/va-support', 'Virtual Assistant Support - TasksACE', 'General VA support for your daily tasks.'),
    
    -- Services - Creative Design Sub-pages
    ('page', '/services/creative-design/business-materials', 'Business Materials Design - TasksACE', 'Presentation decks, brochures, and corporate materials.'),
    ('page', '/services/creative-design/video-editing', 'Professional Video Editing - TasksACE', 'High-quality video content for marketing and social media.'),
    ('page', '/services/creative-design/canva-design', 'Canva Content Creation - TasksACE', 'Quick and beautiful designs using Canva.'),
    ('page', '/services/creative-design/ecommerce-graphics', 'E-commerce Product Graphics - TasksACE', 'Optimized images for Amazon, Shopify, and more.'),
    ('page', '/services/creative-design/social-media-content', 'Social Media Graphics - TasksACE', 'Engaging visuals for your social channels.'),
    
    -- Services - E-commerce Sub-pages
    ('page', '/services/ecommerce/customer-support', 'E-commerce Customer Support - TasksACE', 'Dedicated support for your online customers.'),
    ('page', '/services/ecommerce/product-upload', 'Product Upload Services - TasksACE', 'Fast and accurate product listings across platforms.'),
    ('page', '/services/ecommerce/inventory', 'Inventory Management - TasksACE', 'Keep your stock levels tracked and optimized.'),
    ('page', '/services/ecommerce/product-description', 'Optimized Product Descriptions - TasksACE', 'SEO-friendly copy that converts shoppers into buyers.'),
    ('page', '/services/ecommerce/image-processing', 'E-commerce Image Processing - TasksACE', 'Background removal and image enhancement.'),
    
    -- Services - Digital Marketing Sub-pages
    ('page', '/services/digital-marketing/social-media', 'Social Media Management - TasksACE', 'Strategic growth for your social presence.'),
    ('page', '/services/digital-marketing/keyword-research', 'SEO Keyword Research - TasksACE', 'Find the best keywords to rank your business.'),
    ('page', '/services/digital-marketing/content', 'Content Strategy - TasksACE', 'Comprehensive content planning and execution.'),
    ('page', '/services/digital-marketing/youtube-seo', 'YouTube SEO & Management - TasksACE', 'Grow your channel with professional optimization.'),
    
    -- Services - Web Development Sub-pages
    ('page', '/services/web-development/tools', 'Web Development Tools - TasksACE', 'Specialized tools for website optimization.'),
    ('page', '/services/web-development/landing-pages', 'Landing Page Design - TasksACE', 'High-converting landing pages for your campaigns.'),
    ('page', '/services/web-development/custom-websites', 'Custom Website Development - TasksACE', 'Bespoke web solutions tailored to your brand.'),
    ('page', '/services/web-development/maintenance', 'Website Maintenance - TasksACE', 'Reliable upkeep and security for your site.'),
    ('page', '/services/web-development/ecommerce-websites', 'E-commerce Web Development - TasksACE', 'Build and optimize your online store.'),
    
    -- Case Studies
    ('page', '/case-studies/techcorp-solutions', 'TechCorp Solutions Case Study - TasksACE', 'How we helped TechCorp increase efficiency by 40%.')

ON CONFLICT (entity_type, entity_id) DO UPDATE SET 
    meta_title = EXCLUDED.meta_title,
    meta_description = EXCLUDED.meta_description,
    updated_at = NOW();

-- [DOWN]
-- DELETE FROM public.unified_seo WHERE entity_id IN ('/', '/about', '/contact', ...);
