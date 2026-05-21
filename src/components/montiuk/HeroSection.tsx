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

function IconCog({ className }: { className?: string }) {
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
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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
    label: "Industrial",
    Icon: IconCog,
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

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => window.clearInterval(id);
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
          <p className="font-detail italic mb-2 text-sm tracking-wide text-emerald-300">
            Montiuk consultora
          </p>
          <h1
            key={slides[index].title}
            className="max-w-2xl text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-5xl lg:text-5xl"
          >
            {slides[index].title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            En MONTIUK acompañamos a las organizaciones en la integración de la
            sostenibilidad dentro de su estrategia de negocio, alineando
            operación, cumplimiento normativo y criterios ESG.
          </p>

          <div className="pointer-events-auto mt-8">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/95 backdrop-blur-sm transition hover:border-emerald-400/60 hover:bg-white/10"
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
            {heroServices.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                className="flex min-w-0 flex-1 basis-[calc(50%-0.375rem)] flex-col items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-3 text-center text-white/95 backdrop-blur-sm transition hover:border-emerald-400/60 hover:bg-white/10 sm:basis-0 sm:px-4"
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
