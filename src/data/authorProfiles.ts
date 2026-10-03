/**
 * Author data for the blog.
 *
 * Truth rule: every article is published by the editorial team "LocalDominate Redaktion" and is
 * the responsibility of Markus Wimböck. Only facts from src/data/v4About.ts (the owner's own CV)
 * and the legal notice are used here. There are no invented people, credentials, client counts,
 * partner badges or social profiles. Do not add any without the owner's written confirmation.
 */

export type AuthorId = "redaktion";

type Localised = { de: string; en: string };

/** The person who is accountable for the content. */
export interface AccountablePerson {
  name: string;
  role: Localised;
  bio: Localised;
  /** Site path of the page that introduces him. */
  profilePath: string;
  linkedin: string;
}

export interface AuthorProfile {
  id: AuthorId;
  /** Shown as the author of every article. */
  name: string;
  slug: string;
  role: Localised;
  bio: Localised;
  /** Plain topic list, no credentials. */
  topics: { de: string[]; en: string[] };
  accountable: AccountablePerson;
}

export const AUTHORS: Record<AuthorId, AuthorProfile> = {
  redaktion: {
    id: "redaktion",
    name: "LocalDominate Redaktion",
    slug: "redaktion",
    role: {
      de: "Redaktion",
      en: "Editorial team",
    },
    bio: {
      de: "Die LocalDominate Redaktion schreibt die Artikel dieses Blogs. Fachlich verantwortet werden sie von Markus Wimböck, dem Gründer von LocalDominate.",
      en: "The LocalDominate editorial team writes the articles on this blog. Markus Wimböck, the founder of LocalDominate, is responsible for their content.",
    },
    topics: {
      de: ["Local SEO", "Google Business Profil", "Google Maps", "KI-Sichtbarkeit"],
      en: ["Local SEO", "Google Business Profile", "Google Maps", "AI visibility"],
    },
    accountable: {
      name: "Markus Wimböck",
      role: {
        de: "Gründer von LocalDominate",
        en: "Founder of LocalDominate",
      },
      bio: {
        de: "Markus Wimböck arbeitet seit über sieben Jahren in Hotellerie und digitalem Marketing.",
        en: "Markus Wimböck has worked in hospitality and digital marketing for over seven years.",
      },
      profilePath: "/about",
      linkedin: "https://www.linkedin.com/in/markus-w-3981a1148/",
    },
  },
};

const DEFAULT_AUTHOR: AuthorId = "redaktion";

/** Every article has the same author. The slug is kept so callers need not change. */
export function getArticleAuthor(_slug?: string): AuthorProfile {
  return AUTHORS[DEFAULT_AUTHOR];
}

/** Get all authors as array */
export function getAllAuthors(): AuthorProfile[] {
  return Object.values(AUTHORS);
}
