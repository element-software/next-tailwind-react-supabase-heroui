import { AnalyticsWrapper } from "@/lib/components/shared/AnalyticsWrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@heroui/react";
import { ThemeScript } from "@/lib/components/shared/ThemeScript";

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-theme-background", inter.className)}>
        <ThemeScript />
        {children}
        <AnalyticsWrapper
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ""}
        />
      </body>
    </html>
  );
}
