'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Cardiologist, Bokaro General Hospital",
    image: "/testimonials/doctor-1.jpg",
    content: "Sarvagya's PulseSage system demonstrates exceptional understanding of cardiac diagnostics. The AI model's accuracy and explainability make it a valuable tool for clinical practice.",
    rating: 5,
    project: "PulseSage"
  },
  {
    id: 2,
    name: "Prof. Arun Dayal Udai",
    role: "Faculty, IIT (ISM) Dhanbad",
    image: "/testimonials/professor-1.jpg",
    content:"Sarvagya's dedication to GauSeva and his innovative approach to improving cattle healthcare clearly demonstrate his passion for impactful scientific research",
    rating: 5,
    project: "GauSeva AI"
  },
  {
    id: 3,
    name: "Prof. Afshar Alam De",
    role: "Vice-chacelor, Jamia Hamdard",
    image: "/testimonials/mentor-1.jpg",
    content: "Sarvagya's research on every topic was outstanding. He brings creativity and rigor to every problem he tackles. Truely Exceptional",
    rating: 5,
    project: "Overall "
  },
  {
    id: 4,
    name: "Mr. Sarthak Siddhant ",
    role: "Employee, Education India",
    image: "/testimonials/cto-1.jpg",
    content: "As a backend engineer, Sarvagya consistently delivered high-quality code. His database optimization work significantly improved our platform performance.",
    rating: 5,
    project: "Education India"
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#0a0a0a]">
      {/* FADE IN EFFECT */}
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
                Testimonials
              </h2>
              <p className="text-lg text-white/40 max-w-3xl mx-auto mt-4 font-light">
                What mentors, collaborators, and professionals say about working with me
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

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full hover:bg-white/[0.07] transition-all duration-500 group">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-purple-400/30 mb-4" />
                  
                  {/* Content */}
                  <p className="text-white/70 leading-relaxed text-sm mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{testimonial.name}</p>
                      <p className="text-white/50 text-xs">{testimonial.role}</p>
                      <p className="text-purple-400 text-xs mt-1">{testimonial.project}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
