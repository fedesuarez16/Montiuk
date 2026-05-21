import Image from "next/image";
import type { BlogPost } from "@/data/blog";

type BlogCoverProps = {
  post: Pick<BlogPost, "title" | "category" | "gradient" | "image">;
  /** Altura del bloque en tarjetas del carrusel */
  variant?: "card" | "hero";
};

export function BlogCover({ post, variant = "card" }: BlogCoverProps) {
  const isHero = variant === "hero";

  return (
    <div
      className={`relative overflow-hidden ${
        isHero
          ? "min-h-[min(100vw,360px)] w-full sm:aspect-[21/9] sm:min-h-[240px] md:min-h-[260px]"
          : "h-48 rounded-2xl shadow-md ring-1 ring-blue-900/10 transition group-hover:shadow-lg group-hover:ring-blue-500/25"
      } ${!post.image ? `bg-gradient-to-br ${post.gradient}` : "bg-slate-200"}`}
    >
      {post.image ? (
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          className="object-cover"
          sizes={
            isHero
              ? "100vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 300px, 320px"
          }
          priority={isHero}
        />
      ) : null}
      <div
        className={`pointer-events-none absolute inset-0 ${
          isHero
            ? "z-[1] bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/75 sm:bg-gradient-to-r sm:from-slate-900/90 sm:via-slate-900/70 sm:to-slate-900/40"
            : "bg-gradient-to-t from-black/55 via-black/20 to-black/10"
        }`}
        aria-hidden
      />
      {!isHero ? (
        <span className="font-detail absolute left-4 top-4 z-[2] rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[11px] italic text-blue-100 ring-1 ring-blue-400/30">
          {post.category}
        </span>
      ) : null}
    </div>
  );
}
