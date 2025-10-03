export const projectsWithMetrics = [
  {
    id: "brunocars-reservas",
    title: "BrunoCars - Motor de Reservas Transaccional",
    description: "Plataforma Full Stack de alquiler de vehículos enfocada en la robustez de las transacciones y la integridad de los datos.",
    metrics: {
      users: "Entorno de Producción", // Indica que está listo para el uso
      performance: "UX fluida",
      impact: "Alta Integridad de Datos",
    },
    businessImpact: [
      "Implementación de lógica de Webhooks para garantizar que el pago se confirme antes del cambio de estado de reserva (Alta confiabilidad).",
      "Sistema de autenticación Clerk integrado para una gestión de usuarios segura y escalable.",
      "Manejo de inventario de vehículos con integración de almacenamiento en la nube (Uploadthing/ImageKit)."
    ],
    technologies: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL (Neon)", "Stripe Webhooks", "Clerk", "Shadcn/ui"],
    challenges: [
      "Implementación y depuración de flujos asíncronos con Stripe Webhooks para el backend (desacoplamiento Front/Back).",
      "Garantía de tipado y manejo de conflictos de ID en el ORM (Prisma) para la estabilidad transaccional.",
      "Diseño responsivo y optimización de componentes para una experiencia de reserva sencilla."
    ],
  },
  {
    id: "lienzo-culinario-ecommerce",
    title: "Lienzo Culinario - E-commerce de Comida (Proyecto Grupal)",
    description: "Plataforma E-commerce de comida a domicilio desarrollada en equipo, con foco en el catálogo dinámico y las funcionalidades de compra.",
    metrics: {
      users: "Trabajo en Equipo",
      performance: "Entrega en 3 semanas",
      impact: "Manejo de Stack Dual",
    },
    businessImpact: [
      "Desarrollo de una arquitectura de microservicios (Next.js Front / Nest.js Back) para permitir el desarrollo paralelo.",
      "Integración de pasarela de pagos Stripe y sistema de autenticación Auth0.",
      "Implementación de NodeMailer para automatizar notificaciones transaccionales (confirmaciones de pedido)."
    ],
    technologies: ["Next.js", "Nest.js", "React", "Redux", "Auth0", "Stripe", "PostgreSQL"],
    challenges: [
      "Coordinación de merges de código y resolución de conflictos bajo metodologías ágiles (Scrum).",
      "Gestión de estado global (Redux) para el carrito de compras en un entorno complejo de Front/Back.",
      "Implementación de validaciones robustas en la API de Nest.js para la gestión de productos."
    ],
  },
];
