import { useState } from "react";
import { Play, Check, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { ABTestRecommendation } from "@/lib/abTestRecommendations";

interface TestIdeaCardProps {
  idea: ABTestRecommendation;
  existingTestIds: string[];
  testStatuses: Record<string, string>;
  onTestCreated: () => void;
  getPriorityColor: (priority: string) => string;
}

// Mapping from idea IDs to pre-configured test configurations
const ideaToTestConfig: Record<string, {
  test_id: string;
  name: string;
  description: string;
  variants: string[];
  config: Record<string, any>;
}> = {
  idea_headline: {
    test_id: 'headline_emotional_rational',
    name: 'Headline: Emotional vs. Rational',
    description: 'Testet emotionale gegen rationale Ansprache in der Hero-Section',
    variants: ['emotional', 'rational'],
    config: {
      component: 'HeroSection',
      type: 'headline',
      variants: {
        emotional: 'Schluss mit Unsichtbarkeit – Dein Business verdient mehr Kunden!',
        rational: 'Steigern Sie Ihre lokale Sichtbarkeit um durchschnittlich 340%'
      }
    }
  },
  idea_price: {
    test_id: 'price_display_variant',
    name: 'Preis-Darstellung',
    description: 'Verschiedene Preisdarstellungen testen: Einmalpreis, Tagespreis, Ersparnis',
    variants: ['einmalpreis', 'tagespreis', 'ersparnis'],
    config: {
      component: 'OfferSection',
      type: 'price',
      variants: {
        einmalpreis: '299€',
        tagespreis: 'unter 1€/Tag',
        ersparnis: 'spart 2.000€/Jahr'
      }
    }
  },
  idea_social_proof: {
    test_id: 'social_proof_position',
    name: 'Social Proof Position',
    description: 'Testet verschiedene Positionen für Trust-Elemente',
    variants: ['hero', 'after_pain', 'before_cta'],
    config: {
      component: 'TrustBadges',
      type: 'position',
      variants: {
        hero: 'In Hero-Section',
        after_pain: 'Nach Pain-Section',
        before_cta: 'Direkt vor CTA'
      }
    }
  },
  idea_urgency: {
    test_id: 'urgency_elements',
    name: 'Urgency-Elemente',
    description: 'Verschiedene Dringlichkeitselemente testen',
    variants: ['countdown', 'spots', 'keine'],
    config: {
      component: 'HeroSection',
      type: 'urgency',
      variants: {
        countdown: 'Countdown-Timer',
        spots: 'Nur noch X Plätze',
        keine: 'Keine Urgency'
      }
    }
  },
  idea_cta_text: {
    test_id: 'cta_text_variant',
    name: 'CTA-Text Varianten',
    description: 'Verschiedene CTA-Texte A/B testen',
    variants: ['jetzt_starten', 'kostenlos', 'sichern'],
    config: {
      component: 'AllCTAs',
      type: 'cta_text',
      variants: {
        jetzt_starten: 'Jetzt starten',
        kostenlos: 'Kostenlos testen',
        sichern: 'Platz sichern'
      }
    }
  },
  idea_exit_timing: {
    test_id: 'exit_intent_timing',
    name: 'Exit-Intent Timing',
    description: 'Wann soll das Exit-Intent Popup erscheinen?',
    variants: ['sofort', '30s', '50_scroll'],
    config: {
      component: 'ExitIntentPopup',
      type: 'timing',
      variants: {
        sofort: 'Bei erstem Exit-Intent',
        '30s': 'Nach 30 Sekunden',
        '50_scroll': 'Nach 50% Scroll'
      }
    }
  },
  idea_mobile_cta: {
    test_id: 'mobile_cta_style',
    name: 'Mobile Sticky CTA',
    description: 'Verschiedene Mobile CTA Styles testen',
    variants: ['footer', 'floating', 'minimal'],
    config: {
      component: 'MobileStickyBar',
      type: 'style',
      variants: {
        footer: 'Footer-Bar',
        floating: 'Floating Button',
        minimal: 'Nur im Content'
      }
    }
  },
  idea_form_length: {
    test_id: 'form_length_test',
    name: 'Formular-Länge',
    description: 'Kurzes vs. langes Formular testen',
    variants: ['kurz', 'lang'],
    config: {
      component: 'LeadForm',
      type: 'form_length',
      variants: {
        kurz: 'Nur E-Mail',
        lang: 'Vollständiges Formular'
      }
    }
  }
};

const TestIdeaCard = ({ idea, existingTestIds, testStatuses, onTestCreated, getPriorityColor }: TestIdeaCardProps) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isStarting, setIsStarting] = useState(false);

  const testConfig = ideaToTestConfig[idea.id];
  const testExists = testConfig && existingTestIds.includes(testConfig.test_id);
  const testStatus = testConfig ? testStatuses[testConfig.test_id] : undefined;

  const handleCreateTest = async () => {
    if (!testConfig) {
      toast.error('Keine Konfiguration für diesen Test verfügbar');
      return;
    }

    setIsCreating(true);

    const { error } = await supabase.from('ab_tests').insert({
      test_id: testConfig.test_id,
      name: testConfig.name,
      description: testConfig.description,
      variants: testConfig.variants,
      config: testConfig.config,
      status: 'paused',
      is_ready: true,
      target_sample_size: 1000
    });

    if (error) {
      if (error.code === '23505') {
        toast.info('Test existiert bereits');
      } else {
        toast.error('Fehler beim Erstellen des Tests');
      }
      setIsCreating(false);
      return;
    }

    toast.success('Test vorbereitet! Klicke auf "Starten" um den Test zu aktivieren.');
    setIsCreating(false);
    onTestCreated();
  };

  const handleStartTest = async () => {
    if (!testConfig) return;

    setIsStarting(true);

    const { error } = await supabase
      .from('ab_tests')
      .update({ 
        status: 'running',
        start_date: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .eq('test_id', testConfig.test_id);

    if (error) {
      toast.error('Fehler beim Starten des Tests');
      setIsStarting(false);
      return;
    }

    toast.success('Test gestartet!');
    setIsStarting(false);
    onTestCreated();
  };

  const getStatusBadge = () => {
    if (!testConfig) return null;
    
    if (!testExists) {
      return <Badge variant="outline" className="text-muted-foreground">Nicht erstellt</Badge>;
    }
    
    switch (testStatus) {
      case 'running':
        return <Badge className="bg-green-500">Aktiv</Badge>;
      case 'paused':
        return <Badge variant="secondary">Bereit</Badge>;
      case 'completed':
        return <Badge className="bg-blue-500">Abgeschlossen</Badge>;
      default:
        return <Badge variant="outline">{testStatus}</Badge>;
    }
  };

  return (
    <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${getPriorityColor(idea.priority)}`} />
          <h3 className="font-semibold">{idea.title}</h3>
        </div>
        {getStatusBadge()}
      </div>
      
      <p className="text-sm text-muted-foreground mb-3">{idea.description}</p>
      
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="text-xs">{idea.action}</Badge>
        
        <div className="ml-auto flex gap-2">
          {!testExists && testConfig && (
            <Button 
              size="sm" 
              variant="outline"
              onClick={handleCreateTest}
              disabled={isCreating}
            >
              {isCreating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <Clock className="h-4 w-4 mr-1" />
                  Vorbereiten
                </>
              )}
            </Button>
          )}
          
          {testExists && testStatus === 'paused' && (
            <Button 
              size="sm" 
              variant="default"
              onClick={handleStartTest}
              disabled={isStarting}
            >
              {isStarting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <Play className="h-4 w-4 mr-1" />
                  Starten
                </>
              )}
            </Button>
          )}
          
          {testExists && testStatus === 'running' && (
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <Check className="h-4 w-4" />
              Läuft
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestIdeaCard;
