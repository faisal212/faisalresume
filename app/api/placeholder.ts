import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const width = searchParams.get("width") || "200"
  const height = searchParams.get("height") || "200"
  const text = searchParams.get("text") || "FA"

  // Create an SVG placeholder with the user's initials
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#7c3aed" />
      <circle cx="${Number.parseInt(width) / 2}" cy="${Number.parseInt(height) / 2}" r="${Math.min(Number.parseInt(width), Number.parseInt(height)) / 2.5}" fill="#4f46e5" />
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="${Math.min(Number.parseInt(width), Number.parseInt(height)) / 3}"
        font-weight="bold"
        fill="white"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ${text}
      </text>
    </svg>
  `

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
