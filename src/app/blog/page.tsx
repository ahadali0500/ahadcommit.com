import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Body from "./Body";

export const metadata = {
    title: {
        default: "Tech Insights, Tutorials & Dev Stories — Ahad Ali",
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
    }
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
