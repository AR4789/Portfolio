import React from 'react'
import { motion } from 'framer-motion'
import { ReactTyped } from 'react-typed'

function About() {
  return (
    <motion.section
      className="relative max-w-3xl mx-auto py-16 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="about"
    >
      {/* Blurry Decorative Blobs */}
      <div className="absolute top-10 left-5 w-24 h-24 bg-blue-400/10 blur-3xl rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-10 right-5 w-32 h-32 bg-purple-400/10 blur-3xl rounded-full animate-pulse -z-10" />

      <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border-2 border-transparent bg-clip-padding bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
        <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">About Me</h2>
        <p className="text-lg leading-8 tracking-wide font-light text-gray-700 dark:text-gray-300">
          Software Engineer with 3+ years of experience building scalable, high-performance applications using Java, Spring Boot, and the MERN stack, with hands-on expertise in AWS cloud environments. Skilled in designing robust microservices, optimizing system performance, and implementing containerized deployments using Docker, Kubernetes, and CI/CD pipelines with Jenkins.

          Beyond backend engineering, I develop seamless user experiences with React and focus on writing clean, maintainable code that drives real business impact. Passionate about solving complex problems, leveraging cloud-native architectures, and building resilient systems that scale efficiently.    </p>
        <ReactTyped
          strings={[
            "I enjoy solving real-world problems through scalable software and cloud-native solutions while collaborating with high-performing teams.",
            "I build efficient backend systems and deploy them on AWS using containerization and orchestration tools like Docker and Kubernetes.",
            "I thrive on debugging, optimizing, and delivering production-ready applications through robust CI/CD pipelines and cloud infrastructure."]}
          typeSpeed={40}
          backSpeed={20}
          backDelay={3000}
          loop
          className="mt-4 italic text-blue-600 dark:text-blue-300 text-lg"
        />
      </div>
    </motion.section>
  )
}

export default About
