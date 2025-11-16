'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, ExternalLink, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
  { icon: Mail, href: "mailto:singhsarvagya260508@gmail.com", label: "Email" },
]

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
]

const projects = [
  { label: "PulseSage", href: "http://pulseage.org/" },
  { label: "GauSeva AI", href: "https://gauseva-ai.vercel.app/" },
  { label: "PromptBiotics", href: "https://promptbiotics.org/" },
  { label: "Tech Dragon", href: "https://tech-dragon.co.in/" },
]

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 
              className="text-2xl font-bold bg-clip-text text-transparent mb-4"
              style={{
                backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Sarvagya Singh
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              AI Researcher & Full-Stack Developer building intelligent systems for healthcare innovation.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/30 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 text-white/60" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-purple-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Projects</h4>
            <ul className="space-y-2">
              {projects.map((project, index) => (
                <li key={index}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-purple-400 text-sm transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    {project.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Get in Touch</h4>
            <p className="text-white/50 text-sm mb-3">
              Open to collaboration on AI/healthcare projects and research opportunities.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium hover:bg-purple-500/20 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Sarvagya Singh. Built with 
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            and Next.js
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
