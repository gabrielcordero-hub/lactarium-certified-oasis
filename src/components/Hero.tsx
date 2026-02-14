import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-lactarium.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cubo de lactancia LACTARIUM en entorno profesional"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-body text-sm font-semibold mb-6 border border-accent/30">
              Certificados por OMS · UNICEF · Secretaría de Salud NL
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
          >
            Espacios seguros para una{" "}
            <span className="text-accent">mejor lactancia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl font-body text-primary-foreground/80 mb-10 max-w-lg"
          >
            Somos los primeros en México con lactarios modulares certificados internacionalmente. 
            Materiales hipoalergénicos y de primera calidad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#productos"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Conoce nuestros productos
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold text-center hover:bg-primary-foreground/10 transition-colors"
            >
              Solicitar cotización
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-primary-foreground/50" size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
