import { AnalyticsWrapper } from "@/lib/components/shared/AnalyticsWrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { cn } from "@heroui/react";
import { getCurrentAuthUser } from "@/lib/supabase/server";
import { User } from "@supabase/supabase-js";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App — Dashboard",
  description: "App Dashboard",
  icons: {
    icon: "/icon.svg",
  },
  manifest: "./manifest.webmanifest",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  let user: User | undefined = undefined;

  try {
    user = await getCurrentAuthUser();
  } catch (error) {
    console.error(error);
  }

  return (
    <html lang="en" className="dark">
      <body className={cn("bg-neutral-900",inter.className)}>
        {children}
        <AnalyticsWrapper gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ""} user={user} />
      </body>
    </html>
  );
}
