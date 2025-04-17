"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 to-purple-500 transform md:-translate-x-1/2"></div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-500 transform -translate-x-1/2 flex items-center justify-center z-10">
              <Briefcase size={12} className="text-indigo-500" />
            </div>

            {/* Date badge - mobile only */}
            <div className="md:hidden flex items-center mb-2 ml-8">
              <Badge
                variant="outline"
                className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800"
              >
                <Calendar size={12} className="mr-1" /> {exp.period}
              </Badge>
            </div>

            {/* Content */}
            <div className={`md:w-1/2 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                {/* Date badge - desktop only */}
                <div className="hidden md:flex items-center mb-2 md:justify-end">
                  <Badge
                    variant="outline"
                    className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800"
                  >
                    <Calendar size={12} className="mr-1" /> {exp.period}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {exp.location} · {exp.duration}
                </p>

                {exp.description && <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>}

                {exp.highlights.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">Key Achievements</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
