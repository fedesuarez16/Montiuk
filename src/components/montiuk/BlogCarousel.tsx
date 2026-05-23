"use client";

import Link from "next/link";
import { useRef } from "react";
import { BlogCover } from "@/components/montiuk/BlogCover";
import { blogPosts } from "@/data/blog";

export function BlogCarousel() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const delta = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            data-card
            className="w-[min(100%,320px)] shrink-0 snap-start sm:w-[300px] lg:w-[calc((100%-3rem)/3)]"
          >
            <Link href={`/blog/${post.slug}`} className="group block h-full">
              <BlogCover post={post} variant="card" />
              <div className="mt-3 flex items-center gap-2">
                <span className="font-detail inline-block rounded bg-emerald-50 px-2 py-0.5 text-xs text-emerald-600">
                  {post.category}
                </span>
                <time
                  dateTime={post.dateISO}
                  className="font-detail block text-xs italic text-slate-500"
                >
                  {post.date}
                </time>
              </div>
              <h3 className="mt-1 text-lg font-semibold leading-snug text-slate-900 group-hover:text-emerald-700">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
              <span className="mt-2 inline-block text-sm font-medium text-emerald-600 group-hover:underline">
                Leer artículo
              </span>
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => scrollByDir(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => scrollByDir(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
        >
          →
        </button>
      </div>
    </div>
  );
}
