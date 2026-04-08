'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: "01",
    title: "Pulsage: Clinical AI System",
    category: "Multimodal Deep Learning",
    description: "Architected a dual-modal CNN ensemble fusing 12-lead ECG and cMRI data for Hypertrophic Cardiomyopathy detection. Validated with 98.5% sensitivity at Bokaro General Hospital.",
    metrics: ["98.5% Accuracy", "Global Rank 1", "ACES ISRC"],
    tech: ["PyTorch", "ResNet", "EfficientNet", "Vercel Edge"],
    link: "http://pulseage.vercel.app/",
    status: "Clinical Validation"
  },
  {
    id: "02",
    title: "PINN Framework: Photon Transport",
    category: "Computational Physics",
    description: "Developed a Physics-Informed Neural Network (PINN) to approximate photon transport. Achieved a 10,000x speedup over traditional Monte Carlo sampling with <2% error regimes.",
    metrics: ["10,000x Speedup", "UNESCO Global Award", "Scientific Creativity"],
    tech: ["Python", "PDE-Constrained ML", "NumPy", "Physics-Informed"],
    link: "#", // Add paper link if available
    status: "UNESCO Awarded"
  },
  {
    id: "03",
    title: "Nandani: Edge-AIoT Platform",
    category: "Veterinary Diagnostics",
    description: "Designed LSTM-based anomaly detection for livestock health via embedded IoT collars. Reduced false positives by 40% and deployed across 40+ rural farms.",
    metrics: ["40+ Rural Farms", "National Rank 2", "40% FP Reduction"],
    tech: ["Embedded C++", "LSTM", "IoT Sensors", "Real-Time Inference"],
    link: "https://gauseva-ai.vercel.app/",
    status: "Active Deployment"
  }
]

export default function SystemDossiers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section id="projects" className="py-60 px-6 bg-transparent relative">
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        
        {/* Institutional Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-24"
        >
          <span className="text-[11px] font-bold tracking-[0.4em] text-[#8DA1B9] uppercase mb-6 block">
            Technical / Dossiers
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black leading-[1.05]">
            Deployed Systems & <br />
            <span className="text-zinc-400">Validated Research.</span>
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative block bg-white/40 backdrop-blur-md border border-zinc-100 rounded-[32px] p-8 md:p-12 hover:border-[#8DA1B9]/30 transition-all duration-500"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Content */}
                <div className="md:col-span-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono font-bold text-zinc-300">[{project.id}]</span>
                    <div className="flex items-center gap-2 px-3 py-1 bg-[#007AFF]/5 rounded-full border border-[#007AFF]/10">
                      <div className="w-1 h-1 rounded-full bg-[#007AFF] animate-pulse" />
                      <span className="text-[10px] font-bold tracking-widest text-[#007AFF] uppercase">{project.status}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 flex items-center gap-3">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-[#007AFF] transition-colors" />
                    </h3>
                    <p className="text-sm font-bold text-[#8DA1B9] uppercase tracking-widest">{project.category}</p>
                  </div>

                  <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-mono text-zinc-400 border border-zinc-100 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Performance Metrics */}
                <div className="md:col-span-4 h-full flex flex-col justify-between">
                  <div className="space-y-6 md:pl-12 md:border-l border-zinc-100">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="group/metric">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1 group-hover/metric:text-[#007AFF] transition-colors">Key Result 0{i+1}</p>
                        <p className="text-xl font-bold text-black">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}