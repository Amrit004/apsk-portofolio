"use client";

import { motion } from "framer-motion";
import { Code, Cloud, Shield, Database, Smartphone, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    skills: ["Java", "JavaScript (ES6+)", "TypeScript", "Python", "C# (.NET)", "HTML5", "CSS3", "SQL", "REST APIs"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda, IAM)", "Docker", "Linux / Unix", "CI/CD", "Kubernetes", "Windows Server"],
  },
  {
    icon: Shield,
    title: "Security",
    skills: ["Network Security", "IAM & Access Control", "AES-256 Encryption", "JWT Auth", "CVE Analysis", "FinTech Compliance"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQLite", "ER Modelling", "Query Optimisation"],
  },
  {
    icon: Smartphone,
    title: "Web & Mobile",
    skills: ["Progressive Web Apps", "Service Workers", "Android Development", "Responsive Design", "WCAG Accessibility", "Canvas API"],
  },
  {
    icon: Wrench,
    title: "Tools & Frameworks",
    skills: ["Git & GitHub", "Agile / Scrum", "JIRA", "Figma", "Postman", "VS Code", "Vercel", "Node.js", "React", "Express.js"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies I've used across projects, studies, and professional roles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
