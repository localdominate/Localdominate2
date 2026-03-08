import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface SiteBreadcrumbsProps {
  items?: BreadcrumbSegment[];
  className?: string;
  /** Include BreadcrumbList JSON-LD schema in the page */
  includeSchema?: boolean;
}

/**
 * Route-to-breadcrumb mapping for automatic breadcrumbs.
 * Pages not listed here should pass custom `items` prop.
 */
const ROUTE_MAP: Record<string, BreadcrumbSegment[]> = {
  "/blog": [{ label: "Blog" }],
  "/seo-lexikon": [{ label: "SEO Lexikon" }],
  "/agb": [{ label: "AGB" }],
  "/datenschutz": [{ label: "Datenschutz" }],
  "/impressum": [{ label: "Impressum" }],
  "/ueber-uns": [{ label: "Über uns" }],
  "/redaktionsrichtlinien": [{ label: "Redaktionsrichtlinien" }],
  "/forschungsmethodik": [{ label: "Forschungsmethodik" }],
  "/partner": [{ label: "Partner" }],
  "/diy-toolkit": [{ label: "DIY Toolkit" }],
  "/citation-verzeichnisse": [
    { label: "Blog", href: "/blog" },
    { label: "Citation-Verzeichnisse" },
  ],
};

/** Generate BreadcrumbList JSON-LD schema */
export const generateBreadcrumbSchema = (segments: BreadcrumbSegment[]) => {
  const items = [
    { "@type": "ListItem" as const, position: 1, name: "Home", item: "https://localdominate.org" },
    ...segments.map((seg, i) => ({
      "@type": "ListItem" as const,
      position: i + 2,
      name: seg.label,
      ...(seg.href
        ? { item: `https://localdominate.org${seg.href}` }
        : i === segments.length - 1
          ? {}
          : {}),
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
};

const SiteBreadcrumbs = ({
  items,
  className = "mb-6",
  includeSchema = false,
}: SiteBreadcrumbsProps) => {
  const location = useLocation();
  const segments = items ?? ROUTE_MAP[location.pathname];

  if (!segments || segments.length === 0) return null;

  const schema = includeSchema ? generateBreadcrumbSchema(segments) : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <Breadcrumb className={className}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="flex items-center gap-1">
                <Home className="h-3.5 w-3.5" />
                <span className="sr-only">Home</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {segments.map((segment, index) => {
            const isLast = index === segments.length - 1;
            return (
              <span key={index} className="contents">
                <BreadcrumbSeparator>
                  <ChevronRight className="h-3.5 w-3.5" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  {isLast || !segment.href ? (
                    <BreadcrumbPage className="line-clamp-1 max-w-[200px] sm:max-w-[300px]">
                      {segment.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={segment.href}>{segment.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </span>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default SiteBreadcrumbs;
