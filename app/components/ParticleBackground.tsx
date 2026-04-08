'use client'

import { useEffect, useRef } from 'react'

export default function DustyBlueRibbon() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

   const resize = () => {
  const dpr = window.devicePixelRatio || 1
  width = window.innerWidth
  height = window.innerHeight
  canvas.width = width * dpr
  canvas.height = height * dpr
  ctx.scale(dpr, dpr)
}

    window.addEventListener('resize', resize)
    resize()

    let time = 0

    function animate() {
      time += 0.012 // Ultra-slow for that premium, weighted feel
      ctx.clearRect(0, 0, width, height)
      
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, width, height)

      // --- DUSTY BLUE LIQUID DYNAMICS ---
      // Base Color: #8DA1B9 (Dusty Blue)
      const layers = [
        { width: 180, color: 'rgba(141, 161, 185, 0.08)', blur: 60, offset: 0 },   // Ambient drift
        { width: 120, color: 'rgba(110, 135, 165, 0.65)', blur: 30, offset: 12 },  // Main silk body
        { width: 40, color: 'rgba(255, 255, 255, 0.25)', blur: 15, offset: -8 }   // Specular edge
      ]

      layers.forEach((layer) => {
        ctx.filter = `blur(${layer.blur}px)`
        ctx.beginPath()
        ctx.strokeStyle = layer.color
        ctx.lineWidth = layer.width
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        const startX = width * 0.75 + layer.offset
        ctx.moveTo(startX, -300)

        // Flat, elegant "S" path
        for (let i = 0; i < 48; i++) {
          const t = i / 8
          // Large amplitude, low frequency swing
          const x = (width * 0.72 + Math.sin(t + time) * (width * 0.18)) + layer.offset
          const y = (i * (height / 30)) + Math.cos(time * 0.25) * 40
          ctx.lineTo(x, y)
        }
        ctx.stroke()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  )
}