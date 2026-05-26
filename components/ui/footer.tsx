import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Logo from "./logo";
import {
  CONTACT,
  WHATSAPP_URL,
  TEL_URL,
  MAILTO_URL,
  bi,
} from "@/lib/content";
import type { Locale } from "@/i18n/routing";

export default async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "Footer" });
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const tServices = await getTranslations({ locale, namespace: "Services" });

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] md:py-16">
          {/* Brand + studio info */}
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {bi(CONTACT.address, locale)} · {bi(CONTACT.hassi, locale)}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-accent rounded-md"
              >
                {t("whatsapp")}
              </a>
              <a href={TEL_URL} className="btn-sm btn-ghost rounded-md">
                {CONTACT.phone}
              </a>
            </div>
          </div>

          {/* Nav column */}
          <div>
            <h3 className="text-sm font-semibold text-fg">{t("studio")}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="text-muted hover:text-accent transition" href="/about">{tNav("about")}</Link></li>
              <li><Link className="text-muted hover:text-accent transition" href="/work">{tNav("work")}</Link></li>
              <li><Link className="text-muted hover:text-accent transition" href="/contact">{tNav("contact")}</Link></li>
              <li><a className="text-muted hover:text-accent transition" href={MAILTO_URL}>{CONTACT.email}</a></li>
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-sm font-semibold text-fg">{t("services")}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="text-muted hover:text-accent transition" href="/services#video">{tServices("video.title")}</Link></li>
              <li><Link className="text-muted hover:text-accent transition" href="/services#social">{tServices("social.title")}</Link></li>
              <li><Link className="text-muted hover:text-accent transition" href="/services#3d">{tServices("3d.title")}</Link></li>
              <li><Link className="text-muted hover:text-accent transition" href="/services#design">{tServices("design.title")}</Link></li>
              <li><Link className="text-muted hover:text-accent transition" href="/services#web">{tServices("web.title")}</Link></li>
            </ul>
          </div>

          {/* Follow column */}
          <div>
            <h3 className="text-sm font-semibold text-fg">{t("follow")}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-muted hover:text-accent transition" target="_blank" rel="noreferrer" href={CONTACT.socials.instagram}>Instagram</a></li>
              <li><a className="text-muted hover:text-accent transition" target="_blank" rel="noreferrer" href={CONTACT.socials.facebook}>Facebook</a></li>
              <li><a className="text-muted hover:text-accent transition" target="_blank" rel="noreferrer" href={CONTACT.socials.youtube}>YouTube</a></li>
              <li><a className="text-muted hover:text-accent transition" target="_blank" rel="noreferrer" href={CONTACT.socials.tiktok}>TikTok</a></li>
              <li><a className="text-muted hover:text-accent transition" target="_blank" rel="noreferrer" href={CONTACT.socials.linkedin}>LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-brand py-6 text-xs text-dim sm:flex-row sm:items-center">
          <p>
            © {year} DORWA · {bi({ en: "All rights reserved.", ar: "جميع الحقوق محفوظة." }, locale)}
          </p>
          <p>
            {bi({ en: "Made in Algeria", ar: "صُنع في الجزائر" }, locale)} 🇩🇿
          </p>
        </div>
      </div>
    </footer>
  );
}
