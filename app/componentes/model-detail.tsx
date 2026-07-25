import Image from "next/image";
import Link from "next/link";
import { publicAsset } from "../asset-path";
import type { DroneModel } from "../datos";

const specLabels: Array<[keyof DroneModel, string]> = [
  ["spray", "Pulverización"],
  ["spread", "Dispersión / esparcido"],
  ["payload", "Carga útil"],
  ["safety", "Sistema de seguridad"],
  ["development", "Desarrollo y respaldo"],
  ["price", "Precio del kit"],
];

export function ModelDetail({ model }: { model: DroneModel }) {
  return (
    <main>
      <section className="detail-hero">
        <div className="shell detail-grid">
          <div className="detail-copy">
            <Link className="back-link" href="/modelos">← Todos los modelos</Link>
            <p className="eyebrow">{model.kicker}</p>
            <h1>{model.name}</h1>
            <p className="detail-lead">{model.tagline}</p>
            <p className="detail-distinction">{model.distinction}</p>
            <p>{model.description}</p>
            <div className="hero-actions">
              <Link className="button" href={`/contacto?modelo=${model.slug}`}>
                Solicitar cotización
              </Link>
              <a className="button button-ghost" href="#especificaciones">
                Ver especificaciones
              </a>
            </div>
            <p className="placeholder-note">
              Precios en MXN actualizados a julio de 2026.
            </p>
          </div>
          <div className="detail-media">
            <div className="detail-primary">
              <Image
                src={publicAsset(model.image)}
                alt={`${model.name} en operación agrícola`}
                width={1200}
                height={900}
                priority
                unoptimized
              />
              <div className="detail-price">
                <small>Precio del kit</small>
                <strong>{model.price}</strong>
                <span>{model.priceNote}</span>
              </div>
            </div>
            {model.gallery.length > 0 && (
              <div className="detail-gallery" aria-label={`Galería de ${model.name}`}>
                {model.gallery.map((image, index) => (
                  <Image
                    key={image}
                    src={publicAsset(image)}
                    alt={`${model.name} en campo, vista ${index + 2}`}
                    width={900}
                    height={600}
                    unoptimized
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section specs-section" id="especificaciones">
        <div className="shell split-heading">
          <div>
            <p className="eyebrow">Ficha técnica</p>
            <h2>Datos clave para decidir.</h2>
          </div>
          <p>
            Compara las capacidades esenciales antes de solicitar una
            recomendación para tu operación.
          </p>
        </div>
        <div className="shell specs-list">
          {specLabels.map(([key, label]) => (
            <div key={key}>
              <span>{label}</span>
              <strong>{model[key]}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section included-section">
        <div className="shell included-grid">
          <div>
            <p className="eyebrow">Configuración del kit</p>
            <h2>¿Qué incluye?</h2>
            <p>
              Componentes considerados en la configuración comercial descrita
              para este modelo.
            </p>
          </div>
          <ul className="included-list">
            {model.included.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section detail-cta">
        <div className="shell detail-cta-inner">
          <div>
            <p className="eyebrow light">Asesoría Agrofly</p>
            <h2>Veamos este equipo trabajar en tu cultivo.</h2>
          </div>
          <Link className="button button-light" href={`/contacto?modelo=${model.slug}`}>
            Agendar demostración
          </Link>
        </div>
      </section>
    </main>
  );
}
