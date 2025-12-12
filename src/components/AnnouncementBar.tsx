const AnnouncementBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-primary py-2.5 px-4">
      <p className="text-center text-sm md:text-base font-bold text-primary-foreground">
        ⚠️ Achtung: Wir nehmen pro Stadt maximal 3 Dienstleister an, um Konkurrenz-Konflikte zu vermeiden. 
        <span className="hidden sm:inline"> Prüfe jetzt deine Verfügbarkeit.</span>
      </p>
    </div>
  );
};

export default AnnouncementBar;
