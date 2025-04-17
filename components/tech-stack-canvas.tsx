"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface TechNode {
  id: string
  name: string
  category: string
  size: number
  x: number
  y: number
  vx: number
  vy: number
}

export default function TechStackCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharpness
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Tech stack data
    const technologies: TechNode[] = [
      // Frontend
      { id: "react", name: "React", category: "frontend", size: 40, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "nextjs", name: "Next.js", category: "frontend", size: 42, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "typescript", name: "TypeScript", category: "frontend", size: 35, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "tailwind", name: "Tailwind", category: "frontend", size: 32, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "reactnative", name: "React Native", category: "frontend", size: 30, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "gatsbyjs", name: "GatsbyJS", category: "frontend", size: 28, x: 0, y: 0, vx: 0, vy: 0 },

      // AI
      { id: "openai", name: "OpenAI", category: "ai", size: 38, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "langbase", name: "Langbase", category: "ai", size: 35, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "rag", name: "RAG", category: "ai", size: 33, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "llm", name: "LLM", category: "ai", size: 36, x: 0, y: 0, vx: 0, vy: 0 },

      // Backend
      { id: "nodejs", name: "Node.js", category: "backend", size: 34, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "express", name: "Express", category: "backend", size: 28, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "mongodb", name: "MongoDB", category: "backend", size: 30, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "wordpress", name: "WordPress", category: "backend", size: 27, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "php", name: "PHP", category: "backend", size: 26, x: 0, y: 0, vx: 0, vy: 0 },

      // Tools
      { id: "git", name: "Git", category: "tools", size: 25, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "figma", name: "Figma", category: "tools", size: 25, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "vscode", name: "VS Code", category: "tools", size: 25, x: 0, y: 0, vx: 0, vy: 0 },

      // Other Technologies
      { id: "csharp", name: "C#", category: "other", size: 26, x: 0, y: 0, vx: 0, vy: 0 },
      { id: "unity3d", name: "Unity3D", category: "other", size: 27, x: 0, y: 0, vx: 0, vy: 0 },
    ]

    // Initialize positions randomly
    technologies.forEach((tech) => {
      tech.x = Math.random() * rect.width
      tech.y = Math.random() * rect.height
      tech.vx = (Math.random() - 0.5) * 2
      tech.vy = (Math.random() - 0.5) * 2
    })

    // Colors based on category and theme
    const getColor = (category: string) => {
      if (theme === "dark") {
        switch (category) {
          case "frontend":
            return { fill: "rgba(139, 92, 246, 0.5)", stroke: "rgba(139, 92, 246, 1)", glow: "rgba(139, 92, 246, 0.3)" }
          case "ai":
            return { fill: "rgba(79, 70, 229, 0.5)", stroke: "rgba(79, 70, 229, 1)", glow: "rgba(79, 70, 229, 0.3)" }
          case "backend":
            return { fill: "rgba(16, 185, 129, 0.5)", stroke: "rgba(16, 185, 129, 1)", glow: "rgba(16, 185, 129, 0.3)" }
          case "tools":
            return { fill: "rgba(245, 158, 11, 0.5)", stroke: "rgba(245, 158, 11, 1)", glow: "rgba(245, 158, 11, 0.3)" }
          case "other":
            return { fill: "rgba(236, 72, 153, 0.5)", stroke: "rgba(236, 72, 153, 1)", glow: "rgba(236, 72, 153, 0.3)" }
          default:
            return {
              fill: "rgba(156, 163, 175, 0.5)",
              stroke: "rgba(156, 163, 175, 1)",
              glow: "rgba(156, 163, 175, 0.3)",
            }
        }
      } else {
        switch (category) {
          case "frontend":
            return {
              fill: "rgba(139, 92, 246, 0.2)",
              stroke: "rgba(139, 92, 246, 0.9)",
              glow: "rgba(139, 92, 246, 0.1)",
            }
          case "ai":
            return { fill: "rgba(79, 70, 229, 0.2)", stroke: "rgba(79, 70, 229, 0.9)", glow: "rgba(79, 70, 229, 0.1)" }
          case "backend":
            return {
              fill: "rgba(16, 185, 129, 0.2)",
              stroke: "rgba(16, 185, 129, 0.9)",
              glow: "rgba(16, 185, 129, 0.1)",
            }
          case "tools":
            return {
              fill: "rgba(245, 158, 11, 0.2)",
              stroke: "rgba(245, 158, 11, 0.9)",
              glow: "rgba(245, 158, 11, 0.1)",
            }
          case "other":
            return { fill: "rgba(236, 72, 153, 0.2)", stroke: "rgba(236, 72, 153, 0.9)", glow: "rgba(236, 72, 153, 0.1)" }
          default:
            return {
              fill: "rgba(156, 163, 175, 0.2)",
              stroke: "rgba(156, 163, 175, 0.9)",
              glow: "rgba(156, 163, 175, 0.1)",
            }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Update positions
      technologies.forEach((tech) => {
        // Bounce off walls
        if (tech.x < tech.size || tech.x > rect.width - tech.size) {
          tech.vx *= -1
        }
        if (tech.y < tech.size || tech.y > rect.height - tech.size) {
          tech.vy *= -1
        }

        // Apply velocity
        tech.x += tech.vx * 0.5
        tech.y += tech.vy * 0.5

        // Keep within bounds
        tech.x = Math.max(tech.size, Math.min(rect.width - tech.size, tech.x))
        tech.y = Math.max(tech.size, Math.min(rect.height - tech.size, tech.y))
      })

      // Draw connections
      ctx.lineWidth = 1.5
      technologies.forEach((tech1, i) => {
        technologies.slice(i + 1).forEach((tech2) => {
          const dx = tech2.x - tech1.x
          const dy = tech2.y - tech1.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only draw connections if they're close enough
          const maxDistance = 150
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle =
              theme === "dark" ? `rgba(255, 255, 255, ${opacity * 0.4})` : `rgba(0, 0, 0, ${opacity * 0.2})`

            ctx.beginPath()
            ctx.moveTo(tech1.x, tech1.y)
            ctx.lineTo(tech2.x, tech2.y)
            ctx.stroke()
          }
        })
      })

      // Draw nodes
      technologies.forEach((tech) => {
        const color = getColor(tech.category)

        // Draw glow effect
        ctx.shadowBlur = 15
        ctx.shadowColor = color.glow

        // Draw circle
        ctx.beginPath()
        ctx.arc(tech.x, tech.y, tech.size, 0, Math.PI * 2)
        ctx.fillStyle = color.fill
        ctx.fill()
        ctx.shadowBlur = 0

        ctx.strokeStyle = color.stroke
        ctx.lineWidth = 2.5
        ctx.stroke()

        // Draw text with background for better readability
        ctx.font = "bold 14px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        const textWidth = ctx.measureText(tech.name).width

        // Text background
        ctx.fillStyle = theme === "dark" ? "rgba(15, 23, 42, 0.85)" : "rgba(255, 255, 255, 0.85)"
        ctx.beginPath()
        ctx.roundRect(tech.x - textWidth / 2 - 5, tech.y - 9, textWidth + 10, 18, 4)
        ctx.fill()

        // Text
        ctx.fillStyle = theme === "dark" ? "rgba(255, 255, 255, 0.95)" : "rgba(0, 0, 0, 0.9)"
        ctx.fillText(tech.name, tech.x, tech.y)
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
