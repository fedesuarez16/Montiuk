import { BlogCarousel } from "./BlogCarousel";

export function ServicesSection() {
  return (
    <section
      id="blog"
      className="border-t border-slate-200/80 bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tighter text-slate-900 md:text-5xl">
            Blog y artículos
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Notas sobre normativa, sostenibilidad, seguridad en el trabajo y
            equipamiento industrial. Próximamente sumaremos videos sobre temas
            de ambiente.
          </p>
        </div>
        <div className="mt-12">
          <BlogCarousel />
        </div>
      </div>
    </section>
  );
}
