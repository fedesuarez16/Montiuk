export const serviceSlugs = [
  "gestion-residuos",
  "sostenibilidad",
  "seguridad-ocupacional",
  "equipamiento-industrial",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type Service = {
  slug: ServiceSlug;
  title: string;
  summary: string;
  image: {
    src: string;
    alt: string;
  };
};

export const services: Service[] = [
  {
    slug: "gestion-residuos",
    title: "Gestión integral de residuos",
    summary:
      "Servicio integral desde el retiro hasta la disposición final, con cumplimiento normativo, trazabilidad y respaldo ambiental. Incluye retiro logístico con transportistas habilitados, documentación alineada con APRA y SLUE, reportes mensuales y programa sustentable más allá del cumplimiento.",
    image: {
      src: "/hero1.png",
      alt: "Gestión y control de residuos industriales",
    },
  },
  {
    slug: "sostenibilidad",
    title: "Sostenibilidad y ambiente",
    summary:
      "Incorporamos la sostenibilidad como eje estratégico con enfoque ESG y Agenda 2030: estrategias, gestión ambiental integral, reportes y mejora continua. Estudios y análisis ambientales (EIA, DJ, NCA, efluentes, emisiones, pasivos) para optimizar procesos y reducir riesgos.",
    image: {
      src: "/hero3.jpeg",
      alt: "Sostenibilidad y desempeño ambiental",
    },
  },
  {
    slug: "seguridad-ocupacional",
    title: "Salud y seguridad ocupacional",
    summary:
      "Asesoramiento en prevención de riesgos, cumplimiento normativo y mejora de condiciones de trabajo: matriz de riesgos, capacitaciones, estudios de ruido e iluminación, ergonomía, planos de evacuación, investigación de accidentes y asesoramiento técnico mensual.",
    image: {
      src: "/hero2.jpeg",
      alt: "Seguridad e higiene en el trabajo",
    },
  },
  {
    slug: "equipamiento-industrial",
    title: "Soluciones y equipamiento industrial",
    summary:
      "Comercialización e instalación de equipamiento orientado a seguridad y funcionalidad: puertas de emergencia, cortafuego certificadas por INTI, barrales antipánico y portones industriales. Productos certificados y distribución en todo el país.",
    image: {
      src: "/hero6.jpg",
      alt: "Equipamiento industrial certificado",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(slug);
}
