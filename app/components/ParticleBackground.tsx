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
      // 1. Re-verify the context to keep TypeScript happy
      const canvas = canvasRef.current
      const ctx = canvas?.getContext('2d')
      if (!ctx || !canvas) return

      time += 0.012
      
      // Clear with the background color
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, width, height)

      // --- DUSTY BLUE LIQUID DYNAMICS ---
      const layers = [
        { width: 180, color: 'rgba(141, 161, 185, 0.08)', blur: 60, offset: 0 },
        { width: 120, color: 'rgba(110, 135, 165, 0.65)', blur: 30, offset: 12 },
        { width: 40, color: 'rgba(255, 255, 255, 0.25)', blur: 15, offset: -8 }
      ]

      layers.forEach((layer) => {
        ctx.save() // Better practice for filters
        ctx.filter = `blur(${layer.blur}px)`
        ctx.beginPath()
        ctx.strokeStyle = layer.color
        ctx.lineWidth = layer.width
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        // Start off-screen at the top
        const startX = width * 0.75 + layer.offset
        ctx.moveTo(startX, -100)

        // Generate the silk path
        for (let i = 0; i <= 60; i++) {
          const y = (i / 60) * (height + 200)
          
          // Smooth wave logic: 
          // Math.sin creates the horizontal sway
          // (y * 0.002) ensures the wave flows down the length of the ribbon
          const x = (width * 0.7) + 
                    Math.sin(y * 0.0015 + time) * (width * 0.15) + 
                    layer.offset
          
          ctx.lineTo(x, y)
        }
        
        ctx.stroke()
        ctx.restore() // Reset state for the next layer
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