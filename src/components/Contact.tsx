import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Contact = () => {
  const { t } = useLanguage();
  const c = translations.contact;

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">
              {t(c.label)}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
              {t(c.title)}
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
              {t(c.subtitle)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground">{t(c.location)}</h4>
                  <p className="text-sm font-body text-muted-foreground mt-1">
                    {t(c.locationValue)}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-soft flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-rose" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground">{t(c.email)}</h4>
                  <p className="text-sm font-body text-muted-foreground mt-1">
                    contacto@lactarium.mx
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-soft flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground">{t(c.phone)}</h4>
                  <p className="text-sm font-body text-muted-foreground mt-1">
                    +52 81 8253 6954 / 81 1628 4852
                  </p>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder={t(c.formName)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t(c.formEmail)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder={t(c.formCompany)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder={t(c.formMessage)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity"
              >
                {t(c.formSubmit)}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
