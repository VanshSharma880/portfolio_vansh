"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaDesktop, FaServer } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

interface TechnologyCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
}

const Technologies = () => {
  const categories: TechnologyCategory[] = [
    {
      title: "Frontend Development",
      icon: <FaCode className="w-6 h-6 text-[#14b8a6]" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      icon: <FaServer className="w-6 h-6 text-[#14b8a6]" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase className="w-6 h-6 text-[#14b8a6]" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 70 },
      ],
    },
    {
      title: "Programming Languages",
      icon: <FaDesktop className="w-6 h-6 text-[#14b8a6]" />,
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Java", level: 90 },
      ],
    },
    {
      title: "Tools",
      icon: <IoMdSettings className="w-6 h-6 text-[#14b8a6]" />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Jira", level: 90 },
        { name: "Postman", level: 90 },
        { name: "Android Studio", level: 70 },
      ],
    },
  ];

  return (
    <section id="technologies" className="py-16 dark:bg-[#0A0A0A] bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#d946ef] ">
            Technologies
          </h2>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="dark:bg-slate-900 bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-cyan-50 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-100 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <motion.div
                      className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        delay: skillIndex * 0.2,
                      }}
                    >
                      <motion.div className="h-full bg-blue-500 rounded-full" />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
