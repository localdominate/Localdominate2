import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthorProfile, getArticleAuthor } from "@/data/authorProfiles";
import { useLanguage } from "@/i18n/LanguageContext";

interface AuthorBoxProps {
  articleSlug?: string;
  /** Override with a specific author profile */
  author?: AuthorProfile;
  /** Compact mode for inline usage */
  compact?: boolean;
}

const AuthorBox = ({ articleSlug, author: overrideAuthor, compact = false }: AuthorBoxProps) => {
  const { language } = useLanguage();
  const author = overrideAuthor ?? getArticleAuthor(articleSlug);
  const lang = language === "de" ? "de" : "en";
  const { accountable } = author;
  const responsibleLabel = lang === "de" ? "Fachlich verantwortet von" : "Content responsibility";

  if (compact) {
    return (
      <div className="py-2">
        <span className="text-sm font-medium text-foreground">{author.name}</span>
        <span className="text-xs text-muted-foreground ml-2">
          {responsibleLabel} {accountable.name}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 mt-12">
      <div className="mb-4">
        <h3 className="font-semibold text-foreground text-lg">{author.name}</h3>
        <p className="text-sm text-primary font-medium">{author.role[lang]}</p>
      </div>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{author.bio[lang]}</p>

      <div className="border-t border-primary/10 pt-3 mt-3">
        <p className="text-xs font-medium text-foreground mb-1">{responsibleLabel}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <Link to={accountable.profilePath} className="font-semibold text-foreground hover:text-primary transition-colors">
            {accountable.name}
          </Link>
          <a
            href={accountable.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-primary font-medium mt-0.5">{accountable.role[lang]}</p>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{accountable.bio[lang]}</p>
      </div>

      {author.topics[lang].length > 0 && (
        <div className="border-t border-primary/10 pt-3 mt-3">
          <p className="text-xs font-medium text-foreground mb-2">{lang === "de" ? "Themen:" : "Topics:"}</p>
          <div className="flex flex-wrap gap-1.5">
            {author.topics[lang].map((topic) => (
              <span key={topic} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorBox;
