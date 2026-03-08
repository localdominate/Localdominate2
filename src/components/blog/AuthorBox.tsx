import { Award, CheckCircle, ExternalLink, Linkedin, Twitter } from "lucide-react";
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
  const author = overrideAuthor ?? (articleSlug ? getArticleAuthor(articleSlug) : getArticleAuthor(""));

  if (compact) {
    return (
      <div className="flex items-center gap-3 py-2">
        <span className="text-2xl" role="img" aria-label={author.name}>{author.avatar}</span>
        <div>
          <span className="text-sm font-medium text-foreground">{author.name}</span>
          <span className="text-xs text-muted-foreground ml-2">
            {language === "de" ? author.role.de : author.role.en}
          </span>
        </div>
      </div>
    );
  }

  const bio = language === "de" ? author.bio.de : author.bio.en;
  const role = language === "de" ? author.role.de : author.role.en;
  const experience = language === "de" ? author.experience.de : author.experience.en;

  return (
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 mt-12">
      {/* Author header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 text-3xl">
          {author.avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-foreground text-lg">{author.name}</h3>
            {author.social.linkedin && (
              <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {author.social.twitter && (
              <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            )}
          </div>
          <p className="text-sm text-primary font-medium">{role}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{experience}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {bio}
      </p>

      {/* Credentials */}
      <div className="flex flex-wrap gap-2 mb-3">
        {author.credentials.map((cred) => (
          <span key={cred} className="inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full">
            <CheckCircle className="h-3 w-3 flex-shrink-0" />
            {cred}
          </span>
        ))}
      </div>

      {/* Expertise areas */}
      <div className="border-t border-primary/10 pt-3 mt-3">
        <p className="text-xs font-medium text-foreground mb-2">
          {language === "de" ? "Fachgebiete:" : "Areas of expertise:"}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {author.expertise.map((area) => (
            <span key={area} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
              {area}
            </span>
          ))}
        </div>
      </div>

      {/* JSON-LD Person schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            ...author.schemaOrg,
          }),
        }}
      />
    </div>
  );
};

export default AuthorBox;
