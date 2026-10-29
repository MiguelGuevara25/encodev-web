export const faqs = [
  {
    q: "¿Cómo se calcula el presupuesto de mi proyecto?",
    a: "Depende de lo que necesites. Primero vemos qué quieres: una landing page, una web con varias secciones, una tienda virtual o un sistema, y si quieres que sea administrable. Con eso claro, te damos un presupuesto más exacto.",
  },
  {
    q: "¿Cómo se paga? ¿Piden adelanto?",
    a: "El pago se hace por transferencia o con billeteras digitales como Yape o Plin. En la mayoría de proyectos se pide un adelanto del 40% al 50% para empezar a trabajar y cubrir los costos de desarrollo. Cuando el proyecto está listo, lo revisas y lo apruebas, y pagas el saldo restante.",
  },
  {
    q: "¿Cuánto demora hacer mi web o sistema?",
    a: "Depende del proyecto. Como referencia, contando desde que recibimos el adelanto y tus materiales:",
    list: [
      "Landing page: de 5 a 7 días.",
      "Web con secciones: de 7 a 12 días.",
      "Tienda virtual: de 15 a 20 días.",
      "Sistema a medida: varía mucho. Uno simple puede tomar de 30 a 45 días.",
    ],
  },
  {
    q: "¿Ofrecen soporte o mantenimiento?",
    a: "Sí. Al entregar una página web, el soporte de la primera semana es gratis. En sistemas web, el seguimiento dura un mes. En ese tiempo corregimos cualquier error sin costo. Después, los cambios se cotizan según lo que pidas: cambiar colores cuesta poco, y agregar una sección o una función nueva cuesta más.",
  },
];

export const CLIENT_LOGOS = ["Nexus Group", "Lumina Retail"] as const;

export const TRUST_METRICS = [
  { value: "48 h", label: "Respuesta con presupuesto" },
  { value: "100%", label: "Remoto · LatAm y España" },
  { value: "3", label: "Paquetes con rangos claros" },
  { value: "1 a 1", label: "Trato directo y mentoría" },
] as const;
