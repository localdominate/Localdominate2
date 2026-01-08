import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link2, Lightbulb, Building2, Users, Newspaper, Trophy, Heart, Briefcase, MapPin } from "lucide-react";

interface LinkIdea {
  title: string;
  description: string;
  difficulty: "leicht" | "mittel" | "schwer";
  impact: "hoch" | "mittel" | "niedrig";
  template?: string;
  icon: React.ReactNode;
}

const industries: Record<string, string> = {
  restaurant: "Restaurant / Gastronomie",
  handwerker: "Handwerk",
  arzt: "Arzt / Praxis",
  anwalt: "Anwalt / Kanzlei",
  fitness: "Fitnessstudio",
  hotel: "Hotel / Unterkunft",
  friseur: "Friseur / Beauty",
  einzelhandel: "Einzelhandel",
};

const ideaTemplates: Record<string, LinkIdea[]> = {
  restaurant: [
    {
      title: "Lokale Food-Blogger einladen",
      description: "Lade Food-Blogger zu einem kostenlosen Dinner ein und bitte um eine Review mit Link.",
      difficulty: "leicht",
      impact: "hoch",
      template: "Hallo [Name], ich bin ein großer Fan Ihres Blogs! Wir würden Sie gerne zu einem kostenlosen Dinner einladen...",
      icon: <Users className="w-4 h-4" />,
    },
    {
      title: "Rezepte für lokale Zeitungen",
      description: "Biete der Lokalzeitung exklusive Rezepte für die Wochenend-Beilage an.",
      difficulty: "mittel",
      impact: "hoch",
      template: "Sehr geehrte Redaktion, als lokales Restaurant würden wir gerne ein saisonales Rezept beisteuern...",
      icon: <Newspaper className="w-4 h-4" />,
    },
    {
      title: "Lieferanten-Partnerschaft",
      description: "Verlinke deine lokalen Lieferanten und bitte um Gegenlinks als 'Partner-Restaurant'.",
      difficulty: "leicht",
      impact: "mittel",
      icon: <Building2 className="w-4 h-4" />,
    },
    {
      title: "Charity-Dinner organisieren",
      description: "Organisiere ein Charity-Event mit einem lokalen Verein - perfekt für Presse-Coverage.",
      difficulty: "schwer",
      impact: "hoch",
      icon: <Heart className="w-4 h-4" />,
    },
  ],
  handwerker: [
    {
      title: "Handwerkskammer-Eintrag",
      description: "Vollständiges Profil bei der HWK mit Link zur Website erstellen.",
      difficulty: "leicht",
      impact: "hoch",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      title: "Sponsoring lokaler Sportvereine",
      description: "Trikot- oder Bandenwerbung bei lokalen Vereinen mit Link auf deren Website.",
      difficulty: "mittel",
      impact: "mittel",
      template: "Sehr geehrter [Vereinsname], als lokaler Handwerksbetrieb möchten wir die Jugendarbeit unterstützen...",
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      title: "Bauprojekt-Dokumentation",
      description: "Dokumentiere interessante Projekte und biete Architekten/Bauherren Gastartikel an.",
      difficulty: "mittel",
      impact: "hoch",
      icon: <Building2 className="w-4 h-4" />,
    },
    {
      title: "Lehrstellen-Portal",
      description: "Trage dich in Lehrstellen-Portale ein - oft mit dofollow Links.",
      difficulty: "leicht",
      impact: "mittel",
      icon: <Users className="w-4 h-4" />,
    },
  ],
  arzt: [
    {
      title: "Fachzeitschriften-Beiträge",
      description: "Schreibe Fachartikel für medizinische Online-Portale.",
      difficulty: "schwer",
      impact: "hoch",
      icon: <Newspaper className="w-4 h-4" />,
    },
    {
      title: "Patientenratgeber für Lokalzeitung",
      description: "Biete regelmäßige Gesundheits-Kolumnen für die Lokalzeitung an.",
      difficulty: "mittel",
      impact: "hoch",
      template: "Sehr geehrte Redaktion, als niedergelassener [Facharzt] biete ich eine regelmäßige Gesundheitskolumne an...",
      icon: <Newspaper className="w-4 h-4" />,
    },
    {
      title: "Kooperation mit Apotheken",
      description: "Verlinke auf Apotheken-Websites und bitte um Gegenlinks.",
      difficulty: "leicht",
      impact: "mittel",
      icon: <Building2 className="w-4 h-4" />,
    },
    {
      title: "Selbsthilfegruppen unterstützen",
      description: "Unterstütze lokale Selbsthilfegruppen als Experte.",
      difficulty: "mittel",
      impact: "mittel",
      icon: <Heart className="w-4 h-4" />,
    },
  ],
  default: [
    {
      title: "Lokale Verzeichnisse",
      description: "Trage dein Unternehmen in alle relevanten lokalen Branchenverzeichnisse ein.",
      difficulty: "leicht",
      impact: "mittel",
      icon: <MapPin className="w-4 h-4" />,
    },
    {
      title: "Pressemitteilung zu Neueröffnung/Jubiläum",
      description: "Nutze besondere Anlässe für Pressemitteilungen an lokale Medien.",
      difficulty: "mittel",
      impact: "hoch",
      template: "PRESSEMITTEILUNG: [Firmenname] feiert [Anlass] und lädt alle [Stadt]-Bewohner ein...",
      icon: <Newspaper className="w-4 h-4" />,
    },
    {
      title: "IHK-Mitgliedschaft nutzen",
      description: "Vervollständige dein IHK-Profil mit Link zur Website.",
      difficulty: "leicht",
      impact: "mittel",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      title: "Sponsoring lokaler Events",
      description: "Sponsore Stadtfeste, Märkte oder kulturelle Veranstaltungen.",
      difficulty: "mittel",
      impact: "hoch",
      icon: <Trophy className="w-4 h-4" />,
    },
  ],
};

const LinkBuildingIdeaGenerator = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [city, setCity] = useState("");
  const [generatedIdeas, setGeneratedIdeas] = useState<LinkIdea[]>([]);
  const [selectedIdea, setSelectedIdea] = useState<LinkIdea | null>(null);

  const generateIdeas = () => {
    const industryIdeas = ideaTemplates[selectedIndustry] || [];
    const defaultIdeas = ideaTemplates.default;
    
    // Combine industry-specific and default ideas
    const allIdeas = [...industryIdeas, ...defaultIdeas];
    
    // Personalize with city if provided
    const personalizedIdeas = allIdeas.map(idea => ({
      ...idea,
      description: city 
        ? idea.description.replace(/lokale/gi, `${city}er`).replace(/lokal/gi, city)
        : idea.description,
      template: idea.template 
        ? idea.template.replace(/\[Stadt\]/g, city || "[Stadt]")
        : undefined,
    }));

    setGeneratedIdeas(personalizedIdeas);
    setSelectedIdea(null);
  };

  const getDifficultyColor = (difficulty: LinkIdea["difficulty"]) => {
    switch (difficulty) {
      case "leicht": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "mittel": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "schwer": return "bg-red-500/10 text-red-600 border-red-500/20";
    }
  };

  const getImpactColor = (impact: LinkIdea["impact"]) => {
    switch (impact) {
      case "hoch": return "bg-primary/10 text-primary border-primary/20";
      case "mittel": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "niedrig": return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  return (
    <Card className="my-8 border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-primary" />
          Link-Building Ideen Generator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Erhalte maßgeschneiderte Ideen für lokale Backlinks basierend auf deiner Branche und Stadt.
        </p>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <Label>Branche auswählen</Label>
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger>
                <SelectValue placeholder="Wähle deine Branche" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(industries).map(([key, label]) => (
                  <SelectItem key={key} value={key}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="city">Stadt (optional)</Label>
            <Input
              id="city"
              placeholder="z.B. München"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex items-end">
            <Button 
              onClick={generateIdeas} 
              className="w-full"
              disabled={!selectedIndustry}
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Ideen generieren
            </Button>
          </div>
        </div>

        {generatedIdeas.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Generierte Ideen ({generatedIdeas.length})</h4>
              {generatedIdeas.map((idea, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIdea(idea)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedIdea === idea 
                      ? "border-primary bg-primary/5" 
                      : "hover:bg-muted"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {idea.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{idea.title}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={getDifficultyColor(idea.difficulty)} variant="outline">
                          {idea.difficulty}
                        </Badge>
                        <Badge className={getImpactColor(idea.impact)} variant="outline">
                          Impact: {idea.impact}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div>
              {selectedIdea ? (
                <div className="p-6 rounded-lg bg-muted space-y-4 sticky top-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {selectedIdea.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{selectedIdea.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={getDifficultyColor(selectedIdea.difficulty)} variant="outline">
                          Aufwand: {selectedIdea.difficulty}
                        </Badge>
                        <Badge className={getImpactColor(selectedIdea.impact)} variant="outline">
                          Impact: {selectedIdea.impact}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground">{selectedIdea.description}</p>

                  {selectedIdea.template && (
                    <div className="space-y-2">
                      <h5 className="font-medium flex items-center gap-2">
                        <Link2 className="w-4 h-4" />
                        Beispiel-Vorlage
                      </h5>
                      <div className="p-4 bg-background rounded border text-sm">
                        {selectedIdea.template}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => navigator.clipboard.writeText(selectedIdea.template || "")}
                      >
                        Vorlage kopieren
                      </Button>
                    </div>
                  )}

                  <div className="pt-4 border-t">
                    <h5 className="font-medium mb-2">Nächste Schritte:</h5>
                    <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                      <li>Recherchiere relevante Kontakte in {city || "deiner Stadt"}</li>
                      <li>Personalisiere die Vorlage für jeden Empfänger</li>
                      <li>Sende die erste Anfrage und tracke die Ergebnisse</li>
                      <li>Follow-up nach 1 Woche, falls keine Antwort</li>
                    </ol>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-center p-8 bg-muted/50 rounded-lg">
                  <div>
                    <Link2 className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">
                      Klicke auf eine Idee, um Details und Vorlagen zu sehen
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LinkBuildingIdeaGenerator;
