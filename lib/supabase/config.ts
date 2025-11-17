/**
 * Check if Supabase is configured and enabled
 * Can be disabled by setting NEXT_PUBLIC_ENABLE_AUTH=false
 */
export function isSupabaseConfigured(): boolean {
  // Check if auth is explicitly disabled via environment variable
  const authEnabled = process.env.NEXT_PUBLIC_ENABLE_AUTH !== 'false';
  
  // Check if required Supabase credentials are present
  const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
  const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
  
  return authEnabled && hasUrl && hasKey;
}

