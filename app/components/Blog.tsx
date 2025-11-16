'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, ExternalLink, Clock, TrendingUp } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "Building Production-Ready AI Systems: Lessons from PulseSage",
    excerpt: "Deep dive into developing, validating, and deploying AI healthcare systems that doctors actually trust and use in clinical practice.",
    date: "November 2024",
    readTime: "8 min read",
    category: "AI & Healthcare",
    link: "https://tech-dragon.co.in/pulsesage-production",
    featured: true
  },
  {
    id: 2,
    title: "Physics-Informed Neural Networks for Medical Imaging",
    excerpt: "Exploring how physics constraints improve neural network performance in biological tissue simulation and quantum applications.",
    date: "October 2024",
    readTime: "10 min read",
    category: "Research",
    link: "https://tech-dragon.co.in/pinn-medical",
    featured: true
  },
  {
    id: 3,
    title: "IoT + AI: Building Smart Agricultural Systems",
    excerpt: "How we combined edge computing, IoT sensors, and machine learning to create real-time livestock disease monitoring.",
    date: "September 2024",
    readTime: "6 min read",
    category: "IoT & ML",
    link: "https://tech-dragon.co.in/gauseva-iot",
    featured: false
  },
  {
    id: 4,
    title: "LLM Safety in Healthcare Applications",
    excerpt: "Implementing medical validation layers and safety checks when using large language models for nutrition guidance.",
    date: "August 2024",
    readTime: "7 min read",
    category: "LLMs",
    link: "https://tech-dragon.co.in/llm-safety",
    featured: false
  },
]

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="blog" className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#0a0a0a]">
      {/* FADE IN */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, transparent, #0a0a0a)'
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
                Tech Insights
              </h2>
              <p className="text-lg text-white/40 max-w-3xl mx-auto mt-4 font-light">
                Articles and tutorials on AI, healthcare technology, and software development
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

          {/* Featured Posts */}
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative block"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-500 h-full">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Featured
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-500 mb-3 leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-white/40 mb-4">
                    <span>{post.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Category & Link */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-white/40 border border-white/10">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-purple-400 text-sm font-medium group-hover:gap-2 transition-all">
                      <span>Read Article</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 gap-5">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-5 hover:bg-white/[0.07] transition-all duration-500">
                  <h4 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-white/50 text-xs leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-white/40">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA to Blog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <motion.a
              href="https://tech-dragon.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium hover:bg-purple-500/20 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-5 h-5" />
              <span>Visit Tech Dragon Blog</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* FADE OUT */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, #000000)'
        }}
      />
    </section>
  )
}
