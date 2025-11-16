'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Newspaper, ExternalLink, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'

const mediaItems = [
  {
    id: 1,
    title: "DPS Bokaro students innovates ‘Nandini’ AI App to transform cattle health",
    outlet: "The Researchers",
    date: "December 2024",
    image: "/p-2.png", // Replace with actual path
    link: "https://www.theresearchers.us/2023/12/12/dps-bokaro-students-innovates-nandini-ai-app-to-transform-cattle-health/"
  },
  {
    id: 2,
    title: "DPS Bokaro: Three projects of students qualify for NCSC, CRC national final",
    outlet: "Jharkhand Story",
    date: "September 2024",
    description: "In-depth feature on GauSeva AI telemedicine collar developed with IIT-ISM.",
    image: "/p-3.png", // Replace with actual path
    link: "https://thejharkhandstory.co.in/dps-bokaro-three-projects-of-students-qualify-for-ncsc-crc-national-final/"
  },
  {
    id: 3,
    title: "New Innovation By Students of DPS Bokaro to help detect faults in buildings",
    outlet: "VARANLIVE",
    date: "March 2025",
    description: "Recognition for physics-informed neural network simulating photon behavior.",
    image: "/press-release-3.jpeg", // Replace with actual path
    link: "https://varnanlive.com/2025/08/28/dps-bokaro-students-invent-ai-model-to-ensure-breach-free-structures-qualify-for-world-robot-olympiad-nationals/"
  },
  {
    id: 4,
    title: "Student Innovator Ranks Second at NIT Jamshedpur",
    outlet: "Prabhat Khabar",
    date: "November 2024",
    description: "Coverage of national recognition at TECHNICHE IIT Guwahati competition.",
    image: "/p-4.png", // Replace with actual path
    link: "#"
  },
  {
    id: 5,
    title: "Research Scholar Selected for IISER Bhopal Program",
    outlet: "Academic Excellence Weekly",
    date: "June 2024",
    description: "Selected as one of 250 scholars from 3,500 applicants for summer research.",
    image: "/p-5.png", // Replace with actual path
    link: "https://news.careers360.com/iiser-bhopal-organises-science-summer-outreach-camp-for-school-students"
  },
  {
    id: 6,
    title: "DPS Bokaro Team Qulifies for WRO Nationals",
    outlet: 'Danik Bhaskar',
    date: "August 2025",
    description: "Achieved second place nationally for AI healthcare innovations.",
    image: "/p-6.jpeg", // Replace with actual path
    link: "#"
  },
]

export default function Media() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  const handleImageError = (id: number) => {
    setImageErrors(prev => new Set(prev).add(id))
  }

  return (
    <section id="media" className="py-32 px-6 md:px-12 relative overflow-hidden bg-black">
      {/* FADE IN EFFECT AT TOP */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, transparent, #000000)'
        }}
      />

      {/* Subtle floating orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)'
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Minimal grid */}
      <div className="absolute inset-0 opacity-[0.01]" style={{
        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '4rem 4rem'
      }} />
      
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
                Media & Press
              </h2>
              <p className="text-lg text-white/40 max-w-3xl mx-auto mt-4 font-light">
                Featured coverage and recognition in technology and innovation media
              </p>
              
              {/* Simple underline */}
              <motion.div 
                className="w-20 h-px mx-auto mt-6"
                style={{ background: 'linear-gradient(90deg, #667eea, #764ba2)' }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>
          </div>

          {/* Media Grid - With Clippings */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group relative block"
              >
                {/* Subtle glow on hover */}
                <motion.div
                  className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg"
                  style={{
                    background: `radial-gradient(circle at center, rgba(139, 92, 246, 0.15), transparent)`,
                  }}
                />

                <motion.div
                  className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden cursor-pointer relative"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Image/Clipping Preview */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-hidden">
                    {!imageErrors.has(item.id) ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={() => handleImageError(item.id)}
                      />
                    ) : (
                      // Fallback for missing images
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                        <div className="text-center p-6">
                          <Newspaper className="w-12 h-12 text-purple-400/40 mx-auto mb-2" strokeWidth={1.5} />
                          <p className="text-xs text-white/30">Newspaper Clipping</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Date badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/40 backdrop-blur-sm border border-white/10">
                      <span className="text-xs text-white/80 font-light">{item.date}</span>
                    </div>

                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%", skewX: -20 }}
                      animate={{ x: hoveredItem === item.id ? "200%" : "-100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    {/* Outlet */}
                    <div className="flex items-center gap-2">
                      <Newspaper className="w-4 h-4 text-purple-400" strokeWidth={1.5} />
                      <span className="text-xs text-purple-400 font-medium">{item.outlet}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors duration-500 leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                  

                    {/* Read Article Link */}
                    <motion.div
                      className="flex items-center gap-2 text-purple-400 font-medium text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-2"
                      animate={{ x: hoveredItem === item.id ? 3 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Read Article</span>
                      <ExternalLink className="w-3 h-3" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </div>

          {/* Upload Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center pt-8 space-y-4"
          >
            
          </motion.div>
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
