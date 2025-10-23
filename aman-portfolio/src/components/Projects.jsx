import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Postmaker",
    technologies: "Node.js, Express.js, MongoDB, Mongoose, Tailwind CSS, WebSockets",
    intro: "A social platform to post updates and chat live — like Twitter + WhatsApp, built with WebSockets.",
    github: "https://github.com/AR4789/Postmaker",
    liveDemo: "https://postmaker-iknx.onrender.com",
  //  thumbnail: null,    //"/images/postmaker.png",
    details: [
      "Real-time social media platform allowing users to post, connect, and interact with friends.",
      "Live chat feature using WebSockets for seamless real-time messaging.",
      "Secure backend with authentication, post creation, chat, and feed rendering."
    ]
  },
  {
    title: "Autopilot",
    technologies: "Java, Spring Boot, React, MongoDB",
    intro: "An automation tool to run SQL, Shell scripts, and APIs from one config — like Zapier for developers.",
    github: "https://github.com/AR4789/Autopilot",
    liveDemo: "https://autopilot-launch.netlify.app/",
  //  thumbnail: "/images/autopilot.png",
    details: [
      "Streamlines and executes manual workflows with improved reliability.",
      "Execute SQL, Shell, and REST API in one flow with configurable tasks.",
      "Reduced setup time by 35% through process optimization."
    ]
  },
  {
    title: "Campaigns Generator",
    technologies: "Node.js, Next.js, PostgreSQL, GCP, Terraform, Docker, GitHub Actions",
    intro: "Full-stack campaign creator to design campaigns, generate leads, and export dashboards.",
    github: "https://github.com/AR4789/CampaignsGenerator",
    liveDemo: null,
    // thumbnail: "/images/campaigns.png",
    details: [
      "Designed a full-stack campaign management application with lead generation and CSV export.",
      "Integrated seamless one-push deployment using Docker, GCP, Terraform, and GitHub Actions.",
      "Automated campaign workflows and optimized data handling for large-scale operations."
    ]
  },

  {
    title: "CodePilot",
    technologies: "Java, Spring Boot, React, MongoDB, DeepSeek, LLaMA",
    intro: "AI-powered code review assistant providing suggestions, optimizations, and error checks.",
    github: "https://github.com/AR4789/CodePilot",
    liveDemo: null,
    // thumbnail: "/images/codepilot.png",
    details: [
      "Built an AI-driven code review tool integrating DeepSeek and LLaMA models for insights.",
      "Supports Java, Spring Boot, and frontend React projects for comprehensive feedback.",
      "Provides intelligent suggestions, error detection, and code optimization tips."
    ]
  },
  {
    title: "TripMate",
    technologies: "Node.js, Express.js, MongoDB, React, Mongoose, Tailwind CSS, AI Integration",
    intro: "An intelligent travel planner with real-time tracking, AI suggestions, and secure login.",
    github: "https://github.com/AR4789/Tripmate",
    liveDemo: null,
   // thumbnail: "/images/tripmate.png",
    details: [
      "MERN-based app for trip planning, navigation, and tracking activities.",
      "Secure user authentication using JWT and bcrypt.",
      "AI and Google Maps integration for smart destination suggestions."
    ]
  }
];

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="projects"
    >
      <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all hover:ring-2 hover:ring-blue-400 dark:hover:ring-blue-500"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {project.thumbnail && (
              <img
                src={project.thumbnail}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover rounded-t-2xl border-b border-gray-300 dark:border-gray-700"
              />
            )}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.split(',').map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded text-xs font-semibold"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.intro}</p>

              <button
                onClick={() => toggleDetails(index)}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                {openIndex === index ? 'Hide Details' : 'Show Details'}
              </button>

              {openIndex === index && (
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  {project.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;