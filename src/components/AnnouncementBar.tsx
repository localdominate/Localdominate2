import { useLanguage } from "@/i18n/LanguageContext";

const AnnouncementBar = () => {
  const { t } = useLanguage();

  return (
    <div className="sticky top-0 z-50 bg-primary py-3 px-4 shadow-md">
      <p className="text-center text-sm md:text-base font-semibold text-primary-foreground">
        {t.announcement.warning}
        <span className="hidden sm:inline"> {t.announcement.checkAvailability}</span>
      </p>
    </div>
  );
};

export default AnnouncementBar;
