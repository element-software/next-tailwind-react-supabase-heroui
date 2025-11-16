"use client";
import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { CookieConsent, getCookieConsent } from "./CookieConsent";
import { GoogleAnalytics } from "@next/third-parties/google";
import { User } from "@supabase/supabase-js";

type AnalyticsWrapperProps = {
  gaId?: string;
  user?: User;
};

export const AnalyticsWrapper: React.FC<AnalyticsWrapperProps> = ({ gaId, user }) => {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);

  if (process.env.NODE_ENV === "development") {
    return null;
  }
  
  useEffect(() => {
    setConsent(getCookieConsent());
  }, [user]);

  return (
    <>
      {consent === "accepted" && (
        <>
          <Analytics />
          <GoogleAnalytics gaId={gaId ?? ""} />
        </>
      )}
      <CookieConsent
        onAccept={() => setConsent("accepted")}
        onReject={() => setConsent("rejected")}
      />
    </>
  );
};
