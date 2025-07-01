import React from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

function Contact() {
  return (
    <motion.section
      className="relative bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 px-6 text-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="contact"
    >
      <motion.div
        className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-10 border border-blue-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-300">Contact</h2>

        <div className="space-y-5 text-gray-800 dark:text-gray-100 text-lg">
          <div className="flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-blue-600 dark:text-blue-400" />
            <span>+91-6387104028</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-blue-600 dark:text-blue-400" />
            <a
              href="mailto:amanr1871@gmail.com"
              className="underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              amanr1871@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4 text-2xl">
            <a
              href="https://linkedin.com/in/amanrai-008178191"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/AR4789"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          © 2025 Aman Rai. All rights reserved.
        </p>
      </motion.div>

      {/* Optional animated background shapes */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-blue-200/20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-200/20 rounded-full blur-3xl animate-pulse -z-10"></div>
    </motion.section>
  )
}

export default Contact
