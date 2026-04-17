import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#blog", label: "Blog" },
  { href: "/#clientes", label: "Clientes" },
  { href: "/#contacto", label: "Contacto" },
] as const;

type MainNavProps = {
  /** Enlace opcional a la izquierda del logo (p. ej. volver a servicios). */
  backLink?: { href: string; label: string };
  /**
   * En móvil solo logo + volver + enlace a inicio (sin carrusel de secciones).
   * Mejor para páginas internas con poco alto de hero.
   */
  simplifyMobile?: boolean;
};

export function MainNav({ backLink, simplifyMobile }: MainNavProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-transparent">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:h-24 sm:min-h-0 sm:gap-4 sm:px-6 sm:py-0 lg:px-8">
        <div className="flex min-w-0 shrink items-center gap-2 sm:gap-4">
          {backLink ? (
            <Link
              href={backLink.href}
              className="hidden shrink-0 text-sm font-medium text-white/90 underline-offset-4 transition hover:text-white hover:underline sm:inline"
            >
              {backLink.label}
            </Link>
          ) : null}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 drop-shadow-md"
          >
            <Image
              src="/logo.png"
              alt="MONTIUK logo"
              width={100}
              height={100}
              className="h-8 w-auto brightness-0 invert sm:h-10 md:h-14"
            />
          </Link>
          {backLink ? (
            <Link
              href={backLink.href}
              className="shrink-0 rounded-md border border-white/25 bg-white/10 px-2 py-1 text-[11px] font-medium text-white/95 backdrop-blur-sm transition hover:bg-white/20 sm:hidden"
            >
              Volver
            </Link>
          ) : null}
        </div>
        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-6 text-sm font-medium text-white/90 drop-shadow md:flex md:gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {simplifyMobile ? (
          <Link
            href="/"
            className="shrink-0 text-xs font-medium text-white/90 underline-offset-4 transition hover:text-white hover:underline md:hidden"
          >
            Inicio
          </Link>
        ) : (
          <nav className="flex min-w-0 max-w-[52%] flex-1 justify-end gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:max-w-none sm:gap-2 md:hidden [&::-webkit-scrollbar]:hidden">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full border border-white/30 px-2.5 py-1 text-[11px] font-medium text-white sm:px-3 sm:py-1.5 sm:text-xs"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
