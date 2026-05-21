import Image from "next/image";

const clients = [
  { name: "Ezeta", file: "Ezeta.jpg" },
  { name: "Holik Group", file: "Holik Group.jpg" },
  { name: "Maprin Saci", file: "Maprin Saci.jpg" },
  { name: "Cotillón Otero", file: "Cotillon Otero.jpg" },
  { name: "Wentink", file: "Wentink.jpg" },
  { name: "Sincrolamp", file: "Sincrolamp.jpg" },
  { name: "Pack Express", file: "Pack Express.jpg" },
  { name: "Feit y Olivari", file: "Feit y Olivari.jpg" },
  { name: "Sipea Americana", file: "Sipea Americana.jpg" },
  { name: "Logística 29 de abril", file: "Logistica 29 de abril.jpg" },
  { name: "ISISA", file: "isisaa.png" },
] as const;

const topRow = clients.slice(0, 6);
const bottomRow = clients.slice(6);

function ClientLogo({
  client,
}: {
  client: (typeof clients)[number];
}) {
  return (
    <div className="flex h-20 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm sm:h-24 sm:w-36 sm:px-4">
      <Image
        src={`/logos/${encodeURIComponent(client.file)}`}
        alt={`Logo ${client.name}`}
        width={160}
        height={64}
        className="max-h-12 w-auto object-contain sm:max-h-14"
      />
    </div>
  );
}

export function ClientsSection() {
  return (
    <section
      id="clientes"
      className="border-t border-slate-200/80 bg-slate-50 py-16 pb-20 lg:py-20 lg:pb-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tighter text-slate-900 md:text-4xl">
          Nuestros clientes
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          Organizaciones que confían en MONTIUK para alinear operación,
          cumplimiento y sostenibilidad.
        </p>
        <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-center gap-4 sm:gap-5">
          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:hidden">
            {clients.map((client) => (
              <ClientLogo key={client.file} client={client} />
            ))}
          </div>
          <div className="hidden flex-col items-center gap-4 md:flex md:gap-5">
            <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
              {topRow.map((client) => (
                <ClientLogo key={client.file} client={client} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
              {bottomRow.map((client) => (
                <ClientLogo key={client.file} client={client} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
