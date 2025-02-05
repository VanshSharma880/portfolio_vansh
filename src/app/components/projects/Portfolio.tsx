"use client";

import React from "react";
import { FaGithub, FaCode, FaExternalLinkAlt } from "react-icons/fa";

// Define the type for projects
type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
};

// Sample projects data - replace with your own
const projects: Project[] = [
  {
    title: "Online food ordering website",
    description:
      "This project features a responsive UI and fully factional Backend allows users to browse and order food.",
    image: "./Project1.jpeg",
    techStack: ["React.js", "Node.js", "MongoDB", "Stripe", "Express.js"],
    githubUrl: "https://github.com/VanshSharma880/food_ordering-main",
    liveUrl: "https://food-ordering-frontend-gbxz.onrender.com/",
  },
  {
    title: "Hotel booking web app",
    description:
      "Developed this to seamless room reservations, real-time availability, attractive UI for efficient bookings.",
    image: "./Project2.jpeg",
    techStack: ["React.js", "Supabase", "JavaScript", "Chart.js"],
    githubUrl: "https://github.com/VanshSharma880/wild_oasis_admin",
    liveUrl: "https://wild-oasis-admin-eight.vercel.app/login",
  },
  {
    title: "Job portal application",
    description:
      "Built a job portal application enabling seamless job posting, candidate management, and file upload functionality with an intuitive user experience.",
    image: "./Project3.jpeg",
    techStack: ["React.js", "Cloudinary", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/VanshSharma880/Job_Portal",
    liveUrl: "https://job-portal-frontend-rho.vercel.app/",
  },
  {
    title: "Product's features display - API",
    description:
      "Fetched products from DummyJSON, featuring dynamic product search, filtering, favorites.",
    image: "./Project4.jpeg",
    techStack: ["React query", "React", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/VanshSharma880/SOCON_Assignment_",
    liveUrl: "https://socon-assignment.vercel.app/",
  },
  {
    title: "Fastest Pizza Booking UI",
    description:
      "Created the fastest Pizza Booking UI with a user-friendly cart feature and search functionality for a seamless ordering experience.",
    image: "./Project5.jpeg",
    techStack: ["React", "Redux", "JavaScript", "TailwindCSS"],
    githubUrl: "https://github.com/VanshSharma880/React_Pizz_App",
    liveUrl: "https://react-pizz-app.vercel.app",
  },
  {
    title: "Classy weather app",
    description:
      "Developed a sleek weather app to fetch and display real-time weather data, providing users with accurate and up-to-date forecasts in a polished interface.",
    image: "./Project6.jpeg",
    techStack: ["React", "Javascript", "CSS", "API"],
    githubUrl: "https://github.com/VanshSharma880/classy_weather",
    liveUrl: "https://classy-weather-orcin.vercel.app",
  },
];

function TechStackBadge({ tech }: { tech: string }) {
  return (
    <span className="px-2 py-1 text-xs font-medium dark:bg-slate-600 bg-slate-400 text-white rounded-full">
      {tech}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
      <div className="relative h-52">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold dark:text-white text-black mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-[#d946ef] mb-2 flex items-center gap-1.5">
            <FaCode className="w-3.5 h-3.5" />
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <TechStackBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#14b8a6] border border-transparent rounded-md text-sm font-medium text-white hover:bg-[#10a396] transition-colors"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="dark:bg-[#0A0A0A] overflow-x-hidden py-16 mx-auto px-6"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-[#d946ef] text-center">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Explore my latest projects showcasing my expertise in full-stack
          development, from web applications to mobile solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
