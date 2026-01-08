import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Smartphone, Gauge, AlertTriangle, CheckCircle, Clock, Image, Code, Zap } from "lucide-react";

interface SpeedResult {
  score: number;
  grade: "A" | "B" | "C" | "D" | "F";
  issues: string[];
  recommendations: string[];
}

const MobileSpeedCalculator = () => {
  const [formData, setFormData] = useState({
    pageSize: "",
    imageCount: "",
    jsFiles: "",
    cssFiles: "",
    serverResponse: "",
    hasCompression: true,
    hasCaching: true,
    hasLazyLoad: false,
    hasCDN: false,
  });
  const [result, setResult] = useState<SpeedResult | null>(null);

  const calculateScore = () => {
    const pageSize = parseFloat(formData.pageSize) || 3;
    const imageCount = parseInt(formData.imageCount) || 15;
    const jsFiles = parseInt(formData.jsFiles) || 8;
    const cssFiles = parseInt(formData.cssFiles) || 4;
    const serverResponse = parseInt(formData.serverResponse) || 500;

    let score = 100;
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Page Size Analysis
    if (pageSize > 5) {
      score -= 25;
      issues.push(`Seitengröße zu groß: ${pageSize}MB (max. 3MB empfohlen)`);
      recommendations.push("Bilder komprimieren und in WebP konvertieren");
    } else if (pageSize > 3) {
      score -= 15;
      issues.push(`Seitengröße grenzwertig: ${pageSize}MB`);
      recommendations.push("Ungenutzte CSS/JS entfernen");
    }

    // Image Count
    if (imageCount > 20) {
      score -= 15;
      issues.push(`Zu viele Bilder: ${imageCount} (max. 15 empfohlen)`);
      recommendations.push("Lazy Loading für Bilder unter dem Fold implementieren");
    } else if (imageCount > 10) {
      score -= 5;
    }

    // JS Files
    if (jsFiles > 10) {
      score -= 20;
      issues.push(`Zu viele JavaScript-Dateien: ${jsFiles}`);
      recommendations.push("JavaScript bundlen und minifizieren");
    } else if (jsFiles > 5) {
      score -= 10;
    }

    // CSS Files
    if (cssFiles > 5) {
      score -= 10;
      issues.push(`Zu viele CSS-Dateien: ${cssFiles}`);
      recommendations.push("CSS zusammenfassen und Critical CSS inline laden");
    }

    // Server Response
    if (serverResponse > 800) {
      score -= 20;
      issues.push(`Server-Antwortzeit zu langsam: ${serverResponse}ms`);
      recommendations.push("Server-Caching aktivieren oder CDN nutzen");
    } else if (serverResponse > 400) {
      score -= 10;
    }

    // Bonus points for optimizations
    if (!formData.hasCompression) {
      score -= 15;
      issues.push("Gzip/Brotli Komprimierung nicht aktiv");
      recommendations.push("Komprimierung auf dem Server aktivieren");
    }

    if (!formData.hasCaching) {
      score -= 10;
      issues.push("Browser-Caching nicht konfiguriert");
      recommendations.push("Cache-Control Header für statische Ressourcen setzen");
    }

    if (formData.hasLazyLoad) {
      score += 5;
    } else {
      recommendations.push("Lazy Loading für Bilder implementieren");
    }

    if (formData.hasCDN) {
      score += 5;
    } else if (pageSize > 2) {
      recommendations.push("CDN für schnellere Auslieferung nutzen");
    }

    score = Math.max(0, Math.min(100, score));

    let grade: SpeedResult["grade"];
    if (score >= 90) grade = "A";
    else if (score >= 75) grade = "B";
    else if (score >= 60) grade = "C";
    else if (score >= 40) grade = "D";
    else grade = "F";

    setResult({ score, grade, issues, recommendations });
  };

  const getGradeColor = (grade: SpeedResult["grade"]) => {
    switch (grade) {
      case "A": return "text-green-500";
      case "B": return "text-lime-500";
      case "C": return "text-yellow-500";
      case "D": return "text-orange-500";
      case "F": return "text-red-500";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 75) return "bg-lime-500";
    if (score >= 60) return "bg-yellow-500";
    if (score >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <Card className="my-8 border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
        <CardTitle className="flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-primary" />
          Mobile Speed Score Calculator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Analysiere die Performance deiner mobilen Website und erhalte konkrete Optimierungsvorschläge.
        </p>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <Gauge className="w-4 h-4" />
              Technische Daten
            </h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="pageSize">Seitengröße (MB)</Label>
                <Input
                  id="pageSize"
                  type="number"
                  step="0.1"
                  placeholder="z.B. 2.5"
                  value={formData.pageSize}
                  onChange={(e) => setFormData(prev => ({ ...prev, pageSize: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="imageCount">Anzahl Bilder</Label>
                <Input
                  id="imageCount"
                  type="number"
                  placeholder="z.B. 12"
                  value={formData.imageCount}
                  onChange={(e) => setFormData(prev => ({ ...prev, imageCount: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="jsFiles">JavaScript-Dateien</Label>
                <Input
                  id="jsFiles"
                  type="number"
                  placeholder="z.B. 5"
                  value={formData.jsFiles}
                  onChange={(e) => setFormData(prev => ({ ...prev, jsFiles: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="cssFiles">CSS-Dateien</Label>
                <Input
                  id="cssFiles"
                  type="number"
                  placeholder="z.B. 3"
                  value={formData.cssFiles}
                  onChange={(e) => setFormData(prev => ({ ...prev, cssFiles: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="serverResponse">Server-Antwortzeit (ms)</Label>
              <Input
                id="serverResponse"
                type="number"
                placeholder="z.B. 350"
                value={formData.serverResponse}
                onChange={(e) => setFormData(prev => ({ ...prev, serverResponse: e.target.value }))}
              />
            </div>

            <h4 className="font-semibold flex items-center gap-2 pt-2">
              <Zap className="w-4 h-4" />
              Optimierungen
            </h4>

            <div className="space-y-2">
              {[
                { key: "hasCompression", label: "Gzip/Brotli Komprimierung" },
                { key: "hasCaching", label: "Browser-Caching" },
                { key: "hasLazyLoad", label: "Lazy Loading für Bilder" },
                { key: "hasCDN", label: "CDN im Einsatz" },
              ].map(({ key, label }) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData[key as keyof typeof formData] as boolean}
                    onChange={(e) => setFormData(prev => ({ ...prev, [key]: e.target.checked }))}
                    className="rounded border-input"
                  />
                  <span className="text-sm">{label}</span>
                </label>
              ))}
            </div>

            <Button onClick={calculateScore} className="w-full">
              <Gauge className="w-4 h-4 mr-2" />
              Score berechnen
            </Button>
          </div>

          {/* Results Section */}
          <div>
            {result ? (
              <div className="space-y-4">
                <div className="text-center p-6 rounded-lg bg-muted">
                  <div className={`text-6xl font-bold ${getGradeColor(result.grade)}`}>
                    {result.grade}
                  </div>
                  <div className="text-3xl font-semibold mt-2">{result.score}/100</div>
                  <Progress 
                    value={result.score} 
                    className="mt-4 h-3"
                  />
                </div>

                {result.issues.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2 text-red-600">
                      <AlertTriangle className="w-4 h-4" />
                      Probleme gefunden
                    </h4>
                    <ul className="space-y-1">
                      {result.issues.map((issue, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.recommendations.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      Empfehlungen
                    </h4>
                    <ul className="space-y-1">
                      {result.recommendations.map((rec, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm">
                    <strong>Tipp:</strong> Für genaue Werte nutze PageSpeed Insights oder GTmetrix 
                    und trage die Ergebnisse hier ein.
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center p-8 bg-muted/50 rounded-lg">
                <div>
                  <Smartphone className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Gib die technischen Daten deiner Website ein und klicke auf "Score berechnen"
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MobileSpeedCalculator;
