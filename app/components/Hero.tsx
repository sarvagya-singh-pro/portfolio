'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'
import ParticleBackgroundProfessional from './ParticleBackground'
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [roleText, setRoleText] = useState('Software Engineer')
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  const springConfig = { damping: 25, stiffness: 150 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const scrambleText = useCallback((target: string) => {
    const chars = '!<>-_\\/[]{}—=+*^?#________'
    let iteration = 0
    const originalText = target
    
    const interval = setInterval(() => {
      setRoleText(
        originalText
          .split('')
          .map((char, index) => {
            if (index < iteration) return originalText[index]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      if (iteration >= originalText.length) clearInterval(interval)
      iteration += 1/2
    }, 30)
    
    return () => clearInterval(interval)
  }, [])

  const techDetails: Record<string, string> = {
    'TypeScript': 'Type-safe scalable architecture',
    'React': 'Component systems & performance',
    'Node.js': 'High-throughput backend services',
    'Rust': 'Systems programming & WebAssembly',
    'WebGL': 'GPU-accelerated rendering'
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full  text-stone-900 overflow-hidden selection:bg-stone-200 cursor-none"
    >
      <ParticleBackgroundProfessional/>
      <motion.div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          background: useTransform(
            [smoothMouseX, smoothMouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(120, 113, 108, 0.15), transparent 50%)`
          )
        }}
      />

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <motion.div 
        className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        style={{ y, opacity }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-stone-400 font-medium cursor-pointer"
          onMouseEnter={() => scrambleText('Frontend Systems')}
          onMouseLeave={() => scrambleText('Software Engineer')}
        >
     
        </motion.div>

        <div className="mb-8 overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight text-stone-900 leading-[0.9]"
          >
            <MagneticText text="Sarvagya" mouseX={smoothMouseX} mouseY={smoothMouseY} />
            <br />
            <span className="italic font-normal text-stone-500">
              <MagneticText text="Singh" mouseX={smoothMouseX} mouseY={smoothMouseY} delay={0.1} />
            </span>
          </motion.h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-light">
              Building high-performance web applications and design systems. 
              Specialized in frontend architecture, TypeScript ecosystems, and 
              scaling user interfaces for millions of users.
            </p>
            
            <div className="flex flex-wrap gap-3 text-sm">
              {Object.entries(techDetails).map(([tech, desc], index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => setHoveredTech(tech)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <motion.span 
                    className="px-4 py-2 bg-white border border-stone-200 rounded-full text-stone-600 cursor-pointer inline-block"
                    whileHover={{ scale: 1.05, borderColor: 'rgb(68, 64, 60)', color: 'rgb(28, 25, 23)' }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {tech}
                  </motion.span>
                  
                  <AnimatePresence>
                    {hoveredTech === tech && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-stone-900 text-stone-100 text-xs whitespace-nowrap rounded-md pointer-events-none z-50"
                      >
                        {desc}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-900" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col justify-end"
          >
            <nav className="space-y-1">
              {[
                { label: 'Projects', desc: 'Selected work', count: '12' },
                { label: 'Experience', desc: 'Engineering roles', count: '04' },
                { label: 'Contact', desc: 'Get in touch', count: '→' }
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href="#"
                  className="group flex items-center justify-between py-5 border-b border-stone-200 transition-colors relative overflow-hidden"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-stone-100 -z-10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm text-stone-400 font-mono w-8">0{index + 1}</span>
                    <span className="text-2xl font-serif font-light">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-stone-400 group-hover:text-stone-600">{item.desc}</span>
                    <span className="text-sm font-mono text-stone-300 group-hover:text-stone-900">{item.count}</span>
                  </div>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>

        <motion.div 
          className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block opacity-[0.06]"
          style={{ 
            x: useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-20, 20]),
            y: useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-20, 20])
          }}
        >
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" className="text-stone-900">
            <motion.circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
            <motion.circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }} />
            <motion.circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }} />
            {[0, 45, 90, 135].map((rotation, i) => (
              <motion.line key={rotation} x1="200" y1="50" x2="200" y2="350" stroke="currentColor" strokeWidth="0.5" transform={`rotate(${rotation} 200 200)`} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.6 + i * 0.1 }} />
            ))}
          </svg>
        </motion.div>
      </motion.div>

      <CustomCursor mouseX={smoothMouseX} mouseY={smoothMouseY} />

     
    </section>
  )
}

function MagneticText({ text, mouseX, mouseY, delay = 0 }: { text: string, mouseX: any, mouseY: any, delay?: number }) {
  return (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <MagneticLetter key={i} char={char} mouseX={mouseX} mouseY={mouseY} index={i} delay={delay} />
      ))}
    </span>
  )
}

function MagneticLetter({ char, mouseX, mouseY, index, delay }: { char: string, mouseX: any, mouseY: any, index: number, delay: number }) {
  const letterRef = useRef<HTMLSpanElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  useEffect(() => {
    const unsubscribeX = mouseX.on('change', (latest: number) => {
      if (!letterRef.current) return
      const rect = letterRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const distance = latest - centerX
      if (Math.abs(distance) < 100) x.set(-distance * 0.1)
      else x.set(0)
    })
    
    const unsubscribeY = mouseY.on('change', (latest: number) => {
      if (!letterRef.current) return
      const rect = letterRef.current.getBoundingClientRect()
      const centerY = rect.top + rect.height / 2
      const distance = latest - centerY
      if (Math.abs(distance) < 100) y.set(-distance * 0.1)
      else y.set(0)
    })
    
    return () => { unsubscribeX(); unsubscribeY() }
  }, [mouseX, mouseY, x, y])
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })
  
  return (
    <motion.span
      ref={letterRef}
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.03 + delay, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block"
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}

function CustomCursor({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
  const [isHovering, setIsHovering] = useState(false)
  
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }
    window.addEventListener('mouseover', handleMouseOver)
    return () => window.removeEventListener('mouseover', handleMouseOver)
  }, [])
  
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[999] mix-blend-difference hidden md:block"
      style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        className="bg-white rounded-full"
        animate={{ width: isHovering ? 48 : 8, height: isHovering ? 48 : 8, opacity: isHovering ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </motion.div>
  )
}