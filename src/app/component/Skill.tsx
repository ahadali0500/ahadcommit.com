"use client";
import { useState } from "react";

type TabKey = "all" | "frontend" | "backend" | "devOps";

type SkillType = {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "devOps";
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
  // current tab
  const [activeTab, setActiveTab] = useState<TabKey>("all");

  // all skills
  const allSkills: SkillType[] = [
    { name: "HTML", icon: "assets/img/skill/html-5.png", category: "frontend" },
    { name: "CSS", icon: "assets/img/skill/css.png", category: "frontend" },
    {
      name: "JavaScript",
      icon: "https://themejunction.net/html/gerold/demo/assets/img/icons/js.svg",
      category: "frontend",
    },
    {
      name: "React Js",
      icon: "https://themejunction.net/html/gerold/demo/assets/img/icons/react.svg",
      category: "frontend",
    },
    {
      name: "Next Js",
      icon: "assets/img/skill/next.png",
      category: "frontend",
    },
    {
      name: "Bootstrap",
      icon: "assets/img/skill/bootstrap.png",
      category: "frontend",
    },
    { name: "Ajax", icon: "assets/img/skill/ajax.png", category: "frontend" },
    {
      name: "JQuery",
      icon: "assets/img/skill/jquery.png",
      category: "frontend",
    },

    { name: "PHP", icon: "assets/img/skill/php.png", category: "backend" },
    { name: "Laravel", icon: "assets/img/skill/laravel.png", category: "backend" },
    { name: "Node Js", icon: "assets/img/skill/node.png", category: "backend" },
    {
      name: "Express Js",
      icon: "assets/img/skill/express-js.png",
      category: "backend",
    },
    { name: "Mysql", icon: "assets/img/skill/mysql.png", category: "backend" },
    {
      name: "PostgreSQL",
      icon: "assets/img/skill/postgres.png",
      category: "backend",
    },
    { name: "Postman", icon: "assets/img/skill/postman.png", category: "backend" },

    { name: "GitHub", icon: "assets/img/skill/github.png", category: "devOps" },
    // {
    //   name: "AWS EC2",
    //   icon: "assets/img/skill/aws-ec2.WEBP",
    //   category: "devOps",
    // },
    {
      name: "Docker",
      icon: "assets/img/skill/docker.png",
      category: "devOps",
    },
    // {
    //   name: "AWS S3 Bucket",
    //   icon: "assets/img/skill/amazon-s3.png",
    //   category: "devOps",
    // },
    {
      name: "Kubernetes",
      icon: "assets/img/skill/kuburnetes.png",
      category: "devOps",
    },
    // { name: "AWS RDS", icon: "assets/img/skill/awsrds.png", category: "devOps" },
    {
      name: "Teraform",
      icon: "assets/img/skill/terraform.png",
      category: "devOps",
    },
    {
      name: "Jenkin",
      icon: "assets/img/skill/jenkins.png",
      category: "devOps",
    },
    { name: "AWS", icon: "assets/img/skill/aws-png.png", category: "devOps" },
    {
      name: "Bitbucket",
      icon: "assets/img/skill/bitbucket-logo.WEBP",
      category: "devOps",
    },
  ];

  // filter list based on tab
  const visibleSkills =
    activeTab === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeTab);

  return (
    <div className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 md:mt-20">
        {/* Heading */}
        <div className="text-center mb-5 md:mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">
            Skills & Tech Stack
          </h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
            Frontend, backend, DevOps and cloud experience I use to ship real products.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="no-scrollbar flex flex-nowrap justify-center overflow-x-auto snap-x snap-mandatory gap-1 md:gap-2 mb-10 -mx-4 px-4 w-full"
          role="tablist"
        >
          <TabButton
            value="all"
            active={activeTab === "all"}
            onClick={setActiveTab}
          >
            All
          </TabButton>

          <TabButton
            value="frontend"
            active={activeTab === "frontend"}
            onClick={setActiveTab}
          >
            Frontend
          </TabButton>

          <TabButton
            value="backend"
            active={activeTab === "backend"}
            onClick={setActiveTab}
          >
            Backend
          </TabButton>

          <TabButton
            value="devOps"
            active={activeTab === "devOps"}
            onClick={setActiveTab}
          >
            DevOps
          </TabButton>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-6">
          {visibleSkills.map((skill, index) => (
            <div key={index}>
              <div className="bg-white/5 text-gray-300 rounded-lg p-4 flex flex-col justify-center items-center hover:bg-white/10 transition-colors duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-white font-medium text-center mt-2 text-sm">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
