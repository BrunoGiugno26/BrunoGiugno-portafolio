"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

const blogPosts = [
  {
    slug: "optimizing-react-performance",
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt:
      "Learn advanced techniques for optimizing React applications, including memoization, code splitting, and performance monitoring.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React.js", "Performance", "Optimization"],
    featured: true,
  },
  {
    slug: "nextjs-app-router-guide",
    title: "Complete Guide to Next.js App Router",
    excerpt:
      "Everything you need to know about the new App Router in Next.js 13+, including server components and streaming.",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["Next.js", "App Router", "Server Components"],
    featured: true,
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for React Developers",
    excerpt: "Essential TypeScript patterns and best practices for building type-safe React applications.",
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["TypeScript", "React.js", "Best Practices"],
    featured: false,
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white p-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-gray-400 mb-8">Thoughts on frontend development, React.js, Next.js, and web technologies.</p>
      </motion.div>

      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <Card className="p-6 bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    {post.featured && (
                      <Badge variant="outline" className="border-gray-700 text-gray-300 text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-gray-300 text-lg">{post.title}</h3>
                  <p className="text-gray-400 text-sm">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-gray-700 text-gray-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
