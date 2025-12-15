'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Heart, Stethoscope, Pill, BookOpen, ExternalLink, ChevronRight, Hash } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "PulseSage: AI Cardiac Diagnostic System",
    subtitle: "AI Cardiac Diagnostic System",
    description: "Revolutionary AI system for early cardiac disease detection, validated by medical professionals. Leverages deep learning to analyze heart rhythms and predict cardiovascular conditions with unprecedented accuracy.",
    tags: ["Deep Learning", "Healthcare", "Medical AI", "Diagnostics", "Next.js"],
    icon: Heart,
    gradient: "from-red-600/10 to-pink-600/10",
    glowColor: "rgba(239, 68, 68, 0.3)",
    iconColor: "text-red-400",
    impact: "Validated by 15+ Cardiologists",
    rating: 98, // New: Impact rating percentage
    link: "http://pulseage.vercel.app/"
  },
  {
    id: 2,
    title: "GauSeva: AI Telemedicine Collar",
    subtitle: "AI Telemedicine Collar for Livestock",
    description: "Groundbreaking wearable AI technology developed in collaboration with IIT-ISM. Real-time health monitoring and disease prediction for livestock, revolutionizing rural veterinary care and farmer livelihoods.",
    tags: ["IoT", "Machine Learning", "Agriculture", "IIT Collaboration", "Python"],
    icon: Stethoscope,
    gradient: "from-green-600/10 to-emerald-600/10",
    glowColor: "rgba(16, 185, 129, 0.3)",
    iconColor: "text-emerald-400",
    impact: "IIT-ISM Research Collaboration",
    rating: 85,
    link: "https://gauseva-ai.vercel.app/"
  },
  {
    id: 3,
    title: "PromptBiotics: LLM Nutrition Assistant",
    subtitle: "LLM-Powered Nutrition Assistant",
    description: "Intelligent nutrition guidance system powered by large language models. Developed under the Young Asians Fellowship, providing personalized dietary recommendations and health insights through conversational AI.",
    tags: ["LLM", "NLP", "Nutrition", "Fellowship Project", "Prompt Eng."],
    icon: Pill,
    gradient: "from-blue-600/10 to-purple-600/10",
    glowColor: "rgba(59, 130, 246, 0.3)",
    iconColor: "text-blue-400",
    impact: "Young Asians Fellowship",
    rating: 75,
    link: "https://promptbiotics.org/"
  },
  {
    id: 4,
    title: "Tech Dragon: Future Tech Insights",
    subtitle: "Future Tech Insights & Research",
    description: "Democratizing AI education through accessible, high-quality content. A comprehensive publication making advanced machine learning concepts understandable for students and researchers across India.",
    tags: ["Education", "Research", "Publication", "Community", "React"],
    icon: BookOpen,
    gradient: "from-purple-600/10 to-indigo-600/10",
    glowColor: "rgba(139, 92, 246, 0.3)",
    iconColor: "text-purple-400",
    impact: "1000+ Readers Reached",
    rating: 90,
    link: "https://tech-dragon.co.in/"
  },
]

// Component to handle the visual progress bar animation
const VerticalRatingBar = ({ rating, glowColor }: { rating: number, glowColor: string }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    
    // Convert rating percentage to height percentage for bottom-up fill
    const fillHeight = `${rating}%` 

    return (
        <div ref={ref} className="w-2 h-full bg-zinc-800 rounded-full overflow-hidden relative">
            <motion.div
                className="absolute bottom-0 left-0 right-0 rounded-full"
                style={{
                    height: isInView ? fillHeight : 0,
                    background: `linear-gradient(to top, ${glowColor.replace('0.3', '0.8')} 50%, ${glowColor.replace('0.3', '0.5')})`,
                    boxShadow: `0 0 10px ${glowColor.replace('0.3', '0.8')}`
                }}
                initial={{ height: 0 }}
                animate={isInView ? { height: fillHeight } : { height: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
        </div>
    )
}


export default function ProjectDossiers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }
  
  return (
    <section id="research" className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#050505]">
      
      {/* Dynamic Background Element */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent)'
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
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
          
          {/* Section Header - Aligning with Architect style */}
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
                Full-Stack Dossiers
              </h2>
              <p className="text-lg text-zinc-500 max-w-3xl mx-auto mt-4 font-light">
                Production-grade projects demonstrating real-world impact and full-spectrum control over data, logic, and deployment.
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
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
                  className="h-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 cursor-pointer overflow-hidden relative transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-900/20"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  
                  {/* Subtle gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                  
                  {/* Content (Z-10 to stay above gradient) */}
                  <div className="relative z-10 flex space-x-6 h-full">
                    
                    {/* LEFT COLUMN: Icon, Title, Description, Tags */}
                    <div className="flex-grow space-y-6">
                        
                        {/* Icon & Title */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <motion.div
                                    className="w-12 h-12 rounded-lg bg-indigo-600/10 flex items-center justify-center border border-indigo-500/50"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <project.icon className={`w-6 h-6 ${project.iconColor}`} strokeWidth={1.5} />
                                </motion.div>
                                <span className="text-3xl font-mono text-zinc-700/50 font-extrabold tracking-tight">
                                    // 0{project.id}
                                </span>
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-semibold text-white tracking-tight">
                                {project.title}
                                </h3>
                                <p className={`text-sm font-medium ${project.iconColor} mt-1 opacity-80`}>
                                    {project.subtitle}
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-zinc-400 leading-relaxed text-sm font-light">
                            {project.description}
                        </p>

                        {/* Tags (Monospace for Technical Look) */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {project.tags.map((tag, tagIndex) => (
                                <motion.span
                                    key={tagIndex}
                                    className="px-3 py-1 text-xs rounded bg-zinc-800 text-zinc-500 font-mono border border-zinc-700 hover:bg-zinc-700/50 transition-colors duration-300"
                                    whileHover={{ y: -1 }}
                                >
                                    <Hash className="w-3 h-3 inline mr-1 align-sub" strokeWidth={2} />
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Impact Rating Bar & Badge */}
                    <div className="flex-shrink-0 w-24 flex flex-col justify-between items-end text-right">
                        
                        {/* Vertical Meter */}
                        <div className="h-28 w-2 flex justify-center items-end pt-2">
                            <VerticalRatingBar rating={project.rating} glowColor={project.glowColor} />
                        </div>

                        {/* Impact Badge */}
                        <div className="space-y-2">
                            <p className="text-xs font-mono uppercase text-zinc-600">
                                Impact/Status
                            </p>
                            <div className="inline-flex flex-col gap-1 px-3 py-2 rounded-lg bg-indigo-600/20 text-xs text-indigo-300 font-medium border border-indigo-500/50">
                                <span className="text-white font-bold">{project.rating}%</span>
                                <span>{project.impact}</span>
                            </div>
                        </div>

                        {/* Visit Project - Subtle animation */}
                        <motion.div
                          className="flex items-center gap-1 text-purple-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-2"
                          animate={{ x: hoveredProject === project.id ? 5 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="font-mono text-xs tracking-wider">VIEW</span>
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                    </div>

                  </div>

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
          background: 'linear-gradient(to bottom, transparent, #050505)'
        }}
      />
    </section>
  )
}