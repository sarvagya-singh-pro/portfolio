'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Code, Award, Terminal, Activity, Layers, Calendar, ChevronRight } from 'lucide-react'

// Map icons to labels for the log aesthetic
const experienceMap = {
  work: { icon: Briefcase, label: "[WORK]", color: "text-green-400", bg: "bg-green-600/10" },
  research: { icon: Layers, label: "[RESEARCH]", color: "text-cyan-400", bg: "bg-cyan-600/10" },
  fellowship: { icon: Award, label: "[FELLOW]", color: "text-yellow-400", bg: "bg-yellow-600/10" },
}

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Backend Software Engineer",
    organization: "Education India",
    location: "Remote",
    period: "June 2025 - Present",
    description: "Building scalable web applications for educational platforms. Developed authentication systems, database architectures, and REST APIs serving 10,000+ users.",
    achievements: [
      "Optimized database queries reducing load time by 40%",
      "Built secure authentication system with JWT",
      "Designed scalable MySQL database architecture"
    ],
  },
  {
    id: 3,
    type: "fellowship",
    title: "Young Asians Fellow",
    organization: "Young Asians Fellowship Program",
    location: "Singapore/India",
    period: "April 2025 - June 2025",
    description: "Developed LLM-powered nutrition assistant platform under fellowship program. Presented research at National University of Singapore.",
    achievements: [
      "Built production-ready LLM application",
      "Validated with medical professionals",
      "Presented findings internationally"
    ],
  },
  {
    id: 2,
    type: "research",
    title: "Summer Research Scholar",
    organization: "IISER Bhopal",
    location: "Bhopal, India",
    period: "May 2024 - July 2024",
    description: "Selected as one of 250 scholars from 3,500 applicants. Conducted advanced AI/healthcare research under faculty mentorship.",
    achievements: [
      "Developed physics-informed neural network models",
      "Published research findings at national competition",
      "Collaborated with interdisciplinary research team"
    ],
  },
  
  {
    id: 4,
    type: "research",
    title: "Independent Researcher",
    organization: "PulseSage - Cardiac AI System",
    location: "Bokaro Steel City, India",
    period: "March 2024 - Present",
    description: "Pioneering multimodal explainable AI for cardiac disease diagnosis. Validated with 15+ cardiologists at local hospitals.",
    achievements: [
      "Achieved 98.5% diagnostic accuracy",
      "Developed explainable AI visualization tools",
      "Clinical validation with medical professionals"
    ],
  },
]

export default function SystemLogTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="experience" className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#050505]">
      
      {/* Dynamic Background Element */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent)'
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section Header - Architect Style */}
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
                System Execution Log
              </h2>
              <p className="text-lg text-zinc-500 max-w-3xl mx-auto mt-4 font-light">
                Professional history indexed by type, focusing on tangible technical contributions and high-impact research.
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

          {/* Timeline */}
          <div className="relative pl-4 md:pl-0">
            {/* Center line is now a left-aligned dashed log line */}
            <div className="absolute left-0 top-0 bottom-0 w-px border-l border-dashed border-zinc-700 md:left-4" />

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const map = experienceMap[exp.type as keyof typeof experienceMap];
                const Icon = map.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="relative flex items-start gap-8 group"
                  >
                    
                    {/* Log Dot and Icon */}
                    <div className="flex-shrink-0 relative">
                        {/* Timeline dot/marker */}
                        <div className="absolute top-1 left-[-2px] w-1.5 h-1.5 rounded-full bg-indigo-500 z-10 ring-4 ring-[#050505]" />
                        
                        {/* Icon Block */}
                        <div className={`w-10 h-10 rounded-full ${map.bg} flex items-center justify-center border border-zinc-700 ml-4`}>
                            <Icon className={`w-5 h-5 ${map.color}`} strokeWidth={1.5} />
                        </div>
                    </div>


                    {/* Content card - Structured Log Entry */}
                    <div className="flex-1 space-y-4 pt-1 pb-4">
                      
                      {/* Header (Type, Title, Period) */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                           <span className={`text-xs font-mono font-medium ${map.color}`}>{map.label}</span>
                           <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                             <Calendar className="w-3 h-3 text-zinc-700" />
                             {exp.period}
                           </span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-zinc-500">
                          {exp.organization} • <span className="text-zinc-600">{exp.location}</span>
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-zinc-400 leading-relaxed border-l-2 border-zinc-800 pl-4 py-1">
                        {exp.description}
                      </p>

                      {/* Achievements (Monospace Log Entries) */}
                      <div className="space-y-2 pt-2">
                        <p className="text-xs font-mono uppercase text-zinc-600">
                            Execution Output:
                        </p>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs font-mono text-zinc-500">
                              <span className="text-indigo-400 font-bold flex-shrink-0">$</span>
                              <span className="text-white/80">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
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