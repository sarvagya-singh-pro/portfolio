'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Heart, Stethoscope, Pill, BookOpen, ExternalLink, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "PulseSage",
    subtitle: "AI Cardiac Diagnostic System",
    description: "Revolutionary AI system for early cardiac disease detection, validated by medical professionals. Leverages deep learning to analyze heart rhythms and predict cardiovascular conditions with unprecedented accuracy.",
    tags: ["Deep Learning", "Healthcare", "Medical AI", "Diagnostics"],
    icon: Heart,
    gradient: "from-red-500/10 to-pink-500/10",
    glowColor: "rgba(239, 68, 68, 0.2)",
    iconColor: "text-red-400",
    impact: "Validated by 15+ cardiologists",
    link: "http://pulseage.vercel.app/"
  },
  {
    id: 2,
    title: "GauSeva",
    subtitle: "AI Telemedicine Collar for Livestock",
    description: "Groundbreaking wearable AI technology developed in collaboration with IIT-ISM. Real-time health monitoring and disease prediction for livestock, revolutionizing rural veterinary care and farmer livelihoods.",
    tags: ["IoT", "Machine Learning", "Agriculture", "IIT Collaboration"],
    icon: Stethoscope,
    gradient: "from-green-500/10 to-emerald-500/10",
    glowColor: "rgba(16, 185, 129, 0.2)",
    iconColor: "text-emerald-400",
    impact: "IIT-ISM Research Collaboration",
    link: "https://gauseva-ai.vercel.app/"
  },
  {
    id: 3,
    title: "PromptBiotics",
    subtitle: "LLM-Powered Nutrition Assistant",
    description: "Intelligent nutrition guidance system powered by large language models. Developed under the Young Asians Fellowship, providing personalized dietary recommendations and health insights through conversational AI.",
    tags: ["LLM", "NLP", "Nutrition", "Fellowship Project"],
    icon: Pill,
    gradient: "from-blue-500/10 to-purple-500/10",
    glowColor: "rgba(59, 130, 246, 0.2)",
    iconColor: "text-blue-400",
    impact: "Young Asians Fellowship",
    link: "https://promptbiotics.org/"
  },
  {
    id: 4,
    title: "Tech Dragon",
    subtitle: "Future Tech Insights & Research",
    description: "Democratizing AI education through accessible, high-quality content. A comprehensive publication making advanced machine learning concepts understandable for students and researchers across India.",
    tags: ["Education", "Research", "Publication", "Community"],
    icon: BookOpen,
    gradient: "from-purple-500/10 to-indigo-500/10",
    glowColor: "rgba(139, 92, 246, 0.2)",
    iconColor: "text-purple-400",
    impact: "1000+ readers reached",
    link: "https://tech-dragon.co.in/"
  },
]

export default function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="research" className="py-32 px-6 md:px-12 relative overflow-hidden bg-black">
      {/* FADE IN EFFECT AT TOP */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, transparent, #000000)'
        }}
      />

      {/* Subtle floating orbs - very minimal */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)'
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Minimal grid - very subtle */}
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
          {/* Section Header - Clean and minimal */}
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
                Research & Projects
              </h2>
              <p className="text-lg text-white/40 max-w-3xl mx-auto mt-4 font-light">
                Transforming healthcare through intelligent systems and human-centered AI innovation
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

          {/* Projects Grid - Refined and minimal */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative block"
              >
                {/* Subtle glow on hover */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${project.glowColor}, transparent)`,
                  }}
                />

                <motion.div
                  className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 cursor-pointer overflow-hidden relative"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Very subtle gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-700`} />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Icon & Title - Clean */}
                    <div className="space-y-4">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-500"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          boxShadow: hoveredProject === project.id ? `0 4px 20px ${project.glowColor}` : 'none',
                        }}
                      >
                        <project.icon className={`w-7 h-7 ${project.iconColor}`} strokeWidth={1.5} />
                      </motion.div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-500">
                          {project.title}
                        </h3>
                        <p className={`text-sm font-medium ${project.iconColor} mt-1 opacity-80`}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/50 leading-relaxed text-sm font-light group-hover:text-white/60 transition-colors duration-500">
                      {project.description}
                    </p>

                    {/* Impact Badge - Minimal */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-sm text-purple-300 font-medium border border-white/10 group-hover:bg-white/10 transition-colors duration-500">
                      <ExternalLink className="w-4 h-4" />
                      {project.impact}
                    </div>

                    {/* Tags - Simple */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/40 border border-white/10 hover:bg-white/10 hover:text-white/60 transition-all duration-300"
                          whileHover={{ y: -2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Visit Project - Subtle animation */}
                    <motion.div
                      className="flex items-center gap-2 text-purple-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{ x: hoveredProject === project.id ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Visit Project</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Minimal shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: hoveredProject === project.id ? "100%" : "-100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FADE OUT EFFECT AT BOTTOM */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0a0a0a)'
        }}
      />
    </section>
  )
}
