export const PRODUCTS = [
  {
    id: "gt-101",
    name: "Superestrella",
    category: "anillos",
    categoryLabel: "Anillos",
    code: "GT-101",
    price: 55000,
    priceFormatted: "$55.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },
      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    image: "/images/superestrella.png",

    description: "Anillo abierto con estrella de líneas geométricas y terminación pulida. Disponible en bronce y alpaca.",
    details: [
      "Bronce (color oro) / Alpaca",
      "Modelado escultórico a mano",
      "Ancho de banda: 6mm a 14mm en punto máximo",
      "Fabricación personalizada según tu medida exacta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: true,
    isBestseller: true
  },
  {
    id: "gt-102",
    name: "Solco",
    category: "anillos",
    categoryLabel: "Anillos",
    code: "GT-102",
    price: 70000,
    priceFormatted: "$70.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },
      { id: "plata", name: "Plata", priceMultiplier: 2.15 },
      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    image: "/images/solco.png",

    description: "Anillo de banda fina con detalle de surco longitudinal. Diseño asimétrico y acabado pulido. Disponible en bronce, plata y alpaca.",
    details: [
      "Perla cultivada de agua dulce (única en forma)",
      "Cadena regulable de 40cm a 45cm",
      "Cierre marinero hecho a mano"
    ],
    sizesAvailable: ["Largo 40 cm", "Largo 45 cm", "Largo 50 cm + Cadena de Extensión"],
    isNew: true,
    isBestseller: false
  },
  {
    id: "gt-103",
    name: "Magma",
    category: "anillos",
    categoryLabel: "Anillos",
    code: "GT-103",
    price: 85000,
    priceFormatted: "$85.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },
      { id: "plata", name: "Plata", priceMultiplier: 2.18 },
      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    stoneColorsAvailable: ["blanco", "lavanda", "amarillo", "rosa", "verde", "champagne", "violeta"],
    image: "/images/magma.png",

    description: "Anillo de cuerpo irregular, textura orgánica y piedra central engarzada. Disponible en bronce, alpaca y plata 925.",
    details: [
      "Sistema de perno en Plata 925 antialérgica",
      "Súper livianos para uso diario (4.2g cada uno)",
      "Acabado satinado suave o pulido a espejo"
    ],
    sizesAvailable: ["Tamaño Único (Diámetro 28mm)"],
    isNew: false,
    isBestseller: true
  },
  {
    id: "gt-104",
    name: "Goteo",
    category: "anillos",
    categoryLabel: "Anillos",
    code: "GT-104",
    price: 70000,
    priceFormatted: "$70.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },
      { id: "plata", name: "Plata", priceMultiplier: 2.07 },
      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    image: "/images/goteo.png",

    description: "Anillo compuesto por formas irregulares que simulan metal fundido. Acabado orgánico. Disponible en bronce, alpaca y plata 925.",
    details: [
      "Apertura flexible para ajuste confortable",
      "Superficie pulida a mano con terminación satinada",
      "Gravado interno de marca GOTA"
    ],
    sizesAvailable: ["Muñeca S (14-16cm)", "Muñeca M (16-18cm)", "Muñeca L (18-20cm)"],
    isNew: true,
    isBestseller: false
  },
  {
    id: "gt-105",
    name: "Ear Cuff Loop",
    category: "aros",
    categoryLabel: "Aros",
    code: "GT-105",
    price: 50000,
    priceFormatted: "$50.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },
      { id: "plata", name: "Plata", priceMultiplier: 2 },
      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    image: "/images/ear cuff loop.png",
    description: "Ear cuff de estructura abierta y goteada. Superficie irregular con terminación pulida. Disponible en bronce, alpaca y plata 925.",
    details: [
      "Perfil cónico súper cómodo",
      "Fundición a la cera perdida",
      "Opción de engaste de micro piedra según consulta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: false,
    isBestseller: true
  },
  {
    id: "gt-106",
    name: "Gemma",
    category: "anillos",
    categoryLabel: "Anillos",
    code: "GT-106",
    price: 60000,
    priceFormatted: "$60.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },
      { id: "plata", name: "Plata", priceMultiplier: 2.16 },
      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    stoneColorsAvailable: ["blanco", "lavanda", "amarillo", "rosa", "verde", "champagne", "violeta"],
    image: "/images/gemma.png",

    description: "Anillo de banda fina e irregular con piedra central engarzada. Acabado de textura artesanal. Disponible en bronce, alpaca y plata 925.",
    details: [
      "Dije macizo con peso sustancial",
      "Cadena fina veneciana en oro/plata",
      "Largo ajustable 38cm - 42cm"
    ],
    sizesAvailable: ["Choker 38 cm", "Estándar 42 cm"],
    isNew: true,
    isBestseller: false
  },
  {
    id: "gt-107",
    name: "Treccia",
    category: "anillos",
    categoryLabel: "Anillos",
    code: "GT-107",
    price: 45000,
    priceFormatted: "$45.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },
      { id: "plata", name: "Plata", priceMultiplier: 2.11 },
      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    image: "/images/trecci a.png",

    description: "Anillo de bandas finas entrelazadas, con textura irregular y acabado orgánico. Disponible en bronce, alpaca y plata 925.",
    details: [
      "Plata 925 maciza / Opción Baño de Oro 18k de 5 micrones",
      "Modelado escultórico a mano",
      "Ancho de banda: 6mm a 14mm en punto máximo",
      "Fabricación personalizada según tu medida exacta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: true,
    isBestseller: true
  },
  {
    id: "gt-108",
    name: "Tri Dorado",
    category: "anillos",
    categoryLabel: "Anillos",
    code: "GT-108",
    price: 45000,
    priceFormatted: "$45.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },

    ],
    image: "/images/tri dorado.png",

    description: "Anillo de diseño simple y minimalista, con superficie lisa y terminaciones irregulares que le aportan un carácter orgánico. Disponible en bronce y alpaca.",
    details: [
      "Plata 925 maciza / Opción Baño de Oro 18k de 5 micrones",
      "Modelado escultórico a mano",
      "Ancho de banda: 6mm a 14mm en punto máximo",
      "Fabricación personalizada según tu medida exacta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: true,
    isBestseller: true
  },
  {
    id: "gt-109",
    name: "Tri Plateado",
    category: "anillos",
    categoryLabel: "Anillos",
    code: "GT-109",
    price: 45000,
    priceFormatted: "$45.000 ARS",
    materials: [
      { id: "plata", name: "Plata", priceMultiplier: 2 },
      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    image: "/images/tri plateado.png",

    description: "Anillo de diseño simple y minimalista, con superficie lisa y terminaciones irregulares que le aportan un carácter orgánicor. Disponible en bronce, alpaca y plata 925.",
    details: [
      "Plata 925 maciza / Opción Baño de Oro 18k de 5 micrones",
      "Modelado escultórico a mano",
      "Ancho de banda: 6mm a 14mm en punto máximo",
      "Fabricación personalizada según tu medida exacta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: true,
    isBestseller: true
  },
  {
    id: "gt-110",
    name: "Aros Gota",
    category: "aros",
    categoryLabel: "Aros",
    code: "GT-110",
    price: 75000,
    priceFormatted: "$75.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },
      { id: "plata", name: "Plata", priceMultiplier: 2.53 },
      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    stoneColorsAvailable: ["blanco", "lavanda", "amarillo", "rosa", "verde", "champagne", "violeta"],
    image: "/images/aros gota.png",

    description: "Aros con estructura en forma de gota irregular y piedra central engarzada. Disponible en bronce, alpaca y plata 925.",
    details: [
      "Plata 925 maciza / Opción Baño de Oro 18k de 5 micrones",
      "Modelado escultórico a mano",
      "Ancho de banda: 6mm a 14mm en punto máximo",
      "Fabricación personalizada según tu medida exacta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: true,
    isBestseller: true
  },
  {
    id: "gt-111",
    name: "Aros Lume",
    category: "aros",
    categoryLabel: "Aros",
    code: "GT-111",
    price: 70000,
    priceFormatted: "$70.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },
      { id: "plata", name: "Plata", priceMultiplier: 2.2857 },
      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    stoneColorsAvailable: ["blanco", "lavanda", "amarillo", "rosa", "verde", "champagne", "violeta"],
    image: "/images/aros lume.png",

    description: "Aros pequeños con piedra central engarzada, contorno orgánico y acabado pulido. Disponible en bronce, alpaca y plata 925.",
    details: [
      "Plata 925 maciza / Opción Baño de Oro 18k de 5 micrones",
      "Modelado escultórico a mano",
      "Ancho de banda: 6mm a 14mm en punto máximo",
      "Fabricación personalizada según tu medida exacta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: true,
    isBestseller: true
  },
  {
    id: "gt-112",
    name: "Bolle Dorado",
    category: "anillos",
    categoryLabel: "Anillos",
    code: "GT-112",
    price: 85000,
    priceFormatted: "$85.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },
    ],
    image: "/images/bolle dorado.png",

    description: "Anillo de volumen escultórico, formado por una composición de pequeñas esferas metálicas superpuestas hechas una por una. Disponible en bronce, alpaca y plata 925.",
    details: [
      "Plata 925 maciza / Opción Baño de Oro 18k de 5 micrones",
      "Modelado escultórico a mano",
      "Ancho de banda: 6mm a 14mm en punto máximo",
      "Fabricación personalizada según tu medida exacta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: true,
    isBestseller: true
  },
  {
    id: "gt-113",
    name: "Bolle Plateado",
    category: "anillos",
    categoryLabel: "Anillos",
    code: "GT-113",
    price: 85000,
    priceFormatted: "$85.000 ARS",
    materials: [

      { id: "plata", name: "Plata", priceMultiplier: 2.235 },
      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    image: "/images/bolle plateado.png",

    description: "Anillo de volumen escultórico, formado por una composición de pequeñas esferas metálicas superpuestas hechas una por una. Disponible en bronce, alpaca y plata 925.",
    details: [
      "Plata 925 maciza / Opción Baño de Oro 18k de 5 micrones",
      "Modelado escultórico a mano",
      "Ancho de banda: 6mm a 14mm en punto máximo",
      "Fabricación personalizada según tu medida exacta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: true,
    isBestseller: true
  },
  {
    id: "gt-114",
    name: "Componi Inicial",
    category: "collares",
    categoryLabel: "Collares",
    code: "GT-114",
    price: 70000,
    priceFormatted: "$70.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },

      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    image: "/images/componi inicial.png",

    description: "Collar rígido de sección fina de 2mm, con dije de inicial de forma orgánica. Personalizable. Disponible en bronce y alpaca.",
    details: [
      "Plata 925 maciza / Opción Baño de Oro 18k de 5 micrones",
      "Modelado escultórico a mano",
      "Ancho de banda: 6mm a 14mm en punto máximo",
      "Fabricación personalizada según tu medida exacta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: true,
    isBestseller: true
  },
  {
    id: "gt-115",
    name: "Componi Personalizable",
    category: "collares",
    categoryLabel: "Collares",
    code: "GT-115",
    price: 95000,
    priceFormatted: "$95.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },

      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    stoneColorsAvailable: ["blanco", "lavanda", "amarillo", "rosa", "verde", "champagne", "violeta"],
    image: "/images/componi personalizable.png",

    description: "Collar rígido de sección fina, con combinación de inicial y piedra engarzada. Diseño personalizable. Disponible en bronce y alpaca.",
    details: [
      "Plata 925 maciza / Opción Baño de Oro 18k de 5 micrones",
      "Modelado escultórico a mano",
      "Ancho de banda: 6mm a 14mm en punto máximo",
      "Fabricación personalizada según tu medida exacta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: true,
    isBestseller: true
  },
  {
    id: "gt-116",
    name: "Componi Piedra",
    category: "collares",
    categoryLabel: "Collares",
    code: "GT-116",
    price: 75000,
    priceFormatted: "$75.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },

      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    stoneColorsAvailable: ["blanco", "lavanda", "amarillo", "rosa", "verde", "champagne", "violeta"],
    image: "/images/componi piedra.png",

    description: "Collar rígido de sección fina de 2mm con piedra colgante engarzada. Diseño minimalista y estructura circular. Disponible en bronce y alpaca.",
    details: [
      "Plata 925 maciza / Opción Baño de Oro 18k de 5 micrones",
      "Modelado escultórico a mano",
      "Ancho de banda: 6mm a 14mm en punto máximo",
      "Fabricación personalizada según tu medida exacta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: true,
    isBestseller: true
  },
  {
    id: "gt-117",
    name: "Cubik",
    category: "anillos",
    categoryLabel: "Anillos",
    code: "GT-117",
    price: 85000,
    priceFormatted: "$85.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },
      { id: "plata", name: "Plata", priceMultiplier: 2.53 },
      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    stoneColorsAvailable: ["blanco", "lavanda", "amarillo", "rosa", "verde", "champagne", "violeta"],
    image: "/images/cubik.png",

    description: "Anillo de banda ancha y líneas geométricas, con piedra rectangular engarzada horizontalmente. Su estructura de bordes suavizados y terminación pulida integra la piedra al cuerpo del anillo. Disponible en bronce, alpaca y plata 925.",
    details: [
      "Plata 925 maciza / Opción Baño de Oro 18k de 5 micrones",
      "Modelado escultórico a mano",
      "Ancho de banda: 6mm a 14mm en punto máximo",
      "Fabricación personalizada según tu medida exacta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: true,
    isBestseller: true
  },
  {
    id: "gt-118",
    name: "Dije Flor Chica",
    category: "collares",
    categoryLabel: "Collares",
    code: "GT-118",
    price: 70000,
    priceFormatted: "$70.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },
      { id: "plata", name: "Plata", priceMultiplier: 2.0 },
      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    image: "/images/dije flor chica.png",

    description: "Dije floral, con pétalos en relieve, bordes irregulares y acabado orgánico. Disponible en bronce, alpaca y plata 925.",
    details: [
      "Plata 925 maciza / Opción Baño de Oro 18k de 5 micrones",
      "Modelado escultórico a mano",
      "Ancho de banda: 6mm a 14mm en punto máximo",
      "Fabricación personalizada según tu medida exacta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: true,
    isBestseller: true
  },
  {
    id: "gt-119",
    name: "Dije Flor",
    category: "collares",
    categoryLabel: "Collares",
    code: "GT-119",
    price: 90000,
    priceFormatted: "$90.000 ARS",
    materials: [
      { id: "bronce", name: "Bronce", priceMultiplier: 1 },
      { id: "plata", name: "Plata", priceMultiplier: 2.39 },
      { id: "alpaca", name: "Alpaca", priceMultiplier: 1 }
    ],
    image: "/images/dije flor.png",

    description: "Dije floral, con pétalos en relieve, bordes irregulares y acabado orgánico. Disponible en bronce, alpaca y plata 925.",
    details: [
      "Plata 925 maciza / Opción Baño de Oro 18k de 5 micrones",
      "Modelado escultórico a mano",
      "Ancho de banda: 6mm a 14mm en punto máximo",
      "Fabricación personalizada según tu medida exacta"
    ],
    sizesAvailable: ["Talle 10", "Talle 12", "Talle 14", "Talle 16", "Talle 18", "Talle 20", "Medida Personalizada"],
    isNew: true,
    isBestseller: true
  },
];

export const CATEGORIES = [
  { id: "todos", label: "Todas las Piezas" },
  { id: "anillos", label: "Anillos" },
  { id: "collares", label: "Collares & Dijes" },
  { id: "aros", label: "Aros & Pendientes" },
  { id: "pulseras", label: "Pulseras & Cuff" }
];

export const BRAND_CONFIG = {
  name: "GOTA",
  subtitle: "Alta Joyería Escultórica",
  whatsappNumber: "5491121853727", // 
  instagram: "@gotajoyas",
  email: "contacto@gotajoyas.com",
  location: "Buenos Aires, Argentina",
  shippingNotice: "Envíos a todo el país • Piezas elaboradas a mano"
};
