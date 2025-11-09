import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Copy } from "lucide-react";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import CopyButton from "@/app/component/CopyButton";

interface BlogThumbnail {
  url: string;
  alternativeText?: string;
  formats?: { large?: { url: string } };
}

interface BlogTag {
  slug: string;
}

interface BlogCategory {
  title: string;
}

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  descrption: string;
  thumbnail?: BlogThumbnail;
  createdAt: string;
  readTime: number;
  tags?: BlogTag[];
  category?: BlogCategory;
}

// 🪣 Fetchers
async function getBlog(slug: string): Promise<BlogPost | null> {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (!token) throw new Error("NEXT_PUBLIC_TOKEN is not defined");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const data = await res.json();
  if (!data?.data || data.data.length === 0) return null;
  return data.data[0];
}

async function getRelatedPosts(category: string, excludeSlug: string): Promise<BlogPost[]> {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (!token) throw new Error("NEXT_PUBLIC_TOKEN is not defined");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?filters[category][title][$eq]=${encodeURIComponent(
      category
    )}&filters[slug][$ne]=${excludeSlug}&pagination[limit]=3&populate=*`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const data = await res.json();
  return data?.data ?? [];
}

// ✨ Single Page Component
export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  const post = await getBlog(slug);
  if (!post)
    return (
      <div className="min-h-screen bg-[#0c1115] flex items-center justify-center text-white text-3xl">
        Blog Not Found
      </div>
    );

  const relatedPosts = post.category?.title
    ? await getRelatedPosts(post.category.title, post.slug)
    : [];

  const thumbnailUrl = post.thumbnail?.formats?.large?.url || post.thumbnail?.url || "/placeholder.svg";
  const shareUrl = `${process.env.NEXT_PUBLIC_API_URL}/blog/${post.slug}`;

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " " + shareUrl)}`,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />

      <article className="py-12 max-w-7xl mx-auto px-6 mt-20">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition"
        >
          <ArrowLeft size={20} /> Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <div className="lg:col-span-2">
            <header className="mb-12">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">{post.title}</h1>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${thumbnailUrl}`}
                alt={post.thumbnail?.alternativeText || post.title}
                width={1200}
                height={600}
                className="w-full h-auto rounded-xl shadow-2xl shadow-purple-600/20 border border-white/10 object-cover mb-4"
              />
              <div className="flex flex-wrap gap-6 text-gray-400 mb-6">
                <div className="flex items-center gap-2"><User size={18} /> Ahad Ali</div>
                <div className="flex items-center gap-2"><Calendar size={18} /> {new Date(post.createdAt).toLocaleDateString()}</div>
                <div className="flex items-center gap-2"><Clock size={18} /> {post.readTime} min read</div>
              </div>
            </header>

            <div className="prose prose-invert max-w-none text-gray-300 leading-8 mb-8">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.descrption}</ReactMarkdown>
            </div>

            {/* Tags */}
            {post.tags?.length && (
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {post.tags.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-600/20 border border-purple-600/50 text-purple-300 text-sm rounded-full"
                  >
                    #{t.slug}
                  </span>
                ))}
              </div>
            )}

            {/* Share Section */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
              <span className="text-gray-400">Share this post:</span>
              <Link href={shareLinks.linkedin} target="_blank" className="share-btn"><Linkedin size={18} /></Link>
              <Link href={shareLinks.twitter} target="_blank" className="share-btn"><Twitter size={18} /></Link>
              <Link href={shareLinks.whatsapp} target="_blank" className="share-btn"><FaWhatsapp size={18} /></Link>
              <CopyButton text={shareUrl} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Author */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">About Author</h3>
              <div className="flex items-center gap-3">
                {/* Author Image */}
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/assets/img/Ahad Ali Software Developer.jpg"
                    alt="Ahad Ali"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Author Info */}
                <div>
                  <p className="font-semibold text-white">Ahad Ali</p>
                  <p className="text-sm text-gray-400">Software Developer | DevOps Engineer</p>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <SocialLink
                  href="https://linkedin.com/in/ahadcommit"
                  icon={<FaLinkedinIn />}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-blue-600 transition-colors"
                />
                <SocialLink
                  href="https://github.com/ahadali0500"
                  icon={<FaGithub />}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-black transition-colors"
                />
                <SocialLink
                  href="https://wa.me/+923256234131"
                  icon={<FaWhatsapp />}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-green-500 transition-colors"
                />
                <SocialLink
                  href="https://www.youtube.com/@ahadcommit"
                  icon={<FaYoutube />}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-red-600 transition-colors"
                />
              </div>


            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((r) => {
                    const rThumb = r.thumbnail?.formats?.large?.url || r.thumbnail?.url || "/placeholder.svg";
                    return (
                      <Link key={r.id} href={`/blog/${r.slug}`} className="group flex gap-3 hover:bg-white/5 rounded-lg p-2 transition">
                        <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}${rThumb}`}
                            alt={r.title}
                            width={80}
                            height={60}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-purple-400">{r.title}</h4>
                          <p className="text-xs text-gray-400 mt-1">{new Date(r.createdAt).toLocaleDateString()}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>
        </div>
      </article>

      <Footer />
    </div>
  );
}



function SocialLink({ href, icon }: any) {
  return (
    <a
      href={href}
      target="_blank"
      className="w-10 h-10 flex items-center justify-center bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 rounded-3xl transition-all hover:shadow-lg "
    >
      {icon}
    </a>
  )
}


import { Metadata } from "next";

export async function generateMetadata({   params,
}: {
  params: Promise<{ slug: string }>
}) {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const data = await res.json();
  const post = data?.data?.[0];

  if (!post) {
    return {
      title: "Blog Not Found",
      description: "The blog post you are looking for does not exist.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const thumbnailUrl = post.thumbnail?.formats?.large?.url || post.thumbnail?.url || "/placeholder.svg";
  const shareUrl = `${process.env.NEXT_PUBLIC_API_URL}/blog/${post.slug}`;
  const keywords = post.tags?.map((t: string) => t).join(", ") || "blog, article, software, devops";

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [`${process.env.NEXT_PUBLIC_API_URL}${thumbnailUrl}`],
    "author": {
      "@type": "Person",
      "name": "Ahad Ali"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ahad Ali Blog",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_API_URL}/assets/img/Ahad Ali Software Developer.jpg`
      }
    },
    "datePublished": post.createdAt,
    "dateModified": post.updatedAt,
    "description": post.metaDescription || post.descrption.slice(0, 150),
    "mainEntityOfPage": shareUrl
  };

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.descrption.slice(0, 150),
    keywords,
    alternates: {
      canonical: shareUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.descrption.slice(0, 150),
      url: shareUrl,
      siteName: "Ahad Ali Blog",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_URL}${thumbnailUrl}`,
          width: 1200,
          height: 600,
        },
      ],
      type: "article",
      publishedTime: post.createdAt,
      authors: ["Ahad Ali"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.descrption.slice(0, 150),
      images: [`${process.env.NEXT_PUBLIC_API_URL}${thumbnailUrl}`],
      creator: "@ahadcommit",
    },
    icons: {
      icon: "/favicon.ico",
    },
    // Add JSON-LD structured data to page
    metadataBase: new URL(process.env.NEXT_PUBLIC_API_URL || "https://ahadcommit.com"),
    other: {
      "application/ld+json": JSON.stringify(jsonLd),
    },
  };
}
