export interface Project {
  id: string
  slug: string
  title: string
  description: string // Descripción corta para la tarjeta principal
  longDescription: string // Descripción larga para la página de Case Study
  problem: string
  solution: string
  role: string
  duration: string
  team: string
  image: string // Imagen principal para la tarjeta
  heroImage: string // Imagen principal para la página de Case Study
  tags: string[]
  icon: string // Mantener si el template lo usa como fallback
  featured: boolean
  liveUrl?: string
  githubUrl?: string // Campo principal de GitHub (puedes usarlo para el front)
  metrics: {
    users: string
    performance: string
    impact: string
  }
  features: string[]
  challenges: string[]
  technologies: {
    [category: string]: string[]
  }
  gallery?: string[]
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "brunocars-reservas-vehiculos",
    title: "BrunoCars - Motor de Reservas Transaccional",
    description: "Plataforma Full Stack de alquiler de vehículos enfocada en la robustez de transacciones con Stripe Webhooks y Prisma.",
    longDescription: `Diseñé y desarrollé un motor de reservas completo utilizando Next.js 14 y TypeScript. El enfoque principal fue la alta integridad de datos y la seguridad transaccional, implementando un flujo de pagos 100% asíncrono.
    El proyecto demuestra el dominio del App Router, la arquitectura de formularios complejos con Zod/React Hook Form, y la gestión eficiente de servicios en la nube para almacenamiento de imágenes.`,
    problem: `Necesidad de un sistema que garantizara que el estado de la reserva solo se actualizara tras la verificación externa de Stripe (pago confirmado), resolviendo el riesgo de inconsistencia de datos.`,
    solution: `Arquitectura de Webhooks de Stripe implementada para que el backend gestionara de forma segura y asíncrona el cambio de estado de 'pending' a 'confirmed', desacoplando el frontend de la verificación crítica de la transacción.`,
    role: "Full Stack Developer Junior",
    duration: "Proyecto Personal",
    team: "Desarrollo individual",
    image: "/images/brunocars-preview.png", // Reemplazar con URL de tu imagen de preview
    heroImage: "/images/brunocars-hero.png", // Reemplazar con URL de tu imagen de héroe
    tags: ["Next.js 14", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
    icon: "🚗",
    featured: true,
    liveUrl: "https://rents-cars.vercel.app/",
    githubUrl: "https://github.com/BrunoGiugno26/Rents-Cars",
    metrics: {
      users: "Entorno de Producción",
      performance: "UX optimizada",
      impact: "Alta Estabilidad Transaccional",
    },
    features: [
      "Sistema de pagos asíncronos con Webhooks de Stripe",
      "Autenticación robusta con Clerk",
      "CRUD completo (Crear, Leer, Actualizar, Eliminar) para vehículos y reservas",
      "Validación de formularios complejos con Zod y React Hook Form",
      "Gestión de imágenes de vehículos con Uploadthing e ImageKit",
    ],
    challenges: [
      "Implementación del flujo de Webhooks y aseguramiento de la integridad de la base de datos post-pago.",
      "Resolución de errores de tipado y ORM (Prisma) en transacciones concurrentes.",
      "Diseño de la arquitectura Frontend para gestionar estados complejos de reserva.",
    ],
    technologies: {
      Frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "Zustand", "Shadcn/ui"],
      Backend: ["Next.js API Routes", "Prisma", "Stripe Webhooks"],
      Database: ["PostgreSQL (Neon)"],
      Authentication: ["Clerk"],
      Media: ["Uploadthing", "ImageKit"],
    },
    gallery: [ /* URLs de capturas de pantalla */ ],
  },
  {
    id: "2",
    slug: "lienzo-culinario-ecommerce",
    title: "Lienzo Culinario - E-commerce de Comida",
    description: "Plataforma E-commerce de comida a domicilio desarrollada en equipo, con Next.js, Nest.js y pasarelas de pago.",
    longDescription: `Proyecto final de Bootcamp desarrollado en equipo bajo metodologías ágiles. La plataforma se enfocó en ofrecer una experiencia de compra fluida y escalable, utilizando una arquitectura de microservicios (Front/Back) para el desarrollo paralelo.`,
    problem: `Construir una plataforma de E-commerce funcional (catálogo, carrito, checkout) en un plazo estricto de 3 semanas, requiriendo una alta coordinación de equipo y el dominio de un stack complejo.`,
    solution: `Implementación de Nest.js para el Backend (API) y uso de Redux para la gestión del estado global en el Frontend (Next.js), demostrando la capacidad de integración entre diferentes frameworks y la efectividad en el trabajo colaborativo.`,
    role: "Frontend Developer (Enfoque en UI/UX y Carrito de Compras)",
    duration: "3 Semanas (Proyecto en Equipo)",
    team: "Equipo de 4 Desarrolladores",
    image: "/placeholder.svg?text=Lienzo+Preview", // Sustituir con URL de tu imagen
    heroImage: "/placeholder.svg?text=Lienzo+Hero+Image",
    tags: ["Next.js", "Nest.js", "React", "Redux", "Auth0", "Stripe"],
    icon: "🛒",
    featured: true,
    liveUrl: "https://lienzofront.vercel.app/",
    githubUrl: "https://github.com/lienzoculinariog2/lienzofront", // Usar este para el Front
    metrics: {
      users: "Trabajo en Equipo",
      performance: "Entrega en 3 Semanas",
      impact: "Dominio de Nest.js/Redux",
    },
    features: [
      "Gestión de estado global del carrito de compras con Redux",
      "Integración de pasarela de pago Stripe y Auth0 para autenticación",
      "Notificaciones automáticas con NodeMailer",
      "Diseño responsivo y catálogo dinámico",
    ],
    challenges: [
      "Coordinación de merges y resolución de conflictos de código en un equipo de 4 personas.",
      "Integración fluida de la API de Nest.js (backend) con el Frontend de Next.js.",
      "Gestión del estado de la autenticación de usuarios en el cliente.",
    ],
    technologies: {
      Frontend: ["Next.js", "React", "Redux", "Tailwind CSS"],
      Backend: ["Nest.js", "PostgreSQL", "Node.js"],
      Authentication: ["Auth0"],
      Servicios: ["Stripe", "NodeMailer"],
      Metodología: ["Metodologías Ágiles", "Pair Programming"],
    },
    gallery: [ /* URLs de capturas de pantalla */ ],
  },
  // ELIMINAR PROYECTOS DE EJEMPLO ADICIONALES (id: "3", etc.)
];
