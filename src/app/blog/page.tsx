"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Navbar from "@/app/component/Navbar"
import Footer from "@/app/component/Footer"

const POSTS_PER_PAGE = 3
const API_URL = "http://212.38.95.69:1397/api/blogs?populate=*"
const TOKEN = `Bearer d1030419c17fe827ac35ab902188dd6675a8cbdab2fc381fc5d062e31f152b532996c7cfdb61fc137bf5e0ee2b83d6b755082064f2628254dc1292f8d5398098335927d92160226539a730695447ae904c995776cfa929cbf44cb5ec6461c0913587acc7ef03f2979b3315efb01932872928b3b5d78889c6ff9cfb1e4bde2f51`

interface ImageFormat {
    url: string
}
interface ImageFormats {
    small?: ImageFormat
    medium?: ImageFormat
    large?: ImageFormat
}
interface Thumbnail {
    url?: string
    formats?: ImageFormats
}
interface Category {
    title: string
}
interface Blog {
    id: number
    title: string
    slug: string
    smallDescription?: string
    description?: string
    thumbnail?: Thumbnail
    category?: Category
    author?: string
    readTime?: string
    publishedAt?: string
}

export default function BlogPage() {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [selectedCategory, setSelectedCategory] = useState<string>("All")
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(true)
    const [pageCount, setPageCount] = useState<number>(1)
    const [categories, setCategories] = useState<string[]>(["All"])
    const [sortOrder, setSortOrder] = useState<string>("newest")

    // ✅ Fetch blogs with all filters + sorting (Server-side)
    const fetchBlogs = async () => {
        try {
            setLoading(true)

            const categoryFilter =
                selectedCategory !== "All"
                    ? `&filters[category][title][$eq]=${encodeURIComponent(selectedCategory)}`
                    : ""

            const searchFilter = searchQuery
                ? `&filters[$or][0][title][$containsi]=${encodeURIComponent(searchQuery)}&filters[$or][1][smallDescription][$containsi]=${encodeURIComponent(searchQuery)}`
                : ""

            const sortQuery =
                sortOrder === "newest"
                    ? "&sort[0]=publishedAt:desc"
                    : sortOrder === "oldest"
                        ? "&sort[0]=publishedAt:asc"
                        : sortOrder === "a-z"
                            ? "&sort[0]=title:asc"
                            : sortOrder === "z-a"
                                ? "&sort[0]=title:desc"
                                : ""

            const res = await fetch(
                `${API_URL}${categoryFilter}${searchFilter}${sortQuery}&pagination[page]=${currentPage}&pagination[pageSize]=${POSTS_PER_PAGE}`,
                {
                    headers: { Authorization: TOKEN },
                }
            )

            const data = await res.json()
            const blogsData: Blog[] = data.data || []
            setBlogs(blogsData)
            setPageCount(data.meta?.pagination?.pageCount || 1)

            // 🏷️ Extract all categories from fetched data
            const allCats = blogsData.map((b) => b.category?.title || "Uncategorized")
            setCategories(["All", ...Array.from(new Set(allCats))])
        } catch (error) {
            console.error("Error fetching blogs:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBlogs()
    }, [currentPage, searchQuery, selectedCategory, sortOrder])

    // 🦴 Skeleton Loader
    const SkeletonCard = () => (
        <div className="animate-pulse rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-4">
            <div className="h-48 bg-white/10 mb-4 rounded-xl"></div>
            <div className="h-4 bg-white/10 mb-2 rounded w-3/4"></div>
            <div className="h-3 bg-white/10 mb-2 rounded w-1/2"></div>
            <div className="h-3 bg-white/10 rounded w-1/4"></div>
        </div>
    )

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            <Navbar />

            {/* 🧠 Hero Section */}
            <section className="py-20 relative">
                <div className="relative max-w-6xl mx-auto px-6 mt-10 md:mt-20">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Sparkles className="text-purple-400" size={20} />
                            <span className="text-purple-400 font-semibold text-sm">
                                Tech Insights & AI Stories
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Ideas, Tutorials, and Stories from Engineers Building Tomorrow
                        </h1>
                        <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
                            Explore cutting-edge insights on Web Development, AI Agents, and DevOps innovation from industry experts.
                        </p>
                    </div>

                    {/* 🔍 Search Box */}
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

            {/* 📚 Blogs Section */}
            <section>
                <div className="max-w-6xl mx-auto px-6">

                    {/* 🏷️ Category Filters */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setSelectedCategory(cat)
                                    setCurrentPage(1)
                                }}
                                className={`px-4 py-2 rounded-lg font-semibold transition ${selectedCategory === cat
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                                    : "bg-white/5 border border-white/10 text-gray-300 hover:border-purple-600"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* 🔽 Sorting Dropdown (Tailwind Styled) */}
                    <div className="flex justify-end mb-6">
                        <div className="relative inline-block">
                            <select
                                value={sortOrder}
                                onChange={(e) => {
                                    setSortOrder(e.target.value)
                                    setCurrentPage(1)
                                }}
                                className="appearance-none w-40 md:w-48 bg-gradient-to-r from-purple-900/40 via-purple-700/30 to-pink-700/30 
               border border-purple-500/20 text-gray-100 font-medium rounded-xl 
               px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/60
               hover:border-purple-400/50 shadow-[0_0_10px_rgba(168,85,247,0.2)] transition"
                            >
                                <option
                                    value="newest"
                                    className="bg-slate-900 text-gray-200 hover:bg-purple-900 focus:bg-purple-800"
                                >
                                    🕒 Newest
                                </option>
                                <option
                                    value="oldest"
                                    className="bg-slate-900 text-gray-200 hover:bg-purple-900 focus:bg-purple-800"
                                >
                                    📅 Oldest
                                </option>
                                <option
                                    value="a-z"
                                    className="bg-slate-900 text-gray-200 hover:bg-purple-900 focus:bg-purple-800"
                                >
                                    🔤 A → Z
                                </option>
                                <option
                                    value="z-a"
                                    className="bg-slate-900 text-gray-200 hover:bg-purple-900 focus:bg-purple-800"
                                >
                                    🔡 Z → A
                                </option>
                            </select>

                            {/* Custom arrow */}
                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-purple-400">
                                ▼
                            </div>
                        </div>

                    </div>

                    {/* 📰 Blog Cards */}
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {Array.from({ length: POSTS_PER_PAGE }).map((_, i) => (
                                <SkeletonCard key={i} />
                            ))}
                        </div>
                    ) : blogs.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                {blogs.map((post) => {
                                    const imageUrl =
                                        post.thumbnail?.formats?.medium?.url
                                            ? `http://212.38.95.69:1397${post.thumbnail.formats.medium.url}`
                                            : "/placeholder.svg"

                                    const category = post.category?.title || "Uncategorized"

                                    return (
                                        <Link key={post.id} href={`/blog/${post.slug}`}>
                                            <div className="group relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-purple-500/50 transition flex flex-col">
                                                <div className="relative overflow-hidden h-48">
                                                    <Image
                                                        src={imageUrl}
                                                        alt={post.title}
                                                        width={600}
                                                        height={400}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                    <div className="absolute top-3 left-3">
                                                        <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                                                            {category}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-6 flex flex-col flex-1">
                                                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 flex-1">
                                                        {post.smallDescription}
                                                    </p>
                                                    <div className="flex items-center justify-between text-xs text-gray-400">
                                                        <span>{post.author || "Anonymous"}</span>
                                                        <span>{post.readTime || "5"} min read</span>
                                                    </div>
                                                    <div className="text-xs text-gray-500 mt-2">
                                                        {post.publishedAt
                                                            ? new Date(post.publishedAt).toLocaleDateString("en-GB")
                                                            : ""}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>

                            {/* 🔢 Pagination */}
                            <div className="flex items-center justify-center gap-2">
                                <button
                                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
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
                                    onClick={() => setCurrentPage((p) => Math.min(pageCount, p + 1))}
                                    disabled={currentPage === pageCount}
                                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-300 text-lg">
                                No blog posts found. Try adjusting your search or filters.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    )
}
