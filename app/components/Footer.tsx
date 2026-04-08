'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Terminal, ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GH_01" },
  { icon: Linkedin, href: "https://linkedin.com/in/sarvagya-singh", label: "LN_02" },
  { icon: Twitter, href: "https://twitter.com/yourusername", label: "TW_03" },
  { icon: Mail, href: "mailto:singhsarvagya260508@gmail.com", label: "EM_04" },
]

const directory = [
  { 
    title: "Sitemap", 
    links: [
      { label: "Research Archive", href: "#research" },
      { label: "Execution Log", href: "#experience" },
      { label: "Milestones", href: "#milestones" },
      { label: "Press Registry", href: "#media" }
    ] 
  },
  { 
    title: "Active Nodes", 
    links: [
      { label: "PulseSage AI", href: "http://pulseage.org/" },
      { label: "GauSeva Platform", href: "https://gauseva-ai.vercel.app/" },
      { label: "Education India", href: "#" },
      { label: "PromptBiotics", href: "https://promptbiotics.org/" }
    ] 
  }
]

export default function SystemFooter() {
  return (
    <footer className="relative bg-white border-t border-zinc-100 overflow-hidden">
      
      {/* Institutional Background: Blueprint Grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-[0.05]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(#8DA1B9 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} />
        <div className="absolute inset-0 opacity-[0.2]" style={{ 
          backgroundImage: `linear-gradient(#8DA1B9 0.5px, transparent 0.5px), linear-gradient(90deg, #8DA1B9 0.5px, transparent 0.5px)`, 
          backgroundSize: '200px 200px' 
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand & Registry */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <h3 className="text-3xl font-bold tracking-tighter text-black mb-4">
                SARVAGYA <span className="text-zinc-300">SINGH</span>
              </h3>
              <p className="text-sm font-medium text-zinc-500 max-w-sm leading-relaxed">
                Full-Stack Developer & AI Researcher specializing in Physics-Informed Neural Networks and high-integrity medical diagnostic systems.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-bold text-[#8DA1B9] uppercase tracking-[0.3em]">Social_Registry</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-zinc-100 bg-zinc-50 text-[10px] font-mono font-bold text-black flex items-center gap-3 hover:border-[#007AFF] hover:bg-white transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    <social.icon className="w-3 h-3 text-[#007AFF]" />
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Directory Links */}
          {directory.map((group, i) => (
            <div key={i} className="md:col-span-2 space-y-6">
              <h4 className="text-[11px] font-bold text-black uppercase tracking-[0.2em]">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-xs font-bold text-[#8DA1B9] hover:text-[#007AFF] transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Node */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[11px] font-bold text-black uppercase tracking-[0.2em]">Contact_Node</h4>
            <div className="p-6 border border-zinc-100 bg-zinc-50 rounded-2xl space-y-4">
              <p className="text-xs font-medium text-zinc-500">Available for research collaborations and technical infrastructure projects.</p>
              <a
                href="mailto:singhsarvagya260508@gmail.com"
                className="w-full py-3 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#007AFF] transition-colors duration-500"
              >
                Initialize Inquiry <Terminal className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* System Status Bar */}
        <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-pulse" />
                <span className="text-[10px] font-bold text-black uppercase tracking-widest">System Active</span>
             </div>
             <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">
               © {new Date().getFullYear()} DEPLOYMENT_v2.0.4
             </p>
          </div>
          
          <div className="flex gap-8">
            <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-tighter italic">
              Built with Next.js, Framer Motion & Typeface Inter
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}