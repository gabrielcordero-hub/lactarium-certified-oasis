import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Directora de RH",
    company: "Grupo Industrial MTY",
    text: "Instalar el lactario de LACTARIUM transformó nuestra cultura organizacional. Nuestras colaboradoras se sienten apoyadas y valoradas. La calidad de los materiales es excepcional.",
    rating: 5,
  },
  {
    name: "Ana Rodríguez",
    role: "Gerente de Bienestar",
    company: "Hospital Universitario",
    text: "La certificación OMS y UNICEF fue clave para elegir LACTARIUM. El proceso de instalación fue impecable y el resultado superó nuestras expectativas.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "CEO",
    company: "TechNL Solutions",
    text: "El cubo móvil nos dio la flexibilidad que necesitábamos. Lo reubicamos según nuestras necesidades y siempre se ve profesional. Totalmente recomendable.",
    rating: 5,
  },
];

const Testimonials = () => {
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
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
            Empresas y organizaciones que ya confían en LACTARIUM para cuidar a sus colaboradoras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">
                  {t.role} · {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
