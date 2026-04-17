"use client";

import { useRef } from "react";

const posts = [
  {
    id: "articulo-1",
    href: "#blog",
    date: "12 mar 2026",
    category: "Normativa",
    title: "Novedades en trazabilidad de residuos y documentación APRA",
    excerpt:
      "Qué conviene revisar en remitos, manifiestos y certificados para mantener el circuito alineado con lo que exigen los organismos de control.",
    gradient: "from-slate-700 to-slate-900",
  },
  {
    id: "articulo-2",
    href: "#blog",
    date: "28 feb 2026",
    category: "ESG",
    title: "Cómo ordenar datos ambientales para un reporte de sostenibilidad",
    excerpt:
      "Indicadores, fuentes y periodicidad: una guía breve para que la información técnica respalde sus compromisos ESG sin duplicar esfuerzos.",
    gradient: "from-slate-600 to-accent-dark",
  },
  {
    id: "articulo-3",
    href: "#blog",
    date: "10 feb 2026",
    category: "Seguridad",
    title: "Matriz de riesgos y cultura preventiva en planta",
    excerpt:
      "De la identificación de peligros a planes de capacitación y seguimiento: ideas prácticas para mejorar condiciones de trabajo y cumplimiento.",
    gradient: "from-slate-600 to-slate-800",
  },
  {
    id: "articulo-4",
    href: "#blog",
    date: "22 ene 2026",
    category: "Equipamiento",
    title: "Puertas cortafuego y vías de evacuación: puntos de verificación",
    excerpt:
      "Certificaciones, mantenimiento y coordinación con obra para que el equipamiento industrial cumpla normativa y funcione en emergencia.",
    gradient: "from-slate-500 to-slate-700",
  },
];

export function BlogCarousel() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const delta = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((post) => (
          <article
            key={post.id}
            data-card
            className="w-[min(100%,320px)] shrink-0 snap-start sm:w-[300px] lg:w-[calc((100%-3rem)/3)]"
          >
            <a href={post.href} className="group block h-full">
              <div
                className={`relative h-48 overflow-hidden rounded-2xl bg-gradient-to-br shadow-md ring-1 ring-slate-900/5 transition group-hover:shadow-lg ${post.gradient}`}
              >
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/55 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white ring-1 ring-white/25">
                  {post.category}
                </span>
              </div>
              <time
                dateTime={post.date}
                className="mt-3 block text-xs font-medium text-slate-500"
              >
                {post.date}
              </time>
              <h3 className="mt-1 text-lg font-semibold leading-snug text-slate-900 group-hover:text-accent-dark">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
              <span className="mt-2 inline-block text-sm font-medium text-accent-dark group-hover:underline">
                Leer artículo
              </span>
            </a>
          </article>
        ))}
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => scrollByDir(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => scrollByDir(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
        >
          →
        </button>
      </div>
    </div>
  );
}
