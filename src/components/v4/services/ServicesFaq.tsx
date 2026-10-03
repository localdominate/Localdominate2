import { FaqList } from "@/components/v4/PageFaq";
import { SERVICES_FAQ } from "@/data/v4Faq";

/**
 * Every answer repeats a term the owner has confirmed (v4HowWeWork.ts, v4Check.ts, the free-check
 * page) or a fact from v4Offers.ts. Nothing here may add a promise (list: v4Faq.ts). The list is
 * always open, so it reads the same with and without JavaScript. The same array fills the
 * FAQPage JSON-LD of /services.
 */
export function ServicesFaq() {
  return <FaqList items={SERVICES_FAQ} />;
}
