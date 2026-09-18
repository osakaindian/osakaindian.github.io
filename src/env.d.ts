/// <reference types="astro/client" />

interface ImportMetaEnv {
  // The anon key is designed by Supabase to be public — it's safe in a
  // client bundle. Real access control comes from the Row Level Security
  // policies in SUPABASE-SETUP.md, not from keeping this secret.
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
