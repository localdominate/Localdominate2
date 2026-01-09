import { Play, Pause, Trash2, Trophy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface TestControlButtonsProps {
  testId: string;
  status: string;
  winner: string | null;
  confidence: number;
  onUpdate: () => void;
}

const TestControlButtons = ({ testId, status, winner, confidence, onUpdate }: TestControlButtonsProps) => {
  const handleToggleStatus = async () => {
    const newStatus = status === 'running' ? 'paused' : 'running';
    
    const { error } = await supabase
      .from('ab_tests')
      .update({ 
        status: newStatus,
        updated_at: new Date().toISOString()
      })
      .eq('test_id', testId);

    if (error) {
      toast.error('Fehler beim Aktualisieren des Status');
      return;
    }

    toast.success(newStatus === 'running' ? 'Test gestartet!' : 'Test pausiert!');
    onUpdate();
  };

  const handleImplementWinner = async () => {
    if (!winner) return;

    const { error } = await supabase
      .from('ab_tests')
      .update({ 
        status: 'completed',
        winning_variant: winner,
        end_date: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .eq('test_id', testId);

    if (error) {
      toast.error('Fehler beim Abschließen des Tests');
      return;
    }

    toast.success(`Gewinner "${winner}" implementiert! Test abgeschlossen.`);
    onUpdate();
  };

  const handleDelete = async () => {
    if (!confirm('Test wirklich löschen? Alle zugehörigen Daten werden entfernt.')) return;

    // Delete views first
    await supabase
      .from('ab_test_views')
      .delete()
      .eq('test_id', testId);

    // Then delete test
    const { error } = await supabase
      .from('ab_tests')
      .delete()
      .eq('test_id', testId);

    if (error) {
      toast.error('Fehler beim Löschen des Tests');
      return;
    }

    toast.success('Test gelöscht!');
    onUpdate();
  };

  const handleReset = async () => {
    if (!confirm('Test-Daten zurücksetzen? Alle Views werden gelöscht.')) return;

    await supabase
      .from('ab_test_views')
      .delete()
      .eq('test_id', testId);

    const { error } = await supabase
      .from('ab_tests')
      .update({ 
        status: 'paused',
        winning_variant: null,
        start_date: new Date().toISOString(),
        end_date: null,
        updated_at: new Date().toISOString()
      })
      .eq('test_id', testId);

    if (error) {
      toast.error('Fehler beim Zurücksetzen');
      return;
    }

    toast.success('Test zurückgesetzt!');
    onUpdate();
  };

  return (
    <div className="flex items-center gap-2 mt-4 pt-4 border-t">
      {status !== 'completed' && (
        <Button 
          size="sm" 
          variant={status === 'running' ? 'secondary' : 'default'}
          onClick={handleToggleStatus}
        >
          {status === 'running' ? (
            <>
              <Pause className="h-4 w-4 mr-1" />
              Pausieren
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-1" />
              Starten
            </>
          )}
        </Button>
      )}

      {winner && confidence >= 95 && status !== 'completed' && (
        <Button 
          size="sm" 
          variant="default"
          className="bg-green-600 hover:bg-green-700"
          onClick={handleImplementWinner}
        >
          <Trophy className="h-4 w-4 mr-1" />
          Gewinner implementieren
        </Button>
      )}

      {status === 'completed' && (
        <Button 
          size="sm" 
          variant="outline"
          onClick={handleReset}
        >
          <RotateCcw className="h-4 w-4 mr-1" />
          Neu starten
        </Button>
      )}

      <Button 
        size="sm" 
        variant="ghost"
        className="text-red-500 hover:text-red-600 hover:bg-red-50 ml-auto"
        onClick={handleDelete}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TestControlButtons;
