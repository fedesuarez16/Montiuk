import type { ComponentType } from "react";
import type { BlogSlug } from "@/data/blog";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function Articulo1Body() {
  return (
    <div className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
      <p>
        La trazabilidad de residuos industriales no se agota en el retiro: los
        organismos de control evalúan la cadena completa — desde la generación
        hasta la disposición final — y la documentación es el principal respaldo
        ante una fiscalización o una auditoría de clientes.
      </p>
      <h4 className="mt-6 font-semibold text-slate-900">
        Remitos y manifiestos: coherencia entre origen y destino
      </h4>
      <p className="mt-2">
        Conviene verificar que cada movimiento figure con clasificación acorde al
        residuo, cantidades consistentes y transportista habilitado. Las
        discrepancias entre lo declarado en planta y lo registrado en SLUE o en
        sistemas provinciales suelen ser el primer punto de observación.
      </p>
      <BulletList
        items={[
          "Códigos y descripciones alineados con la matriz interna de la empresa",
          "Fechas y firmas completas en remitos físicos o digitales",
          "Vinculación correcta entre manifiesto y certificado de disposición",
        ]}
      />
      <h4 className="mt-6 font-semibold text-slate-900">
        Certificados y consolidación mensual
      </h4>
      <p className="mt-2">
        Los certificados de disposición final deben archivarse por período y
        cruzarse con los manifiestos emitidos. Una consolidación mensual permite
        detectar faltantes antes de presentaciones ante APRA u otros entes, y
        facilita reportes ESG sin reconstruir la información a último momento.
      </p>
      <h4 className="mt-6 font-semibold text-slate-900">Recomendación práctica</h4>
      <p className="mt-2">
        Establecer un calendario de revisión documental — por ejemplo, a los 10
        días de cerrado cada mes — reduce riesgos operativos y mejora la calidad
        de los indicadores ambientales que la organización comunica
        externamente.
      </p>
    </div>
  );
}

export function Articulo2Body() {
  return (
    <div className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
      <p>
        Los reportes de sostenibilidad exigen datos confiables, no solo
        narrativa corporativa. Ordenar la información ambiental desde el origen
        evita duplicar cargas entre áreas técnicas, compras y comunicación
        institucional.
      </p>
      <h4 className="mt-6 font-semibold text-slate-900">
        Definir indicadores y fuentes
      </h4>
      <p className="mt-2">
        Antes de recolectar cifras, conviene acordar qué indicadores reportar
        (generación de residuos, consumo energético, emisiones estimadas,
        capacitaciones, etc.) y quién es responsable de cada fuente: mantenimiento,
        producción, gestión ambiental o proveedores externos.
      </p>
      <BulletList
        items={[
          "Una matriz indicador–fuente–periodicidad visible para todo el equipo",
          "Criterios de estimación documentados cuando no hay medición directa",
          "Revisión de consistencia año contra año",
        ]}
      />
      <h4 className="mt-6 font-semibold text-slate-900">Periodicidad y ESG</h4>
      <p className="mt-2">
        Muchas empresas consolidan datos trimestralmente para tableros internos
        y anualmente para informes públicos o estándares GRI. Alinear esa
        periodicidad con los reportes técnicos ambientales (efluentes, emisiones,
        residuos) reduce retrabajo y fortalece el vínculo entre cumplimiento
        normativo y compromisos ESG.
      </p>
      <h4 className="mt-6 font-semibold text-slate-900">Cierre</h4>
      <p className="mt-2">
        Un buen reporte de sostenibilidad se apoya en procesos ya existentes:
        trazabilidad de residuos, estudios ambientales y planes de mejora. La
        clave es no crear un circuito paralelo, sino hacer explícito y auditable
        lo que la operación ya registra.
      </p>
    </div>
  );
}

export function Articulo3Body() {
  return (
    <div className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
      <p>
        La matriz de riesgos es la herramienta central de la prevención, pero
        solo aporta valor si se actualiza, se comunica y se vincula con acciones
        concretas en planta. La cultura preventiva surge cuando los trabajadores
        reconocen peligros y saben cómo reportarlos.
      </p>
      <h4 className="mt-6 font-semibold text-slate-900">
        Identificación y evaluación
      </h4>
      <p className="mt-2">
        Recorridos periódicos con referentes de producción y de higiene y
        seguridad permiten relevar peligros nuevos — maquinaria modificada,
        cambios de layout, tareas temporales — y reclasificar riesgos según
        probabilidad y severidad.
      </p>
      <BulletList
        items={[
          "Registro de hallazgos con responsable y fecha de cierre",
          "Priorización de medidas de ingeniería antes que EPP",
          "Vinculación con capacitaciones específicas por puesto",
        ]}
      />
      <h4 className="mt-6 font-semibold text-slate-900">
        Capacitación y seguimiento
      </h4>
      <p className="mt-2">
        Las capacitaciones deben responder a riesgos reales de la tarea, no solo
        cumplir horas reglamentarias. Indicadores simples — incidentes sin lesión,
        casi accidentes, cumplimiento de planes de acción — ayudan a demostrar
        mejora ante auditorías y ante el propio equipo de trabajo.
      </p>
      <h4 className="mt-6 font-semibold text-slate-900">Integración con la operación</h4>
      <p className="mt-2">
        Cuando la matriz se discute en reuniones de planta y se cruza con
        mantenimiento y proyectos, la seguridad deja de ser un apartado
        documental y se convierte en criterio de decisión cotidiano.
      </p>
    </div>
  );
}

export function Articulo4Body() {
  return (
    <div className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
      <p>
        Puertas cortafuego y vías de evacuación son elementos críticos en una
        emergencia. Su cumplimiento normativo depende de la certificación del
        producto, de una instalación correcta y de un mantenimiento que muchas
        veces se posterga hasta una inspección o un siniestro.
      </p>
      <h4 className="mt-6 font-semibold text-slate-900">Certificación y especificación</h4>
      <p className="mt-2">
        Verificar que el equipamiento cuente con certificación vigente (por
        ejemplo, ensayos reconocidos por INTI u organismos equivalentes) y que
        la especificación coincida con el uso previsto: sectorización de fuego,
        tránsito de personas, carga de maquinaria o apertura antipánico.
      </p>
      <BulletList
        items={[
          "Placas y etiquetas legibles con clase y fabricante",
          "Hojas de mantenimiento según recomendación del proveedor",
          "Coordinación con obra civil para vanos y estructuras",
        ]}
      />
      <h4 className="mt-6 font-semibold text-slate-900">Vías de evacuación</h4>
      <p className="mt-2">
        Las rutas deben permanecer libres de obstáculos, con señalización
        visible y iluminación de emergencia operativa. Los simulacros son la
        prueba definitiva: si una puerta no cierra bien o una barrera no se abre
        en el tiempo previsto, el plan de evacuación queda debilitado.
      </p>
      <h4 className="mt-6 font-semibold text-slate-900">Mantenimiento programado</h4>
      <p className="mt-2">
        Incluir puertas y portones en el plan de mantenimiento preventivo — con
        registro de intervenciones y repuestos homologados — reduce fallas en
        momento crítico y facilita demostrar diligencia ante autoridades y
        aseguradoras.
      </p>
    </div>
  );
}

export const blogBodies: Record<BlogSlug, ComponentType> = {
  "articulo-1": Articulo1Body,
  "articulo-2": Articulo2Body,
  "articulo-3": Articulo3Body,
  "articulo-4": Articulo4Body,
};
