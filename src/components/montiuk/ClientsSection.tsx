const clientSlots = Array.from({ length: 15 }, (_, i) => i + 1);

export function ClientsSection() {
  return (
    <section
      id="clientes"
      className="border-t border-slate-200/80 bg-slate-50 py-16 pb-20 lg:py-20 lg:pb-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          Nuestros clientes
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
          Organizaciones que confían en MONTIUK para alinear operación,
          cumplimiento y sostenibilidad. Próximamente sumaremos los logos
          oficiales de cada empresa.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {clientSlots.map((n) => (
            <div
              key={n}
              className="flex h-14 min-w-[7rem] items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold uppercase tracking-wide text-slate-400 shadow-sm"
            >
              Logo {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
