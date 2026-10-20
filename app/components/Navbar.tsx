'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled ? 'bg-white/90 shadow-[0_4px_24px_rgba(20,32,46,0.08)] ring-1 ring-[#DCE3EB]' : 'bg-transparent'
        }`}
      >
        <a href="#top" className="font-display text-lg text-[#14202E]">Sarvagya Singh</a>
        <ul className="flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href} className={l.label === 'Contact' ? '' : 'hidden sm:block'}>
              <a
                href={l.href}
                className={`rounded-full px-3.5 py-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3E5873] ${
                  l.label === 'Contact' ? 'bg-[#14202E] text-white hover:bg-[#3E5873]' : 'text-[#4B5B6D] hover:text-[#14202E]'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}