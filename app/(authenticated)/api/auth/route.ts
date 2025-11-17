import { SupabaseServer } from "@/lib/supabase";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export async function GET() {
  if (!isSupabaseConfigured()) {
    return new Response('Authentication is not configured', { status: 500, statusText: 'Authentication is not configured' });
  }

  const supabase = await SupabaseServer.createClient()  
  if (!supabase) {
    return new Response('Supabase client is not available', { status: 500, statusText: 'Supabase client is not available' });
  }

  const { data, error } = await supabase.auth.getUser()
  if (error) {
    return new Response('Error getting user', { status: 500, statusText: 'Error getting user' });
  }

  return new Response(JSON.stringify(data), { status: 200, statusText: 'OK' });
}