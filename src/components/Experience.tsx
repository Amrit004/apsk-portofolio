"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Bank of America",
    role: "Deployment / Breakfix Engineer",
    period: "Current Assignment",
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
    period: "Cover Shifts",
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
    period: "Cover Shifts",
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
    <section id="experience" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-3 gradient-text">
            Work <span className="gradient-text">Experience</span>
          </h2>
          
          <div className="inline-block px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <p className="text-cyan-400 font-medium">
              Employed by Manpower (Zoom IT) – April 2022 - Present
            </p>
            <p className="text-cyan-300 text-sm">
              Placed at: Bank of America (Current), Amadeus & ENI (Cover Shifts)
            </p>
          </div>

          <p className="text-slate-400 max-w-xl mx-auto">
            Hands-on IT and technology roles in regulated, enterprise environments.
          </p>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-5 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-bold text-cyan-100">{exp.company}</h3>
                  </div>
                  <p className="text-cyan-300 text-sm">{exp.role}</p>
                </div>
                <div className="text-right">
                  {exp.period !== "Field Support" && exp.period !== "IT Support" && (
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-slate-400 text-xs mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              <span className="inline-block px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-xs mb-3">
                {exp.type}
              </span>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
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
