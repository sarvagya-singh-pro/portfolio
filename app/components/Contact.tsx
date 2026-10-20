'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { FormEvent } from 'react'
import { Mail, Linkedin, Github, Send, Sparkles } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get('name') || '')
    const email = String(f.get('email') || '')
    const message = String(f.get('message') || '')
    window.location.href =
      `mailto:ss612@st-andrews.ac.uk?subject=${encodeURIComponent('Message from ' + name)}` +
      `&body=${encodeURIComponent(message + '\n\n' + name + ' (' + email + ')')}`
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden bg-black">
      
      {/* Soft glows: static gradients (no blur filters or looping animation) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 25% 33%, rgba(141,161,185,0.16), transparent 45%), radial-gradient(circle at 75% 70%, rgba(141,161,185,0.12), transparent 45%)' }}
      />

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
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  name="name" required placeholder="Your name"
                  className="w-full bg-transparent border-b border-white/30 pb-4 text-white placeholder-white/40 focus:outline-none focus:border-[#8DA1B9] text-lg transition-colors"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email" required placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-white/30 pb-4 text-white placeholder-white/40 focus:outline-none focus:border-[#8DA1B9] text-lg transition-colors"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message" required placeholder="What are we building together?"
                  rows={4}
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
                { icon: Mail, label: "Email", value: "ss612@st-andrews.ac.uk", href: "mailto:ss612@st-andrews.ac.uk" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sarvagyasingh-dev", href: "https://linkedin.com/in/sarvagyasingh-dev" },
                { icon: Github, label: "GitHub", value: "github.com/sarvagya-singh-pro", href: "https://github.com/sarvagya-singh-pro" },
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