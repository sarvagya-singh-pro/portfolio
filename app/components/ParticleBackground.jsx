'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackgroundProfessional() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Configuration for professional neural network matrix
    const config = {
      gridSpacing: 80,
      gridOpacity: 0.02,
      gridColor: '#60a5fa', // Blue-400
      nodeCount: 12,
      nodeColor: { r: 96, g: 165, b: 250 }, // Blue-400
      nodeSize: 8,
      nodeSpeed: 0.02,
      connectionDistance: 300,
      connectionOpacity: 0.15,
    }

    // Node system for neural network effect
    const nodes = []

    // Initialize nodes with slow, gentle movement
    for (let i = 0; i < config.nodeCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height

      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * config.nodeSpeed,
        vy: (Math.random() - 0.5) * config.nodeSpeed,
        size: config.nodeSize,
        opacity: 0.4 + Math.random() * 0.4,
        glowIntensity: 0.6 + Math.random() * 0.4,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    let frameCount = 0

    function drawGrid() {
      ctx.strokeStyle = `rgba(96, 165, 250, ${config.gridOpacity})`
      ctx.lineWidth = 1

      // Vertical lines
      for (let x = 0; x < canvas.width; x += config.gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += config.gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Diagonal lines for neural network feel
      const diagonalSpacing = config.gridSpacing * 2

      // Diagonal top-left to bottom-right
      for (let x = -canvas.height; x < canvas.width; x += diagonalSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x + canvas.height, canvas.height)
        ctx.stroke()
      }

      // Diagonal top-right to bottom-left
      for (let x = 0; x < canvas.width + canvas.height; x += diagonalSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x - canvas.height, canvas.height)
        ctx.stroke()
      }
    }

    function drawNodes() {
      frameCount++

      nodes.forEach((node, i) => {
        // Gentle oscillating movement
        const time = frameCount * 0.01
        node.x = node.baseX + Math.sin(time + i) * 40 + node.vx * frameCount
        node.y = node.baseY + Math.cos(time + i * 0.7) * 40 + node.vy * frameCount

        // Wrap around canvas
        if (node.x < 0) node.baseX = canvas.width
        if (node.x > canvas.width) node.baseX = 0
        if (node.y < 0) node.baseY = canvas.height
        if (node.y > canvas.height) node.baseY = 0

        // Gentle pulsing glow effect
        const pulse = 0.5 + Math.sin(time + node.pulsePhase) * 0.5
        const currentOpacity = node.opacity * pulse

        // Draw glow halo (outer soft gradient)
        const haloGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size * 4
        )
        haloGradient.addColorStop(0, `rgba(96, 165, 250, ${currentOpacity * 0.4})`)
        haloGradient.addColorStop(0.5, `rgba(96, 165, 250, ${currentOpacity * 0.1})`)
        haloGradient.addColorStop(1, `rgba(96, 165, 250, 0)`)

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = haloGradient
        ctx.fill()

        // Draw bright core
        const coreGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size
        )
        coreGradient.addColorStop(0, `rgba(96, 165, 250, ${currentOpacity})`)
        coreGradient.addColorStop(1, `rgba(96, 165, 250, ${currentOpacity * 0.3})`)

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fillStyle = coreGradient
        ctx.fill()

        // Draw solid bright center
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size * 0.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.8})`
        ctx.fill()

        // Draw connections to nearby nodes
        nodes.forEach((otherNode, j) => {
          if (i >= j) return

          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < config.connectionDistance && distance > 0) {
            const connectionOpacity =
              config.connectionOpacity * (1 - distance / config.connectionDistance)

            // Gradient line connecting nodes
            const lineGradient = ctx.createLinearGradient(
              node.x, node.y,
              otherNode.x, otherNode.y
            )
            lineGradient.addColorStop(0, `rgba(96, 165, 250, ${connectionOpacity})`)
            lineGradient.addColorStop(0.5, `rgba(96, 165, 250, ${connectionOpacity * 1.2})`)
            lineGradient.addColorStop(1, `rgba(96, 165, 250, ${connectionOpacity})`)

            ctx.beginPath()
            ctx.strokeStyle = lineGradient
            ctx.lineWidth = 0.8
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()

            // Add faint glow to connection line
            ctx.strokeStyle = `rgba(96, 165, 250, ${connectionOpacity * 0.3})`
            ctx.lineWidth = 3
            ctx.stroke()
          }
        })
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      // Clear with deep space background
      ctx.fillStyle = '#0a0e27'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw static grid
      drawGrid()

      // Draw animated nodes
      drawNodes()

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-50 mix-blend-lighten"
    />
  )
}