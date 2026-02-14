import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Shield, Award, Heart } from "lucide-react";

const testimonials = [
  {
    type: "story" as const,
    name: "María González",
    role: "Directora de RH",
    company: "Grupo Industrial MTY",
    text: "Instalar el lactario de LACTARIUM transformó nuestra cultura organizacional. Nuestras colaboradoras se sienten apoyadas y valoradas. La calidad de los materiales es excepcional.",
    rating: 5,
  },
  {
    type: "cert" as const,
    icon: Shield,
    title: "Secretaría de Salud NL",
    text: "Certificados por la Secretaría de Salud del Estado de Nuevo León, garantizando los más altos estándares de higiene y seguridad en cada uno de nuestros productos.",
    badge: "Certificación Estatal",
  },
  {
    type: "story" as const,
    name: "Ana Rodríguez",
    role: "Gerente de Bienestar",
    company: "Hospital Universitario",
    text: "La certificación OMS y UNICEF fue clave para elegir LACTARIUM. El proceso de instalación fue impecable y el resultado superó nuestras expectativas.",
    rating: 5,
  },
  {
    type: "cert" as const,
    icon: Award,
    title: "Organización Mundial de la Salud",
    text: "Primeros lactarios en México certificados por la OMS, cumpliendo con lineamientos internacionales de salud materno-infantil. Un reconocimiento al compromiso con la calidad.",
    badge: "Certificación Internacional",
  },
  {
    type: "story" as const,
    name: "Laura Martínez",
    role: "CEO",
    company: "TechNL Solutions",
    text: "El cubo móvil nos dio la flexibilidad que necesitábamos. Lo reubicamos según nuestras necesidades y siempre se ve profesional. Totalmente recomendable.",
    rating: 5,
  },
  {
    type: "cert" as const,
    icon: Heart,
    title: "UNICEF",
    text: "Reconocidos por UNICEF como espacios que promueven y protegen la lactancia materna, un derecho fundamental de madre e hijo.",
    badge: "Reconocimiento Global",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const item = testimonials[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
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
            Confianza comprobada
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Certificaciones y testimonios
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
            Respaldados por organismos internacionales y la confianza de nuestros clientes.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Card */}
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
                      "{item.text}"
                    </p>
                    <div className="border-t border-border pt-4 inline-block">
                      <p className="font-body font-semibold text-foreground text-sm">{item.name}</p>
                      <p className="font-body text-xs text-muted-foreground">
                        {item.role} · {item.company}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-primary/20 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-teal-light flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-body font-semibold rounded-full bg-primary/10 text-primary mb-4">
                      {item.badge}
                    </span>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
                      {item.text}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                aria-label={`Ir a slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-primary"
                    : t.type === "cert"
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
