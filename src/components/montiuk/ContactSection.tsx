import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="border-t border-slate-200/90 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-white shadow-xl sm:px-10 md:px-14 md:py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-12 lg:gap-x-14">
            <div className="flex flex-col gap-10">
              <div>
                <Link
                  href="/"
                  className="inline-block drop-shadow-md transition-opacity hover:opacity-90"
                >
                  <Image
                    src="/logo.png"
                    alt="MONTIUK"
                    width={160}
                    height={160}
                    className="h-12 w-auto brightness-0 invert sm:h-14"
                  />
                </Link>
                <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
                  Contacto
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/80">
                  Coordinemos una reunión para conocer su operación y proponer un
                  plan alineado a sus objetivos de cumplimiento y sostenibilidad.
                </p>
              </div>
              <address className="not-italic">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
                  Datos
                </h3>
                <dl className="mt-4 space-y-6 text-sm md:text-base">
                  <div>
                    <dt className="font-semibold text-white/60">Ubicación</dt>
                    <dd className="mt-1 leading-relaxed text-white/90">
                      Polo Industrial — Puente del Inca 2450, Carlos
                      Spegazzini, Argentina
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white/60">Teléfono</dt>
                    <dd className="mt-1">
                      <a
                        href="tel:+541127727510"
                        className="text-white underline-offset-4 hover:underline"
                      >
                        11 2772-7510
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white/60">Correo</dt>
                    <dd className="mt-1">
                      <a
                        href="mailto:Montiukconsultora@gmail.com"
                        className="break-all text-white underline-offset-4 hover:underline"
                      >
                        Montiukconsultora@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </address>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 lg:mt-14">
            <p className="text-sm leading-relaxed text-white/55">
              A futuro sumaremos dos o tres videos breves sobre temas de ambiente
              y gestión para complementar esta información.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
