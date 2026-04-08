'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Award, Zap, Terminal, Microscope, Cpu } from 'lucide-react'

const milestones = [
  {
    year: "2025",
    rank: "Global Finalist",
    title: "UNESCO Quantum Science Competition",
    description: "Physics-Informed Neural Network (PINN) framework for photon behavior simulation. Awarded for Scientific Creativity.",
    tag: "Quantum Physics",
    icon: Microscope
  },
  {
    year: "2024",
    rank: "Global Rank 1",
    title: "ACES ISRC Cardiac AI Competition",
    description: "Architected Pulsage: a multimodal ECG/cMRI diagnostic ensemble with 98.5% sensitivity. Validated at Bokaro General Hospital.",
    tag: "Medical AI",
    icon: Zap
  },
  {
    year: "2024",
    rank: "Top 7% Selection",
    title: "IISER Bhopal Summer Fellowship",
    description: "Selected from 3,500+ applicants for advanced research in RAG systems and computational biology.",
    tag: "Research Fellowship",
    icon: Terminal
  },
  {
    year: "2024",
    rank: "All-India Rank 15",
    title: "World Robotics Olympiad (WRO)",
    description: "Developed an autonomous structural health monitoring rover using LiDAR fusion and real-time computer vision.",
    tag: "Robotics",
    icon: Cpu
  },
  {
    year: "2023",
    rank: "National Rank 2",
    title: "NIT Industry Academia Conclave",
    description: "National recognition for GauSeva AI (Nandani), an IoT-edge platform for cattle health anomaly detection.",
    tag: "IoT & Edge AI",
    icon: Award
  }
]

export default function ArchitecturalMilestones() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])

  return (
    <section ref={containerRef} id="milestones" className="py-60 px-6 bg-white relative overflow-hidden">
      
      {/* Premium Blueprint Background */}
      <motion.div style={{ y: gridY }} className="absolute inset-0 -z-10 opacity-[0.08]">
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: `radial-gradient(#8DA1B9 1px, transparent 1px)`, 
               backgroundSize: '44px 44px' 
             }} />
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: `linear-gradient(#8DA1B9 0.8px, transparent 0.8px), linear-gradient(90deg, #8DA1B9 0.8px, transparent 0.8px)`, 
               backgroundSize: '180px 180px' 
             }} />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-32">
          <span className="text-[11px] font-bold tracking-[0.5em] text-[#8DA1B9] uppercase mb-6 block">
            VALIDATED ACHIEVEMENTS
          </span>
          <h2 className="text-5xl md:text-7xl font-light tracking-[-1px] text-black leading-none">
            Milestones that <span className="text-[#8DA1B9]">define me.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Vertical Progress Line */}
          <div className="absolute left-5 md:left-1/2 top-8 bottom-8 w-0.5 bg-zinc-100 md:-translate-x-1/2">
            <motion.div 
              style={{ scaleY }} 
              className="absolute top-0 left-0 w-full origin-top bg-gradient-to-b from-[#007AFF] to-[#8DA1B9] rounded-full"
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            {milestones.map((milestone, i) => {
              const Icon = milestone.icon
              const isEven = i % 2 === 0

              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className={`relative flex flex-col md:flex-row items-start gap-10 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-5 md:left-1/2 w-10 h-10 -translate-x-1/2 z-30 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white border-4 border-[#007AFF] rounded-2xl shadow-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#007AFF]" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white border border-zinc-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm font-semibold text-[#8DA1B9] tracking-widest">{milestone.year}</span>
                        <span className="px-4 py-1.5 text-xs font-bold bg-[#007AFF]/5 text-[#007AFF] rounded-2xl border border-[#007AFF]/10">
                          {milestone.rank}
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold leading-tight mb-3 text-black group-hover:text-[#007AFF] transition-colors">
                        {milestone.title}
                      </h3>

                      <p className="text-zinc-600 leading-relaxed mb-6">
                        {milestone.description}
                      </p>

                      <div className="inline-flex items-center px-4 h-8 text-xs font-medium bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-500">
                        {milestone.tag}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Signature Footer */}
        <div className="mt-40 text-center">
        
        </div>
      </div>
    </section>
  )
}