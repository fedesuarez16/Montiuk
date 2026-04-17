const stats = [
  { value: "4", label: "Líneas de servicio integradas" },
  { value: "17", label: "ODS alineados con Agenda 2030" },
  { value: "100%", label: "Enfoque en trazabilidad y respaldo" },
  { value: "AR", label: "Cobertura en todo el país" },
];

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Sobre MONTIUK
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              En MONTIUK acompañamos a las organizaciones en la integración de
              la sostenibilidad dentro de su estrategia de negocio, alineando
              operación, cumplimiento normativo y criterios ESG para generar
              valor a largo plazo.
            </p>
            <p>
              Trabajamos junto a empresas que buscan evolucionar hacia modelos
              más responsables, eficientes y competitivos, incorporando
              prácticas vinculadas a la Agenda 2030 y los Objetivos de
              Desarrollo Sostenible (ODS).
            </p>
            <p>
              Nuestro enfoque combina gestión técnica, visión estratégica y
              mejora continua, impulsando un impacto positivo en el ambiente, la
              comunidad y el negocio.
            </p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
