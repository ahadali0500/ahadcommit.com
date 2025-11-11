import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock, Linkedin, Twitter } from "lucide-react";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import CopyButton from "@/app/component/CopyButton";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

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
    {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store'
    }
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

// Helper function to extract headings from markdown
function extractHeadings(markdown: string) {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    headings.push({ level, text, id });
  }

  return headings;
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

  // Extract headings for table of contents
  const headings = extractHeadings(post.descrption);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " " + shareUrl)}`,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Add global styles for markdown content */}
      <style dangerouslySetInnerHTML={{
        __html: `
          html {
            scroll-behavior: smooth;
          }
          .markdown-body {
            color: #d1d5db;
            line-height: 1.7;
            font-size: 1rem;
          }
          .markdown-body h1 {
            color: #ffffff;
            font-size: 1.75rem;
            font-weight: 700;
            margin-top: 2rem;
            margin-bottom: 1rem;
            scroll-margin-top: 100px;
          }
          .markdown-body h2 {
            color: #ffffff;
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 1.75rem;
            margin-bottom: 0.75rem;
            padding-bottom: 0.4rem;
            border-bottom: 1px solid rgba(168, 85, 247, 0.3);
            scroll-margin-top: 100px;
          }
          .markdown-body h3 {
            color: #ffffff;
            font-size: 1.25rem;
            font-weight: 600;
            margin-top: 1.5rem;
            margin-bottom: 0.6rem;
            scroll-margin-top: 100px;
          }
          .markdown-body h4 {
            color: #ffffff;
            font-size: 1.1rem;
            font-weight: 600;
            margin-top: 1.25rem;
            margin-bottom: 0.5rem;
            scroll-margin-top: 100px;
          }
          .markdown-body p {
            margin-bottom: 0.875rem;
            color: #d1d5db;
            font-size: 1rem;
          }
          .markdown-body pre {
            background-color: #111827 !important;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 0.5rem;
            padding: 0.875rem;
            overflow-x: auto;
            margin: 1.25rem 0;
            font-size: 0.875rem;
          }
          .markdown-body code {
            background-color: rgba(168, 85, 247, 0.15);
            color: #c084fc;
            padding: 0.125rem 0.3rem;
            border-radius: 0.25rem;
            font-size: 0.85em;
            font-family: 'Courier New', Courier, monospace;
          }
          .markdown-body pre code {
            background-color: transparent;
            color: #e5e7eb;
            padding: 0;
            font-size: 0.875rem;
          }
          .markdown-body ul, .markdown-body ol {
            margin: 0.875rem 0;
            padding-left: 1.5rem;
            color: #d1d5db;
          }
          .markdown-body li {
            margin-bottom: 0.4rem;
            font-size: 1rem;
          }
          .markdown-body ul {
            list-style-type: disc;
          }
          .markdown-body ol {
            list-style-type: decimal;
          }
          .markdown-body a {
            color: #a78bfa;
            text-decoration: none;
          }
          .markdown-body a:hover {
            color: #c4b5fd;
            text-decoration: underline;
          }
          .markdown-body blockquote {
            border-left: 4px solid #a855f7;
            padding-left: 1rem;
            font-style: italic;
            color: #9ca3af;
            margin: 1.25rem 0;
            font-size: 0.95rem;
          }
          .markdown-body table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.25rem 0;
            font-size: 0.9rem;
          }
          .markdown-body th {
            background-color: rgba(168, 85, 247, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 0.6rem;
            text-align: left;
            color: #ffffff;
            font-weight: 600;
            font-size: 0.9rem;
          }
          .markdown-body td {
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 0.6rem;
            color: #d1d5db;
            font-size: 0.9rem;
          }
          .markdown-body strong {
            color: #ffffff;
            font-weight: 600;
          }
          .markdown-body em {
            font-style: italic;
          }
          .markdown-body hr {
            border: none;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            margin: 2rem 0;
          }
          .markdown-body img {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          aside {
            position: relative; /* ensure parent isn’t interfering */
          }

          .sticky {
            position: sticky;
            top: 6rem; /* adjust to navbar height */
          }
        `
      }} />

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
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <User size={18} /> Ahad Ali
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} /> {new Date(post.createdAt).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} /> {post.readTime} min read
                </div>
              </div>

              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${thumbnailUrl}`}
                alt={post.thumbnail?.alternativeText || post.title}
                width={1200}
                height={600}
                className="w-full h-auto rounded-xl shadow-2xl shadow-purple-600/20 border border-white/10 object-cover"
              />
            </header>

            {/* Main Content */}
            <div className="markdown-body">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeHighlight]}
                components={{
                  h1: ({ node, children, ...props }) => {
                    const text = children?.toString() || '';
                    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return <h1 id={id} {...props}>{children}</h1>;
                  },
                  h2: ({ node, children, ...props }) => {
                    const text = children?.toString() || '';
                    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return <h2 id={id} {...props}>{children}</h2>;
                  },
                  h3: ({ node, children, ...props }) => {
                    const text = children?.toString() || '';
                    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return <h3 id={id} {...props}>{children}</h3>;
                  },
                }}
              >
                {post.descrption}
              </ReactMarkdown>
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
              <Link href={shareLinks.linkedin} target="_blank" className="w-10 h-10 flex items-center justify-center bg-white/5 text-gray-300 hover:bg-blue-600 hover:text-white border border-white/10 rounded-full transition-all">
                <Linkedin size={18} />
              </Link>
              <Link href={shareLinks.twitter} target="_blank" className="w-10 h-10 flex items-center justify-center bg-white/5 text-gray-300 hover:bg-sky-500 hover:text-white border border-white/10 rounded-full transition-all">
                <Twitter size={18} />
              </Link>
              <Link href={shareLinks.whatsapp} target="_blank" className="w-10 h-10 flex items-center justify-center bg-white/5 text-gray-300 hover:bg-green-500 hover:text-white border border-white/10 rounded-full transition-all">
                <FaWhatsapp size={18} />
              </Link>
              <CopyButton text={shareUrl} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Table of Contents */}
            {/* Table of Contents */}
            <div className="sticky top-28 space-y-6">

              {headings.length > 0 && (
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 ">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span>📑</span> Table of Contents
                  </h3>
                  <nav className="space-y-1">
                    {headings.map((heading, index) => (
                      <a
                        key={index}
                        href={`#${heading.id}`}
                        className={`block text-sm hover:text-purple-400 transition-colors ${heading.level === 1 ? 'font-semibold text-white' :
                          heading.level === 2 ? 'pl-3 text-gray-300' :
                            'pl-6 text-gray-400'
                          }`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}


              {/* Author Card */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">About Author</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/assets/img/Ahad Ali Software Developer.jpg"
                      alt="Ahad Ali"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Ahad Ali</p>
                    <p className="text-sm text-gray-400">Software Developer | DevOps Engineer</p>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <SocialLink
                    href="https://linkedin.com/in/ahadcommit"
                    icon={<FaLinkedinIn />}
                  />
                  <SocialLink
                    href="https://github.com/ahadali0500"
                    icon={<FaGithub />}
                  />
                  <SocialLink
                    href="https://wa.me/+923256234131"
                    icon={<FaWhatsapp />}
                  />
                  <SocialLink
                    href="https://www.youtube.com/@ahadcommit"
                    icon={<FaYoutube />}
                  />
                </div>
              </div>

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 sticky top-[calc(100px+1rem)]">
                  <h3 className="text-lg font-bold text-white mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((r) => {
                      const rThumb = r.thumbnail?.formats?.large?.url || r.thumbnail?.url || "/placeholder.svg";
                      return (
                        <Link
                          key={r.id}
                          href={`/blog/${r.slug}`}
                          className="group flex gap-3 hover:bg-white/5 rounded-lg p-2 transition"
                        >
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
                            <h4 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-purple-400">
                              {r.title}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">
                              {new Date(r.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
              </div>
          </aside>
        </div>
      </article>

      <Footer />
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:shadow-lg hover:scale-110"
    >
      {icon}
    </a>
  );
}

// Metadata generation
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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
  const keywords = post.tags?.map((t: { slug: string }) => t.slug).join(", ") || "blog, article, software, devops";

  const cleanDescription = post.descrption
    .replace(/[#*`\n]/g, ' ')
    .replace(/\s+/g, ' ')
    .slice(0, 160)
    .trim();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: [`${process.env.NEXT_PUBLIC_API_URL}${thumbnailUrl}`],
    author: {
      "@type": "Person",
      name: "Ahad Ali",
    },
    publisher: {
      "@type": "Organization",
      name: "Ahad Ali Blog",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_API_URL}/assets/img/Ahad Ali Software Developer.jpg`,
      },
    },
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    description: post.metaDescription || cleanDescription,
    mainEntityOfPage: shareUrl,
  };

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || cleanDescription,
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
      description: post.metaDescription || cleanDescription,
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
      description: post.metaDescription || cleanDescription,
      images: [`${process.env.NEXT_PUBLIC_API_URL}${thumbnailUrl}`],
      creator: "@ahadcommit",
    },
    icons: {
      icon: "/favicon.ico",
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_API_URL || "https://ahadcommit.com"),
    other: {
      "application/ld+json": JSON.stringify(jsonLd),
    },
  };
}