import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Associate Software Engineer II",
    company: "Rxlogix Corp. Pvt. Ltd.",
    location: "Noida, India",
    period: "Mar. 2024 – Present",
    details: [
      "Designing, developing, and maintaining Java and React-based applications using modern frameworks and technologies.",
      "Integrating Java services with databases, RESTful web services, and external APIs to support critical business workflows.",
      "Writing clean, modular, and scalable code following industry best practices and established coding standards.",
      "Collaborating with cross-functional teams including QA, DevOps, and UI/UX designers to ensure timely and high-quality project delivery."


    ]
  }
];

function Experience() {
  return (
    <motion.section
      className="max-w-4xl mx-auto py-16 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="experience"
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">Work Experience</h2>
      <ol className="relative border-l-4 border-blue-600 dark:border-blue-400 space-y-10 mt-6">
        {experiences.map((exp, index) => (
          <motion.li
            key={index}
            className="ml-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <div className="absolute -left-3 w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company} | {exp.location}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.period}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  )
}

export default Experience
