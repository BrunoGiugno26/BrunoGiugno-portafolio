// Senior-level TypeScript interfaces
export interface WorkExperience {
  id: string
  company: string
  role: string
  duration: string
  description: string
  logo: string
  technologies: string[]
  achievements: string[]
  companyUrl?: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  icon: string
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  caseStudyUrl?: string
  metrics?: {
    users?: string
    performance?: string
    impact?: string
  }
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  readTime: string
  tags: string[]
  featured: boolean
  views?: number
  likes?: number
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  message: string
  budget?: string
  timeline?: string
}
