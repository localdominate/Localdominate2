import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw, Users, Download } from "lucide-react";
import { CustomerTable } from "@/components/admin/CustomerTable";
import SEOHead from "@/components/SEOHead";

export default function MeineKunden() {
  const exportCustomers = () => {
    // Will be implemented with actual data export
    console.log("Export customers...");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Meine Kunden - Local Dominator"
        description="Interne Kundenverwaltung"
        noindex={true}
      />
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/admin/content-plan" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück zum Dashboard</span>
            </Link>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Meine Kunden
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Aktualisieren
            </Button>
            <Button variant="outline" size="sm" onClick={exportCustomers}>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Kundenliste mit Fragebogen-Antworten
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CustomerTable />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
