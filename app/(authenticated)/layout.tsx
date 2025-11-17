import { getCurrentAuthUser } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import Header from "@/lib/components/shared/header";
import Footer from "@/lib/components/shared/footer";

// Force dynamic rendering for this layout since it uses cookies
export const dynamic = "force-dynamic";

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // If Supabase is not configured, allow access (demo mode)
  if (!isSupabaseConfigured()) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }

  // Ensure user is authenticated first
  const authedUser = await getCurrentAuthUser();
  if (!authedUser) {
    redirect("/auth/login?redirectTo=/auth/setup");
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
