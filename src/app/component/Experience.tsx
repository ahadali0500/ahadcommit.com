"use client";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type Item = {
  title: string;
  company: string;      // issuer/school/company
  logo?: string;
  link?: string;
  description?: string;
  location?: string;
  period?: string;      // dates or validity
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

/** Simple tab button */
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


/** Reusable card */
function TimelineCard({ item }: { item: Item }) {
  return (
    <div className="relative bg-white/5 border border-white/10 p-4 rounded-xl">
      <h1 className="text-lg md:text-lg font-bold text-white">{item.title}</h1>

      <div className="flex items-center gap-3 my-3">
        <img
          src={item?.logo || "/placeholder.svg"}
          alt={`${item.company} logo`}
          className="w-12 h-12 object-contain rounded-md bg-white p-1"
        />
        <div className="font-semibold text-md md:text-md text-white">{item.company}</div>
        {item.link ? (
          <Link target="_blank" href={item.link} className="text-purple-500 hover:text-purple-400" aria-label="External link">
            <ExternalLink size={16} />
          </Link>
        ) : null}
      </div>

      {item.description ? (
        <p className="text-gray-300 text-sm md:text-md mb-2">
          <ReadMoreText text={item.description} maxLength={250} />
        </p>
      ) : null}

      {item.location ? <div className="text-gray-400 text-xs">{item.location}</div> : null}
      {item.period ? <div className="text-purple-500 text-sm md:text-md font-semibold mt-2">{item.period}</div> : null}
    </div>
  );
}


export default function Experience({
  educationExperience = [],
  workExperience = [],
  certifications = [],
}: {
  educationExperience?: Item[];
  workExperience?: Item[];
  certifications?: Item[];
}) {
  const [tab, setTab] = useState<"all" | "experience" | "education" | "certifications">("all");

  return (
    <div className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 md:mt-20">
        <div className="text-center mb-5 md:mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Experience & Education</h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
            My professional journey, academic background, and certifications.
          </p>
        </div>

        <div
          className="no-scrollbar flex flex-nowrap justify-center overflow-x-auto snap-x snap-mandatory gap-1 md:gap-2 mb-10 md:mb-10 -mx-4 px-4 w-full"
          role="tablist"
        >
          <TabButton value="all" active={tab === "all"} onClick={(v: any) => setTab(v as any)}>All</TabButton>
          <TabButton value="experience" active={tab === "experience"} onClick={(v: any) => setTab(v as any)}>Experience</TabButton>
          <TabButton value="education" active={tab === "education"} onClick={(v: any) => setTab(v as any)}>Education</TabButton>
          <TabButton value="certifications" active={tab === "certifications"} onClick={(v: any) => setTab(v as any)}>Certifications</TabButton>
        </div>

        {tab === "all" && (
          <div className="space-y-12">
            {/* Work */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="text-3xl">💼</div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Work Experience</h2>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                {workExperience?.length ? (
                  workExperience.map((exp, idx) => <TimelineCard key={`work-${idx}`} item={exp} />)
                ) : (
                  <p className="text-gray-400">No work experience added yet.</p>
                )}
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">🎓</div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Education</h2>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                {educationExperience?.length ? (
                  educationExperience.map((edu, idx) => <TimelineCard key={`edu-${idx}`} item={edu} />)
                ) : (
                  <p className="text-gray-400">No education added yet.</p>
                )}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">📜</div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Certifications</h2>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications?.length ? (
                  certifications.map((cert, idx) => <TimelineCard key={`cert-${idx}`} item={cert} />)
                ) : (
                  <p className="text-gray-400">No certifications added yet.</p>
                )}
              </div>
            </section>
          </div>
        )}

        {/* EXPERIENCE ONLY */}
        {tab === "experience" && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="text-3xl">💼</div>
              <h2 className="text-xl md:text-2xl font-bold text-white">Work Experience</h2>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
              {workExperience?.length ? (
                workExperience.map((exp, idx) => <TimelineCard key={`work-only-${idx}`} item={exp} />)
              ) : (
                <p className="text-gray-400">No work experience added yet.</p>
              )}
            </div>
          </div>
        )}

        {/* EDUCATION ONLY */}
        {tab === "education" && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="text-3xl">🎓</div>
              <h2 className="text-xl md:text-2xl font-bold text-white">Education</h2>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationExperience?.length ? (
                educationExperience.map((edu, idx) => <TimelineCard key={`edu-only-${idx}`} item={edu} />)
              ) : (
                <p className="text-gray-400">No education added yet.</p>
              )}
            </div>
          </div>
        )}

        {/* CERTIFICATIONS ONLY */}
        {tab === "certifications" && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="text-3xl">📜</div>
              <h2 className="text-xl md:text-2xl font-bold text-white">Certifications</h2>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications?.length ? (
                certifications.map((cert, idx) => <TimelineCard key={`cert-only-${idx}`} item={cert} />)
              ) : (
                <p className="text-gray-400">No certifications added yet.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
