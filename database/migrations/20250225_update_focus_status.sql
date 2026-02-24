-- Migration: Update focus_status to optimized
-- Date: 2025-02-25
-- Description: Sets focus_status to 'optimized' for all seeded records since metadata is now complete.

-- [UP]
UPDATE public.unified_seo
SET focus_status = 'optimized'
WHERE focus_status = 'draft';

-- [DOWN]
-- UPDATE public.unified_seo SET focus_status = 'draft' WHERE focus_status = 'optimized';
