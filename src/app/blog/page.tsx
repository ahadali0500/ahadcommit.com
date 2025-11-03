"use client"
import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Navbar from "@/app/component/Navbar"
import Footer from "@/app/component/Footer"

const blogPosts = [
    {
        id: 1,
        slug: "nextjs-15-features",
        title: "Next.js 15: The Future of Web Development",
        excerpt:
            "Explore the latest features in Next.js 15 including improved performance, new routing capabilities, and enhanced developer experience.",
        category: "Web Dev",
        author: "John Doe",
        date: "2025-01-15",
        image: "/blog-nextjs-15.jpg",
        readTime: 8,
    },
    {
        id: 2,
        slug: "ai-agents-automation",
        title: "Building AI Agents for Business Automation",
        excerpt:
            "Learn how to create intelligent AI agents that can automate complex business processes and improve operational efficiency.",
        category: "AI",
        author: "Jane Smith",
        date: "2025-01-12",
        image: "/blog-ai-agents.jpg",
        readTime: 12,
    },
    {
        id: 3,
        slug: "devops-best-practices",
        title: "DevOps Best Practices for 2025",
        excerpt:
            "Discover the essential DevOps practices that will help you build, deploy, and maintain applications more efficiently.",
        category: "DevOps",
        author: "Mike Johnson",
        date: "2025-01-10",
        image: "/blog-devops.jpg",
        readTime: 10,
    },
    {
        id: 4,
        slug: "react-performance-optimization",
        title: "React Performance Optimization Techniques",
        excerpt:
            "Master advanced React optimization techniques to build faster, more responsive applications that users will love.",
        category: "Web Dev",
        author: "Sarah Williams",
        date: "2025-01-08",
        image: "/blog-react-performance.jpg",
        readTime: 9,
    },
    {
        id: 5,
        slug: "kubernetes-scaling",
        title: "Kubernetes: Scaling Applications at Scale",
        excerpt:
            "Understand how to use Kubernetes to scale your applications efficiently and manage containerized workloads.",
        category: "DevOps",
        author: "Tom Brown",
        date: "2025-01-05",
        image: "/blog-kubernetes.jpg",
        readTime: 11,
    },
    {
        id: 6,
        slug: "web3-integration",
        title: "Integrating Web3 into Your Applications",
        excerpt: "A comprehensive guide to integrating blockchain and Web3 technologies into modern web applications.",
        category: "Web Dev",
        author: "Alex Chen",
        date: "2025-01-02",
        image: "/blog-web3.jpg",
        readTime: 13,
    },
    {
        id: 7,
        slug: "machine-learning-basics",
        title: "Machine Learning Basics for Web Developers",
        excerpt: "Get started with machine learning and learn how to integrate ML models into your web applications.",
        category: "AI",
        author: "Emma Davis",
        date: "2024-12-28",
        image: "/blog-ml-basics.jpg",
        readTime: 14,
    },
    {
        id: 8,
        slug: "cloud-migration-guide",
        title: "Complete Guide to Cloud Migration",
        excerpt: "Learn the step-by-step process of migrating your applications and infrastructure to the cloud.",
        category: "DevOps",
        author: "Robert Wilson",
        date: "2024-12-25",
        image: "/blog-cloud-migration.jpg",
        readTime: 15,
    },
    {
        id: 9,
        slug: "typescript-advanced",
        title: "Advanced TypeScript Patterns",
        excerpt: "Explore advanced TypeScript patterns and techniques to write more robust and maintainable code.",
        category: "Web Dev",
        author: "Lisa Anderson",
        date: "2024-12-22",
        image: "/blog-typescript.jpg",
        readTime: 10,
    },
]

const POSTS_PER_PAGE = 6

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [currentPage, setCurrentPage] = useState(1)

    const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))]

    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchesSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
            return matchesSearch && matchesCategory
        })
    }, [searchQuery, selectedCategory])

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
    const paginatedPosts = filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            <Navbar />
            <section className="relative py-20 overflow-hidden">
                {/* <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-transparent" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" /> */}

                <div className="relative max-w-6xl mx-auto px-6 mt-10 md:mt-20">

                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Sparkles className="text-purple-400" size={20} />
                            <span className="text-purple-400 font-semibold text-sm">Tech Insights & AI Stories</span>
                        </div>
                        <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Ideas, Tutorials, and Stories from Engineers Building Tomorrow</h1>
                        <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">Explore cutting-edge insights on Web Development, AI Agents, and DevOps innovation from industry experts.</p>
                    </div>


                    <div className="max-w-2xl mx-auto">
                        <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search blog posts..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value)
                                    setCurrentPage(1)
                                }}
                                className="w-full pl-12 pr-4 py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-wrap gap-3 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setSelectedCategory(cat)
                                    setCurrentPage(1)
                                }}
                                className={`px-4 py-2 rounded-lg font-semibold transition ${selectedCategory === cat
                                    ? "bg-purple-600 text-white"
                                    : "bg-white/5 border border-white/10 text-gray-300 hover:border-purple-600"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {paginatedPosts.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                {paginatedPosts.map((post) => (
                                    <Link key={post.id} href={`/blog/${post.slug}`}>
                                        <div className="group relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10  hover:border-purple-500/50 transition h-full flex flex-col">
                                            <div className="relative overflow-hidden h-48">
                                                <img
                                                    src={post.image || "/placeholder.svg"}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                                <div className="absolute top-3 left-3">
                                                    <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <p className="text-gray-300 text-sm mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
                                                <div className="flex items-center justify-between text-xs text-gray-400">
                                                    <span>{post.author}</span>
                                                    <span>{post.readTime} min read</span>
                                                </div>
                                                <div className="text-xs text-gray-500 mt-2">{new Date(post.date).toLocaleDateString()}</div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2">
                                    <button
                                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`w-10 h-10 rounded-lg font-semibold transition ${currentPage === page
                                                ? "bg-purple-600 text-white"
                                                : "bg-white/5 border border-white/10 text-gray-300 hover:border-purple-600"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-300 text-lg">No blog posts found. Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    )
}
