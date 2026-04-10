'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const publications = [
  {
    id: "01",
    title: "Whispers of Light: Physics-Informed Neural Network for Photon Propagation",
    venue: "UNESCO International Year of Quantum Science",
    year: "2025",
    type: "Awarded Research",
    abstract: "Built a PINN model that directly embeds differential equations for scattering, absorption, and refraction in biological tissue. Achieved 10,000× speedup over traditional Monte Carlo methods while maintaining high physical accuracy.",
    keywords: ["PINNs", "Photonics", "Scientific Computing", "Quantum-Inspired AI"],
    link: "/whispers-of-light.pdf",
    status: "UNESCO Creativity Award"
  },
  {
    id: "02",
    title: "PromptBiotic: Domain-Adapted Clinical LLM System",
    venue: "NUS Yong Loo Lin School of Medicine Collaboration",
    year: "2025",
    type: "AI in Healthcare",
    abstract: "Developed a retrieval-augmented, adapter-tuned large language model for clinical and nutritional decision support. Focused on reducing hallucinations through structured medical grounding and safety validation.",
    keywords: ["RAG", "LLM Safety", "Clinical AI", "Domain Adaptation"],
    link: "https://promptbiotics.org",
    status: "Presented at NUS"
  },
  {
    id: "03",
    title: "Autonomous Structural Inspection Rover",
    venue: "World Robot Olympiad National Finals",
    year: "2025",
    type: "Robotics & Computer Vision",
    abstract: "Led the only team from Jharkhand to the National Finals (All India Rank 15). Designed a LiDAR + CV system for early detection of cracks and stress in infrastructure, optimised for real-world deployment on resource-constrained hardware.",
    keywords: ["Computer Vision", "LiDAR Fusion", "Autonomous Systems", "Edge AI"],
    link: "/wro-rover.pdf",
    status: "National Finals"
  }
]

const NODES = 355
const CONNECT_DIST = 160

function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0, t = 0

    type Node = { x: number; y: number; vx: number; vy: number; r: number; phase: number; pulse: number }
    let nodes: Node[] = []

    const init = () => {
      const dpr = window.devicePixelRatio || 1
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.scale(dpr, dpr)
      nodes = Array.from({ length: NODES }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 1.8,
        vy: (Math.random() - 0.5) * 1.8,
        r: Math.random() * 2.2 + 0.8,
        phase: Math.random() * Math.PI * 2,
        pulse: Math.random() * 0.5 + 0.5,
      }))
    }

    const frame = () => {
      t += 0.008
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, W, H)

      // Bloom top-right
      const bloom1 = ctx.createRadialGradient(W * 0.82, H * 0.12, 0, W * 0.82, H * 0.12, W * 0.55)
      bloom1.addColorStop(0, 'rgba(141,161,185,0.13)')
      bloom1.addColorStop(0.5, 'rgba(141,161,185,0.05)')
      bloom1.addColorStop(1, 'rgba(141,161,185,0)')
      ctx.fillStyle = bloom1
      ctx.fillRect(0, 0, W, H)

      // Bloom bottom-left
      const bloom2 = ctx.createRadialGradient(W * 0.1, H * 0.85, 0, W * 0.1, H * 0.85, W * 0.4)
      bloom2.addColorStop(0, 'rgba(110,135,165,0.09)')
      bloom2.addColorStop(1, 'rgba(110,135,165,0)')
      ctx.fillStyle = bloom2
      ctx.fillRect(0, 0, W, H)

      // Move
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      })

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.22
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(141,161,185,${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Nodes
      nodes.forEach(n => {
        const pulse = 0.5 + 0.5 * Math.sin(t * n.pulse + n.phase)
        const alpha = 0.25 + pulse * 0.45
        const radius = n.r * (0.85 + pulse * 0.3)

        ctx.beginPath()
        ctx.arc(n.x, n.y, radius * 2.8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(141,161,185,${alpha * 0.12})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(110,135,165,${alpha})`
        ctx.fill()
      })

      // Slow scan line
      const scanY = ((t * 18) % (H + 60)) - 30
      const scanGrad = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20)
      scanGrad.addColorStop(0, 'rgba(141,161,185,0)')
      scanGrad.addColorStop(0.5, 'rgba(141,161,185,0.06)')
      scanGrad.addColorStop(1, 'rgba(141,161,185,0)')
      ctx.fillStyle = scanGrad
      ctx.fillRect(0, scanY - 20, W, 40)

      rafRef.current = requestAnimationFrame(frame)
    }

    init()
    window.addEventListener('resize', init)
    frame()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', init)
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

export default function FormalResearchIndex() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])

  return (
    <section ref={containerRef} id="research" className="py-60 px-6 bg-white relative overflow-hidden">

      {/* Constellation mesh background */}
      <ConstellationBackground />

      {/* Parallax blueprint grid overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: gridY, zIndex: 0 }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #8DA1B9 1px, transparent 1px),
              linear-gradient(to bottom, #8DA1B9 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
        <div className="absolute top-[8%] left-[4%] w-20 h-20 border-l border-t border-[#8DA1B9]/10" />
        <div className="absolute top-[8%] right-[4%] w-20 h-20 border-r border-t border-[#8DA1B9]/10" />
        <div className="absolute bottom-[8%] left-[4%] w-20 h-20 border-l border-b border-[#8DA1B9]/10" />
        <div className="absolute bottom-[8%] right-[4%] w-20 h-20 border-r border-b border-[#8DA1B9]/10" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#8DA1B9]" />
            <span className="text-[11px] font-bold tracking-[0.4em] text-[#8DA1B9] uppercase">
              Research &amp; Innovation
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-[1.05]">
            Selected Work.
          </h2>
        </div>

        <div className="space-y-0">
          {publications.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group border-t border-zinc-100 py-20 transition-all duration-500 hover:bg-white/70 px-8 -mx-8 rounded-2xl backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-12 gap-12 items-start">

                <div className="md:col-span-3 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono font-bold text-zinc-300">REF_0{paper.id}</span>
                    <div className="px-3 py-1 rounded-2xl bg-[#007AFF] text-[10px] font-semibold text-white tracking-tighter">
                      {paper.status}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-black">{paper.venue}</p>
                    <p className="text-xs text-zinc-400">{paper.type} • {paper.year}</p>
                  </div>
                </div>

                <div className="md:col-span-6 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-black group-hover:text-[#007AFF] transition-colors duration-500 leading-tight">
                    {paper.title}
                  </h3>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    {paper.abstract}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {paper.keywords.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-[#8DA1B9] border border-[#8DA1B9]/30 px-3 py-1 rounded-3xl bg-white/60 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3 flex md:justify-end items-center">
                  <a
                    href={paper.link}
                    target="_blank"
                    className="flex items-center gap-3 text-sm font-semibold text-black tracking-wider group-hover:gap-4 transition-all duration-300 group-hover:text-[#007AFF]"
                  >
                   
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}