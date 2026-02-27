"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, Lock, Wifi, Plane, Kanban, BarChart, Code, Database, Bot, Server } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "SecureVault",
    category: "Cloud Security",
    description: "Real-time AWS SOC simulation dashboard with live threat feed, animated world threat map, IAM activity charts, and compliance scoring.",
    tech: ["Cloud Security", "AWS Architecture", "IAM & Access Control", "SOC Dashboard", "Vanilla JS"],
    github: "https://github.com/Amrit004/SecureVault",
    featured: true,
  },
  {
    icon: Lock,
    title: "CipherOS",
    category: "Cryptography",
    description: "Browser-based cryptographic toolkit with AES-256 encryption, SHA/MD5 hashing, JWT decoder, password strength analyser using Web Crypto API.",
    tech: ["Web Crypto API", "Vanilla JS", "Security"],
    github: "https://github.com/Amrit004/CipherOS",
  },
  {
    icon: Wifi,
    title: "NetScan Pro",
    category: "Network Security",
    description: "Nmap/Nessus-style scanner simulation with 4 scan modes and CVE database including Log4Shell and EternalBlue.",
    tech: ["Network Security", "CVE Analysis", "Port Scanning"],
    github: "https://github.com/Amrit004/Netscan-pro",
  },
  {
    icon: Plane,
    title: "Wandr",
    category: "AI Travel Planner PWA",
    description: "Installable PWA with client-side AI matching engine, NLP query processing, budget planning and full offline support.",
    tech: ["PWA", "Service Workers", "AI Matching"],
    github: "https://github.com/Amrit004/TravelAgencyPwa",
  },
  {
    icon: Kanban,
    title: "CodeFlow",
    category: "Project Management",
    description: "Kanban board with JWT authentication, drag-and-drop columns, multi-project support and activity logging.",
    tech: ["JWT Auth", "Full-Stack", "Drag & Drop"],
    github: "https://github.com/Amrit004/CodeFlow",
  },
  {
    icon: BarChart,
    title: "DevMetrics",
    category: "GitHub Analytics",
    description: "Real-time GitHub REST API consumer with Canvas-based charts, contribution heatmap, and developer score algorithm.",
    tech: ["GitHub API", "Data Viz", "Canvas"],
    github: "https://github.com/Amrit004/DevMetrics",
  },
  {
    icon: Bot,
    title: "NeuralStream API",
    category: "AI/ML",
    description: "RESTful API for neural network predictions with real-time processing and Docker containerization.",
    tech: ["Python", "TensorFlow", "Docker", "REST API"],
    github: "https://github.com/Amrit004/NeuralStream-API",
  },
  {
    icon: Server,
    title: "AI Travel",
    category: "Full-Stack",
    description: "Full-stack travel booking application with user authentication, booking management, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Amrit004/AiTravel",
  },
  {
    icon: Code,
    title: "Mobile App",
    category: "Mobile Development",
    description: "Cross-platform mobile application for task management with offline sync and push notifications.",
    tech: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/Amrit004/MobileApp",
  },
  {
    icon: Database,
    title: "Ordering.js",
    category: "Library",
    description: "NPM package for sorting algorithms with visualization and performance benchmarking.",
    tech: ["JavaScript", "Algorithms", "NPM"],
    github: "https://github.com/Amrit004/Ordering.Js",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
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
            Selected personal projects spanning cryptography, cloud security, network tooling, AI/ML, and full-stack development.
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
              className={`glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-all hover:transform hover:-translate-y-1 ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                {project.featured && (
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <span className="text-sm text-slate-500">{project.category}</span>
              <p className="text-slate-400 mt-3 mb-4 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-md bg-slate-800 text-slate-400 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
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
  );
}
