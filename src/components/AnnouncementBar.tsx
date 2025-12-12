import { useLanguage } from "@/i18n/LanguageContext";

const AnnouncementBar = () => {
  const { t } = useLanguage();

  return (
    <div className="sticky top-0 z-50 bg-primary py-2.5 px-4">
      <p className="text-center text-sm md:text-base font-bold text-primary-foreground">
        {t.announcement.warning}
        <span className="hidden sm:inline"> {t.announcement.checkAvailability}</span>
      </p>
    </div>
  );
};

export default AnnouncementBar;
