"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Bank of America",
    role: "Deployment / Breakfix Engineer",
    period: "Enterprise Systems",
    location: "London, UK",
    type: "FinTech · Regulated",
    description: [
      "Supported enterprise desktop systems in a secure, highly regulated financial environment",
      "Diagnosed and resolved complex hardware and software issues, minimising downtime",
      "Led large-scale deployment initiatives supporting hundreds of end-users",
      "Implemented security patches in line with financial industry regulations",
    ],
  },
  {
    company: "Amadeus",
    role: "Field Support Technician (Level 2)",
    period: "Field Support",
    location: "London, UK",
    type: "Global Tech · Travel",
    description: [
      "Delivered secure laptop and mobile device replacements with enterprise applications",
      "Provided escalation support for complex technical issues",
      "Maintained detailed documentation of system configurations",
    ],
  },
  {
    company: "ENI",
    role: "IT Technician / Support",
    period: "IT Support",
    location: "London, UK",
    type: "Energy · Infrastructure",
    description: [
      "Provided frontline support for hardware, software and network connectivity",
      "Proactively monitored enterprise system uptime",
      "Documented technical procedures and troubleshooting guides",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hands-on IT and technology roles in regulated, enterprise environments — giving me real-world context that most graduates lack.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                  </div>
                  <p className="text-cyan-400 font-medium">{exp.role}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs mb-4">
                {exp.type}
              </span>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
