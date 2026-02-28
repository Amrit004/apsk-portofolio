"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "MSc Advanced Computer Science",
    school: "Queen Mary University of London",
    period: "2025 – 2026",
    status: "In Progress",
    location: "London, UK",
    grade: "Expected: Merit",
    modules: [
      "Cloud Architecture",
      "Machine Learning",
      "Security & Auth",
      "Functional Programming",
      "Data Analytics",
      "Distributed Systems",
    ],
  },
  {
    degree: "BSc (Hons) Computer Science",
    school: "Staffordshire University",
    period: "Sep 2022 – May 2025",
    status: "Completed",
    location: "UK",
    grade: "2:1 Honours",
    modules: [
      "Software Engineering",
      "Cloud Computing",
      "AI & ML",
      "Cybersecurity",
      "Full-Stack Development",
      "Mobile Development",
      "Databases",
      "Networking",
    ],
  },
];

const certifications = [
  "National Diploma in ICT",
  "Certificate in Business",
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Two degrees in computer science from UK universities, with a focus on cloud, AI, and security.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                  </div>
                  <p className="text-cyan-400 font-medium">{edu.school}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
                  {edu.status}
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                  {edu.grade}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-3">Key Modules:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.modules.map((module) => (
                    <span
                      key={module}
                      className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-sm"
                    >
                      {module}
                    </span>
                  ))}
                </div>
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
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-bold">Certifications & Training</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 hover:border-purple-500/50 text-slate-300 text-sm transition-colors"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
