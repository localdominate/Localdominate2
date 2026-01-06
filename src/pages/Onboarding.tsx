import { useSearchParams } from 'react-router-dom';
import { OnboardingWizard } from '@/components/onboarding/OnboardingWizard';

export default function Onboarding() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">
            Dein Onboarding
          </h1>
          <p className="text-muted-foreground">
            Beantworte ein paar Fragen, damit wir dich optimal unterstützen können
          </p>
        </div>

        {/* Wizard */}
        <OnboardingWizard sessionId={sessionId} />
      </div>
    </div>
  );
}
