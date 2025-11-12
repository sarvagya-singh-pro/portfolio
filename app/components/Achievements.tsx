'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Award, Target, Zap, Star, Lightbulb, Code, Users, Rocket } from 'lucide-react'

const achievements = [
  {
    year: "2025",
    month: "Grade 12",
    title: "UNESCO Light & Quantum Science Competition Finalist",
    description: "Finalist at the prestigious International UNESCO competition. Developed physics-informed neural network simulating photon behavior in biological tissue for quantum science applications.",
    icon: Lightbulb,
    gradient: "from-yellow-500 to-amber-500"
  },
  {
    year: "2025",
    month: "Grade 12",
    title: "All India Rank 15 - World Robot Olympiad",
    description: "Secured national top 15 ranking at the World Robot Olympiad, demonstrating excellence in robotics engineering and autonomous systems design.",
    icon: Rocket,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    year: "2024",
    month: "Grade 12",
    title: "IISER Bhopal Summer Research Scholar",
    description: "Selected as Research Scholar (250 out of 3,500 applicants) at Indian Institute of Science Education and Research, working on advanced AI/healthcare research projects.",
    icon: Star,
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    year: "2024",
    month: "Grade 11",
    title: "National Rank 2 - NIT Jamshedpur Industry Academia Conclave",
    description: "Achieved National Rank 2 at NIT Jamshedpur's prestigious Industry Academia Conclave for innovative AI healthcare solutions.",
    icon: Trophy,
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    year: "2024",
    month: "Grade 11",
    title: "National Finalist - NCSC (National Children's Science Congress)",
    description: "Selected as National Finalist at India's premier science competition for young researchers, showcasing groundbreaking work in AI and healthcare.",
    icon: Target,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    year: "2024",
    month: "Grade 11",
    title: "National Top 20 - TECHNICHE IIT Guwahati",
    description: "Ranked in National Top 20 at IIT Guwahati's flagship technology competition, competing against India's brightest student innovators.",
    icon: Award,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    year: "2024",
    month: "Grade 11",
    title: "Young Asians Fellowship - PromptBiotics",
    description: "Selected for prestigious Young Asians Fellowship program to develop LLM-powered nutrition assistant platform.",
    icon: Users,
    gradient: "from-orange-500 to-red-500"
  },
  {
    year: "2023-24",
    month: "Grade 10-11",
    title: "IIT-ISM Research Collaboration - GauSeva AI",
    description: "Collaborated with IIT (ISM) Dhanbad on groundbreaking AI telemedicine collar for livestock health monitoring.",
    icon: Code,
    gradient: "from-teal-500 to-green-500"
  },
  {
    year: "2024",
    month: "Grade 11",
    title: "PulseSage - Doctor-Validated Cardiac AI System",
    description: "Developed and validated AI cardiac diagnostic system with 15+ cardiologists for early disease detection.",
    icon: Zap,
    gradient: "from-red-500 to-pink-500"
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#0a0a0a]">
      {/* FADE IN EFFECT AT TOP */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, transparent, #0a0a0a)'
        }}
      />

      {/* Animated Background Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full"
            style={{ 
              top: `${20 * (i + 1)}%`,
              background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent)'
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 
              className="text-4xl md:text-5xl font-light tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Achievements Timeline
            </h2>
            <p className="text-lg text-white/40 max-w-3xl mx-auto font-light">
              Recognition for innovation in AI-driven healthcare solutions and research excellence
            </p>
            <div 
              className="w-20 h-px mx-auto"
              style={{ background: 'linear-gradient(90deg, #667eea, #764ba2)' }}
            />
          </motion.div>

          {/* Timeline */}
          <div className="relative pt-8">
            {/* Center Line with Glow - Animates from top to bottom */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden md:block origin-top"
              style={{
                background: 'linear-gradient(180deg, #667eea, #764ba2, #667eea)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
              }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Achievement Cards - Animate top to bottom */}
            <div className="space-y-16 md:space-y-20">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'
                  }`}
                >
                  {/* Card */}
                  <motion.div
                    className="w-full md:w-5/12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 group cursor-pointer relative overflow-hidden"
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Hover Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 space-y-4">
                      {/* Icon */}
                      <motion.div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center shadow-lg`}
                        style={{ boxShadow: '0 4px 20px rgba(139, 92, 246, 0.2)' }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <achievement.icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={1.5} />
                      </motion.div>

                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <div className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                            {achievement.month}
                          </div>
                          <div className="text-xs text-white/30">•</div>
                          <div className="text-xs font-medium text-white/60">
                            {achievement.year}
                          </div>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300 leading-snug">
                          {achievement.title}
                        </h3>
                        <p className="text-white/50 leading-relaxed text-sm font-light">
                          {achievement.description}
                        </p>
                      </div>
                    </div>

                    {/* Connection Line to Timeline */}
                    <div className={`hidden md:block absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} top-1/2 w-8 h-px bg-gradient-to-r ${index % 2 === 0 ? 'from-white/10 to-transparent' : 'from-transparent to-white/10'}`} 
                      style={{ transform: 'translateY(-50%)' }} 
                    />
                  </motion.div>

                  {/* Center Dot with Pulse - Appears in sequence */}
                  <motion.div
                    className="relative hidden md:flex w-8 h-8 rounded-full flex-shrink-0 items-center justify-center z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.15 + 0.2,
                      ease: "backOut"
                    }}
                  >
                    {/* Outer Glow Ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${achievement.gradient}`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Dot */}
                    <div className={`relative w-6 h-6 rounded-full bg-gradient-to-br ${achievement.gradient} flex items-center justify-center`}
                      style={{ boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)' }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-white"
                        animate={{
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
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
