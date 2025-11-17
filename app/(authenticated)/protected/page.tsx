"use client";
import { Card, CardBody, Button, Chip, Divider } from "@heroui/react";
import Icon from "@mdi/react";
import { mdiShieldCheck, mdiChartLine, mdiBell, mdiCog } from "@mdi/js";
import Link from "next/link";

export default function ProtectedPage() {
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-theme-text">Protected Dashboard</h1>
            <p className="text-theme-text-secondary mt-1">
              Welcome to your protected area. This page requires authentication.
            </p>
          </div>
          <Button
            as={Link}
            href="/auth/profile"
            color="primary"
            variant="bordered"
            startContent={<Icon path={mdiCog} className="w-4 h-4" />}
          >
            Settings
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border">
            <CardBody className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-theme-text-secondary">Total Users</p>
                  <p className="text-2xl font-bold text-theme-text mt-1">1,234</p>
                  <p className="text-xs text-success mt-2">+12% from last month</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon path={mdiChartLine} className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border">
            <CardBody className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-theme-text-secondary">Active Sessions</p>
                  <p className="text-2xl font-bold text-theme-text mt-1">89</p>
                  <p className="text-xs text-warning mt-2">+5% from last week</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Icon path={mdiBell} className="w-6 h-6 text-warning" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border">
            <CardBody className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-theme-text-secondary">Security Status</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Chip size="sm" color="success" variant="flat">
                      Secure
                    </Chip>
                  </div>
                  <p className="text-xs text-theme-text-secondary mt-2">All systems operational</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                  <Icon path={mdiShieldCheck} className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border">
            <CardBody className="p-6">
              <h2 className="text-xl font-semibold text-theme-text mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div className="flex-1">
                      <p className="text-sm text-theme-text">
                        Activity item {item} - Sample activity description
                      </p>
                      <p className="text-xs text-theme-text-secondary mt-1">
                        {item} hours ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border">
            <CardBody className="p-6">
              <h2 className="text-xl font-semibold text-theme-text mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button
                  as={Link}
                  href="/auth/profile"
                  color="primary"
                  variant="bordered"
                  className="w-full justify-start"
                >
                  View Profile
                </Button>
                <Button
                  as={Link}
                  href="/auth/profile/billing"
                  color="primary"
                  variant="bordered"
                  className="w-full justify-start"
                >
                  Manage Billing
                </Button>
                <Divider />
                <Button
                  as={Link}
                  href="/"
                  variant="light"
                  className="w-full justify-start"
                >
                  Back to Home
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Info Card */}
        <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border">
          <CardBody className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon path={mdiShieldCheck} className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-theme-text mb-2">
                  Protected Content
                </h3>
                <p className="text-theme-text-secondary text-sm">
                  This is a protected page that requires authentication. Only authenticated users 
                  can access this content. The authentication is handled by Supabase, and routes 
                  are protected via middleware.
                </p>
                <p className="text-theme-text-secondary text-sm mt-2">
                  In demo mode (when Supabase is not configured), this page is accessible to 
                  demonstrate the template structure.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

