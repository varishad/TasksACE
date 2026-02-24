# SOP: SEO Data Migration (3-Layer Architecture)

This directive defines the process for extracting SEO metadata from audit reports and populating the `unified_seo` table in Supabase.

## Goal
Populate the `unified_seo` table with meta titles, descriptions, and keywords for all 42+ pages identified in the SEO audit.

## Inputs
- `SEO-AUDIT-REPORT.md`: The source of truth for keywords and metadata.
- `.env.local`: Supabase credentials (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`).

## Execution Tools
1. `execution/parse_seo_audit.py`:
    - **Input**: `SEO-AUDIT-REPORT.md`
    - **Logic**: RegEx-based parsing to extract URLs, Meta Titles, Meta Descriptions, and Primary Keywords.
    - **Output**: `.tmp/seo_metadata.json`
2. `execution/upsert_unified_seo.py`:
    - **Input**: `.tmp/seo_metadata.json`
    - **Logic**: Use Supabase Python SDK (or HTTP API) to upsert records into `unified_seo`.
    - **Output**: Summary of records created/updated.

## Edge Cases
- **Missing URLs**: Skip entries without a valid path.
- **Empty Meta**: Log a warning if meta titles/descriptions are missing in the report.
- **Duplicate Paths**: Use `entity_type` + `entity_id` as the unique constraint for upserts.

## Verification
- Run `SELECT count(*) FROM unified_seo;` to match the 42 pages in the report.
- Verify a sample page (e.g., Home) against the report content.
