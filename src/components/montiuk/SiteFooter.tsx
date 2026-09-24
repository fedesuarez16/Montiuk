const INSTAGRAM_URL = "https://www.instagram.com/montiuk.seguridadindustrial";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-emerald-500/30 bg-white py-8 text-center text-sm text-slate-500">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram de MONTIUK"
        className="mb-4 inline-flex items-center gap-2 text-slate-600 transition duration-300 ease-out hover:text-emerald-600"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
        <span>@montiuk.seguridadindustrial</span>
      </a>
      <p className="font-detail italic">© {new Date().getFullYear()} MONTIUK. Todos los derechos reservados.</p>
    </footer>
  );
}
