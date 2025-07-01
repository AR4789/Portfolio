import React from 'react'
import { motion } from 'framer-motion'
import { FaUniversity } from 'react-icons/fa'

const education = {
  institution: "JSS Academy of Technical Education",
  degree: "B.Tech in Electronics & Communication Engineering",
  cgpa: "8.21",
  location: "Noida, Uttar Pradesh",
  period: "July 2019 – June 2023",
  details: [
    "Graduated with strong academic performance and a CGPA of 8.21.",
    "Completed coursework in digital systems, communication networks, and embedded technologies.",
    "Participated in workshops, project expos, and technical team challenges."
  ]
}

function Education() {
  return (
    <motion.section
      className="max-w-4xl mx-auto py-16 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="education"
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">Education</h2>
      <motion.div
        className="relative border-l-4 border-blue-600 dark:border-blue-400 pl-6 ml-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -left-4 top-2 w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center text-white text-sm shadow-lg">
          <FaUniversity />
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-100 dark:border-blue-800">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{education.institution}</h3>
          <p className="text-md text-gray-700 dark:text-gray-300 mt-1">
            <span className="font-medium text-blue-700 dark:text-blue-300">{education.degree}</span>
            <span className="ml-2 px-2 py-0.5 text-sm bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 rounded-full">
              CGPA: {education.cgpa}
            </span>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{education.location}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{education.period}</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            {education.details.map((detail, index) => (
              <li key={index} className="leading-snug">{detail}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Education
