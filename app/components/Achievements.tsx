'use client'

import { motion, useInView, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Award, Target, Zap, Star, Lightbulb, Code, Users, Rocket, Calendar, TrendingUp } from 'lucide-react'

// Achievement data remains the same for content structure
const achievements = [
  {
    year: "2025",
    month: "Grade 12",
    title: "UNESCO Light & Quantum Science Competition Finalist",
    description: "Finalist at the prestigious International UNESCO competition. Developed physics-informed neural network simulating photon behavior in biological tissue for quantum science applications.",
    icon: Lightbulb,
    gradient: "from-yellow-500 to-amber-500",
    color: "text-amber-400"
  },
  {
    year: "2025",
    month: "Grade 12",
    title: "All India Rank 15 - World Robot Olympiad",
    description: "Secured national top 15 ranking at the World Robot Olympiad, demonstrating excellence in robotics engineering and autonomous systems design.",
    icon: Rocket,
    gradient: "from-cyan-500 to-blue-500",
    color: "text-cyan-400"
  },
  {
    year: "2024",
    month: "Grade 12",
    title: "IISER Bhopal Summer Research Scholar",
    description: "Selected as Research Scholar (250 out of 3,500 applicants) at Indian Institute of Science Education and Research, working on advanced AI/healthcare research projects.",
    icon: Star,
    gradient: "from-purple-500 to-indigo-500",
    color: "text-indigo-400"
  },
  {
    year: "2024",
    month: "Grade 11",
    title: "National Rank 2 - NIT Jamshedpur Industry Academia Conclave",
    description: "Achieved National Rank 2 at NIT Jamshedpur's prestigious Industry Academia Conclave for innovative AI healthcare solutions.",
    icon: Trophy,
    gradient: "from-blue-500 to-indigo-500",
    color: "text-blue-400"
  },
  {
    year: "2024",
    month: "Grade 11",
    title: "National Finalist - NCSC (National Children's Science Congress)",
    description: "Selected as National Finalist at India's premier science competition for young researchers, showcasing groundbreaking work in AI and healthcare.",
    icon: Target,
    gradient: "from-green-500 to-emerald-500",
    color: "text-emerald-400"
  },
  {
    year: "2024",
    month: "Grade 11",
    title: "National Top 20 - TECHNICHE IIT Guwahati",
    description: "Ranked in National Top 20 at IIT Guwahati's flagship technology competition, competing against India's brightest student innovators.",
    icon: Award,
    gradient: "from-purple-500 to-pink-500",
    color: "text-pink-400"
  },
  {
    year: "2024",
    month: "Grade 11",
    title: "Young Asians Fellowship - PromptBiotics",
    description: "Selected for prestigious Young Asians Fellowship program to develop LLM-powered nutrition assistant platform.",
    icon: Users,
    gradient: "from-orange-500 to-red-500",
    color: "text-orange-400"
  },
  {
    year: "2023-24",
    month: "Grade 10-11",
    title: "IIT-ISM Research Collaboration - GauSeva AI",
    description: "Collaborated with IIT (ISM) Dhanbad on groundbreaking AI telemedicine collar for livestock health monitoring.",
    icon: Code,
    gradient: "from-teal-500 to-green-500",
    color: "text-teal-400"
  },
  {
    year: "2024",
    month: "Grade 11",
    title: "PulseSage - Doctor-Validated Cardiac AI System",
    description: "Developed and validated AI cardiac diagnostic system with 15+ cardiologists for early disease detection.",
    icon: Zap,
    gradient: "from-red-500 to-pink-500",
    color: "text-red-400"
  },
]

export default function ArchitecturalMilestoneTracker() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" }) // Adjust margin for better visibility trigger
  
  const timelineRef = useRef(null);
  // Track scroll progress within the timeline container
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 0.25", "end 0.75"] });
  // Smooth the scroll progress for a spring-like animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="achievements" className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#050505]">
      
      {/* Background Glow Orb */}
      <motion.div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent)'
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
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
                Architectural Milestones
              </h2>
              <p className="text-lg text-zinc-500 max-w-3xl mx-auto mt-4 font-light">
                High-level competition rankings and research distinctions that validate full-stack innovation and technical rigor.
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

          {/* Timeline Container */}
          <div ref={timelineRef} className="relative pt-8">
            
            {/* SVG Timeline Path */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full hidden md:block">
                <svg width="2" height="100%" viewBox="0 0 2 100" preserveAspectRatio="none" className="h-full">
                    <motion.path
                        d="M 1 0 L 1 100"
                        style={{ pathLength: scaleY }}
                        strokeWidth="2"
                        stroke="#6366f1"
                        strokeLinecap="round"
                        className="opacity-40"
                    />
                    <path
                        d="M 1 0 L 1 100"
                        strokeWidth="1"
                        stroke="#27272a" // Background color for the path
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* Achievement Cards - Animate top to bottom */}
            <div className="space-y-16 md:space-y-20">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.1, // Staggered entry after header
                    ease: "easeOut"
                  }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'
                  }`}
                >
                  
                  {/* Card (5/12 width) */}
                  <motion.div
                    className="w-full md:w-5/12 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 md:p-8 group cursor-pointer relative overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-900/20"
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      {/* Header with Icon and Date */}
                      <div className="flex items-start justify-between">
                        <motion.div
                          className={`w-12 h-12 rounded-lg bg-indigo-600/10 flex items-center justify-center border border-indigo-500/50`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <achievement.icon className={`w-6 h-6 ${achievement.color}`} strokeWidth={1.5} />
                        </motion.div>
                        <div className="text-right space-y-1">
                          <div className="text-xs font-mono uppercase text-zinc-600">
                            {achievement.month}
                          </div>
                          <div className="text-lg font-mono font-bold text-white/80">
                            {achievement.year}
                          </div>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300 leading-snug">
                          {achievement.title}
                        </h3>
                        <p className="text-zinc-400 leading-relaxed text-sm font-light border-l-2 border-zinc-800 pl-3 py-1">
                          {achievement.description}
                        </p>
                      </div>
                    </div>

                    {/* Connection Line to Timeline (for smaller screens) */}
                    <div className="md:hidden absolute right-0 top-1/2 w-4 h-px bg-zinc-700/50" 
                      style={{ transform: 'translateY(-50%)' }} 
                    />
                  </motion.div>

                  {/* Center Dot with Pulse (WOW EFFECT) */}
                  <div className="relative hidden md:flex w-16 h-16 rounded-full flex-shrink-0 items-center justify-center z-10">
                    {/* Outer Pulse Glow Ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-indigo-500`}
                      animate={{
                        scale: [0.5, 1.2, 0.5],
                        opacity: [0.2, 0, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5 // Stagger the pulse effect
                      }}
                    />
                    
                    {/* Solid Dot */}
                    <div className={`relative w-4 h-4 rounded-full bg-indigo-500`}
                      style={{ boxShadow: '0 0 15px #6366f1' }}
                    >
                      <motion.div
                        className="w-full h-full rounded-full"
                        animate={{
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </div>

                  {/* Spacer (5/12 width) */}
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
          background: 'linear-gradient(to bottom, transparent, #050505)'
        }}
      />
    </section>
  )
}