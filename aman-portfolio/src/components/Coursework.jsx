import React from 'react';
import { motion } from 'framer-motion';
import { FaBook } from 'react-icons/fa';

const coursework = [
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "DBMS",
  "Software Engineering",
  "Computer Networks",
  "Cloud Infrastructure",
  "Operating Systems",
  "DevOps Fundamentals"
];

function Coursework() {
  return (
    <motion.section
      id="coursework"
      className="max-w-5xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
        Relevant Coursework
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coursework.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-blue-600 dark:text-blue-400 text-xl">
              <FaBook />
            </div>
            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
              {course}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Coursework;
