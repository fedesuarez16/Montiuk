"use client";

import { type FormEvent, useState } from "react";

const MAILTO = "Montiukconsultora@gmail.com";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();

    const body = [
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      telefono ? `Teléfono: ${telefono}` : null,
      "",
      mensaje,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = encodeURIComponent("Consulta desde montiuk.com");
    const mailBody = encodeURIComponent(body);
    window.location.href = `mailto:${MAILTO}?subject=${subject}&body=${mailBody}`;
    setStatus("sent");
  }

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:p-8">
      <h3 className="text-lg font-semibold text-white">Enviar consulta</h3>
      <p className="mt-2 text-sm text-white/65">
        Completá el formulario y se abrirá tu correo para enviarnos el mensaje.
      </p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="contact-nombre" className="sr-only">
            Nombre
          </label>
          <input
            id="contact-nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            placeholder="Nombre y apellido *"
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Correo electrónico *"
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
          />
        </div>
        <div>
          <label htmlFor="contact-telefono" className="sr-only">
            Teléfono
          </label>
          <input
            id="contact-telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            placeholder="Teléfono (opcional)"
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
          />
        </div>
        <div>
          <label htmlFor="contact-mensaje" className="sr-only">
            Mensaje
          </label>
          <textarea
            id="contact-mensaje"
            name="mensaje"
            required
            rows={4}
            placeholder="¿En qué podemos ayudarte? *"
            className="w-full resize-y rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Enviar
        </button>
      </form>
      {status === "sent" ? (
        <p className="mt-3 text-xs text-white/55">
          Si no se abrió el correo, escribinos directamente a {MAILTO}
        </p>
      ) : null}
    </div>
  );
}
