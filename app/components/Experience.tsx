'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Code, Award } from 'lucide-react'

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Backend Software Engineer",
    organization: "Education India",
    location: "Remote",
    period: "June 2024 - Present",
    description: "Building scalable web applications for educational platforms. Developed authentication systems, database architectures, and REST APIs serving 10,000+ users.",
    achievements: [
      "Optimized database queries reducing load time by 40%",
      "Built secure authentication system with JWT",
      "Designed scalable MySQL database architecture"
    ],
    icon: Code,
    gradient: "from-blue-500 to-cyan-500"
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
    icon: GraduationCap,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    type: "research",
    title: "Research Collaborator",
    organization: "IIT (ISM) Dhanbad",
    location: "Dhanbad, India",
    period: "January 2024 - Present",
    description: "Collaborating on GauSeva AI telemedicine project for livestock health monitoring. Building IoT-enabled AI diagnostic system.",
    achievements: [
      "Developed real-time disease detection algorithms",
      "Secured trial commitment from 40+ rural farms",
      "Integrated edge computing for remote diagnostics"
    ],
    icon: GraduationCap,
    gradient: "from-green-500 to-teal-500"
  },
  {
    id: 4,
    type: "fellowship",
    title: "Young Asians Fellow",
    organization: "Young Asians Fellowship Program",
    location: "Singapore/India",
    period: "August 2024 - December 2024",
    description: "Developed LLM-powered nutrition assistant platform under fellowship program. Presented research at National University of Singapore.",
    achievements: [
      "Built production-ready LLM application",
      "Validated with medical professionals",
      "Presented findings internationally"
    ],
    icon: Award,
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 5,
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
    icon: Briefcase,
    gradient: "from-red-500 to-pink-500"
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 px-6 md:px-12 relative overflow-hidden bg-black">
      {/* FADE IN */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, transparent, #000000)'
        }}
      />

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
                Experience
              </h2>
              <p className="text-lg text-white/40 max-w-3xl mx-auto mt-4 font-light">
                Professional work, research positions, and collaborative projects
              </p>
              
              <motion.div 
                className="w-20 h-px mx-auto mt-6"
                style={{ background: 'linear-gradient(90deg, #667eea, #764ba2)' }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-20" />

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:items-center`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 -translate-x-2 md:-translate-x-2 z-10 ring-4 ring-black" />

                  {/* Content card */}
                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-500 group"
                      whileHover={{ y: -4 }}
                    >
                      {/* Icon & Period */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.gradient} flex items-center justify-center flex-shrink-0`}>
                          <exp.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                        </div>
                        <span className="text-xs text-purple-400 font-medium">{exp.period}</span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-white/60 mb-3">
                        {exp.organization} • {exp.location}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-white/50 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-white/60">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* FADE OUT */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0a0a0a)'
        }}
      />
    </section>
  )
}
