import os

base_dir = "/Users/mdrishadrahman/Documents/Coding/Github/TasksACE/app"

# Mapping of Logical SEO Path -> Physical Folder (relative to app/)
mapping = {
    '/about': 'about',
    '/contact': 'contact',
    '/services/administrative/calendar': 'services/calendar-management-services',
    '/services/administrative/data-entry': 'services/data-entry-specialists',
    '/services/administrative/va-support': 'services/virtual-assistant-support',
    '/services/administrative/email-management': 'services/email-management-solutions',
    '/services/ecommerce/product-upload': 'services/ecommerce-product-listing',
    '/services/ecommerce/product-description': 'services/product-description-writing',
    '/services/ecommerce/image-processing': 'services/product-image-editing',
    '/services/ecommerce/inventory': 'services/ecommerce-inventory-management',
    '/services/ecommerce/customer-support': 'services/ecommerce-customer-support',
    '/services/creative-design/canva-design': 'services/professional-canva-design',
    '/services/creative-design/business-materials': 'services/business-branding-materials',
    '/services/creative-design/ecommerce-graphics': 'services/ecommerce-graphic-design',
    '/services/creative-design/video-editing': 'services/video-editing-solutions',
    '/services/creative-design/social-media-content': 'services/social-media-graphics',
    '/services/digital-marketing/copywriting': 'services/copywriting-services',
    '/services/digital-marketing/youtube-seo': 'services/youtube-seo-optimization',
    '/services/digital-marketing/keyword-research': 'services/keyword-research-services',
    '/services/digital-marketing/content': 'services/content-marketing-solutions',
    '/services/digital-marketing/social-media': 'services/social-media-management',
    '/services/web-development/custom-websites': 'services/custom-website-development',
    '/services/web-development/ecommerce-websites': 'services/ecommerce-website-design',
    '/services/web-development/tools': 'services/web-development-tools',
    '/services/web-development/landing-pages': 'services/high-converting-landing-pages',
    '/services/web-development/maintenance': 'services/website-maintenance-services',
}

def apply_seo_layout(logical_path, physical_folder):
    directory = os.path.join(base_dir, physical_folder)
    if not os.path.exists(directory):
        print(f"Skipping {physical_folder} (not found)")
        return

    layout_path = os.path.join(directory, "layout.tsx")
    page_path = os.path.join(directory, "page.tsx")

    # If it's a page and no layout exists, we can use layout.
    # If layout exists, we update generateMetadata.
    
    metadata_fn = f"""
export async function generateMetadata() {{
  return await generateDynamicMetadata('{logical_path}')
}}
"""
    
    if os.path.exists(layout_path):
        with open(layout_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if 'generateDynamicMetadata' in content:
            print(f"Layout in {physical_folder} already has SEO integration.")
            return
        
        # Insert imports and metadata function
        if "from '@/lib/seo'" not in content:
            content = "import { generateDynamicMetadata } from '@/lib/seo'\n" + content
        
        # Simple insertion before export default
        if "export default" in content:
            parts = content.split("export default")
            new_content = parts[0] + metadata_fn + "\nexport default" + parts[1]
            with open(layout_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated layout in {physical_folder}")
        else:
            print(f"Could not find export default in {layout_path}")
    else:
        # Create new layout
        content = f"""import React from 'react'
import {{ generateDynamicMetadata }} from '@/lib/seo'

{metadata_fn}

export default function Layout({{
  children,
}}: {{
  children: React.ReactNode
}}) {{
  return <>{children}</>
}}
"""
        with open(layout_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Created layout in {physical_folder}")

if __name__ == "__main__":
    for logical, physical in mapping.items():
        apply_seo_layout(logical, physical)
