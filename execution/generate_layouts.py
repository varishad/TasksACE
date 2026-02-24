import os

def create_layout_file(path, relative_to_app):
    directory = os.path.join("/Users/mdrishadrahman/Documents/Coding/Github/TasksACE/app", relative_to_app[1:] if relative_to_app.startswith('/') else relative_to_app)
    
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist. Skipping.")
        return

    layout_path = os.path.join(directory, "layout.tsx")
    
    # We could check if it already exists, but the goal is to ensure it exists with the SEO call
    content = f"""import React from 'react'
import type {{ Metadata }} from 'next'
import {{ generateDynamicMetadata }} from '@/lib/seo'

export async function generateMetadata() {{
  return await generateDynamicMetadata('{relative_to_app}')
}}

export default function Layout({{
  children,
}}: {{
  children: React.ReactNode
}}) {{
  return <>{{children}}</>
}}
"""
    
    with open(layout_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Created/Updated {layout_path}")

paths_to_create = [
    '/services/creative-design/business-materials',
    '/services/creative-design/canva-design',
    '/services/creative-design/ecommerce-graphics',
    '/services/creative-design/social-media-content',
    '/services/creative-design/video-editing',
    '/services/ecommerce/customer-support',
    '/services/ecommerce/image-processing',
    '/services/ecommerce/inventory',
    '/services/ecommerce/product-description',
    '/services/ecommerce/product-upload',
    # Parent categories just in case
    '/services/creative-design',
    '/services/ecommerce',
]

if __name__ == "__main__":
    for p in paths_to_create:
        create_layout_file(p, p)
