'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const techStack = [
  {
    domain: "AI & Machine Learning",
    focus: "Physics-Informed & Clinical Intelligence",
    technologies: [
      "PyTorch", 
      "Physics-Informed Neural Networks (PINNs)", 
      "Multimodal Deep Learning", 
      "CNNs & ResNet", 
      "MobileNet", 
      "Retrieval-Augmented Generation (RAG)", 
      "Adapter-Tuned LLMs"
    ]
  },
  {
    domain: "Edge Computing & IoT",
    focus: "Real-World Deployment",
    technologies: [
      "IoT Sensors & On-Device Sensing", 
      "Edge-Optimized Inference", 
      "Time-Series Modeling", 
      "Real-Time Processing", 
      "Low-Power Embedded Systems"
    ]
  },
  {
    domain: "Robotics & Computer Vision",
    focus: "Autonomous Systems",
    technologies: [
      "LiDAR-Based Navigation", 
      "Computer Vision & Object Detection", 
      "Ultrasonic Sensing", 
      "Autonomous Ground Rovers", 
      "Two-Stage AI Pipelines"
    ]
  },
  {
    domain: "Full-Stack & Platforms",
    focus: "Scalable Applications",
    technologies: [
      "Next.js", 
      "TypeScript", 
      "Node.js", 
      "Vercel", 
      "Tailwind CSS", 
      "Cloud-Connected Dashboards"
    ]
  }
]

export default function ArchitecturalStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const springTransition = { duration: 1, ease: [0.16, 1, 0.3, 1] }

  return (
    <section id="stack" className="py-60 px-6 bg-transparent relative">
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={springTransition}
          className="mb-24"
        >
          <span className="text-[11px] font-bold tracking-[0.4em] text-[#8DA1B9] uppercase mb-6 block">
            Technical / Stack
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black leading-[1.05]">
            Engineered for <br />
            <span className="text-zinc-400">Computational Rigor.</span>
          </h2>
        </motion.div>

        {/* Technical Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {techStack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...springTransition, delay: 0.1 * index }}
              className="group border-t border-zinc-100 pt-8"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">{item.domain}</h3>
                  <p className="text-sm font-medium text-[#8DA1B9] tracking-wide uppercase">{item.focus}</p>
                </div>
                <span className="text-[10px] font-mono text-zinc-300">0{index + 1}</span>
              </div>

              {/* Tag Cloud - Minimalist & Interactive */}
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-[12px] font-semibold text-zinc-500 border border-zinc-100 rounded-full bg-white/40 backdrop-blur-sm transition-all duration-300 hover:border-[#8DA1B9] hover:text-black hover:bg-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}