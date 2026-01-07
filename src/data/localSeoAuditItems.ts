export interface AuditItem {
  id: string;
  text: string;
  category: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
}

export interface AuditCategory {
  id: string;
  title: string;
  description: string;
}

export const auditCategories: AuditCategory[] = [
  { id: 'gbp-basics', title: 'Google Business Profil - Grundlagen', description: '5 Punkte' },
  { id: 'gbp-content', title: 'Kategorien & Beschreibung', description: '5 Punkte' },
  { id: 'gbp-media', title: 'Fotos & Medien', description: '5 Punkte' },
  { id: 'website-technical', title: 'Website - Technische Grundlagen', description: '5 Punkte' },
  { id: 'website-content', title: 'Lokaler Content', description: '5 Punkte' },
  { id: 'website-schema', title: 'Schema Markup', description: '5 Punkte' },
  { id: 'citations', title: 'Citations & Verzeichnisse', description: '5 Punkte' },
  { id: 'citations-quality', title: 'Citation-Qualität', description: '5 Punkte' },
  { id: 'reviews-quantity', title: 'Bewertungen - Quantität', description: '5 Punkte' },
  { id: 'reviews-management', title: 'Bewertungsmanagement', description: '5 Punkte' },
];

export const auditItems: AuditItem[] = [
  // GBP Grundlagen (5)
  { id: 'gbp-1', text: 'Profil ist verifiziert', category: 'gbp-basics', priority: 'critical' },
  { id: 'gbp-2', text: 'Firmenname exakt korrekt (keine Keywords)', category: 'gbp-basics', priority: 'critical' },
  { id: 'gbp-3', text: 'Adresse vollständig und korrekt', category: 'gbp-basics', priority: 'critical' },
  { id: 'gbp-4', text: 'Telefonnummer mit lokaler Vorwahl', category: 'gbp-basics', priority: 'high' },
  { id: 'gbp-5', text: 'Website-URL korrekt verlinkt', category: 'gbp-basics', priority: 'high' },

  // Kategorien & Beschreibung (5)
  { id: 'gbp-6', text: 'Primäre Kategorie optimal gewählt', category: 'gbp-content', priority: 'critical' },
  { id: 'gbp-7', text: 'Sekundäre Kategorien vollständig', category: 'gbp-content', priority: 'high' },
  { id: 'gbp-8', text: 'Unternehmensbeschreibung mit Keywords', category: 'gbp-content', priority: 'high' },
  { id: 'gbp-9', text: 'Öffnungszeiten aktuell', category: 'gbp-content', priority: 'high' },
  { id: 'gbp-10', text: 'Spezielle Öffnungszeiten (Feiertage)', category: 'gbp-content', priority: 'medium' },

  // Fotos & Medien (5)
  { id: 'gbp-11', text: 'Logo hochgeladen (min. 250x250px)', category: 'gbp-media', priority: 'high' },
  { id: 'gbp-12', text: 'Titelbild vorhanden (1080x608px)', category: 'gbp-media', priority: 'high' },
  { id: 'gbp-13', text: 'Mindestens 10 Geschäftsfotos', category: 'gbp-media', priority: 'high' },
  { id: 'gbp-14', text: 'Fotos mit Geo-Tags versehen', category: 'gbp-media', priority: 'medium' },
  { id: 'gbp-15', text: 'Regelmäßig neue Fotos (monatlich)', category: 'gbp-media', priority: 'medium' },

  // Website Technische Grundlagen (5)
  { id: 'web-1', text: 'Mobile-friendly (responsive Design)', category: 'website-technical', priority: 'critical' },
  { id: 'web-2', text: 'Ladezeit unter 3 Sekunden', category: 'website-technical', priority: 'critical' },
  { id: 'web-3', text: 'SSL-Zertifikat aktiv (HTTPS)', category: 'website-technical', priority: 'critical' },
  { id: 'web-4', text: 'Core Web Vitals bestanden', category: 'website-technical', priority: 'high' },
  { id: 'web-5', text: 'Keine Crawling-Fehler in Search Console', category: 'website-technical', priority: 'high' },

  // Lokaler Content (5)
  { id: 'web-6', text: 'NAP prominent auf jeder Seite', category: 'website-content', priority: 'critical' },
  { id: 'web-7', text: 'Lokale Keywords im Title Tag', category: 'website-content', priority: 'high' },
  { id: 'web-8', text: 'Lokale Keywords in H1', category: 'website-content', priority: 'high' },
  { id: 'web-9', text: 'Eingebettete Google Maps Karte', category: 'website-content', priority: 'medium' },
  { id: 'web-10', text: 'Lokale Inhalte (Stadtbezug, Einzugsgebiet)', category: 'website-content', priority: 'medium' },

  // Schema Markup (5)
  { id: 'web-11', text: 'LocalBusiness Schema implementiert', category: 'website-schema', priority: 'high' },
  { id: 'web-12', text: 'NAP in Schema korrekt', category: 'website-schema', priority: 'high' },
  { id: 'web-13', text: 'Öffnungszeiten in Schema', category: 'website-schema', priority: 'medium' },
  { id: 'web-14', text: 'Geo-Koordinaten in Schema', category: 'website-schema', priority: 'medium' },
  { id: 'web-15', text: 'Schema ohne Fehler (Rich Results Test)', category: 'website-schema', priority: 'high' },

  // Citations & Verzeichnisse (5)
  { id: 'cit-1', text: 'Google Business Profil aktiv', category: 'citations', priority: 'critical' },
  { id: 'cit-2', text: 'Bing Places eingerichtet', category: 'citations', priority: 'high' },
  { id: 'cit-3', text: 'Apple Maps gelistet', category: 'citations', priority: 'high' },
  { id: 'cit-4', text: 'Branchenspezifische Verzeichnisse', category: 'citations', priority: 'medium' },
  { id: 'cit-5', text: 'Regionale Verzeichnisse', category: 'citations', priority: 'medium' },

  // Citation-Qualität (5)
  { id: 'cit-6', text: 'NAP 100% konsistent überall', category: 'citations-quality', priority: 'critical' },
  { id: 'cit-7', text: 'Keine doppelten Einträge', category: 'citations-quality', priority: 'high' },
  { id: 'cit-8', text: 'Alte/falsche Einträge korrigiert', category: 'citations-quality', priority: 'high' },
  { id: 'cit-9', text: 'Beschreibungen einheitlich', category: 'citations-quality', priority: 'medium' },
  { id: 'cit-10', text: 'Kategorien überall korrekt', category: 'citations-quality', priority: 'medium' },

  // Bewertungen Quantität (5)
  { id: 'rev-1', text: 'Mindestens 20 Google Bewertungen', category: 'reviews-quantity', priority: 'high' },
  { id: 'rev-2', text: 'Durchschnitt über 4.0 Sterne', category: 'reviews-quantity', priority: 'high' },
  { id: 'rev-3', text: 'Aktuelle Bewertungen (letzte 30 Tage)', category: 'reviews-quantity', priority: 'high' },
  { id: 'rev-4', text: 'Mehr Bewertungen als Hauptkonkurrent', category: 'reviews-quantity', priority: 'medium' },
  { id: 'rev-5', text: 'Bewertungen auf mehreren Plattformen', category: 'reviews-quantity', priority: 'medium' },

  // Bewertungsmanagement (5)
  { id: 'rev-6', text: 'Alle Bewertungen beantwortet', category: 'reviews-management', priority: 'high' },
  { id: 'rev-7', text: 'Antworten innerhalb 48h', category: 'reviews-management', priority: 'medium' },
  { id: 'rev-8', text: 'Keywords in Antworten verwendet', category: 'reviews-management', priority: 'medium' },
  { id: 'rev-9', text: 'Negative Bewertungen professionell bearbeitet', category: 'reviews-management', priority: 'high' },
  { id: 'rev-10', text: 'Aktive Bewertungs-Strategie vorhanden', category: 'reviews-management', priority: 'medium' },
];

export const getItemsByCategory = (categoryId: string): AuditItem[] => {
  return auditItems.filter(item => item.category === categoryId);
};

export const getPriorityColor = (priority: AuditItem['priority']): string => {
  switch (priority) {
    case 'critical': return 'text-red-600 bg-red-100';
    case 'high': return 'text-orange-600 bg-orange-100';
    case 'medium': return 'text-yellow-600 bg-yellow-100';
    case 'low': return 'text-green-600 bg-green-100';
  }
};

export const getPriorityLabel = (priority: AuditItem['priority']): string => {
  switch (priority) {
    case 'critical': return 'Kritisch';
    case 'high': return 'Hoch';
    case 'medium': return 'Mittel';
    case 'low': return 'Niedrig';
  }
};
