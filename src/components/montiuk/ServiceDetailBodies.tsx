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

export function GestionResiduosBody() {
  return (
    <div className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
      <p>
        Brindamos un servicio integral de gestión de residuos, abarcando desde
        el retiro hasta su disposición final, garantizando cumplimiento
        normativo, trazabilidad y respaldo ambiental. Nuestra propuesta se
        estructura en cuatro ejes:
      </p>
      <h4 className="mt-6 font-semibold text-slate-900">A. Retiro logístico</h4>
      <p className="mt-2">
        Coordinamos retiros programados en tiempo y forma en plantas
        industriales, comercios, clínicas y otros establecimientos. Trabajamos
        exclusivamente con transportistas habilitados para residuos especiales y
        no especiales, asegurando una operatoria segura y conforme a normativa.
      </p>
      <h4 className="mt-6 font-semibold text-slate-900">
        B. Trazabilidad ambiental
      </h4>
      <p className="mt-2">
        Garantizamos la trazabilidad completa mediante un sistema documental
        alineado con los requerimientos de organismos como APRA y sistemas
        digitales como SLUE. Incluye:
      </p>
      <BulletList
        items={[
          "Remitos",
          "Manifiestos",
          "Certificados de disposición final",
          "Consolidación mensual de documentación",
        ]}
      />
      <h4 className="mt-6 font-semibold text-slate-900">
        C. Respaldo técnico ambiental
      </h4>
      <p className="mt-2">
        Entregamos reportes mensuales que permiten a la empresa tomar decisiones
        basadas en datos:
      </p>
      <BulletList
        items={[
          "Clasificación de residuos por tipo de material",
          "Indicadores de generación",
          "Análisis de desempeño ambiental",
          "Recomendaciones de mejora continua",
          "Información base para reportes ESG",
        ]}
      />
      <h4 className="mt-6 font-semibold text-slate-900">D. Programa sustentable</h4>
      <p className="mt-2">
        Desarrollamos e implementamos programas ambientales que van más allá del
        cumplimiento normativo. Brindamos un programa que acompaña y certifica la
        integralidad ambiental de los procesos. El programa promueve políticas
        ambientales sostenibles, alineadas con estándares actuales de gestión
        ambiental corporativa. No se limita al cumplimiento, sino que trabaja
        sobre la calidad de la gestión, promoviendo una gestión eficiente de
        residuos, reducción de impacto ambiental y fortalecimiento del
        posicionamiento sostenible de la organización.
      </p>
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
