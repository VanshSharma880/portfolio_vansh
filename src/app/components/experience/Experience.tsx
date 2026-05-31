"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapPin } from "react-icons/fa";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  responsibilities,
}) => {
  return (
    <motion.div
      className="dark:bg-gray-900 bg-gray-100 rounded-xl shadow-md p-4 md:p-6 mb-6 border-l-4 border-[#d946ef] hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col space-y-4">
        {/* Title and Company */}
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-sm md:text-base font-semibold text-[#14b8a6]">
              {company}
            </p>
          </div>

          {/* Period Badge */}
          <div className="bg-cyan-100 px-3 py-1 rounded-full flex items-center text-sm md:text-base">
            <FaCalendarAlt className="w-4 h-4 mr-1 text-[#13564e]" />
            <span className="text-[#13564e] font-medium">{period}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm md:text-base">
          <FaMapPin className="w-4 h-4 mr-2 text-[#d946ef]" />
          <span>{location}</span>
        </div>

        {/* Responsibilities */}
        <ul className="space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li
              key={index}
              className="flex items-start text-gray-700 dark:text-gray-300"
            >
              <FaBriefcase className="w-4 h-4 mr-2 mt-1 text-[#14b8a6] flex-shrink-0" />
              <span className="text-sm md:text-base">{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Centalogic",
      location: "Pune, Maharashtra",
      period: "May 2025 – Present",
      responsibilities: [
        "Developed and maintained scalable full-stack applications using React.js, Node.js, GraphQL, and modern web technologies. Built reusable and accessible UI components using Design Language System (DLS) standards to ensure consistency across applications.",
        "Implemented localization (i18n) and multilingual support to deliver seamless user experiences across different regions and languages. Integrated Adobe Analytics and user tracking solutions to monitor user behavior, engagement metrics, and application performance.",
        "Performed code reviews and maintained high code quality standards using SonarQube, reducing technical debt and security vulnerabilities. Developed and executed unit test cases, integration tests, and component testing to ensure application reliability and maintainability.",
        "Troubleshot and resolved production issues while ensuring high application availability, stability, and performance.",
        "Implemented authentication, authorization, and security best practices for enterprise-grade applications.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Vionsys IT Solutions India Pvt.Ltd",
      location: "Kharadi, Pune",
      period: "April 2024 – April 2025",
      responsibilities: [
        "Developing full-stack applications using MERN stack (Next.js, Node.js, MongoDB).",
        "Optimizing web applications for better performance and user experience.",
        "Collaborating with teams to improve code quality through best practices.",
        "Designing and implementing RESTful APIs, authentication systems, and database schemas for scalable applications.",
        "Participating in code reviews, debugging, and production support to ensure application reliability and maintainability.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Oasis Infobyte",
      location: "Remote",
      period: "April 2023 – June 2023",
      responsibilities: [
        "Built responsive webpages using HTML, CSS, and JavaScript.",
      ],
    },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      className="py-12 md:py-16 dark:bg-[#0A0A0A] bg-white mx-auto px-4 md:px-10"
      ref={sectionRef}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#d946ef]">
        Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.2,
            }}
          >
            <ExperienceItem {...experience} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
