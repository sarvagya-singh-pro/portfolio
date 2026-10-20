'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: "01",
    title: "Nandani: Edge-AIoT Livestock Health Platform",
    category: "Lead Engineer • Team of 3",
    description: "Compressed an LSTM anomaly detector onto a Cortex-M4 collar (256 KB RAM, under 10 mW). Architected offline-first MQTT + SQLite sync for intermittent 2G and deployed across 40+ smallholder farms, with IIT (ISM) on hardware.",
    metrics: ["40+ Farms Deployed", "40% Fewer False Positives", "National Rank 2 • NIT Conclave"],
    tech: ["LSTM", "INT8 Quantization", "MQTT", "SQLite", "Cortex-M4"],
    link: "https://gauseva-ai.vercel.app/",
    status: "Deployed"
  },
  {
    id: "02",
    title: "PulseAge: Multimodal Cardiac Diagnosis Support",
    category: "Team of 3",
    description: "ResNet-50 + EfficientNet-B4 ensemble fusing ECG and cardiac MRI to flag hypertrophic cardiomyopathy. Handles 1:8 class imbalance with focal loss, with sub-200 ms inference on GPU-free hardware after INT8 quantization.",
    metrics: ["Sub-200 ms Inference", "ECG + cMRI Fusion", "1:8 Imbalance Handled"],
    tech: ["PyTorch", "ResNet-50", "EfficientNet-B4", "Focal Loss", "INT8"],
    link: "https://pulseage.vercel.app/",
    status: "Live Demo"
  },
  {
    id: "03",
    title: "Autonomous Inspection Rover",
    category: "Navigation & CV Lead • Team of 3",
    description: "ROS2 rover with LiDAR–camera EKF fusion and A*/DWA path planning, plus TensorRT-accelerated YOLO. Led navigation and computer vision integration.",
    metrics: ["All-India Rank 15", "35 FPS YOLO", "Under 50 ms Latency"],
    tech: ["ROS2", "YOLO", "TensorRT", "EKF", "A* / DWA"],
    link: "",
    status: "WRO Nationals"
  },
  {
    id: "04",
    title: "Blue Ocean: Multi-Agent Market & Regulatory Intelligence",
    category: "Solo Project",
    description: "Multi-agent system (Gemini 3 Pro) that tracks competitor activity and regulatory change, with an RSS ingestion pipeline over 10+ sources accelerated with NVIDIA RAPIDS.",
    metrics: ["Top 10 of 1,500+ Teams", "10+ Sources Ingested", "Google GenAI Hackathon APAC"],
    tech: ["Gemini 3 Pro", "Multi-Agent", "NVIDIA RAPIDS", "RSS"],
    link: "",
    status: "Hackathon"
  }
]

export default function SystemDossiers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            Systems Built <br />
            <span className="text-zinc-400">Under Constraints.</span>
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link || undefined}
              target={project.link ? "_blank" : undefined} rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative block bg-white/60 border border-zinc-100 rounded-[32px] p-8 md:p-12 hover:border-[#8DA1B9]/30 transition-all duration-500"
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
                      {project.link && <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-[#007AFF] transition-colors" />}
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