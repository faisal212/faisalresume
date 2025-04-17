"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function SkillRadar() {
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

    // Center point
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const maxRadius = Math.min(centerX, centerY) - 70

    // Colors based on theme
    const axisColor = theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.2)"
    const labelColor = theme === "dark" ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.8)"
    const areaColor = theme === "dark" ? "rgba(139, 92, 246, 0.3)" : "rgba(124, 58, 237, 0.2)"
    const areaStroke = theme === "dark" ? "rgba(139, 92, 246, 0.9)" : "rgba(124, 58, 237, 0.8)"
    const gridColor = theme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)"
    const percentColor = theme === "dark" ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.5)"

    // Skills data (value from 0 to 1)
    const skills = [
      { name: "React", value: 0.95 },
      { name: "AI/LLM", value: 0.7 },
      { name: "TypeScript", value: 0.9 },
      { name: "Next.js", value: 0.95 },
      { name: "Native", value: 0.85 },
      { name: "Node", value: 0.9 },
    ]

    const numSkills = skills.length
    const angleStep = (Math.PI * 2) / numSkills

    // Draw concentric circles
    const numCircles = 5
    for (let i = 1; i <= numCircles; i++) {
      const radius = (maxRadius / numCircles) * i
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = gridColor
      ctx.lineWidth = i === numCircles ? 2 : 1
      ctx.stroke()

      if (i < numCircles) {
        const label = `${i * 20}%`
        ctx.fillStyle = percentColor
        ctx.font = "12px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(label, centerX, centerY - radius - 5)
      }
    }

    // Draw axis lines and labels
    ctx.font = "bold 14px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    skills.forEach((skill, i) => {
      const angle = i * angleStep - Math.PI / 2 // Start from top

      // Draw axis line
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + Math.cos(angle) * maxRadius, centerY + Math.sin(angle) * maxRadius)
      ctx.strokeStyle = axisColor
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw label with background for better readability
      const labelDistance = maxRadius + 50
      const labelX = centerX + Math.cos(angle) * labelDistance
      const labelY = centerY + Math.sin(angle) * labelDistance

      // Text background
      const textWidth = ctx.measureText(skill.name).width
      ctx.fillStyle = theme === "dark" ? "rgba(30, 41, 59, 0.8)" : "rgba(255, 255, 255, 0.8)"
      ctx.beginPath()
      ctx.roundRect(labelX - textWidth / 2 - 15, labelY - 12, textWidth + 30, 24, 5)
      ctx.fill()

      // Text
      ctx.fillStyle = labelColor
      ctx.fillText(skill.name, labelX, labelY)
    })

    // Draw skill area
    ctx.beginPath()
    skills.forEach((skill, i) => {
      const angle = i * angleStep - Math.PI / 2
      const radius = maxRadius * skill.value

      if (i === 0) {
        ctx.moveTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius)
      } else {
        ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius)
      }
    })
    ctx.closePath()
    ctx.fillStyle = areaColor
    ctx.fill()
    ctx.strokeStyle = areaStroke
    ctx.lineWidth = 3
    ctx.stroke()

    // Draw data points
    ctx.fillStyle = theme === "dark" ? "#fff" : "#6d28d9"
    skills.forEach((skill, i) => {
      const angle = i * angleStep - Math.PI / 2
      const radius = maxRadius * skill.value

      ctx.beginPath()
      ctx.arc(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius, 6, 0, Math.PI * 2)
      ctx.fill()

      // Add value percentage near data point
      const valueText = `${Math.round(skill.value * 100)}%`
      const valueX = centerX + Math.cos(angle) * (radius - 20)
      const valueY = centerY + Math.sin(angle) * (radius - 20)

      // Text background
      const textWidth = ctx.measureText(valueText).width
      ctx.fillStyle = theme === "dark" ? "rgba(139, 92, 246, 0.4)" : "rgba(124, 58, 237, 0.2)"
      ctx.beginPath()
      ctx.roundRect(valueX - textWidth / 2 - 4, valueY - 9, textWidth + 8, 18, 4)
      ctx.fill()

      // Text
      ctx.fillStyle = theme === "dark" ? "#fff" : "#6d28d9"
      ctx.font = "bold 12px sans-serif"
      ctx.fillText(valueText, valueX, valueY)
    })
  }, [theme])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
