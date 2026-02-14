import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/lactarium", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/lactarium", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/lactarium", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@lactarium", label: "YouTube" },
];

const Footer = () => {
  const { t } = useLanguage();
  const f = translations.footer;

  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <BrandLogo variant="inverted" className="mb-3" />
            <p className="text-sm font-body text-primary-foreground/60 mt-3 max-w-xs">
              {t(f.tagline)}
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <s.icon className="w-4 h-4 text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold text-primary-foreground mb-4">{t(f.products)}</h4>
            <ul className="space-y-2">
              <li><a href="#productos" className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t(f.fixedRooms)}</a></li>
              <li><a href="#productos" className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t(f.mobileCubes)}</a></li>
              <li><a href="#productos" className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t(f.modularCubes)}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold text-primary-foreground mb-4">{t(f.company)}</h4>
            <ul className="space-y-2">
              <li><a href="#certificaciones" className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t(translations.nav.certifications)}</a></li>
              <li><a href="#proceso" className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t(translations.nav.process)}</a></li>
              <li><a href="#testimoniales" className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t(f.testimonials)}</a></li>
              <li><a href="#contacto" className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">{t(translations.nav.contact)}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold text-primary-foreground mb-4">{t(f.followUs)}</h4>
            <p className="text-sm font-body text-primary-foreground/60 mb-4">
              {t(f.followDesc)}
            </p>
            <ul className="space-y-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors flex items-center gap-2"
                  >
                    <s.icon className="w-4 h-4" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-xs font-body text-primary-foreground/40 text-center">
            {t(f.copyright)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
