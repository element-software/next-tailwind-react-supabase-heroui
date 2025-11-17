"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button, Card, CardBody } from "@heroui/react";
import Icon from "@mdi/react";
import { mdiGoogle, mdiInformation } from "@mdi/js";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConfigured, setIsConfigured] = useState<boolean | null>(null);

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/setup";

  useEffect(() => {
    // Check if Supabase is configured
    const supabase = createClient();
    setIsConfigured(supabase !== null);
  }, []);

  const handleGoogleSignIn = async () => {
    if (!isConfigured) {
      setError("Authentication is not configured. Please set up Supabase credentials.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      if (!supabase) {
        throw new Error("Supabase client is not available");
      }

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback?redirectTo=${encodeURIComponent(redirectTo)}`,
        },
      });

      if (error) throw error;
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center">
      {/* Left side - Logo */}
      <div className="flex w-full md:w-1/2 items-center justify-center md:pr-4 border-r border-theme-border">
        <div className="text-center flex flex-col items-center justify-center max-w-md py-4 px-8">
          <Image src="/next.svg" alt="App Logo" width={100} height={100} />
          <h1 className="text-3xl font-bold text-theme-text mt-8 mb-4">
            Welcome to App
          </h1>
          <p className="text-theme-text text-lg">
            You can sign in with your Google account to continue.
          </p>
          <Button
            className="mt-4"
            as={"a"}
            href="/"
            color="primary"
          >
            Back to Home
          </Button>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border">
            <CardBody className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-theme-text mb-2">
                  Sign in
                </h2>
              </div>

              <div className="space-y-6">
                {isConfigured === false && (
                  <div className="bg-warning-50 border border-warning-200 text-warning-700 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                    <Icon path={mdiInformation} className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Authentication not configured</p>
                      <p className="text-xs">
                        To enable authentication, please configure your Supabase credentials in your environment variables.
                        See the README for setup instructions.
                      </p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="bg-danger-50 border border-danger-200 text-danger-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <Button
                  onPress={handleGoogleSignIn}
                  color="primary"
                  className="w-full font-medium"
                  isDisabled={loading || isConfigured === false}
                >
                  {loading ? (
                    "Signing in..."
                  ) : (
                    <>
                      <Icon path={mdiGoogle} className="w-4 h-4 mr-2" />
                      Continue with Google
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-theme-text-secondary">
                  By signing in, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="text-theme-primary"
                  >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-theme-primary"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
