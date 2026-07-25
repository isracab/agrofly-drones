import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Habla con un asesor de drones agrícolas Agrofly.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero contact-page-hero">
        <div className="shell page-hero-inner">
          <p className="eyebrow light">Contacto Agrofly</p>
          <h1>Cuéntanos qué quieres lograr en campo.</h1>
          <p>
            Nuestro equipo te ayudará a comparar modelos, estimar rendimiento y
            preparar una demostración.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="shell contact-grid">
          <div className="contact-intro">
            <p className="eyebrow">Asesoría especializada</p>
            <h2>El primer paso es entender tu operación.</h2>
            <p>
              Comparte el tipo de cultivo, hectáreas aproximadas y la zona
              donde trabajas. Te responderemos con una recomendación inicial.
            </p>
            <div className="contact-direct">
              <a href="tel:+5218715246062">
                <span>Teléfono</span>
                <strong>+52 1 871 524 6062</strong>
              </a>
              <a href="mailto:ventas@agrofly.mx">
                <span>Correo</span>
                <strong>ventas@agrofly.mx</strong>
              </a>
              <a
                href="https://wa.me/5218715246062"
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp</span>
                <strong>Escribir ahora ↗</strong>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
