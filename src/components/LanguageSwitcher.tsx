import { useLanguage } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm font-body font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors"
      aria-label="Switch language"
    >
      <Globe className="w-3.5 h-3.5" />
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
};

export default LanguageSwitcher;
