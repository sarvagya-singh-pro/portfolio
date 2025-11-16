'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Brain, Target } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden">
      {/* FADE IN EFFECT AT TOP */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, transparent, #0a0a0a)'
        }}
      />

      {/* Subtle gradient line */}
      <div 
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)' }}
      />
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <h2 
                className="text-4xl md:text-5xl font-light tracking-tight bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                The Story
              </h2>
              <div 
                className="w-16 h-px mx-auto mt-4"
                style={{ background: 'linear-gradient(90deg, #667eea, #764ba2)' }}
              />
            </motion.div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Image */}
         
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="lg:col-span-2"
  >
    <div className="relative group">
      <div className="relative overflow-hidden rounded-2xl bg-purple-500/5 backdrop-blur-xl border border-purple-500/10 p-1">
        <div className="aspect-square bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl flex items-center justify-center">
          <img
            src="/image.png"
            alt="Photon Simulation"
            className="w-4/5 h-full object-contain"
          />
        </div>
      </div>
    </div>
  </motion.div>



            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-3 space-y-8"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-white/60 font-light">
                From{' '}
                <span 
                  className="bg-clip-text text-transparent font-normal"
                  style={{ 
                    backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Bokaro Steel City, India
                </span>, 
                Sarvagya turns data into empathy by creating AI that comprehends not only illness but also the individuals it treatments.
              </p>

              {/* Value Props */}
              <div className="space-y-6 pt-4">
                {[
                  {
                    icon: Heart,
                    title: "Compassionate Innovation",
                    description: "Technology that prioritizes human dignity and accessible healthcare"
                  },
                  {
                    icon: Brain,
                    title: "Scientific Rigor",
                    description: "Doctor-validated AI bridging research with real-world impact"
                  },
                  {
                    icon: Target,
                    title: "Mission-Driven",
                    description: "Every line of code written to heal, help, and serve humanity"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white/90 mb-1">{item.title}</h3>
                      <p className="text-sm text-white/40 font-light leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
