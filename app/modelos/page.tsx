import type { Metadata } from "next";
import Link from "next/link";
import { ModelCard } from "../componentes/model-card";
import { models } from "../datos";

export const metadata: Metadata = {
  title: "Drones DJI Agras",
  description:
    "Compara los drones agrícolas DJI Agras T100, T70P, T55 y T25P distribuidos por Agrofly.",
};

const comparisonRows = [
  ["Pulverización", "spray"],
  ["Dispersión / Esparcido", "spread"],
  ["Carga útil", "payload"],
  ["Sistema de seguridad", "safety"],
  ["Desarrollo y respaldo", "development"],
  ["Precio del kit", "price"],
] as const;

export default function ModelsPage() {
  return (
    <main>
      <section className="page-hero models-page-hero">
        <div className="shell page-hero-inner">
          <p className="eyebrow light">Catálogo DJI Agras</p>
          <h1>El equipo correcto cambia toda la jornada.</h1>
          <p>
            Compara capacidad de pulverización, dispersión y carga útil para
            encontrar la plataforma que mejor se adapta a tu operación.
          </p>
        </div>
      </section>

      <section className="section models-catalog">
        <div className="shell catalog-intro">
          <h2>Conoce la línea DJI Agras.</h2>
          <p>
            Cuatro soluciones agrícolas distribuidas por Agrofly, desde el
            compacto T25P hasta el monumental T100.
          </p>
        </div>
        <div className="shell model-grid">
          {models.map((model) => (
            <ModelCard key={model.slug} model={model} />
          ))}
        </div>
      </section>

      <section className="section comparison-section" id="comparativa">
        <div className="shell split-heading">
          <div>
            <p className="eyebrow">Comparativa rápida</p>
            <h2>Los cuatro modelos, lado a lado.</h2>
          </div>
          <p>Desliza horizontalmente la tabla en pantallas pequeñas.</p>
        </div>
        <div className="shell table-shell" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th>Especificación</th>
                {models.map((model) => (
                  <th key={model.slug}>
                    <span>DJI AGRAS</span>
                    {model.shortName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([label, key]) => (
                <tr key={key}>
                  <th>{label}</th>
                  {models.map((model) => (
                    <td key={model.slug}>
                      {model[key]}
                      {key === "price" && (
                        <small className="table-price-note">
                          {model.priceNote}
                        </small>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="table-actions">
                <th>Detalle</th>
                {models.map((model) => (
                  <td key={model.slug}>
                    <Link href={`/modelos/${model.slug}`}>Ver modelo →</Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="shell data-note">
          * Precios en MXN actualizados a julio de 2026 y sujetos a
          disponibilidad. Confirma la configuración final con un asesor.
        </p>
      </section>
    </main>
  );
}
