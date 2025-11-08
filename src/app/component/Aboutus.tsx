"use client";
import { motion } from "framer-motion";

export default function Aboutus({
    name = "Ahad Ali",
    title = "Full-Stack Developer & DevOps Engineer",
    bio = "I am a passionate software developer with expertise in building scalable web applications, automating deployment workflows, and integrating AI solutions. I enjoy solving complex problems and turning ideas into real-world products.",
    imageUrl = "/profile.jpg", // replace with your image path
}: {
    name?: string;
    title?: string;
    bio?: string;
    imageUrl?: string;
}) {
    return (
        <section className="bg-slate-950 text-white py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                {/* Left: Image */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-center md:justify-start"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={imageUrl}
                        alt={`${name} photo`}
                        className="rounded-xl shadow-lg w-64 md:w-80 object-cover"
                    />
                </motion.div>

                {/* Right: Info */}
                <motion.div
                    className="w-full md:w-1/2 space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold">{name}</h2>
                    <h3 className="text-xl md:text-2xl font-medium text-purple-500">{title}</h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{bio}</p>

                    {/* Optional: Quick Info */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <p className="text-gray-400 text-sm">Experience</p>
                            <p className="font-semibold">5+ Years</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Location</p>
                            <p className="font-semibold">Pakistan / Remote</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Email</p>
                            <p className="font-semibold">ahadcommit@example.com</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Skills</p>
                            <p className="font-semibold">Full-Stack, DevOps, AI</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
