'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Newspaper, ExternalLink, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const pressItems = [
  {
    title: "DPS Bokaro student innovates ‘Nandini’ AI App to transform cattle health",
    outlet: "The Researchers",
    date: "DEC 2024",
    link: "https://www.theresearchers.us/2023/12/12/dps-bokaro-students-innovates-nandini-ai-app-to-transform-cattle-health/",
    category: "AI & Healthcare"
  },
  {
    title: "Projects of students qualify for NCSC national final",
    outlet: "Jharkhand Story",
    date: "SEPT 2024",
    link: "https://thejharkhandstory.co.in/dps-bokaro-three-projects-of-students-qualify-for-ncsc-crc-national-final/",
    category: "Research"
  },
  {
    title: "New Innovation to help detect faults in buildings",
    outlet: "VARNANLIVE",
    date: "MAR 2025",
    link: "https://varnanlive.com/2025/08/28/dps-bokaro-students-invent-ai-model-to-ensure-breach-free-structures-qualify-for-world-robot-olympiad-nationals/",
    category: "Robotics"
  },
  {
    title: "Student Innovator Ranks Second at NIT Jamshedpur",
    outlet: "Prabhat Khabar",
    date: "NOV 2024",
    link: "#",
    category: "National Award"
  },
  {
    title: "Research Scholar Selected for IISER Bhopal Program",
    outlet: "Academic Excellence Weekly",
    date: "JUNE 2024",
    link: "https://news.careers360.com/iiser-bhopal-organises-science-summer-outreach-camp-for-school-students",
    category: "Fellowship"
  },
  {
    title: "Team Qualifies for World Robot Olympiad Nationals",
    outlet: 'Dainik Bhaskar',
    date: "AUG 2025",
    link: "#",
    category: "Engineering"
  }
]

export default function MediaArchive() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smooth parallax for technical background
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={containerRef} id="media" className="py-60 px-6 bg-white relative overflow-hidden">
      
      {/* 1. INSTITUTIONAL BACKGROUND: Double-Grid Blueprint */}
      <motion.div style={{ y: gridY }} className="absolute inset-0 -z-10 pointer-events-none opacity-[0.1]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(#8DA1B9 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} />
        <div className="absolute inset-0 opacity-[0.3]" style={{ 
          backgroundImage: `linear-gradient(#8DA1B9 0.5px, transparent 0.5px), linear-gradient(90deg, #8DA1B9 0.5px, transparent 0.5px)`, 
          backgroundSize: '200px 200px' 
        }} />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#8DA1B9]" />
            <span className="text-[11px] font-bold tracking-[0.4em] text-[#8DA1B9] uppercase">
              Press / Recognition
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-[1.05]">
            Media <br />
            <span className="text-zinc-300">Archive.</span>
          </h2>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100 overflow-hidden rounded-3xl">
          {pressItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group bg-white p-10 flex flex-col justify-between hover:bg-zinc-50 transition-colors duration-500 min-h-[320px]"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-[#8DA1B9] uppercase tracking-[0.2em]">
                    {item.date}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-[#007AFF] transition-colors duration-500">
                    <ExternalLink className="w-3 h-3 text-zinc-300 group-hover:text-white" />
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[9px] font-bold text-[#007AFF] uppercase tracking-widest">
                    {item.outlet}
                  </p>
                  <h3 className="text-xl font-bold text-black leading-snug group-hover:text-[#007AFF] transition-colors duration-500">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between mt-12">
                <span className="text-[9px] font-bold text-zinc-400 border border-zinc-100 px-2 py-1 rounded uppercase tracking-widest">
                  {item.category}
                </span>
                <span className="text-[10px] font-bold text-black opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 flex items-center gap-2">
                  READ CASE <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer Note */}
       
      </div>
    </section>
  )
}