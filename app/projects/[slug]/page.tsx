import { getProjectBySlug, getAllProjects } from "@/data/projects"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ProjectDetailClient } from "./project-detail-client"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Adeel Hashmi`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 600,
          alt: project.title,
        },
      ],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
