import {
  getCurrentAuthUser,
} from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import ProfileClient from "./profile.client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export default async function ProfilePage() {
  // If Supabase is not configured, show demo profile
  if (!isSupabaseConfigured()) {
    const demoProfile = {
      email: "demo@example.com",
      id: "demo-user-id",
      verified: false,
      lastSignIn: null,
    };
    return <ProfileClient profile={demoProfile} />;
  }

  const user = await getCurrentAuthUser();
  if (!user) {
    redirect("/auth/login?redirectTo=/auth/profile");
  }

  const profile = {
    email: user?.email || null,
    id: user?.id || null,
    // @ts-ignore
    verified: Boolean(user?.email_confirmed_at || user?.email_confirmed),
    // @ts-ignore
    lastSignIn: user?.last_sign_in_at || null,
  };

  return (
    <ProfileClient
      profile={profile}
    />
  );
}
