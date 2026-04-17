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
};

export function MainNav({ backLink }: MainNavProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-transparent">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-2 px-4 sm:h-24 sm:gap-4 sm:px-6 lg:px-8">
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
              className="h-9 w-auto brightness-0 invert sm:h-10 md:h-14"
            />
          </Link>
          {backLink ? (
            <Link
              href={backLink.href}
              className="shrink-0 text-xs font-medium text-white/90 underline-offset-4 transition hover:text-white hover:underline sm:hidden"
            >
              ←
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
        <nav className="flex min-w-0 flex-1 justify-end gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-white/30 px-3 py-1.5 text-xs font-medium text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
