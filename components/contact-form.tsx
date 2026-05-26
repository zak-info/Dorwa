"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="brand-surface rounded-2xl p-8 text-center">
        <h3 className="font-nacelle text-2xl font-semibold text-fg">
          {t("successTitle")}
        </h3>
        <p className="mt-2 text-muted">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="brand-surface space-y-5 rounded-2xl p-7">
      <Field>
        <Label htmlFor="name">{t("nameLabel")}</Label>
        <Input id="name" name="name" placeholder={t("namePlaceholder")} required />
      </Field>

      <Field>
        <Label htmlFor="email">{t("emailLabel")}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={t("emailPlaceholder")}
          required
        />
      </Field>

      <Field>
        <Label htmlFor="company">{t("companyLabel")}</Label>
        <Input
          id="company"
          name="company"
          placeholder={t("companyPlaceholder")}
        />
      </Field>

      <Field>
        <Label htmlFor="message">{t("messageLabel")}</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={t("messagePlaceholder")}
          required
          className="form-textarea w-full rounded-md border border-brand bg-brand text-fg placeholder:text-dim focus:border-brand-strong focus:ring-0"
        />
      </Field>

      {status === "error" && (
        <p className="text-sm text-accent">{t("errorBody")}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-accent w-full rounded-md disabled:opacity-60"
      >
        {status === "submitting" ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return <div className="space-y-1.5">{children}</div>;
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-muted">
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="form-input w-full rounded-md border border-brand bg-brand text-fg placeholder:text-dim focus:border-brand-strong focus:ring-0"
    />
  );
}
