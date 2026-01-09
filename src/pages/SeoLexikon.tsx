import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  BookOpen, 
  TrendingUp, 
  Percent, 
  Users, 
  BarChart3, 
  Clock, 
  ChevronRight,
  Sparkles,
  Target,
  Lightbulb,
  ArrowLeft,
  ExternalLink,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { seoLexikonData, getAllLetters, getTermsByLetter, searchTerms, SEOTerm, getTotalTermsCount } from "@/data/seoLexikonData";

const iconMap = {
  trending: TrendingUp,
  percent: Percent,
  users: Users,
  search: Search,
  chart: BarChart3,
  clock: Clock,
};

const difficultyColors = {
  anfänger: "bg-green-500/20 text-green-400 border-green-500/30",
  fortgeschritten: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  experte: "bg-red-500/20 text-red-400 border-red-500/30",
};

const TermCard = ({ 
  term, 
  isSelected, 
  onClick,
  showLetter = true
}: { 
  term: SEOTerm; 
  isSelected: boolean; 
  onClick: () => void;
  showLetter?: boolean;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`cursor-pointer rounded-xl p-4 border transition-all duration-300 ${
        isSelected 
          ? "bg-primary/20 border-primary shadow-lg shadow-primary/20" 
          : "bg-card/50 border-border/50 hover:border-primary/50 hover:bg-card"
      }`}
    >
      <div className="flex items-start gap-3">
        {showLetter && (
          <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
            isSelected ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"
          }`}>
            {term.letter}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1">{term.term}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{term.shortDescription}</p>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <Badge variant="outline" className={`${difficultyColors[term.difficulty]} text-xs`}>
              {term.difficulty}
            </Badge>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < term.importance ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-transform ${isSelected ? "rotate-90 text-primary" : "text-muted-foreground"}`} />
      </div>
    </motion.div>
  );
};

const TermDetail = ({ term }: { term: SEOTerm }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-3xl font-bold text-primary-foreground shadow-lg shadow-primary/30">
          {term.letter}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{term.term}</h2>
          <p className="text-muted-foreground">{term.shortDescription}</p>
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Badge variant="outline" className={difficultyColors[term.difficulty]}>
              {term.difficulty === "anfänger" ? "👶 Anfänger" : term.difficulty === "fortgeschritten" ? "🎯 Fortgeschritten" : "🏆 Experte"}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Wichtigkeit:</span>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < term.importance ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs for detailed info */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-background/50">
          <TabsTrigger value="overview" className="text-xs md:text-sm">Übersicht</TabsTrigger>
          <TabsTrigger value="features" className="text-xs md:text-sm">Features</TabsTrigger>
          <TabsTrigger value="statistics" className="text-xs md:text-sm">Statistiken</TabsTrigger>
          <TabsTrigger value="benefits" className="text-xs md:text-sm">Nutzen</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4 space-y-4">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BookOpen className="w-5 h-5 text-primary" />
                Definition & Erklärung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{term.fullDescription}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <ExternalLink className="w-5 h-5 text-primary" />
                Verwandte Begriffe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {term.relatedTerms.map((related) => (
                  <Badge key={related} variant="secondary" className="cursor-pointer hover:bg-primary/20">
                    {related}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="mt-4">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Sparkles className="w-5 h-5 text-primary" />
                Wichtige Features & Eigenschaften
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {term.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="statistics" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {term.statistics.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="benefits" className="mt-4">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="w-5 h-5 text-primary" />
                Vorteile & Nutzen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {term.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20"
                  >
                    <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

const SeoLexikon = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>("A");
  const [selectedTerm, setSelectedTerm] = useState<SEOTerm | null>(seoLexikonData[0]);

  const letters = getAllLetters();
  const totalTerms = getTotalTermsCount();

  const filteredTerms = useMemo(() => {
    if (searchQuery) {
      return searchTerms(searchQuery);
    }
    if (selectedLetter) {
      return getTermsByLetter(selectedLetter);
    }
    return seoLexikonData;
  }, [searchQuery, selectedLetter]);

  const handleLetterClick = (letter: string) => {
    setSearchQuery("");
    setSelectedLetter(letter);
    const terms = getTermsByLetter(letter);
    if (terms.length > 0) {
      setSelectedTerm(terms[0]);
    }
  };

  const handleTermClick = (term: SEOTerm) => {
    setSelectedTerm(term);
  };

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "SEO Lexikon - Alle wichtigen SEO-Begriffe von A-Z",
    "description": "Umfassendes SEO-Lexikon mit allen wichtigen Begriffen der Suchmaschinenoptimierung. Von Alt-Text bis Zero-Click Search - verständlich erklärt mit Statistiken und praktischen Tipps.",
    "url": "https://local-dominator.de/seo-lexikon",
    "hasDefinedTerm": seoLexikonData.map(term => ({
      "@type": "DefinedTerm",
      "name": term.term,
      "description": term.shortDescription
    }))
  };

  return (
    <>
      <SEOHead
        title="SEO Lexikon A-Z | Alle wichtigen SEO-Begriffe erklärt | Local Dominator"
        description="Das umfassende SEO-Lexikon mit allen wichtigen Begriffen von A-Z. Alt-Text, Backlinks, Citations, Keywords, Local Pack und mehr - verständlich erklärt mit Statistiken und Tipps."
        keywords="SEO Lexikon, SEO Glossar, SEO Begriffe, SEO Wörterbuch, Local SEO Begriffe, SEO Definition, Backlinks erklärt, Keywords erklärt"
        canonicalUrl="https://local-dominator.de/seo-lexikon"
        jsonLd={seoSchema}
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-background to-pain/20">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
          <div className="container max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3">
                <img src="/logo.png" alt="Local Dominator Logo" className="h-10 w-auto" />
              </Link>
              <div className="flex items-center gap-4">
                <Link to="/blog">
                  <Button variant="ghost" size="sm">
                    📚 Blog
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Zurück
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="container max-w-7xl mx-auto px-4 py-8 md:py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <BookOpen className="w-3 h-3 mr-1" />
              Interaktives Nachschlagewerk
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              SEO Lexikon{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                A-Z
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
              Alle wichtigen SEO-Begriffe verständlich erklärt. Mit Statistiken, Features und praktischen Tipps für dein Local SEO.
            </p>
            <Badge className="bg-primary/10 text-primary border-primary/30">
              {totalTerms} Begriffe
            </Badge>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Begriff suchen..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedLetter(null);
                }}
                className="pl-12 py-6 text-lg bg-card/50 border-border/50 focus:border-primary"
              />
            </div>
          </motion.div>

          {/* Alphabet Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-1 md:gap-2 mb-10"
          >
            {letters.map((letter, index) => (
              <motion.button
                key={letter}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.02 * index }}
                onClick={() => handleLetterClick(letter)}
                className={`w-9 h-9 md:w-10 md:h-10 rounded-lg font-bold text-sm md:text-base transition-all duration-200 ${
                  selectedLetter === letter && !searchQuery
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-card/50 text-muted-foreground hover:bg-primary/20 hover:text-primary border border-border/50"
                }`}
              >
                {letter}
              </motion.button>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Terms List */}
            <div className="lg:col-span-2 space-y-3 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
              {selectedLetter && !searchQuery && (
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-card/50 border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-lg font-bold text-primary-foreground">
                    {selectedLetter}
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">
                      {filteredTerms.length} {filteredTerms.length === 1 ? 'Begriff' : 'Begriffe'}
                    </span>
                  </div>
                </div>
              )}
              <AnimatePresence mode="popLayout">
                {filteredTerms.map((term, index) => (
                  <TermCard
                    key={`${term.letter}-${term.term}`}
                    term={term}
                    isSelected={selectedTerm?.term === term.term}
                    onClick={() => handleTermClick(term)}
                    showLetter={!!searchQuery || (selectedLetter ? index === 0 : true)}
                  />
                ))}
              </AnimatePresence>
              {filteredTerms.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 text-muted-foreground"
                >
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Kein Begriff gefunden für "{searchQuery}"</p>
                </motion.div>
              )}
            </div>

            {/* Term Detail */}
            <div className="lg:col-span-3">
              <div className="sticky top-24 bg-card/30 rounded-2xl border border-border/50 p-6 backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  {selectedTerm ? (
                    <TermDetail key={`${selectedTerm.letter}-${selectedTerm.term}`} term={selectedTerm} />
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-12 text-muted-foreground"
                    >
                      <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">Wähle einen Begriff aus der Liste</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "SEO-Begriffe", value: seoLexikonData.length.toString(), icon: BookOpen },
              { label: "Anfänger-Begriffe", value: seoLexikonData.filter(t => t.difficulty === "anfänger").length.toString(), icon: Users },
              { label: "Fortgeschritten", value: seoLexikonData.filter(t => t.difficulty === "fortgeschritten").length.toString(), icon: TrendingUp },
              { label: "Experten-Level", value: seoLexikonData.filter(t => t.difficulty === "experte").length.toString(), icon: Star },
            ].map((stat, index) => (
              <Card key={index} className="bg-card/50 border-border/50 text-center">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Bereit, dein Local SEO zu dominieren?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Nutze unser Wissen und unsere Expertise, um dein lokales Unternehmen in Google Maps nach vorne zu bringen.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Jetzt starten
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SeoLexikon;
