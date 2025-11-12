'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
      glowIntensity: number
    }> = []

    const colors = [
      { r: 139, g: 92, b: 246 },   // purple
      { r: 59, g: 130, b: 246 },    // blue
      { r: 168, g: 85, b: 247 },    // violet
      { r: 124, g: 58, b: 237 },    // deep purple
    ]

    const particleCount = 80 // Increased from 50

    for (let i = 0; i < particleCount; i++) {
      const colorObj = colors[Math.floor(Math.random() * colors.length)]
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1, // Larger particles (1-4px)
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.6 + 0.3, // More visible (0.3-0.9)
        color: `rgba(${colorObj.r}, ${colorObj.g}, ${colorObj.b}, `,
        glowIntensity: Math.random() * 0.5 + 0.5
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Create gradient for each particle (glow effect)
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        )
        gradient.addColorStop(0, particle.color + particle.opacity + ')')
        gradient.addColorStop(0.5, particle.color + (particle.opacity * 0.5) + ')')
        gradient.addColorStop(1, particle.color + '0)')

        // Draw glowing particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw solid center
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color + particle.opacity + ')'
        ctx.fill()

        // Enhanced connections with gradient
        particles.forEach((particle2, j) => {
          if (i === j) return
          const dx = particle.x - particle2.x
          const dy = particle.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) { // Increased connection distance
            const opacity = 0.25 * (1 - distance / 150) // More visible connections
            
            // Create gradient for connection line
            const lineGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              particle2.x, particle2.y
            )
            lineGradient.addColorStop(0, `rgba(139, 92, 246, ${opacity})`)
            lineGradient.addColorStop(0.5, `rgba(168, 85, 247, ${opacity * 1.2})`)
            lineGradient.addColorStop(1, `rgba(139, 92, 246, ${opacity})`)

            ctx.beginPath()
            ctx.strokeStyle = lineGradient
            ctx.lineWidth = 1 // Thicker lines
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.stroke()
          }
        })
      })

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
      className="absolute inset-0 pointer-events-none opacity-60"
    />
  )
}
