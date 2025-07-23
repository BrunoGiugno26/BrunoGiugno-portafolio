"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CalendarDays, Clock, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useEffect } from "react"

const blogPosts = {
  "optimizing-react-performance": {
    title: "Optimizing React Performance: Advanced Techniques",
    content: `
# Optimizing React Performance: Advanced Techniques

React applications can become slow as they grow in complexity. In this comprehensive guide, we'll explore advanced techniques to optimize React performance and create lightning-fast user experiences.

## Understanding React Performance

Before diving into optimization techniques, it's crucial to understand how React works under the hood. React uses a virtual DOM to efficiently update the actual DOM, but even this process can become expensive with complex component trees.

## Key Optimization Techniques

### 1. Memoization with React.memo

React.memo is a higher-order component that memoizes the result of a component. It only re-renders if its props have changed.

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  return (
    <div>
      {data.map(item => <Item key={item.id} item={item} />)}
    </div>
  );
});
\`\`\`

### 2. useMemo and useCallback Hooks

These hooks help prevent unnecessary recalculations and function recreations.

\`\`\`jsx
const MyComponent = ({ items, filter }) => {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.category === filter);
  }, [items, filter]);

  const handleClick = useCallback((id) => {
    // Handle click logic
  }, []);

  return (
    <div>
      {filteredItems.map(item => 
        <Item key={item.id} item={item} onClick={handleClick} />
      )}
    </div>
  );
};
\`\`\`

### 3. Code Splitting with React.lazy

Split your code into smaller chunks that load on demand.

\`\`\`jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## Performance Monitoring

Use React DevTools Profiler to identify performance bottlenecks in your application. Monitor component render times and identify unnecessary re-renders.

## Conclusion

Performance optimization is an ongoing process. Start with measuring, identify bottlenecks, and apply these techniques strategically. Remember, premature optimization can lead to complex code without significant benefits.
    `,
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React.js", "Performance", "Optimization"],
    excerpt:
      "Learn advanced techniques for optimizing React applications, including memoization, code splitting, and performance monitoring.",
  },
  "nextjs-app-router-guide": {
    title: "Complete Guide to Next.js App Router",
    content: `
# Complete Guide to Next.js App Router

The App Router is a new paradigm in Next.js 13+ that introduces powerful features like Server Components, streaming, and improved developer experience. Let's explore everything you need to know.

## What is the App Router?

The App Router is built on React's latest features and provides a more intuitive way to structure your Next.js applications. It uses the \`app\` directory instead of the traditional \`pages\` directory.

## Key Features

### Server Components by Default

Components in the App Router are Server Components by default, which means they run on the server and don't include JavaScript in the client bundle.

\`\`\`jsx
// This is a Server Component
export default async function Page() {
  const data = await fetch('https://api.example.com/data');
  const posts = await data.json();

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
\`\`\`

### Client Components

When you need interactivity, use the \`"use client"\` directive.

\`\`\`jsx
"use client"

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

### Layouts

Layouts are shared UI that wrap multiple pages.

\`\`\`jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>Navigation</nav>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
\`\`\`

## File-based Routing

The App Router uses file-based routing with special files:

- \`page.js\` - Creates a route
- \`layout.js\` - Creates shared UI for segments
- \`loading.js\` - Creates loading UI
- \`error.js\` - Creates error UI
- \`not-found.js\` - Creates 404 UI

## Data Fetching

Server Components can fetch data directly:

\`\`\`jsx
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export default async function Page() {
  const data = await getData();
  
  return <div>{/* Render data */}</div>;
}
\`\`\`

## Migration Tips

1. Start with new routes in the \`app\` directory
2. Gradually migrate existing pages
3. Update data fetching patterns
4. Leverage Server Components for better performance

## Conclusion

The App Router represents the future of Next.js development. It provides better performance, improved developer experience, and leverages the latest React features.
    `,
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["Next.js", "App Router", "Server Components"],
    excerpt:
      "Everything you need to know about the new App Router in Next.js 13+, including server components and streaming.",
  },
  "typescript-best-practices": {
    title: "TypeScript Best Practices for React Developers",
    content: `
# TypeScript Best Practices for React Developers

TypeScript has become essential for building maintainable React applications. Here are the best practices every React developer should follow when using TypeScript.

## Component Props Typing

Always define explicit types for your component props:

\`\`\`tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
\`\`\`

## State Typing

Use proper typing for useState hooks:

\`\`\`tsx
// Simple state
const [count, setCount] = useState<number>(0);

// Complex state
interface User {
  id: number;
  name: string;
  email: string;
}

const [user, setUser] = useState<User | null>(null);
\`\`\`

## Event Handlers

Type your event handlers correctly:

\`\`\`tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Handle form submission
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};
\`\`\`

## Generic Components

Create reusable components with generics:

\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Utility Types

Leverage TypeScript's utility types:

\`\`\`tsx
// Pick specific properties
type UserPreview = Pick<User, 'id' | 'name'>;

// Make all properties optional
type PartialUser = Partial<User>;

// Omit specific properties
type CreateUser = Omit<User, 'id'>;
\`\`\`

## Conclusion

Following these TypeScript best practices will help you build more robust and maintainable React applications. Start implementing these patterns in your projects today!
    `,
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["TypeScript", "React.js", "Best Practices"],
    excerpt: "Essential TypeScript patterns and best practices for building type-safe React applications.",
  },
}

export default function BlogPostClient({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  useEffect(() => {
    console.log("Client component mounted")
  }, [])

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <article>
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Separator />
            </header>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }} />
            </div>
          </article>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="text-muted-foreground mb-6">
              Follow me for more insights on frontend development and React.js.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline">Follow on Twitter</Button>
              <Button variant="outline">Connect on LinkedIn</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import "react"
