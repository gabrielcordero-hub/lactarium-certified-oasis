import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Evaluación del espacio",
    description:
      "Determina el área donde se instalará el lactario. Puede ser en oficinas, hospitales, universidades o cualquier espacio público.",
  },
  {
    number: "02",
    title: "Diseño personalizado",
    description:
      "Consultamos contigo las opciones de diseño y personalización del módulo según tus preferencias de espacio, colores y características.",
  },
  {
    number: "03",
    title: "Fabricación e instalación",
    description:
      "Fabricamos con materiales hipoalergénicos de primera calidad e instalamos el lactario en tu espacio de forma rápida y profesional.",
  },
  {
    number: "04",
    title: "Seguimiento y mantenimiento",
    description:
      "Ofrecemos mantenimiento continuo y seguimiento después de la instalación para garantizar el óptimo funcionamiento.",
  },
];

const Process = () => {
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
            Nosotros te guiamos
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            ¿Cómo funciona?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative"
            >
              <span className="text-6xl font-display font-bold text-primary/10">
                {step.number}
              </span>
              <h3 className="text-lg font-display font-bold text-foreground mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
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
