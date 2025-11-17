import { createBrowserClient } from '@supabase/ssr'
import { isSupabaseConfigured } from './config'

export function createClient() {
  if (!isSupabaseConfigured()) {
    // Return a mock client that won't crash but won't work
    return null as any
  }
  
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
  )
}
