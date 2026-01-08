import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Code, Copy, Check, Building2, Clock, MapPin, Phone, Globe } from "lucide-react";

const businessTypes = [
  { value: "Restaurant", label: "Restaurant" },
  { value: "LocalBusiness", label: "Lokales Unternehmen (Allgemein)" },
  { value: "Dentist", label: "Zahnarzt" },
  { value: "Physician", label: "Arzt / Praxis" },
  { value: "Attorney", label: "Anwalt / Kanzlei" },
  { value: "BeautySalon", label: "Friseursalon / Beauty" },
  { value: "HealthClub", label: "Fitnessstudio" },
  { value: "Plumber", label: "Klempner" },
  { value: "Electrician", label: "Elektriker" },
  { value: "HVACBusiness", label: "Heizung & Klima" },
  { value: "RealEstateAgent", label: "Immobilienmakler" },
  { value: "AutoRepair", label: "Autowerkstatt" },
  { value: "Bakery", label: "Bäckerei" },
  { value: "BarOrPub", label: "Bar / Kneipe" },
  { value: "CafeOrCoffeeShop", label: "Café" },
  { value: "Hotel", label: "Hotel" },
  { value: "Store", label: "Geschäft / Laden" },
];

const days = [
  { key: "Monday", label: "Montag" },
  { key: "Tuesday", label: "Dienstag" },
  { key: "Wednesday", label: "Mittwoch" },
  { key: "Thursday", label: "Donnerstag" },
  { key: "Friday", label: "Freitag" },
  { key: "Saturday", label: "Samstag" },
  { key: "Sunday", label: "Sonntag" },
];

const LocalBusinessSchemaGenerator = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    businessType: "Restaurant",
    name: "",
    description: "",
    url: "",
    logo: "",
    image: "",
    telephone: "",
    email: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    country: "DE",
    priceRange: "€€",
    openingHours: {} as Record<string, { open: string; close: string; closed: boolean }>,
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateOpeningHours = (day: string, field: "open" | "close" | "closed", value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      openingHours: {
        ...prev.openingHours,
        [day]: {
          ...prev.openingHours[day],
          [field]: value,
        },
      },
    }));
  };

  const generateSchema = () => {
    const openingHoursSpec = days
      .filter(day => !formData.openingHours[day.key]?.closed)
      .map(day => {
        const hours = formData.openingHours[day.key];
        if (!hours?.open || !hours?.close) return null;
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: day.key,
          opens: hours.open,
          closes: hours.close,
        };
      })
      .filter(Boolean);

    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": formData.businessType,
      name: formData.name || "[Firmenname]",
      description: formData.description || "[Beschreibung]",
      url: formData.url || "https://example.com",
      ...(formData.logo && { logo: formData.logo }),
      ...(formData.image && { image: formData.image }),
      telephone: formData.telephone || "+49 XXX XXXXXXX",
      ...(formData.email && { email: formData.email }),
      address: {
        "@type": "PostalAddress",
        streetAddress: formData.streetAddress || "[Straße Nr.]",
        addressLocality: formData.city || "[Stadt]",
        postalCode: formData.postalCode || "[PLZ]",
        addressCountry: formData.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "[LATITUDE]",
        longitude: "[LONGITUDE]",
      },
      priceRange: formData.priceRange,
      ...(openingHoursSpec.length > 0 && { openingHoursSpecification: openingHoursSpec }),
    };

    return JSON.stringify(schema, null, 2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateSchema());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="my-8 border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
        <CardTitle className="flex items-center gap-2">
          <Code className="w-5 h-5 text-primary" />
          LocalBusiness Schema Generator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Erstelle valides JSON-LD Schema Markup für dein lokales Unternehmen - einfach kopieren und in den &lt;head&gt; deiner Website einfügen.
        </p>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Unternehmensdaten
            </h4>

            <div>
              <Label>Unternehmenstyp</Label>
              <Select value={formData.businessType} onValueChange={(v) => updateField("businessType", v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Firmenname *</Label>
                <Input
                  id="name"
                  placeholder="Beispiel GmbH"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="telephone">Telefon *</Label>
                <Input
                  id="telephone"
                  placeholder="+49 89 123456"
                  value={formData.telephone}
                  onChange={(e) => updateField("telephone", e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Beschreibung</Label>
              <Textarea
                id="description"
                placeholder="Kurze Beschreibung deines Unternehmens..."
                value={formData.description}
                onChange={(e) => updateField("description", e.target.value)}
                rows={2}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="url">Website URL</Label>
                <Input
                  id="url"
                  placeholder="https://example.com"
                  value={formData.url}
                  onChange={(e) => updateField("url", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">E-Mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="info@example.com"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </div>
            </div>

            <h4 className="font-semibold flex items-center gap-2 pt-2">
              <MapPin className="w-4 h-4" />
              Adresse
            </h4>

            <div>
              <Label htmlFor="streetAddress">Straße & Hausnummer</Label>
              <Input
                id="streetAddress"
                placeholder="Musterstraße 123"
                value={formData.streetAddress}
                onChange={(e) => updateField("streetAddress", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="postalCode">PLZ</Label>
                <Input
                  id="postalCode"
                  placeholder="80331"
                  value={formData.postalCode}
                  onChange={(e) => updateField("postalCode", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="city">Stadt</Label>
                <Input
                  id="city"
                  placeholder="München"
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                />
              </div>
              <div>
                <Label>Land</Label>
                <Select value={formData.country} onValueChange={(v) => updateField("country", v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="DE">Deutschland</SelectItem>
                    <SelectItem value="AT">Österreich</SelectItem>
                    <SelectItem value="CH">Schweiz</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <h4 className="font-semibold flex items-center gap-2 pt-2">
              <Clock className="w-4 h-4" />
              Öffnungszeiten
            </h4>

            <div className="space-y-2">
              {days.map(day => (
                <div key={day.key} className="flex items-center gap-2">
                  <label className="flex items-center gap-2 w-24">
                    <input
                      type="checkbox"
                      checked={!formData.openingHours[day.key]?.closed}
                      onChange={(e) => updateOpeningHours(day.key, "closed", !e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">{day.label}</span>
                  </label>
                  {!formData.openingHours[day.key]?.closed && (
                    <>
                      <Input
                        type="time"
                        className="w-28"
                        value={formData.openingHours[day.key]?.open || "09:00"}
                        onChange={(e) => updateOpeningHours(day.key, "open", e.target.value)}
                      />
                      <span>-</span>
                      <Input
                        type="time"
                        className="w-28"
                        value={formData.openingHours[day.key]?.close || "18:00"}
                        onChange={(e) => updateOpeningHours(day.key, "close", e.target.value)}
                      />
                    </>
                  )}
                  {formData.openingHours[day.key]?.closed && (
                    <span className="text-sm text-muted-foreground">Geschlossen</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Generated Code */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold flex items-center gap-2">
                <Code className="w-4 h-4" />
                Generiertes Schema (JSON-LD)
              </h4>
              <Button onClick={copyToClipboard} size="sm" variant="outline">
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Kopiert!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Kopieren
                  </>
                )}
              </Button>
            </div>

            <div className="relative">
              <pre className="p-4 bg-muted rounded-lg text-xs overflow-auto max-h-[500px] font-mono">
                <code>{`<script type="application/ld+json">\n${generateSchema()}\n</script>`}</code>
              </pre>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg space-y-2">
              <h5 className="font-medium">So verwendest du das Schema:</h5>
              <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                <li>Kopiere den generierten Code</li>
                <li>Füge ihn in den <code className="bg-muted px-1 rounded">&lt;head&gt;</code> Bereich deiner Website ein</li>
                <li>Ersetze [LATITUDE] und [LONGITUDE] mit deinen Koordinaten</li>
                <li>Teste mit dem <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer" className="text-primary underline">Rich Results Test</a></li>
              </ol>
            </div>

            <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
              <p className="text-sm text-yellow-800">
                <strong>Tipp:</strong> Ergänze das Schema um Bewertungen (AggregateRating), 
                Bilder und weitere Details für noch bessere Rich Snippets in den Suchergebnissen.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocalBusinessSchemaGenerator;
