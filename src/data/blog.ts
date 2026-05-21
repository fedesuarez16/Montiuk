export const blogSlugs = [
  "articulo-1",
  "articulo-2",
  "articulo-3",
  "articulo-4",
] as const;

export type BlogSlug = (typeof blogSlugs)[number];

export type BlogPost = {
  slug: BlogSlug;
  date: string;
  dateISO: string;
  category: string;
  title: string;
  excerpt: string;
  gradient: string;
  image?: {
    src: string;
    alt: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "articulo-1",
    date: "12 mar 2026",
    dateISO: "2026-03-12",
    category: "Normativa",
    title: "Novedades en trazabilidad de residuos y documentación APRA",
    excerpt:
      "Qué conviene revisar en remitos, manifiestos y certificados para mantener el circuito alineado con lo que exigen los organismos de control.",
    gradient: "from-blue-800 to-slate-900",
    image: {
      src: "/blog/1.png",
      alt: "Trazabilidad de residuos y documentación APRA",
    },
  },
  {
    slug: "articulo-2",
    date: "28 feb 2026",
    dateISO: "2026-02-28",
    category: "ESG",
    title: "Cómo ordenar datos ambientales para un reporte de sostenibilidad",
    excerpt:
      "Indicadores, fuentes y periodicidad: una guía breve para que la información técnica respalde sus compromisos ESG sin duplicar esfuerzos.",
    gradient: "from-blue-700 to-blue-950",
    image: {
      src: "/blog/2.png",
      alt: "Datos ambientales para reporte de sostenibilidad",
    },
  },
  {
    slug: "articulo-3",
    date: "10 feb 2026",
    dateISO: "2026-02-10",
    category: "Seguridad",
    title: "Matriz de riesgos y cultura preventiva en planta",
    excerpt:
      "De la identificación de peligros a planes de capacitación y seguimiento: ideas prácticas para mejorar condiciones de trabajo y cumplimiento.",
    gradient: "from-slate-700 to-blue-900",
    image: {
      src: "/blog/3.png",
      alt: "Matriz de riesgos y cultura preventiva en planta",
    },
  },
  {
    slug: "articulo-4",
    date: "22 ene 2026",
    dateISO: "2026-01-22",
    category: "Equipamiento",
    title: "Puertas cortafuego y vías de evacuación: puntos de verificación",
    excerpt:
      "Certificaciones, mantenimiento y coordinación con obra para que el equipamiento industrial cumpla normativa y funcione en emergencia.",
    gradient: "from-blue-600 to-slate-800",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function isBlogSlug(slug: string): slug is BlogSlug {
  return (blogSlugs as readonly string[]).includes(slug);
}
