"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

function clampWords(text: string, maxWords: number) {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text.trim();
  return `${words.slice(0, maxWords).join(" ")}…`;
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={18}
      height={18}
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5 15.75 12l-7.5 7.5"
      />
    </svg>
  );
}

export function ProcessSection() {
  return (
    <section
      id="servicios"
      className="border-t border-slate-200/80 bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Servicios
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Cuatro líneas de trabajo que integran gestión ambiental,
            sostenibilidad, seguridad ocupacional y equipamiento industrial
            certificado.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {services.map((item) => (
            <article
              key={item.slug}
              className="group relative h-[280px] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10 transition-shadow duration-300 hover:shadow-xl sm:h-[340px] md:h-[380px] lg:h-[400px]"
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div
                className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/45 to-black/25"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 z-[2] bg-black/0 transition-colors duration-300 group-hover:bg-black/30"
                aria-hidden
              />

              <Link
                href={`/servicios/${item.slug}`}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white shadow-md backdrop-blur-sm transition hover:bg-white/25"
                aria-label={`Ir a ${item.title}`}
              >
                <ChevronRight className="shrink-0" />
              </Link>

              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-3 pt-16 sm:p-4 sm:pt-20 md:p-5">
                <h3 className="text-base font-bold leading-snug text-white sm:text-lg md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-white/90 sm:mt-2 sm:line-clamp-4 sm:text-sm">
                  {clampWords(item.summary, 28)}
                </p>
                <div className="mt-3 sm:mt-4">
                  <Link
                    href={`/servicios/${item.slug}`}
                    className="flex w-full items-center justify-between gap-2 rounded-lg border border-white/35 bg-black/40 px-2.5 py-2 text-left text-xs font-medium text-white backdrop-blur-md transition hover:bg-black/55 sm:px-4 sm:py-2.5 sm:text-sm"
                  >
                    Ver servicio
                    <ChevronRight className="shrink-0 opacity-90" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
