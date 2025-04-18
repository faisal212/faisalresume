"use client"

import { forwardRef, useEffect } from "react"
import Image from "next/image"
import { Briefcase, Mail, Linkedin, Globe, Award, Languages, User, Code, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"

// This component is specifically designed for printing
// It contains all resume content in a format optimized for PDF output

const experiences = [
  {
    id: 1,
    title: "LLM-Powered Web Developer",
    company: "Decommerce",
    location: "Zurich, Switzerland",
    period: "March 2022 - Present",
    duration: "3 years 2 months",
    description: `In my role as an Experienced React Developer at ComOn Enterprise LLC, I harness the power of cutting-edge web technologies to create dynamic, responsive, and interactive web applications that drive business success and enhance user engagement. My technical expertise lies in the strategic utilization of React.js to develop robust user interfaces, coupled with Next.js for server-side rendering that accelerates page loads and optimizes performance.`,
    skills: ["React", "Next.js", "TypeScript", "LLM Integration", "AI Workflows"],
    highlights: [
      "Implemented Progressive Web Applications (PWAs)",
      "Created a library of UI components with Storybook",
      "Drove project completion from conception to deployment",
    ],
  },
  {
    id: 2,
    title: "Experienced React Developer",
    company: "ComOn Enterprise LLC",
    location: "Zurich, Switzerland",
    period: "June 2021 - Present",
    duration: "3 years 11 months",
    description: "",
    skills: ["React", "Redux", "JavaScript", "UI/UX"],
    highlights: [],
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "Smart Reality",
    location: "Lahore, Punjab, Pakistan",
    period: "December 2018 - March 2020",
    duration: "1 year 4 months",
    description: `As a team leader and full stack developer at Smart Reality Company, I worked on their internal product, an augmented reality app for teaching vocabulary and animals to kindergarten children. My responsibilities included leading the development team and working on the app's front-end and back-end components. The app was a success and received positive feedback from users.`,
    skills: ["Full Stack", "Team Leadership", "AR Development", "React", "Node.js"],
    highlights: [
      "Led development team of 5 engineers",
      "Developed AR features for educational content",
      "Implemented responsive UI for multiple devices",
    ],
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "AcroEx",
    location: "Lahore",
    period: "June 2016 - December 2018",
    duration: "2 years 7 months",
    description: `My first job experience was with a company where I developed HTML and CSS templates for ThemeForest. Later on, I created highly dynamic WordPress themes for the same company, which sold from 100 to 1,000 digital copies. This experience gave me valuable skills in web development and the ability to create high-quality products.`,
    skills: ["HTML/CSS", "WordPress", "JavaScript", "UI Design"],
    highlights: [
      "Created premium WordPress themes",
      "Achieved 1000+ sales on ThemeForest",
      "Specialized in responsive design",
    ],
  },
]

const skills = {
  development: [
    { name: "React/Next.js", level: "Expert", percentage: "95%" },
    { name: "TypeScript/JavaScript", level: "Expert", percentage: "90%" },
    { name: "React Native", level: "Advanced", percentage: "85%" },
    { name: "Next.js", level: "Expert", percentage: "95%" },
  ],
  ai: [
    { name: "Prompt Engineering", level: "Advanced", percentage: "90%" },
    { name: "RAG System Development", level: "Good", percentage: "75%" },
    { name: "OpenAI GPT (API)", level: "Good", percentage: "75%" },
    { name: "AI Workflow Automation", level: "Good", percentage: "70%" },
  ],
}

const PrintResume = forwardRef<HTMLDivElement>((props, ref) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  useEffect(() => {
    // This ensures the print version is properly rendered before printing
    const handleBeforePrint = () => {
      document.body.classList.add("printing")
    }

    const handleAfterPrint = () => {
      document.body.classList.remove("printing")
    }

    window.addEventListener("beforeprint", handleBeforePrint)
    window.addEventListener("afterprint", handleAfterPrint)

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint)
      window.removeEventListener("afterprint", handleAfterPrint)
    }
  }, [])
  return (
    <div 
      ref={ref} 
      className="print-only hidden" 
      style={{ 
        backgroundColor: isDark ? "#1e293b" : "#ffffff",
        color: isDark ? "#ffffff" : "#000000" 
      }}
    >
      <div className="p-8">
        {/* Header with theme-aware styling */}
        <div 
          style={{
            backgroundColor: '#6d28d9',
            color: 'white',
            padding: '2rem',
            borderRadius: '0.5rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }}
        >
          <div style={{
            position: 'relative',
            width: '8rem',
            height: '8rem',
            borderRadius: '9999px',
            overflow: 'hidden',
            border: '4px solid white'
          }}>
            <Image src="https://storage.googleapis.com/my-bucket-save/1584499772625-1744902196383.jpg" alt="Faisal Aqdas" fill className="object-cover" />
          </div>

          {/* Rest of header content with inline styles */}
          <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', margin: 0 }}>Faisal Aqdas</h1>
            <p style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>Web Developer + LLM Automation Engineer</p>
            
            {/* Contact information */}
            <div style={{ 
              marginTop: '1rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {/* Email */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem'
              }}>
                <Mail size={14} />
                <span>faisalaqdas@gmail.com</span>
              </div>
              
              {/* LinkedIn */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem'
              }}>
                <Linkedin size={14} />
                <span>linkedin.com/in/faisal-aqdas-95b183110</span>
              </div>
              
              {/* GitHub */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem'
              }}>
                <Github size={14} />
                <span>github.com/faisal212</span>
              </div>
              
              {/* Location */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem'
              }}>
                <Globe size={14} />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center" 
              style={{ color: isDark ? "#ffffff" : "#1e293b" }}>
            <User className="text-indigo-600 mr-2" size={24} />
            About Me
          </h2>
          <p style={{ color: isDark ? "#cbd5e1" : "#4b5563" }} className="leading-relaxed">
            I'm a passionate Web & Mobile & AI Automation Developer with a strong foundation in React, Next.js, and
            modern web technologies — now expanding into the exciting world of AI coding, LLM integrations, and Langbase
            automations.
          </p>
          <p style={{ color: isDark ? "#cbd5e1" : "#4b5563" }} className="leading-relaxed mt-3">
            Over the years, I've built scalable, high-performance applications across industries, delivering frontend
            experiences that score 90+ on performance metrics.
          </p>
          <p style={{ color: isDark ? "#cbd5e1" : "#4b5563" }} className="leading-relaxed mt-3">
            Recently, I've started specializing in automated AI workflows using GPTs and Langbase — building intelligent
            agents, mission flows, campaign assistants, and smart onboarding experiences for modern platforms.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Code className="text-indigo-600 mr-2" size={24} />
            Technical Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Development</h3>
              <div className="space-y-4">
                {skills.development.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-indigo-600 text-sm">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                        style={{ width: skill.percentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">AI & Automation</h3>
              <div className="space-y-4">
                {skills.ai.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-indigo-600 text-sm">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                        style={{ width: skill.percentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Languages className="text-indigo-600 mr-2" size={20} />
            Languages
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">Urdu</span>
                <span className="text-indigo-600 text-sm">Native</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full w-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">English</span>
                <span className="text-indigo-600 text-sm">Fluent</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-break-after"></div>

        {/* Experience */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center mt-8">
          <Briefcase className="text-indigo-600 mr-2" size={24} />
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-l-4 border-indigo-500 pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                <span className="text-indigo-600 font-medium">{exp.period}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <div className="text-gray-700">{exp.company}</div>
                <div className="text-gray-500 text-sm">
                  {exp.location} · {exp.duration}
                </div>
              </div>

              {exp.description && <p className="text-gray-600 mb-3">{exp.description}</p>}

              {exp.highlights.length > 0 && (
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-700 mb-1">Key Achievements</h4>
                  <ul className="space-y-1 text-gray-600">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Award className="text-indigo-600 mr-2" size={20} />
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-800 font-medium">Aptech Pakistan</h3>
              <p className="text-gray-600 text-sm">ACCP PRIME (Aptech Certified Computer Professional)</p>
              <p className="text-gray-500 text-sm">Computer Science · Aug 2015 - Aug 2018</p>
            </div>
            <div>
              <h3 className="text-gray-800 font-medium">Aptech Computer Education</h3>
              <p className="text-gray-600 text-sm">Web developer</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Faisal Aqdas - Web Developer & LLM Automation Engineer</p>
        </div>
      </div>
    </div>
  )
})

PrintResume.displayName = "PrintResume"

export default PrintResume
