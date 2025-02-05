"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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
      className="dark:bg-gray-900 bg-gray-100 rounded-lg shadow-lg p-6 mb-6"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white">
              {title}
            </h3>
            <p className="text-lg font-semibold text-[#14b8a6]">{company}</p>
          </div>
          <div className="bg-cyan-100 px-4 py-2 rounded-full">
            <p className="text-[#13564e] font-medium flex items-center">
              <FaCalendarAlt className="w-4 h-4 mr-2" />
              {period}
            </p>
          </div>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-100">
          <FaMapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>

        <ul className="space-y-3">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start">
              <FaBriefcase className="w-5 h-5 mr-3 mt-1 text-[#14b8a6] flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-100">
                {responsibility}
              </span>
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
      company: "Vionsys IT Solutions India Pvt.Ltd",
      location: "Kharadi, Pune",
      period: "April 2024 – Present",
      responsibilities: [
        "Working on full-stack development using the MERN stack, with a focus on Next.js, Node.js, Express, and MongoDB.",
        "Identified and resolved performance bottlenecks in web applications, enhancing user experience and efficiency.",
        "Collaborated with cross-functional teams to meet project requirements and improve code quality through best practices and testing.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Oasis Infobyte",
      location: "Remote",
      period: "April 2023 – June 2023",
      responsibilities: [
        "Completed internship developing responsive webpages using HTML, CSS, and JavaScript at a foundational level.",
      ],
    },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  return (
    <section
      className="py-16 dark:bg-[#0A0A0A] bg-white mx-auto lg:px-4"
      ref={sectionRef}
    >
      <div className="mx-auto lg:px-10 px-4">
        <h2 className="text-3xl py-4 font-bold text-center mb-8 text-[#d946ef] ">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
            >
              <ExperienceItem {...experience} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
