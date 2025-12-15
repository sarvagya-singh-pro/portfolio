'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Code2, Database, Brain, Server, Smartphone, GitBranch, Terminal, Layers, Activity } from 'lucide-react'

// --- REUSED ANIMATION COMPONENT (Counter) ---
// Used to animate the percentage text
const Counter = ({ end, duration = 2, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
// --- END REUSED COMPONENT ---


const skillCategories = [
  {
    title: "Languages & Foundational Code",
    icon: Code2,
    principle: "// Low-Level Optimization & Core Efficiency",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Dart", level: 85 },
      { name: "C++", level: 75 },
    ],
    gradient: "from-blue-500 to-cyan-500",
    color: "text-cyan-400"
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    principle: "// High-Performance Model Deployment",
    skills: [
      { name: "PyTorch/TensorFlow", level: 95 },
      { name: "YOLO/Computer Vision", level: 90 },
      { name: "Scikit-learn", level: 90 },
      { name: "NLP & LLMs", level: 88 },
      { name: "Transformers", level: 85 },
    ],
    gradient: "from-purple-500 to-pink-500",
    color: "text-pink-400"
  },
  {
    title: "Backend & Data Tier",
    icon: Server,
    principle: "// Scalable Persistence Layer Design",
    skills: [
      { name: "Node.js/Express", level: 90 },
      { name: "MySQL/PostgreSQL", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 87 },
    ],
    gradient: "from-green-500 to-teal-500",
    color: "text-teal-400"
  },
  {
    title: "Frontend & User Interface",
    icon: Smartphone,
    principle: "// Server-Side Rendered (SSR) Performance",
    skills: [
      { name: "React/Next.js", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Flutter", level: 88 },
      { name: "Framer Motion", level: 85 },
      { name: "React Native", level: 80 },
    ],
    gradient: "from-orange-500 to-red-500",
    color: "text-red-400"
  },
  {
    title: "Data Analysis & Science",
    icon: Database,
    principle: "// Robust Signal Processing Pipelines",
    skills: [
      { name: "Pandas/NumPy", level: 92 },
      { name: "Jupyter Notebooks", level: 90 },
      { name: "Matplotlib/Seaborn", level: 88 },
      { name: "Data Preprocessing", level: 93 },
      { name: "Statistical Analysis", level: 85 },
    ],
    gradient: "from-indigo-500 to-purple-500",
    color: "text-purple-400"
  },
  {
    title: "Deployment & System Ops",
    icon: GitBranch,
    principle: "// Cloud-Native, Continuous Integration",
    skills: [
      { name: "Git/GitHub", level: 93 },
      { name: "Vercel/Netlify", level: 88 },
      { name: "Google Cloud", level: 82 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 78 },
    ],
    gradient: "from-yellow-500 to-orange-500",
    color: "text-yellow-400"
  },
]

export default function ArchitecturalStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  }

  return (
    <section id="skills" className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#050505]">
      
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

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            variants={fadeIn}
            className="text-center space-y-4"
          >
            <h2 
                className="text-4xl md:text-5xl font-semibold tracking-tighter bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #6366f1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
            >
                Core System Stack
            </h2>
            <p className="text-lg text-zinc-500 max-w-3xl mx-auto mt-4 font-light">
                The architecture is the proof. Quantified expertise across the full stack, optimized for performance and maintainability.
            </p>
            
            <motion.div 
                className="w-24 h-px mx-auto mt-6"
                style={{ background: 'linear-gradient(90deg, #6366f1, #a78bfa)' }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          {/* Skills Grid - Now 2-Column for better focus */}
          <div className="grid md:grid-cols-2 gap-10">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.4 + catIndex * 0.1 }}
                className="group"
              >
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 h-full transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-900/20">
                  
                  {/* Category Header with System Principle */}
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-indigo-600/10 flex items-center justify-center border border-indigo-500/50`}>
                            <category.icon className={`w-5 h-5 ${category.color}`} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-semibold text-white tracking-tight">{category.title}</h3>
                    </div>
                    <p className="text-xs font-mono tracking-wider text-indigo-400 ml-1">
                        {category.principle}
                    </p>
                  </div>

                  {/* Skills List with Enhanced Progress Bars */}
                  <div className="space-y-5 border-t border-zinc-800 pt-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-white/70 font-mono tracking-tighter">{skill.name}</span>
                          <span className={`text-xs ${category.color} font-bold`}>
                             <Counter end={skill.level} suffix="%" duration={1.2} />
                          </span>
                        </div>
                        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700">
                          <motion.div
                            // Progress bar is now thicker and uses the vibrant category gradient
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.6 + catIndex * 0.1 + skillIndex * 0.05, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
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