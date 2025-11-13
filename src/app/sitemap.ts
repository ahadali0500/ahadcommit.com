import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_URL;

interface BlogPost {
    id: number;
    slug: string;
    updatedAt: string;
}

const STATIC_PAGES = [
    '/',
    '/projects',
    '/experience',
    '/blog',
    '/skills',
    '/contact',
];

async function getBlogs(): Promise<BlogPost[]> {
    const token = process.env.NEXT_PUBLIC_TOKEN;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!token) throw new Error("NEXT_PUBLIC_TOKEN is not defined");
    if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL is not defined");

    const res = await fetch(`${apiUrl}/api/blogs?fields=slug,updatedAt`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
    });

    const data = await res.json();

    if (!data?.data || data.data.length === 0) return [];
    return data.data;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogs = await getBlogs();

    const staticRoutes: MetadataRoute.Sitemap = STATIC_PAGES.map((path) => ({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const blogRoutes: MetadataRoute.Sitemap = blogs.map((b) => ({
        url: `${BASE_URL}/blog/${b.slug}`,
        lastModified: b.updatedAt,
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes];
}
