"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-8 md:py-0">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="relative text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs mb-4"
            >
              <Sparkles className="w-3 h-3" />
              Open to Work
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2 md:mb-3">
              Amritpal Singh Kaur
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Graduate Software Engineer
            </p>
            <p className="text-cyan-400 font-medium mb-4">Cloud & Security-Focused Developer</p>

            <p className="text-purple-400 text-sm md:text-base mb-3 md:mb-4 hidden sm:block">MSc Advanced Computer Science – Queen Mary University of London</p>

            <p className="text-slate-400 text-sm md:text-base mb-4 md:mb-6 max-w-lg mx-auto lg:mx-0 hidden md:block">
              Building secure, scalable solutions with modern JavaScript technologies. Experience in regulated enterprise environments.
            </p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4 md:mt-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/25"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/cv.pdf"
                download="Amritpal-Singh-Kaur-CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold transition-all"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start gap-4 mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://github.com/Amrit004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Github className="w-4 h-4" />GitHub
              </a>
              <a
                href="https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" />LinkedIn
              </a>
              <a
                href="mailto:sharysingh1144@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />Email
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden md:block mt-6 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card rounded-xl p-5 text-center gradient-border">
              <div className="text-5xl font-bold gradient-text mb-1">23</div>
              <div className="text-slate-400 text-sm mb-4">GitHub Repositories</div>
              
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-lg font-bold text-cyan-400">JavaScript</div>
                  <div className="text-slate-500 text-xs">40%</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-lg font-bold text-purple-400">TypeScript</div>
                  <div className="text-slate-500 text-xs">25%</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-lg font-bold text-green-400">Python</div>
                  <div className="text-slate-500 text-xs">20%</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-lg font-bold text-yellow-400">Java</div>
                  <div className="text-slate-500 text-xs">15%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-6 md:mt-10 gap-6 md:gap-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div>
            <div className="text-2xl md:text-3xl font-bold text-cyan-400">3</div>
            <div className="text-slate-500 text-xs">Enterprise</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-purple-400">2</div>
            <div className="text-slate-500 text-xs">CS Degrees</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-green-400">5</div>
            <div className="text-slate-500 text-xs">Languages</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
