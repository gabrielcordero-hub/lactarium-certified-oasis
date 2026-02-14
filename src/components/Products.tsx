import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Play } from "lucide-react";
import salaFija from "@/assets/sala-fija.jpg";
import cuboMovil from "@/assets/cubo-movil.jpg";
import cuboLactancia from "@/assets/cubo-lactancia.jpg";
import videoSalaFija from "@/assets/video-sala-fija.mp4";
import videoCuboMovil from "@/assets/video-cubo-movil.mp4";
import videoCuboLactancia from "@/assets/video-cubo-lactancia.mp4";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const images = [salaFija, cuboMovil, cuboLactancia];
const videos = [videoSalaFija, videoCuboMovil, videoCuboLactancia];

const ProductCard = ({ index }: { index: number }) => {
  const [showVideo, setShowVideo] = useState(false);
  const { t } = useLanguage();
  const p = translations.products.items[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300"
    >
      <div className="relative aspect-square overflow-hidden">
        {showVideo ? (
          <video
            src={videos[index]}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={images[index]}
            alt={t(p.title)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}

        <button
          onClick={() => setShowVideo(!showVideo)}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-foreground/70 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors duration-200"
          aria-label={showVideo ? "View photo" : "View 360° video"}
        >
          {showVideo ? <Camera className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        {!showVideo && (
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-foreground/70 backdrop-blur-sm text-primary-foreground text-xs font-body font-medium flex items-center gap-1.5">
            <Play className="w-3 h-3" />
            {t(translations.products.badge360)}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-foreground mb-2">
          {t(p.title)}
        </h3>
        <p className="text-sm font-body text-muted-foreground mb-4">
          {t(p.description)}
        </p>
        <div className="flex flex-wrap gap-2">
          {p.features[useLanguage().lang].map((f: string) => (
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
  );
};

const Products = () => {
  const { t } = useLanguage();

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
            {t(translations.products.label)}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            {t(translations.products.title)}
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            {t(translations.products.subtitle)}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => (
            <ProductCard key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
