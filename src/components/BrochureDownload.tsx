import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import jsPDF from "jspdf";

const brochureText = {
  label: { es: "Descarga gratuita", en: "Free download" },
  title: { es: "Descarga nuestro brochure", en: "Download our brochure" },
  subtitle: {
    es: "Conoce a detalle nuestros productos, certificaciones y proceso de fabricación.",
    en: "Learn in detail about our products, certifications, and manufacturing process.",
  },
  button: { es: "Descargar brochure PDF", en: "Download PDF brochure" },
  features: [
    { es: "Catálogo completo de productos", en: "Complete product catalog" },
    { es: "Certificaciones OMS y UNICEF", en: "WHO & UNICEF certifications" },
    { es: "Especificaciones técnicas", en: "Technical specifications" },
    { es: "Detalles de fabricación", en: "Manufacturing details" },
  ],
};

const generatePDF = (lang: "es" | "en") => {
  const doc = new jsPDF();
  const w = doc.internal.pageSize.getWidth();
  let y = 20;

  const addLine = (text: string, size: number, bold = false, color: [number, number, number] = [30, 60, 55]) => {
    doc.setFontSize(size);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, w - 40);
    doc.text(lines, 20, y);
    y += lines.length * (size * 0.5) + 4;
  };

  // Header
  doc.setFillColor(34, 139, 120);
  doc.rect(0, 0, w, 45, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text("LACTARIUM", 20, 25);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text(
    lang === "es"
      ? "Espacios seguros para una mejor lactancia"
      : "Safe spaces for better breastfeeding",
    20,
    35
  );
  y = 58;

  // Products
  addLine(lang === "es" ? "NUESTROS PRODUCTOS" : "OUR PRODUCTS", 16, true, [34, 139, 120]);
  y += 2;

  translations.products.items.forEach((item, i) => {
    addLine(`${i + 1}. ${item.title[lang]}`, 13, true);
    addLine(item.description[lang], 10);
    addLine(
      `✓ ${item.features[lang].join("  ✓ ")}`,
      9,
      false,
      [34, 139, 120]
    );
    y += 4;
  });

  // Certifications
  y += 4;
  addLine(lang === "es" ? "CERTIFICACIONES" : "CERTIFICATIONS", 16, true, [34, 139, 120]);
  y += 2;

  translations.certifications.items.forEach((cert) => {
    addLine(cert.title[lang], 13, true);
    addLine(cert.subtitle[lang], 10, false, [100, 100, 100]);
    addLine(cert.description[lang], 10);
    y += 3;
  });

  // Manufacturing
  y += 4;
  if (y > 240) {
    doc.addPage();
    y = 20;
  }
  addLine(
    lang === "es" ? "PROCESO DE FABRICACIÓN" : "MANUFACTURING PROCESS",
    16,
    true,
    [34, 139, 120]
  );
  y += 2;

  translations.process.steps.forEach((step, i) => {
    addLine(`${i + 1}. ${step.title[lang]}`, 12, true);
    addLine(step.description[lang], 10);
    y += 2;
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  });

  // Footer
  y += 8;
  doc.setDrawColor(34, 139, 120);
  doc.line(20, y, w - 20, y);
  y += 8;
  addLine("contacto@lactarium.mx | Monterrey, Nuevo León, México", 9, false, [100, 100, 100]);
  addLine("www.lactarium.mx", 9, false, [34, 139, 120]);

  doc.save(`LACTARIUM_Brochure_${lang.toUpperCase()}.pdf`);
};

const BrochureDownload = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            {t(brochureText.label)}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            {t(brochureText.title)}
          </h2>
          <p className="text-muted-foreground font-body mt-4 mb-8">
            {t(brochureText.subtitle)}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {brochureText.features.map((f, i) => (
              <span
                key={i}
                className="px-4 py-1.5 text-xs font-body font-medium rounded-full bg-teal-light text-primary"
              >
                {t(f)}
              </span>
            ))}
          </div>

          <button
            onClick={() => generatePDF(lang)}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-soft"
          >
            <Download className="w-4 h-4" />
            {t(brochureText.button)}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BrochureDownload;
