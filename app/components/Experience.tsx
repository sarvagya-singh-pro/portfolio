'use client'

import { useVisible } from './UseVisible'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { MapPin, Terminal } from 'lucide-react'

const experiences = [
  {
    type: "Leadership",
    title: "Freshers' Representative",
    organization: "Computing Society, St Andrews",
    location: "St Andrews, UK",
    period: "Sept 2026 — Present",
    description: "Sole first-year voice on the committee, representing a 200+ first-year cohort. Steers decisions on society events, hackathons and university team selections from direct cohort feedback.",
    impact: ["200+ Student Cohort", "Sole First-Year Voice", "Events & Info Sessions"]
  },
  {
    type: "Team",
    title: "Technical Team Member",
    organization: "Formula Student AI, St Andrews",
    location: "St Andrews, UK",
    period: "Sept 2026 — Present",
    description: "Developing perception and control software for the team's fully autonomous racing car.",
    impact: ["Perception", "Control Software", "Autonomous Racing"]
  },
  {
    type: "Lead",
    title: "Lead Engineer",
    organization: "Nandani — Edge-AIoT Platform",
    location: "India",
    period: "2023 — 2024",
    description: "Directed a 3-person team shipping a livestock health platform to 40+ farms. Owned system architecture and delivery alongside the IIT (ISM) hardware collaboration.",
    impact: ["Team of 3", "40+ Farms", "IIT (ISM) Collaboration"]
  },
  {
    type: "Lead",
    title: "Navigation & CV Lead",
    organization: "Autonomous Inspection Rover",
    location: "India",
    period: "2024",
    description: "Led navigation and computer vision integration on a ROS2 autonomous rover. The team ranked All-India 15th at WRO Nationals.",
    impact: ["Team of 3", "ROS2", "All-India Rank 15"]
  }
]

function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const visible = useVisible(canvasRef)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0, t = 0, raf = 0, last = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const waves = [
      { y: 0.8, amp: 38, freq: 0.006, phase: 0.0, speed: 0.5, fill: 'rgba(141,161,185,0.24)', line: 'rgba(141,161,185,0.5)' },
      { y: 0.64, amp: 28, freq: 0.009, phase: 1.2, speed: 0.9, fill: 'rgba(110,135,165,0.17)', line: 'rgba(110,135,165,0.4)' },
      { y: 0.5, amp: 18, freq: 0.013, phase: 2.4, speed: 0.7, fill: 'rgba(141,161,185,0.11)', line: 'rgba(141,161,185,0.3)' },
    ]

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame)
      if (!visible.current || document.hidden || now - last < 33) return // ~30fps, only while on screen
      last = now
      t += 0.12
      ctx.clearRect(0, 0, W, H)
      for (const w of waves) {
        const base = H * w.y
        ctx.beginPath()
        for (let x = 0; x <= W + 8; x += 8) {
          const y = base
            + Math.sin(x * w.freq + w.phase + t * w.speed) * w.amp
            + Math.sin(x * w.freq * 0.6 + w.phase * 1.3 + t * w.speed * 0.7) * w.amp * 0.4
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.strokeStyle = w.line
        ctx.lineWidth = 1
        ctx.stroke() // crest line, then close the same path for the fill
        ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath()
        ctx.fillStyle = w.fill
        ctx.fill()
      }
    }

    resize()
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(frame)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [visible])

  return (
    <>
      {/* Dot grid + corner light are static CSS now (they were redrawn ~500 times per frame on the canvas) */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(141,161,185,0.18) 0.8px, transparent 0.8px)', backgroundSize: '24px 24px' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 8% 8%, rgba(141,161,185,0.10), transparent 55%)' }} />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} />
    </>
  )
}

export default function SystemExecutionLog() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const gridMovement = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section ref={containerRef} id="experience" className="py-60 px-6 bg-white relative overflow-hidden">

      {/* Animated wave canvas background */}
      <WaveBackground />

      {/* Parallax blueprint grid on top */}
      <motion.div
        style={{ y: gridMovement }}
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.06]"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #8DA1B9 1px, transparent 1px),
            linear-gradient(to bottom, #8DA1B9 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }} />
        <div className="absolute top-[10%] left-[5%] w-24 h-24 border-l border-t border-[#8DA1B9]/20" />
        <div className="absolute bottom-[10%] right-[5%] w-24 h-24 border-r border-b border-[#8DA1B9]/20" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#8DA1B9]" />
            <span className="text-[11px] font-bold tracking-[0.4em] text-[#8DA1B9] uppercase">
              Career / Execution
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-[1.05]">
            Leadership <br />
            <span className="text-zinc-300">& Teams.</span>
          </h2>
        </div>

        <div className="space-y-0 border-l border-zinc-100 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative pl-12 pb-24 group last:pb-0"
            >
              <div className="absolute left-[-5.5px] top-2 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#8DA1B9] group-hover:border-[#007AFF] transition-all duration-500 group-hover:scale-125" />

              <div className="grid md:grid-cols-12 gap-8 items-start">

                <div className="md:col-span-3 space-y-2">
                  <p className="text-[10px] font-bold text-[#8DA1B9] uppercase tracking-[0.2em]">{exp.period}</p>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <MapPin className="w-3 h-3" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">{exp.location}</span>
                  </div>
                </div>

                <div className="md:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold text-white bg-black px-2 py-0.5 rounded-sm uppercase tracking-tighter">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-black group-hover:text-[#007AFF] transition-colors duration-500">
                      {exp.title}
                    </h3>
                    <p className="text-[11px] font-bold text-[#8DA1B9] uppercase tracking-[0.3em] leading-none">
                      {exp.organization}
                    </p>
                  </div>
                  <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>

                <div className="md:col-span-3">
                  <div className="bg-white/80 p-6 rounded-2xl border border-zinc-100 group-hover:border-[#8DA1B9]/30 transition-all duration-500">
                    <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Terminal className="w-3 h-3 text-[#007AFF]" /> Output_Log
                    </p>
                    <ul className="space-y-3">
                      {exp.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs font-bold text-black">
                          <div className="w-1 h-1 rounded-full bg-[#007AFF] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}