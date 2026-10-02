import { Link } from "react-router-dom";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { v4Route } from "@/lib/v4Routes";
import { ABOUT, ANCHORS, CONTACT_EMAIL } from "@/data/v4De";
import portrait from "@/assets/v4/markus-wimboeck.webp";

const about = v4Route("about");
const linkFocus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-ink";

/**
 * „Wer dahinter steht“: das Porträt von Markus (560 × 830, festes Seitenverhältnis), der Text in
 * der Ich-Form und zwei Stationen seines Werdegangs. Kempinski und VAYA stehen hier als Stationen,
 * nie als Kunden und ohne Ergebniszahlen. Der Link zum ganzen Werdegang erscheint, sobald /about
 * freigegeben ist (v4Routes.ts).
 */
export function DeAbout() {
  return (
    <StateField field="light" as="section" id={ANCHORS.about} aria-labelledby="de-about-title" className="scroll-mt-16">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:grid-rows-[auto_1fr] lg:gap-x-20 lg:gap-y-8">
        <div className="lg:col-start-2 lg:row-start-1">
          <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
            {ABOUT.label}
          </SystemLabel>
          <h2
            id="de-about-title"
            className="text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink"
          >
            {ABOUT.title}
          </h2>
        </div>

        <figure className="flex items-end gap-5 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:flex-col lg:items-stretch lg:gap-4">
          <div className="aspect-[56/83] w-[44%] max-w-[13rem] shrink-0 overflow-hidden rounded-2xl bg-v4-ink/10 lg:w-full lg:max-w-[23rem]">
            <img
              src={portrait}
              alt={ABOUT.portraitAlt}
              width={560}
              height={830}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="flex min-w-0 flex-col gap-3 pb-1">
            <span className="font-v4-sans text-lg font-semibold tracking-tight text-v4-ink">{ABOUT.name}</span>
            <span className="flex flex-col gap-1.5">
              <SystemLabel className="text-v4-ink/60">{ABOUT.contactLabel}</SystemLabel>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={`inline-flex min-h-11 items-center break-all font-v4-sans text-sm text-v4-ink underline underline-offset-4 lg:min-h-0 ${linkFocus}`}
              >
                {CONTACT_EMAIL}
              </a>
            </span>
          </figcaption>
        </figure>

        <div className="flex flex-col gap-8 lg:col-start-2 lg:row-start-2">
          <div className="flex max-w-2xl flex-col gap-4">
            {ABOUT.paragraphs.map((p) => (
              <p key={p} className="text-pretty font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/80">
                {p}
              </p>
            ))}
          </div>
          <p className="max-w-2xl text-balance border-l-2 border-v4-signal pl-5 font-v4-serif text-[length:var(--v4-text-subhead)] leading-tight text-v4-ink">
            {ABOUT.statement}
          </p>

          <div className="max-w-2xl">
            <h3 className="font-v4-mono text-[length:var(--v4-text-label)] font-normal uppercase leading-none tracking-[0.18em] text-v4-ink/60">
              {ABOUT.stationsLabel}
            </h3>
            <ul className="mt-4">
              {ABOUT.stations.map((station) => (
                <li
                  key={station.place}
                  className="grid gap-1 border-t border-v4-ink/15 py-4 last:border-b sm:grid-cols-[11rem_1fr] sm:gap-6"
                >
                  <span className="font-v4-mono text-xs leading-relaxed text-v4-ink/70">{station.period}</span>
                  <span>
                    <span className="block font-v4-sans text-base font-semibold tracking-tight text-v4-ink">{station.place}</span>
                    <span className="mt-0.5 block font-v4-sans text-sm leading-relaxed text-v4-ink/70">{station.role}</span>
                  </span>
                </li>
              ))}
            </ul>
            {about.ready && (
              <Link
                to={about.path}
                hrefLang="en"
                className={`mt-2 inline-flex min-h-11 items-center font-v4-sans text-sm text-v4-ink/80 underline-offset-4 hover:underline ${linkFocus}`}
              >
                {ABOUT.careerLink} <span aria-hidden="true">&nbsp;→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </StateField>
  );
}
