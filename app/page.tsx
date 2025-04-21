"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Briefcase,
  Mail,
  Linkedin,
  Globe,
  Award,
  Languages,
  User,
  Code,
  Cpu,
  Terminal,
  ChevronRight,
  Download,
  Moon,
  Sun,
  Github,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import TechStackCanvas from "@/components/tech-stack-canvas"
import ExperienceTimeline from "@/components/experience-timeline"
import SkillRadar from "@/components/skill-radar"
import PrintResume from "@/components/print-resume"

export default function Resume() {
  const [mounted, setMounted] = useState(false)
  const { theme  , setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("profile")
  const resumeRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePrint = () => {
    // Set the document title for the PDF filename
    const originalTitle = document.title
    document.title = "Faisal_Aqdas_Resume"

    // Trigger print dialog
    window.print()

    // Restore original title
    setTimeout(() => {
      document.title = originalTitle
    }, 100)
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div ref={resumeRef} className="max-w-6xl mx-auto">
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4 z-50 no-print">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full bg-white/10 backdrop-blur-sm border-white/20 dark:bg-black/10"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-90 z-0"></div>
          <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10 z-0"></div>

          <div className="relative z-10 p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 z-10"></div>
              <Image src="https://storage.googleapis.com/my-bucket-save/1584499772625-1744902196383.jpg" alt="Faisal Aqdas" fill className="object-cover" priority />
            </motion.div>

            <div className="text-center md:text-left text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Faisal Aqdas</h1>
                <div className="flex items-center justify-center md:justify-start mt-2 space-x-2">
                  <Badge className="bg-white/20 hover:bg-white/30 text-white">Web Developer</Badge>
                  <Badge className="bg-white/20 hover:bg-white/30 text-white">LLM Engineer</Badge>
                  <Badge className="bg-white/20 hover:bg-white/30 text-white">AI Specialist</Badge>
                </div>
                <p className="text-xl mt-3 text-purple-100 max-w-2xl">
                  Building the future with code, AI, and innovative solutions
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-6 flex flex-wrap justify-center md:justify-start gap-3"
              >
                <a
                  href="mailto:faisalaqdas@gmail.com"
                  className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors duration-200"
                >
                  <Mail size={16} />
                  <span>faisalaqdas@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/faisal-aqdas-95b183110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors duration-200"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/faisal212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors duration-200"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <span className="flex items-center gap-1 bg-white/10 px-4 py-2 rounded-full text-sm">
                  <Globe size={16} />
                  <span>Lahore, Pakistan</span>
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2"
            >
              <Button
                onClick={handlePrint}
                className="bg-white text-indigo-600 hover:bg-white/90 font-medium rounded-full px-6"
              >
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Rest of the component remains the same */}
        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Tabs defaultValue="profile" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full p-1 no-print">
                <TabsTrigger
                  value="profile"
                  className="rounded-full data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                >
                  <User className="h-4 w-4 mr-2" /> Profile
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="rounded-full data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                >
                  <Briefcase className="h-4 w-4 mr-2" /> Experience
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="rounded-full data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                >
                  <Code className="h-4 w-4 mr-2" /> Skills
                </TabsTrigger>
                <TabsTrigger
                  value="tech"
                  className="rounded-full data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                >
                  <Cpu className="h-4 w-4 mr-2" /> Tech Stack
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Mobile-Friendly Download Button */}
            <div className="lg:hidden flex justify-center mt-4 mb-6">
              <Button
                onClick={handlePrint}
                className="bg-indigo-600 text-white hover:bg-indigo-700 font-medium rounded-full px-6"
              >
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Button>
            </div>

            {/* Profile Tab */}
            <TabsContent value="profile" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                <Card className="col-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <User className="text-indigo-600 mr-2" size={24} />
                      About Me
                    </h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        I'm a passionate Web & Mobile & AI Automation Developer with a strong foundation in React,
                        Next.js, and modern web technologies — now expanding into the exciting world of AI coding, LLM
                        integrations, and Langbase automations.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                      Over the years, I’ve built high‑performance, scalable products across industries — from crafting custom WordPress themes and immersive Unity 3D AR experiences, to architecting React & Next.js web apps and shipping polished React Native mobile solutions — consistently achieving 90 + performance scores.
                      </p>

                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                          <h3 className="font-semibold text-gray-800 dark:text-white flex items-center">
                            <Code size={18} className="text-indigo-600 mr-2" /> Frontend
                          </h3>
                          <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                            <li className="flex items-center">
                              <ChevronRight size={14} className="text-indigo-500 mr-1" />
                              React, Next.js, React Native
                            </li>
                            <li className="flex items-center">
                              <ChevronRight size={14} className="text-indigo-500 mr-1" />
                              TypeScript, JavaScript, Redux
                            </li>
                            <li className="flex items-center">
                              <ChevronRight size={14} className="text-indigo-500 mr-1" />
                              Tailwind CSS, Styled Components
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                          <h3 className="font-semibold text-gray-800 dark:text-white flex items-center">
                            <Terminal size={18} className="text-indigo-600 mr-2" /> AI & Automation
                          </h3>
                          <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                            <li className="flex items-center">
                              <ChevronRight size={14} className="text-indigo-500 mr-1" />
                              GPT-4, RAG pipelines, Langbase
                            </li>
                            <li className="flex items-center">
                              <ChevronRight size={14} className="text-indigo-500 mr-1" />
                              Prompt Engineering, LLM Integration
                            </li>
                            <li className="flex items-center">
                              <ChevronRight size={14} className="text-indigo-500 mr-1" />
                              Custom AI workflows, Agents
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                        Recently, I've started specializing in automated AI workflows using GPTs and Langbase — building
                        intelligent agents, mission flows, campaign assistants, and smart onboarding experiences for
                        modern platforms.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                        ✨ I'm always eager to grow, experiment, and apply creative code to solve real problems. Whether
                        it's a UI challenge or building a GPT-powered campaign engine — I love turning vision into code.
                      </p>
                    </div>
                  </div>
                </Card>

                <div className="space-y-8">
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                        <Languages className="text-indigo-600 mr-2" size={20} />
                        Languages
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">Urdu</span>
                            <span className="text-indigo-600 dark:text-indigo-400 text-sm">Native</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">English</span>
                            <span className="text-indigo-600 dark:text-indigo-400 text-sm">Fluent</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "90%" }}
                              transition={{ duration: 1, delay: 0.4 }}
                              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                        <Award className="text-indigo-600 mr-2" size={20} />
                        Education
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-gray-800 dark:text-white font-medium">Aptech Pakistan</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            ACCP PRIME (Aptech Certified Computer Professional)
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Computer Science · Aug 2015 - Aug 2018
                          </p>
                        </div>
                        <div>
                          <h3 className="text-gray-800 dark:text-white font-medium">Aptech Computer Education</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">Web developer</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience" className="mt-0">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                      <Briefcase className="text-indigo-600 mr-2" size={24} />
                      Professional Journey
                    </h2>

                    <ExperienceTimeline />
                  </div>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                <Card className="col-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                      <Code className="text-indigo-600 mr-2" size={24} />
                      Technical Expertise
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Development</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700 dark:text-gray-300 font-medium">React/Next.js</span>
                              <span className="text-indigo-600 dark:text-indigo-400 text-sm">Expert</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "90%" }}
                                transition={{ duration: 1 }}
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                              ></motion.div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700 dark:text-gray-300 font-medium">
                                TypeScript/JavaScript
                              </span>
                              <span className="text-indigo-600 dark:text-indigo-400 text-sm">Expert</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "90%" }}
                                transition={{ duration: 1, delay: 0.1 }}
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                              ></motion.div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700 dark:text-gray-300 font-medium">React Native</span>
                              <span className="text-indigo-600 dark:text-indigo-400 text-sm">Advanced</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "85%" }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                              ></motion.div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700 dark:text-gray-300 font-medium">Nextjs</span>
                              <span className="text-indigo-600 dark:text-indigo-400 text-sm">Advance</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                              ></motion.div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">AI & Automation</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700 dark:text-gray-300 font-medium">Prompt Engineering</span>
                              <span className="text-indigo-600 dark:text-indigo-400 text-sm">Advanced</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "90%" }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                              ></motion.div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700 dark:text-gray-300 font-medium">
                                RAG System Development
                              </span>
                              <span className="text-indigo-600 dark:text-indigo-400 text-sm">Good</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                              ></motion.div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700 dark:text-gray-300 font-medium">OpenAI GPT (API)</span>
                              <span className="text-indigo-600 dark:text-indigo-400 text-sm">Good</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                              ></motion.div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700 dark:text-gray-300 font-medium">
                                AI Workflow Automation
                              </span>
                              <span className="text-indigo-600 dark:text-indigo-400 text-sm">Good</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "70%" }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                              ></motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden sm:w-auto sm:max-w-none w-[100vw] max-w-[calc(100vw-32px)]">
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <Award className="text-indigo-600 mr-2" size={20} />
                      Skill Radar
                    </h2>
                    <div className="h-[350px] flex items-center justify-center">
                      <SkillRadar />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Tech Stack Tab */}
            <TabsContent value="tech" className="mt-0">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                      <Cpu className="text-indigo-600 mr-2" size={24} />
                      Technology Ecosystem
                    </h2>

                    <div className="h-[600px] w-full">
                      <TechStackCanvas />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      {/* Print-optimized version (hidden in normal view) */}
      <PrintResume />
    </main>
  )
}
