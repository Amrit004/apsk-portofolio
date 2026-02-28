"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Globe, Briefcase, Sparkles, Target } from "lucide-react";

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
    title: "23 Public Repos",
    description: "Cloud security, cryptography, AI PWAs, full-stack — all on GitHub",
  },
];

const traits = [
  {
    icon: Target,
    title: "Problem Solver",
    description: "I love breaking down complex problems into elegant solutions",
  },
  {
    icon: Sparkles,
    title: "Security First",
    description: "Built projects around cryptography, cloud security & compliance",
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
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I build software that makes a difference. With experience in regulated environments and a passion for security, I deliver solutions that work at enterprise scale.
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
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {traits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-purple-500/30 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">My Story</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            I am a multilingual Graduate Software Engineer finishing my MSc in Advanced Computer Science at Queen Mary University of London (2026), building on a BSc 2:1 from Staffordshire University. What sets me apart is my enterprise experience — I have worked inside some of the world most demanding IT environments: <span className="text-cyan-600 dark:text-cyan-400">Bank of America</span> (regulated FinTech), <span className="text-purple-600 dark:text-purple-400">Amadeus</span> (global travel tech), and <span className="text-green-600 dark:text-green-400">ENI</span> (energy infrastructure).
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            I have authored 23 public GitHub repositories spanning cloud security dashboards, cryptographic toolkits, AI-powered PWAs, and full-stack applications. I am actively seeking graduate roles in software engineering, cloud/DevOps, data, or cybersecurity where I can contribute immediately while continuing to grow.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Software Engineering", "Cloud / DevOps", "Cybersecurity", "Data / AI"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 text-sm"
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
