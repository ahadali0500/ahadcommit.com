import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin } from "lucide-react";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

// Blog types
interface BlogThumbnail {
  url: string;
  alternativeText?: string;
  formats?: { large?: { url: string } };
}

interface BlogTag {
  slug: string;
}

interface BlogPost {
  title: string;
  descrption: string;
  thumbnail?: BlogThumbnail;
  createdAt: string;
  readTime: number;
  tags?: BlogTag[];
}

// Async function to fetch blog
async function getBlog(slug: string): Promise<BlogPost | null> {
  const res = await fetch(
    `http://212.38.95.69:1397/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
    {
      headers: {
        Authorization:
          "Bearer d1030419c17fe827ac35ab902188dd6675a8cbdab2fc381fc5d062e31f152b532996c7cfdb61fc137bf5e0ee2b83d6b755082064f2628254dc1292f8d5398098335927d92160226539a730695447ae904c995776cfa929cbf44cb5ec6461c0913587acc7ef03f2979b3315efb01932872928b3b5d78889c6ff9cfb1e4bde2f51",
      },
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();
  return data?.data?.[0] ?? null;
}

// Page component
export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlog(slug);

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
    );
  }

  const thumbnailUrl =
    post.thumbnail?.formats?.large?.url || post.thumbnail?.url || "/placeholder.svg";
  const thumbnailAlt = post.thumbnail?.alternativeText || "Blog Thumbnail";

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />

      <article className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Article Content */}
            <div className="lg:col-span-2">
              <header className="mb-12">
                <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
                <Image
                  src={`http://212.38.95.69:1397${thumbnailUrl}`}
                  alt={thumbnailAlt}
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-2xl shadow-purple-600/20 border border-white/10 object-cover mb-4"
                />
                <div className="flex flex-wrap gap-6 text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    <span>Admin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </header>

              <div className="prose prose-invert max-w-none text-gray-300 leading-8 mb-8">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.descrption}</ReactMarkdown>
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {post.tags?.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-600/20 border border-purple-600/50 text-purple-300 text-sm rounded-full"
                  >
                    #{t.slug}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-gray-400">Share this post:</span>
                <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">About Author</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">Admin</p>
                    <p className="text-xs text-gray-400">Web Developer</p>
                  </div>
                </div>
                <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:border-purple-600/50 hover:bg-white/10 transition w-full justify-center">
                  <Linkedin size={18} /> Connect
                </button>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
