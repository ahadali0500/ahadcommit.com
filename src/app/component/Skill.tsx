"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type TabKey = "All" | "Frontend" | "Backend" | "DevOps" | "AI Integrations";

type SkillType = {
  name: string;
  icon: string;
  category: "Frontend" | "Backend" | "DevOps" | "AI Integrations";
};

function TabButton({
  value,
  active,
  onClick,
  children,
}: {
  value: TabKey;
  active: boolean;
  onClick: (value: TabKey) => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={[
        "shrink-0 whitespace-nowrap snap-center",
        "px-3 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300",
        active
          ? "bg-purple-600 text-white shadow"
          : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10",
      ].join(" ")}
      aria-pressed={active}
      role="tab"
    >
      {children}
    </button>
  );
}

export default function Skill() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<TabKey>("All");

  const allSkills: SkillType[] = [
    { name: "HTML", icon: "assets/img/skill/html-5.png", category: "Frontend" },
    { name: "CSS", icon: "assets/img/skill/css.png", category: "Frontend" },
    { name: "JavaScript", icon: "assets/img/skill/js.png", category: "Frontend" },
    { name: "React.js", icon: "assets/img/skill/react.png", category: "Frontend" },
    { name: "Next.js", icon: "assets/img/skill/next.png", category: "Frontend" },
    { name: "Bootstrap", icon: "assets/img/skill/bootstrap.png", category: "Frontend" },
    { name: "JQuery", icon: "assets/img/skill/jquery.png", category: "Frontend" },
    { name: "PHP", icon: "assets/img/skill/php.png", category: "Backend" },
    { name: "Laravel", icon: "assets/img/skill/laravel.png", category: "Backend" },
    { name: "Node.js", icon: "assets/img/skill/node.png", category: "Backend" },
    { name: "Express.js", icon: "assets/img/skill/express-js.png", category: "Backend" },
    { name: "MySQL", icon: "assets/img/skill/mysql.png", category: "Backend" },
    { name: "PostgreSQL", icon: "assets/img/skill/postgres.png", category: "Backend" },
    { name: "Postman", icon: "assets/img/skill/postman.png", category: "Backend" },
    { name: "GitHub", icon: "assets/img/skill/github.png", category: "DevOps" },
    { name: "Docker", icon: "assets/img/skill/docker.png", category: "DevOps" },
    { name: "Kubernetes", icon: "assets/img/skill/kubernetes.png", category: "DevOps" },
    { name: "Terraform", icon: "assets/img/skill/terraform.png", category: "DevOps" },
    { name: "Jenkins", icon: "assets/img/skill/jenkins.png", category: "DevOps" },
    { name: "AWS", icon: "assets/img/skill/aws-png.png", category: "DevOps" },
    { name: "Bitbucket", icon: "assets/img/skill/bitbucket-logo.WEBP", category: "DevOps" },
    { name: "LangChain", icon: "assets/img/skill/langchain.png", category: "AI Integrations" },
    { name: "OpenAI API", icon: "assets/img/skill/openai.png", category: "AI Integrations" },
    { name: "LLM Integration", icon: "assets/img/skill/llm.png", category: "AI Integrations" },
  ];

  const visibleSkills =
    activeTab === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeTab);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="text-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 md:mt-20">
        {/* Heading & Subtext */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {pathname == "/" ?
            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-5 text-center"
              variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Technical Skills & Core Expertise
            </motion.h2>
            :
            <motion.h1
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-5 text-center"
              variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Technical Skills & Core Expertise
            </motion.h1>

          }


          <motion.p
            className="text-gray-300 text-sm md:text-md lg:text-lg leading-relaxed text-center mb-10"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            As a software developer, I build scalable and high-performance web systems.
            My expertise spans full-stack development, cloud deployment, DevOps automation,
            and AI-powered integrations that make applications intelligent and future-ready.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="no-scrollbar flex flex-nowrap justify-center overflow-x-auto snap-x snap-mandatory gap-1 md:gap-2 mb-10 -mx-4 px-4 w-full"
          role="tablist"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {(["All", "Frontend", "Backend", "DevOps", "AI Integrations"] as TabKey[]).map((tab) => (
            <TabButton key={tab} value={tab} active={activeTab === tab} onClick={setActiveTab}>
              {tab}
            </TabButton>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            exit="hidden"
            variants={containerVariants}
          >
            {visibleSkills.map((skill, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                variants={itemVariants}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg p-4 flex flex-col justify-center items-center transition-colors duration-300 group">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <p className="text-white font-medium text-center mt-2 text-xs sm:text-sm">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}