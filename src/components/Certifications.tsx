import { motion } from "framer-motion";
import { Shield, Award, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [Shield, Award, Heart];

const Certifications = () => {
  const { t } = useLanguage();
  const c = translations.certifications;

  return (
    <section id="certificaciones" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">
            {t(c.label)}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            {t(c.title)}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {c.items.map((cert, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-teal-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">{t(cert.title)}</h3>
                <p className="text-sm font-body font-medium text-primary mt-1 mb-3">
                  {t(cert.subtitle)}
                </p>
                <p className="text-sm font-body text-muted-foreground">{t(cert.description)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
