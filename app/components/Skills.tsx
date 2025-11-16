'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Database, Brain, Server, Smartphone, GitBranch } from 'lucide-react'

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "Dart", level: 85 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 75 },
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "PyTorch/TensorFlow", level: 95 },
      { name: "YOLO/Computer Vision", level: 90 },
      { name: "NLP & LLMs", level: 88 },
      { name: "Transformers", level: 85 },
      { name: "Scikit-learn", level: 90 },
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Backend & Databases",
    icon: Server,
    skills: [
      { name: "Node.js/Express", level: 90 },
      { name: "MySQL/PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "Firebase", level: 87 },
    ],
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Frontend & Mobile",
    icon: Smartphone,
    skills: [
      { name: "React/Next.js", level: 92 },
      { name: "Flutter", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
      { name: "React Native", level: 80 },
    ],
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    skills: [
      { name: "Git/GitHub", level: 93 },
      { name: "Docker", level: 80 },
      { name: "Google Cloud", level: 82 },
      { name: "Vercel/Netlify", level: 88 },
      { name: "CI/CD", level: 78 },
    ],
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Data & Analytics",
    icon: Database,
    skills: [
      { name: "Pandas/NumPy", level: 92 },
      { name: "Matplotlib/Seaborn", level: 88 },
      { name: "Jupyter Notebooks", level: 90 },
      { name: "Data Preprocessing", level: 93 },
      { name: "Statistical Analysis", level: 85 },
    ],
    gradient: "from-indigo-500 to-purple-500"
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 px-6 md:px-12 relative overflow-hidden bg-black">
      {/* FADE IN EFFECT AT TOP */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, transparent, #000000)'
        }}
      />

      {/* Floating orbs */}
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
                Technical Skills
              </h2>
              <p className="text-lg text-white/40 max-w-3xl mx-auto mt-4 font-light">
                Full-stack development, AI/ML, and healthcare technology expertise
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

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full hover:bg-white/[0.07] transition-colors duration-500">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                      <category.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-white/70">{skill.name}</span>
                          <span className="text-xs text-purple-400 font-medium">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1, ease: "easeOut" }}
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
          background: 'linear-gradient(to bottom, transparent, #0a0a0a)'
        }}
      />
    </section>
  )
}
