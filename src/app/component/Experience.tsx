"use client";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type Item = {
  title: string;
  company: string;
  logo?: string;
  link?: string;
  description?: string;
  location?: string;
  period?: string;
};

function ReadMoreText({ text = "", maxLength = 250 }: { text?: string; maxLength?: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!text || text.length <= maxLength) return <span>{text}</span>;
  return (
    <span>
      {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="ml-2 text-purple-500 font-semibold hover:text-purple-400 transition"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </span>
  );
}

function TabButton({ value, active, onClick, children }: any) {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={`px-3 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 shrink-0 whitespace-nowrap snap-center ${active
        ? "bg-purple-600 text-white shadow"
        : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
        }`}
      aria-pressed={active}
      role="tab"
    >
      {children}
    </button>
  );
}

function TimelineCard({ item, index }: { item: Item; index: number }) {
  return (
    <motion.div
      className="relative bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <h3 className="text-lg md:text-xl lg:text-xl text-white">{item.title}</h3>
      <div className="flex items-center gap-3 my-3">
        <img
          src={item?.logo || "/placeholder.svg"}
          alt={`${item.company}`}
          className="w-12 h-12 object-contain rounded-md bg-white p-1"
        />
        <h4 className="font-semibold text-md md:text-md text-white">{item.company}</h4>
        {item.link ? (
          <Link target="_blank" href={item.link} className="text-purple-500 hover:text-purple-400" aria-label="External link">
            <ExternalLink size={16} />
          </Link>
        ) : null}
      </div>
      {item.description && (
        <p className="text-gray-300 text-sm md:text-md mb-2">
          <ReadMoreText text={item.description} maxLength={250} />
        </p>
      )}
      {item.location && <div className="text-gray-400 text-xs">{item.location}</div>}
      {item.period && <div className="text-purple-500 text-sm md:text-md font-semibold mt-2">{item.period}</div>}
    </motion.div>
  );
}

function Section({ title, items, icon }: { title: string; items?: Item[]; icon: string }) {
  if (!items || !items.length)
    return <p className="text-gray-400">No {title.toLowerCase()} added yet.</p>;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-3xl">{icon}</div>
        <h2 className="text-lg md:text-xl lg:text-2xl text-white">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <TimelineCard key={`${title}-${idx}`} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default function Experience({
  educationExperience = [],
  workExperience = [],
  certifications = [],
  active = "all"
}: {
  educationExperience?: Item[];
  workExperience?: Item[];
  certifications?: Item[];
  active?: "all" | "experience" | "education" | "certifications"
}) {
  const pathname = usePathname();
  const [tab, setTab] = useState<"all" | "experience" | "education" | "certifications">(active);
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="bg-slate-950 text-white pt-20">
      <div className={`max-w-6xl mx-auto px-4 md:px-6 ${pathname == "/" ? 'mt-0 md:mt-20' : 'mt-10 md:mt-20'} `}>
        {/* Header */}
        <motion.div
          className="text-center mb-5 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >

          {pathname == "/" ?
            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4"
              variants={itemVariants}
            >
              Professional Experience
            </motion.h2>
            :
            <motion.h1
              className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4"
              variants={itemVariants}
            >
              Professional Experience & Technical Journey and Certifications
            </motion.h1>
          }

          <motion.p
            className="text-gray-300 text-sm md:text-md lg:text-lg"
            variants={itemVariants}
          >            Over the years, I've worked as a software developer focused on building scalable web platforms
            and automating deployment workflows. My experience spans full-stack development, cloud
            infrastructure, and intelligent system design that blends performance with reliability.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="no-scrollbar flex flex-nowrap justify-center overflow-x-auto snap-x snap-mandatory gap-1 md:gap-2 mb-10 md:mb-10 -mx-4 px-4 w-full"
          role="tablist"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TabButton value="all" active={tab === "all"} onClick={(v: any) => setTab(v)}>All</TabButton>
          <TabButton value="experience" active={tab === "experience"} onClick={(v: any) => setTab(v)}>Experience</TabButton>
          <TabButton value="education" active={tab === "education"} onClick={(v: any) => setTab(v)}>Education</TabButton>
          <TabButton value="certifications" active={tab === "certifications"} onClick={(v: any) => setTab(v)}>Certifications</TabButton>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab} // animate container on tab switch
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="space-y-12">
              {tab === "all" && (
                <>
                  <Section title="Work Experience" items={workExperience} icon="💼" />
                  <Section title="Education" items={educationExperience} icon="🎓" />
                  <Section title="Certifications" items={certifications} icon="📜" />
                </>
              )}
              {tab === "experience" && <Section title="Work Experience" items={workExperience} icon="💼" />}
              {tab === "education" && <Section title="Education" items={educationExperience} icon="🎓" />}
              {tab === "certifications" && <Section title="Certifications" items={certifications} icon="📜" />}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
