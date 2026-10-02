import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { ABOUT, CASE_PARTNER, PORTRAIT_ALT, PORTRAIT_SRC } from "@/data/v4De";

/** „Wer dahinter steht“. Das Foto kommt von Markus: ein Pfad in PORTRAIT_SRC (v4De.ts), sonst Initialen. */
export function DeAbout() {
  return (
    <StateField field="light" as="section" aria-labelledby="de-about-title">
      <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-v4-forest">
            {PORTRAIT_SRC ? (
              <img
                src={PORTRAIT_SRC}
                alt={PORTRAIT_ALT}
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            ) : (
              <div aria-hidden="true" className="flex h-full w-full items-center justify-center font-v4-serif text-[7rem] leading-none text-v4-ivory/90">
                MW
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <SystemLabel as="p" className="mb-6 block text-v4-ink/70">
              {ABOUT.label}
            </SystemLabel>
            <h2
              id="de-about-title"
              style={{ hyphens: "auto" }}
              className="max-w-2xl text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink"
            >
              {ABOUT.title}
            </h2>
          </div>
          <div className="flex max-w-xl flex-col gap-4">
            {ABOUT.paragraphs.map((p) => (
              <p key={p} className="text-pretty font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/80">
                {p}
              </p>
            ))}
          </div>
          <dl className="grid max-w-xl">
            {ABOUT.facts.map((fact) => (
              <div key={fact.term} className="grid gap-1 border-t border-v4-ink/15 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="font-v4-sans text-sm font-semibold text-v4-ink">{fact.term}</dt>
                <dd className="font-v4-sans text-sm leading-relaxed text-v4-ink/80">
                  {fact.term === "Kontakt" ? (
                    <a
                      href={`mailto:${ABOUT.contactEmail}`}
                      className="underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink"
                    >
                      {fact.detail}
                    </a>
                  ) : (
                    fact.detail
                  )}
                </dd>
              </div>
            ))}
          </dl>
          {CASE_PARTNER && (
            <div className="max-w-xl rounded-2xl border border-v4-ink/15 p-6">
              <h3 className="font-v4-sans text-lg font-semibold text-v4-ink">{CASE_PARTNER.title}</h3>
              <p className="mt-2 font-v4-sans text-sm leading-relaxed text-v4-ink/80">{CASE_PARTNER.body}</p>
            </div>
          )}
        </div>
      </div>
    </StateField>
  );
}
