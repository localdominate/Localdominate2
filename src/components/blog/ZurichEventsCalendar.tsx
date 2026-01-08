import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, TrendingUp, Clock, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ZurichEvent {
  id: string;
  name: string;
  month: string;
  period: string;
  visitors: string;
  description: string;
  potential: "hoch" | "mittel" | "niedrig";
  keywords: string[];
  seoStrategy: string[];
  preparationWeeks: number;
}

const events: ZurichEvent[] = [
  {
    id: "sechselaeuten",
    name: "Sechseläuten",
    month: "April",
    period: "3. Montag im April",
    visitors: "100'000+",
    description: "Traditionelles Zürcher Frühlingsfest mit dem Verbrennen des Böögg. Wichtigstes Brauchtumsfest der Stadt.",
    potential: "hoch",
    keywords: ["Sechseläuten Zürich", "Böögg", "Zunftumzug", "Frühlingsfest Zürich"],
    seoStrategy: [
      "Content 3-4 Wochen vorher veröffentlichen",
      "Historische und traditionelle Begriffe nutzen",
      "Spezialangebote für Zunftmitglieder und Gäste",
      "Öffnungszeiten auf Google Business anpassen"
    ],
    preparationWeeks: 4
  },
  {
    id: "streetparade",
    name: "Street Parade",
    month: "August",
    period: "2. Samstag im August",
    visitors: "1'000'000+",
    description: "Grösste Techno-Parade der Welt. Internationales Publikum, massive Suchvolumen-Spikes.",
    potential: "hoch",
    keywords: ["Street Parade Zürich", "Techno Zürich", "Party Zürich August", "Lovemobiles"],
    seoStrategy: [
      "Internationale Keywords (EN) einbauen",
      "Frühzeitig ranken – Wettbewerb ist hoch",
      "Spezielle Landing Pages für das Event",
      "After-Party und Afterhour Keywords nutzen"
    ],
    preparationWeeks: 6
  },
  {
    id: "zuerifaescht",
    name: "Züri Fäscht",
    month: "Juli",
    period: "Alle 3 Jahre (nächstes: 2025)",
    visitors: "2'000'000+",
    description: "Grösstes Volksfest der Schweiz am Zürichsee. Feuerwerk, Konzerte, Stände.",
    potential: "hoch",
    keywords: ["Züri Fäscht", "Zürifest", "Volksfest Zürich", "Feuerwerk Zürichsee"],
    seoStrategy: [
      "Schreibweisen beachten: Züri Fäscht, Zürifest, Zürich Fest",
      "Event-spezifische Landingpages erstellen",
      "Früh starten – nur alle 3 Jahre",
      "Standort-Nähe in Google Business betonen"
    ],
    preparationWeeks: 8
  },
  {
    id: "weihnachtsmaerkte",
    name: "Weihnachtsmärkte",
    month: "Nov–Dez",
    period: "Mitte November bis 24. Dezember",
    visitors: "500'000+",
    description: "Christkindlimarkt im Hauptbahnhof, Wienachtsdorf am Bellevue, Sternschnuppenmarkt.",
    potential: "hoch",
    keywords: ["Weihnachtsmarkt Zürich", "Christkindlimarkt HB", "Wienachtsdorf Bellevue", "Glühwein Zürich"],
    seoStrategy: [
      "Ab September mit Content starten",
      "Lokale Markt-Namen kennen und nutzen",
      "Geschenkideen und Kulinarik-Keywords",
      "Google Posts während der Saison intensiv nutzen"
    ],
    preparationWeeks: 8
  },
  {
    id: "knabenschiessen",
    name: "Knabenschiessen",
    month: "September",
    period: "2. Wochenende im September",
    visitors: "150'000+",
    description: "Traditionelles Schützenfest mit grosser Chilbi (Jahrmarkt) in Albisgütli.",
    potential: "mittel",
    keywords: ["Knabenschiessen Zürich", "Chilbi Zürich", "Albisgütli", "Schützenkönig"],
    seoStrategy: [
      "Familien-Keywords einbauen",
      "Chilbi und Jahrmarkt-Begriffe nutzen",
      "Lokale Tradition betonen",
      "Anfahrt und Parkmöglichkeiten thematisieren"
    ],
    preparationWeeks: 3
  },
  {
    id: "filmfestival",
    name: "Zurich Film Festival",
    month: "September",
    period: "Ende September / Anfang Oktober",
    visitors: "120'000+",
    description: "Internationales Filmfestival mit Prominenz auf dem grünen Teppich.",
    potential: "mittel",
    keywords: ["Zurich Film Festival", "ZFF", "Kino Zürich", "Film Premiere Zürich"],
    seoStrategy: [
      "Englische Keywords sind wichtig",
      "Premium-Gastronomie-Keywords nutzen",
      "Promi-Events und VIP-Begriffe",
      "Kulturelle Positionierung stärken"
    ],
    preparationWeeks: 4
  },
  {
    id: "badi-saison",
    name: "Badi-Saison",
    month: "Mai–Sep",
    period: "Mitte Mai bis Mitte September",
    visitors: "Täglich tausende",
    description: "Zürcher Badeanstalten (Badis) am See und an der Limmat sind Kult.",
    potential: "hoch",
    keywords: ["Badi Zürich", "Strandbad Tiefenbrunnen", "Seebad Enge", "Freibad Zürich", "Schwimmen Zürichsee"],
    seoStrategy: [
      "Lokale Badi-Namen sind Key-Keywords",
      "Sommer-Aktivitäten und Wellness-Keywords",
      "Ab April mit Content starten",
      "Wetter-abhängige Suchanfragen nutzen"
    ],
    preparationWeeks: 4
  },
  {
    id: "silvesterzauber",
    name: "Silvesterzauber",
    month: "Dezember",
    period: "31. Dezember",
    visitors: "200'000+",
    description: "Silvesterfeier am See mit Feuerwerk über dem Zürichsee.",
    potential: "mittel",
    keywords: ["Silvester Zürich", "Neujahr Zürich", "Feuerwerk Zürichsee", "Silvesterparty Zürich"],
    seoStrategy: [
      "Reservierungen und Spezialmenüs bewerben",
      "Feuerwerk-Aussichtspunkte thematisieren",
      "Party und Ausgeh-Keywords",
      "Früh starten – hoher Wettbewerb"
    ],
    preparationWeeks: 6
  }
];

const potentialColors = {
  hoch: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  mittel: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  niedrig: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
};

const ZurichEventsCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState<ZurichEvent | null>(null);

  return (
    <div className="my-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {events.map((event) => (
          <motion.button
            key={event.id}
            onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
            className={`p-3 rounded-lg border-2 transition-all text-left ${
              selectedEvent?.id === event.id
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50 bg-card"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">{event.month}</span>
            </div>
            <h4 className="font-medium text-sm leading-tight">{event.name}</h4>
            <div className="flex items-center gap-1 mt-2">
              <Users className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{event.visitors}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedEvent && (
          <motion.div
            key={selectedEvent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-primary/20">
              <CardContent className="pt-6 space-y-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{selectedEvent.name}</h3>
                    <p className="text-muted-foreground text-sm">{selectedEvent.period}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={potentialColors[selectedEvent.potential]}>
                      <Star className="h-3 w-3 mr-1" />
                      SEO-Potenzial: {selectedEvent.potential}
                    </Badge>
                    <Badge variant="outline">
                      <Users className="h-3 w-3 mr-1" />
                      {selectedEvent.visitors} Besucher
                    </Badge>
                  </div>
                </div>

                <p className="text-muted-foreground">{selectedEvent.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Event-Keywords
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.keywords.map((keyword) => (
                        <Badge key={keyword} variant="secondary">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      Vorbereitung
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Starten Sie mit der SEO-Optimierung{" "}
                      <strong className="text-foreground">{selectedEvent.preparationWeeks} Wochen</strong> vor dem Event.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">📈 SEO-Strategie für {selectedEvent.name}</h4>
                  <ul className="space-y-2">
                    {selectedEvent.seoStrategy.map((strategy, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary font-bold">{index + 1}.</span>
                        <span>{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {!selectedEvent && (
        <p className="text-center text-muted-foreground text-sm">
          📅 Klicken Sie auf ein Event für die SEO-Strategie
        </p>
      )}
    </div>
  );
};

export default ZurichEventsCalendar;