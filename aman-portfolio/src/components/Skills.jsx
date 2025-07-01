import React from 'react'
import { motion } from 'framer-motion'
import {
  FaJava, FaNodeJs, FaReact, FaPython, FaDatabase, FaGitAlt,
  FaDocker, FaAws, FaHtml5, FaCss3Alt
} from 'react-icons/fa'
import {
  SiSpringboot, SiTailwindcss, SiMongodb, SiMysql,
  SiJenkins, SiPostman, SiRedis, SiLinux, SiExpress
} from 'react-icons/si'

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <FaNodeJs /> },
      { name: 'Python', icon: <FaPython /> },
    ]
  },
  {
    category: 'Web',
    skills: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      { name: 'REST APIs', icon: <SiExpress /> },
      { name: 'WebSockets', icon: <SiExpress /> }
    ]
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Redis', icon: <SiRedis /> },
    ]
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Jenkins', icon: <SiJenkins /> },
      { name: 'Linux', icon: <SiLinux /> },
      { name: 'AWS', icon: <FaAws /> },
    ]
  },
  {
    category: 'Tools & Security',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'JWT', icon: <SiExpress /> },
      { name: 'OAuth2', icon: <SiExpress /> },
    ]
  },
]

function Skills() {
  return (
    <motion.section
      className="max-w-6xl mx-auto py-16 px-6"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-400">Technical Skills</h2>

      <div className="space-y-10">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-300">{group.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {group.skills.map((skill, i) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-center bg-gradient-to-br from-blue-50 to-white dark:from-blue-900 dark:to-gray-900 text-blue-900 dark:text-blue-100 rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-lg transition-all cursor-default"
                >
                  <span className="text-3xl mb-2">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills
