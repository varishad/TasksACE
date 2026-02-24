import re
import json
import os

def parse_report(filepath):
    if not os.path.exists(filepath):
        print(f"Error: File not found at {filepath}")
        return []

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by the horizontal line separator often used in the report
    sections = re.split(r'\n---\n', content)
    
    results = []
    
    for section in sections:
        if 'URL:' not in section:
            continue
            
        data = {}
        
        # Extract URL - supports both bolded and backticked formats
        url_match = re.search(r'\*\*URL:\*\* `?([^`\n\s]+)`?', section)
        if url_match:
            data['url'] = url_match.group(1).strip()
            # Clean up trailing backticks or formatting
            data['url'] = data['url'].rstrip('`')
        else:
            continue

        # Extract Meta Title
        title_match = re.search(r'\*\*Meta Title:\*\* ([^\n]+)', section)
        if title_match:
            data['meta_title'] = title_match.group(1).strip()
        else:
            data['meta_title'] = ""
            
        # Extract Meta Description (The audit mostly has keywords, but we check if it exists)
        desc_match = re.search(r'\*\*Meta Description:\*\* ([^\n]+)', section)
        if desc_match:
            data['meta_description'] = desc_match.group(1).strip()
        else:
            # Fallback placeholder if missing
            page_name = data['url'].replace('/', ' ').strip().title() or 'TasksACE'
            data['meta_description'] = f"Discover professional {page_name} virtual assistant services from TasksACE. We help businesses scale with expert remote support and dedicated administrative solutions."

        # Extract Keywords (Primary, Secondary, etc.)
        keywords = []
        # Match lists under keyword headers
        kw_sections = re.findall(r'\*\*(?:Primary|Secondary|Long-Tail|Category|Service) Keywords[^:]*:\*\*\n((?:- [^\n]+\n?)+)', section)
        
        # Also check for a simple "Keywords" header
        simple_kw = re.findall(r'\*\*Keywords:\*\*\n((?:- [^\n]+\n?)+)', section)
        kw_sections.extend(simple_kw)
        
        for kw_block in kw_sections:
            items = re.findall(r'- ([^\n]+)', kw_block)
            keywords.extend([i.strip() for i in items])
        
        data['primary_keyword'] = keywords[0] if keywords else ""
        data['all_keywords'] = list(set(keywords)) # Unique keywords
        
        # Determine Entity Type based on URL structure
        if data['url'] == '/':
            data['entity_type'] = 'home'
        elif '/blog' in data['url']:
            data['entity_type'] = 'blog'
        elif '/services' in data['url']:
            data['entity_type'] = 'category' if data['url'].count('/') == 2 else 'page'
        else:
            data['entity_type'] = 'page'
            
        results.append(data)
        
    return results

if __name__ == "__main__":
    # Use absolute paths as required by the environment
    base_dir = "/Users/mdrishadrahman/Documents/Coding/Github/TasksACE"
    report_path = os.path.join(base_dir, "SEO-AUDIT-REPORT.md")
    output_path = os.path.join(base_dir, ".tmp/seo_metadata.json")
    
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    metadata = parse_report(report_path)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(metadata, f, indent=4)
        
    print(f"Successfully parsed {len(metadata)} pages to {output_path}")
