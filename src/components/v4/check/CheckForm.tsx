import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { CheckFormTexts } from "@/data/v4Check";

/**
 * The free-check form. Texts come in as a prop (English: CHECK_FORM_EN), so other languages reuse
 * the same component.
 *
 * Delivery: with VITE_WEB3FORMS_KEY set (Vercel environment variable) the request is posted to
 * Web3Forms, which forwards it to the address stored with that key. The address itself is never
 * in this code. Without the key the form opens a pre-filled email to the public contact address,
 * so it works from day one and no third party processes the data.
 */
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const FALLBACK_ADDRESS = "info@localdominate.org";
const formKey = (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined)?.trim() ?? "";

type Field = "name" | "email" | "link" | "businessType" | "consent";
type Values = { name: string; email: string; link: string; businessType: string; goal: string; consent: boolean };
type Status = "idle" | "sending" | "sent" | "mail-opened" | "failed";

const EMPTY: Values = { name: "", email: "", link: "", businessType: "", goal: "", consent: false };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validate = (v: Values, t: CheckFormTexts): Partial<Record<Field, string>> => {
  const errors: Partial<Record<Field, string>> = {};
  if (!v.name.trim()) errors.name = t.errors.name;
  if (!EMAIL_PATTERN.test(v.email.trim())) errors.email = t.errors.email;
  if (v.link.trim().length < 4) errors.link = t.errors.link;
  if (!v.businessType) errors.businessType = t.errors.businessType;
  if (!v.consent) errors.consent = t.errors.consent;
  return errors;
};

const mailBody = (v: Values, t: CheckFormTexts): string =>
  [
    `${t.name}: ${v.name.trim()}`,
    `${t.email}: ${v.email.trim()}`,
    `${t.link}: ${v.link.trim()}`,
    `${t.businessType}: ${v.businessType}`,
    v.goal.trim() ? `${t.goal} ${v.goal.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");

const inputClass =
  "w-full rounded-lg border border-v4-ink/25 bg-v4-white px-4 py-3 font-v4-sans text-base text-v4-ink placeholder:text-v4-ink/40 focus:border-v4-ink focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-v4-ink aria-[invalid=true]:border-v4-coral";
const labelClass = "font-v4-sans text-sm font-medium text-v4-ink";
const hintClass = "font-v4-sans text-xs text-v4-ink/60";
const errorClass = "font-v4-sans text-xs font-medium text-[#B3261E]";

export function CheckForm({
  texts: t,
  className,
  id = "check",
}: {
  texts: CheckFormTexts;
  className?: string;
  /**
   * Prefix of the field ids. A fixed string, not useId(): the prerendered HTML comes from a client
   * render, so useId() would give different ids before and after hydration.
   */
  id?: string;
}) {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const honeypot = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const failedRef = useRef<HTMLParagraphElement>(null);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (key in errors) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const showResult = (next: Status) => {
    setStatus(next);
    requestAnimationFrame(() => (next === "failed" ? failedRef : resultRef).current?.focus());
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    const found = validate(values, t);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      document.getElementById(`${id}-${firstInvalid}`)?.focus();
      return;
    }
    if (honeypot.current?.checked) {
      showResult("sent"); // a bot ticked the hidden box: pretend success, send nothing
      return;
    }

    if (!formKey) {
      const href = `mailto:${FALLBACK_ADDRESS}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(mailBody(values, t))}`;
      window.location.href = href;
      showResult("mail-opened");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: formKey,
          subject: `${t.subject}: ${values.businessType}`,
          from_name: "localdominate.org",
          name: values.name.trim(),
          email: values.email.trim(),
          link: values.link.trim(),
          business_type: values.businessType,
          goal: values.goal.trim(),
          page: window.location.pathname,
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      showResult(response.ok && result.success ? "sent" : "failed");
    } catch {
      showResult("failed");
    }
  };

  if (status === "sent" || status === "mail-opened") {
    const message = status === "sent" ? t.success : t.mailOpened;
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="status"
        className={cn("rounded-2xl bg-v4-ivory p-8 text-v4-ink outline-none md:p-10", className)}
      >
        <span aria-hidden="true" className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-v4-signal text-lg text-v4-ink">
          ✓
        </span>
        <p className="font-v4-serif text-[length:var(--v4-text-subhead)] leading-tight">{message.title}</p>
        <p className="mt-3 font-v4-sans text-sm text-v4-ink/70">{message.body}</p>
      </div>
    );
  }

  const fieldError = (field: Field) =>
    errors[field] ? (
      <p id={`${id}-${field}-error`} className={errorClass}>
        {errors[field]}
      </p>
    ) : null;
  const describedBy = (field: Field, hint?: boolean) =>
    [errors[field] ? `${id}-${field}-error` : "", hint ? `${id}-${field}-hint` : ""].filter(Boolean).join(" ") || undefined;
  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <form
      onSubmit={submit}
      noValidate
      aria-label={t.formLabel}
      className={cn("flex flex-col gap-5 rounded-2xl bg-v4-ivory p-6 text-v4-ink md:p-8", className)}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-name`} className={labelClass}>
            {t.name}
          </label>
          <input
            id={`${id}-name`}
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
            className={inputClass}
          />
          {fieldError("name")}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-email`} className={labelClass}>
            {t.email}
          </label>
          <input
            id={`${id}-email`}
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
            className={inputClass}
          />
          {fieldError("email")}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${id}-link`} className={labelClass}>
          {t.link}
        </label>
        <input
          id={`${id}-link`}
          type="text"
          inputMode="url"
          autoComplete="url"
          value={values.link}
          onChange={(e) => set("link", e.target.value)}
          aria-invalid={Boolean(errors.link)}
          aria-describedby={describedBy("link", true)}
          className={inputClass}
        />
        <p id={`${id}-link-hint`} className={hintClass}>
          {t.linkHint}
        </p>
        {fieldError("link")}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${id}-businessType`} className={labelClass}>
          {t.businessType}
        </label>
        <select
          id={`${id}-businessType`}
          value={values.businessType}
          onChange={(e) => set("businessType", e.target.value)}
          aria-invalid={Boolean(errors.businessType)}
          aria-describedby={describedBy("businessType")}
          className={cn(inputClass, "appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10")}
          style={{
            backgroundColor: "#FFFFFF",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%230A0A09' stroke-width='1.5'%3E%3Cpath d='m3 6 5 5 5-5'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="">{t.businessTypePlaceholder}</option>
          {t.businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {fieldError("businessType")}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${id}-goal`} className={labelClass}>
          {t.goal}
        </label>
        <textarea
          id={`${id}-goal`}
          rows={3}
          value={values.goal}
          onChange={(e) => set("goal", e.target.value)}
          aria-describedby={`${id}-goal-hint`}
          className={cn(inputClass, "resize-y")}
        />
        <p id={`${id}-goal-hint`} className={hintClass}>
          {t.goalHint}
        </p>
      </div>

      {/* Honeypot: hidden from people and assistive technology, bots tick it. */}
      <input ref={honeypot} type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="flex flex-col gap-2">
        <label htmlFor={`${id}-consent`} className="flex items-start gap-3 font-v4-sans text-sm text-v4-ink/80">
          <input
            id={`${id}-consent`}
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={describedBy("consent")}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-v4-ink/40 accent-[#0A0A09]"
          />
          <span>
            {(formKey && t.consentBeforeWithService) || t.consentBefore}
            <Link to="/datenschutz" className="underline underline-offset-2">
              {t.consentLink}
            </Link>
            {t.consentAfter}
          </span>
        </label>
        {fieldError("consent")}
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-v4-signal px-7 py-4 font-v4-sans text-base font-medium text-v4-ink transition-[transform,opacity] duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink"
        >
          {status === "sending" ? t.sending : t.submit}
          <span aria-hidden="true">→</span>
        </button>
        {!formKey && <p className={hintClass}>{t.mailNote}</p>}
        <div role="alert" aria-live="assertive">
          {hasErrors && <p className={errorClass}>{t.errors.summary}</p>}
          {status === "failed" && (
            <p ref={failedRef} tabIndex={-1} className={cn(errorClass, "outline-none")}>
              {t.errors.failed}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
