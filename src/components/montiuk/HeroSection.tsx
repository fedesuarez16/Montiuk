"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MainNav } from "@/components/montiuk/MainNav";

function IconResiduos({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
      />
    </svg>
  );
}

function IconLeaf({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.832 10.072C8.786 6.264 12 4 12 4s3.214 2.264 5.168 6.072c.894 1.79 1.832 4.29-.168 6.928-1.5 1.5-3.5 2-5.5 2s-4-1-5.5-2c-2-2.638-1.062-5.138-.168-6.928z"
      />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

function IconFireDoor({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 4.5h7.5A1.5 1.5 0 0 1 13.5 6v12a1.5 1.5 0 0 1-1.5 1.5H4.5V4.5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6v10.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.125 11.25h.007v.008h-.007v-.008Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 8.25c.75 1.875.75 3.75.75 5.25s0 3.375-.75 5.25c.75-1.5 1.5-3 2.25-5.25 0-2.25-1.125-3.75-2.25-5.25.75-1.125 1.5-2.25 1.5-3.75 0 1.875-.75 3.375-1.5 5.25Z"
      />
    </svg>
  );
}

const heroServices = [
  {
    href: "/servicios/gestion-residuos",
    label: "Residuos",
    Icon: IconResiduos,
  },
  { href: "/servicios/sostenibilidad", label: "Ambiente", Icon: IconLeaf },
  {
    href: "/servicios/seguridad-ocupacional",
    label: "Higiene y seguridad",
    Icon: IconShield,
  },
  {
    href: "/servicios/equipamiento-industrial",
    label: "Puertas cortafuego",
    Icon: IconFireDoor,
  },
] as const;

const slides = [
  {
    title: "Sostenibilidad, cumplimiento y valor para su organización",
    image: "/hero6.jpg",
    alt: "Gestión y sostenibilidad empresarial",
  },
  {
    title: "Control total de tus residuos industriales",
    image: "/hero8.png",
    alt: "Residuos industriales bajo control",
  },
  {
    title: "Cumplimiento normativo y bienestar laboral",
    image: "/hero2.jpeg",
    alt: "Cumplimiento y seguridad en el trabajo",
  },
  {
    title: "Equipamiento confiable para tu industria",
    image: "/hero3.jpeg",
    alt: "Equipamiento industrial",
  },
] as const;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className=" w-full">
      <div className="relative w-full overflow-hidden rounded-b-3xl shadow-sm">
        <div className="h-[100vh] min-h-[320px] w-full md:min-h-[380px]">
          {slides.map((slide, i) => (
            <Image
              key={slide.image + slide.title}
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              className={`object-cover transition-opacity duration-700 ease-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              sizes="100vw"
              aria-hidden={i !== index}
            />
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-slate-900/95 via-slate-900/65 to-slate-900/20"
          aria-hidden
        />

        <MainNav />

        {/* Slide indicator dots */}
        <div className="pointer-events-auto absolute bottom-6 left-1/2 z-[3] flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir a slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-emerald-400"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] flex flex-col justify-end px-4 pb-8 pt-8 md:px-8 md:pb-12 md:pt-12 lg:px-52 lg:pb-32 lg:pt-14">
          <p
            className="font-detail italic mb-2 text-sm tracking-wide text-emerald-300 transition-all duration-700 ease-out"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(12px)",
              transitionDelay: "0ms",
            }}
          >
            Montiuk consultora
          </p>
          <h1
            key={slides[index].title}
            className="max-w-2xl text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-5xl lg:text-5xl transition-all duration-700 ease-out"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "150ms",
            }}
          >
            {slides[index].title}
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 transition-all duration-700 ease-out"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "300ms",
            }}
          >
            En MONTIUK acompañamos a las organizaciones en la integración de la
            sostenibilidad dentro de su estrategia de negocio, alineando
            operación, cumplimiento normativo y criterios ESG.
          </p>

          <div
            className="pointer-events-auto mt-8 transition-all duration-700 ease-out"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "480ms",
            }}
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/15 px-6 py-3 text-sm font-semibold text-emerald-300 backdrop-blur-sm transition hover:border-emerald-400/50 hover:bg-emerald-500/25"
            >
              Solicitar presupuesto
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 size-5 shrink-0"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
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
            </a>
          </div>

          <nav
            aria-label="Servicios destacados"
            className="pointer-events-auto mt-6 mb-2 flex w-full max-w-xl flex-wrap gap-2 sm:flex-nowrap sm:gap-4"
          >
            {heroServices.map(({ href, label, Icon }, i) => (
              <a
                key={href}
                href={href}
                className="flex min-w-0 flex-1 basis-[calc(50%-0.375rem)] flex-col items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-3 text-center text-white/95 backdrop-blur-sm transition hover:border-emerald-400/60 hover:bg-white/10 sm:basis-0 sm:px-4"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 600ms ease-out, transform 600ms ease-out",
                  transitionDelay: `${640 + i * 80}ms`,
                }}
              >
                <Icon className="h-7 w-7 shrink-0 text-white sm:h-8 sm:w-8" />
                <span className="text-[11px] font-semibold leading-tight sm:text-xs">
                  {label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
