import type { ComponentType } from "react";
import { PuertasGalleryCarousel } from "@/components/montiuk/PuertasGalleryCarousel";
import type { ServiceSlug } from "@/data/services";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const gestionResiduosFeatures = [
  {
    title: "Economía Circular",
    description:
      "Identificamos oportunidades para recuperar materiales y reducir desperdicios.",
  },
  {
    title: "Gestión basada en datos",
    description:
      "Transformamos la información de residuos en indicadores para la toma de decisiones.",
  },
  {
    title: "Estrategia de sostenibilidad",
    description:
      "Integramos la gestión de residuos a los objetivos ambientales y ESG de la organización.",
  },
  {
    title: "Cultura y compromiso",
    description:
      "Capacitamos equipos para fortalecer prácticas sostenibles en toda la empresa.",
  },
] as const;

export function GestionResiduosBody() {
  return (
    <div className="mt-4 leading-relaxed text-slate-600">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Gestión estratégica de residuos
      </h2>
      <p className="mt-3 text-lg font-medium text-slate-700">
        Transformamos los residuos en oportunidades de mejora, ahorro y
        sostenibilidad.
      </p>
      <p className="mt-4 text-sm leading-relaxed md:text-base">
        Acompañamos a las organizaciones en el diagnóstico, planificación y
        mejora de su gestión de residuos, identificando oportunidades de
        reducción, reutilización, recuperación y valorización de materiales.
        Nuestro enfoque combina cumplimiento normativo, eficiencia operativa y
        principios de economía circular para generar resultados medibles y
        sostenibles.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {gestionResiduosFeatures.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-slate-200 bg-slate-50 p-5"
          >
            <h3 className="font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SostenibilidadBody() {
  return (
    <div className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
      <p>
        Acompañamos a las empresas en la incorporación de la sostenibilidad como
        eje estratégico, alineando su gestión con estándares ESG y los
        lineamientos de la Agenda 2030. Trabajamos sobre:
      </p>
      <BulletList
        items={[
          "Estrategias de sostenibilidad (ESG)",
          "Gestión ambiental integral",
          "Reportes de sostenibilidad",
          "Mejora continua y eficiencia ambiental",
          "Cumplimiento de normativas y estándares internacionales",
        ]}
      />
      <h4 className="mt-6 font-semibold text-slate-900">
        Estudios y análisis ambientales
      </h4>
      <p className="mt-2">
        Brindamos soporte técnico para la evaluación, control y mejora del
        desempeño ambiental:
      </p>
      <BulletList
        items={[
          "Evaluaciones de Impacto Ambiental",
          "Declaraciones juradas de residuos",
          "Cálculo de Nivel de Complejidad Ambiental (NCA)",
          "Inscripción como generador de residuos",
          "Estudios de pasivos ambientales",
          "Análisis de efluentes líquidos y su impacto",
          "Gestión y tratamiento de efluentes",
          "Monitoreo de emisiones gaseosas",
          "Estudios de efluentes gaseosos",
        ]}
      />
      <p className="mt-4">
        Nuestro enfoque permite no solo cumplir con la normativa, sino también
        optimizar procesos y reducir riesgos ambientales.
      </p>
    </div>
  );
}

export function SeguridadOcupacionalBody() {
  return (
    <div className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
      <p>
        Brindamos asesoramiento integral en seguridad e higiene laboral,
        orientado a la prevención de riesgos, cumplimiento normativo y mejora de
        las condiciones de trabajo. Nuestros servicios incluyen:
      </p>
      <BulletList
        items={[
          "Elaboración de matriz de identificación y evaluación de riesgos",
          "Planes de capacitación para el personal",
          "Estudios de ruido e iluminación",
          "Evaluaciones ergonómicas",
          "Planos de evacuación y emergencia",
          "Investigación y análisis de accidentes",
          "Asesoramiento técnico mensual (abono)",
        ]}
      />
      <p className="mt-4">
        Trabajamos en la construcción de entornos laborales seguros, reduciendo
        la siniestralidad y fortaleciendo la cultura preventiva dentro de la
        organización.
      </p>
    </div>
  );
}

export function EquipamientoIndustrialBody() {
  return (
    <div className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
      <p>
        Ofrecemos comercialización e instalación de equipamiento industrial
        orientado a la seguridad y funcionalidad de los espacios de trabajo.
      </p>
      <BulletList
        items={[
          "Puertas de emergencia",
          "Puertas resistentes al fuego (certificadas por INTI)",
          "Barrales antipánico",
          "Portones corredizos industriales",
        ]}
      />
      <PuertasGalleryCarousel />
      <p className="mt-4">
        Trabajamos con productos certificados y de alta calidad, brindando
        soluciones adaptadas a cada necesidad y cumpliendo con las normativas
        vigentes. Distribución en todo el país.
      </p>
    </div>
  );
}

export const serviceBodies: Record<ServiceSlug, ComponentType> = {
  "gestion-residuos": GestionResiduosBody,
  sostenibilidad: SostenibilidadBody,
  "seguridad-ocupacional": SeguridadOcupacionalBody,
  "equipamiento-industrial": EquipamientoIndustrialBody,
};
