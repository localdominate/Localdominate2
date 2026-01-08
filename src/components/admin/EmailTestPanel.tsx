import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Send, CheckCircle2, XCircle, Clock, AlertTriangle } from "lucide-react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";

interface Customer {
  id: string;
  business_name: string | null;
  email: string | null;
}

interface EmailLog {
  type: string;
  recipient: string;
  status: "success" | "error" | "pending";
  message?: string;
  timestamp: Date;
}

export const EmailTestPanel = () => {
  const { toast } = useToast();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<string>("");
  const [recipientEmail, setRecipientEmail] = useState("markuswimboeck@googlemail.com");
  const [sending, setSending] = useState<string | null>(null);
  const [emailLogs, setEmailLogs] = useState<EmailLog[]>([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const { data } = await supabase
      .from("customers")
      .select("id, business_name, email")
      .order("created_at", { ascending: false });

    if (data) {
      setCustomers(data);
      if (data.length > 0) {
        setSelectedCustomer(data[0].id);
      }
    }
  };

  const addLog = (log: Omit<EmailLog, "timestamp">) => {
    setEmailLogs((prev) => [{ ...log, timestamp: new Date() }, ...prev.slice(0, 9)]);
  };

  const sendQuestionnaireEmail = async () => {
    if (!selectedCustomer) {
      toast({ title: "Bitte wähle einen Kunden aus", variant: "destructive" });
      return;
    }

    setSending("questionnaire");
    addLog({ type: "Fragebogen", recipient: recipientEmail, status: "pending" });

    try {
      const { data, error } = await supabase.functions.invoke("send-questionnaire-email", {
        body: { customerId: selectedCustomer, recipientEmail },
      });

      if (error) throw error;

      addLog({ type: "Fragebogen", recipient: recipientEmail, status: "success" });
      toast({ title: "Fragebogen-E-Mail gesendet!" });
    } catch (error: any) {
      addLog({
        type: "Fragebogen",
        recipient: recipientEmail,
        status: "error",
        message: error.message,
      });
      toast({ title: "Fehler beim Senden", description: error.message, variant: "destructive" });
    } finally {
      setSending(null);
    }
  };

  const sendNewCustomerEmail = async () => {
    if (!selectedCustomer) {
      toast({ title: "Bitte wähle einen Kunden aus", variant: "destructive" });
      return;
    }

    setSending("customer");
    addLog({ type: "Neuer Kunde", recipient: recipientEmail, status: "pending" });

    try {
      const { data, error } = await supabase.functions.invoke("send-new-customer-notification", {
        body: { customerId: selectedCustomer, recipientEmail },
      });

      if (error) throw error;

      addLog({ type: "Neuer Kunde", recipient: recipientEmail, status: "success" });
      toast({ title: "Kunden-Benachrichtigung gesendet!" });
    } catch (error: any) {
      addLog({
        type: "Neuer Kunde",
        recipient: recipientEmail,
        status: "error",
        message: error.message,
      });
      toast({ title: "Fehler beim Senden", description: error.message, variant: "destructive" });
    } finally {
      setSending(null);
    }
  };

  const sendDailyReport = async () => {
    setSending("report");
    addLog({ type: "Täglicher Report", recipient: "markuswimboeck@googlemail.com", status: "pending" });

    try {
      const { data, error } = await supabase.functions.invoke("send-daily-analytics-report", {
        body: {},
      });

      if (error) throw error;

      addLog({ type: "Täglicher Report", recipient: "markuswimboeck@googlemail.com", status: "success" });
      toast({ title: "Täglicher Report gesendet!" });
    } catch (error: any) {
      addLog({
        type: "Täglicher Report",
        recipient: "markuswimboeck@googlemail.com",
        status: "error",
        message: error.message,
      });
      toast({ title: "Fehler beim Senden", description: error.message, variant: "destructive" });
    } finally {
      setSending(null);
    }
  };

  const getStatusBadge = (status: EmailLog["status"]) => {
    switch (status) {
      case "success":
        return (
          <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Gesendet
          </Badge>
        );
      case "error":
        return (
          <Badge className="bg-red-500/10 text-red-600 border-red-500/20">
            <XCircle className="w-3 h-3 mr-1" />
            Fehler
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
            <Clock className="w-3 h-3 mr-1" />
            Wird gesendet...
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Warning */}
      <Card className="border-yellow-500/50 bg-yellow-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-700 dark:text-yellow-500">Domain-Verifizierung erforderlich</h4>
              <p className="text-sm text-yellow-600/80 dark:text-yellow-500/80 mt-1">
                E-Mails können nur an <strong>markuswimboeck@googlemail.com</strong> gesendet werden.
                Um E-Mails an andere Empfänger zu senden, muss eine Domain bei{" "}
                <a
                  href="https://resend.com/domains"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  resend.com/domains
                </a>{" "}
                verifiziert werden.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Email Test Panel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            E-Mail Test-Panel
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Settings */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Test-Kunde</Label>
              <Select value={selectedCustomer} onValueChange={setSelectedCustomer}>
                <SelectTrigger>
                  <SelectValue placeholder="Kunde auswählen..." />
                </SelectTrigger>
                <SelectContent>
                  {customers.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.business_name || c.email || c.id.slice(0, 8)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Empfänger-E-Mail</Label>
              <Input
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                placeholder="E-Mail-Adresse"
              />
            </div>
          </div>

          {/* Email Buttons */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-2">
              <CardContent className="pt-6">
                <h4 className="font-medium mb-2">📋 Fragebogen-Zusammenfassung</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Sendet alle Fragebogen-Antworten des ausgewählten Kunden.
                </p>
                <Button
                  onClick={sendQuestionnaireEmail}
                  disabled={sending !== null}
                  className="w-full"
                >
                  {sending === "questionnaire" ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  Test senden
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <h4 className="font-medium mb-2">👤 Neuer Kunde Benachrichtigung</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Benachrichtigung über Zahlungseingang eines neuen Kunden.
                </p>
                <Button
                  onClick={sendNewCustomerEmail}
                  disabled={sending !== null}
                  className="w-full"
                >
                  {sending === "customer" ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  Test senden
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <h4 className="font-medium mb-2">📊 Täglicher Analytics Report</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  A/B Test Analyse, Sessions & Conversions der letzten 24h.
                </p>
                <Button
                  onClick={sendDailyReport}
                  disabled={sending !== null}
                  className="w-full"
                >
                  {sending === "report" ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  Test senden
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Email Logs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sende-Log</CardTitle>
        </CardHeader>
        <CardContent>
          {emailLogs.length > 0 ? (
            <div className="space-y-3">
              {emailLogs.map((log, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{log.type}</p>
                    <p className="text-sm text-muted-foreground">{log.recipient}</p>
                    {log.message && (
                      <p className="text-xs text-red-500 mt-1">{log.message}</p>
                    )}
                  </div>
                  <div className="text-right">
                    {getStatusBadge(log.status)}
                    <p className="text-xs text-muted-foreground mt-1">
                      {format(log.timestamp, "HH:mm:ss", { locale: de })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              Noch keine E-Mails gesendet. Klicke auf einen der Test-Buttons oben.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
