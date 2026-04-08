'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, FileText, Mail, Calendar } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-40 px-6 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* Header */}
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-8">
            Let’s collaborate.
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-medium mb-16 leading-relaxed">
            I’m always open to research initiatives, engineering challenges, and high-impact AI/ML projects.
          </p>

          {/* Action Grid */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-semibold transition-all hover:bg-zinc-800"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-100 text-black font-semibold hover:bg-zinc-200 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Clean Stats - No border-top boxes, just pure text */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            <StatItem value="6+" label="Publications" delay={0.1} isInView={isInView} />
            <StatItem value="1st" label="Global Rank" delay={0.2} isInView={isInView} />
            <StatItem value="Silver" label="National Award" delay={0.3} isInView={isInView} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StatItem({ value, label, delay, isInView }: { value: string, label: string, delay: number, isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center"
    >
      <span className="text-4xl font-bold tracking-tighter text-black">{value}</span>
      <span className="text-[12px] uppercase tracking-[0.1em] font-bold text-zinc-400 mt-2">{label}</span>
    </motion.div>
  )
}