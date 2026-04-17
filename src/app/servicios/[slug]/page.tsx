import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
        <div className="relative aspect-[21/9] min-h-[200px] w-full overflow-hidden bg-slate-200 sm:min-h-[260px]">
          <Image
            src={s.image.src}
            alt={s.image.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/50"
            aria-hidden
          />
          <MainNav
            backLink={{ href: "/#servicios", label: "← Volver a servicios" }}
          />
          <div className="absolute inset-0 z-[2] flex items-end">
            <div className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
              <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow md:text-5xl">
                {s.title}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/90 drop-shadow md:text-lg">
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
