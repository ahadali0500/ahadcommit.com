"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

const POSTS_PER_PAGE = 3
const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=*`
const TOKEN = `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`

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

export default function Body() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)
  const [pageCount, setPageCount] = useState<number>(1)
  const [categories, setCategories] = useState<string[]>(["All"])
  const [sortOrder, setSortOrder] = useState<string>("newest")

  const fetchBlogs = async () => {
    try {
      setLoading(true)

      const categoryFilter =
        selectedCategory !== "All"
          ? `&filters[category][title][$eq]=${encodeURIComponent(selectedCategory)}`
          : ""

      const searchFilter = searchQuery
        ? `&filters[$or][0][title][$containsi]=${encodeURIComponent(
            searchQuery
          )}&filters[$or][1][smallDescription][$containsi]=${encodeURIComponent(searchQuery)}`
        : ""

      const sortQuery =
        sortOrder === "newest"
          ? "&sort[0]=publishedAt:desc"
          : sortOrder === "oldest"
          ? "&sort[0]=publishedAt:asc"
          : sortOrder === "a-z"
          ? "&sort[0]=title:asc"
          : "&sort[0]=title:desc"

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

  const SkeletonCard = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="animate-pulse rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-4"
    >
      <div className="h-48 bg-white/10 mb-4 rounded-xl"></div>
      <div className="h-4 bg-white/10 mb-2 rounded w-3/4"></div>
      <div className="h-3 bg-white/10 mb-2 rounded w-1/2"></div>
      <div className="h-3 bg-white/10 rounded w-1/4"></div>
    </motion.div>
  )

  return (
    <>
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
              Tech Insights, Tutorials & Dev Stories
            </h1>
            <p className="text-gray-300 text-sm md:text-lg">
              Welcome to my blog where I share lessons, experiments, and insights from my journey
              as a software developer.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
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

      {/* Blogs */}
      <section>
        <div className="max-w-6xl mx-auto px-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setCurrentPage(1)
                }}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white shadow"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:border-purple-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sorting */}
          <div className="flex justify-end mb-6">
            <div className="relative inline-block">
              <select
                value={sortOrder}
                onChange={(e) => {
                  setSortOrder(e.target.value)
                  setCurrentPage(1)
                }}
                className="appearance-none w-48 bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 font-medium rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/60 transition"
              >
                <option value="newest">🕒 Newest</option>
                <option value="oldest">📅 Oldest</option>
                <option value="a-z">🔤 A → Z</option>
                <option value="z-a">🔡 Z → A</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-purple-400">
                ▼
              </div>
            </div>
          </div>

          {/* Cards */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {Array.from({ length: POSTS_PER_PAGE }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : blogs.length > 0 ? (
            <>
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
              >
                <AnimatePresence>
                  {blogs.map((post) => {
                    const imageUrl =
                      post.thumbnail?.formats?.medium?.url
                        ? `${process.env.NEXT_PUBLIC_API_URL}/${post.thumbnail.formats.medium.url}`
                        : "/placeholder.svg"
                    const category = post.category?.title || "Uncategorized"

                    return (
                      <motion.div
                        key={post.id}
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Link href={`/blog/${post.slug}`}>
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
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </motion.div>

              {/* Pagination */}
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
                    className={`w-10 h-10 rounded-lg font-semibold transition ${
                      currentPage === page
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
    </>
  )
}
