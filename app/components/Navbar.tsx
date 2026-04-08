'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#research', label: 'Research' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center p-6 pointer-events-none">
      <motion.nav
        layout
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 28,
        }}
        className={`
          pointer-events-auto flex items-center justify-between px-8 py-3 border transition-all duration-500
          ${isScrolled 
            ? 'w-[380px] bg-white/75 border-zinc-200/60 backdrop-blur-2xl shadow-xl rounded-3xl' 
            : 'w-full max-w-6xl bg-transparent border-transparent'
          }
        `}
      >
        {/* Personal Branding */}
        <motion.div layout="position" className="flex items-center gap-3">
          {/* Clean "S" Logo */}
          <div className="w-8 h-8 bg-black rounded-2xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 duration-300 shadow-inner">
            <span className="text-white text-2xl font-semibold tracking-[-1px] leading-none translate-y-px">
              S
            </span>
          </div>

          {/* Name (only visible when not scrolled) */}
          {!isScrolled && (
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[15px] font-semibold tracking-[-0.02em] text-black whitespace-nowrap"
            >
              Sarvagya Singh
            </motion.span>
          )}
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.div key={link.label} layout="position">
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-tight transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-zinc-500 hover:text-black' 
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          {/* Inquiry Button (only visible when not scrolled) */}
          {!isScrolled && (
            <motion.div layout="position">
              <Link
                href="#contact"
                className="bg-black text-white text-sm font-medium px-6 py-2.5 rounded-3xl hover:bg-zinc-800 transition-all shadow-sm"
              >
                Inquiry
              </Link>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </header>
  )
}