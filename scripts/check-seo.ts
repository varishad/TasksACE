import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    const { data, error } = await supabase.from('unified_seo').select('*').eq('entity_id', '/blog/virtual-assistant-for-small-business');
    console.log('Result:', JSON.stringify(data, null, 2));
    console.log('Error:', error);
}

check();
