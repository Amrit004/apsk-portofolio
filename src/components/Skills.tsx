"use client";

import { motion } from "framer-motion";
import { Code, Cloud, Shield, Database, Smartphone, Wrench, Star } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C# (.NET)", level: 70 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "from-blue-500 to-purple-500",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Linux/Unix", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "Kubernetes", level: 60 },
    ],
  },
  {
    icon: Shield,
    title: "Security",
    color: "from-red-500 to-orange-500",
    skills: [
      { name: "Network Security", level: 85 },
      { name: "IAM & Access Control", level: 90 },
      { name: "Cryptography", level: 80 },
      { name: "Penetration Testing", level: 70 },
      { name: "Compliance (GDPR, SOC2)", level: 75 },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "SQLite", level: 85 },
      { name: "Database Design", level: 75 },
    ],
  },
  {
    icon: Smartphone,
    title: "Web & Mobile",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "PWA Development", level: 85 },
      { name: "React Native", level: 70 },
      { name: "Responsive Design", level: 95 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Frameworks",
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "JIRA/Agile", level: 85 },
      { name: "Figma", level: 70 },
      { name: "Postman", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-100 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Proficiency levels based on projects, work experience, and continuous learning.
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
              className="glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-cyan-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
            <Star className="w-5 h-5 text-yellow-400" />
            Continuous Learning
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "AWS Solutions Architect",
              "CompTIA Security+",
              "Kubernetes Administrator",
              "TensorFlow Developer",
              "Google Cloud Platform"
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-default flex items-center gap-2"
              >
                <Star className="w-3 h-3 text-yellow-400" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
