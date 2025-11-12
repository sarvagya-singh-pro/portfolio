'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Linkedin, Github, Send, Sparkles } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent)' }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
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
              Let's Connect
            </h2>
            <p className="text-lg text-white/40 max-w-3xl mx-auto font-light">
              Whether you're interested in collaboration, research opportunities, or just want to chat about AI and healthcare innovation
            </p>
            <div 
              className="w-20 h-px mx-auto"
              style={{ background: 'linear-gradient(90deg, #667eea, #764ba2)' }}
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <motion.input
                    type="text"
                    placeholder="Your Name"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    whileFocus={{ scale: 1.01 }}
                  />
                  {focusedField === 'name' && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-purple-500/5 -z-10"
                      layoutId="inputHighlight"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <motion.input
                    type="email"
                    placeholder="Your Email"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    whileFocus={{ scale: 1.01 }}
                  />
                  {focusedField === 'email' && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-purple-500/5 -z-10"
                      layoutId="inputHighlight"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <motion.textarea
                    placeholder="Your Message"
                    rows={5}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                    whileFocus={{ scale: 1.01 }}
                  />
                  {focusedField === 'message' && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-purple-500/5 -z-10"
                      layoutId="inputHighlight"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-3 shadow-lg shadow-purple-500/20"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links & Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Inspirational Quote */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                <Sparkles className="absolute top-4 right-4 w-8 h-8 text-purple-400/20" />
                <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed italic">
                  "Innovation isn't complexity — it's{' '}
                  <span 
                    className="font-semibold not-italic bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    compassion translated into code
                  </span>
                  ."
                </blockquote>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
                
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "sarvagya@research.ai", href: "mailto:sarvagya@research.ai" },
                    { icon: Linkedin, label: "LinkedIn", value: "/in/sarvagya-singh", href: "#" },
                    { icon: Github, label: "GitHub", value: "@sarvagya-singh", href: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-300 group"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                        <social.icon className="w-6 h-6 text-purple-400" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-white/40">{social.label}</div>
                        <div className="text-white font-medium">{social.value}</div>
                      </div>
                      <motion.div
                        className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-24 pt-12 border-t border-white/10 text-center relative z-10"
      >
        <p className="text-white/40 font-light">
          © 2025 Sarvagya Singh. Building the future of healthcare through AI.
        </p>
      </motion.footer>
    </section>
  )
}
