"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { puertasGalleryImages } from "@/data/puertasGallery";

export function PuertasGalleryCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-slide]");
    const delta = slide ? slide.offsetWidth + 8 : 280;
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  const goToPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + puertasGalleryImages.length) % puertasGalleryImages.length,
    );
  }, []);

  const goToNext = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % puertasGalleryImages.length,
    );
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext]);

  const activeImage =
    lightboxIndex !== null ? puertasGalleryImages[lightboxIndex] : null;

  return (
    <>
      <div className="relative my-8">
        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {puertasGalleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              data-slide
              onClick={() => setLightboxIndex(i)}
              aria-label={`Ampliar: ${img.alt}`}
              className="relative aspect-[4/3] w-[min(78vw,280px)] shrink-0 snap-start cursor-zoom-in overflow-hidden rounded-lg bg-slate-200 ring-1 ring-slate-200/80 transition hover:ring-emerald-300/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 sm:w-[240px] md:w-[260px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 78vw, 260px"
                className="object-cover"
                priority={i < 2}
              />
            </button>
          ))}
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={() => scrollByDir(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Imagen siguiente"
            onClick={() => scrollByDir(1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
          >
            →
          </button>
        </div>
      </div>

      {activeImage && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/92 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de la galería"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Cerrar"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition hover:bg-white/20"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            aria-label="Imagen anterior"
            className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20 sm:flex"
          >
            ←
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Imagen siguiente"
            className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20 sm:flex"
          >
            →
          </button>

          <div
            className="relative h-[min(85vh,720px)] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {lightboxIndex + 1} / {puertasGalleryImages.length}
          </p>
        </div>
      )}
    </>
  );
}
