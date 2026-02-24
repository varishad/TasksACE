# URL Generation Rules & Standards

## Quick Decision Tree

When adding a new service to TasksACE, follow this decision tree:

```
1. Is this service similar to existing services?
   ├── YES → Use existing category pattern
   └── NO → Consider new category (rare)

2. What's the core function? (1-2 words max)
   ├── Examples: upload, design, write, manage, analyze
   └── Avoid: creation, management, solutions, services

3. What's the target/object? (1-2 words max)
   ├── Examples: products, content, websites, campaigns
   └── Keep specific and searchable

4. Combine: /services/[category]/[core-function-or-target]
```

---

## Standard Patterns by Category

### Administrative Services
**Pattern:** `/services/administrative/[task-type]`

**Current Examples:**
- `back-office` - Back office operations
- `data-entry` - Data entry tasks  
- `email-management` - Email handling
- `va-support` - General VA tasks
- `calendar` - Scheduling tasks

**Future Service Examples:**
- `bookkeeping` - Financial record keeping
- `invoicing` - Invoice processing
- `crm-management` - CRM data handling
- `appointment-setting` - Cold calling/setting
- `travel-planning` - Travel coordination

### E-commerce Services  
**Pattern:** `/services/ecommerce/[ecommerce-function]`

**Current Examples:**
- `product-upload` - Product listing
- `product-description` - Product copy
- `image-processing` - Product images
- `inventory` - Stock management
- `customer-support` - Support services

**Future Service Examples:**
- `store-setup` - Platform setup (Shopify/WooCommerce)
- `order-processing` - Order fulfillment
- `reviews-management` - Review monitoring
- `competitor-analysis` - Market research
- `pricing-optimization` - Price strategies

### Creative & Design Services
**Pattern:** `/services/creative-design/[design-type]`

**Current Examples:**
- `canva-design` - Canva graphics
- `video-editing` - Video production
- `social-media-content` - Social graphics
- `ecommerce-graphics` - Store graphics
- `business-materials` - Corporate materials

**Future Service Examples:**
- `logo-design` - Brand logos
- `website-design` - Web design
- `presentation-design` - PowerPoint/Slides
- `infographic-design` - Data visualization
- `packaging-design` - Product packaging

### Digital Marketing Services
**Pattern:** `/services/digital-marketing/[marketing-channel-or-function]`

**Current Examples:**
- `social-media` - Social management
- `content` - Content creation
- `keyword-research` - SEO research
- `youtube-seo` - YouTube optimization
- `copywriting` - Marketing copy

**Future Service Examples:**
- `email-marketing` - Email campaigns
- `google-ads` - PPC advertising
- `facebook-ads` - Social advertising
- `seo-optimization` - Website SEO
- `analytics-reporting` - Data analysis

### Web Development Services
**Pattern:** `/services/web-development/[technology-or-project-type]`

**Current Examples:**
- `custom-websites` - Bespoke sites
- `landing-pages` - Conversion pages
- `ecommerce-websites` - Online stores
- `maintenance` - Site upkeep
- `tools` - Custom applications

**Future Service Examples:**
- `wordpress-sites` - WordPress development
- `shopify-setup` - Shopify development
- `api-integration` - Third-party connections
- `database-setup` - Data architecture
- `mobile-optimization` - Mobile improvements

---

## Naming Convention Rules

### DO's ✅

1. **Use Primary Keywords**
   ```
   ✅ Good: facebook-ads, shopify-setup, logo-design
   ❌ Bad: facebook-advertisement-management, shopify-store-configuration, logo-creation-service
   ```

2. **Keep It Short & Memorable**
   ```
   ✅ Good: seo, ppc-ads, email-campaigns  
   ❌ Bad: search-engine-optimization, pay-per-click-advertising, email-marketing-campaigns
   ```

3. **Use Hyphens for Word Separation**
   ```
   ✅ Good: social-media, email-marketing, data-entry
   ❌ Bad: socialmedia, email_marketing, dataentry
   ```

4. **Focus on User Search Intent**
   ```
   ✅ Good: bookkeeping (what users search)
   ❌ Bad: financial-record-management (technical description)
   ```

5. **Be Consistent Within Categories**
   ```
   ✅ Administrative: data-entry, email-management, calendar
   ❌ Mixed: data-entry-services, email-mgmt, calendar-and-scheduling
   ```

### DON'Ts ❌

1. **Avoid Unnecessary Words**
   ```
   ❌ services, solutions, management, creation, development, support
   ✅ Use only when essential for clarity
   ```

2. **Don't Use Action Verbs Unless Core**
   ```
   ❌ creating, managing, developing, building, designing
   ✅ design, setup, optimization (when it's the service)
   ```

3. **Avoid Brand Names Unless Focus**
   ```
   ✅ canva-design (Canva is the tool/differentiator)
   ❌ microsoft-office-training (unless MS Office specific)
   ```

4. **Don't Over-Specify**
   ```
   ❌ beginner-logo-design, advanced-seo-optimization
   ✅ logo-design, seo-optimization
   ```

5. **Avoid Numbers & Special Characters**
   ```
   ❌ seo-2024, email-marketing!, web-design-v2
   ✅ seo, email-marketing, web-design
   ```

---

## Testing Your URL

Before implementing a new URL, test it:

### 1. Clarity Test
- Can someone guess the service from the URL?
- Is it obvious what category it belongs to?

### 2. Competitor Analysis
- What URLs do competitors use for similar services?
- What appears in search results for related terms?

### 3. Search Intent Test
- Do people search for this exact term?
- Check Google Keyword Planner or similar tools

### 4. Mobile Sharing Test
- Is the URL short enough for mobile sharing?
- Does it look professional in social media?

### 5. Future-Proof Test
- Will this URL still make sense in 2-3 years?
- Is it broad enough for service evolution?

---

## Common Scenarios & Solutions

### Scenario 1: Service Spans Multiple Categories
**Problem:** "Social Media Ad Design" could be creative-design OR digital-marketing

**Solution:** Choose based on primary user intent
- If users want design → `/services/creative-design/social-ads`
- If users want marketing → `/services/digital-marketing/social-ads`

### Scenario 2: Very Specific Service
**Problem:** "Shopify Product CSV Upload Optimization"

**Solution:** Use broader, searchable terms
- ✅ `/services/ecommerce/shopify-optimization`
- ❌ `/services/ecommerce/shopify-product-csv-upload-optimization`

### Scenario 3: New Technology/Trend
**Problem:** New service like "AI Content Generation"

**Solution:** Focus on function, not technology
- ✅ `/services/digital-marketing/ai-content`
- ✅ `/services/digital-marketing/content-automation`

### Scenario 4: Premium vs Basic Services
**Problem:** Want to differentiate service levels

**Solution:** Use descriptive terms, not hierarchy
- ✅ `/services/web-development/custom-websites` (premium implied)
- ✅ `/services/web-development/template-websites` (basic implied)
- ❌ `/services/web-development/premium-websites`

---

## URL Approval Checklist

Before finalizing any new URL:

- [ ] **Length:** Under 50 characters total
- [ ] **Keywords:** Contains primary search terms
- [ ] **Consistency:** Matches category patterns
- [ ] **Clarity:** Obvious what the service is
- [ ] **SEO Friendly:** No stop words or fluff
- [ ] **Mobile Ready:** Shareable on mobile
- [ ] **Future Proof:** Won't need changing soon
- [ ] **Unique:** Doesn't conflict with existing URLs
- [ ] **Professional:** Looks credible and trustworthy

---

## Implementation Workflow

### 1. Plan the URL
```bash
# Use this template
/services/[category]/[service-name]

# Check against existing URLs
# Verify no conflicts
```

### 2. Create Directory Structure
```bash
mkdir -p app/services/[category]/[service-name]
```

### 3. Create Required Files
- `page.tsx` - Main service page
- `layout.tsx` - SEO metadata & schema

### 4. Update Internal Links
- Add to category page (dynamic generation)
- Update navigation if needed
- Update footer if major service

### 5. Test & Verify
- Check URL loads correctly
- Verify schema markup
- Test mobile display
- Confirm navigation works

---

**Remember:** When in doubt, choose the simpler, shorter option. You can always create redirects later, but complex URLs are harder to fix once established.

---

**Last Updated:** June 8, 2025  
**Author:** AI Assistant  
**Status:** Active Guidelines ✅ 