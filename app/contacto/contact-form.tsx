"use client";

import { useEffect, useState } from "react";

const modelValues = new Set(["t100", "t70p", "t55", "t25p"]);

export function ContactForm() {
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    const requestedModel = new URLSearchParams(window.location.search).get("modelo") ?? "";
    setSelectedModel(modelValues.has(requestedModel) ? requestedModel : "");
  }, []);

  return (
    <form className="contact-form" action="mailto:ventas@agrofly.mx" method="post">
      <div className="form-heading">
        <span>Solicitud de información</span>
        <p>Campos con * son obligatorios.</p>
      </div>
      <label>
        Nombre completo *
        <input name="nombre" type="text" placeholder="Tu nombre" required />
      </label>
      <div className="form-row">
        <label>
          Teléfono *
          <input name="telefono" type="tel" placeholder="354 120 5738" required />
        </label>
        <label>
          Correo
          <input name="correo" type="email" placeholder="nombre@empresa.mx" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Modelo de interés
          <select
            name="modelo"
            value={selectedModel}
            onChange={(event) => setSelectedModel(event.target.value)}
          >
            <option value="">Aún no lo sé</option>
            <option value="t100">DJI Agras T100</option>
            <option value="t70p">DJI Agras T70P</option>
            <option value="t55">DJI Agras T55</option>
            <option value="t25p">DJI Agras T25P</option>
          </select>
        </label>
        <label>
          Hectáreas aproximadas
          <input name="hectareas" type="number" min="1" placeholder="Ej. 80" />
        </label>
      </div>
      <label>
        Cuéntanos sobre tu cultivo
        <textarea
          name="mensaje"
          rows={5}
          placeholder="Cultivo, ubicación y tipo de aplicación..."
        />
      </label>
      <button className="button" type="submit">Enviar solicitud →</button>
      <p className="form-note">
        Formulario demostrativo. Conectaremos el destino real antes del
        lanzamiento comercial.
      </p>
    </form>
  );
}
