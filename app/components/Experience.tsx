'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { MapPin, Terminal } from 'lucide-react'

const experiences = [
  {
    type: "Work",
    title: "Full-Stack Developer",
    organization: "Education India",
    location: "Bokaro, IN",
    period: "2025 — Present",
    description: "Architecting a high-end institutional platform connecting educators. Focused on minimalist UI refinement and scalable backend infrastructure using Next.js and Prisma.",
    impact: ["System Architecture", "UI Refinement", "Database Scaling"]
  },
  {
    type: "Fellowship",
    title: "AI Research Fellow",
    organization: "IISER Bhopal",
    location: "Bhopal, IN",
    period: "Summer 2024",
    description: "Selected for the top 7% of applicants. Developed RAG-based clinical decision support and PINN frameworks for medical diagnostics.",
    impact: ["Top 7% Selection", "RAG Systems", "PINN Development"]
  },
  {
    type: "Research",
    title: "Computational Researcher",
    organization: "University of Hawaii (Sci-mi)",
    location: "Honolulu, HI (Remote)",
    period: "2024",
    description: "Developed PINN frameworks for photon transport simulation. Achieved a 10,000x speedup over traditional Monte Carlo sampling methods.",
    impact: ["10,000x Speedup", "PDE Constrained ML", "UNESCO Recognized"]
  },
  {
    type: "Research",
    title: "Lead AI Researcher",
    organization: "Pulsage System",
    location: "Bokaro, IN",
    period: "2023 — 2024",
    description: "Built a multimodal CNN ensemble for HCM detection. Validated at Bokaro General Hospital with 98.5% sensitivity across 200+ patients.",
    impact: ["98.5% Accuracy", "Clinical Validation", "Global Rank 1"]
  }
]

function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0, t = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.scale(dpr, dpr)
    }

    const wave = (baseY: number, amp: number, freq: number, phase: number, speed: number) => {
      ctx.beginPath()
      for (let x = 0; x <= W; x += 3) {
        const y = baseY
          + Math.sin(x * freq + phase + t * speed) * amp
          + Math.sin(x * freq * 0.6 + phase * 1.3 + t * speed * 0.7) * amp * 0.4
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath()
    }

    const waves = [
      { y: 0.85, amp: 40, freq: 0.006, phase: 0.0, speed: 0.5, fill: 'rgba(141,161,185,0.28)', line: 'rgba(141,161,185,0.5)' },
      { y: 0.72, amp: 32, freq: 0.008, phase: 0.0, speed: 0.8, fill: 'rgba(141,161,185,0.18)', line: 'rgba(141,161,185,0.4)' },
      { y: 0.62, amp: 24, freq: 0.010, phase: 1.2, speed: 1.1, fill: 'rgba(110,135,165,0.22)', line: 'rgba(110,135,165,0.4)' },
      { y: 0.52, amp: 18, freq: 0.013, phase: 2.4, speed: 0.6, fill: 'rgba(141,161,185,0.14)', line: 'rgba(141,161,185,0.3)' },
      { y: 0.42, amp: 14, freq: 0.016, phase: 3.8, speed: 1.4, fill: 'rgba(90,120,160,0.10)',  line: 'rgba(90,120,160,0.2)'  },
    ]

    const frame = () => {
      t += 0.06
      ctx.clearRect(0, 0, W, H)

      // White base
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, W, H)

      // Dot grid
      for (let x = 0; x < W; x += 24) {
        for (let y = 0; y < H; y += 24) {
          ctx.beginPath()
          ctx.arc(x, y, 0.6, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(141,161,185,0.18)'
          ctx.fill()
        }
      }

      // Waves
      waves.forEach(w => {
        wave(H * w.y, w.amp, w.freq, w.phase, w.speed)
        const grad = ctx.createLinearGradient(0, H * w.y - w.amp, 0, H)
        grad.addColorStop(0, w.fill)
        grad.addColorStop(1, w.fill.replace(/[\d.]+\)$/, '0.05)'))
        ctx.fillStyle = grad
        ctx.fill()

        // Crest line
        ctx.beginPath()
        for (let x = 0; x <= W; x += 3) {
          const y = H * w.y
            + Math.sin(x * w.freq + w.phase + t * w.speed) * w.amp
            + Math.sin(x * w.freq * 0.6 + w.phase * 1.3 + t * w.speed * 0.7) * w.amp * 0.4
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.strokeStyle = w.line
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Top-left corner light beam
      const beam = ctx.createRadialGradient(W * 0.08, H * 0.08, 0, W * 0.08, H * 0.08, W * 0.55)
      beam.addColorStop(0, 'rgba(141,161,185,0.10)')
      beam.addColorStop(1, 'rgba(141,161,185,0)')
      ctx.fillStyle = beam
      ctx.fillRect(0, 0, W, H)

      rafRef.current = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener('resize', resize)
    frame()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
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
            Professional <br />
            <span className="text-zinc-300">Milestones.</span>
          </h2>
        </div>

        <div className="space-y-0 border-l border-zinc-100 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
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
                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-zinc-100 group-hover:border-[#8DA1B9]/30 transition-all duration-500">
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