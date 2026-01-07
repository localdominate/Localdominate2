import React from 'react';
import { getArticleBySlug } from '@/data/blogArticles';
import ArticleLayout from '@/components/blog/ArticleLayout';
import TableOfContents from '@/components/blog/TableOfContents';
import ArticleCTA from '@/components/blog/ArticleCTA';
import { useAuditChecklist } from '@/hooks/useAuditChecklist';
import { AuditProgressBar } from '@/components/audit/AuditProgressBar';
import { AuditCategorySection } from '@/components/audit/AuditCategorySection';
import { CategoryProgressCard } from '@/components/audit/CategoryProgressCard';
import { auditCategories } from '@/data/localSeoAuditItems';
import { 
  AlertTriangle,
  Lightbulb,
  FileCheck,
  Search,
  Target,
  BarChart3,
  Users
} from 'lucide-react';

const LocalSeoAuditCheckliste = () => {
  const article = getArticleBySlug('local-seo-audit-checkliste');
  
  const {
    isChecked,
    toggleItem,
    resetAll,
    totalItems,
    checkedCount,
    percentage,
    categoryProgress,
    isLoaded,
  } = useAuditChecklist();

  if (!article) {
    return <div>Artikel nicht gefunden</div>;
  }

  const tocItems = [
    { id: 'warum-audit', title: 'Warum regelmäßige Audits?' },
    { id: 'interaktive-checkliste', title: 'Interaktive Checkliste' },
    { id: 'gbp-audit', title: 'Google Business Profil' },
    { id: 'website-audit', title: 'Website Local SEO' },
    { id: 'citation-audit', title: 'Citations & Verzeichnisse' },
    { id: 'bewertungen-audit', title: 'Bewertungen' },
    { id: 'priorisierung', title: 'Priorisierung' },
    { id: 'faq', title: 'FAQ' },
  ];

  const faqItems = [
    {
      question: 'Wie oft sollte ich einen Local SEO Audit durchführen?',
      answer: 'Wir empfehlen einen vollständigen Audit alle 3-6 Monate. Wichtige Metriken wie Rankings, Bewertungen und Google Business Insights solltest du monatlich prüfen. Nach größeren Google-Updates ist ein sofortiger Check sinnvoll.',
    },
    {
      question: 'Kann ich den Local SEO Audit selbst durchführen?',
      answer: 'Ja, mit dieser interaktiven Checkliste kannst du einen Basisaudit selbst machen. Dein Fortschritt wird automatisch gespeichert, sodass du jederzeit weitermachen kannst.',
    },
    {
      question: 'Welche Tools brauche ich für einen vollständigen Audit?',
      answer: 'Kostenlose Tools: Google Search Console, Google Business Insights, PageSpeed Insights, Mobile-Friendly Test. Kostenpflichtige Empfehlungen: Semrush, Ahrefs, BrightLocal, Whitespark für tiefere Analysen.',
    },
    {
      question: 'Was sind die häufigsten Fehler, die bei Audits gefunden werden?',
      answer: 'Top 5 Fehler: 1) Unvollständiges Google Business Profil, 2) Fehlende oder falsche NAP-Daten, 3) Keine lokalen Keywords in Title Tags, 4) Fehlendes LocalBusiness Schema, 5) Keine aktive Bewertungsstrategie.',
    },
    {
      question: 'Wie priorisiere ich die gefundenen Maßnahmen?',
      answer: 'Nutze die Prioritäts-Badges: Kritische Punkte (rot) zuerst, dann hohe Priorität (orange), dann mittlere (gelb). Quick Wins mit geringem Aufwand solltest du bevorzugen.',
    },
  ];

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <ArticleLayout article={article} additionalSchema={faqSchema}>
      <TableOfContents items={tocItems} />

      {/* Intro */}
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Du investierst in Local SEO, aber weißt nicht, wo du stehst? Diese <strong>interaktive 
        50-Punkte Checkliste</strong> hilft dir, systematisch alle wichtigen Bereiche zu analysieren. 
        <strong> Klicke auf jeden Punkt</strong>, um ihn als erledigt zu markieren – dein Fortschritt 
        wird automatisch gespeichert!
      </p>

      {/* Why Audits Section */}
      <section id="warum-audit" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <FileCheck className="h-6 w-6 text-primary" />
          Warum regelmäßige Local SEO Audits?
        </h2>

        <p className="text-muted-foreground mb-6">
          Local SEO ist kein "Set and Forget". Google ändert regelmäßig Algorithmen, Wettbewerber 
          optimieren ihre Präsenz, und deine eigenen Daten können veralten. Ein Audit hilft dir:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { icon: <Search className="h-5 w-5" />, title: "Schwachstellen finden", desc: "Technische Fehler und verpasste Chancen aufdecken" },
            { icon: <Target className="h-5 w-5" />, title: "Priorisieren", desc: "Wissen, wo Maßnahmen den größten Impact haben" },
            { icon: <BarChart3 className="h-5 w-5" />, title: "Fortschritt messen", desc: "Vorher-Nachher-Vergleich für ROI-Nachweis" },
            { icon: <Users className="h-5 w-5" />, title: "Konkurrenz analysieren", desc: "Verstehen, warum andere besser ranken" }
          ].map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4 flex gap-3">
              <div className="text-primary flex-shrink-0 mt-1">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Ohne regelmäßige Audits riskierst du:</p>
              <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                <li>• Veraltete NAP-Daten in Verzeichnissen</li>
                <li>• Unbeantwortete negative Bewertungen</li>
                <li>• Technische Probleme auf der Website</li>
                <li>• Verlust von Rankings an Wettbewerber</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Checklist Section */}
      <section id="interaktive-checkliste" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Interaktive Audit-Checkliste</h2>

        {/* Progress Bar */}
        {isLoaded && (
          <AuditProgressBar
            checkedCount={checkedCount}
            totalItems={totalItems}
            percentage={percentage}
            onReset={resetAll}
          />
        )}

        {/* Category Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {categoryProgress.map((cat) => (
            <CategoryProgressCard
              key={cat.id}
              title={cat.title}
              checked={cat.checked}
              total={cat.total}
              percentage={cat.percentage}
            />
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-700 dark:text-blue-300">
              <strong>Tipp:</strong> Klicke auf eine Kategorie, um sie auf- oder zuzuklappen. 
              Die farbigen Badges zeigen die Priorität: <span className="text-red-600">Kritisch</span>, 
              <span className="text-orange-600"> Hoch</span>, <span className="text-yellow-600"> Mittel</span>.
            </p>
          </div>
        </div>
      </section>

      {/* GBP Audit Section */}
      <section id="gbp-audit" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Google Business Profil Audit</h2>
        
        {auditCategories.slice(0, 3).map((category) => {
          const progress = categoryProgress.find((p) => p.id === category.id);
          return (
            <AuditCategorySection
              key={category.id}
              categoryId={category.id}
              title={category.title}
              isChecked={isChecked}
              onToggle={toggleItem}
              checkedCount={progress?.checked || 0}
              totalCount={progress?.total || 0}
              percentage={progress?.percentage || 0}
            />
          );
        })}

        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800 dark:text-red-200 mb-1">Kritischer Fehler</p>
              <p className="text-red-700 dark:text-red-300 text-sm">
                Ein nicht verifiziertes Profil rankt praktisch nicht. Falls dein Profil noch nicht 
                verifiziert ist, hat dies absolute Priorität.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Website Audit Section */}
      <section id="website-audit" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Website Local SEO Audit</h2>
        
        {auditCategories.slice(3, 6).map((category) => {
          const progress = categoryProgress.find((p) => p.id === category.id);
          return (
            <AuditCategorySection
              key={category.id}
              categoryId={category.id}
              title={category.title}
              isChecked={isChecked}
              onToggle={toggleItem}
              checkedCount={progress?.checked || 0}
              totalCount={progress?.total || 0}
              percentage={progress?.percentage || 0}
            />
          );
        })}
      </section>

      {/* Citation Audit Section */}
      <section id="citation-audit" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Citation Audit</h2>
        
        {auditCategories.slice(6, 8).map((category) => {
          const progress = categoryProgress.find((p) => p.id === category.id);
          return (
            <AuditCategorySection
              key={category.id}
              categoryId={category.id}
              title={category.title}
              isChecked={isChecked}
              onToggle={toggleItem}
              checkedCount={progress?.checked || 0}
              totalCount={progress?.total || 0}
              percentage={progress?.percentage || 0}
            />
          );
        })}
      </section>

      {/* Reviews Audit Section */}
      <section id="bewertungen-audit" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Bewertungen Audit</h2>
        
        {auditCategories.slice(8, 10).map((category) => {
          const progress = categoryProgress.find((p) => p.id === category.id);
          return (
            <AuditCategorySection
              key={category.id}
              categoryId={category.id}
              title={category.title}
              isChecked={isChecked}
              onToggle={toggleItem}
              checkedCount={progress?.checked || 0}
              totalCount={progress?.total || 0}
              percentage={progress?.percentage || 0}
            />
          );
        })}
      </section>

      {/* Prioritization Section */}
      <section id="priorisierung" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Priorisierung der Maßnahmen</h2>
        
        <p className="text-muted-foreground mb-4">
          Nicht alle Audit-Punkte haben die gleiche Priorität. Die farbigen Badges helfen dir 
          bei der Einordnung:
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg">
            <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-medium">
              Kritisch
            </span>
            <span className="text-sm text-muted-foreground">
              GBP-Verifizierung, NAP-Konsistenz, Mobile-Friendly, SSL – diese Punkte zuerst!
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-lg">
            <span className="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 font-medium">
              Hoch
            </span>
            <span className="text-sm text-muted-foreground">
              Kategorien, Fotos, Schema Markup, Bewertungsmanagement – hoher Impact
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-600 font-medium">
              Mittel
            </span>
            <span className="text-sm text-muted-foreground">
              Zusätzliche Citations, regelmäßige Fotos, Feiertags-Öffnungszeiten – Nice to have
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Häufige Fragen zum Local SEO Audit</h2>
        
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
              <p className="text-muted-foreground text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <ArticleCTA variant="box" />
    </ArticleLayout>
  );
};

export default LocalSeoAuditCheckliste;
