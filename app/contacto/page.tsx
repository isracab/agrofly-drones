import type { Metadata } from "next";
import { contactInfo } from "../contact-info";
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
              <a href={contactInfo.primaryPhoneHref}>
                <span>Teléfono principal</span>
                <strong>{contactInfo.primaryPhoneDisplay}</strong>
              </a>
              <a href={contactInfo.secondaryPhoneHref}>
                <span>Teléfono secundario</span>
                <strong>{contactInfo.secondaryPhoneDisplay}</strong>
              </a>
              <a href={`mailto:${contactInfo.email}`}>
                <span>Correo</span>
                <strong>{contactInfo.email}</strong>
              </a>
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp</span>
                <strong>Escribir ahora ↗</strong>
              </a>
              <a href={contactInfo.mapsHref} target="_blank" rel="noreferrer">
                <span>Dirección</span>
                <strong>{contactInfo.address}</strong>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="section map-section">
        <div className="shell map-heading">
          <div>
            <p className="eyebrow">Ubicación</p>
            <h2>Visítanos en El Grullo, Jalisco.</h2>
          </div>
          <a
            className="text-link"
            href={contactInfo.mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            Abrir en Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="shell map-frame">
          <iframe
            title="Ubicación Agrofly en Google Maps"
            src={contactInfo.mapsEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
