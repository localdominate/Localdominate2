import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminLoginScreen } from '@/components/admin/AdminLoginScreen';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import SEOHead from '@/components/SEOHead';

export default function Admin() {
  const { isAuthenticated, isAdmin, isLoading, signIn, error } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated && isAdmin) {
      navigate('/admin/content-plan');
    }
  }, [isLoading, isAuthenticated, isAdmin, navigate]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-muted-foreground">Laden...</div>
      </div>
    );
  }

  if (isAuthenticated && !isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Kein Zugriff</h1>
          <p className="text-muted-foreground">Du hast keine Admin-Berechtigung.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead title="Admin Login - Local Dominator" description="Admin-Bereich" noindex />
      <AdminLoginScreen
        onLogin={signIn}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}
