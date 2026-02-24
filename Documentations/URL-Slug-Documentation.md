# TasksACE URL Slug Documentation

## Table of Contents
1. [Migration History](#migration-history)
2. [Current URL Structure](#current-url-structure)
3. [Future URL Guidelines](#future-url-guidelines)
4. [Implementation Rules](#implementation-rules)
5. [Quick Reference](#quick-reference)

---

## Migration History

### Migration Date: June 8, 2025
**Objective:** Transform long, complex URLs into clean, SEO-friendly slugs

### Main Website Pages

| Page Name | Old URL | New URL | Status |
|-----------|---------|---------|--------|
| Terms of Service | `/terms` | `/terms-of-service` | ✅ Complete |
| Privacy Policy | `/privacy` | `/privacy-policy` | ✅ Complete |
| Cookie Policy | `/cookies` | `/cookie-policy` | ✅ Complete |
| Homepage | `/` | `/` | ✅ No change needed |
| About | `/about` | `/about` | ✅ No change needed |
| Contact | `/contact` | `/contact` | ✅ No change needed |
| Services | `/services` | `/services` | ✅ No change needed |
| Blog | `/blog` | `/blog` | ✅ No change needed |
| Case Studies | `/case-studies` | `/case-studies` | ✅ No change needed |
| Thank You | `/thank-you` | `/thank-you` | ✅ No change needed |

### Service Category Pages

| Category | Old URL | New URL | Improvement |
|----------|---------|---------|-------------|
| Administrative Services | `/services/administrative-assistant` | `/services/administrative` | 40% shorter, keyword-focused |
| E-commerce Solutions | `/services/e-commerce-solutions` | `/services/ecommerce` | 50% shorter, no hyphens |
| Creative & Design | `/services/creative-and-design-services` | `/services/creative-design` | 45% shorter, cleaner |
| Digital Marketing | `/services/digital-marketing-and-content` | `/services/digital-marketing` | 35% shorter, focused |
| Web Development | `/services/web-development-and-technical` | `/services/web-development` | 30% shorter, precise |
| Copywriting | `/services/copywriting` | `/services/copywriting` | ✅ No change needed |
| E-commerce Assistant | `/services/ecommerce-assistant` | `/services/ecommerce-assistant` | ✅ No change needed |

### Individual Service Pages

#### Administrative Services
| Service | Old URL | New URL | Rationale |
|---------|---------|---------|-----------|
| Back-Office Solutions | `/services/administrative-assistant/back-office-solutions` | `/services/administrative/back-office` | Removed redundancy |
| Data Entry & Management | `/services/administrative-assistant/data-entry-and-management` | `/services/administrative/data-entry` | Simplified, core keyword |
| Email Management | `/services/administrative-assistant/email-management` | `/services/administrative/email-management` | ✅ Already clean |
| Virtual Assistant Support | `/services/administrative-assistant/virtual-assistant-support` | `/services/administrative/va-support` | Shortened abbreviation |
| Calendar & Scheduling | `/services/administrative-assistant/calendar-and-scheduling` | `/services/administrative/calendar` | Core function focus |

#### E-commerce Services
| Service | Old URL | New URL | Rationale |
|---------|---------|---------|-----------|
| Product Upload & Listing | `/services/e-commerce-solutions/product-upload-and-listing` | `/services/ecommerce/product-upload` | Shortened, key action |
| Product Description Writing | `/services/e-commerce-solutions/product-description-writing` | `/services/ecommerce/product-description` | Removed action verb |
| Product Image Processing | `/services/e-commerce-solutions/product-image-processing` | `/services/ecommerce/image-processing` | Removed redundant "product" |
| Inventory Management | `/services/e-commerce-solutions/inventory-management` | `/services/ecommerce/inventory` | Simplified to core term |
| Customer Support | `/services/e-commerce-solutions/customer-support` | `/services/ecommerce/customer-support` | ✅ Already clean |

#### Creative & Design Services
| Service | Old URL | New URL | Rationale |
|---------|---------|---------|-----------|
| Graphic Design (Canva) | `/services/creative-and-design-services/graphic-design-canva` | `/services/creative-design/canva-design` | Tool-focused naming |
| Basic Video Editing | `/services/creative-and-design-services/basic-video-editing` | `/services/creative-design/video-editing` | Removed "basic" qualifier |
| Social Media Content | `/services/creative-and-design-services/social-media-content` | `/services/creative-design/social-media-content` | ✅ Already clean |
| E-commerce Graphics | `/services/creative-and-design-services/e-commerce-graphics` | `/services/creative-design/ecommerce-graphics` | Consistent ecommerce naming |
| Business Materials Design | `/services/creative-and-design-services/business-materials-design` | `/services/creative-design/business-materials` | Removed redundant "design" |

#### Digital Marketing Services
| Service | Old URL | New URL | Rationale |
|---------|---------|---------|-----------|
| Social Media Management | `/services/digital-marketing-and-content/social-media-management` | `/services/digital-marketing/social-media` | Shortened, implied management |
| Content Creation | `/services/digital-marketing-and-content/content-creation` | `/services/digital-marketing/content` | Single word focus |
| Keyword Research | `/services/digital-marketing-and-content/keyword-research` | `/services/digital-marketing/keyword-research` | ✅ Already clean |
| YouTube SEO | `/services/digital-marketing-and-content/youtube-seo` | `/services/digital-marketing/youtube-seo` | ✅ Already clean |
| Copywriting | `/services/digital-marketing-and-content/copywriting` | `/services/digital-marketing/copywriting` | ✅ Already clean |

#### Web Development Services
| Service | Old URL | New URL | Rationale |
|---------|---------|---------|-----------|
| Custom Website Creation | `/services/web-development-and-technical/custom-website-creation` | `/services/web-development/custom-websites` | Plural for broader scope |
| Landing Page Creation | `/services/web-development-and-technical/landing-page-creation` | `/services/web-development/landing-pages` | Plural, removed action |
| E-commerce Website Development | `/services/web-development-and-technical/e-commerce-website-development` | `/services/web-development/ecommerce-websites` | Consistent naming |
| Website Maintenance | `/services/web-development-and-technical/website-maintenance` | `/services/web-development/maintenance` | Shortened |
| Small Tool Development | `/services/web-development-and-technical/small-tool-development` | `/services/web-development/tools` | Simplified to essence |

---

## Current URL Structure

### Hierarchical Pattern
```
/services/[category]/[specific-service]
```

### Category Naming Convention
- **administrative** - Administrative and VA services
- **ecommerce** - E-commerce solutions and support
- **creative-design** - Creative and design services
- **digital-marketing** - Marketing and content services
- **web-development** - Technical and development services
- **copywriting** - Standalone copywriting services
- **ecommerce-assistant** - Dedicated e-commerce VA services

### Service Naming Convention
- Use **hyphens** to separate words (kebab-case)
- **Lowercase** letters only
- **No redundant words** (no "service", "solution", "management" unless essential)
- **Focus on core keywords**
- **Abbreviate when logical** (va-support, seo, etc.)

---

## Future URL Guidelines

### For New Services
When adding new services, follow these rules:

#### 1. Category Assignment
- Determine primary category first
- Use existing categories when possible
- Only create new categories for fundamentally different service types

#### 2. URL Construction Rules

**DO:**
- Keep URLs under 50 characters when possible
- Use primary keywords that users search for
- Make URLs readable and memorable
- Use consistent patterns across similar services
- Consider mobile sharing (shorter is better)

**DON'T:**
- Use unnecessary words (the, and, or, of, for, with)
- Include action words unless essential (creation, management, development)
- Use numbers or special characters
- Create overly nested structures (max 3 levels)
- Use brand names unless it's the focus (canva-design is OK)

#### 3. SEO Considerations
- **Primary keyword** should be in the URL
- **Secondary keywords** can be in page title/meta
- **Competitor analysis** - check what URLs rank well
- **User intent** - match what users expect to find

### Expansion Scenarios

#### New Service Categories
If adding major new categories:
```
/services/[new-category]/[service]
```

**Potential Future Categories:**
- `automation` - For automation and workflow services
- `consulting` - For business consulting services
- `training` - For training and educational services
- `analysis` - For data analysis and research services

#### International/Regional Services
For future international expansion:
```
/services/[category]/[service] (English - default)
/es/services/[category]/[service] (Spanish)
/fr/services/[category]/[service] (French)
```

#### Specialized Services
For niche or specialized services:
```
/services/[category]/[specialization]-[service]
```

**Examples:**
- `/services/ecommerce/shopify-setup`
- `/services/digital-marketing/linkedin-ads`
- `/services/web-development/wordpress-sites`

---

## Implementation Rules

### Technical Requirements

#### 1. File Structure
- Each URL must have corresponding directory structure
- Each service needs `page.tsx` and `layout.tsx`
- Schema markup must be updated in `layout.tsx`

#### 2. Internal Linking
- All internal links must be updated when URLs change
- Update navigation menus, footers, and CTAs
- Update dynamic link generation in category pages

#### 3. SEO Maintenance
- Update schema markup with new URLs
- Update breadcrumb navigation
- Update canonical URLs
- Update sitemap.xml (if automated, verify generation)

#### 4. Redirects (If Needed)
For future URL changes, implement 301 redirects:
```javascript
// In next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-url',
        destination: '/new-url',
        permanent: true,
      },
    ]
  },
}
```

### Code Update Checklist
When changing URLs, update:
- [ ] Directory structure
- [ ] Navigation components
- [ ] Footer links
- [ ] Dynamic link generation
- [ ] Schema markup
- [ ] Breadcrumbs
- [ ] Internal page links
- [ ] sitemap generation

---

## Quick Reference

### Current Active URLs (All Categories)

#### Main Services
```
/services/administrative
/services/ecommerce
/services/creative-design
/services/digital-marketing
/services/web-development
/services/copywriting
/services/ecommerce-assistant
```

#### Administrative Services
```
/services/administrative/back-office
/services/administrative/data-entry
/services/administrative/email-management
/services/administrative/va-support
/services/administrative/calendar
```

#### E-commerce Services
```
/services/ecommerce/product-upload
/services/ecommerce/product-description
/services/ecommerce/image-processing
/services/ecommerce/inventory
/services/ecommerce/customer-support
```

#### Creative & Design Services
```
/services/creative-design/canva-design
/services/creative-design/video-editing
/services/creative-design/social-media-content
/services/creative-design/ecommerce-graphics
/services/creative-design/business-materials
```

#### Digital Marketing Services
```
/services/digital-marketing/social-media
/services/digital-marketing/content
/services/digital-marketing/keyword-research
/services/digital-marketing/youtube-seo
/services/digital-marketing/copywriting
```

#### Web Development Services
```
/services/web-development/custom-websites
/services/web-development/landing-pages
/services/web-development/ecommerce-websites
/services/web-development/maintenance
/services/web-development/tools
```

### URL Pattern Examples

**Good Examples:**
```
✅ /services/ecommerce/shopify-setup
✅ /services/digital-marketing/facebook-ads
✅ /services/web-development/react-apps
✅ /services/administrative/bookkeeping
```

**Poor Examples:**
```
❌ /services/ecommerce-solutions-and-management/shopify-store-setup-and-configuration
❌ /services/digital-marketing-and-content-creation/facebook-advertisement-management
❌ /services/web-development-and-technical-solutions/react-application-development
❌ /services/administrative-assistant-services/bookkeeping-and-accounting-support
```

---

**Last Updated:** June 8, 2025  
**Version:** 1.0  
**Status:** Production Ready ✅

---

*This document should be updated whenever URL structure changes are made to maintain consistency and provide reference for future development.* 