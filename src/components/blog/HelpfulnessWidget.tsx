import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";
import { ThumbsUp, ThumbsDown, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

interface HelpfulnessWidgetProps {
  articleSlug: string;
  question?: string;
}

const HelpfulnessWidget = ({ 
  articleSlug,
  question: questionProp
}: HelpfulnessWidgetProps) => {
  const isEn = useLanguage().language === "en";
  const question = questionProp ?? (isEn ? "Was this article helpful?" : "War dieser Artikel hilfreich?");
  const [voted, setVoted] = useState<"yes" | "no" | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleVote = async (vote: "yes" | "no") => {
    setVoted(vote);
    
    // Track the vote (you can extend this to save to database)
    try {
      // For now, we'll use analytics_events to track votes
      const sessionId = localStorage.getItem('analytics_session_id') || 'anonymous';
      await supabase.from('analytics_events').insert({
        session_id: sessionId,
        event_type: 'article_helpfulness_vote',
        event_name: vote === 'yes' ? 'helpful' : 'not_helpful',
        event_data: { article_slug: articleSlug },
        page_path: window.location.pathname
      });
    } catch (error) {
      console.error('Error tracking vote:', error);
    }

    if (vote === "no") {
      setShowFeedback(true);
    }
  };

  const handleSubmitFeedback = async () => {
    try {
      const sessionId = localStorage.getItem('analytics_session_id') || 'anonymous';
      await supabase.from('analytics_events').insert({
        session_id: sessionId,
        event_type: 'article_feedback',
        event_name: 'feedback_submitted',
        event_data: { 
          article_slug: articleSlug,
          feedback: feedback
        },
        page_path: window.location.pathname
      });
      setSubmitted(true);
      setShowFeedback(false);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  if (submitted || (voted === "yes")) {
    return (
      <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 my-8 text-center">
        <div className="flex items-center justify-center gap-2 text-green-700 dark:text-green-300">
          <CheckCircle className="h-5 w-5" />
          <span className="font-medium">
            {voted === "yes" 
              ? "Danke für dein Feedback! Schön, dass der Artikel hilfreich war." 
              : "Vielen Dank für dein Feedback! Wir werden den Artikel verbessern."}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-muted/50 border border-border rounded-lg p-6 my-8">
      <div className="text-center">
        <h3 className="font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          {question}
        </h3>
        
        {!voted && (
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 hover:bg-green-50 hover:border-green-300 hover:text-green-700"
              onClick={() => handleVote("yes")}
            >
              <ThumbsUp className="h-5 w-5" />
              {isEn ? "Yes, very helpful" : "Ja, sehr hilfreich"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 hover:bg-red-50 hover:border-red-300 hover:text-red-700"
              onClick={() => handleVote("no")}
            >
              <ThumbsDown className="h-5 w-5" />
              {isEn ? "No, something is missing" : "Nein, fehlt etwas"}
            </Button>
          </div>
        )}

        {showFeedback && (
          <div className="mt-4 space-y-3">
            <p className="text-sm text-muted-foreground">
              Was hat dir gefehlt oder was könnten wir verbessern?
            </p>
            <Textarea
              placeholder="Dein Feedback hilft uns, bessere Inhalte zu erstellen..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="max-w-md mx-auto"
            />
            <div className="flex justify-center gap-2">
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowFeedback(false);
                  setSubmitted(true);
                }}
              >
                Überspringen
              </Button>
              <Button 
                onClick={handleSubmitFeedback}
                disabled={!feedback.trim()}
              >
                Feedback senden
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpfulnessWidget;
