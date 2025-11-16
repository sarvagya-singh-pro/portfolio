'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FileText, Download, ExternalLink, BookOpen, Award } from 'lucide-react'

const publications = [
  {
    id: 1,
    title: "Physics-Informed Neural Network for Photon Behavior Simulation in Biological Tissue",
    authors: "Sarvagya Singh",
    venue: "UNESCO International Year of Quantum Science Competition",
    year: "2025",
    type: "Conference",
    abstract: "Developed physics-informed neural network simulating photon behavior in biological tissue for quantum science applications. Selected as finalist at UNESCO Light & Quantum Science Competition.",
    keywords: ["Quantum Physics", "Neural Networks", "Medical Imaging", "PINN"],
    pdf: "/papers/unesco-quantum.pdf",
  
  },
  {
    id: 2,
    title: "Multimodal Explainable AI for Hypertrophic Cardiomyopathy Diagnosis Using ECG and cMRI",
    authors: "Sarvagya Singh",
    venue: "Independent Research - Validated with Cardiologists",
    year: "2024",
    type: "Research Paper",
    abstract: "Pioneered multimodal explainable AI diagnostic system combining ECG and cardiac MRI analysis for HCM detection, achieving 98.5% accuracy. Validated with cardiologists at Bokaro General Hospital.",
    keywords: ["Medical AI", "Explainable AI", "Cardiology", "Deep Learning"],
    pdf: "/papers/pulsesage-hcm.pdf",
    link: "http://pulseage.org/",
   
  },
  {
    id: 3,
    title: "Agent-Based Transmission Modeling and Forecasting for Lumpy Skin Disease",
    authors: "Sarvagya Singh",
    venue: "Science Mentorship Institute - Computational Science Program",
    year: "2024",
    type: "Research Paper",
    abstract: "Developed agent-based transmission model and forecasting system for lumpy skin disease in livestock. Research conducted under mentorship at University of Hawaii.",
    keywords: ["Agent-Based Modeling", "Epidemiology", "Computational Biology", "Disease Forecasting"],
    pdf: "/papers/lumpy-skin-disease.pdf",
    status: "Published"
  },
  {
    id: 4,
    title: "IoT-Enabled AI Telemedicine System for Real-Time Livestock Disease Diagnosis",
    authors: "Sarvagya Singh, IIT-ISM Research Team",
    venue: "IIT (ISM) Dhanbad Research Collaboration",
    year: "2024",
    type: "Research Paper",
    abstract: "Built IoT/AI telemedicine collar system for 16 livestock diseases with real-time monitoring capabilities. Secured trial commitment to serve 40+ rural farms in Jharkhand.",
    keywords: ["IoT", "Agriculture", "Telemedicine", "Edge Computing"],
    pdf: "/papers/gauseva-iot.pdf",
    link: "https://gauseva-ai.vercel.app/",
    status: "Under Review"
  },
  {
    id: 5,
    title: "LLM-Based Personalized Nutrition Assistant with Medical Safety Validation",
    authors: "Sarvagya Singh",
    venue: "Young Asians Fellowship Program",
    year: "2024",
    type: "Technical Report",
    abstract: "Developed LLM-powered nutrition app for 8 chronic diseases with comprehensive medical safety validation. Presented findings at National University of Singapore.",
    keywords: ["Large Language Models", "Healthcare", "NLP", "Personalization"],
    pdf: "/papers/promptbiotics-llm.pdf",
    link: "https://promptbiotics.org/",
    status: "Published"
  },
  {
    id: 6,
    title: "Autonomous Structural Health Monitoring System Using LiDAR and Computer Vision",
    authors: "Sarvagya Singh",
    venue: "Independent Research Project",
    year: "2024",
    type: "Technical Report",
    abstract: "Led autonomous rover-drone model for structural fault detection using LiDAR, ultrasonic sensors, and AI. Designed to prevent inspector fatalities in hazardous environments.",
    keywords: ["Robotics", "Computer Vision", "LiDAR", "Safety Systems"],
    pdf: "/papers/structural-monitoring.pdf",
    status: "Published"
  },
]

export default function Publications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredPaper, setHoveredPaper] = useState<number | null>(null)
  const [expandedAbstract, setExpandedAbstract] = useState<number | null>(null)

  return (
    <section id="publications" className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#0a0a0a]">
      {/* FADE IN EFFECT AT TOP */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, transparent, #0a0a0a)'
        }}
      />

      {/* Subtle floating orb */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)'
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Minimal grid */}
      <div className="absolute inset-0 opacity-[0.01]" style={{
        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '4rem 4rem'
      }} />
      
      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-4xl md:text-5xl font-light tracking-tight bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Research Publications
              </h2>
              <p className="text-lg text-white/40 max-w-3xl mx-auto mt-4 font-light">
                Academic research in AI, healthcare, and computational systems
              </p>
              
              {/* Simple underline */}
              <motion.div 
                className="w-20 h-px mx-auto mt-6"
                style={{ background: 'linear-gradient(90deg, #667eea, #764ba2)' }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {publications.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredPaper(paper.id)}
                onMouseLeave={() => setHoveredPaper(null)}
                className="group relative"
              >
                {/* Subtle glow on hover */}
                <motion.div
                  className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg"
                  style={{
                    background: `radial-gradient(circle at center, rgba(139, 92, 246, 0.1), transparent)`,
                  }}
                />

                <motion.div
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8 cursor-pointer relative overflow-hidden"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                       
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-500 leading-snug">
                          {paper.title}
                        </h3>
                        <p className="text-sm text-white/50 mt-2">
                          {paper.authors} • {paper.venue}
                        </p>
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-purple-400" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Abstract */}
                    <div className="space-y-2">
                      <p className={`text-white/50 leading-relaxed text-sm font-light ${
                        expandedAbstract === paper.id ? '' : 'line-clamp-2'
                      }`}>
                        {paper.abstract}
                      </p>
                      <button
                        onClick={() => setExpandedAbstract(expandedAbstract === paper.id ? null : paper.id)}
                        className="text-purple-400 text-xs hover:text-purple-300 transition-colors"
                      >
                        {expandedAbstract === paper.id ? 'Show less' : 'Read more'}
                      </button>
                    </div>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/40 border border-white/10"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {paper.pdf && (
                        <motion.a
                          href={paper.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium hover:bg-purple-500/20 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Download className="w-4 h-4" />
                          <span>PDF</span>
                        </motion.a>
                      )}
                      {paper.link && (
                        <motion.a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                      {paper.arxiv && (
                        <motion.a
                          href={paper.arxiv}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>arXiv</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Minimal shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: hoveredPaper === paper.id ? "100%" : "-100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center pt-8"
          >
            <p className="text-white/40 text-sm font-light">
              For collaboration inquiries or access to full papers, please{' '}
              <a href="#contact" className="text-purple-400 hover:text-purple-300 transition-colors underline">
                get in touch
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* FADE OUT EFFECT AT BOTTOM */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, #000000)'
        }}
      />
    </section>
  )
}
