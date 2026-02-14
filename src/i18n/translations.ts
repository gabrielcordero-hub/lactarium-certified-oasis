export type Lang = "es" | "en";

export const translations = {
  nav: {
    home: { es: "Inicio", en: "Home" },
    products: { es: "Productos", en: "Products" },
    certifications: { es: "Certificaciones", en: "Certifications" },
    process: { es: "Proceso", en: "Process" },
    contact: { es: "Contacto", en: "Contact" },
    cta: { es: "Cotizar ahora", en: "Get a quote" },
  },
  hero: {
    badge: {
      es: "Certificados por OMS · UNICEF · Secretaría de Salud NL",
      en: "Certified by WHO · UNICEF · NL Health Ministry",
    },
    title1: { es: "Espacios seguros para una", en: "Safe spaces for" },
    title2: { es: "mejor lactancia", en: "better breastfeeding" },
    subtitle: {
      es: "Somos los primeros en México con lactarios modulares certificados internacionalmente. Materiales hipoalergénicos y de primera calidad.",
      en: "We are the first in Mexico with internationally certified modular lactation rooms. Hypoallergenic, premium-quality materials.",
    },
    ctaProducts: { es: "Conoce nuestros productos", en: "Discover our products" },
    ctaQuote: { es: "Solicitar cotización", en: "Request a quote" },
  },
  products: {
    label: { es: "Nuestras soluciones", en: "Our solutions" },
    title: { es: "Productos LACTARIUM", en: "LACTARIUM Products" },
    subtitle: {
      es: "Ofrecemos distintas soluciones de lactarios para adaptarnos a las necesidades de cada espacio y organización.",
      en: "We offer various lactation room solutions to fit the needs of every space and organization.",
    },
    badge360: { es: "Vista 360°", en: "360° View" },
    items: [
      {
        title: { es: "Salas de Lactancia Fijas", en: "Fixed Lactation Rooms" },
        description: {
          es: "Espacios permanentes diseñados a medida para oficinas, hospitales, universidades y centros comerciales. Equipados con todo lo necesario para una experiencia cómoda y segura.",
          en: "Permanent spaces custom-designed for offices, hospitals, universities, and malls. Fully equipped for a comfortable and safe experience.",
        },
        features: {
          es: ["Diseño personalizado", "Materiales hipoalergénicos", "Climatización incluida"],
          en: ["Custom design", "Hypoallergenic materials", "Climate control included"],
        },
      },
      {
        title: { es: "Cubos de Lactancia Móviles", en: "Mobile Lactation Cubes" },
        description: {
          es: "Solución portátil ideal para eventos, ferias y espacios temporales. Fáciles de transportar e instalar sin necesidad de obra.",
          en: "Portable solution ideal for events, fairs, and temporary spaces. Easy to transport and install with no construction needed.",
        },
        features: {
          es: ["100% portátil", "Instalación en minutos", "Autosuficiente"],
          en: ["100% portable", "Setup in minutes", "Self-sufficient"],
        },
      },
      {
        title: { es: "Cubos de Lactancia Modulares", en: "Modular Lactation Cubes" },
        description: {
          es: "Nuestro producto estrella: módulos independientes que se instalan en cualquier espacio público. Los primeros certificados por OMS y UNICEF en México.",
          en: "Our flagship product: standalone modules that can be installed in any public space. The first WHO and UNICEF certified in Mexico.",
        },
        features: {
          es: ["Certificación internacional", "Diseño premium", "Mantenimiento incluido"],
          en: ["International certification", "Premium design", "Maintenance included"],
        },
      },
    ],
  },
  certifications: {
    label: { es: "Respaldo internacional", en: "International backing" },
    title: { es: "Certificaciones que nos avalan", en: "Certifications that back us" },
    items: [
      {
        title: { es: "Secretaría de Salud", en: "Health Ministry" },
        subtitle: { es: "Estado de Nuevo León", en: "State of Nuevo León" },
        description: {
          es: "Certificados por la Secretaría de Salud del Estado de Nuevo León, garantizando los más altos estándares de higiene y seguridad.",
          en: "Certified by the Nuevo León State Health Ministry, ensuring the highest hygiene and safety standards.",
        },
      },
      {
        title: { es: "OMS", en: "WHO" },
        subtitle: { es: "Organización Mundial de la Salud", en: "World Health Organization" },
        description: {
          es: "Primeros lactarios en México certificados por la OMS, cumpliendo con lineamientos internacionales de salud materno-infantil.",
          en: "First lactation rooms in Mexico certified by WHO, meeting international maternal-child health guidelines.",
        },
      },
      {
        title: { es: "UNICEF", en: "UNICEF" },
        subtitle: { es: "Fondo de las Naciones Unidas", en: "United Nations Fund" },
        description: {
          es: "Reconocidos por UNICEF como espacios que promueven y protegen la lactancia materna, un derecho fundamental de madre e hijo.",
          en: "Recognized by UNICEF as spaces that promote and protect breastfeeding, a fundamental right of mother and child.",
        },
      },
    ],
  },
  process: {
    label: { es: "Nosotros te guiamos", en: "We guide you" },
    title: { es: "¿Cómo funciona?", en: "How does it work?" },
    steps: [
      {
        title: { es: "Evaluación del espacio", en: "Space assessment" },
        description: {
          es: "Determina el área donde se instalará el lactario. Puede ser en oficinas, hospitales, universidades o cualquier espacio público.",
          en: "Determine the area where the lactation room will be installed. It can be in offices, hospitals, universities, or any public space.",
        },
      },
      {
        title: { es: "Diseño personalizado", en: "Custom design" },
        description: {
          es: "Consultamos contigo las opciones de diseño y personalización del módulo según tus preferencias de espacio, colores y características.",
          en: "We consult with you on design and customization options based on your space, color, and feature preferences.",
        },
      },
      {
        title: { es: "Fabricación e instalación", en: "Manufacturing & installation" },
        description: {
          es: "Fabricamos con materiales hipoalergénicos de primera calidad e instalamos el lactario en tu espacio de forma rápida y profesional.",
          en: "We manufacture with premium hypoallergenic materials and install the lactation room quickly and professionally.",
        },
      },
      {
        title: { es: "Seguimiento y mantenimiento", en: "Follow-up & maintenance" },
        description: {
          es: "Ofrecemos mantenimiento continuo y seguimiento después de la instalación para garantizar el óptimo funcionamiento.",
          en: "We offer continuous maintenance and follow-up after installation to ensure optimal performance.",
        },
      },
    ],
  },
  testimonials: {
    label: { es: "Confianza comprobada", en: "Proven trust" },
    title: { es: "Certificaciones y testimonios", en: "Certifications & testimonials" },
    subtitle: {
      es: "Respaldados por organismos internacionales y la confianza de nuestros clientes.",
      en: "Backed by international organizations and the trust of our clients.",
    },
    prev: { es: "Anterior", en: "Previous" },
    next: { es: "Siguiente", en: "Next" },
    items: [
      {
        type: "story" as const,
        name: "María González",
        role: { es: "Directora de RH", en: "HR Director" },
        company: "Grupo Industrial MTY",
        text: {
          es: "Instalar el lactario de LACTARIUM transformó nuestra cultura organizacional. Nuestras colaboradoras se sienten apoyadas y valoradas. La calidad de los materiales es excepcional.",
          en: "Installing the LACTARIUM lactation room transformed our organizational culture. Our employees feel supported and valued. The quality of materials is exceptional.",
        },
        rating: 5,
      },
      {
        type: "cert" as const,
        title: { es: "Secretaría de Salud NL", en: "NL Health Ministry" },
        text: {
          es: "Certificados por la Secretaría de Salud del Estado de Nuevo León, garantizando los más altos estándares de higiene y seguridad en cada uno de nuestros productos.",
          en: "Certified by the Nuevo León State Health Ministry, ensuring the highest hygiene and safety standards in every product.",
        },
        badge: { es: "Certificación Estatal", en: "State Certification" },
      },
      {
        type: "story" as const,
        name: "Ana Rodríguez",
        role: { es: "Gerente de Bienestar", en: "Wellness Manager" },
        company: "Hospital Universitario",
        text: {
          es: "La certificación OMS y UNICEF fue clave para elegir LACTARIUM. El proceso de instalación fue impecable y el resultado superó nuestras expectativas.",
          en: "The WHO and UNICEF certification was key to choosing LACTARIUM. The installation process was flawless and the result exceeded our expectations.",
        },
        rating: 5,
      },
      {
        type: "cert" as const,
        title: { es: "Organización Mundial de la Salud", en: "World Health Organization" },
        text: {
          es: "Primeros lactarios en México certificados por la OMS, cumpliendo con lineamientos internacionales de salud materno-infantil. Un reconocimiento al compromiso con la calidad.",
          en: "First lactation rooms in Mexico certified by WHO, meeting international maternal-child health guidelines. A recognition of commitment to quality.",
        },
        badge: { es: "Certificación Internacional", en: "International Certification" },
      },
      {
        type: "story" as const,
        name: "Laura Martínez",
        role: { es: "CEO", en: "CEO" },
        company: "TechNL Solutions",
        text: {
          es: "El cubo móvil nos dio la flexibilidad que necesitábamos. Lo reubicamos según nuestras necesidades y siempre se ve profesional. Totalmente recomendable.",
          en: "The mobile cube gave us the flexibility we needed. We relocate it based on our needs and it always looks professional. Highly recommended.",
        },
        rating: 5,
      },
      {
        type: "cert" as const,
        title: { es: "UNICEF", en: "UNICEF" },
        text: {
          es: "Reconocidos por UNICEF como espacios que promueven y protegen la lactancia materna, un derecho fundamental de madre e hijo.",
          en: "Recognized by UNICEF as spaces that promote and protect breastfeeding, a fundamental right of mother and child.",
        },
        badge: { es: "Reconocimiento Global", en: "Global Recognition" },
      },
    ],
  },
  contact: {
    label: { es: "Hablemos", en: "Let's talk" },
    title: { es: "Solicita tu cotización", en: "Request your quote" },
    subtitle: {
      es: "Cuéntanos sobre tu espacio y te ayudamos a encontrar la solución perfecta de lactario para tu organización.",
      en: "Tell us about your space and we'll help you find the perfect lactation room solution for your organization.",
    },
    location: { es: "Ubicación", en: "Location" },
    locationValue: { es: "Monterrey, Nuevo León, México", en: "Monterrey, Nuevo León, Mexico" },
    email: { es: "Correo electrónico", en: "Email" },
    phone: { es: "Teléfono", en: "Phone" },
    formName: { es: "Nombre completo", en: "Full name" },
    formEmail: { es: "Correo electrónico", en: "Email address" },
    formCompany: { es: "Empresa / Organización", en: "Company / Organization" },
    formMessage: {
      es: "Cuéntanos sobre tu espacio y necesidades...",
      en: "Tell us about your space and needs...",
    },
    formSubmit: { es: "Enviar solicitud", en: "Send request" },
  },
  footer: {
    tagline: {
      es: "Espacios seguros y certificados para una mejor lactancia. Fabricados en Monterrey, Nuevo León.",
      en: "Safe and certified spaces for better breastfeeding. Made in Monterrey, Nuevo León.",
    },
    products: { es: "Productos", en: "Products" },
    company: { es: "Empresa", en: "Company" },
    followUs: { es: "Síguenos", en: "Follow us" },
    followDesc: {
      es: "Mantente al día con nuestras novedades y proyectos en redes sociales.",
      en: "Stay up to date with our news and projects on social media.",
    },
    testimonials: { es: "Testimonios", en: "Testimonials" },
    copyright: {
      es: `© ${new Date().getFullYear()} LACTARIUM. Todos los derechos reservados. Monterrey, Nuevo León, México.`,
      en: `© ${new Date().getFullYear()} LACTARIUM. All rights reserved. Monterrey, Nuevo León, Mexico.`,
    },
    fixedRooms: { es: "Salas de Lactancia Fijas", en: "Fixed Lactation Rooms" },
    mobileCubes: { es: "Cubos de Lactancia Móviles", en: "Mobile Lactation Cubes" },
    modularCubes: { es: "Cubos Modulares", en: "Modular Cubes" },
  },
} as const;
