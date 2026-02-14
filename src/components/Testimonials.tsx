import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Shield, Award, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const certIcons = [Shield, Award, Heart];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const { t } = useLanguage();
  const tt = translations.testimonials;
  const items = tt.items;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const item = items[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  // Find cert icon index (certs are at indices 1, 3, 5)
  const getCertIconIndex = () => {
    const certIndices = items.reduce<number[]>((acc, it, i) => {
      if (it.type === "cert") acc.push(i);
      return acc;
    }, []);
    return certIndices.indexOf(current);
  };

  return (
    <section id="testimoniales" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">
            {t(tt.label)}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            {t(tt.title)}
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
            {t(tt.subtitle)}
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label={t(tt.prev)}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label={t(tt.next)}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                {item.type === "story" ? (
                  <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border text-center">
                    <Quote className="w-8 h-8 text-primary/20 mx-auto mb-4" />
                    <div className="flex gap-1 justify-center mb-4">
                      {Array.from({ length: item.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
                      "{t(item.text)}"
                    </p>
                    <div className="border-t border-border pt-4 inline-block">
                      <p className="font-body font-semibold text-foreground text-sm">{item.name}</p>
                      <p className="font-body text-xs text-muted-foreground">
                        {t(item.role)} · {item.company}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-primary/20 text-center">
                    {(() => {
                      const iconIdx = getCertIconIndex();
                      const Icon = certIcons[iconIdx >= 0 ? iconIdx : 0];
                      return (
                        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-teal-light flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                      );
                    })()}
                    <span className="inline-block px-3 py-1 text-xs font-body font-semibold rounded-full bg-primary/10 text-primary mb-4">
                      {t(item.badge)}
                    </span>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      {t(item.title)}
                    </h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
                      {t(item.text)}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {items.map((itm, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-primary"
                    : itm.type === "cert"
                    ? "w-2 bg-primary/30"
                    : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
