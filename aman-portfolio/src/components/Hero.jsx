import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'
import { ReactTyped } from 'react-typed'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <motion.section
className="relative bg-gradient-to-br from-cyan-700 via-blue-800 to-indigo-900 text-white py-32 px-6 text-center overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="hero"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: '#ffffff' },
            links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.3, width: 1 },
            collisions: { enable: false },
            move: { direction: 'none', enable: true, outMode: 'bounce', random: false, speed: 1, straight: false },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.3 },
            shape: { type: 'circle' },
            size: { random: true, value: 3 },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <img
        src="/images/profile.jpg"
        alt="Aman Rai"
        className="mx-auto mb-6 w-32 h-32 rounded-full border-4 border-white shadow-xl hover:scale-105 transition duration-300"
      />

      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Aman Rai
      </motion.h1>

      <motion.div
        className="text-2xl md:text-3xl mb-2 font-medium"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <ReactTyped
          strings={["Software Engineer", "Artificial Intelligence Enthusiast", "Spring Boot Developer", "MERN Stack Developer"]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </motion.div>

      <motion.p
        className="mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        Noida, U.P. | +91-6387104028 |{' '}
        <a href="mailto:amanr1871@gmail.com" className="underline hover:text-blue-200">
          amanr1871@gmail.com
        </a>
      </motion.p>

      <motion.div
        className="flex justify-center space-x-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <a
          href="https://linkedin.com/in/amanrai-008178191"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-300 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AR4789"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-300 transition-colors"
        >
          <FaGithub />
        </a>
      </motion.div>

      <motion.a
        href="/Aman's Resume.pdf"
        download
        className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition-colors text-lg"
        whileHover={{ scale: 1.05 }}
      >
        <FaDownload /> Download Resume
      </motion.a>

      <div className="absolute top-1/4 left-8 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl animate-ping z-0" />
      <div className="absolute bottom-1/4 right-12 w-24 h-24 bg-indigo-300/10 rounded-full blur-2xl animate-pulse z-0" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
    </motion.section>
  )
}

export default Hero
