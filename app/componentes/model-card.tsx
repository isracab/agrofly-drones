import Image from "next/image";
import Link from "next/link";
import { publicAsset } from "../asset-path";
import type { DroneModel } from "../datos";

export function ModelCard({ model }: { model: DroneModel }) {
  return (
    <article className="model-card">
      <Link className="model-image-wrap" href={`/modelos/${model.slug}`}>
        <Image
          className="model-image"
          src={publicAsset(model.image)}
          alt={`${model.name} en operación agrícola`}
          width={900}
          height={675}
          unoptimized
        />
        <span className="model-badge">{model.highlight}</span>
      </Link>
      <div className="model-card-body">
        <p className="eyebrow">{model.kicker}</p>
        <h3>{model.name}</h3>
        <p>{model.tagline}</p>
        <p className="model-card-price">{model.price}</p>
        <dl className="mini-specs">
          <div>
            <dt>Pulverización</dt>
            <dd>{model.spray}</dd>
          </div>
          <div>
            <dt>Dispersión</dt>
            <dd>{model.spread}</dd>
          </div>
          <div>
            <dt>Carga útil</dt>
            <dd>{model.payload}</dd>
          </div>
        </dl>
        <Link className="text-link" href={`/modelos/${model.slug}`}>
          Ver detalle <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
