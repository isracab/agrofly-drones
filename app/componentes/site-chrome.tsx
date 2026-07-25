import Image from "next/image";
import Link from "next/link";
import { publicAsset } from "../asset-path";
import { contactInfo } from "../contact-info";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/modelos", label: "Modelos" },
  { href: "/contacto", label: "Contacto" },
];

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      className={`brand${footer ? " brand-footer" : ""}`}
      href="/"
      aria-label="Agrofly, ir al inicio"
    >
      <Image
        className="brand-logo"
        src={
          footer
            ? publicAsset("/images/agrofly-footer-logo-transparent.png")
            : publicAsset("/images/agrofly-logo.webp")
        }
        alt="Agrofly DJI Solutions"
        width={footer ? 1714 : 1200}
        height={footer ? 301 : 234}
        unoptimized
      />
    </Link>
  );
}

export function Header() {
  return (
    <>
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>Demostraciones en campo</span>
          <span>Soporte técnico especializado</span>
          <span>Envíos a todo México</span>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegación principal">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="button button-small header-cta" href="/contacto">
            Solicitar asesoría
          </Link>
          <details className="mobile-menu">
            <summary aria-label="Abrir menú">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Navegación móvil">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand footer />
          <p>
            Distribuidor de drones agrícolas DJI Agras con asesoría para cada
            escala de operación.
          </p>
        </div>
        <div>
          <p className="footer-title">Explora</p>
          <Link href="/">Inicio</Link>
          <Link href="/modelos">Modelos</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
        <div>
          <p className="footer-title">Contacto</p>
          <a href={contactInfo.primaryPhoneHref}>{contactInfo.primaryPhoneDisplay}</a>
          <a href={contactInfo.secondaryPhoneHref}>
            {contactInfo.secondaryPhoneDisplay}
          </a>
          <a href={contactInfo.officePhoneHref}>
            Oficina: {contactInfo.officePhoneDisplay}
          </a>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
        <div>
          <p className="footer-title">Síguenos</p>
          <a
            href={contactInfo.facebookHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Agrofly en Facebook"
          >
            Facebook
          </a>
          <a href={contactInfo.mapsHref} target="_blank" rel="noreferrer">
            {contactInfo.address}
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Agrofly. Todos los derechos reservados.</span>
        <span>Precios actualizados a julio de 2026.</span>
        <span>Built by django.labs</span>
      </div>
    </footer>
  );
}
