import { Award, CheckCircle } from "lucide-react";

const AuthorBox = () => {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 mt-12">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
          <Award className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">Local Dominator Team</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Experten für lokale Suchmaschinenoptimierung mit über 500+ erfolgreich optimierten Unternehmen.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1 text-xs text-primary">
              <CheckCircle className="h-3 w-3" />
              Google Partner
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-primary">
              <CheckCircle className="h-3 w-3" />
              500+ Kunden
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-primary">
              <CheckCircle className="h-3 w-3" />
              5 Jahre Erfahrung
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBox;
