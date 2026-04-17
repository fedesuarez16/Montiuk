import { services } from "@/data/services";
import { serviceBodies } from "./ServiceDetailBodies";

export function ServicesDetail() {
  return (
    <div className="mt-14 space-y-4">
      {services.map((s, i) => {
        const Body = serviceBodies[s.slug];
        return (
          <details
            key={s.slug}
            id={`servicio-${i + 1}`}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm open:ring-2 open:ring-accent/30"
          >
            <summary className="cursor-pointer list-none font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                <span>
                  {i === 0 ? "♻️ " : ""}
                  {s.title}
                </span>
                <span className="text-slate-400 transition group-open:rotate-180">
                  ▼
                </span>
              </span>
            </summary>
            <Body />
          </details>
        );
      })}
    </div>
  );
}
