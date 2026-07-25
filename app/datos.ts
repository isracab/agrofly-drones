export type DroneModel = {
  slug: "t100" | "t70p" | "t55" | "t25p";
  name: string;
  shortName: string;
  kicker: string;
  tagline: string;
  distinction: string;
  description: string;
  image: string;
  gallery: string[];
  spray: string;
  spread: string;
  payload: string;
  safety: string;
  development: string;
  price: string;
  priceNote: string;
  highlight: string;
  included: string[];
};

export const models: DroneModel[] = [
  {
    slug: "t100",
    name: "DJI AGRAS T100",
    shortName: "T100",
    kicker: "Tecnología de última generación",
    tagline: "Capacidad monumental para operaciones de gran escala.",
    distinction: "Desarrollo de Precisión — 12 Años de Desarrollo",
    description:
      "El dron agrícola DJI Agras T100, una creación revolucionaria que lleva doce años en desarrollo, cuenta con una capacidad máxima de carga útil de 100 kg. Su eficiencia operativa se ha duplicado y responde a múltiples escenarios de aplicación, incluyendo pulverización, dispersión y elevación de carga. Sus sistemas de seguridad líderes en la industria y algoritmos avanzados ofrecen una operación inteligente y confiable.",
    image: "/images/dji-agras-t100-1.webp",
    gallery: ["/images/dji-agras-t100-2.webp"],
    spray: "100 L",
    spread: "150 L",
    payload: "100 kg",
    safety: "Líder con algoritmos avanzados",
    development: "12 años de evolución DJI",
    price: "$556,000 MXN",
    priceNote: "Kit integral de operación",
    highlight: "100 kg de carga útil",
    included: [
      "Dron DJI Agras T100 con sistema de enfriamiento y control remoto",
      "Generador Multifuncional Inverter D14000iE",
      "3 Baterías Inteligentes DB2160",
      "Tanque de granulado o centrífugas extra disponibles con costo adicional",
    ],
  },
  {
    slug: "t70p",
    name: "DJI AGRAS T70P",
    shortName: "T70P",
    kicker: "Potencia y mejora estructural",
    tagline: "Gran capacidad con una arquitectura renovada.",
    distinction: "Sistema de Seguridad 3.0 — Nueva mejora estructural",
    description:
      "El DJI Agras T70P ofrece una configuración de alta capacidad para operaciones agrícolas exigentes. Sus 70 litros de pulverización, 100 litros de dispersión y 65 kg de carga útil lo colocan como una solución potente entre los equipos de gran formato de la línea Agras.",
    image: "/images/dji-agras-t70p-1.webp",
    gallery: ["/images/dji-agras-t70p-2.webp"],
    spray: "70 L",
    spread: "100 L",
    payload: "65 kg",
    safety: "Sistema de Seguridad 3.0",
    development: "Nueva mejora estructural",
    price: "$438,000 MXN",
    priceNote: "Tanque de granulado o centrífugas extra gratis",
    highlight: "70 L de pulverización",
    included: [
      "Dron DJI Agras T70P",
      "Tanque de granulado o centrífugas extra sin costo",
    ],
  },
  {
    slug: "t55",
    name: "DJI AGRAS T55",
    shortName: "T55",
    kicker: "Nueva Generación DJI Agriculture",
    tagline:
      "Precisión, seguridad y versatilidad para una nueva generación de agricultura inteligente.",
    distinction:
      "Pulverización • Esparcido • Elevación — Sistema de Seguridad Inteligente",
    description:
      "El DJI Agras T55 es un dron agrícola de nueva generación diseñado para ofrecer una operación más segura, precisa y eficiente en aplicaciones de pulverización, esparcido y elevación de carga. Mantiene una capacidad de pulverización de 50 litros e incorpora radar de ondas milimétricas de alta precisión, sistema de visión cuádruple y algoritmos inteligentes que mejoran la detección de obstáculos incluso bajo lluvia y niebla. Su diseño ligero y configuración simplificada permiten trabajar con mayor productividad en huertos, parcelas pequeñas y medianas.",
    image: "/images/dji-agras-t55.webp",
    gallery: [],
    spray: "50 L",
    spread: "55 kg",
    payload: "40 kg",
    safety: "Sistema de Seguridad Inteligente",
    development: "Nueva generación — julio 2026",
    price: "$289,000 MXN",
    priceNote: "$313,360 MXN con tanque para granulado",
    highlight: "Nueva generación 2026",
    included: [
      "DJI Agras T55 con pulverización, esparcido y elevación",
      "Control remoto DJI de nueva generación con visión FPV y monitoreo en tiempo real",
      "Radar de ondas milimétricas de alta precisión",
      "Sistema de visión cuádruple y cámara FPV a color",
      "Sistema inteligente de pulverización con tanque de 50 litros",
      "Sistema profesional de esparcido de hasta 55 kg y flujo de hasta 400 kg/min",
      "Sistema de elevación de hasta 40 kg con balance automático y liberación de emergencia",
      "Compatibilidad con baterías inteligentes y ecosistema DJI Agriculture",
    ],
  },
  {
    slug: "t25p",
    name: "DJI AGRAS T25P",
    shortName: "T25P",
    kicker: "Compacto y fácil de operar",
    tagline: "La solución Agras ideal para trabajar con una sola persona.",
    distinction: "Sistema de Seguridad 3.0 — Ideal para una sola persona",
    description:
      "El DJI Agras T25P concentra pulverización, dispersión y carga útil en un formato compacto. Su capacidad de 20 litros y operación pensada para una sola persona lo hacen especialmente práctico para productores que buscan movilidad y una puesta en marcha sencilla.",
    image: "/images/dji-agras-t25p-1.webp",
    gallery: ["/images/dji-agras-t25p-2.webp"],
    spray: "20 L",
    spread: "25 kg",
    payload: "25 kg",
    safety: "Sistema de Seguridad 3.0",
    development: "Ideal para una sola persona",
    price: "$217,600 MXN",
    priceNote: "Kit con 3 baterías y generador DJI 8000",
    highlight: "Operación unipersonal",
    included: [
      "Dron DJI Agras T25P",
      "3 baterías inteligentes",
      "Generador DJI 8000",
    ],
  },
];

export function modelBySlug(slug: DroneModel["slug"]) {
  return models.find((model) => model.slug === slug)!;
}
