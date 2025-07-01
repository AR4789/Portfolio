import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'coursework', label: 'Coursework' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const scrollPos = window.scrollY + 100
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id)
        if (el && el.offsetTop <= scrollPos) {
          setActive(navItems[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center dark:text-blue-400">
          <div className="text-2xl font-extrabold tracking-tight cursor-pointer text-blue-700 dark:text-blue-400" onClick={() => handleClick('hero')}>
            Aman Rai
          </div>
          <ul className="flex space-x-6 items-center">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer relative transition-colors duration-200 ${active === item.id
                    ? 'text-blue-600 dark:text-blue-400 font-bold drop-shadow-md'
                    : 'hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded"></span>
                )}
              </li>
            ))}

            {/* Resume Button */}
            <li>
              <a
                href="/Aman's Resume.pdf"
                download
                className="text-sm px-4 py-2 border rounded-full border-blue-500 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-700 transition"
              >
                Resume
              </a>

            </li>

            {/* Theme Toggle */}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
