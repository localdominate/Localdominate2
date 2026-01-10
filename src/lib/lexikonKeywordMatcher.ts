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
    const lengthDiff = b.term.length - a.term.length;
    if (lengthDiff !== 0) return lengthDiff;
    return b.priority - a.priority;
  });
};

// Generate variants for a term
const getTermVariants = (term: string): string[] => {
  const variants: string[] = [term];
  
  const abbreviationMap: Record<string, string[]> = {
    // A
    'Algorithmus-Update': ['Algorithmus Update', 'Core Update', 'Google Update', 'Algorithm Update'],
    'Alt-Text': ['Alt Text', 'Alternativtext', 'Alt-Attribut', 'Alt Tag'],
    'Anchor Text': ['Ankertext', 'Anchor-Text', 'Linktext'],
    // B
    'Backlinks': ['Backlink', 'Rückverweise', 'Rückverlinkungen', 'eingehende Links'],
    'Black Hat SEO': ['Black-Hat', 'Blackhat SEO', 'Black Hat'],
    'Bounce Rate': ['Absprungrate', 'Bounces'],
    'Branchenverzeichnis': ['Branchenverzeichnisse', 'Business Directory', 'Firmenverzeichnis'],
    // C
    'Citations': ['Citation', 'Zitationen', 'Brancheneinträge', 'Firmeneinträge'],
    'Canonical URL': ['Canonical Tag', 'Canonical-URL', 'rel canonical', 'Canonical'],
    'Content-Strategie': ['Content Strategie', 'Content Strategy', 'Inhaltsstrategie'],
    'Conversion Rate': ['Konversionsrate', 'CR', 'Conversion-Rate'],
    'Core Web Vitals': ['CWV', 'Web Vitals', 'Core Vitals'],
    'Crawling': ['Crawlen', 'Webcrawling', 'Spider'],
    'CTR': ['Click-Through-Rate', 'Klickrate', 'Click Through Rate'],
    // D
    'Domain Authority': ['DA', 'Domainautorität', 'Domain-Authority'],
    'Duplicate Content': ['Doppelter Inhalt', 'Duplicate-Content', 'doppelte Inhalte'],
    'Dwell Time': ['Verweildauer', 'Verweilzeit'],
    // E
    'E-E-A-T': ['EEAT', 'E-A-T', 'EAT', 'Experience Expertise Authority Trust'],
    // F
    'Featured Snippet': ['Featured Snippets', 'Position 0', 'Hervorgehobenes Snippet'],
    // G
    'Google Business Profile': ['GBP', 'Google My Business', 'GMB', 'Unternehmensprofil', 'Business Profile'],
    'Google Maps': ['Maps', 'Google-Maps'],
    'Geo-Targeting': ['Geo Targeting', 'Geotargeting', 'geografisches Targeting'],
    // H
    'Heading Tags (H1-H6)': ['H1-H6', 'H1 Tag', 'Überschriften-Tags', 'H1', 'H2', 'H3', 'Heading Tags'],
    'Hreflang': ['hreflang-Tag', 'hreflang Attribut'],
    'HTTPS': ['SSL', 'TLS', 'sichere Verbindung'],
    // I
    'Image SEO': ['Bilder-SEO', 'Bild-SEO', 'Bildoptimierung'],
    'Indexierung': ['Indexing', 'Index', 'indexiert'],
    'Internal Linking': ['Interne Verlinkung', 'Interne Links', 'internes Linking'],
    // J
    'JSON-LD': ['JSON LD', 'JSONLD', 'JSON-LD Schema'],
    // K
    'Keywords': ['Keyword', 'Suchbegriffe', 'Suchbegriff', 'Schlüsselwörter'],
    'Keyword Density': ['Keyword-Density', 'Keyworddichte', 'Keyword Dichte'],
    'Keyword Stuffing': ['Keyword-Stuffing', 'Keywordspam'],
    'Knowledge Graph': ['Google Knowledge Graph'],
    'Knowledge Panel': ['Knowledge-Panel', 'Wissenspanel'],
    // L
    'Local SEO': ['Lokales SEO', 'lokale SEO', 'Lokale Suchmaschinenoptimierung', 'Local Search'],
    'Local Pack': ['3-Pack', 'Map Pack', 'lokales Pack', 'Lokal Pack', 'Local 3-Pack'],
    'Long-Tail Keywords': ['Long Tail Keywords', 'Longtail Keywords', 'Long-Tail-Keywords', 'Longtail'],
    'Link Building': ['Linkbuilding', 'Linkaufbau', 'Link-Building'],
    // M
    'Meta Description': ['Meta-Description', 'Metabeschreibung', 'Meta Beschreibung'],
    'Meta-Tags': ['Meta Tags', 'Metatags', 'Meta-Elemente'],
    'Mobile First Index': ['Mobile-First', 'Mobile First', 'Mobile-First-Indexierung'],
    // N
    'NAP': ['NAP-Daten', 'Name Adresse Telefon', 'NAP-Konsistenz'],
    'Nofollow Link': ['Nofollow', 'rel nofollow', 'no-follow'],
    // O
    'Off-Page SEO': ['Off Page SEO', 'Offpage SEO', 'Offpage-SEO', 'Off-Page'],
    'On-Page SEO': ['On Page SEO', 'Onpage SEO', 'Onpage-SEO', 'On-Page'],
    'Organic Traffic': ['organischer Traffic', 'organische Besucher'],
    // P
    'PageSpeed': ['Page Speed', 'Seitengeschwindigkeit', 'Ladezeit', 'Pagespeed'],
    'Proximity (Entfernung)': ['Proximity', 'Entfernung', 'Nähe', 'geografische Nähe'],
    // Q
    'Quality Raters': ['Quality Rater', 'Google Rater', 'Search Quality Rater'],
    // R
    'Responsive Design': ['Responsive', 'responsives Design', 'Responsive Webdesign'],
    'Reviews (Bewertungen)': ['Bewertungen', 'Reviews', 'Rezensionen', 'Kundenbewertungen', 'Google Bewertungen'],
    'Rich Snippets': ['Rich Snippet', 'Rich Results', 'erweiterte Snippets'],
    'Robots.txt': ['robots.txt', 'Robots Datei'],
    // S
    'Schema Markup': ['Schema', 'Strukturierte Daten', 'Structured Data', 'Schema.org'],
    'Search Intent': ['Suchintention', 'Nutzerintention', 'Suchintent'],
    'SERP': ['SERPs', 'Suchergebnisseite', 'Suchergebnisseiten', 'Search Engine Results'],
    'Social Signals': ['Social Signal', 'soziale Signale'],
    'SSL-Zertifikat': ['SSL Zertifikat', 'SSL', 'TLS Zertifikat'],
    // T
    'Technical SEO': ['Technisches SEO', 'technische SEO', 'Tech SEO'],
    'Title Tag': ['Title-Tag', 'Seitentitel', 'Meta Title', 'Title'],
    // U
    'URL-Struktur': ['URL Struktur', 'URL-Aufbau', 'Seitenstruktur'],
    'User Experience (UX)': ['UX', 'Nutzererfahrung', 'User Experience', 'Benutzererfahrung'],
    // V
    'Voice Search': ['Sprachsuche', 'Voice-Search', 'Sprachassistent'],
    // W
    'Webmaster Tools / Search Console': ['Search Console', 'GSC', 'Google Search Console', 'Webmaster Tools'],
    'White Hat SEO': ['White-Hat', 'Whitehat SEO', 'White Hat'],
    // X
    'XML-Sitemap': ['XML Sitemap', 'Sitemap', 'sitemap.xml'],
    // Y
    'YMYL': ['Your Money Your Life', 'YMYL-Seiten'],
    // Z
    'Zero-Click Search': ['Zero Click', 'Null-Klick-Suche', 'Zero-Click'],
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
  const matchedTerms = new Set<string>();
  const usedRanges: { start: number; end: number }[] = [];
  
  const filteredKeywords = keywords.filter(
    kw => !excludeTerms.some(ex => ex.toLowerCase() === kw.term.toLowerCase())
  );
  
  for (const keyword of filteredKeywords) {
    if (matches.length >= maxMatches) break;
    if (matchedTerms.has(keyword.term)) continue;
    
    for (const variant of keyword.variants) {
      if (matches.length >= maxMatches) break;
      if (matchedTerms.has(keyword.term)) continue;
      
      const escapedVariant = variant.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedVariant}\\b`, 'gi');
      
      let match;
      while ((match = regex.exec(text)) !== null) {
        const start = match.index;
        const end = start + match[0].length;
        
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
          break;
        }
      }
    }
  }
  
  return matches.sort((a, b) => a.start - b.start);
};

export const hasLexikonTerms = (text: string): boolean => {
  const matches = findLexikonMatches(text, 1);
  return matches.length > 0;
};

export const getMatchedTerms = (text: string): string[] => {
  const matches = findLexikonMatches(text, 50);
  return [...new Set(matches.map(m => m.term))];
};
