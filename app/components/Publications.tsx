'use client'

import { useVisible } from './UseVisible'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const publications = [
  {
    id: "1",
    title: "PhotonPINN3D: Physics-Informed Surrogate for Monte Carlo Photon Transport",
    venue: "UNESCO International Year of Quantum Science",
    year: "2026",
    type: "Manuscript submitted May 2026 • Sole author",
    abstract: "An ensemble of three PINNs (550, 650, 800 nm) with a Beer-Lambert log-prior and variance-weighted training data. Validated against a 5-seed, 10^6-photon Monte Carlo reference at 4.7% far-field MAPE, with 117× faster CPU inference. Adopted as a forward solver for diffuse optical tomography and fNIRS sensitivity maps.",
    keywords: ["PINNs", "Photon Transport", "ONNX", "Diffuse Optical Tomography"],
    link: "",
    status: "UNESCO Winner • 1st of 3,062"
  },
  {
    id: "2",
    title: "PromptBiotics: Retrieval-Augmented LLM with Safety Validation",
    venue: "NUS",
    year: "2024",
    type: "AI in Healthcare",
    abstract: "A RAG system on fine-tuned GPT-4o with hybrid BM25 + semantic retrieval and cross-encoder reranking. A constraint-based validation layer checks outputs against WHO dietary guidelines and cut hallucinations by 60%. Shipped a beta to 500+ users.",
    keywords: ["RAG", "Hybrid Search", "LLM Safety Evals", "GPT-4o"],
    link: "https://promptbiotics.org",
    status: "500+ Beta Users"
  }
]

const NODES = 70
const CONNECT_DIST = 150

function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const visible = useVisible(canvasRef)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    type Node = { x: number; y: number; vx: number; vy: number; r: number; phase: number }
    let W = 0, H = 0, t = 0, raf = 0, last = 0
    let nodes: Node[] = []

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      nodes = Array.from({ length: NODES }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 1.2, vy: (Math.random() - 0.5) * 1.2,
        r: Math.random() * 1.8 + 0.8, phase: Math.random() * Math.PI * 2,
      }))
    }

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame)
      if (!visible.current || document.hidden || now - last < 33) return // ~30fps, only while on screen
      last = now
      t += 0.016
      ctx.clearRect(0, 0, W, H)

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      }

      ctx.lineWidth = 0.8
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          if (dx > CONNECT_DIST || dx < -CONNECT_DIST || dy > CONNECT_DIST || dy < -CONNECT_DIST) continue
          const d2 = dx * dx + dy * dy
          if (d2 < CONNECT_DIST * CONNECT_DIST) {
            ctx.strokeStyle = `rgba(141,161,185,${(1 - Math.sqrt(d2) / CONNECT_DIST) * 0.25})`
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        const pulse = 0.5 + 0.5 * Math.sin(t * 20 * 0.05 + n.phase)
        ctx.fillStyle = `rgba(110,135,165,${0.3 + pulse * 0.4})`
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r * (0.85 + pulse * 0.3), 0, Math.PI * 2); ctx.fill()
      }
    }

    init()
    window.addEventListener('resize', init)
    raf = requestAnimationFrame(frame)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', init) }
  }, [visible])

  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 82% 12%, rgba(141,161,185,0.14), transparent 55%), radial-gradient(circle at 10% 85%, rgba(110,135,165,0.10), transparent 45%)' }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} />
    </>
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
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group border-t border-zinc-100 py-20 transition-all duration-500 hover:bg-white/70 px-8 -mx-8 rounded-2xl"
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
                        className="text-[11px] font-medium text-[#8DA1B9] border border-[#8DA1B9]/30 px-3 py-1 rounded-3xl bg-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3 flex md:justify-end items-center">
                  {paper.link && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-semibold text-black tracking-wider group-hover:gap-4 transition-all duration-300 group-hover:text-[#007AFF]"
                    >
                      Visit project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}