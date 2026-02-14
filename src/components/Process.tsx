import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const stepNumbers = ["01", "02", "03", "04"];

const Process = () => {
  const { t } = useLanguage();
  const p = translations.process;

  return (
    <section id="proceso" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            {t(p.label)}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            {t(p.title)}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {p.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative"
            >
              <span className="text-6xl font-display font-bold text-primary/10">
                {stepNumbers[index]}
              </span>
              <h3 className="text-lg font-display font-bold text-foreground mt-2 mb-2">
                {t(step.title)}
              </h3>
              <p className="text-sm font-body text-muted-foreground">{t(step.description)}</p>
              {index < p.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-12 h-px bg-primary/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
