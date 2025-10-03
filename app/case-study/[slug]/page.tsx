// ARCHIVO: app/case-study/[slug]/page.tsx

import { getCaseStudyBySlug } from "@/data/case-studies";
import { notFound } from "next/navigation";
import { ExternalLink, Github, Zap, Code, Shield, ArrowLeft } from "lucide-react"; // Importado ArrowLeft
import Image from "next/image";
import Link from "next/link";

interface CaseStudyPageProps {
    params: { slug: string };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
    const study = getCaseStudyBySlug(params.slug);

    if (!study) {
        // Si el slug no coincide con ningún proyecto, muestra la página 404 de Next.js
        notFound();
    }

    return (
        <div className="min-h-screen pt-24 pb-16 bg-background text-foreground">
            <div className="max-w-4xl px-6 mx-auto space-y-12">
                
                {/* === BOTÓN DE REGRESO AGREGADO AQUÍ === */}
                <Link href="/" className="inline-flex items-center pt-6 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Volver al Portafolio
                </Link>
                {/* ===================================== */}
                
                {/* Header y Metadata */}
                <header className="pt-10 pb-8 space-y-4 border-b border-border/50">
                    <h1 className="text-4xl font-bold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-foreground to-foreground/80">
                        {study.title}
                    </h1>
                    <p className="text-xl text-muted-foreground">{study.subtitle}</p>
                    
                    {/* Botones de Enlace Rápido */}
                    <div className="flex gap-4 pt-4">
                        {/* Live Demo */}
                        {study.liveUrl && (
                            <Link href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors text-primary hover:text-primary/80">
                                <Zap className="inline w-4 h-4 mr-1" />
                                Live Demo
                            </Link>
                        )}
                        {/* Code (Front) */}
                        {study.githubUrlFront && (
                            <Link href={study.githubUrlFront} target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
                                <Code className="inline w-4 h-4 mr-1" />
                                Code (Front)
                            </Link>
                        )}
                        {/* Code (Back) */}
                        {study.githubUrlBack && (
                            <Link href={study.githubUrlBack} target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
                                <Code className="inline w-4 h-4 mr-1" />
                                Code (Back)
                            </Link>
                        )}
                    </div>
                </header>

                {/* Imagen Principal (Ajuste de tamaño para logos) */}
                {study.imageUrl && (
                    <div className="flex justify-center py-6">
                        <Image
                            src={study.imageUrl}
                            alt={`Imagen principal de ${study.title}`}
                            width={300} 
                            height={300} 
                            className="object-contain" 
                            priority
                        />
                    </div>
                )}

                {/* Resumen y Problema */}
                <section className="space-y-6">
                    <h2 className="pl-3 text-2xl font-bold border-l-4 border-primary">Resumen Ejecutivo</h2>
                    <p className="text-lg text-foreground/90">{study.summary}</p>
                    
                    <div className="grid gap-6 pt-4 md:grid-cols-2">
                        <div className="p-4 rounded-lg bg-muted/30">
                            <h3 className="text-lg font-semibold text-primary">El Problema</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{study.problem}</p>
                        </div>
                        <div className="p-4 rounded-lg bg-muted/30">
                            <h3 className="text-lg font-semibold text-primary">La Solución</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{study.solution}</p>
                        </div>
                    </div>
                </section>
                
                {/* Métrica Clave */}
                <section className="flex flex-wrap justify-center gap-4 py-4">
                    {study.metrics.map((metric, index) => (
                        <div key={index} className={`text-center p-3 rounded-full bg-muted/50 border border-border/50`}>
                            <p className={`font-bold text-sm ${metric.color}`}>{metric.title}</p>
                            <p className="text-xs text-muted-foreground">{metric.value}</p>
                        </div>
                    ))}
                </section>


                {/* Decisiones de Stack (El POR QUÉ) */}
                <section className="space-y-6">
                    <h2 className="pl-3 text-2xl font-bold border-l-4 border-blue-500">Decisiones y Arquitectura Técnica</h2>
                    <div className="space-y-6">
                        {study.stackDecisions.map((decision, index) => (
                            <div key={index}>
                                <h3 className="flex items-center gap-2 text-xl font-semibold text-foreground">
                                    <Shield className="w-5 h-5 text-blue-500"/>
                                    {decision.title}
                                </h3>
                                <p className="mt-1 text-muted-foreground">{decision.body}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* Desafíos Resueltos (Prueba de Habilidad) */}
                <section className="space-y-6">
                    <h2 className="pl-3 text-2xl font-bold border-l-4 border-yellow-500">Desafíos Clave Resueltos</h2>
                    <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                        {study.challenges.map((challenge, index) => (
                            <li key={index} className="text-foreground/90 text-md">
                                <span className="pr-1 font-medium text-yellow-600/90">•</span>
                                {challenge}
                            </li>
                        ))}
                    </ul>
                </section>
                
                {/* Pie de página y Tags */}
                <footer className="pt-8 space-y-4">
                    <h3 className="text-lg font-semibold">Stack Completo</h3>
                    <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                                {tag}
                            </span>
                        ))}
                    </div>
                </footer>

            </div>
        </div>
    );
}