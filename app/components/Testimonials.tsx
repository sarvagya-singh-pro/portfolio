'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Cardiologist, Bokaro General Hospital",
    content: "The PulseSage system demonstrates exceptional depth in cardiac diagnostics. The model’s 98.5% sensitivity and clear saliency mapping make it a viable tool for clinical assistance.",
    status: "Clinical Validation",
    scope: "Medical AI"
  },
  {
    name: "Prof. Afshar Alam",
    role: "Vice-Chancellor, Jamia Hamdard",
    content: "Sarvagya's research rigor is outstanding. He brings a unique combination of computational creativity and technical discipline to every complex problem he tackles.",
    status: "Academic Review",
    scope: "Overall Research"
  },
  {
    name: "Sarthak Siddhant",
    role: "Lead, Education India",
    content: "As a developer, he consistently delivers high-integrity code. His work on database schema optimization and system architecture significantly improved our infrastructure performance.",
    status: "Technical Audit",
    scope: "Full-Stack Systems"
  }
]

export default function Testimonials() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])

  return (
    <section ref={containerRef} id="testimonials" className="py-60 px-6 bg-white relative overflow-hidden">
      
      {/* Premium Blueprint Background */}
      <motion.div style={{ y: gridY }} className="absolute inset-0 -z-10 pointer-events-none opacity-[0.09]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(#8DA1B9 1px, transparent 1px)`, 
          backgroundSize: '44px 44px' 
        }} />
        <div className="absolute inset-0 opacity-[0.25]" style={{ 
          backgroundImage: `linear-gradient(#8DA1B9 0.8px, transparent 0.8px), linear-gradient(90deg, #8DA1B9 0.8px, transparent 0.8px)`, 
          backgroundSize: '180px 180px' 
        }} />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-32 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#8DA1B9]" />
            <span className="text-[11px] font-bold tracking-[0.5em] text-[#8DA1B9] uppercase">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-[-1px] text-black leading-none">
            Trusted voices.<br />
            <span className="text-[#8DA1B9]">Real impact.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group bg-white border border-zinc-100 rounded-3xl p-10 hover:border-[#8DA1B9]/40 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="mb-8">
                <Quote className="w-10 h-10 text-[#8DA1B9]/10 group-hover:text-[#8DA1B9]/30 transition-colors" />
              </div>

              {/* Testimonial Text */}
              <p className="text-[21px] leading-tight font-light text-zinc-600 italic flex-1">
                “{item.content}”
              </p>

              {/* Status Badge */}
              <div className="flex items-center gap-2 mt-10 mb-6">
                <CheckCircle2 className="w-4 h-4 text-[#007AFF]" />
                <span className="text-xs font-semibold tracking-widest text-[#007AFF] uppercase">
                  {item.status}
                </span>
              </div>

              {/* Author */}
              <div className="border-t border-zinc-100 pt-6">
                <p className="font-semibold text-lg text-black">{item.name}</p>
                <p className="text-sm text-zinc-500">{item.role}</p>
                <div className="mt-4 text-[10px] font-medium text-zinc-400 tracking-widest">
                  SCOPE • {item.scope}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Signature */}
        <div className="mt-40 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-zinc-100 rounded-3xl text-xs font-semibold text-zinc-400 tracking-[0.5em]">
            <div className="w-2 h-2 bg-[#8DA1B9] rounded-full animate-pulse" />
            VERIFIED BY INDUSTRY &amp; ACADEMIA
          </div>
        </div>
      </div>
    </section>
  )
}