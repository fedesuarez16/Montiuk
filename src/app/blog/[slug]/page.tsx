import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCover } from "@/components/montiuk/BlogCover";
import { blogBodies } from "@/components/montiuk/BlogDetailBodies";
import { ContactSection } from "@/components/montiuk/ContactSection";
import { MainNav } from "@/components/montiuk/MainNav";
import {
  blogPosts,
  getBlogPostBySlug,
  isBlogSlug,
} from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Artículo | MONTIUK" };
  return {
    title: `${post.title} | MONTIUK`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (!isBlogSlug(slug)) notFound();

  const post = getBlogPostBySlug(slug)!;
  const Body = blogBodies[slug];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="w-full">
        <div className="relative w-full overflow-hidden">
          <BlogCover post={post} variant="hero" />
          <MainNav
            backLink={{ href: "/#blog", label: "← Volver al blog" }}
            simplifyMobile
          />
          <div className="absolute inset-0 z-[2] flex flex-col justify-end">
            <div className="mx-auto w-full max-w-6xl px-4 pb-8 pt-28 sm:px-6 sm:pb-12 sm:pt-24 md:pt-20 lg:px-8 lg:pb-14">
              <span className="font-detail inline-block rounded-full bg-blue-500/25 px-2.5 py-0.5 text-[11px] italic text-blue-100 ring-1 ring-blue-400/30">
                {post.category}
              </span>
              <time
                dateTime={post.dateISO}
                className="font-detail mt-3 block text-sm italic text-white/80"
              >
                {post.date}
              </time>
              <h1 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-white drop-shadow sm:text-3xl md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/90 drop-shadow sm:mt-3 sm:text-base md:text-lg">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
        <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="w-full max-w-3xl">
            <Body />
          </div>
          <div className="mt-10">
            <Link
              href="/#blog"
              className="text-sm font-medium text-blue-700 underline-offset-4 transition hover:text-blue-800 hover:underline"
            >
              ← Volver a todos los artículos
            </Link>
          </div>
        </article>
      </div>
      <ContactSection />
    </main>
  );
}
