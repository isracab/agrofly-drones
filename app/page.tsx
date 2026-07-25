import Image from "next/image";
import Link from "next/link";
import { publicAsset } from "./asset-path";
import { ModelCard } from "./componentes/model-card";
import { models } from "./datos";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-backdrop" aria-hidden="true" />
        <Image
          className="hero-image"
          src={publicAsset("/images/dji-agras-t100-2.webp")}
          alt="DJI Agras T100 pulverizando un cultivo"
          fill
          sizes="100vw"
          priority
          unoptimized
        />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="hero-kicker">
              <span /> Distribuidor de drones agrícolas DJI Agras
            </p>
            <h1>
              El campo despega <em>con Agrofly.</em>
            </h1>
            <p className="hero-lead">
              Tecnología DJI Agriculture para pulverizar, dispersar y trabajar
              con mayor capacidad, seguridad y precisión.
            </p>
            <div className="hero-actions">
              <Link className="button button-light" href="/modelos">
                Ver modelos <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button-outline-light" href="/contacto">
                Hablar con un asesor
              </Link>
            </div>
            <div className="hero-proof">
              <div>
                <strong>100 kg</strong>
                <span>carga útil máxima</span>
              </div>
              <div>
                <strong>12 años</strong>
                <span>de evolución DJI</span>
              </div>
              <div>
                <strong>4 modelos</strong>
                <span>para cada escala</span>
              </div>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#modelos" aria-label="Bajar a modelos">
          <span /> Explora
        </a>
      </section>

      <section className="section intro-section">
        <div className="shell intro-grid">
          <p className="eyebrow">Más precisión. Menos desperdicio.</p>
          <h2>
            Tecnología aérea diseñada para una agricultura más eficiente.
          </h2>
          <p className="intro-copy">
            Agrofly distribuye drones agrícolas DJI Agras y te ayuda a elegir
            el equipo adecuado, planear su operación y aprovecharlo desde la
            primera jornada.
          </p>
        </div>
      </section>

      <section className="section models-section" id="modelos">
        <div className="shell section-heading-row">
          <div>
            <p className="eyebrow">Línea DJI Agras</p>
            <h2>Capacidad para cada misión.</h2>
          </div>
          <Link className="text-link" href="/modelos">
            Comparar todos <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="shell model-grid">
          {models.map((model) => (
            <ModelCard key={model.slug} model={model} />
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="shell process-grid">
          <div className="process-copy">
            <p className="eyebrow light">Acompañamiento completo</p>
            <h2>No solo compras un dron. Preparas una nueva operación.</h2>
            <p>
              Desde la evaluación del terreno hasta la capacitación, nuestro
              equipo acompaña cada paso de la implementación.
            </p>
            <Link className="button button-light" href="/contacto">
              Solicitar asesoría
            </Link>
          </div>
          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <h3>Diagnóstico</h3>
                <p>Revisamos cultivo, extensión y tipo de aplicación.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Demostración</h3>
                <p>Conoces el flujo completo de una misión en campo.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Puesta en marcha</h3>
                <p>Configuración, capacitación y seguimiento técnico.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="shell final-cta-card">
          <div>
            <p className="eyebrow">¿Listo para elevar tu productividad?</p>
            <h2>Encuentra el DJI Agras ideal para tu cultivo.</h2>
          </div>
          <Link className="button" href="/contacto">
            Cotizar ahora <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
