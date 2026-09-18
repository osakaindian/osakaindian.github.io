import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// If the site is built without Supabase credentials (e.g. a fork that
// hasn't set one up yet), every widget that imports this quietly hides
// itself instead of throwing. See SUPABASE-SETUP.md to enable it.
export const hasSupabase = Boolean(url && key);

export const supabase = hasSupabase ? createClient(url, key) : null;
