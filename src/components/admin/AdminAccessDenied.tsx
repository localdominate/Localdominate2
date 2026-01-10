import { Link } from 'react-router-dom';
import { ShieldX, LogOut, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AdminAccessDeniedProps {
  onSignOut: () => void;
  userEmail?: string;
}

export function AdminAccessDenied({ onSignOut, userEmail }: AdminAccessDeniedProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
            <ShieldX className="h-7 w-7 text-destructive" />
          </div>
          <CardTitle className="text-2xl">Zugriff verweigert</CardTitle>
          <CardDescription>
            Du bist angemeldet, hast aber keine Admin-Berechtigung.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {userEmail && (
            <p className="text-sm text-muted-foreground">
              Angemeldet als: <span className="font-medium">{userEmail}</span>
            </p>
          )}
          
          <p className="text-sm text-muted-foreground">
            Falls du der Meinung bist, dass du Zugriff haben solltest, 
            kontaktiere bitte den Administrator.
          </p>

          <div className="flex flex-col gap-2 pt-4">
            <Button variant="outline" onClick={onSignOut} className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Mit anderem Konto anmelden
            </Button>
            <Link to="/" className="w-full">
              <Button variant="ghost" className="w-full">
                <Home className="mr-2 h-4 w-4" />
                Zurück zur Website
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}