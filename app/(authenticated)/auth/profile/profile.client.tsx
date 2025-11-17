"use client";
import { Card, CardBody, Button, Avatar, Chip } from "@heroui/react";
import { Profile } from "@/types/user";
import { useRouter } from "next/navigation";

export default function ProfileClient({
  profile,
}: {
  profile: Profile;
}) {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border">
          <CardBody className="p-6 space-y-6">
            <div className="flex items-center gap-4">
              <Avatar
                name={(profile.email || "?")[0].toUpperCase()}
                size="lg"
                className="bg-primary text-primary-foreground"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-theme-text font-medium truncate">
                    {profile.email}
                  </p>
                  {profile.verified ? (
                    <Chip size="sm" color="success" variant="flat">
                      Verified
                    </Chip>
                  ) : (
                    <Chip size="sm" variant="flat">
                      Unverified
                    </Chip>
                  )}
                </div>
                {profile.lastSignIn && (
                  <p className="text-sm text-theme-text-secondary mt-1">
                    Last sign in: {new Date(profile.lastSignIn).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                as="a"
                href="/auth/profile/billing"
                color="primary"
                variant="bordered"
                className="w-full"
              >
                Manage Billing
              </Button>
              <Button
                color="danger"
                variant="flat"
                as="a"
                href="/auth/login?signout=1"
                className="w-full"
              >
                Sign Out
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
