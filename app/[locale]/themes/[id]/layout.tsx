import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ThemeSwitcher from "@/components/theme-switcher";
import { isThemeId, THEMES, type ThemeId } from "@/lib/themes";
import type { Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return THEMES.map((t) => ({ id: t.id }));
}

export default async function ThemedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { locale, id } = await params;
  if (!isThemeId(id)) notFound();
  setRequestLocale(locale);

  return (
    <div
      data-style={id as ThemeId}
      className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip bg-brand text-fg"
    >
      <Header locale={locale} />
      <main className="relative flex grow flex-col pb-24">{children}</main>
      <Footer locale={locale} />
      <ThemeSwitcher active={id as ThemeId} />
    </div>
  );
}
