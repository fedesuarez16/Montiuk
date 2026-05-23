"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "4", label: "Líneas de servicio integradas" },
  { value: "17", label: "ODS alineados con Agenda 2030" },
  { value: "100%", label: "Enfoque en trazabilidad y respaldo" },
  { value: "AR", label: "Cobertura en todo el país" },
];

function parseStat(raw: string): { prefix: string; target: number | null; suffix: string } {
  const match = raw.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!match) return { prefix: raw, target: null, suffix: "" };
  return { prefix: match[1], target: parseInt(match[2], 10), suffix: match[3] };
}

function CountUpStat({ value, label, active }: { value: string; label: string; active: boolean }) {
  const { prefix, target, suffix } = parseStat(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || target === null) return;
    const duration = 1400;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  const displayed = target !== null ? `${prefix}${count}${suffix}` : value;

  return (
    <div className="flex min-h-[8.5rem] flex-col justify-center rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-colors hover:border-emerald-200 sm:min-h-0 lg:h-full lg:min-h-0">
      <p className="font-detail text-2xl font-bold tracking-tight text-emerald-600 sm:text-4xl lg:text-5xl">
        {displayed}
      </p>
      <p className="mt-2 text-sm leading-snug text-slate-500">{label}</p>
    </div>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        <div className="flex flex-col">
          <p className="font-detail italic text-emerald-600 mb-3 text-base">Quiénes somos</p>
          <h2 className="text-4xl font-bold tracking-tighter text-slate-900 md:text-5xl">
            Sobre MONTIUK
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-relaxed text-slate-600">
            <p className="border-l-4 border-emerald-500 pl-4">
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
        <div className="flex items-center lg:min-h-0 lg:h-full">
          <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-6 sm:gap-8">
            {stats.map((s) => (
              <CountUpStat key={s.label} value={s.value} label={s.label} active={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
