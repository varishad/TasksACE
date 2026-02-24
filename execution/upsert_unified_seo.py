import json
import os
import urllib.request
import urllib.error
import ssl

def get_env_var(env_path, name):
    if not os.path.exists(env_path):
        return None
    with open(env_path, 'r') as f:
        for line in f:
            if line.startswith(f"{name}="):
                return line.split('=', 1)[1].strip().strip('"').strip("'")
    return None

def upsert_seo(metadata_path, supabase_url, service_key):
    if not os.path.exists(metadata_path):
        print(f"Error: Metadata file not found at {metadata_path}")
        return

    with open(metadata_path, 'r', encoding='utf-8') as f:
        metadata = json.load(f)

    # Prepare payload for unified_seo table
    payload = []
    for item in metadata:
        payload.append({
            "entity_type": item["entity_type"],
            "entity_id": item["url"],
            "meta_title": item["meta_title"] or f"{item['url'].replace('/', ' ').strip().title() or 'Home'} | TasksACE",
            "meta_description": item["meta_description"],
            "primary_keyword": item["primary_keyword"],
            "focus_status": "optimized"
        })

    headers = {
        "apikey": service_key,
        "Authorization": f"Bearer {service_key}",
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates"
    }

    # PostgREST endpoint with on_conflict targeting the composite unique key
    endpoint = f"{supabase_url.rstrip('/')}/rest/v1/unified_seo?on_conflict=entity_type,entity_id"
    
    # Create an unverified SSL context to bypass local certificate issues
    context = ssl._create_unverified_context()
    
    req = urllib.request.Request(
        endpoint, 
        data=json.dumps(payload).encode('utf-8'), 
        headers=headers, 
        method='POST'
    )
    
    try:
        with urllib.request.urlopen(req, context=context) as response:
            status = response.getcode()
            if status in [200, 201, 204]:
                print(f"Successfully upserted {len(payload)} records to unified_seo.")
            else:
                print(f"Server responded with status: {status}")
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        print(f"HTTP Error {e.code}: {error_body}")
    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    base_dir = "/Users/mdrishadrahman/Documents/Coding/Github/TasksACE"
    env_path = os.path.join(base_dir, ".env.local")
    meta_path = os.path.join(base_dir, ".tmp/seo_metadata.json")
    
    url = get_env_var(env_path, "NEXT_PUBLIC_SUPABASE_URL")
    key = get_env_var(env_path, "SUPABASE_SERVICE_ROLE_KEY")
    
    if not url or not key:
        print("Error: Missing Supabase credentials in .env.local")
    else:
        upsert_seo(meta_path, url, key)
