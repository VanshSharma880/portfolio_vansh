"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="dark:bg-[#0A0A0A] overflow-x-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 md:pl-12 mb-5"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#d946ef]">About Me</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 lg:text-lg">
            <p>
              I am a Software Engineer with a strong passion for building
              innovative full-stack applications that solve real-world
              challenges. Specializing in MERN stack development, I excel at
              creating scalable, high-performance web solutions with seamless
              user experiences and robust backend architectures.
            </p>
            <p>
              Holding both a Bachelor’s and Master’s degree in Computer
              Applications (BCA, MCA), I have honed my expertise in React.js,
              Node.js, and competitive Java coding. My problem-solving skills,
              backed by algorithmic thinking, enable me to develop efficient,
              optimized solutions for complex technical challenges.
            </p>
            <p>
              Beyond development, I am an active contributor to open-source
              projects and stay ahead of industry trends through continuous
              learning and innovation. I thrive in collaborative environments,
              where I can share knowledge, mentor others, and drive impactful
              digital transformations.
            </p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/about.jpg"
            height={500}
            width={500}
            alt="Professional Profile"
            className="lg:ml-48"
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
}
