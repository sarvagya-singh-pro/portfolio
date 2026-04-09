'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Linkedin, Github, Send, Sparkles } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden bg-black">
      
      {/* Subtle animated background glows (dusty blue theme) */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(141, 161, 185, 0.15), transparent)' }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(141, 161, 185, 0.12), transparent)' }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white">
            Let's build something <span className="text-[#8DA1B9]">real</span>.
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            Open to research collaborations, startup opportunities, or just a conversation about AI that actually works in the real world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form - Clean & open (no box) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-light text-white">Send me a message</h3>
            
            <form className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your name"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-white/30 pb-4 text-white placeholder-white/40 focus:outline-none focus:border-[#8DA1B9] text-lg transition-colors"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="your@email.com"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-white/30 pb-4 text-white placeholder-white/40 focus:outline-none focus:border-[#8DA1B9] text-lg transition-colors"
                />
              </div>

              <div className="relative">
                <textarea
                  placeholder="What are we building together?"
                  rows={4}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-white/30 pb-4 text-white placeholder-white/40 focus:outline-none focus:border-[#8DA1B9] text-lg resize-none transition-colors"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-3 bg-white text-black font-medium py-5 rounded-2xl text-lg hover:bg-[#8DA1B9] hover:text-white transition-all duration-300"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column - Quote + Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            {/* Quote */}
            <div className="mb-16">
              <Sparkles className="w-8 h-8 text-[#8DA1B9]/30 mb-6" />
              <blockquote className="text-2xl font-light leading-tight text-white/90">
                "The best technology isn't the most advanced.<br />
                It's the one that actually reaches the people who need it most."
              </blockquote>
              <p className="mt-8 text-sm text-white/40">— Sarvagya Singh</p>
            </div>

            {/* Social Links - Clean */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "singhsarvagya260508@gmail.com", href: "mailto:singhsarvagya260508@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sarvagyasingh-dev", href: "#" },
                { icon: Github, label: "GitHub", value: "github.com/sarvagya-singh-pro", href: "#" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="flex items-center justify-between group py-5 border-b border-white/10 hover:border-[#8DA1B9] transition-colors"
                  whileHover={{ x: 8 }}
                >
                  <div className="flex items-center gap-5">
                    <social.icon className="w-6 h-6 text-white/70 group-hover:text-[#8DA1B9] transition-colors" />
                    <div>
                      <div className="text-white/60 text-sm">{social.label}</div>
                      <div className="text-white font-medium">{social.value}</div>
                    </div>
                  </div>
                  <span className="text-[#8DA1B9] text-2xl opacity-0 group-hover:opacity-100 transition-all">→</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Final line */}
      
      </div>
    </section>
  )
}