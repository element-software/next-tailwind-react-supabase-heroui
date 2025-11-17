"use server"
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { isSupabaseConfigured } from './config'

export async function createClient() {
  if (!isSupabaseConfigured()) {
    return null as any
  }

  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}

export async function getCurrentAuthUser() {
  if (!isSupabaseConfigured()) {
    return null
  }
  
  const supabase = await createClient()
  if (!supabase) {
    return null
  }
  
  const { data: { user } } = await supabase.auth.getUser()
  return user || null
}