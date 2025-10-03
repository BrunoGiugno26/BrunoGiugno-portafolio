interface Metrics{
    title:string;
    value:string;
    color:string;
}

interface CaseStudyData{
    slug:string;
    title:string;
    subtitle:string;
    summary:string
    problem:string;
    solution:string;
    stackDecisions:{title:string;body:string}[];
    challenges:string[];
    metrics:Metrics[];
    tags: string[];
    liveUrl:string;
    githubUrlFront:string;
    githubUrlBack:string;
    imageUrl:string;
}

export const caseStudies: CaseStudyData[] = [
    {
        slug: "brunocars-reservas-vehiculos",
        title: "BrunoCars - Sitio web de Alquiler de vehículos",
        subtitle: "Full Stack: Next.js 14, Stripe Webhooks, Prisma & PostgreSQL.",
        summary: "Plataforma de alquiler de vehículos diseñada para la integridad transaccional y la gestión de pagos asíncronos, demostrando un dominio avanzado del App Router de Next.js y servicios externos.",
        problem: "Necesidad de un sistema robusto que maneje reservas y pagos sin depender del frontend para confirmar transacciones, resolviendo la inconsistencia de datos post-pago.",
        solution: "Desarrollo de una arquitectura segura basada en Webhooks de Stripe para la verificación en el backend, garantizando que el estado de la reserva solo cambie después de la confirmación bancaria.",
        stackDecisions: [
            { title: "Base de Datos (Prisma/Neon)", body: "Uso de Prisma con PostgreSQL para un tipado *type-safe* y migración estable. Decisión clave para garantizar la integridad de datos transaccionales (reservas, pagos)." },
            { title: "Pagos Asíncronos (Stripe Webhooks)", body: "Implementación de lógica de *webhooks* para que la comunicación de pago sea manejada por Stripe y el backend, desacoplando la lógica y mejorando la resiliencia del sistema." },
            { title: "Autenticación (Clerk)", body: "Integración de un servicio de autenticación de terceros para una gestión de usuarios rápida y segura, permitiendo enfocarse en la lógica central del negocio (reservas)." },
        ],
        challenges: [
            "Implementación y depuración del flujo asíncrono de Stripe Webhooks para sincronizar la confirmación de pago con el estado de la reserva (de 'pending' a 'confirmed').",
            "Resolución de conflictos de tipado y el manejo de IDs entre las tablas de Prisma para asegurar la estabilidad transaccional.",
            "Optimización de la UX utilizando Shadcn/ui y técnicas de Next.js para un renderizado eficiente.",
        ],
        metrics: [
            { title: "Stack", value: "Full Stack", color: "text-blue-500" },
            { title: "Focus", value: "Transaccional", color: "text-green-500" },
            { title: "Backend", value: "Prisma & Nest.js", color: "text-purple-500" },
        ],
        tags: ["Next.js 14", "TypeScript", "Prisma", "Stripe", "Clerk", "Tailwind CSS"],
        liveUrl: "https://rents-cars.vercel.app/",
        githubUrlFront: "https://github.com/BrunoGiugno26/Rents-Cars",
        githubUrlBack: "https://github.com/BrunoGiugno26/Rents-Cars",
        imageUrl: "https://ik.imagekit.io/fefgntjox/Rents-Cars/untitled-0.png?updatedAt=1758552652106",
    },
    {
    slug: "lienzo-culinario-ecommerce",
    title: "Lienzo Culinario - E-commerce de Comida",
    subtitle: "Proyecto Final de Bootcamp (Equipo) | Next.js, Nest.js & Stripe.",
    summary: "Plataforma de E-commerce de comida a domicilio, desarrollada en equipo bajo metodologías ágiles. El enfoque principal fue la personalización del menú y la integración completa de funcionalidades de pago y notificaciones.",
    problem: "Diseñar y desarrollar un E-commerce escalable, capaz de gestionar menús dinámicos y pasarelas de pago, todo bajo un estricto plazo de 3 semanas (Proyecto Final).",
    solution: "Adopción de un *stack* de microservicios (Next.js Front, Nest.js Back) para permitir el desarrollo paralelo y la implementación de pasarelas de pago y autenticación con servicios externos (Stripe y Auth0).",
    stackDecisions: [
        { title: "Arquitectura (Nest.js)", body: "Uso de Nest.js (Node.js/Express) para construir una API robusta y modular, ideal para la gestión del inventario y la escalabilidad del E-commerce. Esto demostró la capacidad de trabajar con frameworks de backend." },
        { title: "Gestión de Pagos (Stripe)", body: "Integración de la pasarela de pagos Stripe para un flujo de compra seguro y verificación de transacciones. Asegurando una experiencia de usuario fluida desde el carrito hasta la confirmación final." },
        { title: "Notificaciones Transaccionales", body: "Implementación de **NodeMailer** para automatizar el envío de correos electrónicos de confirmación (confirmaciones de pedido, etc.), vital para la experiencia de usuario post-compra." },
    ],
    challenges: [
        "Planificación y coordinación efectiva en equipo (metodologías ágiles) para cumplir con el deadline de 3 semanas.",
        "Integración de la gestión de estado global (React) para mantener la consistencia del carrito de compras y los datos de autenticación entre componentes.",
        "Desarrollo de la arquitectura de componentes reutilizables y un diseño responsivo con Tailwind CSS."
    ],
    metrics: [
        { title: "Stack", value: "Next.js & Nest.js", color: "text-blue-500" },
        { title: "Focus", value: "Pagos & Auth0", color: "text-red-500" },
        { title: "Tiempo", value: "Proyecto de 3 Semanas", color: "text-green-500" },
    ],
    tags: ["Next.js", "Nest.js", "React", "Cloudinary", "Auth0", "Stripe", "Tailwind CSS", "NodeMailer"],
    liveUrl: "https://lienzofront.vercel.app/",
    githubUrlFront: "https://github.com/lienzoculinariog2/lienzofront",
    githubUrlBack: "https://github.com/lienzoculinariog2/nuevolienzoback-",
    imageUrl: "https://ik.imagekit.io/fefgntjox/Rents-Cars/Logo-Lienzo.png?updatedAt=1759367121863",
}
];

// Función para obtener el estudio de caso basado en el slug
export const getCaseStudyBySlug = (slug: string) => {
    return caseStudies.find(study => study.slug === slug);
};