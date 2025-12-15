'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const ParticleBackground = dynamic(
  () => import('./ParticleBackground'),
  { ssr: false }
)

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for "silky" smooth movement
  const springConfig = { damping: 25, stiffness: 150 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Spotlight Effect
  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
  )

  return (
    <section className="relative min-h-screen w-full bg-zinc-950 flex items-center justify-center overflow-hidden cursor-none">
      {/* The Physics Spotlight */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background }}
      />

      {/* Technical Grid Layer */}
      <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Floating Elements (The "Wow" factor) */}
      <motion.div
        style={{ x: useTransform(smoothX, [0, 1920], [20, -20]), y: useTransform(smoothY, [0, 1080], [20, -20]) }}
        className="relative z-10 max-w-5xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-indigo-500 uppercase mb-4">
            Computational Intelligence & Biology
          </span>
          <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter text-white leading-[0.8] mb-8 select-none">
            SARVAGYA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">SINGH</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12"
        >
          <p className="text-zinc-500 font-mono text-sm max-w-[280px] text-left border-l border-zinc-800 pl-4">
            // DEVELOPING INTELLIGENT <br />
            // SYSTEMS THAT HEAL <br />
            // LOC: 23.3441° N, 85.3091° E
          </p>
          
          <div className="h-px w-12 bg-zinc-800 hidden md:block" />

          {/* Magnetic-style Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-black rounded-full font-bold text-sm uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            Enter Research
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Custom Cursor Circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[999] mix-blend-difference"
        style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
      />
      <ParticleBackground/>
    </section>
  )
}