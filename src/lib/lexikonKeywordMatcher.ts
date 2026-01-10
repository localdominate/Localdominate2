import { seoLexikonData, getTermSlug } from '@/data/seoLexikonData';

// Keyword mapping with term and variants for matching
export interface LexikonKeyword {
  term: string;
  slug: string;
  variants: string[];
  priority: number; // Higher = more important, matches first
}

// Build the keyword map from seoLexikonData
export const buildKeywordMap = (): LexikonKeyword[] => {
  return seoLexikonData.map(term => ({
    term: term.term,
    slug: getTermSlug(term.term),
    variants: getTermVariants(term.term),
    priority: term.importance
  })).sort((a, b) => {
    // Sort by term length first (longer terms match first to avoid partial matches)
    // e.g., "Local SEO" should match before "SEO"
    const lengthDiff = b.term.length - a.term.length;
    if (lengthDiff !== 0) return lengthDiff;
    // Then by priority
    return b.priority - a.priority;
  });
};

// Generate variants for a term
const getTermVariants = (term: string): string[] => {
  const variants: string[] = [term];
  
  // Add common abbreviations and variations
  const abbreviationMap: Record<string, string[]> = {
    'Google Business Profile': ['GBP', 'Google My Business', 'GMB', 'Unternehmensprofil'],
    'Core Web Vitals': ['CWV', 'Web Vitals'],
    'Local Pack': ['3-Pack', 'Map Pack', 'lokales Pack', 'Lokal Pack'],
    'NAP': ['NAP-Daten', 'Name Adresse Telefon', 'NAP-Konsistenz'],
    'E-E-A-T': ['EEAT', 'E-A-T', 'EAT'],
    'SERP': ['SERPs', 'Suchergebnisseite', 'Suchergebnisseiten'],
    'YMYL': ['Your Money Your Life'],
    'Keywords': ['Keyword', 'Suchbegriffe', 'Suchbegriff'],
    'Backlinks': ['Backlink', 'Rückverweise', 'Rückverlinkungen'],
    'Citations': ['Citation', 'Zitationen', 'Brancheneinträge'],
    'Schema Markup': ['Schema', 'Strukturierte Daten', 'Structured Data'],
    'Featured Snippet': ['Featured Snippets', 'Position 0', 'Hervorgehobenes Snippet'],
    'Domain Authority': ['DA', 'Domainautorität'],
    'PageSpeed': ['Page Speed', 'Seitengeschwindigkeit', 'Ladezeit'],
    'Voice Search': ['Sprachsuche', 'Voice-Search'],
    'Zero-Click Search': ['Zero Click', 'Null-Klick-Suche'],
    'Title Tag': ['Title-Tag', 'Seitentitel', 'Meta Title'],
    'Meta-Tags': ['Meta Tags', 'Meta-Beschreibung', 'Meta Description'],
    'Link Building': ['Linkbuilding', 'Linkaufbau'],
    'Alt-Text': ['Alt Text', 'Alternativtext', 'Alt-Attribut'],
    'Bounce Rate': ['Absprungrate'],
    'Mobile First Index': ['Mobile-First', 'Mobile First'],
    'JSON-LD': ['JSON LD', 'JSONLD'],
    'Search Intent': ['Suchintention', 'Nutzerintention'],
    'User Experience': ['UX', 'Nutzererfahrung'],
    'Technical SEO': ['Technisches SEO'],
    'On-Page SEO': ['On Page SEO', 'Onpage SEO', 'Onpage-SEO'],
    'Off-Page SEO': ['Off Page SEO', 'Offpage SEO', 'Offpage-SEO'],
    'Conversion': ['Conversions', 'Konversion', 'Konversionen'],
    'Reviews (Bewertungen)': ['Bewertungen', 'Reviews', 'Rezensionen', 'Kundenbewertungen'],
    'Long-Tail Keywords': ['Long Tail Keywords', 'Longtail Keywords', 'Long-Tail-Keywords'],
    'Internal Linking': ['Interne Verlinkung', 'Interne Links'],
    'Anchor Text': ['Ankertext', 'Anchor-Text', 'Linktext'],
    'Duplicate Content': ['Doppelter Inhalt', 'Duplicate-Content'],
    'Canonical URL': ['Canonical Tag', 'Canonical-URL', 'rel canonical'],
    'XML-Sitemap': ['XML Sitemap', 'Sitemap'],
    'Rich Snippets': ['Rich Snippet', 'Rich Results'],
    'Knowledge Graph': ['Knowledge Panel'],
    'Geo-Targeting': ['Geo Targeting', 'Geotargeting'],
    'SSL-Zertifikat': ['SSL Zertifikat', 'SSL', 'TLS'],
    'Heading Tags (H1-H6)': ['H1-H6', 'H1 Tag', 'Überschriften-Tags', 'H1', 'H2'],
    'Webmaster Tools / Search Console': ['Search Console', 'GSC', 'Google Search Console'],
    'White Hat SEO': ['White-Hat', 'Whitehat SEO'],
    'Local SEO': ['Lokales SEO', 'lokale SEO', 'Lokale Suchmaschinenoptimierung'],
  };
  
  if (abbreviationMap[term]) {
    variants.push(...abbreviationMap[term]);
  }
  
  return variants;
};

export interface TextMatch {
  start: number;
  end: number;
  term: string;
  slug: string;
  matchedText: string;
}

// Find all lexikon term matches in text
export const findLexikonMatches = (
  text: string, 
  maxMatches: number = 10,
  excludeTerms: string[] = []
): TextMatch[] => {
  const keywords = buildKeywordMap();
  const matches: TextMatch[] = [];
  const matchedTerms = new Set<string>(); // Track which terms we've already matched
  const usedRanges: { start: number; end: number }[] = []; // Track used text ranges
  
  // Filter out excluded terms
  const filteredKeywords = keywords.filter(
    kw => !excludeTerms.some(ex => ex.toLowerCase() === kw.term.toLowerCase())
  );
  
  for (const keyword of filteredKeywords) {
    if (matches.length >= maxMatches) break;
    if (matchedTerms.has(keyword.term)) continue; // Only first occurrence per term
    
    // Try each variant
    for (const variant of keyword.variants) {
      if (matches.length >= maxMatches) break;
      if (matchedTerms.has(keyword.term)) continue;
      
      // Create regex for word boundary matching
      const escapedVariant = variant.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedVariant}\\b`, 'gi');
      
      let match;
      while ((match = regex.exec(text)) !== null) {
        const start = match.index;
        const end = start + match[0].length;
        
        // Check if this range overlaps with any existing match
        const overlaps = usedRanges.some(
          range => !(end <= range.start || start >= range.end)
        );
        
        if (!overlaps) {
          matches.push({
            start,
            end,
            term: keyword.term,
            slug: keyword.slug,
            matchedText: match[0]
          });
          usedRanges.push({ start, end });
          matchedTerms.add(keyword.term);
          break; // Only first occurrence
        }
      }
    }
  }
  
  // Sort matches by position for proper rendering
  return matches.sort((a, b) => a.start - b.start);
};

// Check if text contains any lexikon terms
export const hasLexikonTerms = (text: string): boolean => {
  const matches = findLexikonMatches(text, 1);
  return matches.length > 0;
};

// Get all unique terms that appear in text
export const getMatchedTerms = (text: string): string[] => {
  const matches = findLexikonMatches(text, 50);
  return [...new Set(matches.map(m => m.term))];
};
