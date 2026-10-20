'use client'

import { useEffect, useRef } from 'react'

// Rendered ONCE for the whole page. Draws at 1/4 resolution and lets the browser upscale it,
// which gives the soft blurred-ribbon look without ctx.filter blur (the old main bottleneck).
export default function DustyBlueRibbon() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const S = 0.25
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, time = 0, raf = 0, last = 0

    const layers = [
      { width: 180, color: 'rgba(141,161,185,0.10)', offset: 0, passes: [[1.6, 0.4], [1, 0.6]] },
      { width: 120, color: 'rgba(110,135,165,0.55)', offset: 12, passes: [[2.0, 0.18], [1.4, 0.3], [0.9, 0.5]] },
      { width: 40, color: 'rgba(255,255,255,0.35)', offset: -8, passes: [[1.8, 0.4], [1, 0.6]] },
    ]

    const draw = () => {
      ctx.globalAlpha = 1
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, w, h)
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      for (const l of layers) {
        ctx.beginPath()
        for (let i = 0; i <= 30; i++) {
          const y = (i / 30) * (h + 50) - 25
          const x = w * 0.7 + Math.sin((y / S) * 0.0015 + time) * (w * 0.15) + l.offset * S
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.strokeStyle = l.color
        for (const [k, a] of l.passes) {
          ctx.lineWidth = l.width * S * k
          ctx.globalAlpha = a
          ctx.stroke()
        }
      }
      ctx.globalAlpha = 1
    }

    const resize = () => {
      w = Math.ceil(window.innerWidth * S)
      h = Math.ceil(window.innerHeight * S)
      canvas.width = w
      canvas.height = h
      draw()
    }

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop)
      if (document.hidden || now - last < 33) return // ~30fps, paused in background tabs
      last = now
      time += 0.024
      draw()
    }

    resize()
    window.addEventListener('resize', resize)
    if (!reduce) raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" style={{ pointerEvents: 'none' }} />
}