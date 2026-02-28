"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Globe, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "Enterprise Experience",
    description: "Worked inside Bank of America, Amadeus & ENI — not just side projects",
  },
  {
    icon: Globe,
    title: "5 Languages Natively",
    description: "EN · ES · CA · PA · HI — rare asset for global or client-facing roles",
  },
  {
    icon: GraduationCap,
    title: "Two CS Degrees",
    description: "BSc 2:1 Staffordshire · MSc Advanced CS at QMUL (2026)",
  },
  {
    icon: Award,
    title: "18 Public Repos",
    description: "Cloud security, cryptography, AI PWAs, full-stack — all on GitHub",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A driven graduate software engineer with real-world enterprise experience and a passion for building impactful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            I am obsessed with building software that actually ships — not just polished demos. Growing up navigating five languages and cultures taught me early that the best engineers are translators: they turn messy real-world problems into clean, working systems that anyone can use.
          </p>
          <p className="text-slate-400 leading-relaxed mb-4">
            That mindset carried into enterprise — inside Bank of America I learned what &quot;production-grade&quot; really means; at Amadeus I saw how milliseconds of latency change global travel bookings; at ENI I understood how regulated industries treat security as a first-class citizen, not an afterthought.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Finishing my MSc in Advanced Computer Science at Queen Mary University of London (2026), I am actively seeking graduate roles in software engineering, cloud/DevOps, data, or cybersecurity — anywhere I can write real code that solves real problems at scale.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Software Engineering", "Cloud / DevOps", "Cybersecurity", "Data / AI"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 rounded-full bg-slate-800 text-cyan-400 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
