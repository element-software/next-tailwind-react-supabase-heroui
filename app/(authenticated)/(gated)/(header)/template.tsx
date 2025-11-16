import { AccessBlocked } from "@/lib/components/access/AccessBlocked";

export const dynamic = 'force-dynamic';

export default async function SetupTemplate({ children }: { children: React.ReactNode }) {
  // TODO: Replace this with your own logic to check if the user has access
  const hasAccess = true;

  if (!hasAccess) {
    return <AccessBlocked />;
  }
  return <>{children}</>;
}


