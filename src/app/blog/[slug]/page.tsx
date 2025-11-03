"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, Share2, MessageCircle, Send, Linkedin } from "lucide-react"
import { useState } from "react"
import Navbar from "@/app/component/Navbar"
import Footer from "@/app/component/Footer"

const blogContent: Record<
  string,
  {
    title: string
    author: string
    date: string
    category: string
    readTime: number
    image: string
    content: string
    tags: string[]
    relatedPosts: Array<{ slug: string; title: string; image: string; category: string }>
  }
> = {
  "nextjs-15-features": {
    title: "Next.js 15: The Future of Web Development",
    author: "John Doe",
    date: "2025-01-15",
    category: "Web Dev",
    readTime: 8,
    image: "/blog-nextjs-15.jpg",
    content: `
      <h2>Introduction</h2>
      <p>Next.js 15 brings revolutionary changes to the world of web development. With improved performance, new routing capabilities, and enhanced developer experience, it's set to become the go-to framework for building modern web applications.</p>

      <h2>Key Features</h2>
      <h3>1. Enhanced Performance</h3>
      <p>Next.js 15 introduces significant performance improvements with optimized bundling and faster build times. The new compiler reduces bundle size by up to 40% compared to previous versions.</p>

      <h3>2. Improved Routing</h3>
      <p>The new routing system provides better control over dynamic routes and improved type safety. Developers can now define routes with full TypeScript support.</p>

      <h3>3. Server Components</h3>
      <p>Server Components are now the default, allowing developers to write less client-side JavaScript and improve performance automatically.</p>

      <h2>Migration Guide</h2>
      <p>Migrating to Next.js 15 is straightforward. Most existing applications will work without changes, but we recommend reviewing the migration guide for optimal results.</p>

      <h2>Conclusion</h2>
      <p>Next.js 15 represents a significant step forward in web development. With its focus on performance and developer experience, it's an excellent choice for new and existing projects.</p>
    `,
    tags: ["Next.js", "React", "Web Development", "Performance"],
    relatedPosts: [
      {
        slug: "react-performance-optimization",
        title: "React Performance Optimization",
        image: "/blog-react-performance.jpg",
        category: "Web Dev",
      },
      {
        slug: "typescript-advanced",
        title: "Advanced TypeScript Patterns",
        image: "/blog-typescript.jpg",
        category: "Web Dev",
      },
    ],
  },
  "ai-agents-automation": {
    title: "Building AI Agents for Business Automation",
    author: "Jane Smith",
    date: "2025-01-12",
    category: "AI",
    readTime: 12,
    image: "/blog-ai-agents.jpg",
    content: `
      <h2>What are AI Agents?</h2>
      <p>AI Agents are autonomous systems that can perceive their environment, make decisions, and take actions to achieve specific goals. They're revolutionizing how businesses automate complex processes.</p>

      <h2>Building Your First AI Agent</h2>
      <h3>Step 1: Define the Goal</h3>
      <p>Start by clearly defining what you want your AI agent to accomplish. This could be customer support, data analysis, or process automation.</p>

      <h3>Step 2: Choose Your Tools</h3>
      <p>Select appropriate AI models and frameworks. Popular choices include OpenAI's GPT models, LangChain, and n8n for orchestration.</p>

      <h3>Step 3: Train and Test</h3>
      <p>Train your agent with relevant data and thoroughly test it in various scenarios before deployment.</p>

      <h2>Real-World Applications</h2>
      <p>AI agents are being used for customer service, data processing, content generation, and much more. The possibilities are endless.</p>

      <h2>Best Practices</h2>
      <p>Always monitor your AI agents, implement proper error handling, and continuously improve them based on feedback and performance metrics.</p>
    `,
    tags: ["AI", "Automation", "Machine Learning", "Business"],
    relatedPosts: [
      {
        slug: "machine-learning-basics",
        title: "Machine Learning Basics",
        image: "/blog-ml-basics.jpg",
        category: "AI",
      },
      { slug: "web3-integration", title: "Web3 Integration", image: "/blog-web3.jpg", category: "Web Dev" },
    ],
  },
  "devops-best-practices": {
    title: "DevOps Best Practices for 2025",
    author: "Mike Johnson",
    date: "2025-01-10",
    category: "DevOps",
    readTime: 10,
    image: "/blog-devops.jpg",
    content: `
      <h2>Introduction to DevOps</h2>
      <p>DevOps is a set of practices that combines software development and IT operations. It aims to shorten the development lifecycle and provide continuous delivery.</p>

      <h2>Essential DevOps Practices</h2>
      <h3>1. Continuous Integration</h3>
      <p>Implement CI to automatically test and build code changes. This catches issues early and improves code quality.</p>

      <h3>2. Continuous Deployment</h3>
      <p>Automate the deployment process to reduce manual errors and speed up releases.</p>

      <h3>3. Infrastructure as Code</h3>
      <p>Manage your infrastructure using code, making it version-controlled and reproducible.</p>

      <h2>Tools and Technologies</h2>
      <p>Popular DevOps tools include Docker, Kubernetes, Jenkins, GitLab CI, and Terraform. Choose tools that fit your team's needs.</p>

      <h2>Monitoring and Logging</h2>
      <p>Implement comprehensive monitoring and logging to track application performance and quickly identify issues.</p>
    `,
    tags: ["DevOps", "CI/CD", "Infrastructure", "Automation"],
    relatedPosts: [
      { slug: "kubernetes-scaling", title: "Kubernetes Scaling", image: "/blog-kubernetes.jpg", category: "DevOps" },
      {
        slug: "cloud-migration-guide",
        title: "Cloud Migration Guide",
        image: "/blog-cloud-migration.jpg",
        category: "DevOps",
      },
    ],
  },
  "react-performance-optimization": {
    title: "React Performance Optimization Techniques",
    author: "Sarah Williams",
    date: "2025-01-08",
    category: "Web Dev",
    readTime: 9,
    image: "/blog-react-performance.jpg",
    content: `
      <h2>Why Performance Matters</h2>
      <p>React applications can become slow if not optimized properly. Performance optimization is crucial for user experience and SEO.</p>

      <h2>Key Optimization Techniques</h2>
      <h3>1. Code Splitting</h3>
      <p>Split your code into smaller chunks that are loaded on demand. This reduces initial load time significantly.</p>

      <h3>2. Memoization</h3>
      <p>Use React.memo and useMemo to prevent unnecessary re-renders and improve performance.</p>

      <h3>3. Lazy Loading</h3>
      <p>Implement lazy loading for images and components to improve initial page load time.</p>

      <h2>Profiling and Monitoring</h2>
      <p>Use React DevTools and Chrome DevTools to profile your application and identify performance bottlenecks.</p>

      <h2>Best Practices</h2>
      <p>Always measure performance, optimize based on data, and continuously monitor your application in production.</p>
    `,
    tags: ["React", "Performance", "Optimization", "JavaScript"],
    relatedPosts: [
      { slug: "nextjs-15-features", title: "Next.js 15 Features", image: "/blog-nextjs-15.jpg", category: "Web Dev" },
      { slug: "typescript-advanced", title: "Advanced TypeScript", image: "/blog-typescript.jpg", category: "Web Dev" },
    ],
  },
  "kubernetes-scaling": {
    title: "Kubernetes: Scaling Applications at Scale",
    author: "Tom Brown",
    date: "2025-01-05",
    category: "DevOps",
    readTime: 11,
    image: "/blog-kubernetes.jpg",
    content: `
      <h2>What is Kubernetes?</h2>
      <p>Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.</p>

      <h2>Core Concepts</h2>
      <h3>Pods</h3>
      <p>Pods are the smallest deployable units in Kubernetes. They can contain one or more containers.</p>

      <h3>Services</h3>
      <p>Services expose your pods to the network and provide load balancing.</p>

      <h3>Deployments</h3>
      <p>Deployments manage the desired state of your pods and handle updates and rollbacks.</p>

      <h2>Scaling Strategies</h2>
      <p>Kubernetes provides horizontal and vertical scaling options. Horizontal Pod Autoscaler (HPA) automatically scales your pods based on metrics.</p>

      <h2>Best Practices</h2>
      <p>Use resource requests and limits, implement health checks, and monitor your cluster continuously.</p>
    `,
    tags: ["Kubernetes", "DevOps", "Containers", "Scaling"],
    relatedPosts: [
      { slug: "devops-best-practices", title: "DevOps Best Practices", image: "/blog-devops.jpg", category: "DevOps" },
      {
        slug: "cloud-migration-guide",
        title: "Cloud Migration",
        image: "/blog-cloud-migration.jpg",
        category: "DevOps",
      },
    ],
  },
  "web3-integration": {
    title: "Integrating Web3 into Your Applications",
    author: "Alex Chen",
    date: "2025-01-02",
    category: "Web Dev",
    readTime: 13,
    image: "/blog-web3.jpg",
    content: `
      <h2>Understanding Web3</h2>
      <p>Web3 represents the next evolution of the internet, built on blockchain technology and decentralized protocols.</p>

      <h2>Getting Started with Web3</h2>
      <h3>Smart Contracts</h3>
      <p>Smart contracts are self-executing contracts with terms written in code. They run on blockchain networks like Ethereum.</p>

      <h3>Wallets</h3>
      <p>Wallets are essential for Web3 applications. They manage user identities and transactions.</p>

      <h2>Integration Steps</h2>
      <p>To integrate Web3 into your application, you'll need to connect to a blockchain network, implement wallet integration, and interact with smart contracts.</p>

      <h2>Popular Libraries</h2>
      <p>Web3.js, Ethers.js, and Wagmi are popular libraries for Web3 development in JavaScript.</p>
    `,
    tags: ["Web3", "Blockchain", "Ethereum", "Smart Contracts"],
    relatedPosts: [
      { slug: "nextjs-15-features", title: "Next.js 15", image: "/blog-nextjs-15.jpg", category: "Web Dev" },
      { slug: "typescript-advanced", title: "TypeScript Advanced", image: "/blog-typescript.jpg", category: "Web Dev" },
    ],
  },
  "machine-learning-basics": {
    title: "Machine Learning Basics for Web Developers",
    author: "Emma Davis",
    date: "2024-12-28",
    category: "AI",
    readTime: 14,
    image: "/blog-ml-basics.jpg",
    content: `
      <h2>Introduction to Machine Learning</h2>
      <p>Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.</p>

      <h2>Types of Machine Learning</h2>
      <h3>Supervised Learning</h3>
      <p>In supervised learning, models are trained on labeled data. Common applications include classification and regression.</p>

      <h3>Unsupervised Learning</h3>
      <p>Unsupervised learning works with unlabeled data to discover patterns and structures.</p>

      <h2>ML for Web Developers</h2>
      <p>TensorFlow.js and ML.js allow web developers to run machine learning models directly in the browser.</p>

      <h2>Practical Applications</h2>
      <p>ML can be used for recommendation systems, image recognition, natural language processing, and much more.</p>
    `,
    tags: ["Machine Learning", "AI", "TensorFlow", "JavaScript"],
    relatedPosts: [
      { slug: "ai-agents-automation", title: "AI Agents", image: "/blog-ai-agents.jpg", category: "AI" },
      { slug: "web3-integration", title: "Web3 Integration", image: "/blog-web3.jpg", category: "Web Dev" },
    ],
  },
  "cloud-migration-guide": {
    title: "Complete Guide to Cloud Migration",
    author: "Robert Wilson",
    date: "2024-12-25",
    category: "DevOps",
    readTime: 15,
    image: "/blog-cloud-migration.jpg",
    content: `
      <h2>Why Migrate to the Cloud?</h2>
      <p>Cloud migration offers scalability, cost savings, improved security, and better disaster recovery capabilities.</p>

      <h2>Migration Strategies</h2>
      <h3>Lift and Shift</h3>
      <p>Move applications as-is to the cloud. Quick but may not leverage cloud benefits fully.</p>

      <h3>Replatform</h3>
      <p>Make minimal optimizations while moving to the cloud.</p>

      <h3>Refactor</h3>
      <p>Redesign applications to fully leverage cloud-native capabilities.</p>

      <h2>Migration Steps</h2>
      <p>Assess your current infrastructure, plan the migration, execute in phases, and monitor continuously.</p>

      <h2>Common Challenges</h2>
      <p>Data migration, downtime management, and cost optimization are common challenges. Plan accordingly.</p>
    `,
    tags: ["Cloud", "Migration", "DevOps", "Infrastructure"],
    relatedPosts: [
      { slug: "kubernetes-scaling", title: "Kubernetes Scaling", image: "/blog-kubernetes.jpg", category: "DevOps" },
      { slug: "devops-best-practices", title: "DevOps Best Practices", image: "/blog-devops.jpg", category: "DevOps" },
    ],
  },
  "typescript-advanced": {
    title: "Advanced TypeScript Patterns",
    author: "Lisa Anderson",
    date: "2024-12-22",
    category: "Web Dev",
    readTime: 10,
    image: "/blog-typescript.jpg",
    content: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds static typing to JavaScript, catching errors at compile time and improving code quality.</p>

      <h2>Advanced Patterns</h2>
      <h3>Generics</h3>
      <p>Generics allow you to write reusable code that works with multiple types while maintaining type safety.</p>

      <h3>Utility Types</h3>
      <p>TypeScript provides utility types like Partial, Pick, and Omit to manipulate types effectively.</p>

      <h3>Decorators</h3>
      <p>Decorators allow you to annotate and modify classes and properties at design time.</p>

      <h2>Best Practices</h2>
      <p>Use strict mode, avoid any types, and leverage TypeScript's type system fully for maximum benefits.</p>

      <h2>Performance Tips</h2>
      <p>Optimize your TypeScript configuration and use incremental compilation for faster builds.</p>
    `,
    tags: ["TypeScript", "JavaScript", "Web Development", "Programming"],
    relatedPosts: [
      { slug: "nextjs-15-features", title: "Next.js 15", image: "/blog-nextjs-15.jpg", category: "Web Dev" },
      {
        slug: "react-performance-optimization",
        title: "React Performance",
        image: "/blog-react-performance.jpg",
        category: "Web Dev",
      },
    ],
  },
}

export default function BlogDetail() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogContent[slug]
  const [comments, setComments] = useState<Array<{ name: string; text: string }>>([])
  const [commentName, setCommentName] = useState("")
  const [commentText, setCommentText] = useState("")

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0c1115] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="text-purple-500 hover:text-purple-400">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const handleAddComment = () => {
    if (commentName.trim() && commentText.trim()) {
      setComments([...comments, { name: commentName, text: commentText }])
      setCommentName("")
      setCommentText("")
    }
  }

  return (
    <main className="bg-[#0c1115] min-h-screen">
      <Navbar />

      <article className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/blog" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Article Content - 70% */}
            <div className="lg:col-span-2">
              <header className="mb-12">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-purple-600/20 border border-purple-600/50 text-purple-300 text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
                <h1 className="text-5xl font-bold text-white mb-6 text-balance leading-tight">{post.title}</h1>

                <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>

                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full rounded-xl shadow-2xl shadow-purple-600/20 border border-white/10"
                />
              </header>

              <div
                className="prose prose-invert max-w-none text-gray-300 leading-8 mb-12"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-white mt-10 mb-6 text-balance">')
                    .replace(/<h3>/g, '<h3 class="text-2xl font-bold text-white mt-8 mb-4">')
                    .replace(/<p>/g, '<p class="mb-6 text-gray-300 leading-8">'),
                }}
              />

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-600/20 border border-purple-600/50 text-purple-300 text-sm rounded-full hover:border-purple-600 transition"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-gray-400">Share this post:</span>
                  <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-purple-600/50 hover:bg-white/10 transition">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                  <MessageCircle size={24} />
                  Comments ({comments.length})
                </h3>

                <div className="mb-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    className="w-full mb-4 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-600/50 transition"
                  />
                  <textarea
                    placeholder="Share your thoughts..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    rows={4}
                    className="w-full mb-4 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-600/50 transition resize-none"
                  />
                  <button
                    onClick={handleAddComment}
                    className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition"
                  >
                    <Send size={18} />
                    Post Comment
                  </button>
                </div>

                <div className="space-y-4">
                  {comments.map((comment, idx) => (
                    <div key={idx} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6">
                      <p className="font-semibold text-white mb-2">{comment.name}</p>
                      <p className="text-gray-300">{comment.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-white/10">
                <div className="backdrop-blur-md bg-gradient-to-r from-purple-600/20 to-transparent border border-purple-600/30 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">Want to build something intelligent?</h3>
                  <p className="text-gray-300 mb-6">Let's discuss how we can help you with your next project.</p>
                  <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition">
                    Book a Free Consultation
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar - 30% */}
            <aside className="lg:col-span-1">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Popular Blogs</h3>
                <div className="space-y-4">
                  {post.relatedPosts.map((related) => (
                    <Link key={related.slug} href={`/blog/${related.slug}`}>
                      <div className="group cursor-pointer">
                        <img
                          src={related.image || "/placeholder.svg"}
                          alt={related.title}
                          className="w-full h-24 object-cover rounded-lg mb-2 group-hover:opacity-80 transition"
                        />
                        <p className="text-sm font-semibold text-white group-hover:text-purple-400 transition line-clamp-2">
                          {related.title}
                        </p>
                        <span className="text-xs text-purple-400">{related.category}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-center gap-2 hover:text-purple-400 transition">
                    <span className="text-purple-400">→</span>
                    <Link href="/services/custom-web-development">Web Development</Link>
                  </li>
                  <li className="flex items-center gap-2 hover:text-purple-400 transition">
                    <span className="text-purple-400">→</span>
                    <Link href="/services/ci-cd-automation">DevOps Solutions</Link>
                  </li>
                  <li className="flex items-center gap-2 hover:text-purple-400 transition">
                    <span className="text-purple-400">→</span>
                    <Link href="/services/ai-agents-automation">AI Automation</Link>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">About the Author</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white font-bold text-lg">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{post.author}</p>
                    <p className="text-sm text-gray-400">Tech Writer & Developer</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Passionate about sharing knowledge and helping developers stay updated with the latest technologies.
                </p>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:border-purple-600/50 hover:bg-white/10 transition w-full justify-center">
                  <Linkedin size={18} />
                  Connect
                </button>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
