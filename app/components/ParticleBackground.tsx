'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackgroundProfessional() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const canvasEl = canvas // ✅ non-null alias

    const context = canvasEl.getContext('2d')
    if (!context) return

    const ctx = context // ✅ non-null alias

    canvasEl.width = window.innerWidth
    canvasEl.height = window.innerHeight

    const config = {
      gridSpacing: 80,
      gridOpacity: 0.02,
      nodeCount: 12,
      nodeSize: 8,
      nodeSpeed: 0.02,
      connectionDistance: 300,
      connectionOpacity: 0.15,
    }

    const nodes: {
      x: number
      y: number
      baseX: number
      baseY: number
      vx: number
      vy: number
      size: number
      opacity: number
      pulsePhase: number
    }[] = []

    for (let i = 0; i < config.nodeCount; i++) {
      const x = Math.random() * canvasEl.width
      const y = Math.random() * canvasEl.height

      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * config.nodeSpeed,
        vy: (Math.random() - 0.5) * config.nodeSpeed,
        size: config.nodeSize,
        opacity: 0.4 + Math.random() * 0.4,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    let frame = 0

    function drawGrid() {
      ctx.strokeStyle = `rgba(96,165,250,${config.gridOpacity})`
      ctx.lineWidth = 1

      for (let x = 0; x < canvasEl.width; x += config.gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvasEl.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvasEl.height; y += config.gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvasEl.width, y)
        ctx.stroke()
      }
    }

    function drawNodes() {
      frame++

      nodes.forEach((node, i) => {
        const t = frame * 0.01
        node.x = node.baseX + Math.sin(t + i) * 40
        node.y = node.baseY + Math.cos(t + i) * 40

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(96,165,250,${node.opacity})`
        ctx.fill()
      })
    }

    function animate() {
      ctx.fillStyle = '#0a0e27'
      ctx.fillRect(0, 0, canvasEl.width, canvasEl.height)

      drawGrid()
      drawNodes()

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvasEl.width = window.innerWidth
      canvasEl.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-50 mix-blend-lighten"
    />
  )
}
