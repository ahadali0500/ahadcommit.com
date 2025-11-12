import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Body from "./Body";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Tech Insights, Tutorials & Dev Stories by Ahad Ali",
    "description": "Explore articles by Ahad Ali, a software developer sharing real-world insights on web development, cloud systems, automation, and modern tech innovation.",
    "author": {
        "@type": "Person",
        "name": "Ahad Ali"
    },
    "datePublished": "2025-11-12",
    "dateModified": "2025-11-12",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://ahadcommit.com/blog"
    },
}

export const metadata = {
    title: {
        default: "Tech Insights, Tutorials & Dev Stories by Ahad Ali",
        template: "%s | Ahad Ali"
    },
    description: "Explore articles by Ahad Ali, a software developer sharing real-world insights on web development, cloud systems, automation, and modern tech innovation.",
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_URL}/blog`,
    },
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}/blog`),
    openGraph: {
        title: "Tech Insights, Tutorials & Dev Stories — Ahad Ali",
        description: "Explore articles by Ahad Ali, a software developer sharing real-world insights on web development, cloud systems, automation, and modern tech innovation.",
        url: `${process.env.NEXT_PUBLIC_URL}/blog`,
        siteName: "Ahad Commit",
        locale: "en_US",
        type: "website"
    },
    other: {
        "application/ld+json": JSON.stringify(schemaData),
    },
};

export default function page() {
    return (
        <>
            <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
                <Navbar />
                <Body></Body>
                <Footer />
            </div>
        </>
    );
}
