import { motion } from "framer-motion";
import salaFija from "@/assets/sala-fija.jpg";
import cuboMovil from "@/assets/cubo-movil.jpg";
import cuboLactancia from "@/assets/cubo-lactancia.jpg";

const products = [
  {
    title: "Salas de Lactancia Fijas",
    description:
      "Espacios permanentes diseñados a medida para oficinas, hospitales, universidades y centros comerciales. Equipados con todo lo necesario para una experiencia cómoda y segura.",
    image: salaFija,
    features: ["Diseño personalizado", "Materiales hipoalergénicos", "Climatización incluida"],
  },
  {
    title: "Cubos de Lactancia Móviles",
    description:
      "Solución portátil ideal para eventos, ferias y espacios temporales. Fáciles de transportar e instalar sin necesidad de obra.",
    image: cuboMovil,
    features: ["100% portátil", "Instalación en minutos", "Autosuficiente"],
  },
  {
    title: "Cubos de Lactancia Modulares",
    description:
      "Nuestro producto estrella: módulos independientes que se instalan en cualquier espacio público. Los primeros certificados por OMS y UNICEF en México.",
    image: cuboLactancia,
    features: ["Certificación internacional", "Diseño premium", "Mantenimiento incluido"],
  },
];

const Products = () => {
  return (
    <section id="productos" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            Nuestras soluciones
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Productos LACTARIUM
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            Ofrecemos distintas soluciones de lactarios para adaptarnos a las necesidades de cada espacio y organización.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 text-xs font-body font-medium rounded-full bg-teal-light text-primary"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
