import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Logo from "./logo";
import LanguageToggle from "./language-toggle";
import type { Locale } from "@/i18n/routing";

export default async function Header({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "Nav" });

  const items: { href: string; label: string }[] = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/work", label: t("work") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="brand-surface relative flex h-14 items-center justify-between gap-3 rounded-2xl px-3 backdrop-blur-sm">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <nav className="hidden flex-1 items-center justify-center md:flex">
            <ul className="flex items-center gap-7">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-1 items-center justify-end gap-2">
            <LanguageToggle />
            <Link
              href="/contact"
              className="btn-sm btn-accent hidden rounded-md sm:inline-flex"
            >
              {t("getQuote")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
