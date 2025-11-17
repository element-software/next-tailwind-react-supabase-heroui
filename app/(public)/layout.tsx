import Header from "@/lib/components/shared/header";
import Footer from "@/lib/components/shared/footer";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Header public/>
      {children}
      <Footer />
    </>
  );
}
