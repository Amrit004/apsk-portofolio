"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Shield, Lock, Wifi, Plane, Kanban, BarChart, Code, Database, Bot, Server, Lightbulb, Rocket, X, Eye, Activity, AlertTriangle } from "lucide-react";

const projects = [
  {
    icon: Activity,
    title: "Enterprise Analytics Dashboard",
    category: "Data Analytics",
    description: "Enterprise-grade analytics platform with real-time KPIs, AI-powered predictions, live user tracking, traffic source analysis, and interactive data visualizations. Features revenue forecasting and regional analytics.",
    tech: ["Next.js", "Recharts", "AI Predictions", "Real-time Data", "Tailwind CSS"],
    github: "https://github.com/Amrit004/enterprise-analytics-dashboard",
    demo: "https://enterprise-analytics-dashboard.vercel.app",
    challenge: "Building a scalable analytics platform that handles real-time data with AI-powered predictions and interactive visualizations.",
    solution: "Implemented WebSocket-ready architecture with custom chart components, AI prediction algorithms using linear regression, and optimized rendering for large datasets.",
    featured: true,
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: AlertTriangle,
    title: "SOC Command Center",
    category: "Cybersecurity",
    description: "Enterprise Security Operations Center dashboard with real-time threat detection, live attack map, incident response, network monitoring, compliance tracking, and AI-powered threat analysis.",
    tech: ["Next.js", "Security Analytics", "Threat Detection", "Compliance", "Real-time"],
    github: "https://github.com/Amrit004/soc-command-center",
    demo: "https://soc-command-center.vercel.app",
    challenge: "Creating an enterprise SOC dashboard with realistic threat visualization and real-time monitoring capabilities.",
    solution: "Built custom animated threat map, integrated compliance frameworks (GDPR, SOC2, ISO27001, HIPAA), and implemented real-time alert system with severity scoring.",
    featured: true,
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "SecureVault",
    category: "Cloud Security",
    description: "Real-time AWS SOC simulation dashboard with live threat feed, animated world threat map, IAM activity charts, and compliance scoring.",
    tech: ["Cloud Security", "AWS Architecture", "IAM & Access Control", "SOC Dashboard", "Vanilla JS"],
    github: "https://github.com/Amrit004/SecureVault",
    demo: "https://securevault.vercel.app",
    challenge: "Simulating real-time threat data and creating an intuitive dashboard for security metrics.",
    solution: "Built a custom data simulation engine with animated world map using vanilla JavaScript and CSS animations for smooth 60fps rendering.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Lock,
    title: "CipherOS",
    category: "Cryptography",
    description: "Browser-based cryptographic toolkit with AES-256 encryption, SHA/MD5 hashing, JWT decoder, password strength analyser using Web Crypto API.",
    tech: ["Web Crypto API", "Vanilla JS", "Security"],
    github: "https://github.com/Amrit004/CipherOS",
    demo: "https://cipheros.vercel.app",
    challenge: "Implementing military-grade encryption entirely in the browser without backend dependencies.",
    solution: "Leveraged the Web Crypto API for secure, performant cryptographic operations entirely client-side.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Wifi,
    title: "NetScan Pro",
    category: "Network Security",
    description: "Nmap/Nessus-style scanner simulation with 4 scan modes and CVE database including Log4Shell and EternalBlue.",
    tech: ["Network Security", "CVE Analysis", "Port Scanning"],
    github: "https://github.com/Amrit004/Netscan-pro",
    demo: "https://netscan-pro.vercel.app",
    challenge: "Creating realistic scanner simulations with accurate CVE data.",
    solution: "Built a comprehensive CVE database and implemented multiple scan algorithms for realistic network analysis.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart,
    title: "DevMetrics",
    category: "GitHub Analytics",
    description: "Real-time GitHub REST API consumer with Canvas-based charts, contribution heatmap, and developer score algorithm.",
    tech: ["GitHub API", "Data Viz", "Canvas"],
    github: "https://github.com/Amrit004/DevMetrics",
    demo: "https://devmetrics.vercel.app",
    challenge: "Visualizing GitHub data with custom charts and scoring algorithms.",
    solution: "Built custom Canvas-based visualizations with a unique developer scoring algorithm.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Plane,
    title: "Wandr",
    category: "AI Travel Planner PWA",
    description: "Installable PWA with client-side AI matching engine, NLP query processing, budget planning and full offline support.",
    tech: ["PWA", "Service Workers", "AI Matching"],
    github: "https://github.com/Amrit004/TravelAgencyPwa",
    demo: "https://wandr.vercel.app",
    challenge: "Building an AI-powered travel planner that works offline.",
    solution: "Implemented Service Workers for full offline capability with IndexedDB for local data persistence.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Kanban,
    title: "CodeFlow",
    category: "Project Management",
    description: "Kanban board with JWT authentication, drag-and-drop columns, multi-project support and activity logging.",
    tech: ["JWT Auth", "Full-Stack", "Drag & Drop"],
    github: "https://github.com/Amrit004/CodeFlow",
    demo: "https://codeflow.vercel.app",
    challenge: "Creating a smooth drag-and-drop experience with real-time updates.",
    solution: "Implemented custom drag-and-drop with HTML5 DnD API and WebSocket-ready architecture.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Bot,
    title: "NeuralStream API",
    category: "AI/ML",
    description: "RESTful API for neural network predictions with real-time processing and Docker containerization.",
    tech: ["Python", "TensorFlow", "Docker", "REST API"],
    github: "https://github.com/Amrit004/NeuralStream-API",
    challenge: "Building a production-ready ML API with Docker.",
    solution: "Created a containerized Flask/FastAPI service with TensorFlow integration for real-time predictions.",
    color: "from-rose-500 to-orange-500",
  },
  {
    icon: Server,
    title: "AI Travel",
    category: "Full-Stack",
    description: "Full-stack travel booking application with user authentication, booking management, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Amrit004/AiTravel",
    challenge: "Building a complete booking platform with payments.",
    solution: "Implemented JWT auth, MongoDB schemas for bookings, and Stripe integration for payments.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Code,
    title: "Mobile App",
    category: "Mobile Development",
    description: "Cross-platform mobile application for task management with offline sync and push notifications.",
    tech: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/Amrit004/MobileApp",
    challenge: "Building a cross-platform app with offline support.",
    solution: "Used Expo with Firebase for backend and implemented offline-first architecture with sync.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Ordering.js",
    category: "Library",
    description: "NPM package for sorting algorithms with visualization and performance benchmarking.",
    tech: ["JavaScript", "Algorithms", "NPM"],
    github: "https://github.com/Amrit004/Ordering.Js",
    challenge: "Creating a performant sorting library with visualization.",
    solution: "Implemented optimized sorting algorithms with O(n log n) complexity and built a visual demo.",
    color: "from-yellow-500 to-amber-500",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Click on any project to see a preview. New: Enterprise Analytics & SOC Command Center - enterprise-grade demos with live data!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`glass-card rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all hover:transform hover:-translate-y-1 cursor-pointer ${
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                  <project.icon className="w-16 h-16 text-white opacity-90" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2">
                      <Eye className="w-4 h-4" /> Quick Preview
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    {project.featured && (
                      <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <span className="text-sm text-slate-500">{project.category}</span>
                  <p className="text-slate-400 mt-3 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-1 rounded-md bg-slate-800 text-slate-400 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Amrit004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 hover:border-cyan-500 transition-colors"
            >
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-48 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center relative`}>
                <selectedProject.icon className="w-20 h-20 text-white opacity-90" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  {selectedProject.featured && (
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <span className="text-slate-400">{selectedProject.category}</span>
                
                <p className="text-slate-300 mt-4">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/50">
                    <Lightbulb className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Challenge</p>
                      <p className="text-sm text-slate-300">{selectedProject.challenge}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/50">
                    <Rocket className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Solution</p>
                      <p className="text-sm text-slate-300">{selectedProject.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
