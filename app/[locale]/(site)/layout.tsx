import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
      <Header locale={locale} />
      <main className="relative flex grow flex-col">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
