"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Open to Work — Summer 2026
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Amritpal</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-400 mb-6">
              Graduate Software Engineer
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-lg">
              Multilingual developer (EN · ES · CA · PA · HI) with enterprise experience at 
              <span className="text-cyan-400"> Bank of America</span>, 
              <span className="text-purple-400"> Amadeus</span> & 
              <span className="text-green-400"> ENI</span>. 
              MSc Advanced CS at QMUL (2026).
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1ZHsoCGm7w2DQfw8XGu648o_2fotxtFd7"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold transition-all"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Amrit004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sharysingh1144@gmail.com"
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-6xl lg:text-7xl font-bold gradient-text mb-2">18</div>
              <div className="text-slate-400 text-lg mb-6">GitHub Repositories</div>
              
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-cyan-400">JavaScript</div>
                  <div className="text-slate-400 text-sm">40%</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-400">TypeScript</div>
                  <div className="text-slate-400 text-sm">25%</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-400">Python</div>
                  <div className="text-slate-400 text-sm">20%</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-yellow-400">Java</div>
                  <div className="text-slate-400 text-sm">15%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-16 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-cyan-400">3</div>
            <div className="text-slate-500 text-sm">Enterprise Companies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">2</div>
            <div className="text-slate-500 text-sm">CS Degrees</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">5</div>
            <div className="text-slate-500 text-sm">Languages Spoken</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
