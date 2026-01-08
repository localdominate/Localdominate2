import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Eye, Mail, Building2, Phone, Globe, CreditCard, FileText } from "lucide-react";
import { format } from "date-fns";
import { de } from "date-fns/locale";

interface Customer {
  id: string;
  business_name: string | null;
  email: string | null;
  phone: string | null;
  website: string | null;
  address: string | null;
  business_category: string | null;
  payment_status: string | null;
  payment_amount: number | null;
  payment_completed_at: string | null;
  questionnaire_completed: boolean | null;
  created_at: string;
}

interface QuestionnaireResponse {
  step_key: string;
  response_data: unknown;
}

const categoryLabels: Record<string, string> = {
  restaurant: "Restaurant",
  handwerker: "Handwerker",
  arzt: "Arzt/Praxis",
  anwalt: "Anwalt/Kanzlei",
  friseur: "Friseur/Beauty",
  fitness: "Fitness",
  hotel: "Hotel",
  other: "Sonstiges",
};

export const CustomerTable = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [questionnaireData, setQuestionnaireData] = useState<QuestionnaireResponse[]>([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("customers")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setCustomers(data);
    }
    setLoading(false);
  };

  const fetchQuestionnaireData = async (customerId: string) => {
    const { data } = await supabase
      .from("questionnaire_responses")
      .select("*")
      .eq("customer_id", customerId)
      .order("created_at", { ascending: true });

    if (data) {
      setQuestionnaireData(data);
    }
  };

  const handleViewDetails = async (customer: Customer) => {
    setSelectedCustomer(customer);
    await fetchQuestionnaireData(customer.id);
  };

  const filteredCustomers = customers.filter(
    (c) =>
      c.business_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.business_category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPaymentBadge = (status: string | null) => {
    if (status === "paid") {
      return <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Bezahlt</Badge>;
    }
    return <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">Ausstehend</Badge>;
  };

  const formatStepKey = (key: string): string => {
    const labels: Record<string, string> = {
      gmb_status: "Google Business Status",
      gmb_verification: "Verifizierung",
      gmb_basic_info: "Grunddaten",
      gmb_categories: "Kategorien",
      gmb_description: "Beschreibung",
      gmb_photos: "Fotos",
      gmb_services: "Leistungen",
      gmb_attributes: "Attribute",
      gmb_posts: "Beiträge",
      gmb_qa: "Fragen & Antworten",
      gmb_reviews: "Bewertungen",
    };
    return labels[key] || key;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Kunden ({customers.length})
          </CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Unternehmen</th>
                  <th className="text-left py-3 px-4 font-medium">Branche</th>
                  <th className="text-left py-3 px-4 font-medium">Kontakt</th>
                  <th className="text-left py-3 px-4 font-medium">Zahlung</th>
                  <th className="text-left py-3 px-4 font-medium">Fragebogen</th>
                  <th className="text-left py-3 px-4 font-medium">Datum</th>
                  <th className="text-right py-3 px-4 font-medium">Aktionen</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">
                      <div className="font-medium">{customer.business_name || "—"}</div>
                      {customer.address && (
                        <div className="text-xs text-muted-foreground">{customer.address}</div>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline">
                        {customer.business_category
                          ? categoryLabels[customer.business_category] || customer.business_category
                          : "—"}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm">{customer.email || "—"}</div>
                      {customer.phone && (
                        <div className="text-xs text-muted-foreground">{customer.phone}</div>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        {getPaymentBadge(customer.payment_status)}
                        {customer.payment_amount && (
                          <span className="text-sm font-medium">€{customer.payment_amount}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      {customer.questionnaire_completed ? (
                        <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                          Abgeschlossen
                        </Badge>
                      ) : (
                        <Badge className="bg-gray-500/10 text-gray-600 border-gray-500/20">
                          Offen
                        </Badge>
                      )}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground text-sm">
                      {format(new Date(customer.created_at), "dd.MM.yyyy", { locale: de })}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewDetails(customer)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              <Building2 className="w-5 h-5" />
                              {selectedCustomer?.business_name || "Kunde"}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            {/* Contact Info */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                <span>{selectedCustomer?.email || "—"}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-muted-foreground" />
                                <span>{selectedCustomer?.phone || "—"}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-muted-foreground" />
                                <span>{selectedCustomer?.website || "—"}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CreditCard className="w-4 h-4 text-muted-foreground" />
                                <span>
                                  {selectedCustomer?.payment_amount
                                    ? `€${selectedCustomer.payment_amount}`
                                    : "—"}
                                </span>
                              </div>
                            </div>

                            {/* Questionnaire Responses */}
                            <div>
                              <h3 className="font-semibold mb-3 flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                Fragebogen-Antworten
                              </h3>
                              {questionnaireData.length > 0 ? (
                                <div className="space-y-4">
                                  {questionnaireData.map((response) => (
                                    <div
                                      key={response.step_key}
                                      className="p-3 rounded-lg bg-muted/50"
                                    >
                                      <h4 className="font-medium text-sm mb-2">
                                        {formatStepKey(response.step_key)}
                                      </h4>
                                      <div className="text-sm text-muted-foreground">
                                        <pre className="whitespace-pre-wrap font-sans">
                                          {JSON.stringify(response.response_data, null, 2)}
                                        </pre>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <p className="text-muted-foreground text-sm">
                                  Keine Antworten vorhanden
                                </p>
                              )}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredCustomers.length === 0 && (
              <p className="text-center text-muted-foreground py-8">Keine Kunden gefunden</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
