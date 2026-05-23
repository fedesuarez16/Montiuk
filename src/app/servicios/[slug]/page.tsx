import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactSection } from "@/components/montiuk/ContactSection";
import { MainNav } from "@/components/montiuk/MainNav";
import {
  getServiceBySlug,
  isServiceSlug,
  services,
} from "@/data/services";
import { serviceBodies } from "@/components/montiuk/ServiceDetailBodies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) return { title: "Servicio | MONTIUK" };
  return {
    title: `${s.title} | MONTIUK`,
    description: s.summary,
  };
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) notFound();

  const s = getServiceBySlug(slug)!;
  const Body = serviceBodies[slug];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="w-full">
        <div className="relative min-h-[min(100vw,420px)] w-full overflow-hidden bg-slate-200 sm:aspect-[21/9] sm:min-h-[260px] md:min-h-[280px]">
          <Image
            src={s.image.src}
            alt={s.image.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-slate-900/75 via-slate-900/55 to-slate-900/80 sm:bg-gradient-to-r sm:from-slate-900/95 sm:via-slate-900/85 sm:to-slate-900/50"
            aria-hidden
          />
          <MainNav
            backLink={{ href: "/#servicios", label: "← Volver a servicios" }}
            simplifyMobile
          />
          <div className="absolute inset-0 z-[2] flex flex-col justify-end">
            <div className="mx-auto w-full max-w-6xl px-4 pb-8 pt-28 sm:px-6 sm:pb-12 sm:pt-24 md:pt-20 lg:px-8 lg:pb-14">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-white drop-shadow sm:text-3xl md:text-4xl lg:text-5xl">
                {s.title}
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/90 drop-shadow sm:mt-3 sm:text-base md:text-lg line-clamp-4 sm:line-clamp-none">
                {s.summary}
              </p>
            </div>
          </div>
        </div>
        <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="w-full">
            <Body />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            
            
          </div>
        </article>
      </div>
      <ContactSection />
    </main>
  );
}
