'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FileText, Download, ExternalLink, BookOpen, Award, Hash, Calendar, Layers, Activity } from 'lucide-react'

const publications = [
  {
    id: 1,
    title: "Physics-Informed Neural Network for Photon Behavior Simulation in Biological Tissue",
    authors: "Sarvagya Singh",
    venue: "UNESCO International Year of Quantum Science Competition",
    year: "2025",
    type: "Conference Finalist", // Adjusted type
    abstract: "Developed physics-informed neural network simulating photon behavior in biological tissue for quantum science applications. Selected as finalist at UNESCO Light & Quantum Science Competition. This demonstrates complex multi-domain computational skills.",
    keywords: ["Quantum Physics", "Neural Networks", "Medical Imaging", "PINN", "Computational"],
    pdf: "/unesco.pdf",
    award: true, // New: Award distinction
  
  },
  {
    id: 2,
    title: "Multimodal Explainable AI for Hypertrophic Cardiomyopathy Diagnosis Using ECG and cMRI",
    authors: "Sarvagya Singh",
    venue: "Independent Research - Validated with Cardiologists",
    year: "2024",
    type: "Validated Thesis", // Adjusted type
    abstract: "Pioneered multimodal explainable AI diagnostic system combining ECG and cardiac MRI analysis for HCM detection, achieving 98.5% accuracy. Validated with cardiologists at Bokaro General Hospital. This showcases production-ready, high-accuracy model design.",
    keywords: ["Medical AI", "Explainable AI", "Cardiology", "Deep Learning", "Multimodal"],
    pdf: "https://drive.google.com/file/d/1zycW6n2YAEX5jBRN7JC7Ro-GVi8UOAzs/view?usp=sharing",
    award: false,
  },
  {
    id: 3,
    title: "Agent-Based Transmission Modeling and Forecasting for Lumpy Skin Disease",
    authors: "Sarvagya Singh",
    venue: "Science Mentorship Institute - Computational Science Program",
    year: "2024",
    type: "Mentored Research", // Adjusted type
    abstract: "Developed agent-based transmission model and forecasting system for lumpy skin disease in livestock. Research conducted under mentorship at University of Hawaii. This demonstrates competency in dynamic system modeling.",
    keywords: ["Agent-Based Modeling", "Epidemiology", "Computational Biology", "Disease Forecasting", "Modeling"],
    pdf: "https://drive.google.com/file/d/1kvOiGPBWWzVBGG1V3InBi9GeuCuyXjh7/view?usp=sharing",
    award: false,
  }
]

export default function FormalResearchIndex() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredPaper, setHoveredPaper] = useState<number | null>(null)
  const [expandedAbstract, setExpandedAbstract] = useState<number | null>(null)

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }
  
  return (
    <section id="publications" className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#050505]">
      
      {/* Dynamic Background Element - Consistent with previous sections */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent)'
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          
          {/* Section Header - Consistent Architect Style */}
          <div className="text-center space-y-4">
            <motion.div variants={fadeIn}>
              <h2 
                className="text-4xl md:text-5xl font-semibold tracking-tighter bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #6366f1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Formal Research Index
              </h2>
              <p className="text-lg text-zinc-500 max-w-3xl mx-auto mt-4 font-light">
                Peer-level research showcasing depth in computational systems, AI, and medical domains.
              </p>
              
              <motion.div 
                className="w-24 h-px mx-auto mt-6"
                style={{ background: 'linear-gradient(90deg, #6366f1, #a78bfa)' }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>
          </div>

          {/* Publications List - Now a Structured Grid */}
          <div className="space-y-6">
            {publications.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                onMouseEnter={() => setHoveredPaper(paper.id)}
                onMouseLeave={() => setHoveredPaper(null)}
                className="group relative"
              >
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg"
                  style={{
                    background: `radial-gradient(circle at center, rgba(99, 102, 241, 0.2), transparent)`,
                  }}
                />

                <motion.div
                  className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 md:p-8 cursor-pointer relative overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-900/20"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  
                  {/* Content - 3-Column Grid for Technical Readability */}
                  <div className="relative z-10 grid md:grid-cols-[1fr_200px] gap-6">
                    
                    {/* LEFT COLUMN: Title, Abstract, Keywords */}
                    <div className="space-y-4">
                        
                        {/* Title and Index */}
                        <div className="flex items-start justify-between">
                            <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-500 leading-snug">
                              {paper.title}
                            </h3>
                            <span className="text-3xl font-mono text-zinc-700/50 font-extrabold tracking-tight md:block hidden">
                                // 0{paper.id}
                            </span>
                        </div>
                        
                        {/* Abstract */}
                        <div className="space-y-2 border-l-2 border-indigo-600/50 pl-4 py-1">
                          <p className={`text-zinc-400 leading-relaxed text-sm font-light ${
                            expandedAbstract === paper.id ? '' : 'line-clamp-2'
                          }`}>
                            {paper.abstract}
                          </p>
                          <button
                            onClick={() => setExpandedAbstract(expandedAbstract === paper.id ? null : paper.id)}
                            className="text-indigo-400 text-xs font-mono tracking-wider hover:text-indigo-300 transition-colors"
                          >
                            {expandedAbstract === paper.id ? 'CLOSE LOG' : 'READ DOSSIER'}
                          </button>
                        </div>

                        {/* Keywords (Monospace, Tech aesthetic) */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {paper.keywords.map((keyword, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs rounded bg-zinc-800 text-zinc-500 font-mono border border-zinc-700 hover:bg-zinc-700/50 transition-colors duration-300"
                              whileHover={{ y: -1 }}
                            >
                                <Hash className="w-3 h-3 inline mr-1 align-sub" strokeWidth={2} />
                              {keyword}
                            </span>
                          ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Metadata and Actions */}
                    <div className="flex flex-col justify-between pt-2">
                        <div className="space-y-3">
                            {/* Metadata Block */}
                            <div className="space-y-1 text-xs font-mono text-zinc-500 border border-zinc-800 rounded-lg p-3 bg-zinc-900/30">
                                <p className="flex items-center gap-2">
                                    <Layers className="w-3 h-3 text-indigo-500" />
                                    <span className="uppercase text-zinc-600">Type:</span> 
                                    <span className="text-white">{paper.type}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Calendar className="w-3 h-3 text-indigo-500" />
                                    <span className="uppercase text-zinc-600">Year:</span> 
                                    <span className="text-white">{paper.year}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Activity className="w-3 h-3 text-indigo-500" />
                                    <span className="uppercase text-zinc-600">Venue:</span> 
                                    <span className="text-white line-clamp-1">{paper.venue}</span>
                                </p>
                            </div>
                            
                            {/* Award Badge */}
                            {paper.award && (
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-600/20 text-yellow-300 text-xs font-medium border border-yellow-500/30">
                                    <Award className="w-4 h-4" />
                                    Award Finalist
                                </div>
                            )}
                        </div>
                        
                        {/* Actions */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            {paper.pdf && (
                                <motion.a
                                    href={paper.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600/20 border border-indigo-500/20 text-indigo-300 text-sm font-medium hover:bg-indigo-600/30 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {paper.pdf.includes('drive.google') ? <ExternalLink className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                                    <span>{paper.pdf.includes('drive.google') ? 'View Paper' : 'Download PDF'}</span>
                                </motion.a>
                            )}
                        </div>
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
            <p className="text-zinc-600 text-sm font-light">
              For full research access or collaboration inquiries, please{' '}
              <a href="#contact" className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors underline">
                initiate secure connection
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* FADE OUT EFFECT AT BOTTOM */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, #050505)'
        }}
      />
    </section>
  )
}