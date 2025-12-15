'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  // Standardized way to handle scroll in 2025 - prevents "double firing"
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolled) setIsScrolled(true)
    if (latest <= 50 && isScrolled) setIsScrolled(false)
  })

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#research', label: 'Research' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center p-6 pointer-events-none">
      <motion.nav
        layout // This is the magic for smooth size transitions
        transition={{
          type: 'spring',
          stiffness: 160,
          damping: 25,
        }}
        style={{
          borderRadius: '40px',
        }}
        className={`
          pointer-events-auto flex items-center justify-between px-6 py-2 border
          ${isScrolled 
            ? 'w-[450px] bg-zinc-900/80 border-zinc-700 backdrop-blur-md shadow-2xl shadow-black/50' 
            : 'w-full max-w-6xl bg-transparent border-transparent'
          }
        `}
      >
        {/* Logo */}
        <motion.div layout="position" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
            <div className="w-2 h-2 bg-black animate-pulse" />
          </div>
          {!isScrolled && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-bold tracking-tighter text-white whitespace-nowrap"
            >
              SINGH.LABS
            </motion.span>
          )}
        </motion.div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.div key={link.label} layout="position">
              <Link
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          
          {/* Action Button - Only shows when expanded */}
          {!isScrolled && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              layout="position"
            >
              <Link 
                href="#contact" 
                className="bg-white text-black px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider"
              >
                Connect
              </Link>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </header>
  )
}