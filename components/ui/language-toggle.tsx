"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

export default function LanguageToggle() {
  const t = useTranslations("Common");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const target = locale === "en" ? "ar" : "en";

  function switchLocale() {
    startTransition(() => {
      router.replace(pathname, { locale: target });
    });
  }

  return (
    <button
      type="button"
      onClick={switchLocale}
      disabled={pending}
      className="brand-surface rounded-md px-2.5 py-1 text-xs font-medium tracking-wide text-fg transition hover:bg-[var(--brand-surface-2)]"
      aria-label={`Switch to ${target.toUpperCase()}`}
    >
      {t("switchLang")}
    </button>
  );
}
