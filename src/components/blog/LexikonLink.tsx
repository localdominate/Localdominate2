import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface LexikonLinkProps {
  term: string;
  children?: ReactNode;
}

/**
 * A reusable link component for linking to SEO Lexikon terms
 * Automatically generates the correct anchor slug
 */
const LexikonLink = ({ term, children }: LexikonLinkProps) => {
  // Generate slug: lowercase, replace spaces with hyphens, handle umlauts
  const slug = term
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9-]/g, '');

  return (
    <Link 
      to={`/seo-lexikon#${slug}`}
      className="text-primary underline decoration-primary/30 hover:decoration-primary transition-colors font-medium"
      title={`SEO Lexikon: ${term}`}
    >
      {children || term}
    </Link>
  );
};

export default LexikonLink;
